"use client";

// ============================================================================
// SVG ANIMATED DIAGRAMS FOR CANDLE PATTERNS AND TRADING CONCEPTS
// ============================================================================

interface CandleProps {
  x: number;
  open: number;
  close: number;
  high: number;
  low: number;
  width?: number;
  baseY?: number;
  scale?: number;
  delay?: number;
}

function Candle({ x, open, close, high, low, width = 28, baseY = 250, scale = 2, delay = 0 }: CandleProps) {
  const isGreen = close > open;
  const bodyTop = baseY - Math.max(open, close) * scale;
  const bodyBottom = baseY - Math.min(open, close) * scale;
  const bodyHeight = Math.max(bodyBottom - bodyTop, 2);
  const highY = baseY - high * scale;
  const lowY = baseY - low * scale;
  const color = isGreen ? "#10b981" : "#ef4444";

  return (
    <g style={{ animation: `fadeSlideUp 0.5s ease-out ${delay}s both` }}>
      <line x1={x + width / 2} y1={highY} x2={x + width / 2} y2={bodyTop} stroke={color} strokeWidth={2} />
      <line x1={x + width / 2} y1={bodyBottom} x2={x + width / 2} y2={lowY} stroke={color} strokeWidth={2} />
      <rect x={x} y={bodyTop} width={width} height={bodyHeight} fill={color} rx={3}
        stroke={isGreen ? "#059669" : "#dc2626"} strokeWidth={1} />
    </g>
  );
}

function Label({ x, y, text, color = "#a0a0b8", size = 11, anchor = "middle" }: { x: number; y: number; text: string; color?: string; size?: number; anchor?: "middle" | "start" | "end" }) {
  return <text x={x} y={y} fill={color} fontSize={size} textAnchor={anchor} fontFamily="Inter, sans-serif">{text}</text>;
}

function Arrow({ x1, y1, x2, y2, color = "#a0a0b8", dashed = false }: { x1: number; y1: number; x2: number; y2: number; color?: string; dashed?: boolean }) {
  return (
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth={1.5}
      strokeDasharray={dashed ? "5,5" : undefined} markerEnd="url(#arrowhead)" />
  );
}

function ArrowDef() {
  return (
    <defs>
      <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
        <polygon points="0 0, 8 3, 0 6" fill="#a0a0b8" />
      </marker>
      <marker id="arrowGreen" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
        <polygon points="0 0, 8 3, 0 6" fill="#10b981" />
      </marker>
      <marker id="arrowRed" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
        <polygon points="0 0, 8 3, 0 6" fill="#ef4444" />
      </marker>
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        @keyframes drawLine {
          from { stroke-dashoffset: 200; }
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </defs>
  );
}

// ============================================================================
// PATTERN DIAGRAMS
// ============================================================================

export function HammerDiagram() {
  return (
    <div className="bg-[#0d0d18] rounded-xl p-4 border border-[#2a2a40]">
      <h4 className="text-white text-sm font-bold mb-2 text-center">Martillo (Hammer)</h4>
      <svg viewBox="0 0 200 280" className="w-full max-w-[200px] mx-auto">
        <ArrowDef />
        <Candle x={80} open={85} close={90} high={95} low={40} width={40} delay={0.2} />
        <Label x={165} y={38} text="máximo" size={9} />
        <Label x={165} y={145} text="Cuerpo" size={9} color="#10b981" />
        <Label x={165} y={230} text="Rechazo" size={9} color="#f59e0b" />
        {/* Annotations */}
        <line x1={130} y1={155} x2={130} y2={225} stroke="#f59e0b" strokeWidth={2} strokeDasharray="4,3" style={{ animation: "pulse 2s infinite" }} />
        <Label x={100} y={270} text="Señal ALCISTA" color="#10b981" size={11} />
      </svg>
    </div>
  );
}

export function ShootingStarDiagram() {
  return (
    <div className="bg-[#0d0d18] rounded-xl p-4 border border-[#2a2a40]">
      <h4 className="text-white text-sm font-bold mb-2 text-center">Estrella Fugaz</h4>
      <svg viewBox="0 0 200 280" className="w-full max-w-[200px] mx-auto">
        <ArrowDef />
        <Candle x={80} open={55} close={50} high={100} low={45} width={40} delay={0.2} />
        <Label x={165} y={55} text="Rechazo" size={9} color="#f59e0b" />
        <Label x={165} y={175} text="Cuerpo" size={9} color="#ef4444" />
        <line x1={130} y1={30} x2={130} y2={135} stroke="#f59e0b" strokeWidth={2} strokeDasharray="4,3" style={{ animation: "pulse 2s infinite" }} />
        <Label x={100} y={270} text="Señal BAJISTA" color="#ef4444" size={11} />
      </svg>
    </div>
  );
}

export function EngulfingDiagram() {
  return (
    <div className="bg-[#0d0d18] rounded-xl p-4 border border-[#2a2a40]">
      <h4 className="text-white text-sm font-bold mb-2 text-center">Envolvente Alcista</h4>
      <svg viewBox="0 0 220 280" className="w-full max-w-[220px] mx-auto">
        <ArrowDef />
        <Candle x={50} open={75} close={60} high={80} low={55} width={35} delay={0.1} />
        <Candle x={100} open={55} close={85} high={90} low={50} width={45} delay={0.4} />
        <rect x={95} y={55} width={55} height={115} fill="none" stroke="#10b981" strokeWidth={1.5} strokeDasharray="5,3" rx={5} style={{ animation: "pulse 2s infinite" }} />
        <Label x={110} y={270} text="Señal ALCISTA" color="#10b981" size={11} />
      </svg>
    </div>
  );
}

export function DojiDiagram() {
  return (
    <div className="bg-[#0d0d18] rounded-xl p-4 border border-[#2a2a40]">
      <h4 className="text-white text-sm font-bold mb-2 text-center">Doji</h4>
      <svg viewBox="0 0 200 280" className="w-full max-w-[200px] mx-auto">
        <ArrowDef />
        <Candle x={80} open={70} close={71} high={95} low={45} width={40} delay={0.2} />
        <Label x={155} y={95} text="Mecha" size={9} />
        <Label x={155} y={150} text="Cuerpo" size={9} color="#f59e0b" />
        <Label x={155} y={205} text="Mecha" size={9} />
        <Label x={100} y={265} text="INDECISION" color="#f59e0b" size={11} />
      </svg>
    </div>
  );
}

export function MorningStarDiagram() {
  return (
    <div className="bg-[#0d0d18] rounded-xl p-4 border border-[#2a2a40]">
      <h4 className="text-white text-sm font-bold mb-2 text-center">Morning Star (Estrella de la Manana)</h4>
      <svg viewBox="0 0 300 280" className="w-full max-w-[300px] mx-auto">
        <ArrowDef />
        <Candle x={40} open={90} close={55} high={95} low={50} width={35} delay={0.1} />
        <Candle x={100} open={50} close={48} high={55} low={40} width={25} delay={0.3} />
        <Candle x={150} open={50} close={85} high={90} low={45} width={35} delay={0.5} />
        <Label x={57} y={20} text="1. Bajista" size={9} color="#ef4444" />
        <Label x={112} y={20} text="2. Indecision" size={9} color="#f59e0b" />
        <Label x={167} y={20} text="3. Alcista" size={9} color="#10b981" />
        <path d="M 60 245 Q 120 260 170 245" fill="none" stroke="#10b981" strokeWidth={2} markerEnd="url(#arrowGreen)"
          strokeDasharray="200" style={{ animation: "drawLine 1.5s ease-out 0.8s both" }} />
        <Label x={150} y={270} text="GIRO ALCISTA" color="#10b981" size={12} />
      </svg>
    </div>
  );
}

// ============================================================================
// STRUCTURE DIAGRAMS
// ============================================================================

export function UptrendDiagram() {
  return (
    <div className="bg-[#0d0d18] rounded-xl p-4 border border-[#2a2a40]">
      <h4 className="text-white text-sm font-bold mb-2 text-center">Tendencia Alcista (HH / HL)</h4>
      <svg viewBox="0 0 400 220" className="w-full max-w-[400px] mx-auto">
        <ArrowDef />
        {/* Price path */}
        <polyline points="30,180 80,130 120,155 170,95 210,125 270,60 310,90 370,30"
          fill="none" stroke="#10b981" strokeWidth={2.5}
          strokeDasharray="500" style={{ animation: "drawLine 2s ease-out 0.3s both" }} />
        {/* HH labels */}
        <circle cx={80} cy={130} r={4} fill="#10b981" />
        <circle cx={170} cy={95} r={4} fill="#10b981" />
        <circle cx={270} cy={60} r={4} fill="#10b981" />
        <circle cx={370} cy={30} r={4} fill="#10b981" />
        <Label x={80} y={120} text="HH" color="#10b981" size={10} />
        <Label x={170} y={85} text="HH" color="#10b981" size={10} />
        <Label x={270} y={50} text="HH" color="#10b981" size={10} />
        {/* HL labels */}
        <circle cx={120} cy={155} r={4} fill="#3b82f6" />
        <circle cx={210} cy={125} r={4} fill="#3b82f6" />
        <circle cx={310} cy={90} r={4} fill="#3b82f6" />
        <Label x={120} y={172} text="HL" color="#3b82f6" size={10} />
        <Label x={210} y={142} text="HL" color="#3b82f6" size={10} />
        <Label x={310} y={107} text="HL" color="#3b82f6" size={10} />
        <Label x={200} y={210} text="máximos y mínimos Cada Vez MAS ALTOS" color="#10b981" size={11} />
      </svg>
    </div>
  );
}

export function DowntrendDiagram() {
  return (
    <div className="bg-[#0d0d18] rounded-xl p-4 border border-[#2a2a40]">
      <h4 className="text-white text-sm font-bold mb-2 text-center">Tendencia Bajista (LH / LL)</h4>
      <svg viewBox="0 0 400 220" className="w-full max-w-[400px] mx-auto">
        <ArrowDef />
        <polyline points="30,30 80,80 120,55 170,115 210,85 270,150 310,120 370,185"
          fill="none" stroke="#ef4444" strokeWidth={2.5}
          strokeDasharray="500" style={{ animation: "drawLine 2s ease-out 0.3s both" }} />
        <circle cx={80} cy={80} r={4} fill="#ef4444" />
        <circle cx={170} cy={115} r={4} fill="#ef4444" />
        <circle cx={270} cy={150} r={4} fill="#ef4444" />
        <Label x={80} y={97} text="LL" color="#ef4444" size={10} />
        <Label x={170} y={132} text="LL" color="#ef4444" size={10} />
        <Label x={270} y={167} text="LL" color="#ef4444" size={10} />
        <circle cx={120} cy={55} r={4} fill="#f59e0b" />
        <circle cx={210} cy={85} r={4} fill="#f59e0b" />
        <circle cx={310} cy={120} r={4} fill="#f59e0b" />
        <Label x={120} y={47} text="LH" color="#f59e0b" size={10} />
        <Label x={210} y={77} text="LH" color="#f59e0b" size={10} />
        <Label x={310} y={112} text="LH" color="#f59e0b" size={10} />
        <Label x={200} y={210} text="máximos y mínimos Cada Vez MAS BAJOS" color="#ef4444" size={11} />
      </svg>
    </div>
  );
}

export function BOSDiagram() {
  return (
    <div className="bg-[#0d0d18] rounded-xl p-4 border border-[#2a2a40]">
      <h4 className="text-white text-sm font-bold mb-2 text-center">Break of Structure (BOS)</h4>
      <svg viewBox="0 0 400 240" className="w-full max-w-[400px] mx-auto">
        <ArrowDef />
        {/* Downtrend */}
        <polyline points="30,40 70,80 100,55 150,120 180,90 230,155"
          fill="none" stroke="#ef4444" strokeWidth={2} />
        {/* BOS point */}
        <line x1={30} y1={90} x2={250} y2={90} stroke="#f59e0b" strokeWidth={1} strokeDasharray="5,5" />
        <Label x={260} y={93} text="Nivel LH" color="#f59e0b" size={9} anchor="start" />
        {/* Break and reversal */}
        <polyline points="230,155 260,100 280,75 320,50 360,30"
          fill="none" stroke="#10b981" strokeWidth={2.5}
          strokeDasharray="200" style={{ animation: "drawLine 1.5s ease-out 1s both" }} />
        {/* BOS label */}
        <circle cx={270} cy={85} r={6} fill="none" stroke="#f59e0b" strokeWidth={2} style={{ animation: "pulse 1.5s infinite" }} />
        <Label x={275} y={75} text="BOS!" color="#f59e0b" size={12} anchor="start" />
        <rect x={100} y={200} width={200} height={30} rx={8} fill="#f59e0b22" stroke="#f59e0b55" />
        <Label x={200} y={220} text="Cambio de tendencia" color="#f59e0b" size={11} />
      </svg>
    </div>
  );
}

export function SupportResistanceDiagram() {
  return (
    <div className="bg-[#0d0d18] rounded-xl p-4 border border-[#2a2a40]">
      <h4 className="text-white text-sm font-bold mb-2 text-center">Soporte y Resistencia (Zonas)</h4>
      <svg viewBox="0 0 420 250" className="w-full max-w-[420px] mx-auto">
        <ArrowDef />
        {/* Resistance zone */}
        <rect x={20} y={40} width={380} height={25} rx={4} fill="#ef444420" stroke="#ef444440" />
        <Label x={410} y={57} text="Resistencia" color="#ef4444" size={10} anchor="end" />
        {/* Support zone */}
        <rect x={20} y={175} width={380} height={25} rx={4} fill="#10b98120" stroke="#10b98140" />
        <Label x={410} y={192} text="Soporte" color="#10b981" size={10} anchor="end" />
        {/* Price bouncing */}
        <polyline points="40,120 70,55 100,65 130,180 160,190 195,60 225,50 260,185 290,175 325,55 355,65 390,120"
          fill="none" stroke="#8b5cf6" strokeWidth={2}
          strokeDasharray="600" style={{ animation: "drawLine 3s ease-out 0.5s both" }} />
        {/* Bounce arrows */}
        <circle cx={130} cy={185} r={5} fill="#10b981" style={{ animation: "pulse 2s infinite 0.5s" }} />
        <circle cx={260} cy={185} r={5} fill="#10b981" style={{ animation: "pulse 2s infinite 1s" }} />
        <circle cx={195} cy={55} r={5} fill="#ef4444" style={{ animation: "pulse 2s infinite 0.7s" }} />
        <circle cx={325} cy={55} r={5} fill="#ef4444" style={{ animation: "pulse 2s infinite 1.2s" }} />
        <Label x={210} y={240} text="El precio REBOTA entre zonas" color="#8b5cf6" size={11} />
      </svg>
    </div>
  );
}

export function FibonacciDiagram() {
  return (
    <div className="bg-[#0d0d18] rounded-xl p-4 border border-[#2a2a40]">
      <h4 className="text-white text-sm font-bold mb-2 text-center">Retrocesos de Fibonacci</h4>
      <svg viewBox="0 0 400 280" className="w-full max-w-[400px] mx-auto">
        <ArrowDef />
        {/* Impulse move */}
        <line x1={50} y1={240} x2={150} y2={40} stroke="#10b981" strokeWidth={2.5} />
        {/* Fib levels */}
        {[
          { level: "0%", y: 40, color: "#10b981" },
          { level: "23.6%", y: 87, color: "#4ade80" },
          { level: "38.2%", y: 116, color: "#60a5fa" },
          { level: "50%", y: 140, color: "#fbbf24" },
          { level: "61.8%", y: 164, color: "#f59e0b" },
          { level: "78.6%", y: 197, color: "#ef4444" },
          { level: "100%", y: 240, color: "#ef4444" },
        ].map((f, i) => (
          <g key={f.level}>
            <line x1={140} y1={f.y} x2={350} y2={f.y} stroke={f.color} strokeWidth={1} strokeDasharray="4,4" opacity={0.6} />
            <Label x={355} y={f.y + 4} text={f.level} color={f.color} size={9} anchor="start" />
          </g>
        ))}
        {/* OTE Zone */}
        <rect x={140} y={155} width={200} height={50} rx={4} fill="#f59e0b15" stroke="#f59e0b44" strokeWidth={1.5} />
        <Label x={240} y={183} text="ZONA OTE" color="#f59e0b" size={11} />
        {/* Retracement */}
        <polyline points="150,40 200,60 220,80 250,164 270,150 310,100 350,40"
          fill="none" stroke="#8b5cf6" strokeWidth={2}
          strokeDasharray="400" style={{ animation: "drawLine 2.5s ease-out 0.5s both" }} />
        <circle cx={250} cy={164} r={6} fill="#f59e0b" style={{ animation: "pulse 1.5s infinite" }} />
        <Label x={250} y={210} text="Entrada optima" color="#f59e0b" size={10} />
      </svg>
    </div>
  );
}

export function OrderBlockDiagram() {
  return (
    <div className="bg-[#0d0d18] rounded-xl p-4 border border-[#2a2a40]">
      <h4 className="text-white text-sm font-bold mb-2 text-center">Order Block Alcista</h4>
      <svg viewBox="0 0 400 260" className="w-full max-w-[400px] mx-auto">
        <ArrowDef />
        {/* Context candles going down */}
        <Candle x={30} open={75} close={65} high={78} low={62} width={22} delay={0.1} />
        <Candle x={60} open={65} close={55} high={68} low={52} width={22} delay={0.2} />
        {/* ORDER BLOCK - last bearish candle before move up */}
        <rect x={85} y={108} width={35} height={48} rx={4} fill="#3b82f622" stroke="#3b82f6" strokeWidth={2} strokeDasharray="5,3" style={{ animation: "pulse 2s infinite" }} />
        <Candle x={90} open={55} close={45} high={58} low={42} width={22} delay={0.3} />
        <Label x={103} y={170} text="OB" color="#3b82f6" size={11} />
        {/* Displacement up */}
        <Candle x={125} open={45} close={70} high={73} low={43} width={25} delay={0.5} />
        <Candle x={158} open={70} close={90} high={93} low={68} width={25} delay={0.6} />
        <Candle x={191} open={90} close={105} high={108} low={88} width={25} delay={0.7} />
        {/* Return to OB */}
        <Candle x={224} open={105} close={95} high={107} low={92} width={22} delay={0.8} />
        <Candle x={254} open={95} close={85} high={97} low={82} width={22} delay={0.9} />
        <Candle x={284} open={85} close={55} high={87} low={52} width={22} delay={1.0} />
        {/* Bounce from OB */}
        <Candle x={314} open={52} close={70} high={73} low={50} width={25} delay={1.2} />
        <Candle x={347} open={70} close={95} high={98} low={68} width={25} delay={1.3} />
        {/* Entry arrow */}
        <Label x={320} y={250} text="Entrada en OB" color="#3b82f6" size={11} />
      </svg>
    </div>
  );
}

export function LiquidityDiagram() {
  return (
    <div className="bg-[#0d0d18] rounded-xl p-4 border border-[#2a2a40]">
      <h4 className="text-white text-sm font-bold mb-2 text-center">Caza de Liquidez (Liquidity Grab)</h4>
      <svg viewBox="0 0 420 260" className="w-full max-w-[420px] mx-auto">
        <ArrowDef />
        {/* Equal lows - liquidity pool */}
        <line x1={40} y1={180} x2={250} y2={180} stroke="#ef4444" strokeWidth={1.5} strokeDasharray="5,5" />
        <Label x={260} y={183} text="Equal Lows" color="#ef4444" size={9} anchor="start" />
        {/* Stop losses below */}
        <rect x={40} y={185} width={210} height={20} rx={3} fill="#ef444415" />
        <Label x={145} y={199} text="SL de traders retail" color="#ef4444" size={8} />
        {/* Price touching equal lows multiple times */}
        <polyline points="50,100 80,175 110,90 150,178 180,80 220,176"
          fill="none" stroke="#8b5cf6" strokeWidth={2} />
        {/* Liquidity grab - sweep below */}
        <polyline points="220,176 260,210 280,200"
          fill="none" stroke="#f59e0b" strokeWidth={2.5}
          strokeDasharray="100" style={{ animation: "drawLine 1s ease-out 1s both" }} />
        <circle cx={260} cy={210} r={6} fill="#f59e0b" style={{ animation: "pulse 1.5s infinite" }} />
        <Label x={290} y={215} text="SWEEP!" color="#f59e0b" size={11} anchor="start" />
        {/* Reversal up */}
        <polyline points="280,200 310,140 340,80 380,30"
          fill="none" stroke="#10b981" strokeWidth={2.5}
          strokeDasharray="200" style={{ animation: "drawLine 1.5s ease-out 1.5s both" }} />
        <Label x={350} y={25} text="Rally" color="#10b981" size={10} />
        <Label x={210} y={250} text="Caza SL → Giro → Movimiento real" color="#f59e0b" size={10} />
      </svg>
    </div>
  );
}

export function PowerOf3Diagram() {
  return (
    <div className="bg-[#0d0d18] rounded-xl p-4 border border-[#2a2a40]">
      <h4 className="text-white text-sm font-bold mb-2 text-center">Power of 3 (AMD)</h4>
      <svg viewBox="0 0 450 260" className="w-full max-w-[450px] mx-auto">
        <ArrowDef />
        {/* Asia Range */}
        <rect x={20} y={100} width={130} height={60} rx={4} fill="#6366f115" stroke="#6366f144" />
        <Label x={85} y={93} text="ASIA (Rango)" color="#6366f1" size={10} />
        <line x1={20} y1={110} x2={150} y2={110} stroke="#6366f144" strokeWidth={1} />
        <Label x={155} y={113} text="Asia High" color="#6366f1" size={8} anchor="start" />
        <line x1={20} y1={150} x2={150} y2={150} stroke="#6366f144" strokeWidth={1} />
        <Label x={155} y={153} text="Asia Low" color="#6366f1" size={8} anchor="start" />
        {/* Price in Asia */}
        <polyline points="30,130 50,120 70,140 90,125 110,135 130,128 145,130"
          fill="none" stroke="#8b5cf6" strokeWidth={1.5} />
        {/* London - Manipulation down */}
        <rect x={150} y={100} width={100} height={100} rx={4} fill="#ef444410" stroke="#ef444430" />
        <Label x={200} y={93} text="LONDON" color="#ef4444" size={10} />
        <polyline points="145,130 170,150 185,160 200,180 210,175"
          fill="none" stroke="#ef4444" strokeWidth={2.5}
          strokeDasharray="200" style={{ animation: "drawLine 1s ease-out 0.5s both" }} />
        <Label x={200} y={195} text="Manipulacion" color="#ef4444" size={9} />
        <circle cx={200} cy={180} r={5} fill="#f59e0b" style={{ animation: "pulse 1.5s infinite" }} />
        {/* NY - Distribution up */}
        <rect x={250} y={20} width={170} height={180} rx={4} fill="#10b98110" stroke="#10b98130" />
        <Label x={335} y={15} text="NEW YORK" color="#10b981" size={10} />
        <polyline points="210,175 240,140 270,100 300,70 340,45 380,25 420,20"
          fill="none" stroke="#10b981" strokeWidth={2.5}
          strokeDasharray="300" style={{ animation: "drawLine 2s ease-out 1.5s both" }} />
        <Label x={335} y={210} text="Distribucion" color="#10b981" size={9} />
        <Label x={225} y={250} text="Acumulacion → Manipulacion → Distribucion" color="#f59e0b" size={10} />
      </svg>
    </div>
  );
}

// Export all diagrams as a map for easy lookup
export const DIAGRAMS = {
  hammer: HammerDiagram,
  shootingStar: ShootingStarDiagram,
  engulfing: EngulfingDiagram,
  doji: DojiDiagram,
  morningStar: MorningStarDiagram,
  uptrend: UptrendDiagram,
  downtrend: DowntrendDiagram,
  bos: BOSDiagram,
  supportResistance: SupportResistanceDiagram,
  fibonacci: FibonacciDiagram,
  orderBlock: OrderBlockDiagram,
  liquidity: LiquidityDiagram,
  powerOf3: PowerOf3Diagram,
};
