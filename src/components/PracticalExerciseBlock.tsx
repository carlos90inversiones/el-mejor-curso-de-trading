"use client";
import { useState } from "react";

export default function PracticalExerciseBlock({ exercise, modelAnswer }: { exercise: string; modelAnswer?: string }) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [selfDone, setSelfDone] = useState(false);

  return (
    <div className="mt-6 bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-800/30 rounded-xl p-5">
      <h3 className="text-lg font-bold text-white mb-2">Ejercicio Práctico</h3>
      <p className="text-[#a0a0b8] mb-4">{exercise}</p>

      {modelAnswer && (
        <>
          {!selfDone ? (
            <button onClick={() => setSelfDone(true)}
              className="bg-green-700/30 border border-green-600/40 text-green-400 text-sm px-5 py-2.5 rounded-xl hover:bg-green-700/50 transition font-medium">
              Ya hice el ejercicio — ver respuesta modelo
            </button>
          ) : !showAnswer ? (
            <div className="bg-[#0d0d15] rounded-xl p-4 border border-[#2a2a40]">
              <p className="text-amber-400 text-sm font-bold mb-2">Antes de ver la respuesta:</p>
              <p className="text-[#a0a0b8] text-xs mb-3">¿Realmente completaste el ejercicio? La respuesta modelo solo es útil si primero lo intentaste tú. Comparar tu análisis con el profesional es donde más se aprende.</p>
              <button onClick={() => setShowAnswer(true)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm px-5 py-2.5 rounded-xl hover:opacity-90 transition font-medium">
                Sí, mostrar respuesta modelo
              </button>
            </div>
          ) : (
            <div className="bg-[#0d0d15] rounded-xl p-5 border border-blue-800/30 mt-2">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-blue-400 text-lg">📋</span>
                <h4 className="text-blue-400 font-bold text-sm">Respuesta Modelo — Así lo haría un profesional</h4>
              </div>
              <div className="text-[#a0a0b8] text-sm leading-relaxed whitespace-pre-line">{modelAnswer}</div>
              <div className="mt-4 bg-amber-900/15 border border-amber-700/20 rounded-lg p-3">
                <p className="text-amber-400 text-xs font-bold mb-1">Compara tu resultado:</p>
                <p className="text-[#777] text-xs">¿Tu análisis se parece al modelo? ¿Qué diferencias ves? Las diferencias son los puntos que debes reforzar.</p>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
