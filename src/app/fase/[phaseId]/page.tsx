"use client";
import { use } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { COURSE_DATA } from "@/lib/courseData";
import { useProgress } from "@/lib/useProgress";
import CertificateGenerator from "@/components/CertificateGenerator";
import BookmarkButton, { useBookmarks } from "@/components/BookmarkButton";

export default function FasePage({ params }: { params: Promise<{ phaseId: string }> }) {
  const { phaseId } = use(params);
  const progress = useProgress();
  const { bookmarks, toggle: toggleBookmark } = useBookmarks();
  const phase = COURSE_DATA.find(p => p.id === phaseId);

  if (!phase) return <div className="min-h-screen flex items-center justify-center text-[#a0a0b8]">Fase no encontrada</div>;

  const phaseLessons = phase.modules.reduce((t, m) => t + m.lessons.length, 0);
  const phaseCompleted = phase.modules.reduce((t, m) => t + m.lessons.filter(l => progress.completed.has(l.id)).length, 0);
  const pct = phaseLessons > 0 ? Math.round((phaseCompleted / phaseLessons) * 100) : 0;

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-8">
        <Link href="/curso" className="text-[#a0a0b8] hover:text-white mb-6 flex items-center gap-2 transition text-sm">
          <span>&#8592;</span> Volver al Curso
        </Link>

        <div className="mb-8">
          <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: phase.color }}>Fase {phase.number}</span>
          <h1 className="text-3xl font-bold text-white mt-1 mb-2">{phase.title}</h1>
          <p className="text-[#a0a0b8] mb-4">{phase.description}</p>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-1 h-2 bg-[#0d0d15] rounded-full overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${pct}%`, background: phase.color }} />
            </div>
            <span className="text-sm text-[#a0a0b8]">{phaseCompleted}/{phaseLessons}</span>
          </div>
          {pct >= 80 ? (
            <CertificateGenerator phaseName={phase.title} phaseNumber={phase.number} score={pct} date={new Date().toLocaleDateString("es-ES")} color={phase.color} />
          ) : (
            <p className="text-xs text-[#555]">Completa 80%+ para desbloquear el certificado ({pct}% actual)</p>
          )}
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
                    <Link key={lesson.id} href={`/leccion/${lesson.id}`}
                      className="w-full text-left p-4 hover:bg-[#222240] transition flex items-center gap-4 block">
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
                          {quizScore}%
                        </span>
                      )}
                      <BookmarkButton lessonId={lesson.id} bookmarks={bookmarks} toggle={toggleBookmark} />
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
