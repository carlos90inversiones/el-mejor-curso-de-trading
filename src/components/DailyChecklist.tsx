"use client";
import { useState, useEffect } from "react";

const CHECKLIST_ITEMS = [
  { id: "news", icon: "📰", text: "Revisar calendario económico (Forex Factory / Investing.com)", category: "Pre-Mercado" },
  { id: "dxy", icon: "💵", text: "Comprobar DXY y correlaciones intermarket", category: "Pre-Mercado" },
  { id: "bias", icon: "🧭", text: "Definir sesgo diario (alcista/bajista/neutral) en HTF", category: "Pre-Mercado" },
  { id: "levels", icon: "📏", text: "Marcar niveles clave: soporte, resistencia, order blocks", category: "Pre-Mercado" },
  { id: "killzone", icon: "⏰", text: "Confirmar killzone activa (London 08-11 / NY 13-16 UTC)", category: "Pre-Mercado" },
  { id: "risk", icon: "🛡️", text: "Definir riesgo máximo del día (1-2% del capital)", category: "Gestión" },
  { id: "sl", icon: "🚫", text: "Stop Loss definido ANTES de entrar (nunca sin SL)", category: "Gestión" },
  { id: "rr", icon: "⚖️", text: "R:R mínimo 1:2 en cada operación", category: "Gestión" },
  { id: "size", icon: "🧮", text: "Calcular tamaño de posición con la calculadora", category: "Gestión" },
  { id: "maxloss", icon: "🔴", text: "Regla: si pierdo 2 trades seguidos, PARO por hoy", category: "Disciplina" },
  { id: "emotions", icon: "🧠", text: "Evaluar estado emocional (¿estoy tranquilo y enfocado?)", category: "Disciplina" },
  { id: "revenge", icon: "😤", text: "Recordar: NUNCA revenge trading", category: "Disciplina" },
  { id: "journal", icon: "📓", text: "Registrar cada operación en el diario de trading", category: "Post-Mercado" },
  { id: "review", icon: "🔍", text: "Revisar capturas de pantalla de las operaciones del día", category: "Post-Mercado" },
  { id: "learn", icon: "📚", text: "Anotar 1 cosa que aprendí hoy", category: "Post-Mercado" },
];

export default function DailyChecklist() {
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const today = new Date().toISOString().slice(0, 10);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(`checklist-${today}`);
      if (saved) setChecked(new Set(JSON.parse(saved)));
    } catch {/* */}
  }, [today]);

  const toggle = (id: string) => {
    setChecked(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      localStorage.setItem(`checklist-${today}`, JSON.stringify([...next]));
      return next;
    });
  };

  const pct = Math.round((checked.size / CHECKLIST_ITEMS.length) * 100);
  const categories = [...new Set(CHECKLIST_ITEMS.map(i => i.category))];

  return (
    <div className="bg-[#1a1a2e] border border-[#2a2a40] rounded-2xl p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-white">Checklist Pre-Operación</h3>
          <p className="text-sm text-[#a0a0b8]">Completa antes de operar cada día</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-white">{pct}%</div>
          <div className="text-xs text-[#a0a0b8]">{checked.size}/{CHECKLIST_ITEMS.length}</div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-3 bg-[#0d0d15] rounded-full overflow-hidden mb-6">
        <div className="h-full rounded-full transition-all duration-500" style={{
          width: `${pct}%`,
          background: pct === 100 ? "linear-gradient(to right, #10b981, #059669)" : "linear-gradient(to right, #3b82f6, #8b5cf6)"
        }} />
      </div>

      {pct === 100 && (
        <div className="bg-green-900/20 border border-green-700/30 rounded-xl p-4 mb-6 text-center">
          <div className="text-2xl mb-1">✅</div>
          <p className="text-green-400 font-bold text-sm">¡Listo para operar!</p>
          <p className="text-green-400/70 text-xs">Has completado toda la checklist de hoy</p>
        </div>
      )}

      {categories.map(cat => (
        <div key={cat} className="mb-4">
          <h4 className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">{cat}</h4>
          <div className="space-y-1.5">
            {CHECKLIST_ITEMS.filter(i => i.category === cat).map(item => (
              <button key={item.id} onClick={() => toggle(item.id)}
                className={`w-full flex items-center gap-3 p-3 rounded-xl text-left transition ${
                  checked.has(item.id) ? "bg-green-900/15 border border-green-800/30" : "bg-[#0d0d15] border border-[#2a2a40] hover:border-blue-500/30"
                }`}>
                <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 text-xs ${
                  checked.has(item.id) ? "bg-green-600 text-white" : "border border-[#555]"
                }`}>
                  {checked.has(item.id) && "✓"}
                </div>
                <span className="text-sm">{item.icon}</span>
                <span className={`text-sm ${checked.has(item.id) ? "text-green-300 line-through opacity-70" : "text-[#a0a0b8]"}`}>
                  {item.text}
                </span>
              </button>
            ))}
          </div>
        </div>
      ))}

      <button onClick={() => { setChecked(new Set()); localStorage.removeItem(`checklist-${today}`); }}
        className="w-full mt-4 text-xs text-[#555] hover:text-[#a0a0b8] transition py-2">
        Reiniciar checklist
      </button>
    </div>
  );
}
