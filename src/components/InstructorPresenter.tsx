"use client";
import { useState, useRef, useEffect, useCallback } from "react";

interface PresenterProps {
  narration: string;
  title?: string;
  subtitle?: string;
}

export default function InstructorPresenter({ narration, title, subtitle }: PresenterProps) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const speak = useCallback(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(narration);
    const voices = window.speechSynthesis.getVoices();
    const esVoice = voices.find(v => v.lang.startsWith("es"));
    if (esVoice) utterance.voice = esVoice;
    utterance.lang = "es-ES";
    utterance.rate = 0.95;

    const totalLen = narration.length;
    let startTime = Date.now();

    utterance.onstart = () => {
      setIsSpeaking(true);
      startTime = Date.now();
      intervalRef.current = setInterval(() => {
        const elapsed = (Date.now() - startTime) / 1000;
        const est = totalLen / (13 * 0.95);
        setProgress(Math.min(100, (elapsed / est) * 100));
      }, 200);
    };

    utterance.onend = () => {
      setIsSpeaking(false);
      setProgress(100);
      if (intervalRef.current) clearInterval(intervalRef.current);
      setTimeout(() => setProgress(0), 1500);
    };

    window.speechSynthesis.speak(utterance);
  }, [narration]);

  const stop = () => {
    if (typeof window !== "undefined") window.speechSynthesis.cancel();
    setIsSpeaking(false);
    setProgress(0);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => { return () => { stop(); }; }, []);

  return (
    <div className="bg-gradient-to-br from-[#0f1628] to-[#1a1040] border border-[#2a2a50] rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="bg-[#1a1040]/80 px-5 py-3 border-b border-[#2a2a50] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-red-500" />
          <div className="w-2 h-2 rounded-full bg-yellow-500" />
          <div className="w-2 h-2 rounded-full bg-green-500" />
          <span className="text-[#a0a0c0] text-xs ml-2">Clase en Vivo</span>
        </div>
        {title && <span className="text-white text-xs font-medium">{title}</span>}
      </div>

      <div className="p-6 flex flex-col md:flex-row gap-6 items-center">
        {/* Instructor photo */}
        <div className="shrink-0">
          <div className={`relative w-36 h-36 md:w-44 md:h-44 rounded-2xl overflow-hidden ${isSpeaking ? "ring-4 ring-blue-500/60" : "ring-2 ring-[#2a2a50]"} transition-all duration-500`}>
            {/* Use the instructor image from public */}
            <img
              src="/instructor.jpg"
              alt="Instructor"
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback to avatar if image not found
                (e.target as HTMLImageElement).style.display = 'none';
                (e.target as HTMLImageElement).parentElement!.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-5xl">👨‍💼</div>';
              }}
            />
            {/* Speaking indicator */}
            {isSpeaking && (
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                {[0, 1, 2, 3, 4].map(i => (
                  <div key={i} className="w-1 bg-blue-400 rounded-full" style={{
                    height: `${8 + Math.random() * 12}px`,
                    animation: `speakBar 0.4s ease-in-out ${i * 0.1}s infinite alternate`,
                  }} />
                ))}
              </div>
            )}
          </div>
          <p className="text-center text-white font-bold text-sm mt-2">Tu Instructor</p>
          {subtitle && <p className="text-center text-[#a0a0c0] text-xs">{subtitle}</p>}
        </div>

        {/* Content area */}
        <div className="flex-1 min-w-0">
          {title && <h3 className="text-white font-bold text-lg mb-2">{title}</h3>}

          {/* Narration text with typing effect feel */}
          <div className="bg-[#0d0d20] rounded-xl p-4 mb-4 border border-[#2a2a50] min-h-[100px]">
            <p className="text-[#c0c0d8] text-sm leading-relaxed">{narration}</p>
          </div>

          {/* Progress */}
          <div className="h-1.5 bg-[#0d0d20] rounded-full overflow-hidden mb-4">
            <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-200" style={{ width: `${progress}%` }} />
          </div>

          {/* Controls */}
          <div className="flex gap-3">
            {!isSpeaking ? (
              <button onClick={speak} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 text-white px-6 py-2.5 rounded-xl text-sm font-medium flex items-center gap-2 transition">
                <span>&#9654;</span> Escuchar Explicacion
              </button>
            ) : (
              <button onClick={stop} className="bg-[#2a2a50] hover:bg-[#333366] text-white px-6 py-2.5 rounded-xl text-sm font-medium flex items-center gap-2 transition">
                <span>&#9632;</span> Detener
              </button>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes speakBar {
          from { height: 4px; }
          to { height: 16px; }
        }
      `}</style>
    </div>
  );
}

// Pre-built instructor explanations for key lessons
export const INSTRUCTOR_CLIPS = [
  {
    id: "welcome",
    title: "Bienvenida al Curso",
    subtitle: "Introduccion",
    narration: "Bienvenido al Mejor Curso de Trading del Mundo. Soy tu instructor y voy a acompanarte desde cero absoluto hasta convertirte en un trader profesional. No necesitas saber NADA de finanzas para empezar. Lo unico que necesitas es ganas de aprender y disciplina para seguir el proceso. Vamos a cubrir 7 fases: fundamentos, analisis tecnico, gestion de riesgo, estrategias avanzadas como Smart Money y ICT, cuentas fondeadas, y hasta trading algoritmico con Python. Cada leccion tiene quizzes, ejercicios practicos, y herramientas interactivas. Estas listo? Vamos alla.",
  },
  {
    id: "risk-intro",
    title: "La Leccion Mas Importante",
    subtitle: "Gestion de Riesgo",
    narration: "Escuchame bien porque lo que voy a decirte es la leccion MAS IMPORTANTE de todo el curso. El 90 por ciento de los traders que pierden dinero NO es porque no sepan analisis tecnico. Es porque no gestionan el riesgo. NUNCA arriesgues mas del 1 al 2 por ciento de tu capital en una sola operacion. SIEMPRE pon Stop Loss. Y busca ratios de riesgo beneficio de al menos 1 a 2. Con estas tres reglas, aunque solo aciertes el 34 por ciento de tus operaciones, seras RENTABLE. Grabate esto: la gestion de riesgo es mas importante que cualquier indicador, patron o estrategia.",
  },
  {
    id: "smc-intro",
    title: "Smart Money Concepts",
    subtitle: "Piensa como un Banco",
    narration: "Ahora vamos a aprender a pensar como las instituciones. Los bancos y fondos de inversion mueven billones de dolares al dia. Para ejecutar sus ordenes gigantes, necesitan LIQUIDEZ. Y de donde sacan esa liquidez? De TUS Stop Loss. Cada vez que ves que el precio toca tu Stop Loss y luego se va en tu direccion... no es mala suerte. Es el mercado cazando liquidez. Smart Money Concepts te ensena a ver estas trampas ANTES de que ocurran, y a operar DEL LADO de las instituciones, no en su contra.",
  },
  {
    id: "propfirm-intro",
    title: "Cuentas Fondeadas",
    subtitle: "Opera el Dinero de Otros",
    narration: "Quieres operar con 100,000 dolares sin arriesgar tu dinero? Las cuentas fondeadas te lo permiten. Una prop firm te da el capital y tu pones la habilidad. Pasas un examen demostrando que eres rentable, y luego operas su dinero quedandote el 80 por ciento de las ganancias. Con una cuenta de 100,000 al 3 por ciento mensual, son 3,000 dolares. Tu te quedas 2,400. Con varias cuentas puedes escalar a 5, 10, o 15 mil dolares al mes. Todo sin arriesgar tu propio capital. Eso si: la disciplina es obligatoria.",
  },
  {
    id: "final-message",
    title: "Mensaje Final",
    subtitle: "El Secreto del Exito",
    narration: "Has llegado al final del curso. Ahora tienes mas conocimiento que el 95 por ciento de los traders del mundo. Pero el conocimiento sin accion no vale nada. El secreto que separa a los traders exitosos del resto es simple: NO SE RINDIERON. Pasaron por rachas perdedoras, challenges fallidos, momentos de duda. Pero siguieron adelante. Ajustaron. Aprendieron. Y eventualmente llegaron. Tu tambien puedes. Empieza en demo, sigue tu plan, gestiona el riesgo, y se disciplinado. El trading no es dinero facil. Pero para el que se lo toma en serio, es una de las mejores profesiones del mundo. Ahora ve y hazlo. Te espero al otro lado.",
  },
];
