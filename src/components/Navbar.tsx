"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 border-b border-[#2a2a40] bg-[#0c0e1a]/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
          <span className="text-2xl">📈</span>
          <div>
            <h1 className="text-lg font-bold text-white leading-tight">Trading Pro</h1>
            <p className="text-xs text-[#a0a0b8]">El Mejor Curso de Trading del Mundo</p>
          </div>
        </Link>
        <div className="flex items-center gap-2 sm:gap-4">
          <Link href="/"
            className={`text-sm px-3 py-1.5 rounded-lg transition ${pathname === "/" ? "text-white bg-[#1a1a2e]" : "text-[#a0a0b8] hover:text-white"}`}>
            Inicio
          </Link>
          <Link href="/curso"
            className={`text-sm px-3 py-1.5 rounded-lg transition ${pathname.startsWith("/curso") || pathname.startsWith("/fase") || pathname.startsWith("/leccion") ? "text-white bg-[#1a1a2e]" : "text-[#a0a0b8] hover:text-white"}`}>
            Curso
          </Link>
          <Link href="/herramientas"
            className={`text-sm px-3 py-1.5 rounded-lg transition hidden sm:block ${pathname === "/herramientas" ? "text-white bg-[#1a1a2e]" : "text-[#a0a0b8] hover:text-white"}`}>
            Herramientas
          </Link>
          <Link href="/curso"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm px-4 py-2 rounded-lg hover:opacity-90 transition font-medium">
            Empezar Gratis
          </Link>
        </div>
      </div>
    </nav>
  );
}
