"use client";
import { useState, useEffect } from "react";

interface JournalEntry {
  id: string;
  date: string;
  pair: string;
  direction: "LONG" | "SHORT";
  entry: string;
  sl: string;
  tp: string;
  result: "WIN" | "LOSS" | "BE" | "OPEN";
  pnl: number;
  rr: string;
  emotion: string;
  notes: string;
  mistakes: string;
  screenshot: string;
}

export default function TradingJournal() {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState<Partial<JournalEntry>>({
    date: new Date().toISOString().split("T")[0],
    pair: "EUR/USD",
    direction: "LONG",
    result: "OPEN",
    pnl: 0,
    rr: "1:2",
    emotion: "Neutral",
  });

  useEffect(() => {
    try {
      const saved = localStorage.getItem("trading-journal");
      if (saved) setEntries(JSON.parse(saved));
    } catch {/* */}
  }, []);

  const save = (e: JournalEntry[]) => {
    setEntries(e);
    localStorage.setItem("trading-journal", JSON.stringify(e));
  };

  const addEntry = () => {
    const entry: JournalEntry = {
      id: Date.now().toString(),
      date: form.date || "",
      pair: form.pair || "",
      direction: form.direction || "LONG",
      entry: form.entry || "",
      sl: form.sl || "",
      tp: form.tp || "",
      result: form.result || "OPEN",
      pnl: form.pnl || 0,
      rr: form.rr || "",
      emotion: form.emotion || "",
      notes: form.notes || "",
      mistakes: form.mistakes || "",
      screenshot: form.screenshot || "",
    };
    save([entry, ...entries]);
    setShowForm(false);
    setForm({ date: new Date().toISOString().split("T")[0], pair: "EUR/USD", direction: "LONG", result: "OPEN", pnl: 0, rr: "1:2", emotion: "Neutral" });
  };

  const deleteEntry = (id: string) => {
    save(entries.filter(e => e.id !== id));
  };

  const totalPnl = entries.reduce((s, e) => s + (e.pnl || 0), 0);
  const wins = entries.filter(e => e.result === "WIN").length;
  const losses = entries.filter(e => e.result === "LOSS").length;
  const winRate = wins + losses > 0 ? ((wins / (wins + losses)) * 100).toFixed(1) : "0";

  return (
    <div className="bg-[#1a1a2e] border border-[#2a2a40] rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-white">Diario de Trading</h3>
          <p className="text-sm text-[#a0a0b8]">Registra y analiza cada operación</p>
        </div>
        <button onClick={() => setShowForm(!showForm)}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition">
          {showForm ? "Cancelar" : "+ Nueva Entrada"}
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        <div className="bg-[#0d0d15] rounded-xl p-3 text-center">
          <p className="text-xs text-[#a0a0b8]">Total Trades</p>
          <p className="text-xl font-bold text-white">{entries.length}</p>
        </div>
        <div className="bg-[#0d0d15] rounded-xl p-3 text-center">
          <p className="text-xs text-[#a0a0b8]">Win Rate</p>
          <p className="text-xl font-bold text-white">{winRate}%</p>
        </div>
        <div className="bg-[#0d0d15] rounded-xl p-3 text-center">
          <p className="text-xs text-[#a0a0b8]">W / L</p>
          <p className="text-xl font-bold text-white"><span className="text-green-400">{wins}</span> / <span className="text-red-400">{losses}</span></p>
        </div>
        <div className="bg-[#0d0d15] rounded-xl p-3 text-center">
          <p className="text-xs text-[#a0a0b8]">P/L Total</p>
          <p className={`text-xl font-bold ${totalPnl >= 0 ? "text-green-400" : "text-red-400"}`}>{totalPnl >= 0 ? "+" : ""}{totalPnl.toFixed(2)}$</p>
        </div>
      </div>

      {/* Form */}
      {showForm && (
        <div className="bg-[#0d0d15] rounded-xl p-5 mb-6 border border-[#2a2a40]">
          <h4 className="text-white font-bold mb-4">Nueva operación</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
            <div>
              <label className="text-xs text-[#a0a0b8]">Fecha</label>
              <input type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })}
                className="w-full bg-[#1a1a2e] border border-[#2a2a40] rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="text-xs text-[#a0a0b8]">Par/Instrumento</label>
              <input value={form.pair} onChange={e => setForm({ ...form, pair: e.target.value })}
                className="w-full bg-[#1a1a2e] border border-[#2a2a40] rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="text-xs text-[#a0a0b8]">Direccion</label>
              <select value={form.direction} onChange={e => setForm({ ...form, direction: e.target.value as "LONG" | "SHORT" })}
                className="w-full bg-[#1a1a2e] border border-[#2a2a40] rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-blue-500">
                <option value="LONG">LONG</option><option value="SHORT">SHORT</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-[#a0a0b8]">Entrada</label>
              <input value={form.entry} onChange={e => setForm({ ...form, entry: e.target.value })} placeholder="1.0850"
                className="w-full bg-[#1a1a2e] border border-[#2a2a40] rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="text-xs text-[#a0a0b8]">Stop Loss</label>
              <input value={form.sl} onChange={e => setForm({ ...form, sl: e.target.value })} placeholder="1.0820"
                className="w-full bg-[#1a1a2e] border border-[#2a2a40] rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="text-xs text-[#a0a0b8]">Take Profit</label>
              <input value={form.tp} onChange={e => setForm({ ...form, tp: e.target.value })} placeholder="1.0910"
                className="w-full bg-[#1a1a2e] border border-[#2a2a40] rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="text-xs text-[#a0a0b8]">Resultado</label>
              <select value={form.result} onChange={e => setForm({ ...form, result: e.target.value as JournalEntry["result"] })}
                className="w-full bg-[#1a1a2e] border border-[#2a2a40] rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-blue-500">
                <option value="OPEN">Abierta</option><option value="WIN">ganancia</option><option value="LOSS">pérdida</option><option value="BE">Break Even</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-[#a0a0b8]">P/L ($)</label>
              <input type="number" value={form.pnl} onChange={e => setForm({ ...form, pnl: +e.target.value })}
                className="w-full bg-[#1a1a2e] border border-[#2a2a40] rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="text-xs text-[#a0a0b8]">R:R</label>
              <input value={form.rr} onChange={e => setForm({ ...form, rr: e.target.value })} placeholder="1:2"
                className="w-full bg-[#1a1a2e] border border-[#2a2a40] rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-blue-500" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <div>
              <label className="text-xs text-[#a0a0b8]">Emocion antes/durante</label>
              <select value={form.emotion} onChange={e => setForm({ ...form, emotion: e.target.value })}
                className="w-full bg-[#1a1a2e] border border-[#2a2a40] rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-blue-500">
                <option>Neutral</option><option>Confiado</option><option>Ansioso</option><option>FOMO</option><option>Frustrado</option><option>Impaciente</option><option>Tranquilo</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-[#a0a0b8]">Errores cometidos</label>
              <input value={form.mistakes} onChange={e => setForm({ ...form, mistakes: e.target.value })} placeholder="Ej: Entre sin confirmacion..."
                className="w-full bg-[#1a1a2e] border border-[#2a2a40] rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-blue-500" />
            </div>
          </div>
          <div className="mb-4">
            <label className="text-xs text-[#a0a0b8]">Notas / análisis</label>
            <textarea value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })} rows={2} placeholder="Que viste, por que entraste, que aprendiste..."
              className="w-full bg-[#1a1a2e] border border-[#2a2a40] rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-blue-500 resize-none" />
          </div>
          <button onClick={addEntry} className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-2.5 rounded-lg font-medium hover:opacity-90 transition">
            Guardar Operacion
          </button>
        </div>
      )}

      {/* Entries */}
      <div className="space-y-3 max-h-96 overflow-y-auto">
        {entries.length === 0 ? (
          <p className="text-center text-[#555] py-8">Sin operaciones registradas. Haz clic en "+ Nueva Entrada" para empezar.</p>
        ) : entries.map(e => (
          <div key={e.id} className="bg-[#0d0d15] rounded-xl p-4 border border-[#2a2a40]">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <span className={`text-xs font-bold px-2 py-0.5 rounded ${e.direction === "LONG" ? "bg-green-900/50 text-green-400" : "bg-red-900/50 text-red-400"}`}>
                  {e.direction}
                </span>
                <span className="text-white font-medium">{e.pair}</span>
                <span className="text-xs text-[#a0a0b8]">{e.date}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className={`font-bold ${e.result === "WIN" ? "text-green-400" : e.result === "LOSS" ? "text-red-400" : "text-[#a0a0b8]"}`}>
                  {e.result === "WIN" ? "+" : e.result === "LOSS" ? "" : ""}{e.pnl}$
                </span>
                <button onClick={() => deleteEntry(e.id)} className="text-[#555] hover:text-red-400 text-xs">X</button>
              </div>
            </div>
            <div className="flex gap-4 text-xs text-[#a0a0b8]">
              <span>Entrada: {e.entry}</span><span>SL: {e.sl}</span><span>TP: {e.tp}</span><span>R:R {e.rr}</span>
            </div>
            {e.notes && <p className="text-xs text-[#777] mt-2">{e.notes}</p>}
            {e.mistakes && <p className="text-xs text-red-400/70 mt-1">Error: {e.mistakes}</p>}
            {e.emotion && e.emotion !== "Neutral" && <p className="text-xs text-amber-400/70 mt-1">Emocion: {e.emotion}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
