"use client";
import { useState, useMemo } from "react";
import { COURSE_DATA } from "@/lib/courseData";

interface SearchResult {
  lessonId: string;
  lessonTitle: string;
  moduleTitle: string;
  phaseId: string;
  phaseNumber: number;
  phaseColor: string;
  moduleId: string;
  matchType: "title" | "content" | "keypoint";
  snippet: string;
}

export default function SearchBar({ onSelect }: { onSelect: (phaseId: string, moduleId: string, lessonId: string) => void }) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const results = useMemo(() => {
    if (query.length < 2) return [];
    const q = query.toLowerCase();
    const found: SearchResult[] = [];

    COURSE_DATA.forEach(phase => {
      phase.modules.forEach(mod => {
        mod.lessons.forEach(lesson => {
          // Search in title
          if (lesson.title.toLowerCase().includes(q)) {
            found.push({
              lessonId: lesson.id, lessonTitle: lesson.title, moduleTitle: mod.title,
              phaseId: phase.id, phaseNumber: phase.number, phaseColor: phase.color, moduleId: mod.id,
              matchType: "title", snippet: lesson.title,
            });
            return;
          }
          // Search in key points
          const kp = lesson.keyPoints.find(k => k.toLowerCase().includes(q));
          if (kp) {
            found.push({
              lessonId: lesson.id, lessonTitle: lesson.title, moduleTitle: mod.title,
              phaseId: phase.id, phaseNumber: phase.number, phaseColor: phase.color, moduleId: mod.id,
              matchType: "keypoint", snippet: kp,
            });
            return;
          }
          // Search in content (simplified)
          const cleanContent = lesson.content.replace(/<[^>]*>/g, " ").toLowerCase();
          const idx = cleanContent.indexOf(q);
          if (idx !== -1) {
            const start = Math.max(0, idx - 40);
            const end = Math.min(cleanContent.length, idx + q.length + 40);
            const snippet = (start > 0 ? "..." : "") + cleanContent.slice(start, end).trim() + (end < cleanContent.length ? "..." : "");
            found.push({
              lessonId: lesson.id, lessonTitle: lesson.title, moduleTitle: mod.title,
              phaseId: phase.id, phaseNumber: phase.number, phaseColor: phase.color, moduleId: mod.id,
              matchType: "content", snippet,
            });
          }
        });
      });
    });

    return found.slice(0, 10);
  }, [query]);

  return (
    <div className="relative">
      <div className="relative">
        <input
          value={query}
          onChange={e => { setQuery(e.target.value); setIsOpen(true); }}
          onFocus={() => setIsOpen(true)}
          placeholder="Buscar lecciones, conceptos..."
          className="w-full bg-[#1a1a2e] border border-[#2a2a40] rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-[#555] outline-none focus:border-blue-500/50 transition"
        />
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#555]">🔍</span>
        {query && (
          <button onClick={() => { setQuery(""); setIsOpen(false); }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#555] hover:text-white text-xs">
            ✕
          </button>
        )}
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full mt-2 left-0 right-0 bg-[#1a1a2e] border border-[#2a2a40] rounded-xl shadow-2xl shadow-black/50 z-50 max-h-96 overflow-y-auto">
          {results.map((r, i) => (
            <button key={i} onClick={() => { onSelect(r.phaseId, r.moduleId, r.lessonId); setIsOpen(false); setQuery(""); }}
              className="w-full text-left p-3 hover:bg-[#222240] transition border-b border-[#2a2a40] last:border-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded" style={{ background: r.phaseColor + "22", color: r.phaseColor }}>
                  F{r.phaseNumber}
                </span>
                <span className="text-white text-sm font-medium truncate">{r.lessonTitle}</span>
              </div>
              <p className="text-xs text-[#777] truncate">{r.snippet}</p>
            </button>
          ))}
        </div>
      )}

      {isOpen && query.length >= 2 && results.length === 0 && (
        <div className="absolute top-full mt-2 left-0 right-0 bg-[#1a1a2e] border border-[#2a2a40] rounded-xl shadow-2xl p-4 z-50 text-center">
          <p className="text-[#555] text-sm">No se encontraron resultados para "{query}"</p>
        </div>
      )}
    </div>
  );
}
