"use client";
import Link from "next/link";

export default function PagoExitosoPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "var(--body-bg)" }}>
      <div className="w-full max-w-md text-center">
        <div className="text-6xl mb-6">🎉</div>
        <h1 className="text-3xl font-extrabold text-white mb-3">¡Pago Completado!</h1>
        <p className="text-[#a0a0b8] mb-6 leading-relaxed">
          Gracias por comprar Trading Pro. Recibirás un email con las instrucciones para acceder al curso.
        </p>

        <div className="bg-[#1a1a2e] border border-[#2a2a40] rounded-2xl p-6 mb-6 text-left">
          <h3 className="text-white font-bold text-sm mb-3">Próximos pasos:</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0">1</span>
              <p className="text-[#a0a0b8] text-sm">Revisa tu email (también la carpeta de spam)</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0">2</span>
              <p className="text-[#a0a0b8] text-sm">Haz clic en el enlace del email para establecer tu contraseña</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0">3</span>
              <p className="text-[#a0a0b8] text-sm">Inicia sesión y empieza a aprender</p>
            </div>
          </div>
        </div>

        <Link href="/login"
          className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg px-10 py-4 rounded-xl font-bold hover:opacity-90 transition">
          Ir al Login →
        </Link>

        <p className="mt-6 text-[#555] text-xs">
          ¿Problemas? Contacta con nosotros en el email de tu recibo de compra.
        </p>
      </div>
    </div>
  );
}
