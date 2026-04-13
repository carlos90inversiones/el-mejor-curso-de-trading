import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const body = await req.text();
  const sig = req.headers.get("stripe-signature")!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    // Get email from session or from the Stripe customer
    let email = session.customer_email;

    if (!email && session.customer) {
      try {
        const customer = await stripe.customers.retrieve(session.customer as string);
        if ('email' in customer && customer.email) {
          email = customer.email;
        }
      } catch (e) {
        console.error("Error fetching customer:", e);
      }
    }

    // Last resort: get from customer_details
    if (!email && session.customer_details?.email) {
      email = session.customer_details.email;
    }

    if (!email) {
      console.error("No email found in session:", session.id);
      return NextResponse.json({ error: "No email found" }, { status: 400 });
    }

    try {
      // Check if user already exists
      const { data: existingUsers } = await supabaseAdmin.auth.admin.listUsers();
      const existingUser = existingUsers?.users?.find(u => u.email === email);

      let userId: string;

      if (existingUser) {
        userId = existingUser.id;
      } else {
        // Create new user with random password
        const tempPassword = crypto.randomUUID() + "Aa1!";
        const { data: newUser, error: createError } = await supabaseAdmin.auth.admin.createUser({
          email,
          password: tempPassword,
          email_confirm: true,
        });

        if (createError || !newUser.user) {
          console.error("Error creating user:", createError);
          return NextResponse.json({ error: "User creation failed" }, { status: 500 });
        }

        userId = newUser.user.id;

        // Send password reset email so user can set their own password
        const { data: linkData } = await supabaseAdmin.auth.admin.generateLink({
          type: "recovery",
          email,
          options: {
            redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || "https://marsof.vercel.app"}/login`,
          },
        });

        console.log("Recovery link generated for:", email, linkData?.properties?.action_link ? "OK" : "FAILED");
      }

      // Record the purchase
      const { error: insertError } = await supabaseAdmin.from("purchases").insert({
        user_id: userId,
        stripe_session_id: session.id,
        stripe_customer_id: session.customer as string,
        amount: session.amount_total || 14900,
        currency: session.currency || "eur",
        status: "completed",
      });

      if (insertError) {
        console.error("Error inserting purchase:", insertError);
      }

      console.log("Webhook processed successfully for:", email);

    } catch (err) {
      console.error("Error processing webhook:", err);
      return NextResponse.json({ error: "Processing failed" }, { status: 500 });
    }
  }

  return NextResponse.json({ received: true });
}
