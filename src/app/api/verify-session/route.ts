import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET(req: NextRequest) {
  try {
    const sessionToken = req.cookies.get("session-token")?.value;

    // No session token cookie = user never had anti-sharing set up, that's OK
    if (!sessionToken) {
      return NextResponse.json({ valid: true });
    }

    // Get user from Supabase auth cookie
    const authCookie = req.cookies.getAll().find(c => c.name.startsWith("sb-") && c.name.endsWith("-auth-token"));
    if (!authCookie) {
      return NextResponse.json({ valid: true });
    }

    // Check if session token matches the active one
    const { data: sessions } = await supabaseAdmin
      .from("active_sessions")
      .select("session_token")
      .eq("session_token", sessionToken);

    // If no entry found, session was replaced by another device
    if (!sessions || sessions.length === 0) {
      return NextResponse.json({ valid: false, reason: "session_replaced" });
    }

    return NextResponse.json({ valid: true });
  } catch {
    // On error, don't block the user
    return NextResponse.json({ valid: true });
  }
}
