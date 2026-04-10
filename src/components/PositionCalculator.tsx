"use client";
import { useState } from "react";

export default function PositionCalculator() {
  const [accountSize, setAccountSize] = useState(10000);
  const [riskPercent, setRiskPercent] = useState(1);
  const [slPips, setSlPips] = useState(30);
  const [pipValue, setPipValue] = useState(10); // $ per pip per standard lot

  const riskAmount = accountSize * (riskPercent / 100);
  const lotSize = slPips > 0 && pipValue > 0 ? riskAmount / (slPips * pipValue) : 0;
  const potentialLoss = riskAmount;

  return (
    <div className="bg-[#1a1a2e] border border-[#2a2a40] rounded-2xl p-6">
      <h3 className="text-xl font-bold text-white mb-1">Calculadora de Position Sizing</h3>
      <p className="text-sm text-[#a0a0b8] mb-6">Calcula el tamano exacto de tu posicion para cada trade</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm text-[#a0a0b8] mb-1">Tamano de Cuenta ($)</label>
          <input type="number" value={accountSize} onChange={e => setAccountSize(+e.target.value)}
            className="w-full bg-[#0d0d15] border border-[#2a2a40] rounded-lg px-4 py-2.5 text-white focus:border-blue-500 outline-none" />
        </div>
        <div>
          <label className="block text-sm text-[#a0a0b8] mb-1">Riesgo por Trade (%)</label>
          <input type="number" value={riskPercent} onChange={e => setRiskPercent(+e.target.value)} step="0.25" min="0.1" max="10"
            className="w-full bg-[#0d0d15] border border-[#2a2a40] rounded-lg px-4 py-2.5 text-white focus:border-blue-500 outline-none" />
        </div>
        <div>
          <label className="block text-sm text-[#a0a0b8] mb-1">Stop Loss (pips)</label>
          <input type="number" value={slPips} onChange={e => setSlPips(+e.target.value)} min="1"
            className="w-full bg-[#0d0d15] border border-[#2a2a40] rounded-lg px-4 py-2.5 text-white focus:border-blue-500 outline-none" />
        </div>
        <div>
          <label className="block text-sm text-[#a0a0b8] mb-1">Valor del Pip ($/lote std)</label>
          <select value={pipValue} onChange={e => setPipValue(+e.target.value)}
            className="w-full bg-[#0d0d15] border border-[#2a2a40] rounded-lg px-4 py-2.5 text-white focus:border-blue-500 outline-none">
            <option value={10}>EUR/USD, GBP/USD (~$10)</option>
            <option value={8}>USD/JPY (~$8)</option>
            <option value={1}>Oro XAUUSD (~$1/0.1 pip)</option>
            <option value={10}>US500, NASDAQ (~$10)</option>
            <option value={5}>Otros pares (~$5)</option>
          </select>
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/10 border border-blue-800/30 rounded-xl p-4 text-center">
          <p className="text-sm text-blue-400 mb-1">Riesgo en $</p>
          <p className="text-2xl font-bold text-white">${riskAmount.toFixed(2)}</p>
        </div>
        <div className="bg-gradient-to-br from-green-900/30 to-green-800/10 border border-green-800/30 rounded-xl p-4 text-center">
          <p className="text-sm text-green-400 mb-1">Tamano de Posicion</p>
          <p className="text-2xl font-bold text-white">{lotSize.toFixed(2)} lotes</p>
          <p className="text-xs text-[#a0a0b8]">{(lotSize * 10).toFixed(1)} mini | {(lotSize * 100).toFixed(0)} micro</p>
        </div>
        <div className="bg-gradient-to-br from-red-900/30 to-red-800/10 border border-red-800/30 rounded-xl p-4 text-center">
          <p className="text-sm text-red-400 mb-1">Perdida Maxima</p>
          <p className="text-2xl font-bold text-white">-${potentialLoss.toFixed(2)}</p>
        </div>
      </div>

      {/* R:R Calculator */}
      <div className="bg-[#0d0d15] rounded-xl p-4">
        <h4 className="text-sm font-bold text-white mb-3">Tabla Riesgo/Beneficio</h4>
        <div className="grid grid-cols-4 gap-2 text-center text-sm">
          <div className="text-[#a0a0b8]">R:R</div>
          <div className="text-[#a0a0b8]">TP (pips)</div>
          <div className="text-[#a0a0b8]">Ganancia</div>
          <div className="text-[#a0a0b8]">Win% min</div>
          {[1, 1.5, 2, 3, 5].map(rr => (
            <div key={rr} className="contents">
              <div className="text-white font-medium">1:{rr}</div>
              <div className="text-white">{(slPips * rr).toFixed(0)}</div>
              <div className="text-green-400">${(riskAmount * rr).toFixed(0)}</div>
              <div className="text-amber-400">{(100 / (1 + rr)).toFixed(0)}%</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
