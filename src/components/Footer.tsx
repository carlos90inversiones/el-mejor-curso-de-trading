"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#2a2a40] py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">📈</span>
              <span className="text-white font-bold">Trading Pro</span>
            </div>
            <p className="text-sm text-[#555]">El Mejor Curso de Trading del Mundo. De cero absoluto a trader profesional.</p>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-3">Curso</h4>
            <div className="space-y-2">
              <Link href="/curso" className="text-sm text-[#555] hover:text-[#a0a0b8] transition block">Todas las Fases</Link>
              <Link href="/herramientas" className="text-sm text-[#555] hover:text-[#a0a0b8] transition block">Herramientas</Link>
              <Link href="/fase/fase-1" className="text-sm text-[#555] hover:text-[#a0a0b8] transition block">Empezar Fase 1</Link>
              <Link href="/sobre" className="text-sm text-[#555] hover:text-[#a0a0b8] transition block">Sobre Trading Pro</Link>
              <Link href="/changelog" className="text-sm text-[#555] hover:text-[#a0a0b8] transition block">Changelog</Link>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-3">Contenido</h4>
            <p className="text-sm text-[#555]">88 lecciones | 319 quizzes | 98 diagramas</p>
            <p className="text-sm text-[#555]">15 herramientas | 10 video-lecciones</p>
            <p className="text-sm text-[#555]">102 términos | 72 flashcards</p>
          </div>
        </div>
        <div className="border-t border-[#2a2a40] pt-4 text-center">
          <p className="text-[#444] text-xs">Trading Pro &copy; {new Date().getFullYear()} | El Mejor Curso de Trading del Mundo</p>
        </div>
      </div>
    </footer>
  );
}
