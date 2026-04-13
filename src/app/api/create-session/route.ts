import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: NextRequest) {
  try {
    // Get user from Authorization header token
    const authHeader = req.headers.get("authorization");
    const token = authHeader?.replace("Bearer ", "");

    let userId: string | null = null;

    if (token) {
      const { data: { user } } = await supabaseAdmin.auth.getUser(token);
      userId = user?.id || null;
    }

    if (!userId) {
      return NextResponse.json({ error: "No autenticado" }, { status: 401 });
    }

    // Generate unique session token
    const sessionToken = crypto.randomUUID();

    // Upsert — replaces any existing session (enforces 1 session per user)
    await supabaseAdmin
      .from("active_sessions")
      .upsert({
        user_id: userId,
        session_token: sessionToken,
        created_at: new Date().toISOString(),
      }, { onConflict: "user_id" });

    // Set session token cookie
    const response = NextResponse.json({ success: true });
    response.cookies.set("session-token", sessionToken, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
    });

    return response;
  } catch {
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
