import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createClient as createAdminSupabase } from "@supabase/supabase-js";

const supabaseAdmin = createAdminSupabase(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET(req: NextRequest) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ valid: false, reason: "not_authenticated" });
    }

    const sessionToken = req.cookies.get("session-token")?.value;

    if (!sessionToken) {
      return NextResponse.json({ valid: false, reason: "no_session_token" });
    }

    // Check if this session token is still the active one
    const { data: session } = await supabaseAdmin
      .from("active_sessions")
      .select("session_token")
      .eq("user_id", user.id)
      .single();

    if (!session || session.session_token !== sessionToken) {
      return NextResponse.json({ valid: false, reason: "session_replaced" });
    }

    return NextResponse.json({ valid: true });
  } catch {
    return NextResponse.json({ valid: false, reason: "error" });
  }
}
