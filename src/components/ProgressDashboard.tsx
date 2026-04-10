"use client";
import { COURSE_DATA } from "@/lib/courseData";

interface ProgressDashboardProps {
  completed: Set<string>;
  quizScores: Record<string, number>;
  bookmarks: Set<string>;
  onGoToLesson: (phaseId: string, moduleId: string, lessonId: string) => void;
}

export default function ProgressDashboard({ completed, quizScores, bookmarks, onGoToLesson }: ProgressDashboardProps) {
  const phases = COURSE_DATA.map(phase => {
    const totalLessons = phase.modules.reduce((t, m) => t + m.lessons.length, 0);
    const completedLessons = phase.modules.reduce((t, m) =>
      t + m.lessons.filter(l => completed.has(l.id)).length, 0);
    const totalQuizzes = phase.modules.reduce((t, m) =>
      t + m.lessons.filter(l => quizScores[l.id] !== undefined).length, 0);
    const avgScore = phase.modules.reduce((scores, m) => {
      m.lessons.forEach(l => { if (quizScores[l.id]) scores.push(quizScores[l.id]); });
      return scores;
    }, [] as number[]);
    const avgQuizScore = avgScore.length > 0 ? Math.round(avgScore.reduce((a, b) => a + b, 0) / avgScore.length) : 0;
    const pct = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

    return { ...phase, totalLessons, completedLessons, totalQuizzes, avgQuizScore, pct };
  });

  // Find bookmarked lessons
  const bookmarkedLessons: { phaseId: string; moduleId: string; lessonId: string; title: string; phaseColor: string; phaseNum: number }[] = [];
  COURSE_DATA.forEach(phase => {
    phase.modules.forEach(mod => {
      mod.lessons.forEach(lesson => {
        if (bookmarks.has(lesson.id)) {
          bookmarkedLessons.push({
            phaseId: phase.id, moduleId: mod.id, lessonId: lesson.id,
            title: lesson.title, phaseColor: phase.color, phaseNum: phase.number,
          });
        }
      });
    });
  });

  // Find next lesson to complete
  let nextLesson: { phaseId: string; moduleId: string; lessonId: string; title: string; phaseNum: number } | null = null;
  for (const phase of COURSE_DATA) {
    for (const mod of phase.modules) {
      for (const lesson of mod.lessons) {
        if (!completed.has(lesson.id) && !nextLesson) {
          nextLesson = { phaseId: phase.id, moduleId: mod.id, lessonId: lesson.id, title: lesson.title, phaseNum: phase.number };
        }
      }
    }
  }

  const totalCompleted = completed.size;
  const totalLessons = COURSE_DATA.reduce((t, p) => t + p.modules.reduce((mt, m) => mt + m.lessons.length, 0), 0);

  return (
    <div className="space-y-6">
      {/* Next Lesson */}
      {nextLesson && (
        <button
          onClick={() => onGoToLesson(nextLesson!.phaseId, nextLesson!.moduleId, nextLesson!.lessonId)}
          className="w-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-5 text-left hover:border-blue-500/60 transition"
        >
          <p className="text-xs text-blue-400 mb-1">Continuar aprendiendo</p>
          <p className="text-white font-bold text-lg">{nextLesson.title}</p>
          <p className="text-sm text-[#a0a0b8]">Fase {nextLesson.phaseNum} | {totalCompleted}/{totalLessons} lecciones completadas</p>
        </button>
      )}

      {/* Phase Progress */}
      <div className="bg-[#1a1a2e] border border-[#2a2a40] rounded-xl p-5">
        <h3 className="text-white font-bold mb-4">Progreso por Fase</h3>
        <div className="space-y-3">
          {phases.map(p => (
            <div key={p.id} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white shrink-0"
                style={{ background: p.color }}>
                {p.number}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-white text-sm font-medium truncate">{p.title}</span>
                  <span className="text-xs text-[#a0a0b8] shrink-0 ml-2">{p.completedLessons}/{p.totalLessons}</span>
                </div>
                <div className="h-2 bg-[#0d0d15] rounded-full overflow-hidden">
                  <div className="h-full rounded-full transition-all duration-500" style={{ width: `${p.pct}%`, background: p.color }} />
                </div>
              </div>
              {p.avgQuizScore > 0 && (
                <span className={`text-xs px-2 py-0.5 rounded-full shrink-0 ${p.avgQuizScore >= 80 ? "bg-green-900/40 text-green-400" : "bg-amber-900/40 text-amber-400"}`}>
                  {p.avgQuizScore}%
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bookmarked Lessons */}
      {bookmarkedLessons.length > 0 && (
        <div className="bg-[#1a1a2e] border border-[#2a2a40] rounded-xl p-5">
          <h3 className="text-white font-bold mb-3 flex items-center gap-2">
            <span className="text-amber-400">★</span> Lecciones Favoritas
          </h3>
          <div className="space-y-2">
            {bookmarkedLessons.map(l => (
              <button key={l.lessonId} onClick={() => onGoToLesson(l.phaseId, l.moduleId, l.lessonId)}
                className="w-full flex items-center gap-2 p-2 rounded-lg text-left hover:bg-[#222240] transition">
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded" style={{ background: l.phaseColor + "22", color: l.phaseColor }}>
                  F{l.phaseNum}
                </span>
                <span className="text-sm text-white truncate">{l.title}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
