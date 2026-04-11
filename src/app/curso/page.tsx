"use client";
import { useMemo } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { COURSE_DATA, getTotalLessons, getTotalQuizzes } from "@/lib/courseData";
import { useGamification, XPBar, StatsOverview, BadgesGrid } from "@/components/GamificationSystem";
import { ScrollReveal, GlowCard, AnimatedCounter } from "@/components/Animations";
import ProgressDashboard from "@/components/ProgressDashboard";
import ExportProgress from "@/components/ExportProgress";
import { useBookmarks } from "@/components/BookmarkButton";
import { useProgress } from "@/lib/useProgress";

export default function CursoPage() {
  const router = useRouter();
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
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-extrabold text-white">Tu Curso</h1>
          <ExportProgress completed={progress.completed} quizScores={progress.quizScores} />
        </div>
        <p className="text-[#a0a0b8] mb-6">Progreso: {completedCount}/{totalLessons} lecciones ({progressPercent}%)</p>

        {/* START / CONTINUE BUTTON */}
        {(() => {
          // Find next incomplete lesson
          let nextLesson: { id: string; title: string; phaseNum: number } | null = null;
          for (const phase of COURSE_DATA) {
            for (const mod of phase.modules) {
              for (const lesson of mod.lessons) {
                if (!progress.completed.has(lesson.id) && !nextLesson) {
                  nextLesson = { id: lesson.id, title: lesson.title, phaseNum: phase.number };
                }
              }
            }
          }

          if (completedCount === 0) {
            return (
              <div className="bg-[#1a1a2e] border border-[#2a2a40] rounded-2xl p-6 md:p-8 mb-8">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">👋</div>
                  <h2 className="text-2xl font-bold text-white mb-2">¡Bienvenido a Trading Pro!</h2>
                  <p className="text-[#a0a0b8] max-w-xl mx-auto">Es tu primera vez aquí. No te preocupes, te explicamos cómo funciona todo en 30 segundos.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-[#0d0d15] rounded-xl p-4 text-center">
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mx-auto mb-3">1</div>
                    <h3 className="text-white font-bold text-sm mb-1">Lee la lección</h3>
                    <p className="text-[#555] text-xs">Cada lección tiene texto, imágenes y explicaciones simples. Lee a tu ritmo. También puedes escucharla con el botón de audio.</p>
                  </div>
                  <div className="bg-[#0d0d15] rounded-xl p-4 text-center">
                    <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold mx-auto mb-3">2</div>
                    <h3 className="text-white font-bold text-sm mb-1">Haz el quiz</h3>
                    <p className="text-[#555] text-xs">Al final de cada lección hay un quiz para comprobar que lo entendiste. Si fallas, no pasa nada: puedes repetirlo.</p>
                  </div>
                  <div className="bg-[#0d0d15] rounded-xl p-4 text-center">
                    <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold mx-auto mb-3">3</div>
                    <h3 className="text-white font-bold text-sm mb-1">Marca como completada</h3>
                    <p className="text-[#555] text-xs">Cuando termines, dale al botón verde. Tu progreso se guarda automáticamente. Ganarás XP y desbloquearás logros.</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-800/30 rounded-xl p-4 mb-6">
                  <div className="flex items-start gap-3">
                    <span className="text-xl">💡</span>
                    <div>
                      <p className="text-white text-sm font-medium mb-1">No necesitas saber NADA de trading</p>
                      <p className="text-[#a0a0b8] text-xs">La primera lección te lo explica todo desde cero absoluto. No necesitas conocimientos previos de ningún tipo.</p>
                    </div>
                  </div>
                </div>

                <Link href="/leccion/1-1-1"
                  className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center text-xl py-5 rounded-xl font-bold hover:opacity-90 transition shadow-lg shadow-blue-500/25 hover-lift">
                  🚀 Empezar Mi Primera Lección →
                </Link>
                <p className="text-center text-[#555] text-xs mt-3">Tiempo estimado: 15 minutos. Puedes parar cuando quieras y continuar después.</p>
              </div>
            );
          }

          if (nextLesson && completedCount < totalLessons) {
            return (
              <Link href={`/leccion/${nextLesson.id}`}
                className="block w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white text-center py-4 rounded-2xl font-bold mb-8 hover:opacity-90 transition shadow-lg shadow-green-500/20 hover-lift">
                <div className="text-lg">▶ Continuar Aprendiendo</div>
                <div className="text-sm opacity-80 mt-1">Fase {nextLesson.phaseNum}: {nextLesson.title}</div>
              </Link>
            );
          }

          if (completedCount >= totalLessons) {
            return (
              <div className="bg-gradient-to-r from-amber-900/20 to-yellow-900/20 border border-amber-800/30 text-center py-5 rounded-2xl mb-8">
                <div className="text-3xl mb-2">🏆</div>
                <div className="text-xl font-bold text-white">¡Curso Completado!</div>
                <div className="text-sm text-amber-400 mt-1">Has terminado las {totalLessons} lecciones. Ahora sigue practicando.</div>
              </div>
            );
          }

          return null;
        })()}

        {/* Gamification */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 space-y-4">
            <XPBar stats={gamification.stats} />
            <ProgressDashboard
              completed={progress.completed}
              quizScores={progress.quizScores}
              bookmarks={bookmarks}
              onGoToLesson={(pId, mId, lId) => router.push(`/leccion/${lId}`)}
            />
          </div>
          <div className="space-y-4">
            <StatsOverview stats={gamification.stats} />
            <BadgesGrid stats={gamification.stats} />
          </div>
        </div>

        {/* Phases with modules visible */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Fases del Curso</h2>
          <Link href="/herramientas" className="text-xs text-blue-400 hover:text-blue-300 transition">
            🛠️ Herramientas del Trader →
          </Link>
        </div>
        <div className="space-y-4">
          {COURSE_DATA.map((phase, idx) => {
            const phaseLessons = phase.modules.reduce((t, m) => t + m.lessons.length, 0);
            const phaseCompleted = phase.modules.reduce((t, m) =>
              t + m.lessons.filter(l => progress.completed.has(l.id)).length, 0);
            const phasePercent = phaseLessons > 0 ? Math.round((phaseCompleted / phaseLessons) * 100) : 0;

            // Find next incomplete lesson in this phase
            let nextInPhase: string | null = null;
            for (const mod of phase.modules) {
              for (const lesson of mod.lessons) {
                if (!progress.completed.has(lesson.id) && !nextInPhase) nextInPhase = lesson.id;
              }
            }

            return (
              <ScrollReveal key={phase.id} delay={idx * 0.05}>
                <div className="rounded-2xl overflow-hidden transition-all duration-300"
                  style={{ border: `2px solid ${phase.color}33`, borderLeft: `5px solid ${phase.color}` }}>
                  {/* Phase header - clickable */}
                  <Link href={`/fase/${phase.id}`}
                    className="block p-5 hover:bg-white/[0.02] transition" style={{ background: `${phase.color}08` }}>
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${phase.gradient} flex items-center justify-center text-lg font-bold text-white shrink-0`}>
                        {phase.number}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: phase.color }}>Fase {phase.number}</span>
                          {phasePercent === 100 && <span className="text-xs bg-green-900/50 text-green-400 px-2 py-0.5 rounded-full">✓ Completada</span>}
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">{phase.title}</h3>
                        <div className="flex items-center gap-3">
                          <div className="flex-1 h-2 bg-[#0d0d15] rounded-full overflow-hidden">
                            <div className="h-full rounded-full transition-all" style={{ width: `${phasePercent}%`, background: phase.color }} />
                          </div>
                          <span className="text-xs text-[#a0a0b8]">{phaseCompleted}/{phaseLessons}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                  {/* Modules preview */}
                  <div className="px-5 pb-4 space-y-1">
                    {phase.modules.map(mod => (
                      <div key={mod.id} className="flex items-center gap-2 text-xs text-[#555]">
                        <span>{mod.icon}</span>
                        <span className="text-[#a0a0b8]">{mod.title}</span>
                        <span>·</span>
                        <span>{mod.lessons.length} lecciones</span>
                        {mod.lessons.every(l => progress.completed.has(l.id)) && <span className="text-green-400">✓</span>}
                      </div>
                    ))}
                    {nextInPhase && phasePercent < 100 && (
                      <Link href={`/leccion/${nextInPhase}`}
                        className="flex items-center gap-2 text-xs text-blue-400 hover:text-blue-300 mt-2 transition">
                        <span>▶</span> Continuar desde aquí
                      </Link>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}
