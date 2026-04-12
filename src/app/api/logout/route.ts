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

    if (user) {
      // Delete active session
      await supabaseAdmin.from("active_sessions").delete().eq("user_id", user.id);
    }

    // Sign out from Supabase
    await supabase.auth.signOut();

    const response = NextResponse.json({ success: true });
    response.cookies.delete("session-token");
    return response;
  } catch {
    return NextResponse.json({ error: "Error al cerrar sesión" }, { status: 500 });
  }
}
