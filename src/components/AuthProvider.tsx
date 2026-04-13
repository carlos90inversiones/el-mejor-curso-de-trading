"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { createClient } from "@/lib/supabase/client";
import type { User } from "@supabase/supabase-js";

interface AuthCtx {
  user: User | null;
  loading: boolean;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthCtx>({ user: null, loading: true, logout: async () => {} });

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = createClient();

    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Verify session is still active (anti-sharing check)
  // Only checks periodically, not on first load (to avoid redirect loops)
  useEffect(() => {
    if (!user) return;

    const checkSession = async () => {
      try {
        const res = await fetch("/api/verify-session");
        const data = await res.json();
        if (!data.valid && data.reason === "session_replaced") {
          // Only redirect if we're not already on the login page
          if (!window.location.pathname.startsWith("/login")) {
            window.location.href = "/login?reason=session_replaced";
          }
        }
      } catch {/* */}
    };

    // Don't check immediately — wait 30 seconds after page load
    const timeout = setTimeout(checkSession, 30000);
    const interval = setInterval(checkSession, 5 * 60 * 1000);
    return () => { clearTimeout(timeout); clearInterval(interval); };
  }, [user]);

  const logout = async () => {
    await fetch("/api/logout", { method: "POST" });
    setUser(null);
    window.location.href = "/";
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
