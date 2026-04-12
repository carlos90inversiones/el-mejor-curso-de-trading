"use client";
import { useState, useEffect } from "react";

const TIPS = [
  { tip: "NUNCA operes sin Stop Loss. Es tu cinturon de seguridad. Sin excepciones.", category: "Riesgo", icon: "🛡️" },
  { tip: "El mercado siempre dara más oportunidades. Si no cumple tus criterios, NO entres.", category: "Psicologia", icon: "🧠" },
  { tip: "Con ratio 1:2, solo necesitas acertar el 34% para ser rentable. Enfocate en el R:R, no en el win rate.", category: "Riesgo", icon: "📊" },
  { tip: "Revisa Forex Factory CADA DIA antes de operar. No operes 30 min antes/despues de noticias de alto impacto.", category: "Fundamental", icon: "📰" },
  { tip: "La tendencia es tu amiga. Opera A FAVOR de la tendencia, especialmente al principio.", category: "técnico", icon: "📈" },
  { tip: "Si pierdes 2 trades seguidos, CIERRA la plataforma. Vuelve manana con mente fresca.", category: "Psicologia", icon: "🧘" },
  { tip: "Un patrón de velas SOLO es valido en un nivel importante (S/R, OB, Fibonacci). No operes patrónes aislados.", category: "técnico", icon: "🕯️" },
  { tip: "Compra en Discount (debajo del 50%), vende en Premium (arriba del 50%). Así de simple.", category: "ICT", icon: "💰" },
  { tip: "Las instituciones necesitan tu liquidez. Tus Stop Loss son su combustible. Piensa como ellos.", category: "SMC", icon: "🏦" },
  { tip: "El solapamiento London-NY (13:00-17:00 UTC) es el MEJOR momento para tradear. Maxima volátilidad.", category: "Sesiones", icon: "🌍" },
  { tip: "Calcula tu position size ANTES de cada trade. Nunca a ojo. Usa la formula: Riesgo$ / (SL pips x Valor pip).", category: "Riesgo", icon: "🧮" },
  { tip: "Tu diario de trading es tu MEJOR maestro. Registra CADA operación con captura y emociones.", category: "Habitos", icon: "📓" },
  { tip: "No sigas 'señales' de Instagram/Telegram. El 95% son estafas. Aprende a analizar TU.", category: "Mindset", icon: "⚠️" },
  { tip: "Un backtest de 30-50 trades es el mínimo para evaluar una estrategia. No cambies cada 5 trades.", category: "Sistema", icon: "🔬" },
  { tip: "El 80% del éxito en trading es psicologia y gestion de riesgo. Solo el 20% es la estrategia.", category: "Mindset", icon: "💪" },
  { tip: "Cuando un soporte se ROMPE, se convierte en resistencia. Y viceversa. Cambio de polaridad.", category: "técnico", icon: "🔄" },
  { tip: "Las divergencias del RSI son de las señales más poderosas. Precio sube + RSI baja = cuidado.", category: "Indicadores", icon: "📉" },
  { tip: "En un challenge de prop firm, NUNCA aumentes el riesgo al final. Es mejor no pasar que violar el drawdown.", category: "Prop Firm", icon: "🏆" },
  { tip: "El Power of 3: Asia acumula, London manipula, NY distribuye. Observa este patrón CADA DIA.", category: "ICT", icon: "⚡" },
  { tip: "Mover el SL a break-even cuando ganas 1R elimina el riesgo del trade. Hazlo SIEMPRE.", category: "Gestion", icon: "✅" },
  { tip: "No operes los viernes por la tarde. Baja liquidez + riesgo de gap del fin de semana.", category: "Timing", icon: "🗓️" },
  { tip: "Expectativas realistas: 2-5% mensual es EXCELENTE. Cualquiera que prometa más, miente.", category: "Mindset", icon: "🎯" },
  { tip: "DXY (índice del Dolar) es la brujula del Forex. Miralo ANTES de operar cualquier par con USD.", category: "Correlaciones", icon: "🧭" },
  { tip: "Más indicadores ≠ mejor análisis. 2-3 indicadores son suficientes. Menos es más.", category: "técnico", icon: "📊" },
  { tip: "La paciencia es una habilidad que se entrena. Esperar el setup perfecto ES tradear.", category: "Mindset", icon: "⏳" },
  { tip: "Fibonacci 61.8% (Golden Ratio) es el nivel más importante. Combinalo con un OB para entradas de alta probabilidad.", category: "técnico", icon: "🔢" },
  { tip: "Separa 25-30% de tus ganancias de trading para impuestos desde el dia 1. Sin sorpresas.", category: "Fiscal", icon: "📋" },
  { tip: "Un bot sin gestion de riesgo es una bomba de tiempo. Siempre incluye max drawdown y kill switch.", category: "Algo", icon: "🤖" },
  { tip: "La zona OTE (61.8%-78.6% de Fibonacci) es donde los institucionales buscan entradas. Tu también deberías.", category: "Fibonacci", icon: "🎯" },
  { tip: "Los traders que ganan NO son los más inteligentes. Son los más DISCIPLINADOS. Disciplina > todo.", category: "Mindset", icon: "👑" },
];

export default function DailyTip() {
  const [tipIndex, setTipIndex] = useState(0);

  useEffect(() => {
    // Use date-based index so it changes daily
    const today = new Date();
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
    setTipIndex(dayOfYear % TIPS.length);
  }, []);

  const tip = TIPS[tipIndex];

  return (
    <div className="bg-gradient-to-r from-indigo-900/20 to-blue-900/20 border border-indigo-800/30 rounded-xl p-4">
      <div className="flex items-start gap-3">
        <span className="text-2xl shrink-0">{tip.icon}</span>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <p className="text-xs font-bold text-indigo-400">TIP DEL DIA</p>
            <span className="text-[9px] bg-indigo-900/50 text-indigo-300 px-2 py-0.5 rounded-full">{tip.category}</span>
          </div>
          <p className="text-white text-sm leading-relaxed">{tip.tip}</p>
        </div>
      </div>
    </div>
  );
}
