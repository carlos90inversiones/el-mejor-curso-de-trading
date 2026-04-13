"use client";
import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function PagoExitosoPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center" style={{ background: "var(--body-bg)" }}><p className="text-[#a0a0b8]">Cargando...</p></div>}>
      <PagoExitosoContent />
    </Suspense>
  );
}

function PagoExitosoContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");

  const handleSetup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return;
    }
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/setup-account", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId, password }),
      });
      const data = await res.json();

      if (data.success) {
        setSuccess(true);
        setEmail(data.email);
      } else {
        setError(data.error || "Error al crear la cuenta");
      }
    } catch {
      setError("Error de conexión. Inténtalo de nuevo.");
    }
    setLoading(false);
  };

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "var(--body-bg)" }}>
        <div className="w-full max-w-md text-center">
          <div className="text-6xl mb-6">🎉</div>
          <h1 className="text-3xl font-extrabold text-white mb-3">¡Cuenta Creada!</h1>
          <p className="text-[#a0a0b8] mb-6">
            Tu cuenta está lista. Ya puedes acceder al curso.
          </p>

          <div className="bg-[#1a1a2e] border border-[#2a2a40] rounded-2xl p-6 mb-6 text-left">
            <h3 className="text-white font-bold text-sm mb-3">Tus credenciales:</h3>
            <div className="space-y-2">
              <div className="bg-[#0d0d15] rounded-xl p-3">
                <p className="text-[#555] text-xs">Email</p>
                <p className="text-white font-mono text-sm">{email}</p>
              </div>
              <div className="bg-[#0d0d15] rounded-xl p-3">
                <p className="text-[#555] text-xs">Contraseña</p>
                <p className="text-white font-mono text-sm">La que acabas de elegir</p>
              </div>
            </div>
          </div>

          <Link href="/login"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg px-10 py-4 rounded-xl font-bold hover:opacity-90 transition w-full">
            Entrar al Curso →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "var(--body-bg)" }}>
      <div className="w-full max-w-md text-center">
        <div className="text-6xl mb-6">✅</div>
        <h1 className="text-3xl font-extrabold text-white mb-3">¡Pago Completado!</h1>
        <p className="text-[#a0a0b8] mb-6">
          Elige una contraseña para acceder al curso. Tu email se obtiene automáticamente del pago.
        </p>

        {error && (
          <div className="bg-red-900/20 border border-red-700/30 rounded-xl p-4 mb-6">
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}

        {!sessionId ? (
          <div className="bg-amber-900/20 border border-amber-700/30 rounded-xl p-4 mb-6">
            <p className="text-amber-400 text-sm">No se encontró la sesión de pago. Si ya pagaste, contacta soporte.</p>
            <Link href="/login" className="text-blue-400 text-sm mt-2 inline-block">Ir al Login</Link>
          </div>
        ) : (
          <form onSubmit={handleSetup} className="bg-[#1a1a2e] border border-[#2a2a40] rounded-2xl p-6 text-left space-y-4">
            <div>
              <label className="text-sm text-[#a0a0b8] block mb-1.5">Elige tu contraseña</label>
              <input type="password" required value={password} onChange={e => setPassword(e.target.value)}
                minLength={6}
                className="w-full bg-[#0d0d15] border border-[#2a2a40] rounded-xl px-4 py-3 text-white placeholder-[#555] outline-none focus:border-blue-500/50 transition"
                placeholder="Mínimo 6 caracteres" />
            </div>

            <div>
              <label className="text-sm text-[#a0a0b8] block mb-1.5">Confirma tu contraseña</label>
              <input type="password" required value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}
                minLength={6}
                className="w-full bg-[#0d0d15] border border-[#2a2a40] rounded-xl px-4 py-3 text-white placeholder-[#555] outline-none focus:border-blue-500/50 transition"
                placeholder="Repite la contraseña" />
            </div>

            <button type="submit" disabled={loading}
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-xl font-bold hover:opacity-90 transition disabled:opacity-50">
              {loading ? "Creando cuenta..." : "Crear Mi Cuenta"}
            </button>

            <p className="text-[#555] text-xs text-center">
              Con esta contraseña y el email de tu pago podrás acceder siempre al curso.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
