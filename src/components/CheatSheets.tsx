"use client";
import { useRef } from "react";

interface CheatSheetProps {
  title: string;
  items: { label: string; description: string; color: string }[];
  bgColor?: string;
}

function downloadSvgAsImage(svgElement: SVGSVGElement, filename: string) {
  const svgData = new XMLSerializer().serializeToString(svgElement);
  const canvas = document.createElement("canvas");
  canvas.width = 1200;
  canvas.height = 1600;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const img = new Image();
  img.onload = () => {
    ctx.drawImage(img, 0, 0);
    const link = document.createElement("a");
    link.download = filename;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };
  img.src = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgData)));
}

export function CandlePatternsCheatSheet() {
  const ref = useRef<SVGSVGElement>(null);
  const patterns = [
    { name: "Martillo", signal: "ALCISTA", desc: "Cuerpo arriba, mecha inferior larga. En soporte.", color: "#10b981" },
    { name: "Estrella Fugaz", signal: "BAJISTA", desc: "Cuerpo abajo, mecha superior larga. En resistencia.", color: "#ef4444" },
    { name: "Doji", signal: "NEUTRAL", desc: "Apertura = cierre. Indecision. Posible giro.", color: "#f59e0b" },
    { name: "Envolvente Alcista", signal: "ALCISTA", desc: "Verde grande envuelve roja anterior. En soporte.", color: "#10b981" },
    { name: "Envolvente Bajista", signal: "BAJISTA", desc: "Roja grande envuelve verde anterior. En resistencia.", color: "#ef4444" },
    { name: "Morning Star", signal: "ALCISTA", desc: "3 velas: roja, pequena, verde. Giro en suelo.", color: "#10b981" },
    { name: "Evening Star", signal: "BAJISTA", desc: "3 velas: verde, pequena, roja. Giro en techo.", color: "#ef4444" },
    { name: "Pin Bar", signal: "CONTEXTO", desc: "Mecha 2/3 del total. Rechazo fuerte de un nivel.", color: "#8b5cf6" },
    { name: "Inside Bar", signal: "NEUTRAL", desc: "Vela dentro de la anterior. Esperar ruptura.", color: "#f59e0b" },
    { name: "Three Soldiers", signal: "ALCISTA", desc: "3 verdes grandes consecutivas. Momentum fuerte.", color: "#10b981" },
  ];

  return (
    <div className="bg-[#1a1a2e] border border-[#2a2a40] rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-bold">Cheat Sheet: patrónes de Velas</h3>
        <button onClick={() => ref.current && downloadSvgAsImage(ref.current, "cheatsheet-velas.png")}
          className="text-xs bg-blue-600 text-white px-3 py-1.5 rounded-lg hover:bg-blue-700 transition">
          Descargar PNG
        </button>
      </div>
      <svg ref={ref} viewBox="0 0 600 800" className="w-full max-w-[600px] mx-auto">
        <rect width="600" height="800" fill="#0c0e1a" rx="12" />
        <text x="300" y="40" fill="white" fontSize="20" fontWeight="bold" textAnchor="middle" fontFamily="Inter, sans-serif">patrónES DE VELAS JAPONESAS</text>
        <text x="300" y="60" fill="#a0a0b8" fontSize="11" textAnchor="middle" fontFamily="Inter, sans-serif">El Mejor Curso de Trading del Mundo</text>
        {patterns.map((p, i) => {
          const y = 85 + i * 70;
          return (
            <g key={i}>
              <rect x="20" y={y} width="560" height="60" rx="8" fill={`${p.color}11`} stroke={`${p.color}33`} />
              <rect x="20" y={y} width="4" height="60" rx="2" fill={p.color} />
              <text x="40" y={y + 22} fill="white" fontSize="14" fontWeight="bold" fontFamily="Inter, sans-serif">{p.name}</text>
              <text x="40" y={y + 42} fill="#a0a0b8" fontSize="11" fontFamily="Inter, sans-serif">{p.desc}</text>
              <rect x="480" y={y + 10} width="80" height="24" rx="12" fill={`${p.color}22`} />
              <text x="520" y={y + 27} fill={p.color} fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="Inter, sans-serif">{p.signal}</text>
            </g>
          );
        })}
        <text x="300" y="790" fill="#555" fontSize="9" textAnchor="middle" fontFamily="Inter, sans-serif">Recuerda: Un patrón SOLO es valido en un nivel importante (S/R, OB, Fibonacci)</text>
      </svg>
    </div>
  );
}

export function RiskManagementCheatSheet() {
  const ref = useRef<SVGSVGElement>(null);
  const rules = [
    { rule: "Max 1-2% riesgo por trade", detail: "Cuenta 10K = max 100-200$ por trade", color: "#ef4444" },
    { rule: "SIEMPRE usa Stop Loss", detail: "Sin excepciones. Es tu cinturon de seguridad", color: "#ef4444" },
    { rule: "Ratio R:R mínimo 1:2", detail: "Con 1:2 solo necesitas 34% de acierto", color: "#f59e0b" },
    { rule: "Max 2-3 trades al dia", detail: "Más trades = más comisiones + peores decisiones", color: "#f59e0b" },
    { rule: "NUNCA promedies pérdidas", detail: "Si va en tu contra, acepta la pérdida", color: "#ef4444" },
    { rule: "Si pierdes 2 seguidas, PARA", detail: "Vuelve manana con mente fresca", color: "#8b5cf6" },
    { rule: "Position Size = Riesgo$ / (SL pips x Valor pip)", detail: "Calcula ANTES de cada trade", color: "#3b82f6" },
  ];

  return (
    <div className="bg-[#1a1a2e] border border-[#2a2a40] rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-bold">Cheat Sheet: Gestion de Riesgo</h3>
        <button onClick={() => ref.current && downloadSvgAsImage(ref.current, "cheatsheet-riesgo.png")}
          className="text-xs bg-blue-600 text-white px-3 py-1.5 rounded-lg hover:bg-blue-700 transition">
          Descargar PNG
        </button>
      </div>
      <svg ref={ref} viewBox="0 0 600 600" className="w-full max-w-[600px] mx-auto">
        <rect width="600" height="600" fill="#0c0e1a" rx="12" />
        <text x="300" y="40" fill="white" fontSize="20" fontWeight="bold" textAnchor="middle" fontFamily="Inter, sans-serif">REGLAS DE GESTION DE RIESGO</text>
        <text x="300" y="60" fill="#a0a0b8" fontSize="11" textAnchor="middle" fontFamily="Inter, sans-serif">Memoriza estas reglas. Tu cuenta depende de ellas.</text>
        {rules.map((r, i) => {
          const y = 80 + i * 70;
          return (
            <g key={i}>
              <rect x="20" y={y} width="560" height="60" rx="8" fill={`${r.color}11`} stroke={`${r.color}33`} />
              <circle cx="45" cy={y + 30} r="14" fill={r.color} />
              <text x="45" y={y + 35} fill="white" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="Inter, sans-serif">{i + 1}</text>
              <text x="72" y={y + 24} fill="white" fontSize="13" fontWeight="bold" fontFamily="Inter, sans-serif">{r.rule}</text>
              <text x="72" y={y + 44} fill="#a0a0b8" fontSize="10" fontFamily="Inter, sans-serif">{r.detail}</text>
            </g>
          );
        })}
        <text x="300" y="585" fill="#555" fontSize="9" textAnchor="middle" fontFamily="Inter, sans-serif">La gestion de riesgo es MAS IMPORTANTE que cualquier estrategia</text>
      </svg>
    </div>
  );
}

export function SMCCheatSheet() {
  const ref = useRef<SVGSVGElement>(null);
  const concepts = [
    { name: "Liquidez (BSL/SSL)", desc: "Stop Loss acumulados encima de máximos y debajo de mínimos", color: "#f59e0b" },
    { name: "Liquidity Grab", desc: "El precio caza SL antes de girarse en la direccion real", color: "#f59e0b" },
    { name: "Order Block (OB)", desc: "Ultima vela opuesta antes de un movimiento fuerte", color: "#3b82f6" },
    { name: "Fair Value Gap (FVG)", desc: "Hueco de 3 velas que el precio tiende a rellenar", color: "#8b5cf6" },
    { name: "Break of Structure", desc: "Ruptura de un máximo/mínimo anterior = cambio de tendencia", color: "#10b981" },
    { name: "Premium/Discount", desc: "Arriba del 50% = caro (vende). Abajo del 50% = barato (compra)", color: "#ec4899" },
    { name: "Power of 3 (AMD)", desc: "Asia acumula → London manipula → NY distribuye", color: "#6366f1" },
    { name: "Killzones", desc: "London 08-11 UTC | NY 13-16 UTC = maxima volátilidad", color: "#14b8a6" },
  ];

  return (
    <div className="bg-[#1a1a2e] border border-[#2a2a40] rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-bold">Cheat Sheet: Smart Money Concepts</h3>
        <button onClick={() => ref.current && downloadSvgAsImage(ref.current, "cheatsheet-smc.png")}
          className="text-xs bg-blue-600 text-white px-3 py-1.5 rounded-lg hover:bg-blue-700 transition">
          Descargar PNG
        </button>
      </div>
      <svg ref={ref} viewBox="0 0 600 680" className="w-full max-w-[600px] mx-auto">
        <rect width="600" height="680" fill="#0c0e1a" rx="12" />
        <text x="300" y="40" fill="white" fontSize="20" fontWeight="bold" textAnchor="middle" fontFamily="Inter, sans-serif">SMART MONEY CONCEPTS</text>
        <text x="300" y="60" fill="#a0a0b8" fontSize="11" textAnchor="middle" fontFamily="Inter, sans-serif">Opera como las instituciones</text>
        {concepts.map((c, i) => {
          const y = 80 + i * 72;
          return (
            <g key={i}>
              <rect x="20" y={y} width="560" height="62" rx="8" fill={`${c.color}11`} stroke={`${c.color}33`} />
              <rect x="20" y={y} width="4" height="62" rx="2" fill={c.color} />
              <text x="40" y={y + 24} fill="white" fontSize="14" fontWeight="bold" fontFamily="Inter, sans-serif">{c.name}</text>
              <text x="40" y={y + 46} fill="#a0a0b8" fontSize="11" fontFamily="Inter, sans-serif">{c.desc}</text>
            </g>
          );
        })}
        <rect x="60" y="645" width="480" height="25" rx="12" fill="#f59e0b15" stroke="#f59e0b33" />
        <text x="300" y="662" fill="#f59e0b" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="Inter, sans-serif">Setup A+ = Liquidez + OB + FVG + Estructura + Killzone (4+ confluencias)</text>
      </svg>
    </div>
  );
}

export function PropFirmCheatSheet() {
  const ref = useRef<SVGSVGElement>(null);
  return (
    <div className="bg-[#1a1a2e] border border-[#2a2a40] rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-bold">Cheat Sheet: Cuentas Fondeadas</h3>
        <button onClick={() => ref.current && downloadSvgAsImage(ref.current, "cheatsheet-propfirm.png")}
          className="text-xs bg-blue-600 text-white px-3 py-1.5 rounded-lg hover:bg-blue-700 transition">
          Descargar PNG
        </button>
      </div>
      <svg ref={ref} viewBox="0 0 600 550" className="w-full max-w-[600px] mx-auto">
        <rect width="600" height="550" fill="#0c0e1a" rx="12" />
        <text x="300" y="40" fill="white" fontSize="20" fontWeight="bold" textAnchor="middle" fontFamily="Inter, sans-serif">10 MANDAMIENTOS DE PROP FIRMS</text>
        {[
          "NUNCA arriesgues más del 1% por operación",
          "Revisa las reglas ANTES de operar cada dia",
          "Monitorea tu drawdown diario CONSTANTEMENTE",
          "No operes noticias de alto impacto",
          "Cierra operaciones ANTES del límite diario",
          "No dejes trades abiertos el viernes noche",
          "Usa los MISMOS pares que practicaste en demo",
          "No cambies de estrategia a mitad del challenge",
          "Si llevas buen beneficio, REDUCE el riesgo",
          "La PACIENCIA gana challenges, no la agresividad",
        ].map((rule, i) => {
          const y = 65 + i * 46;
          const colors = ["#ef4444", "#f59e0b", "#f59e0b", "#8b5cf6", "#ef4444", "#8b5cf6", "#3b82f6", "#3b82f6", "#10b981", "#10b981"];
          return (
            <g key={i}>
              <rect x="20" y={y} width="560" height="38" rx="6" fill={`${colors[i]}11`} />
              <circle cx="48" cy={y + 19} r="12" fill={colors[i]} />
              <text x="48" y={y + 24} fill="white" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="Inter, sans-serif">{i + 1}</text>
              <text x="72" y={y + 24} fill="#e0e0f0" fontSize="12" fontFamily="Inter, sans-serif">{rule}</text>
            </g>
          );
        })}
        <text x="300" y="535" fill="#f59e0b" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="Inter, sans-serif">Objetivo semanal: 2% | Riesgo: 0.5% | R:R mínimo: 1:2</text>
      </svg>
    </div>
  );
}
