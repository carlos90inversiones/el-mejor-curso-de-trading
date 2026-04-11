import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: "#0c0e1a" }}>
      <div className="text-center px-4">
        <div className="text-8xl mb-6">📉</div>
        <h1 className="text-5xl font-extrabold text-white mb-4">404</h1>
        <h2 className="text-2xl text-[#a0a0b8] mb-6">Pagina no encontrada</h2>
        <p className="text-[#555] mb-8 max-w-md mx-auto">
          Esta pagina no existe. Puede que la URL sea incorrecta o que la pagina haya sido movida.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:opacity-90 transition">
            Ir al Inicio
          </Link>
          <Link href="/curso" className="bg-[#1a1a2e] border border-[#2a2a40] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#222240] transition">
            Ir al Curso
          </Link>
        </div>
      </div>
    </div>
  );
}
