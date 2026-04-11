"use client";
import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { COURSE_DATA, getTotalLessons } from "@/lib/courseData";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [progressPct, setProgressPct] = useState(0);
  const [nextLessonId, setNextLessonId] = useState<string | null>("1-1-1");

  // Read progress from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("trading-course-progress");
      if (saved) {
        const data = JSON.parse(saved);
        const completed = new Set(data.completed || []);
        const total = getTotalLessons();
        setProgressPct(total > 0 ? Math.round((completed.size / total) * 100) : 0);

        // Find next incomplete lesson
        let found = false;
        for (const phase of COURSE_DATA) {
          for (const mod of phase.modules) {
            for (const lesson of mod.lessons) {
              if (!completed.has(lesson.id) && !found) {
                setNextLessonId(lesson.id);
                found = true;
              }
            }
          }
        }
        if (!found) setNextLessonId(null); // All completed
      }
    } catch {/* */}
  }, [pathname]);

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

  const navLinks = [
    { href: "/", label: "Inicio", match: (p: string) => p === "/" },
    { href: "/curso", label: "Curso", match: (p: string) => p.startsWith("/curso") || p.startsWith("/fase") || p.startsWith("/leccion") || p.startsWith("/quiz") },
    { href: "/herramientas", label: "Herramientas", match: (p: string) => p === "/herramientas" },
    { href: "/sobre", label: "Sobre", match: (p: string) => p === "/sobre" },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-[#2a2a40] bg-[#0c0e1a]/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition shrink-0">
            <span className="text-xl sm:text-2xl">📈</span>
            <div className="hidden sm:block">
              <h1 className="text-sm font-bold text-white leading-tight">Trading Pro</h1>
              <p className="text-[10px] text-[#a0a0b8] leading-tight">El Mejor Curso de Trading</p>
            </div>
          </Link>

          {/* Search - Desktop */}
          <div className="hidden md:block relative flex-1 max-w-xs mx-4">
            <input value={searchQuery} onChange={e => { setSearchQuery(e.target.value); setSearchOpen(true); }}
              onFocus={() => setSearchOpen(true)} onBlur={() => setTimeout(() => setSearchOpen(false), 200)}
              placeholder="Buscar lecciones..."
              className="w-full bg-[#1a1a2e] border border-[#2a2a40] rounded-lg pl-8 pr-3 py-1.5 text-sm text-white placeholder-[#555] outline-none focus:border-blue-500/50 transition" />
            <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[#555] text-xs">🔍</span>
            {searchOpen && searchResults.length > 0 && (
              <div className="absolute top-full mt-1 left-0 right-0 bg-[#1a1a2e] border border-[#2a2a40] rounded-lg shadow-2xl shadow-black/50 z-50 max-h-72 overflow-y-auto">
                {searchResults.map(r => (
                  <button key={r.id} onMouseDown={() => { router.push(`/leccion/${r.id}`); setSearchOpen(false); setSearchQuery(""); }}
                    className="w-full text-left p-2.5 hover:bg-[#222240] transition border-b border-[#2a2a40]/50 last:border-0 flex items-center gap-2">
                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded shrink-0" style={{ background: r.color + "22", color: r.color }}>F{r.phaseNum}</span>
                    <span className="text-white text-sm truncate">{r.title}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Desktop nav */}
          <div className="hidden sm:flex items-center gap-1">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href}
                className={`text-xs px-2.5 py-1.5 rounded-lg transition ${link.match(pathname) ? "text-white bg-[#1a1a2e]" : "text-[#a0a0b8] hover:text-white"}`}>
                {link.label}
              </Link>
            ))}
            {/* Progress pill */}
            {progressPct > 0 && (
              <div className="flex items-center gap-1.5 bg-[#1a1a2e] rounded-full px-3 py-1 ml-1">
                <div className="w-16 h-1.5 bg-[#2a2a40] rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all" style={{ width: `${progressPct}%` }} />
                </div>
                <span className="text-[10px] text-[#a0a0b8]">{progressPct}%</span>
              </div>
            )}
            <Link href={nextLessonId ? `/leccion/${nextLessonId}` : "/curso"} className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs px-3 py-1.5 rounded-lg hover:opacity-90 transition font-medium ml-1">
              {nextLessonId ? "Continuar" : "Curso"}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="sm:hidden text-white text-xl p-1">
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden border-t border-[#2a2a40] bg-[#0c0e1a] px-4 py-4 space-y-2 animate-fade">
            {/* Mobile search */}
            <input value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
              placeholder="Buscar lecciones..."
              className="w-full bg-[#1a1a2e] border border-[#2a2a40] rounded-lg px-3 py-2 text-sm text-white placeholder-[#555] outline-none mb-2" />
            {searchQuery.length >= 2 && searchResults.length > 0 && (
              <div className="space-y-1 mb-3">
                {searchResults.slice(0, 5).map(r => (
                  <button key={r.id} onClick={() => { router.push(`/leccion/${r.id}`); setMobileMenuOpen(false); setSearchQuery(""); }}
                    className="w-full text-left p-2 bg-[#1a1a2e] rounded-lg text-sm text-white flex items-center gap-2">
                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded" style={{ background: r.color + "22", color: r.color }}>F{r.phaseNum}</span>
                    <span className="truncate">{r.title}</span>
                  </button>
                ))}
              </div>
            )}
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)}
                className={`block text-sm px-3 py-2.5 rounded-lg transition ${link.match(pathname) ? "text-white bg-[#1a1a2e]" : "text-[#a0a0b8] hover:text-white"}`}>
                {link.label}
              </Link>
            ))}
            {progressPct > 0 && (
              <div className="flex items-center gap-2 px-3 py-2">
                <div className="flex-1 h-2 bg-[#2a2a40] rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" style={{ width: `${progressPct}%` }} />
                </div>
                <span className="text-xs text-[#a0a0b8]">{progressPct}%</span>
              </div>
            )}
            <Link href={nextLessonId ? `/leccion/${nextLessonId}` : "/curso"} onClick={() => setMobileMenuOpen(false)}
              className="block text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm px-4 py-3 rounded-lg font-medium">
              {nextLessonId ? "▶ Continuar Lección" : "Ver Curso"}
            </Link>
          </div>
        )}
      </nav>

      {/* Thin progress bar under navbar */}
      {progressPct > 0 && pathname !== "/" && (
        <div className="h-0.5 bg-[#1a1a2e]">
          <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all" style={{ width: `${progressPct}%` }} />
        </div>
      )}
    </>
  );
}
