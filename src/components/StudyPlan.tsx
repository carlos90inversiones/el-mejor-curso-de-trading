"use client";
import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { COURSE_DATA, getTotalLessons } from "@/lib/courseData";

type PlanDuration = 30 | 60 | 90;

export default function StudyPlan() {
  const [duration, setDuration] = useState<PlanDuration>(60);
  const [completed, setCompleted] = useState<Set<string>>(new Set());

  useEffect(() => {
    try {
      const saved = localStorage.getItem("trading-course-progress");
      if (saved) {
        const data = JSON.parse(saved);
        setCompleted(new Set(data.completed || []));
      }
    } catch {/* */}
    try {
      const savedPlan = localStorage.getItem("study-plan-duration");
      if (savedPlan) setDuration(Number(savedPlan) as PlanDuration);
    } catch {/* */}
  }, []);

  const selectDuration = (d: PlanDuration) => {
    setDuration(d);
    localStorage.setItem("study-plan-duration", String(d));
  };

  const totalLessons = useMemo(() => getTotalLessons(), []);
  const lessonsPerDay = Math.ceil(totalLessons / duration);
  const allLessons = useMemo(() => {
    const arr: { id: string; title: string; phaseNum: number; phaseTitle: string; color: string }[] = [];
    COURSE_DATA.forEach(phase => {
      phase.modules.forEach(mod => {
        mod.lessons.forEach(lesson => {
          arr.push({ id: lesson.id, title: lesson.title, phaseNum: phase.number, phaseTitle: phase.title, color: phase.color });
        });
      });
    });
    return arr;
  }, []);

  // Build weekly schedule
  const weeks = useMemo(() => {
    const w: { week: number; days: { day: number; lessons: typeof allLessons }[] }[] = [];
    let idx = 0;
    const totalDays = duration;
    const totalWeeks = Math.ceil(totalDays / 7);

    for (let wk = 0; wk < totalWeeks; wk++) {
      const days: { day: number; lessons: typeof allLessons }[] = [];
      for (let d = 0; d < 7 && (wk * 7 + d) < totalDays; d++) {
        const dayLessons: typeof allLessons = [];
        for (let l = 0; l < lessonsPerDay && idx < allLessons.length; l++) {
          dayLessons.push(allLessons[idx]);
          idx++;
        }
        if (dayLessons.length > 0) {
          days.push({ day: wk * 7 + d + 1, lessons: dayLessons });
        }
      }
      if (days.length > 0) w.push({ week: wk + 1, days });
    }
    return w;
  }, [duration, allLessons, lessonsPerDay]);

  const completedCount = completed.size;
  const daysCompleted = Math.floor(completedCount / lessonsPerDay);
  const progressPct = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  return (
    <div className="bg-[#1a1a2e] border border-[#2a2a40] rounded-2xl p-6">
      <h3 className="text-xl font-bold text-white mb-1">Plan de Estudio Personalizado</h3>
      <p className="text-sm text-[#a0a0b8] mb-5">Elige tu ritmo y sigue el plan día a día</p>

      {/* Duration selector */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {([30, 60, 90] as PlanDuration[]).map(d => {
          const perDay = Math.ceil(totalLessons / d);
          const hours = Math.round(perDay * 20 / 60 * 10) / 10;
          return (
            <button key={d} onClick={() => selectDuration(d)}
              className={`p-4 rounded-xl text-center transition border ${
                duration === d
                  ? "bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-blue-500/50"
                  : "bg-[#0d0d15] border-[#2a2a40] hover:border-blue-500/30"
              }`}>
              <div className="text-2xl font-bold text-white">{d}</div>
              <div className="text-xs text-[#a0a0b8]">días</div>
              <div className="text-[10px] text-blue-400 mt-1">{perDay} lecc/día</div>
              <div className="text-[10px] text-[#555]">~{hours}h/día</div>
            </button>
          );
        })}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="bg-[#0d0d15] rounded-xl p-3 text-center">
          <div className="text-lg font-bold text-white">{lessonsPerDay}</div>
          <div className="text-[10px] text-[#a0a0b8]">Lecciones/día</div>
        </div>
        <div className="bg-[#0d0d15] rounded-xl p-3 text-center">
          <div className="text-lg font-bold text-green-400">{daysCompleted}</div>
          <div className="text-[10px] text-[#a0a0b8]">Días completados</div>
        </div>
        <div className="bg-[#0d0d15] rounded-xl p-3 text-center">
          <div className="text-lg font-bold text-white">{progressPct}%</div>
          <div className="text-[10px] text-[#a0a0b8]">Progreso total</div>
        </div>
      </div>

      {/* Weekly breakdown - collapsible */}
      <div className="space-y-2 max-h-[500px] overflow-y-auto pr-1">
        {weeks.map(week => {
          const weekLessons = week.days.flatMap(d => d.lessons);
          const weekCompleted = weekLessons.filter(l => completed.has(l.id)).length;
          const weekPct = weekLessons.length > 0 ? Math.round((weekCompleted / weekLessons.length) * 100) : 0;

          return (
            <details key={week.week} className="bg-[#0d0d15] rounded-xl border border-[#2a2a40] group" open={weekPct < 100 && weekPct > 0}>
              <summary className="p-3 cursor-pointer flex items-center justify-between hover:bg-[#12142a] rounded-xl transition">
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-bold px-2 py-1 rounded-lg ${weekPct === 100 ? "bg-green-900/50 text-green-400" : "bg-[#1a1a2e] text-[#a0a0b8]"}`}>
                    Sem {week.week}
                  </span>
                  <span className="text-sm text-white">
                    {weekLessons.length} lecciones
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-1.5 bg-[#1a1a2e] rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full transition-all" style={{ width: `${weekPct}%` }} />
                  </div>
                  <span className="text-xs text-[#a0a0b8]">{weekPct}%</span>
                </div>
              </summary>
              <div className="px-3 pb-3 space-y-1">
                {week.days.map(day => (
                  <div key={day.day} className="flex items-start gap-2 py-1.5">
                    <span className="text-[10px] text-[#555] font-mono w-8 shrink-0 mt-0.5">D{day.day}</span>
                    <div className="flex-1 flex flex-wrap gap-1">
                      {day.lessons.map(lesson => (
                        <Link key={lesson.id} href={`/leccion/${lesson.id}`}
                          className={`text-[10px] px-2 py-0.5 rounded-md transition ${
                            completed.has(lesson.id)
                              ? "bg-green-900/30 text-green-400 line-through opacity-60"
                              : "bg-[#1a1a2e] text-[#a0a0b8] hover:text-white hover:bg-[#222240]"
                          }`}>
                          {lesson.title.length > 30 ? lesson.title.slice(0, 30) + "..." : lesson.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </details>
          );
        })}
      </div>
    </div>
  );
}
