"use client";
import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center" style={{ background: "var(--body-bg)" }}><p className="text-[#a0a0b8]">Cargando...</p></div>}>
      <LoginForm />
    </Suspense>
  );
}

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/curso";
  const reason = searchParams.get("reason");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [mode, setMode] = useState<"login" | "reset">("login");
  const [resetSent, setResetSent] = useState(false);

  const supabase = createClient();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error: authError } = await supabase.auth.signInWithPassword({ email, password });

    if (authError) {
      setError("Email o contraseña incorrectos");
      setLoading(false);
      return;
    }

    // Create session token (enforces 1 session per user)
    await fetch("/api/create-session", { method: "POST" });

    router.push(redirect);
  };

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/login`,
    });

    if (resetError) {
      setError("Error al enviar el email de recuperación");
    } else {
      setResetSent(true);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "var(--body-bg)" }}>
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <span className="text-3xl">📈</span>
            <span className="text-xl font-bold text-white">Trading Pro</span>
          </Link>
          <h1 className="text-2xl font-extrabold text-white mb-2">
            {mode === "login" ? "Acceder al Curso" : "Recuperar Contraseña"}
          </h1>
          <p className="text-sm text-[#a0a0b8]">
            {mode === "login" ? "Introduce tus credenciales" : "Te enviaremos un email para restablecer tu contraseña"}
          </p>
        </div>

        {reason === "session_replaced" && (
          <div className="bg-amber-900/20 border border-amber-700/30 rounded-xl p-4 mb-6 text-center">
            <p className="text-amber-400 text-sm font-medium">Tu sesión fue cerrada</p>
            <p className="text-amber-400/70 text-xs mt-1">Alguien inició sesión con tu cuenta desde otro dispositivo</p>
          </div>
        )}

        {error && (
          <div className="bg-red-900/20 border border-red-700/30 rounded-xl p-4 mb-6 text-center">
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}

        {resetSent ? (
          <div className="bg-green-900/20 border border-green-700/30 rounded-xl p-6 text-center">
            <div className="text-3xl mb-3">✉️</div>
            <p className="text-green-400 font-bold mb-2">Email enviado</p>
            <p className="text-green-400/70 text-sm">Revisa tu bandeja de entrada para restablecer tu contraseña</p>
            <button onClick={() => { setMode("login"); setResetSent(false); }}
              className="mt-4 text-sm text-blue-400 hover:text-blue-300 transition">
              Volver al login
            </button>
          </div>
        ) : (
          <form onSubmit={mode === "login" ? handleLogin : handleReset}
            className="bg-[#1a1a2e] border border-[#2a2a40] rounded-2xl p-6 space-y-4">

            <div>
              <label className="text-sm text-[#a0a0b8] block mb-1.5">Email</label>
              <input type="email" required value={email} onChange={e => setEmail(e.target.value)}
                className="w-full bg-[#0d0d15] border border-[#2a2a40] rounded-xl px-4 py-3 text-white placeholder-[#555] outline-none focus:border-blue-500/50 transition"
                placeholder="tu@email.com" />
            </div>

            {mode === "login" && (
              <div>
                <label className="text-sm text-[#a0a0b8] block mb-1.5">Contraseña</label>
                <input type="password" required value={password} onChange={e => setPassword(e.target.value)}
                  className="w-full bg-[#0d0d15] border border-[#2a2a40] rounded-xl px-4 py-3 text-white placeholder-[#555] outline-none focus:border-blue-500/50 transition"
                  placeholder="Tu contraseña" />
              </div>
            )}

            <button type="submit" disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-bold hover:opacity-90 transition disabled:opacity-50">
              {loading ? "Cargando..." : mode === "login" ? "Entrar" : "Enviar Email"}
            </button>

            <div className="flex justify-between text-xs">
              {mode === "login" ? (
                <button type="button" onClick={() => setMode("reset")} className="text-blue-400 hover:text-blue-300 transition">
                  ¿Olvidaste tu contraseña?
                </button>
              ) : (
                <button type="button" onClick={() => setMode("login")} className="text-blue-400 hover:text-blue-300 transition">
                  Volver al login
                </button>
              )}
            </div>
          </form>
        )}

        <div className="text-center mt-6">
          <p className="text-[#555] text-xs">¿No tienes cuenta?</p>
          <Link href="/#comprar" className="text-blue-400 hover:text-blue-300 text-sm font-medium transition">
            Comprar el Curso — 149€
          </Link>
        </div>

        <div className="text-center mt-8">
          <Link href="/" className="text-[#555] text-xs hover:text-[#a0a0b8] transition">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
