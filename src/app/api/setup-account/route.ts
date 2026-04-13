import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: NextRequest) {
  try {
    const { sessionId, password } = await req.json();

    if (!sessionId || !password || password.length < 6) {
      return NextResponse.json({ error: "Sesión y contraseña (mín. 6 caracteres) requeridos" }, { status: 400 });
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
    const supabaseAdmin = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // Verify the Stripe session is real and paid
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      return NextResponse.json({ error: "El pago no se ha completado" }, { status: 400 });
    }

    // Get email from customer
    let email = session.customer_email;

    if (!email && session.customer) {
      const customer = await stripe.customers.retrieve(session.customer as string);
      if ("email" in customer && customer.email) email = customer.email;
    }

    if (!email && session.customer_details?.email) {
      email = session.customer_details.email;
    }

    if (!email) {
      return NextResponse.json({ error: "No se encontró email en el pago" }, { status: 400 });
    }

    // Check if user already exists
    const { data: existingUsers } = await supabaseAdmin.auth.admin.listUsers();
    const existingUser = existingUsers?.users?.find(u => u.email === email);

    let userId: string;

    if (existingUser) {
      // Update password for existing user
      const { error: updateError } = await supabaseAdmin.auth.admin.updateUserById(existingUser.id, {
        password,
      });
      if (updateError) {
        return NextResponse.json({ error: "Error al actualizar contraseña" }, { status: 500 });
      }
      userId = existingUser.id;
    } else {
      // Create new user with chosen password
      const { data: newUser, error: createError } = await supabaseAdmin.auth.admin.createUser({
        email,
        password,
        email_confirm: true,
      });

      if (createError || !newUser.user) {
        return NextResponse.json({ error: createError?.message || "Error al crear cuenta" }, { status: 500 });
      }
      userId = newUser.user.id;
    }

    // Record purchase if not already recorded
    const { data: existingPurchase } = await supabaseAdmin
      .from("purchases")
      .select("id")
      .eq("stripe_session_id", sessionId)
      .single();

    if (!existingPurchase) {
      await supabaseAdmin.from("purchases").insert({
        user_id: userId,
        stripe_session_id: sessionId,
        stripe_customer_id: session.customer as string,
        amount: session.amount_total || 14900,
        currency: session.currency || "eur",
        status: "completed",
      });
    }

    return NextResponse.json({ success: true, email });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("Setup account error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
