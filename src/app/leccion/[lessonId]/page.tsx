"use client";
import { use } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { COURSE_DATA, getAllLessonIds } from "@/lib/courseData";
import { useProgress } from "@/lib/useProgress";
import { useGamification } from "@/components/GamificationSystem";
import AudioPlayer from "@/components/AudioPlayer";
import LessonNotes from "@/components/LessonNotes";
import ShareButtons from "@/components/ShareButtons";
import ReadingProgress from "@/components/ReadingProgress";
import ReadingTime from "@/components/ReadingTime";

function findLesson(lessonId: string) {
  for (const phase of COURSE_DATA) {
    for (const mod of phase.modules) {
      const lesson = mod.lessons.find(l => l.id === lessonId);
      if (lesson) return { phase, mod, lesson };
    }
  }
  return null;
}

export default function LeccionPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = use(params);
  const progress = useProgress();
  const gamification = useGamification();
  const result = findLesson(lessonId);

  if (!result) return <div className="min-h-screen flex items-center justify-center text-[#a0a0b8]">Leccion no encontrada</div>;

  const { phase, mod, lesson } = result;
  const allIds = getAllLessonIds();
  const currentIdx = allIds.indexOf(lessonId);
  const prevId = currentIdx > 0 ? allIds[currentIdx - 1] : null;
  const nextId = currentIdx < allIds.length - 1 ? allIds[currentIdx + 1] : null;

  const handleComplete = () => {
    if (!progress.completed.has(lessonId)) {
      progress.markComplete(lessonId);
      gamification.onLessonComplete();
    }
  };

  return (
    <div className="min-h-screen">
      <ReadingProgress />
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm mb-6 flex-wrap">
          <Link href="/curso" className="text-[#555] hover:text-[#a0a0b8] transition">Curso</Link>
          <span className="text-[#333]">/</span>
          <Link href={`/fase/${phase.id}`} className="hover:text-white transition" style={{ color: phase.color }}>
            Fase {phase.number}
          </Link>
          <span className="text-[#333]">/</span>
          <span className="text-[#a0a0b8]">{mod.title}</span>
          <span className="text-[#333]">/</span>
          <span className="text-white font-medium truncate max-w-[200px]">{lesson.title}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 min-w-0">
            <div className="bg-[#1a1a2e] border border-[#2a2a40] rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: phase.color }}>Fase {phase.number}</span>
                <span className="text-[#2a2a40]">|</span>
                <span className="text-xs text-[#a0a0b8]">{mod.title}</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">{lesson.title}</h1>
              <p className="text-sm text-[#a0a0b8] mb-2">{lesson.duration}</p>
              <ReadingTime content={lesson.content} quizCount={lesson.quiz.length} />

              <div className="mb-6">
                <AudioPlayer text={lesson.content} title={lesson.title} />
              </div>

              <div className="lesson-content" dangerouslySetInnerHTML={{ __html: lesson.content }} />

              <div className="mt-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-800/30 rounded-xl p-5">
                <h3 className="text-lg font-bold text-white mb-3">Puntos Clave</h3>
                <ul className="space-y-2">
                  {lesson.keyPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#a0a0b8]">
                      <span className="text-blue-400 mt-0.5">&#10003;</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {lesson.practicalExercise && (
                <div className="mt-6 bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-800/30 rounded-xl p-5">
                  <h3 className="text-lg font-bold text-white mb-2">Ejercicio Practico</h3>
                  <p className="text-[#a0a0b8]">{lesson.practicalExercise}</p>
                </div>
              )}

              <div className="mt-6">
                <LessonNotes lessonId={lessonId} />
              </div>

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
                <Link href={`/quiz/${lessonId}`}
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition">
                  Hacer Quiz ({lesson.quiz.length} preguntas)
                </Link>
              </div>

              {/* Share */}
              <div className="mt-6">
                <ShareButtons title={lesson.title} lessonId={lessonId} />
              </div>

              <div className="mt-6 flex justify-between items-center border-t border-[#2a2a40] pt-6">
                {prevId ? (
                  <Link href={`/leccion/${prevId}`} className="text-[#a0a0b8] hover:text-white transition text-sm">
                    &#8592; Anterior
                  </Link>
                ) : <div />}
                {nextId ? (
                  <Link href={`/leccion/${nextId}`} className="text-[#a0a0b8] hover:text-white transition text-sm">
                    Siguiente &#8594;
                  </Link>
                ) : <div />}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-72 shrink-0">
            <div className="lg:sticky lg:top-20">
              <div className="bg-[#1a1a2e] border border-[#2a2a40] rounded-2xl p-5">
                <h3 className="text-sm font-bold text-white mb-3 uppercase tracking-wider">En este Modulo</h3>
                <div className="space-y-1">
                  {mod.lessons.map(l => (
                    <Link key={l.id} href={`/leccion/${l.id}`}
                      className={`w-full text-left text-sm p-2 rounded-lg transition block
                        ${l.id === lessonId ? "bg-blue-600/20 text-blue-400" : "text-[#a0a0b8] hover:bg-[#222240] hover:text-white"}`}>
                      <div className="flex items-center gap-2">
                        {progress.completed.has(l.id) ? (
                          <span className="text-green-400 text-xs">✓</span>
                        ) : (
                          <span className="text-[#555] text-xs">○</span>
                        )}
                        <span className="truncate">{l.title}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
