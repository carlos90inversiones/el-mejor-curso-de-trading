"use client";
import { use, useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { COURSE_DATA } from "@/lib/courseData";
import { useProgress } from "@/lib/useProgress";
import { Confetti } from "@/components/Animations";
import { useGamification } from "@/components/GamificationSystem";

function findLesson(lessonId: string) {
  for (const phase of COURSE_DATA) {
    for (const mod of phase.modules) {
      const lesson = mod.lessons.find(l => l.id === lessonId);
      if (lesson) return { phase, mod, lesson };
    }
  }
  return null;
}

export default function QuizPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = use(params);
  const progress = useProgress();
  const gamification = useGamification();
  const result = findLesson(lessonId);

  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  if (!result) return <div className="min-h-screen flex items-center justify-center text-[#a0a0b8]">Quiz no encontrado</div>;

  const { phase, lesson } = result;
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
      const score = Math.round((correct / quiz.length) * 100);
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
      <div className="min-h-screen">
        <Confetti active={finalScore >= 70} />
        <Navbar />
        <div className="max-w-2xl mx-auto px-4 py-12">
          <div className="bg-[#1a1a2e] border border-[#2a2a40] rounded-2xl p-8 text-center">
            <div className="text-6xl mb-4">{finalScore >= 80 ? "🏆" : finalScore >= 60 ? "👍" : "📚"}</div>
            <h2 className="text-3xl font-bold text-white mb-2">
              {finalScore >= 80 ? "Excelente!" : finalScore >= 60 ? "Bien hecho!" : "Sigue estudiando!"}
            </h2>
            <p className="text-[#a0a0b8] mb-6">Has acertado {correct} de {quiz.length} preguntas</p>
            <div className="text-5xl font-bold mb-6" style={{ color: finalScore >= 80 ? "#10b981" : finalScore >= 60 ? "#f59e0b" : "#ef4444" }}>
              {finalScore}%
            </div>
            {finalScore >= 70 && <p className="text-green-400 mb-6">La leccion ha sido marcada como completada!</p>}
            <div className="flex justify-center gap-3">
              <Link href={`/leccion/${lessonId}`} className="bg-[#2a2a40] text-white px-6 py-3 rounded-xl hover:bg-[#333355] transition">
                Volver a la Leccion
              </Link>
              <Link href={`/fase/${phase.id}`} className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-xl hover:opacity-90 transition">
                Siguiente Leccion
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-2xl mx-auto px-4 py-8">
        <Link href={`/leccion/${lessonId}`} className="text-[#a0a0b8] hover:text-white mb-6 flex items-center gap-2 transition text-sm">
          <span>&#8592;</span> Volver a la Leccion
        </Link>

        <div className="bg-[#1a1a2e] border border-[#2a2a40] rounded-2xl p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-2 bg-[#2a2a40] rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full transition-all"
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
              }
              return (
                <button key={idx} onClick={() => handleAnswer(idx)} disabled={answered}
                  className={`w-full text-left p-4 rounded-xl border transition ${bg}`}>
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
            <button onClick={handleNext}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition">
              {currentQ < quiz.length - 1 ? "Siguiente Pregunta" : "Ver Resultados"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
