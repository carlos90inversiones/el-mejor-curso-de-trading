"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { COURSE_DATA } from "@/lib/courseData";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  const searchResults = useMemo(() => {
    if (searchQuery.length < 2) return [];
    const q = searchQuery.toLowerCase();
    const found: { id: string; title: string; phaseNum: number; color: string }[] = [];
    COURSE_DATA.forEach(phase => {
      phase.modules.forEach(mod => {
        mod.lessons.forEach(lesson => {
          if (lesson.title.toLowerCase().includes(q) || lesson.keyPoints.some(k => k.toLowerCase().includes(q))) {
            found.push({ id: lesson.id, title: lesson.title, phaseNum: phase.number, color: phase.color });
          }
        });
      });
    });
    return found.slice(0, 8);
  }, [searchQuery]);

  return (
    <nav className="sticky top-0 z-50 border-b border-[#2a2a40] bg-[#0c0e1a]/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition shrink-0">
          <span className="text-2xl">📈</span>
          <div className="hidden sm:block">
            <h1 className="text-base font-bold text-white leading-tight">Trading Pro</h1>
            <p className="text-[10px] text-[#a0a0b8]">El Mejor Curso de Trading del Mundo</p>
          </div>
        </Link>

        {/* Search - Desktop */}
        <div className="hidden md:block relative flex-1 max-w-xs mx-4">
          <input value={searchQuery} onChange={e => { setSearchQuery(e.target.value); setSearchOpen(true); }}
            onFocus={() => setSearchOpen(true)}
            placeholder="Buscar lecciones..."
            className="w-full bg-[#1a1a2e] border border-[#2a2a40] rounded-lg pl-8 pr-3 py-1.5 text-sm text-white placeholder-[#555] outline-none focus:border-blue-500/50 transition" />
          <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[#555] text-xs">🔍</span>
          {searchOpen && searchResults.length > 0 && (
            <div className="absolute top-full mt-1 left-0 right-0 bg-[#1a1a2e] border border-[#2a2a40] rounded-lg shadow-2xl shadow-black/50 z-50 max-h-72 overflow-y-auto">
              {searchResults.map(r => (
                <button key={r.id} onClick={() => { router.push(`/leccion/${r.id}`); setSearchOpen(false); setSearchQuery(""); }}
                  className="w-full text-left p-2.5 hover:bg-[#222240] transition border-b border-[#2a2a40]/50 last:border-0 flex items-center gap-2">
                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded" style={{ background: r.color + "22", color: r.color }}>F{r.phaseNum}</span>
                  <span className="text-white text-sm truncate">{r.title}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center gap-1 sm:gap-3">
          <Link href="/"
            className={`text-xs sm:text-sm px-2 sm:px-3 py-1.5 rounded-lg transition ${pathname === "/" ? "text-white bg-[#1a1a2e]" : "text-[#a0a0b8] hover:text-white"}`}>
            Inicio
          </Link>
          <Link href="/curso"
            className={`text-xs sm:text-sm px-2 sm:px-3 py-1.5 rounded-lg transition ${pathname.startsWith("/curso") || pathname.startsWith("/fase") || pathname.startsWith("/leccion") || pathname.startsWith("/quiz") ? "text-white bg-[#1a1a2e]" : "text-[#a0a0b8] hover:text-white"}`}>
            Curso
          </Link>
          <Link href="/herramientas"
            className={`text-xs sm:text-sm px-2 sm:px-3 py-1.5 rounded-lg transition hidden sm:block ${pathname === "/herramientas" ? "text-white bg-[#1a1a2e]" : "text-[#a0a0b8] hover:text-white"}`}>
            Herramientas
          </Link>
          <Link href="/curso"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-lg hover:opacity-90 transition font-medium">
            Empezar
          </Link>
        </div>
      </div>
    </nav>
  );
}
