"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { COURSE_DATA, getAllLessonIds, getTotalLessons, getTotalQuizzes } from "@/lib/courseData";
import type { Phase, Module, Lesson, Quiz } from "@/lib/courseData";
import PositionCalculator from "@/components/PositionCalculator";
import TradingJournal from "@/components/TradingJournal";
import CandlePractice from "@/components/CandlePractice";
import AdvancedSimulator from "@/components/AdvancedSimulator";
import CertificateGenerator from "@/components/CertificateGenerator";
import { CandlePatternsCheatSheet, RiskManagementCheatSheet, SMCCheatSheet, PropFirmCheatSheet } from "@/components/CheatSheets";
import PracticalProjects from "@/components/PracticalProjects";
import AudioPlayer from "@/components/AudioPlayer";
import LessonNotes from "@/components/LessonNotes";
import SearchBar from "@/components/SearchBar";
import BookmarkButton, { useBookmarks } from "@/components/BookmarkButton";
import ProgressDashboard from "@/components/ProgressDashboard";
import Glossary from "@/components/Glossary";
import { REALISTIC_CHARTS } from "@/components/RealisticCharts";
import Flashcards from "@/components/Flashcards";
import DailyTip from "@/components/DailyTip";
import VideoLesson, { VIDEO_LESSONS } from "@/components/VideoLesson";
import InstructorPresenter, { INSTRUCTOR_CLIPS } from "@/components/InstructorPresenter";
import { DIAGRAMS } from "@/components/CandleDiagrams";
import { useGamification, XPBar, StatsOverview, BadgesGrid, StreakDisplay, LevelUpNotification, BadgeNotification } from "@/components/GamificationSystem";

// ============================================================================
// PROGRESS HOOK
// ============================================================================
function useProgress() {
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [quizScores, setQuizScores] = useState<Record<string, number>>({});

  useEffect(() => {
    try {
      const saved = localStorage.getItem("trading-course-progress");
      if (saved) {
        const data = JSON.parse(saved);
        setCompleted(new Set(data.completed || []));
        setQuizScores(data.quizScores || {});
      }
    } catch {/* ignore */}
  }, []);

  const save = useCallback((c: Set<string>, q: Record<string, number>) => {
    localStorage.setItem("trading-course-progress", JSON.stringify({
      completed: Array.from(c),
      quizScores: q,
    }));
  }, []);

  const markComplete = useCallback((id: string) => {
    setCompleted(prev => {
      const next = new Set(prev);
      next.add(id);
      save(next, quizScores);
      return next;
    });
  }, [quizScores, save]);

  const saveQuizScore = useCallback((id: string, score: number) => {
    setQuizScores(prev => {
      const next = { ...prev, [id]: Math.max(prev[id] || 0, score) };
      save(completed, next);
      return next;
    });
  }, [completed, save]);

  const resetProgress = useCallback(() => {
    setCompleted(new Set());
    setQuizScores({});
    localStorage.removeItem("trading-course-progress");
  }, []);

  return { completed, quizScores, markComplete, saveQuizScore, resetProgress };
}

// ============================================================================
// VIEWS
// ============================================================================
type View =
  | { type: "home" }
  | { type: "phase"; phaseId: string }
  | { type: "lesson"; phaseId: string; moduleId: string; lessonId: string }
  | { type: "quiz"; phaseId: string; moduleId: string; lessonId: string }
  | { type: "tools" };

// ============================================================================
// MAIN APP
// ============================================================================
export default function TradingCourse() {
  const [view, setView] = useState<View>({ type: "home" });
  const progress = useProgress();
  const gamification = useGamification();
  const { bookmarks, toggle: toggleBookmark } = useBookmarks();

  const totalLessons = useMemo(() => getTotalLessons(), []);
  const totalQuizzes = useMemo(() => getTotalQuizzes(), []);
  const allIds = useMemo(() => getAllLessonIds(), []);
  const completedCount = progress.completed.size;
  const progressPercent = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  return (
    <div className="min-h-screen" style={{ background: "#0c0e1a" }}>
      {/* Gamification Notifications */}
      {gamification.showLevelUp && <LevelUpNotification level={gamification.stats.level} />}
      {gamification.showBadge && <BadgeNotification badge={gamification.showBadge} />}
      {/* TOP NAV */}
      <nav className="sticky top-0 z-50 border-b border-[#2a2a40] bg-[#0c0e1a]/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <button onClick={() => setView({ type: "home" })} className="flex items-center gap-3 hover:opacity-80 transition">
            <span className="text-2xl">📈</span>
            <div>
              <h1 className="text-lg font-bold text-white leading-tight">El Mejor Curso de Trading</h1>
              <p className="text-xs text-[#a0a0b8]">De Cero a Experto</p>
            </div>
          </button>
          <div className="flex items-center gap-3">
            <div className="hidden md:block w-64">
              <SearchBar onSelect={(pId, mId, lId) => setView({ type: "lesson", phaseId: pId, moduleId: mId, lessonId: lId })} />
            </div>
            <div className="hidden sm:flex items-center gap-2 bg-[#1a1a2e] rounded-full px-4 py-2">
              <div className="w-32 h-2 bg-[#2a2a40] rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500" style={{ width: `${progressPercent}%` }} />
              </div>
              <span className="text-xs text-[#a0a0b8]">{progressPercent}%</span>
            </div>
            <button
              onClick={() => setView({ type: "tools" })}
              className="bg-gradient-to-r from-green-600 to-emerald-600 text-white text-sm px-4 py-2 rounded-lg hover:opacity-90 transition font-medium"
            >
              Herramientas
            </button>
          </div>
        </div>
      </nav>

      {/* CONTENT */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {view.type === "home" && (
          <HomeView
            setView={setView}
            progress={progress}
            totalLessons={totalLessons}
            completedCount={completedCount}
            progressPercent={progressPercent}
            totalQuizzes={totalQuizzes}
            gamification={gamification}
            bookmarks={bookmarks}
          />
        )}
        {view.type === "phase" && (
          <PhaseView
            phaseId={view.phaseId}
            setView={setView}
            progress={progress}
            bookmarks={bookmarks}
            toggleBookmark={toggleBookmark}
          />
        )}
        {view.type === "lesson" && (
          <LessonView
            phaseId={view.phaseId}
            moduleId={view.moduleId}
            lessonId={view.lessonId}
            setView={setView}
            progress={progress}
            allIds={allIds}
            gamification={gamification}
          />
        )}
        {view.type === "quiz" && (
          <QuizView
            phaseId={view.phaseId}
            moduleId={view.moduleId}
            lessonId={view.lessonId}
            setView={setView}
            progress={progress}
            gamification={gamification}
          />
        )}
        {view.type === "tools" && (
          <ToolsView setView={setView} />
        )}
      </main>
    </div>
  );
}

// ============================================================================
// HOME VIEW
// ============================================================================
function HomeView({
  setView, progress, totalLessons, completedCount, progressPercent, totalQuizzes, gamification, bookmarks
}: {
  setView: (v: View) => void;
  progress: ReturnType<typeof useProgress>;
  totalLessons: number;
  completedCount: number;
  progressPercent: number;
  totalQuizzes: number;
  gamification: ReturnType<typeof useGamification>;
  bookmarks: Set<string>;
}) {
  return (
    <div>
      {/* HERO */}
      <div className="text-center py-12">
        <div className="text-6xl mb-4">📊</div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          El Mejor Curso de Trading<br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Del Mundo</span>
        </h1>
        <p className="text-lg text-[#a0a0b8] max-w-2xl mx-auto mb-8">
          De cero absoluto a trader experto. 7 fases, {totalLessons} lecciones interactivas,
          {totalQuizzes}+ preguntas de quiz, simulador de trading y preparacion para cuentas fondeadas.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
          {[
            { label: "Fases", value: "7", icon: "🎯" },
            { label: "Lecciones", value: String(totalLessons), icon: "📚" },
            { label: "Completadas", value: String(completedCount), icon: "✅" },
            { label: "Progreso", value: `${progressPercent}%`, icon: "📈" },
          ].map(s => (
            <div key={s.label} className="bg-[#1a1a2e] border border-[#2a2a40] rounded-xl p-4 text-center">
              <div className="text-2xl mb-1">{s.icon}</div>
              <div className="text-2xl font-bold text-white">{s.value}</div>
              <div className="text-sm text-[#a0a0b8]">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* INSTRUCTOR WELCOME */}
      <div className="mb-6">
        <InstructorPresenter {...INSTRUCTOR_CLIPS[0]} />
      </div>

      {/* DAILY TIP */}
      <div className="mb-6">
        <DailyTip />
      </div>

      {/* QUICK START GUIDE */}
      {completedCount === 0 && (
        <div className="mb-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-800/30 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-4">Como Empezar</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { step: "1", title: "Empieza por Fase 1", desc: "Aprende los fundamentos desde cero absoluto. No necesitas saber nada.", icon: "📚", color: "#3b82f6" },
              { step: "2", title: "Completa los Quizzes", desc: "Al final de cada leccion, haz el quiz para asegurar que entendiste.", icon: "✅", color: "#10b981" },
              { step: "3", title: "Usa las Herramientas", desc: "Practica con el simulador, calculadora y diario de trading.", icon: "🛠️", color: "#f59e0b" },
              { step: "4", title: "Haz los Proyectos", desc: "Cada fase tiene un proyecto practico guiado paso a paso.", icon: "🎯", color: "#8b5cf6" },
            ].map(s => (
              <div key={s.step} className="bg-[#0d0d15] rounded-xl p-4 border border-[#2a2a40]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-7 h-7 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ background: s.color }}>{s.step}</span>
                  <span className="text-lg">{s.icon}</span>
                </div>
                <h4 className="text-white font-bold text-sm mb-1">{s.title}</h4>
                <p className="text-xs text-[#a0a0b8]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* GAMIFICATION + DASHBOARD */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 space-y-4">
          <XPBar stats={gamification.stats} />
          <ProgressDashboard
            completed={progress.completed}
            quizScores={progress.quizScores}
            bookmarks={bookmarks}
            onGoToLesson={(pId, mId, lId) => setView({ type: "lesson", phaseId: pId, moduleId: mId, lessonId: lId })}
          />
        </div>
        <div className="space-y-4">
          <StatsOverview stats={gamification.stats} />
          <BadgesGrid stats={gamification.stats} />
        </div>
      </div>

      {/* PHASES */}
      <div className="space-y-6">
        {COURSE_DATA.map((phase, idx) => {
          const phaseLessons = phase.modules.reduce((t, m) => t + m.lessons.length, 0);
          const phaseCompleted = phase.modules.reduce((t, m) =>
            t + m.lessons.filter(l => progress.completed.has(l.id)).length, 0);
          const phasePercent = phaseLessons > 0 ? Math.round((phaseCompleted / phaseLessons) * 100) : 0;
          return (
            <button
              key={phase.id}
              onClick={() => setView({ type: "phase", phaseId: phase.id })}
              className="w-full text-left rounded-2xl p-6 transition-all duration-300
                hover:brightness-125 cursor-pointer"
              style={{ background: `${phase.color}15`, border: `2px solid ${phase.color}55`, borderLeft: `5px solid ${phase.color}` }}
            >
              <div className="flex items-start gap-5">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${phase.gradient} flex items-center justify-center text-2xl font-bold text-white shrink-0`}>
                  {phase.number}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: phase.color }}>
                      Fase {phase.number}
                    </span>
                    {phasePercent === 100 && <span className="text-xs bg-green-900/50 text-green-400 px-2 py-0.5 rounded-full">Completada</span>}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{phase.title}</h3>
                  <p className="text-sm text-[#a0a0b8] mb-3">{phase.description}</p>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-2 bg-[#2a2a40] rounded-full overflow-hidden">
                      <div className="h-full rounded-full transition-all duration-500" style={{ width: `${phasePercent}%`, background: phase.color }} />
                    </div>
                    <span className="text-xs text-[#a0a0b8] whitespace-nowrap">{phaseCompleted}/{phaseLessons}</span>
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Reset */}
      <div className="text-center mt-12 mb-8">
        <button
          onClick={() => { if (confirm("Seguro que quieres reiniciar todo tu progreso?")) progress.resetProgress(); }}
          className="text-xs text-[#666] hover:text-red-400 transition"
        >
          Reiniciar progreso
        </button>
      </div>
    </div>
  );
}

// ============================================================================
// PHASE VIEW
// ============================================================================
function PhaseView({
  phaseId, setView, progress, bookmarks, toggleBookmark
}: {
  phaseId: string;
  setView: (v: View) => void;
  progress: ReturnType<typeof useProgress>;
  bookmarks: Set<string>;
  toggleBookmark: (id: string) => void;
}) {
  const phase = COURSE_DATA.find(p => p.id === phaseId);
  if (!phase) return <div className="text-center py-20 text-[#a0a0b8]">Fase no encontrada</div>;

  return (
    <div>
      <button onClick={() => setView({ type: "home" })} className="text-[#a0a0b8] hover:text-white mb-6 flex items-center gap-2 transition">
        <span>&#8592;</span> Volver al Inicio
      </button>

      <div className="mb-8">
        <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: phase.color }}>Fase {phase.number}</span>
        <h2 className="text-3xl font-bold text-white mt-1 mb-2">{phase.title}</h2>
        <p className="text-[#a0a0b8] mb-4">{phase.description}</p>
        {(() => {
          const phaseLessons = phase.modules.reduce((t, m) => t + m.lessons.length, 0);
          const phaseCompleted = phase.modules.reduce((t, m) => t + m.lessons.filter(l => progress.completed.has(l.id)).length, 0);
          const pct = phaseLessons > 0 ? Math.round((phaseCompleted / phaseLessons) * 100) : 0;
          if (pct >= 80) return (
            <CertificateGenerator phaseName={phase.title} phaseNumber={phase.number} score={pct} date={new Date().toLocaleDateString("es-ES")} color={phase.color} />
          );
          return <p className="text-xs text-[#555]">Completa 80%+ para desbloquear el certificado ({pct}% actual)</p>;
        })()}
      </div>

      <div className="space-y-6">
        {phase.modules.map(mod => (
          <div key={mod.id} className="bg-[#1a1a2e] border border-[#2a2a40] rounded-2xl overflow-hidden">
            <div className="p-5 border-b border-[#2a2a40]">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{mod.icon}</span>
                <div>
                  <h3 className="text-lg font-bold text-white">{mod.title}</h3>
                  <p className="text-sm text-[#a0a0b8]">{mod.description}</p>
                </div>
              </div>
            </div>
            <div className="divide-y divide-[#2a2a40]">
              {mod.lessons.map(lesson => {
                const isDone = progress.completed.has(lesson.id);
                const quizScore = progress.quizScores[lesson.id];
                return (
                  <button
                    key={lesson.id}
                    onClick={() => setView({ type: "lesson", phaseId, moduleId: mod.id, lessonId: lesson.id })}
                    className="w-full text-left p-4 hover:bg-[#222240] transition flex items-center gap-4"
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-sm font-bold
                      ${isDone ? "bg-green-600 text-white" : "bg-[#2a2a40] text-[#a0a0b8]"}`}>
                      {isDone ? "✓" : "○"}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-white truncate">{lesson.title}</p>
                      <p className="text-xs text-[#a0a0b8]">{lesson.duration} | {lesson.quiz.length} preguntas</p>
                    </div>
                    {quizScore !== undefined && (
                      <span className={`text-xs px-2 py-1 rounded-full ${quizScore >= 80 ? "bg-green-900/50 text-green-400" : "bg-amber-900/50 text-amber-400"}`}>
                        Quiz: {quizScore}%
                      </span>
                    )}
                    <BookmarkButton lessonId={lesson.id} bookmarks={bookmarks} toggle={toggleBookmark} />
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// LESSON VIEW
// ============================================================================
function LessonView({
  phaseId, moduleId, lessonId, setView, progress, allIds, gamification
}: {
  phaseId: string; moduleId: string; lessonId: string;
  setView: (v: View) => void;
  progress: ReturnType<typeof useProgress>;
  allIds: string[];
  gamification: ReturnType<typeof useGamification>;
}) {
  const phase = COURSE_DATA.find(p => p.id === phaseId);
  const mod = phase?.modules.find(m => m.id === moduleId);
  const lesson = mod?.lessons.find(l => l.id === lessonId);

  useEffect(() => { window.scrollTo(0, 0); }, [lessonId]);

  if (!phase || !mod || !lesson) return <div className="text-center py-20 text-[#a0a0b8]">Leccion no encontrada</div>;

  const currentIdx = allIds.indexOf(lessonId);
  const prevId = currentIdx > 0 ? allIds[currentIdx - 1] : null;
  const nextId = currentIdx < allIds.length - 1 ? allIds[currentIdx + 1] : null;

  const findLessonContext = (id: string) => {
    for (const p of COURSE_DATA) {
      for (const m of p.modules) {
        const l = m.lessons.find(l => l.id === id);
        if (l) return { phaseId: p.id, moduleId: m.id, lessonId: l.id, title: l.title };
      }
    }
    return null;
  };

  const handleComplete = () => {
    if (!progress.completed.has(lessonId)) {
      progress.markComplete(lessonId);
      gamification.onLessonComplete();
    }
  };

  return (
    <div>
      <button onClick={() => setView({ type: "phase", phaseId })} className="text-[#a0a0b8] hover:text-white mb-6 flex items-center gap-2 transition">
        <span>&#8592;</span> Volver a Fase {phase.number}
      </button>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* LESSON CONTENT */}
        <div className="flex-1 min-w-0">
          <div className="bg-[#1a1a2e] border border-[#2a2a40] rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: phase.color }}>Fase {phase.number}</span>
              <span className="text-[#2a2a40]">|</span>
              <span className="text-xs text-[#a0a0b8]">{mod.title}</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">{lesson.title}</h1>
            <p className="text-sm text-[#a0a0b8] mb-6">{lesson.duration}</p>

            {/* Audio Player */}
            <div className="mb-6">
              <AudioPlayer text={lesson.content} title={lesson.title} />
            </div>

            <div className="lesson-content" dangerouslySetInnerHTML={{ __html: lesson.content }} />

            {/* Key Points */}
            <div className="mt-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-800/30 rounded-xl p-5">
              <h3 className="text-lg font-bold text-white mb-3">Puntos Clave de esta Leccion</h3>
              <ul className="space-y-2">
                {lesson.keyPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-[#a0a0b8]">
                    <span className="text-blue-400 mt-0.5">&#10003;</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Practical Exercise */}
            {lesson.practicalExercise && (
              <div className="mt-6 bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-800/30 rounded-xl p-5">
                <h3 className="text-lg font-bold text-white mb-2">Ejercicio Practico</h3>
                <p className="text-[#a0a0b8]">{lesson.practicalExercise}</p>
              </div>
            )}

            {/* Notes */}
            <div className="mt-6">
              <LessonNotes lessonId={lessonId} />
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap gap-3">
              {!progress.completed.has(lessonId) ? (
                <button onClick={handleComplete} className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition">
                  Marcar como Completada
                </button>
              ) : (
                <div className="bg-green-900/30 border border-green-700/50 text-green-400 px-6 py-3 rounded-xl font-semibold">
                  ✓ Leccion Completada
                </div>
              )}
              <button
                onClick={() => setView({ type: "quiz", phaseId, moduleId, lessonId })}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition"
              >
                Hacer Quiz ({lesson.quiz.length} preguntas)
              </button>
            </div>

            {/* Navigation */}
            <div className="mt-8 flex justify-between items-center border-t border-[#2a2a40] pt-6">
              {prevId ? (
                <button
                  onClick={() => {
                    const ctx = findLessonContext(prevId);
                    if (ctx) setView({ type: "lesson", phaseId: ctx.phaseId, moduleId: ctx.moduleId, lessonId: ctx.lessonId });
                  }}
                  className="text-[#a0a0b8] hover:text-white transition text-sm"
                >
                  &#8592; Anterior
                </button>
              ) : <div />}
              {nextId ? (
                <button
                  onClick={() => {
                    const ctx = findLessonContext(nextId);
                    if (ctx) setView({ type: "lesson", phaseId: ctx.phaseId, moduleId: ctx.moduleId, lessonId: ctx.lessonId });
                  }}
                  className="text-[#a0a0b8] hover:text-white transition text-sm"
                >
                  Siguiente &#8594;
                </button>
              ) : <div />}
            </div>
          </div>
        </div>

        {/* SIDEBAR: Table of contents */}
        <div className="w-full lg:w-72 shrink-0">
          <div className="lg:sticky lg:top-20">
            <div className="bg-[#1a1a2e] border border-[#2a2a40] rounded-2xl p-5">
              <h3 className="text-sm font-bold text-white mb-3 uppercase tracking-wider">En este Modulo</h3>
              <div className="space-y-1">
                {mod.lessons.map(l => (
                  <button
                    key={l.id}
                    onClick={() => setView({ type: "lesson", phaseId, moduleId, lessonId: l.id })}
                    className={`w-full text-left text-sm p-2 rounded-lg transition
                      ${l.id === lessonId ? "bg-blue-600/20 text-blue-400" : "text-[#a0a0b8] hover:bg-[#222240] hover:text-white"}`}
                  >
                    <div className="flex items-center gap-2">
                      {progress.completed.has(l.id) ? (
                        <span className="text-green-400 text-xs">✓</span>
                      ) : (
                        <span className="text-[#555] text-xs">○</span>
                      )}
                      <span className="truncate">{l.title}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// QUIZ VIEW
// ============================================================================
function QuizView({
  phaseId, moduleId, lessonId, setView, progress, gamification
}: {
  phaseId: string; moduleId: string; lessonId: string;
  setView: (v: View) => void;
  progress: ReturnType<typeof useProgress>;
  gamification: ReturnType<typeof useGamification>;
}) {
  const phase = COURSE_DATA.find(p => p.id === phaseId);
  const mod = phase?.modules.find(m => m.id === moduleId);
  const lesson = mod?.lessons.find(l => l.id === lessonId);

  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  if (!phase || !mod || !lesson) return <div className="text-center py-20 text-[#a0a0b8]">Quiz no encontrado</div>;

  const quiz = lesson.quiz;
  const q = quiz[currentQ];

  const handleAnswer = (idx: number) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    if (idx === q.correctIndex) setCorrect(prev => prev + 1);
  };

  const handleNext = () => {
    if (currentQ < quiz.length - 1) {
      setCurrentQ(prev => prev + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      const score = Math.round(((correct + (selected === q.correctIndex ? 0 : 0)) / quiz.length) * 100);
      progress.saveQuizScore(lessonId, score);
      if (score >= 70) {
        progress.markComplete(lessonId);
        gamification.onQuizPass(score);
      }
      setFinished(true);
    }
  };

  const finalScore = Math.round((correct / quiz.length) * 100);

  if (finished) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-[#1a1a2e] border border-[#2a2a40] rounded-2xl p-8 text-center">
          <div className="text-6xl mb-4">{finalScore >= 80 ? "🏆" : finalScore >= 60 ? "👍" : "📚"}</div>
          <h2 className="text-3xl font-bold text-white mb-2">
            {finalScore >= 80 ? "Excelente!" : finalScore >= 60 ? "Bien hecho!" : "Sigue estudiando!"}
          </h2>
          <p className="text-[#a0a0b8] mb-6">
            Has acertado {correct} de {quiz.length} preguntas
          </p>
          <div className="text-5xl font-bold mb-6" style={{ color: finalScore >= 80 ? "#10b981" : finalScore >= 60 ? "#f59e0b" : "#ef4444" }}>
            {finalScore}%
          </div>
          {finalScore >= 70 && (
            <p className="text-green-400 mb-6">La leccion ha sido marcada como completada!</p>
          )}
          <div className="flex justify-center gap-3">
            <button
              onClick={() => setView({ type: "lesson", phaseId, moduleId, lessonId })}
              className="bg-[#2a2a40] text-white px-6 py-3 rounded-xl hover:bg-[#333355] transition"
            >
              Volver a la Leccion
            </button>
            <button
              onClick={() => { setCurrentQ(0); setSelected(null); setAnswered(false); setCorrect(0); setFinished(false); }}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-xl hover:opacity-90 transition"
            >
              Repetir Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <button onClick={() => setView({ type: "lesson", phaseId, moduleId, lessonId })} className="text-[#a0a0b8] hover:text-white mb-6 flex items-center gap-2 transition">
        <span>&#8592;</span> Volver a la Leccion
      </button>

      <div className="bg-[#1a1a2e] border border-[#2a2a40] rounded-2xl p-6 md:p-8">
        {/* Progress bar */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 h-2 bg-[#2a2a40] rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full transition-all duration-300"
              style={{ width: `${((currentQ + 1) / quiz.length) * 100}%` }} />
          </div>
          <span className="text-sm text-[#a0a0b8]">{currentQ + 1}/{quiz.length}</span>
        </div>

        <h2 className="text-xl font-bold text-white mb-6">{q.question}</h2>

        <div className="space-y-3 mb-6">
          {q.options.map((opt, idx) => {
            let bg = "bg-[#222240] border-[#2a2a40] hover:border-blue-500/50";
            if (answered) {
              if (idx === q.correctIndex) bg = "bg-green-900/30 border-green-600";
              else if (idx === selected && idx !== q.correctIndex) bg = "bg-red-900/30 border-red-600";
              else bg = "bg-[#222240] border-[#2a2a40] opacity-50";
            } else if (idx === selected) {
              bg = "bg-blue-900/30 border-blue-500";
            }
            return (
              <button
                key={idx}
                onClick={() => handleAnswer(idx)}
                disabled={answered}
                className={`w-full text-left p-4 rounded-xl border transition ${bg}`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#2a2a40] flex items-center justify-center text-sm font-bold text-[#a0a0b8] shrink-0">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="text-white">{opt}</span>
                </div>
              </button>
            );
          })}
        </div>

        {answered && (
          <div className={`p-4 rounded-xl mb-6 ${selected === q.correctIndex ? "bg-green-900/20 border border-green-800/50" : "bg-red-900/20 border border-red-800/50"}`}>
            <p className={`font-semibold mb-1 ${selected === q.correctIndex ? "text-green-400" : "text-red-400"}`}>
              {selected === q.correctIndex ? "Correcto!" : "Incorrecto"}
            </p>
            <p className="text-[#a0a0b8] text-sm">{q.explanation}</p>
          </div>
        )}

        {answered && (
          <button
            onClick={handleNext}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
          >
            {currentQ < quiz.length - 1 ? "Siguiente Pregunta" : "Ver Resultados"}
          </button>
        )}
      </div>
    </div>
  );
}

// ============================================================================
// TOOLS VIEW (Calculator, Journal, Candle Practice, Simulator)
// ============================================================================
function ToolsView({ setView }: { setView: (v: View) => void }) {
  const [tab, setTab] = useState<"simulator" | "calculator" | "journal" | "candles" | "diagrams" | "charts" | "cheatsheets" | "projects" | "glossary" | "flashcards" | "videos">("simulator");

  const tabs = [
    { id: "simulator" as const, label: "Simulador", icon: "📈" },
    { id: "calculator" as const, label: "Calculadora", icon: "🧮" },
    { id: "journal" as const, label: "Diario", icon: "📓" },
    { id: "candles" as const, label: "Practica Velas", icon: "🕯️" },
    { id: "diagrams" as const, label: "Diagramas", icon: "📐" },
    { id: "cheatsheets" as const, label: "Cheat Sheets", icon: "📋" },
    { id: "projects" as const, label: "Proyectos", icon: "🎯" },
    { id: "charts" as const, label: "Graficos", icon: "📊" },
    { id: "glossary" as const, label: "Glosario", icon: "📖" },
    { id: "flashcards" as const, label: "Flashcards", icon: "🃏" },
    { id: "videos" as const, label: "Video-Lecciones", icon: "🎬" },
  ];

  return (
    <div>
      <button onClick={() => setView({ type: "home" })} className="text-[#a0a0b8] hover:text-white mb-6 flex items-center gap-2 transition">
        <span>&#8592;</span> Volver al Inicio
      </button>

      <h2 className="text-2xl font-bold text-white mb-6">Herramientas del Trader</h2>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2 tabs-scroll">
        {tabs.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition
              ${tab === t.id ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white" : "bg-[#1a1a2e] text-[#a0a0b8] hover:text-white border border-[#2a2a40]"}`}>
            <span>{t.icon}</span> {t.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {tab === "simulator" && <AdvancedSimulator />}
      {tab === "calculator" && <PositionCalculator />}
      {tab === "journal" && <TradingJournal />}
      {tab === "candles" && <CandlePractice />}
      {tab === "diagrams" && (
        <div>
          <h3 className="text-xl font-bold text-white mb-6">Diagramas Interactivos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(DIAGRAMS).map(([key, Diagram]) => (
              <Diagram key={key} />
            ))}
          </div>
        </div>
      )}
      {tab === "cheatsheets" && (
        <div>
          <h3 className="text-xl font-bold text-white mb-2">Cheat Sheets Descargables</h3>
          <p className="text-sm text-[#a0a0b8] mb-6">Descarga e imprime estas guias de referencia rapida</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <CandlePatternsCheatSheet />
            <RiskManagementCheatSheet />
            <SMCCheatSheet />
            <PropFirmCheatSheet />
          </div>
        </div>
      )}
      {tab === "projects" && <PracticalProjects />}
      {tab === "charts" && (
        <div>
          <h3 className="text-xl font-bold text-white mb-2">Graficos Realistas Anotados</h3>
          <p className="text-sm text-[#a0a0b8] mb-6">Graficos estilo TradingView con anotaciones profesionales</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {Object.entries(REALISTIC_CHARTS).map(([key, Chart]) => (
              <Chart key={key} />
            ))}
          </div>
        </div>
      )}
      {tab === "glossary" && <Glossary />}
      {tab === "flashcards" && <Flashcards />}
      {tab === "videos" && (
        <div>
          {/* Instructor Clips */}
          <h3 className="text-xl font-bold text-white mb-2">Clases con tu Instructor</h3>
          <p className="text-sm text-[#a0a0b8] mb-6">Explicaciones clave narradas por tu instructor personal</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
            {INSTRUCTOR_CLIPS.map(clip => (
              <InstructorPresenter key={clip.id} {...clip} />
            ))}
          </div>

          {/* Animated Chart Videos */}
          <h3 className="text-xl font-bold text-white mb-2">Video-Lecciones con Graficos Animados</h3>
          <p className="text-sm text-[#a0a0b8] mb-6">Graficos que se dibujan en tiempo real con narracion de voz</p>
          <div className="space-y-8">
            {Object.entries(VIDEO_LESSONS).map(([key, lesson]) => (
              <VideoLesson key={key} {...lesson} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
