"use client";
import { useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { COURSE_DATA, getTotalLessons, getTotalQuizzes } from "@/lib/courseData";
import { useGamification, XPBar, StatsOverview, BadgesGrid } from "@/components/GamificationSystem";
import { ScrollReveal, GlowCard, AnimatedCounter } from "@/components/Animations";
import ProgressDashboard from "@/components/ProgressDashboard";
import { useBookmarks } from "@/components/BookmarkButton";
import { useProgress } from "@/lib/useProgress";

export default function CursoPage() {
  const progress = useProgress();
  const gamification = useGamification();
  const { bookmarks } = useBookmarks();
  const totalLessons = useMemo(() => getTotalLessons(), []);
  const completedCount = progress.completed.size;
  const progressPercent = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-extrabold text-white mb-2">Tu Curso</h1>
        <p className="text-[#a0a0b8] mb-8">Progreso: {completedCount}/{totalLessons} lecciones ({progressPercent}%)</p>

        {/* Gamification */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 space-y-4">
            <XPBar stats={gamification.stats} />
            <ProgressDashboard
              completed={progress.completed}
              quizScores={progress.quizScores}
              bookmarks={bookmarks}
              onGoToLesson={() => {}}
            />
          </div>
          <div className="space-y-4">
            <StatsOverview stats={gamification.stats} />
            <BadgesGrid stats={gamification.stats} />
          </div>
        </div>

        {/* Phases */}
        <h2 className="text-2xl font-bold text-white mb-6">Fases del Curso</h2>
        <div className="space-y-4">
          {COURSE_DATA.map((phase, idx) => {
            const phaseLessons = phase.modules.reduce((t, m) => t + m.lessons.length, 0);
            const phaseCompleted = phase.modules.reduce((t, m) =>
              t + m.lessons.filter(l => progress.completed.has(l.id)).length, 0);
            const phasePercent = phaseLessons > 0 ? Math.round((phaseCompleted / phaseLessons) * 100) : 0;
            return (
              <ScrollReveal key={phase.id} delay={idx * 0.05}>
                <Link href={`/fase/${phase.id}`}>
                  <div className="rounded-2xl p-6 transition-all duration-300 hover-lift cursor-pointer"
                    style={{ background: `${phase.color}12`, border: `2px solid ${phase.color}44`, borderLeft: `5px solid ${phase.color}` }}>
                    <div className="flex items-start gap-5">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${phase.gradient} flex items-center justify-center text-xl font-bold text-white shrink-0`}>
                        {phase.number}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: phase.color }}>Fase {phase.number}</span>
                          {phasePercent === 100 && <span className="text-xs bg-green-900/50 text-green-400 px-2 py-0.5 rounded-full">Completada</span>}
                        </div>
                        <h3 className="text-lg font-bold text-white mb-1">{phase.title}</h3>
                        <p className="text-sm text-[#a0a0b8] mb-3 line-clamp-2">{phase.description}</p>
                        <div className="flex items-center gap-3">
                          <div className="flex-1 h-2 bg-[#0d0d15] rounded-full overflow-hidden">
                            <div className="h-full rounded-full transition-all" style={{ width: `${phasePercent}%`, background: phase.color }} />
                          </div>
                          <span className="text-xs text-[#a0a0b8]">{phaseCompleted}/{phaseLessons}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </main>
    </div>
  );
}
