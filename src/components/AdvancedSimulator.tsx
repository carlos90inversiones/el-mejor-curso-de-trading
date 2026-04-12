"use client";
import { useState, useCallback, useMemo } from "react";
import { ALL_DATASETS, type HistoricalCandle } from "@/lib/historicalData";

interface Trade {
  type: "LONG" | "SHORT";
  entryPrice: number;
  entryIndex: number;
  exitPrice?: number;
  exitIndex?: number;
  sl?: number;
  tp?: number;
  pnl?: number;
  status: "OPEN" | "WIN" | "LOSS" | "BE";
}

interface ChallengeConfig {
  name: string;
  accountSize: number;
  profitTarget: number; // percentage
  maxDailyDD: number; // percentage
  maxTotalDD: number; // percentage
}

const CHALLENGES: ChallengeConfig[] = [
  { name: "Mini Challenge (10K)", accountSize: 10000, profitTarget: 8, maxDailyDD: 5, maxTotalDD: 10 },
  { name: "Standard Challenge (50K)", accountSize: 50000, profitTarget: 8, maxDailyDD: 5, maxTotalDD: 10 },
  { name: "Pro Challenge (100K)", accountSize: 100000, profitTarget: 8, maxDailyDD: 5, maxTotalDD: 10 },
  { name: "Elite Challenge (200K)", accountSize: 200000, profitTarget: 8, maxDailyDD: 5, maxTotalDD: 10 },
];

function CandleChart({ candles, currentIndex, position, sl, tp }: {
  candles: HistoricalCandle[];
  currentIndex: number;
  position: Trade | null;
  sl?: number;
  tp?: number;
}) {
  const visible = candles.slice(0, currentIndex + 1);
  const startIdx = Math.max(0, visible.length - 20);
  const shown = visible.slice(startIdx);

  if (shown.length === 0) return null;

  const allPrices = shown.flatMap(c => [c.high, c.low]);
  if (sl) allPrices.push(sl);
  if (tp) allPrices.push(tp);
  const minP = Math.min(...allPrices);
  const maxP = Math.max(...allPrices);
  const range = maxP - minP || 0.001;
  const W = 600;
  const H = 280;
  const pad = 20;
  const candleW = Math.min(24, (W - pad * 2) / shown.length - 2);

  const scaleY = (price: number) => pad + ((maxP - price) / range) * (H - pad * 2);

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ background: "#0a0b14", borderRadius: 12 }}>
      {/* Grid lines */}
      {[0.25, 0.5, 0.75].map(pct => {
        const y = pad + pct * (H - pad * 2);
        const price = maxP - pct * range;
        return (
          <g key={pct}>
            <line x1={pad} y1={y} x2={W - pad} y2={y} stroke="#1a1a30" strokeWidth={0.5} />
            <text x={W - pad + 4} y={y + 3} fill="#555" fontSize={8} fontFamily="monospace">{price.toFixed(4)}</text>
          </g>
        );
      })}

      {/* SL/TP lines */}
      {sl && (
        <g>
          <line x1={pad} y1={scaleY(sl)} x2={W - pad} y2={scaleY(sl)} stroke="#ef4444" strokeWidth={1} strokeDasharray="4,4" />
          <text x={pad} y={scaleY(sl) - 4} fill="#ef4444" fontSize={9} fontFamily="monospace">SL {sl.toFixed(5)}</text>
        </g>
      )}
      {tp && (
        <g>
          <line x1={pad} y1={scaleY(tp)} x2={W - pad} y2={scaleY(tp)} stroke="#10b981" strokeWidth={1} strokeDasharray="4,4" />
          <text x={pad} y={scaleY(tp) - 4} fill="#10b981" fontSize={9} fontFamily="monospace">TP {tp.toFixed(5)}</text>
        </g>
      )}

      {/* Entry line */}
      {position && position.status === "OPEN" && (
        <g>
          <line x1={pad} y1={scaleY(position.entryPrice)} x2={W - pad} y2={scaleY(position.entryPrice)} stroke="#3b82f6" strokeWidth={1} strokeDasharray="6,3" />
          <text x={pad} y={scaleY(position.entryPrice) - 4} fill="#3b82f6" fontSize={9} fontFamily="monospace">ENTRY {position.entryPrice.toFixed(5)}</text>
        </g>
      )}

      {/* Candles */}
      {shown.map((c, i) => {
        const x = pad + i * ((W - pad * 2) / shown.length) + ((W - pad * 2) / shown.length - candleW) / 2;
        const isGreen = c.close >= c.open;
        const bodyTop = scaleY(Math.max(c.open, c.close));
        const bodyBot = scaleY(Math.min(c.open, c.close));
        const color = isGreen ? "#10b981" : "#ef4444";
        return (
          <g key={i}>
            <line x1={x + candleW / 2} y1={scaleY(c.high)} x2={x + candleW / 2} y2={bodyTop} stroke={color} strokeWidth={1} />
            <line x1={x + candleW / 2} y1={bodyBot} x2={x + candleW / 2} y2={scaleY(c.low)} stroke={color} strokeWidth={1} />
            <rect x={x} y={bodyTop} width={candleW} height={Math.max(bodyBot - bodyTop, 1)} fill={color} rx={1} />
          </g>
        );
      })}
    </svg>
  );
}

export default function AdvancedSimulator() {
  const [mode, setMode] = useState<"free" | "challenge">("free");
  const [datasetIdx, setDatasetIdx] = useState(0);
  const [challengeIdx, setChallengeIdx] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(5);
  const [balance, setBalance] = useState(10000);
  const [startBalance, setStartBalance] = useState(10000);
  const [position, setPosition] = useState<Trade | null>(null);
  const [trades, setTrades] = useState<Trade[]>([]);
  const [slInput, setSlInput] = useState("");
  const [tpInput, setTpInput] = useState("");
  const [lotSize, setLotSize] = useState(0.1);
  const [challengeStatus, setChallengeStatus] = useState<"active" | "passed" | "failed" | null>(null);
  const [highWaterMark, setHighWaterMark] = useState(10000);

  const dataset = ALL_DATASETS[datasetIdx];
  const candles = dataset.data;
  const currentCandle = candles[currentIndex];
  const currentPrice = currentCandle?.close || 1.0850;

  const challenge = CHALLENGES[challengeIdx];

  const startChallenge = () => {
    setMode("challenge");
    setBalance(challenge.accountSize);
    setStartBalance(challenge.accountSize);
    setHighWaterMark(challenge.accountSize);
    setCurrentIndex(5);
    setPosition(null);
    setTrades([]);
    setChallengeStatus("active");
  };

  const startFree = () => {
    setMode("free");
    setBalance(10000);
    setStartBalance(10000);
    setCurrentIndex(5);
    setPosition(null);
    setTrades([]);
    setChallengeStatus(null);
  };

  const advanceCandle = useCallback(() => {
    if (currentIndex >= candles.length - 1) return;
    const nextIdx = currentIndex + 1;
    const nextCandle = candles[nextIdx];
    setCurrentIndex(nextIdx);

    // Check SL/TP
    if (position && position.status === "OPEN") {
      const sl = position.sl;
      const tp = position.tp;
      let closed = false;
      let exitPrice = 0;

      if (position.type === "LONG") {
        if (sl && nextCandle.low <= sl) { exitPrice = sl; closed = true; }
        else if (tp && nextCandle.high >= tp) { exitPrice = tp; closed = true; }
      } else {
        if (sl && nextCandle.high >= sl) { exitPrice = sl; closed = true; }
        else if (tp && nextCandle.low <= tp) { exitPrice = tp; closed = true; }
      }

      if (closed) {
        const pipDiff = position.type === "LONG" ? exitPrice - position.entryPrice : position.entryPrice - exitPrice;
        const pnl = parseFloat((pipDiff * lotSize * 100000).toFixed(2));
        const newBal = parseFloat((balance + pnl).toFixed(2));
        const closedTrade: Trade = { ...position, exitPrice, exitIndex: nextIdx, pnl, status: pnl > 0 ? "WIN" : pnl < 0 ? "LOSS" : "BE" };
        setPosition(null);
        setTrades(prev => [closedTrade, ...prev]);
        setBalance(newBal);
        setHighWaterMark(prev => Math.max(prev, newBal));

        // Check challenge conditions
        if (mode === "challenge" && challengeStatus === "active") {
          const totalDD = ((startBalance - newBal) / startBalance) * 100;
          const profitPct = ((newBal - startBalance) / startBalance) * 100;
          if (totalDD >= challenge.maxTotalDD) setChallengeStatus("failed");
          else if (profitPct >= challenge.profitTarget) setChallengeStatus("passed");
        }
      }
    }
  }, [currentIndex, candles, position, balance, lotSize, mode, challengeStatus, startBalance, challenge]);

  const openTrade = (type: "LONG" | "SHORT") => {
    if (position) return;
    const sl = slInput ? parseFloat(slInput) : undefined;
    const tp = tpInput ? parseFloat(tpInput) : undefined;
    setPosition({ type, entryPrice: currentPrice, entryIndex: currentIndex, sl, tp, status: "OPEN" });
  };

  const closeTrade = () => {
    if (!position || position.status !== "OPEN") return;
    const pipDiff = position.type === "LONG" ? currentPrice - position.entryPrice : position.entryPrice - currentPrice;
    const pnl = parseFloat((pipDiff * lotSize * 100000).toFixed(2));
    const newBal = parseFloat((balance + pnl).toFixed(2));
    const closedTrade: Trade = { ...position, exitPrice: currentPrice, exitIndex: currentIndex, pnl, status: pnl > 0 ? "WIN" : pnl < 0 ? "LOSS" : "BE" };
    setPosition(null);
    setTrades(prev => [closedTrade, ...prev]);
    setBalance(newBal);
    setHighWaterMark(prev => Math.max(prev, newBal));
  };

  const openPnl = position && position.status === "OPEN"
    ? parseFloat(((position.type === "LONG" ? currentPrice - position.entryPrice : position.entryPrice - currentPrice) * lotSize * 100000).toFixed(2))
    : 0;

  const wins = trades.filter(t => t.status === "WIN").length;
  const losses = trades.filter(t => t.status === "LOSS").length;
  const winRate = wins + losses > 0 ? ((wins / (wins + losses)) * 100).toFixed(1) : "0";
  const totalPnl = trades.reduce((s, t) => s + (t.pnl || 0), 0);
  const profitPct = ((balance - startBalance) / startBalance * 100).toFixed(2);
  const ddPct = ((highWaterMark - balance) / highWaterMark * 100).toFixed(2);

  return (
    <div className="space-y-4">
      {/* Mode Selection */}
      <div className="flex gap-3 flex-wrap">
        <button onClick={startFree}
          className={`px-5 py-2.5 rounded-xl text-sm font-medium transition ${mode === "free" && !challengeStatus ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white" : "bg-[#1a1a2e] text-[#a0a0b8] border border-[#2a2a40] hover:text-white"}`}>
          Practica Libre
        </button>
        <button onClick={startChallenge}
          className={`px-5 py-2.5 rounded-xl text-sm font-medium transition ${mode === "challenge" ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white" : "bg-[#1a1a2e] text-[#a0a0b8] border border-[#2a2a40] hover:text-white"}`}>
          Modo Challenge
        </button>
      </div>

      {/* Challenge Config */}
      {mode === "challenge" && !challengeStatus && (
        <div className="bg-[#1a1a2e] border border-amber-800/30 rounded-xl p-5">
          <h3 className="text-white font-bold mb-3">Selecciona tu Challenge</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
            {CHALLENGES.map((c, i) => (
              <button key={i} onClick={() => setChallengeIdx(i)}
                className={`p-3 rounded-xl text-center text-sm border transition ${i === challengeIdx ? "border-amber-500 bg-amber-900/20 text-white" : "border-[#2a2a40] bg-[#0d0d15] text-[#a0a0b8]"}`}>
                <p className="font-bold">${(c.accountSize / 1000).toFixed(0)}K</p>
                <p className="text-xs mt-1">Obj: {c.profitTarget}% | DD: {c.maxTotalDD}%</p>
              </button>
            ))}
          </div>
          <button onClick={startChallenge} className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3 rounded-xl font-bold hover:opacity-90 transition">
            INICIAR CHALLENGE
          </button>
        </div>
      )}

      {/* Challenge Status Banner */}
      {challengeStatus === "passed" && (
        <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 border border-green-600 rounded-xl p-5 text-center">
          <div className="text-4xl mb-2">🏆</div>
          <h3 className="text-2xl font-bold text-green-400">CHALLENGE SUPERADO!</h3>
          <p className="text-green-300">Has alcanzado el {challenge.profitTarget}% de beneficio. Cuenta: ${balance.toFixed(2)}</p>
          <button onClick={startFree} className="mt-3 bg-[#2a2a40] text-white px-6 py-2 rounded-lg">Volver a Practica</button>
        </div>
      )}
      {challengeStatus === "failed" && (
        <div className="bg-gradient-to-r from-red-900/30 to-rose-900/30 border border-red-600 rounded-xl p-5 text-center">
          <div className="text-4xl mb-2">💥</div>
          <h3 className="text-2xl font-bold text-red-400">CHALLENGE FALLIDO</h3>
          <p className="text-red-300">Has superado el drawdown máximo de {challenge.maxTotalDD}%.</p>
          <button onClick={startChallenge} className="mt-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-2 rounded-lg">Reintentar</button>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Chart + Controls */}
        <div className="lg:col-span-2 space-y-4">
          {/* Dataset selector */}
          <div className="flex gap-2 flex-wrap">
            {ALL_DATASETS.map((d, i) => (
              <button key={i} onClick={() => { setDatasetIdx(i); setCurrentIndex(5); setPosition(null); }}
                className={`text-xs px-3 py-1.5 rounded-lg transition ${i === datasetIdx ? "bg-blue-600 text-white" : "bg-[#1a1a2e] text-[#a0a0b8] border border-[#2a2a40]"}`}>
                {d.name}
              </button>
            ))}
          </div>

          {/* Chart */}
          <div className="bg-[#1a1a2e] border border-[#2a2a40] rounded-xl p-4">
            <div className="flex justify-between items-center mb-3">
              <div>
                <span className="text-white font-bold">{dataset.name}</span>
                <span className="text-[#a0a0b8] text-sm ml-3">Vela {currentIndex + 1}/{candles.length}</span>
              </div>
              <span className="text-2xl font-bold text-white font-mono">{currentPrice.toFixed(5)}</span>
            </div>
            <CandleChart candles={candles} currentIndex={currentIndex} position={position}
              sl={position?.sl} tp={position?.tp} />
            <div className="flex justify-center mt-3">
              <button onClick={advanceCandle} disabled={currentIndex >= candles.length - 1}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-2.5 rounded-xl font-medium hover:opacity-90 transition disabled:opacity-30">
                Siguiente Vela →
              </button>
            </div>
          </div>

          {/* Trade Controls */}
          <div className="bg-[#1a1a2e] border border-[#2a2a40] rounded-xl p-4">
            <div className="grid grid-cols-3 gap-3 mb-3">
              <div>
                <label className="text-xs text-[#a0a0b8]">Stop Loss</label>
                <input value={slInput} onChange={e => setSlInput(e.target.value)} placeholder={`Ej: ${(currentPrice - 0.003).toFixed(5)}`}
                  className="w-full bg-[#0d0d15] border border-[#2a2a40] rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-red-500" />
              </div>
              <div>
                <label className="text-xs text-[#a0a0b8]">Take Profit</label>
                <input value={tpInput} onChange={e => setTpInput(e.target.value)} placeholder={`Ej: ${(currentPrice + 0.006).toFixed(5)}`}
                  className="w-full bg-[#0d0d15] border border-[#2a2a40] rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-green-500" />
              </div>
              <div>
                <label className="text-xs text-[#a0a0b8]">Lotes</label>
                <input type="number" value={lotSize} onChange={e => setLotSize(+e.target.value)} step={0.01} min={0.01} max={10}
                  className="w-full bg-[#0d0d15] border border-[#2a2a40] rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-blue-500" />
              </div>
            </div>
            {!position ? (
              <div className="grid grid-cols-2 gap-3">
                <button onClick={() => openTrade("LONG")}
                  className="py-3 rounded-xl font-bold text-white bg-gradient-to-r from-green-600 to-emerald-600 hover:opacity-90 transition">
                  COMPRAR (LONG)
                </button>
                <button onClick={() => openTrade("SHORT")}
                  className="py-3 rounded-xl font-bold text-white bg-gradient-to-r from-red-600 to-rose-600 hover:opacity-90 transition">
                  VENDER (SHORT)
                </button>
              </div>
            ) : (
              <div className={`p-3 rounded-xl border ${openPnl >= 0 ? "bg-green-900/20 border-green-800/40" : "bg-red-900/20 border-red-800/40"}`}>
                <div className="flex justify-between items-center mb-2">
                  <span className={`font-bold ${position.type === "LONG" ? "text-green-400" : "text-red-400"}`}>{position.type}</span>
                  <span className={`text-lg font-bold ${openPnl >= 0 ? "text-green-400" : "text-red-400"}`}>{openPnl >= 0 ? "+" : ""}{openPnl.toFixed(2)}$</span>
                </div>
                <button onClick={closeTrade} className="w-full py-2 bg-[#2a2a40] text-white rounded-lg hover:bg-[#333] transition font-medium text-sm">
                  Cerrar posición al Mercado
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Stats Panel */}
        <div className="space-y-4">
          {/* Account */}
          <div className="bg-[#1a1a2e] border border-[#2a2a40] rounded-xl p-4">
            <h3 className="text-sm font-bold text-white mb-3 uppercase tracking-wider">
              {mode === "challenge" ? `Challenge ${(challenge.accountSize/1000)}K` : "Cuenta"}
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-[#a0a0b8]">Balance</span><span className="text-white font-bold">${balance.toFixed(2)}</span></div>
              <div className="flex justify-between"><span className="text-[#a0a0b8]">P/L Abierto</span><span className={openPnl >= 0 ? "text-green-400 font-bold" : "text-red-400 font-bold"}>{openPnl >= 0 ? "+" : ""}{openPnl.toFixed(2)}$</span></div>
              <div className="flex justify-between"><span className="text-[#a0a0b8]">Beneficio</span><span className={+profitPct >= 0 ? "text-green-400" : "text-red-400"}>{profitPct}%</span></div>
              <div className="flex justify-between"><span className="text-[#a0a0b8]">Drawdown</span><span className="text-amber-400">{ddPct}%</span></div>
            </div>
            {mode === "challenge" && challengeStatus === "active" && (
              <div className="mt-3 space-y-2">
                <div>
                  <div className="flex justify-between text-xs mb-1"><span className="text-[#a0a0b8]">Objetivo: {challenge.profitTarget}%</span><span className="text-green-400">{profitPct}%</span></div>
                  <div className="h-2 bg-[#0d0d15] rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full transition-all" style={{ width: `${Math.min(100, Math.max(0, +profitPct / challenge.profitTarget * 100))}%` }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1"><span className="text-[#a0a0b8]">DD Max: {challenge.maxTotalDD}%</span><span className="text-red-400">{ddPct}%</span></div>
                  <div className="h-2 bg-[#0d0d15] rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 rounded-full transition-all" style={{ width: `${Math.min(100, +ddPct / challenge.maxTotalDD * 100)}%` }} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Performance */}
          <div className="bg-[#1a1a2e] border border-[#2a2a40] rounded-xl p-4">
            <h3 className="text-sm font-bold text-white mb-3 uppercase tracking-wider">Rendimiento</h3>
            <div className="grid grid-cols-2 gap-3 text-center text-sm">
              <div className="bg-[#0d0d15] rounded-lg p-2"><p className="text-[#a0a0b8] text-xs">Trades</p><p className="text-white font-bold">{trades.length}</p></div>
              <div className="bg-[#0d0d15] rounded-lg p-2"><p className="text-[#a0a0b8] text-xs">Win Rate</p><p className="text-white font-bold">{winRate}%</p></div>
              <div className="bg-[#0d0d15] rounded-lg p-2"><p className="text-[#a0a0b8] text-xs">W / L</p><p className="font-bold"><span className="text-green-400">{wins}</span>/<span className="text-red-400">{losses}</span></p></div>
              <div className="bg-[#0d0d15] rounded-lg p-2"><p className="text-[#a0a0b8] text-xs">P/L Total</p><p className={`font-bold ${totalPnl >= 0 ? "text-green-400" : "text-red-400"}`}>{totalPnl >= 0 ? "+" : ""}{totalPnl.toFixed(2)}$</p></div>
            </div>
          </div>

          {/* Trade History */}
          <div className="bg-[#1a1a2e] border border-[#2a2a40] rounded-xl p-4">
            <h3 className="text-sm font-bold text-white mb-3 uppercase tracking-wider">Historial</h3>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {trades.length === 0 ? (
                <p className="text-[#555] text-xs text-center py-4">Abre tu primer trade</p>
              ) : trades.map((t, i) => (
                <div key={i} className="flex justify-between items-center text-xs p-2 bg-[#0d0d15] rounded-lg">
                  <span className={t.type === "LONG" ? "text-green-400" : "text-red-400"}>{t.type}</span>
                  <span className="text-[#a0a0b8]">{t.entryPrice?.toFixed(5)} → {t.exitPrice?.toFixed(5)}</span>
                  <span className={`font-bold ${(t.pnl || 0) >= 0 ? "text-green-400" : "text-red-400"}`}>
                    {(t.pnl || 0) >= 0 ? "+" : ""}{t.pnl?.toFixed(2)}$
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
