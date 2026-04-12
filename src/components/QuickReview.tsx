"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { COURSE_DATA } from "@/lib/courseData";

export default function QuickReview() {
  const [selectedPhase, setSelectedPhase] = useState<number>(0);

  const summaries = useMemo(() => {
    const result: { id: string; title: string; phaseNum: number; phaseTitle: string; color: string; keyPoints: string[] }[] = [];
    COURSE_DATA.forEach(phase => {
      phase.modules.forEach(mod => {
        mod.lessons.forEach(lesson => {
          result.push({
            id: lesson.id,
            title: lesson.title,
            phaseNum: phase.number,
            phaseTitle: phase.title,
            color: phase.color,
            keyPoints: lesson.keyPoints || [],
          });
        });
      });
    });
    return result;
  }, []);

  const filtered = selectedPhase === 0 ? summaries : summaries.filter(s => s.phaseNum === selectedPhase);

  return (
    <div className="bg-[#1a1a2e] border border-[#2a2a40] rounded-2xl p-6">
      <div className="mb-5">
        <h3 className="text-xl font-bold text-white mb-1">Repaso Rápido</h3>
        <p className="text-sm text-[#a0a0b8]">Resumen clave de cada lección para repasar antes de operar</p>
      </div>

      {/* Phase filter */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2 tabs-scroll">
        <button onClick={() => setSelectedPhase(0)}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition ${
            selectedPhase === 0 ? "bg-blue-600 text-white" : "bg-[#0d0d15] text-[#a0a0b8] hover:text-white"
          }`}>
          Todas
        </button>
        {COURSE_DATA.map(phase => (
          <button key={phase.number} onClick={() => setSelectedPhase(phase.number)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition ${
              selectedPhase === phase.number ? "text-white" : "bg-[#0d0d15] text-[#a0a0b8] hover:text-white"
            }`}
            style={selectedPhase === phase.number ? { background: phase.color } : {}}>
            F{phase.number}
          </button>
        ))}
      </div>

      <p className="text-xs text-[#555] mb-4">{filtered.length} lecciones</p>

      {/* Lesson summaries */}
      <div className="space-y-3 max-h-[600px] overflow-y-auto pr-1">
        {filtered.map(lesson => (
          <div key={lesson.id} className="bg-[#0d0d15] border border-[#2a2a40] rounded-xl p-4 hover:border-blue-500/20 transition">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded" style={{ background: lesson.color + "22", color: lesson.color }}>
                Fase {lesson.phaseNum}
              </span>
              <Link href={`/leccion/${lesson.id}`} className="text-sm font-bold text-white hover:text-blue-400 transition">
                {lesson.title}
              </Link>
            </div>
            {lesson.keyPoints.length > 0 ? (
              <ul className="space-y-1">
                {lesson.keyPoints.map((point, i) => (
                  <li key={i} className="text-xs text-[#a0a0b8] flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5 shrink-0">&#8226;</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-xs text-[#555] italic">Sin puntos clave disponibles</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
