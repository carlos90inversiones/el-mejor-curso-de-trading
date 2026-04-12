import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createClient as createAdminSupabase } from "@supabase/supabase-js";

const supabaseAdmin = createAdminSupabase(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST() {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "No autenticado" }, { status: 401 });
    }

    // Generate unique session token
    const sessionToken = crypto.randomUUID();

    // Upsert — replaces any existing session (enforces 1 session per user)
    const { error } = await supabaseAdmin
      .from("active_sessions")
      .upsert({
        user_id: user.id,
        session_token: sessionToken,
        created_at: new Date().toISOString(),
      }, { onConflict: "user_id" });

    if (error) {
      console.error("Session creation error:", error);
      return NextResponse.json({ error: "Error al crear sesión" }, { status: 500 });
    }

    // Set session token cookie
    const response = NextResponse.json({ success: true });
    response.cookies.set("session-token", sessionToken, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: "/",
    });

    return response;
  } catch {
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
