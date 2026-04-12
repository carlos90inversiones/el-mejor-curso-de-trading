"use client";
import { useState, useMemo } from "react";

interface CandlePattern {
  name: string;
  description: string;
  signal: "ALCISTA" | "BAJISTA" | "NEUTRAL";
  candles: { open: number; close: number; high: number; low: number }[];
  context: string;
}

const PATTERNS: CandlePattern[] = [
  { name: "Martillo (Hammer)", description: "Cuerpo pequeno arriba, mecha inferior larga. Señal de rechazo de precios bajos.", signal: "ALCISTA",
    candles: [{ open: 50, close: 55, high: 57, low: 20 }], context: "Aparece en soporte/zona de demanda" },
  { name: "Estrella Fugaz (Shooting Star)", description: "Cuerpo pequeno abajo, mecha superior larga. Señal de rechazo de precios altos.", signal: "BAJISTA",
    candles: [{ open: 50, close: 45, high: 80, low: 43 }], context: "Aparece en resistencia/zona de oferta" },
  { name: "Doji", description: "Apertura y cierre casi iguales. Indecision del mercado.", signal: "NEUTRAL",
    candles: [{ open: 50, close: 51, high: 65, low: 35 }], context: "Tras tendencia fuerte puede indicar giro" },
  { name: "Envolvente Alcista", description: "Vela verde grande envuelve completamente a vela roja anterior.", signal: "ALCISTA",
    candles: [{ open: 55, close: 45, high: 57, low: 43 }, { open: 42, close: 60, high: 62, low: 40 }], context: "En soporte = entrada LONG de alta probabilidad" },
  { name: "Envolvente Bajista", description: "Vela roja grande envuelve completamente a vela verde anterior.", signal: "BAJISTA",
    candles: [{ open: 45, close: 55, high: 57, low: 43 }, { open: 58, close: 40, high: 60, low: 38 }], context: "En resistencia = entrada SHORT de alta probabilidad" },
  { name: "Morning Star", description: "3 velas: roja grande, vela pequena, verde grande. Giro alcista.", signal: "ALCISTA",
    candles: [{ open: 60, close: 40, high: 62, low: 38 }, { open: 39, close: 37, high: 42, low: 35 }, { open: 38, close: 58, high: 60, low: 36 }], context: "En suelo/soporte importante" },
  { name: "Evening Star", description: "3 velas: verde grande, vela pequena, roja grande. Giro bajista.", signal: "BAJISTA",
    candles: [{ open: 40, close: 60, high: 62, low: 38 }, { open: 61, close: 63, high: 66, low: 59 }, { open: 62, close: 42, high: 64, low: 40 }], context: "En techo/resistencia importante" },
  { name: "Pin Bar Alcista", description: "Mecha inferior larga (2/3 total), cuerpo pequeno arriba. Rechazo de precios bajos.", signal: "ALCISTA",
    candles: [{ open: 52, close: 55, high: 57, low: 25 }], context: "En soporte + confluencia = setup A+" },
  { name: "Pin Bar Bajista", description: "Mecha superior larga (2/3 total), cuerpo pequeno abajo. Rechazo de precios altos.", signal: "BAJISTA",
    candles: [{ open: 48, close: 45, high: 78, low: 43 }], context: "En resistencia + confluencia = setup A+" },
  { name: "Inside Bar", description: "Vela contenida dentro del rango de la anterior. Consolidacion antes de movimiento.", signal: "NEUTRAL",
    candles: [{ open: 30, close: 70, high: 75, low: 25 }, { open: 45, close: 55, high: 60, low: 40 }], context: "Esperar ruptura de la vela madre para direccion" },
  { name: "Three White Soldiers", description: "3 velas verdes grandes consecutivas cerrando cada vez más alto.", signal: "ALCISTA",
    candles: [{ open: 30, close: 42, high: 44, low: 28 }, { open: 43, close: 55, high: 57, low: 41 }, { open: 56, close: 68, high: 70, low: 54 }], context: "Fuerte momentum comprador" },
  { name: "Three Black Crows", description: "3 velas rojas grandes consecutivas cerrando cada vez más bajo.", signal: "BAJISTA",
    candles: [{ open: 70, close: 58, high: 72, low: 56 }, { open: 57, close: 45, high: 59, low: 43 }, { open: 44, close: 32, high: 46, low: 30 }], context: "Fuerte momentum vendedor" },
  { name: "Hombre Colgado (Hanging Man)", description: "Idéntico al martillo pero aparece en resistencia. Cuerpo pequeño arriba, mecha inferior larga.", signal: "BAJISTA",
    candles: [{ open: 65, close: 60, high: 67, low: 30 }], context: "En resistencia o zona de oferta = señal de giro bajista" },
  { name: "Martillo Invertido", description: "Cuerpo pequeño abajo, mecha superior larga. Señal de posible reversión alcista.", signal: "ALCISTA",
    candles: [{ open: 35, close: 40, high: 70, low: 33 }], context: "En soporte = los compradores empiezan a defender" },
  { name: "Tweezer Top", description: "Dos velas con máximos casi iguales. La primera alcista, la segunda bajista.", signal: "BAJISTA",
    candles: [{ open: 45, close: 65, high: 70, low: 43 }, { open: 64, close: 48, high: 70, low: 46 }], context: "En resistencia = doble rechazo del mismo nivel" },
  { name: "Tweezer Bottom", description: "Dos velas con mínimos casi iguales. La primera bajista, la segunda alcista.", signal: "ALCISTA",
    candles: [{ open: 55, close: 35, high: 57, low: 30 }, { open: 36, close: 52, high: 54, low: 30 }], context: "En soporte = doble rechazo de precios bajos" },
  { name: "Harami Alcista", description: "Vela roja grande seguida de vela verde pequeña contenida dentro del cuerpo anterior.", signal: "ALCISTA",
    candles: [{ open: 65, close: 35, high: 68, low: 33 }, { open: 40, close: 52, high: 54, low: 38 }], context: "Tras caída = pérdida de momentum bajista" },
  { name: "Harami Bajista", description: "Vela verde grande seguida de vela roja pequeña contenida dentro del cuerpo anterior.", signal: "BAJISTA",
    candles: [{ open: 35, close: 65, high: 67, low: 33 }, { open: 60, close: 48, high: 62, low: 46 }], context: "Tras subida = pérdida de momentum alcista" },
  { name: "Nube Oscura (Dark Cloud Cover)", description: "Vela verde fuerte seguida de vela roja que abre por encima y cierra por debajo del 50% de la anterior.", signal: "BAJISTA",
    candles: [{ open: 30, close: 60, high: 62, low: 28 }, { open: 63, close: 40, high: 65, low: 38 }], context: "En resistencia = señal bajista de alta fiabilidad" },
  { name: "Línea Penetrante (Piercing Line)", description: "Vela roja fuerte seguida de vela verde que abre por debajo y cierra por encima del 50% de la anterior.", signal: "ALCISTA",
    candles: [{ open: 60, close: 30, high: 62, low: 28 }, { open: 27, close: 50, high: 52, low: 25 }], context: "En soporte = señal alcista de alta fiabilidad" },
  { name: "Three Inside Up", description: "3 velas: roja grande, harami alcista dentro, cierre verde por encima.", signal: "ALCISTA",
    candles: [{ open: 65, close: 35, high: 67, low: 33 }, { open: 40, close: 52, high: 54, low: 38 }, { open: 53, close: 68, high: 70, low: 51 }], context: "Confirmación de reversión alcista con 3 velas" },
  { name: "Three Inside Down", description: "3 velas: verde grande, harami bajista dentro, cierre rojo por debajo.", signal: "BAJISTA",
    candles: [{ open: 35, close: 65, high: 67, low: 33 }, { open: 60, close: 48, high: 62, low: 46 }, { open: 47, close: 30, high: 49, low: 28 }], context: "Confirmación de reversión bajista con 3 velas" },
  { name: "Peonza (Spinning Top)", description: "Cuerpo muy pequeño con mechas largas arriba y abajo. Máxima indecisión.", signal: "NEUTRAL",
    candles: [{ open: 48, close: 52, high: 72, low: 28 }], context: "Indica equilibrio total. Esperar la siguiente vela para dirección" },
  { name: "Marubozu Alcista", description: "Vela verde grande SIN mechas. Los compradores dominaron toda la sesión.", signal: "ALCISTA",
    candles: [{ open: 25, close: 75, high: 75, low: 25 }], context: "Señal de fuerza compradora extrema. Momentum muy fuerte" },
  { name: "Marubozu Bajista", description: "Vela roja grande SIN mechas. Los vendedores dominaron toda la sesión.", signal: "BAJISTA",
    candles: [{ open: 75, close: 25, high: 75, low: 25 }], context: "Señal de fuerza vendedora extrema. Momentum muy fuerte" },
];

function CandleVisual({ candle, width = 40 }: { candle: { open: number; close: number; high: number; low: number }; width?: number }) {
  const isGreen = candle.close >= candle.open;
  const bodyTop = Math.max(candle.open, candle.close);
  const bodyBottom = Math.min(candle.open, candle.close);
  const bodyHeight = Math.max(bodyTop - bodyBottom, 1);
  const scale = 1.2;

  return (
    <svg width={width} height={100} viewBox="0 0 40 100">
      {/* Upper wick */}
      <line x1={20} y1={100 - candle.high * scale} x2={20} y2={100 - bodyTop * scale} stroke={isGreen ? "#10b981" : "#ef4444"} strokeWidth={1.5} />
      {/* Body */}
      <rect x={8} y={100 - bodyTop * scale} width={24} height={Math.max(bodyHeight * scale, 2)} fill={isGreen ? "#10b981" : "#ef4444"} rx={2} />
      {/* Lower wick */}
      <line x1={20} y1={100 - bodyBottom * scale} x2={20} y2={100 - candle.low * scale} stroke={isGreen ? "#10b981" : "#ef4444"} strokeWidth={1.5} />
    </svg>
  );
}

export default function CandlePractice() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(0);

  const shuffled = useMemo(() => [...PATTERNS].sort(() => Math.random() - 0.5), []);
  const pattern = shuffled[currentIdx % shuffled.length];

  const options = useMemo(() => {
    const correct = pattern.name;
    const others = PATTERNS.filter(p => p.name !== correct).sort(() => Math.random() - 0.5).slice(0, 3).map(p => p.name);
    const all = [correct, ...others].sort(() => Math.random() - 0.5);
    return all;
  }, [pattern.name]);

  const handleAnswer = (name: string) => {
    if (showAnswer) return;
    setShowAnswer(true);
    setAnswered(a => a + 1);
    if (name === pattern.name) setScore(s => s + 1);
  };

  const next = () => {
    setShowAnswer(false);
    setCurrentIdx(i => i + 1);
  };

  return (
    <div className="bg-[#1a1a2e] border border-[#2a2a40] rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-white">Practica de Velas Japonesas</h3>
          <p className="text-sm text-[#a0a0b8]">Identifica el patrón de velas</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-[#a0a0b8]">Puntuacion</p>
          <p className="text-xl font-bold text-white">{score}/{answered}</p>
        </div>
      </div>

      {/* Candle Display */}
      <div className="bg-[#0d0d15] rounded-xl p-6 mb-6 flex items-end justify-center gap-2 h-40">
        {pattern.candles.map((c, i) => (
          <CandleVisual key={i} candle={c} width={pattern.candles.length === 1 ? 60 : 50} />
        ))}
      </div>

      {/* Question */}
      <p className="text-white font-medium mb-4 text-center">Que patrón de vela es este?</p>

      {/* Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        {options.map(opt => {
          let bg = "bg-[#222240] border-[#2a2a40] hover:border-blue-500/50";
          if (showAnswer) {
            if (opt === pattern.name) bg = "bg-green-900/30 border-green-600";
            else bg = "bg-[#222240] border-[#2a2a40] opacity-50";
          }
          return (
            <button key={opt} onClick={() => handleAnswer(opt)} disabled={showAnswer}
              className={`p-3 rounded-xl border text-sm text-left text-white transition ${bg}`}>
              {opt}
            </button>
          );
        })}
      </div>

      {/* Answer */}
      {showAnswer && (
        <div className="bg-[#0d0d15] rounded-xl p-4 mb-4 border border-[#2a2a40]">
          <p className="text-white font-bold mb-1">{pattern.name}</p>
          <p className="text-sm text-[#a0a0b8] mb-1">{pattern.description}</p>
          <p className="text-sm">
            <span className={`font-bold ${pattern.signal === "ALCISTA" ? "text-green-400" : pattern.signal === "BAJISTA" ? "text-red-400" : "text-amber-400"}`}>
              Señal: {pattern.signal}
            </span>
          </p>
          <p className="text-xs text-[#777] mt-1">Contexto: {pattern.context}</p>
        </div>
      )}

      {showAnswer && (
        <button onClick={next} className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-medium hover:opacity-90 transition">
          Siguiente Patron
        </button>
      )}
    </div>
  );
}
