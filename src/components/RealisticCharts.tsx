"use client";

// ============================================================================
// REALISTIC CANDLESTICK CHARTS - Simulating TradingView-style charts
// ============================================================================

interface Candle {
  o: number; h: number; l: number; c: number;
}

function drawCandles(candles: Candle[], W: number, H: number, pad: number) {
  const allP = candles.flatMap(c => [c.h, c.l]);
  const minP = Math.min(...allP);
  const maxP = Math.max(...allP);
  const range = maxP - minP || 0.001;
  const cW = Math.min(14, (W - pad * 2) / candles.length - 2);
  const scaleY = (p: number) => pad + ((maxP - p) / range) * (H - pad * 2);

  return { minP, maxP, range, cW, scaleY };
}

function CandlestickSVG({ candles, W, H, pad, annotations }: {
  candles: Candle[]; W: number; H: number; pad: number;
  annotations?: React.ReactNode;
}) {
  const { minP, maxP, range, cW, scaleY } = drawCandles(candles, W, H, pad);

  // Price grid lines
  const gridLines = 5;
  const gridPrices = Array.from({ length: gridLines }, (_, i) => minP + (range * i) / (gridLines - 1));

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ background: "#131722", borderRadius: 8 }}>
      {/* Grid */}
      {gridPrices.map((p, i) => (
        <g key={i}>
          <line x1={pad} y1={scaleY(p)} x2={W - 50} y2={scaleY(p)} stroke="#1e222d" strokeWidth={0.5} />
          <text x={W - 48} y={scaleY(p) + 3} fill="#787b86" fontSize={8} fontFamily="monospace">{p.toFixed(4)}</text>
        </g>
      ))}

      {/* Candles */}
      {candles.map((c, i) => {
        const x = pad + i * ((W - pad - 55) / candles.length);
        const isGreen = c.c >= c.o;
        const bodyTop = scaleY(Math.max(c.o, c.c));
        const bodyBot = scaleY(Math.min(c.o, c.c));
        const color = isGreen ? "#26a69a" : "#ef5350";
        return (
          <g key={i}>
            <line x1={x + cW / 2} y1={scaleY(c.h)} x2={x + cW / 2} y2={bodyTop} stroke={color} strokeWidth={1} />
            <line x1={x + cW / 2} y1={bodyBot} x2={x + cW / 2} y2={scaleY(c.l)} stroke={color} strokeWidth={1} />
            <rect x={x} y={bodyTop} width={cW} height={Math.max(bodyBot - bodyTop, 0.5)} fill={color} />
          </g>
        );
      })}

      {/* Annotations overlay */}
      {annotations}
    </svg>
  );
}

// ============================================================================
// CHART 1: Support & Resistance with bounces
// ============================================================================
export function SupportResistanceChart() {
  const candles: Candle[] = [
    {o:1.0820,h:1.0835,l:1.0815,c:1.0830}, {o:1.0830,h:1.0845,l:1.0825,c:1.0840},
    {o:1.0840,h:1.0858,l:1.0838,c:1.0855}, {o:1.0855,h:1.0870,l:1.0848,c:1.0862},
    {o:1.0862,h:1.0878,l:1.0855,c:1.0872}, {o:1.0872,h:1.0885,l:1.0868,c:1.0880},
    {o:1.0880,h:1.0892,l:1.0875,c:1.0878}, {o:1.0878,h:1.0890,l:1.0865,c:1.0868},
    {o:1.0868,h:1.0875,l:1.0852,c:1.0855}, {o:1.0855,h:1.0862,l:1.0840,c:1.0845},
    {o:1.0845,h:1.0858,l:1.0835,c:1.0852}, {o:1.0852,h:1.0865,l:1.0848,c:1.0862},
    {o:1.0862,h:1.0878,l:1.0858,c:1.0875}, {o:1.0875,h:1.0888,l:1.0870,c:1.0885},
    {o:1.0885,h:1.0895,l:1.0878,c:1.0882}, {o:1.0882,h:1.0892,l:1.0870,c:1.0875},
    {o:1.0875,h:1.0882,l:1.0858,c:1.0862}, {o:1.0862,h:1.0870,l:1.0845,c:1.0848},
    {o:1.0848,h:1.0855,l:1.0838,c:1.0842}, {o:1.0842,h:1.0855,l:1.0835,c:1.0850},
    {o:1.0850,h:1.0868,l:1.0845,c:1.0865}, {o:1.0865,h:1.0880,l:1.0860,c:1.0878},
    {o:1.0878,h:1.0892,l:1.0872,c:1.0888}, {o:1.0888,h:1.0898,l:1.0882,c:1.0895},
    {o:1.0895,h:1.0905,l:1.0888,c:1.0892}, {o:1.0892,h:1.0900,l:1.0880,c:1.0885},
  ];
  const W = 650, H = 300, pad = 15;
  const { scaleY } = drawCandles(candles, W, H, pad);

  const annotations = (
    <>
      {/* Resistance zone */}
      <rect x={pad} y={scaleY(1.0898)} width={W - pad - 55} height={scaleY(1.0885) - scaleY(1.0898)} fill="#ef535015" stroke="#ef535040" strokeDasharray="4,4" />
      <text x={pad + 5} y={scaleY(1.0898) - 4} fill="#ef5350" fontSize={9} fontFamily="Inter">Resistencia 1.0885-1.0898</text>

      {/* Support zone */}
      <rect x={pad} y={scaleY(1.0850)} width={W - pad - 55} height={scaleY(1.0835) - scaleY(1.0850)} fill="#26a69a15" stroke="#26a69a40" strokeDasharray="4,4" />
      <text x={pad + 5} y={scaleY(1.0835) + 14} fill="#26a69a" fontSize={9} fontFamily="Inter">Soporte 1.0835-1.0850</text>

      {/* Bounce arrows */}
      <circle cx={160} cy={scaleY(1.0840)} r={4} fill="#26a69a" opacity={0.8} />
      <text x={168} y={scaleY(1.0840) + 3} fill="#26a69a" fontSize={8}>Rebote</text>
      <circle cx={310} cy={scaleY(1.0842)} r={4} fill="#26a69a" opacity={0.8} />
      <circle cx={115} cy={scaleY(1.0892)} r={4} fill="#ef5350" opacity={0.8} />
      <text x={123} y={scaleY(1.0892) + 3} fill="#ef5350" fontSize={8}>Rechazo</text>
    </>
  );

  return (
    <div className="bg-[#1a1a2e] border border-[#2a2a40] rounded-xl p-4">
      <h4 className="text-white text-sm font-bold mb-1">EUR/USD H4 - Soportes y Resistencias</h4>
      <p className="text-xs text-[#787b86] mb-3">El precio rebota entre zonas de soporte y resistencia</p>
      <CandlestickSVG candles={candles} W={W} H={H} pad={pad} annotations={annotations} />
    </div>
  );
}

// ============================================================================
// CHART 2: Order Block with displacement
// ============================================================================
export function OrderBlockChart() {
  const candles: Candle[] = [
    {o:1.0880,h:1.0888,l:1.0872,c:1.0878}, {o:1.0878,h:1.0885,l:1.0870,c:1.0875},
    {o:1.0875,h:1.0882,l:1.0865,c:1.0868}, {o:1.0868,h:1.0875,l:1.0858,c:1.0862},
    {o:1.0862,h:1.0870,l:1.0852,c:1.0855}, {o:1.0855,h:1.0865,l:1.0845,c:1.0848},
    // ORDER BLOCK candle (last bearish before strong up move)
    {o:1.0848,h:1.0855,l:1.0835,c:1.0838},
    // Displacement up
    {o:1.0840,h:1.0870,l:1.0838,c:1.0868}, {o:1.0868,h:1.0895,l:1.0865,c:1.0892},
    {o:1.0892,h:1.0918,l:1.0890,c:1.0915}, {o:1.0915,h:1.0930,l:1.0908,c:1.0925},
    // Pullback to OB
    {o:1.0925,h:1.0930,l:1.0912,c:1.0918}, {o:1.0918,h:1.0922,l:1.0900,c:1.0905},
    {o:1.0905,h:1.0910,l:1.0888,c:1.0892}, {o:1.0892,h:1.0898,l:1.0878,c:1.0880},
    {o:1.0880,h:1.0885,l:1.0838,c:1.0842},
    // Bounce from OB
    {o:1.0842,h:1.0872,l:1.0838,c:1.0868}, {o:1.0868,h:1.0898,l:1.0865,c:1.0895},
    {o:1.0895,h:1.0920,l:1.0892,c:1.0918}, {o:1.0918,h:1.0940,l:1.0915,c:1.0935},
  ];
  const W = 650, H = 300, pad = 15;
  const { scaleY } = drawCandles(candles, W, H, pad);

  const annotations = (
    <>
      {/* OB zone */}
      <rect x={85} y={scaleY(1.0855)} width={W - 85 - 55} height={scaleY(1.0835) - scaleY(1.0855)}
        fill="#2962ff15" stroke="#2962ff" strokeWidth={1.5} strokeDasharray="6,3" />
      <text x={90} y={scaleY(1.0835) + 14} fill="#2962ff" fontSize={10} fontWeight="bold" fontFamily="Inter">ORDER BLOCK</text>

      {/* FVG */}
      <rect x={125} y={scaleY(1.0870)} width={30} height={scaleY(1.0855) - scaleY(1.0870)}
        fill="#9c27b015" stroke="#9c27b0" strokeWidth={1} strokeDasharray="3,3" />
      <text x={130} y={scaleY(1.0870) - 4} fill="#9c27b0" fontSize={8}>FVG</text>

      {/* Entry arrow */}
      <circle cx={255} cy={scaleY(1.0842)} r={5} fill="#26a69a" />
      <text x={263} y={scaleY(1.0842) + 3} fill="#26a69a" fontSize={9} fontWeight="bold">ENTRADA</text>

      {/* Displacement label */}
      <text x={140} y={scaleY(1.0920)} fill="#26a69a" fontSize={8}>Displacement</text>
      <line x1={135} y1={scaleY(1.0915)} x2={135} y2={scaleY(1.0850)} stroke="#26a69a" strokeWidth={1} strokeDasharray="3,3" />
    </>
  );

  return (
    <div className="bg-[#1a1a2e] border border-[#2a2a40] rounded-xl p-4">
      <h4 className="text-white text-sm font-bold mb-1">EUR/USD H1 - Order Block + FVG</h4>
      <p className="text-xs text-[#787b86] mb-3">Order Block alcista: ultima vela roja antes del displacement. El precio retorna al OB y rebota.</p>
      <CandlestickSVG candles={candles} W={W} H={H} pad={pad} annotations={annotations} />
    </div>
  );
}

// ============================================================================
// CHART 3: Liquidity Sweep + Reversal
// ============================================================================
export function LiquiditySweepChart() {
  const candles: Candle[] = [
    {o:1.0860,h:1.0872,l:1.0855,c:1.0868}, {o:1.0868,h:1.0878,l:1.0862,c:1.0872},
    {o:1.0872,h:1.0880,l:1.0858,c:1.0862}, {o:1.0862,h:1.0870,l:1.0852,c:1.0858},
    {o:1.0858,h:1.0868,l:1.0850,c:1.0865}, {o:1.0865,h:1.0875,l:1.0855,c:1.0860},
    {o:1.0860,h:1.0870,l:1.0848,c:1.0852}, {o:1.0852,h:1.0862,l:1.0845,c:1.0858},
    // Equal lows area around 1.0845-1.0850
    {o:1.0858,h:1.0865,l:1.0848,c:1.0855}, {o:1.0855,h:1.0862,l:1.0845,c:1.0850},
    // SWEEP - sharp drop below equal lows
    {o:1.0850,h:1.0855,l:1.0825,c:1.0828},
    // Hammer / reversal
    {o:1.0828,h:1.0858,l:1.0818,c:1.0855},
    // Strong rally after sweep
    {o:1.0855,h:1.0882,l:1.0852,c:1.0880}, {o:1.0880,h:1.0905,l:1.0878,c:1.0902},
    {o:1.0902,h:1.0925,l:1.0898,c:1.0920}, {o:1.0920,h:1.0940,l:1.0915,c:1.0935},
    {o:1.0935,h:1.0952,l:1.0930,c:1.0948},
  ];
  const W = 650, H = 300, pad = 15;
  const { scaleY } = drawCandles(candles, W, H, pad);

  const annotations = (
    <>
      {/* Equal lows line */}
      <line x1={pad} y1={scaleY(1.0845)} x2={180} y2={scaleY(1.0845)} stroke="#ff9800" strokeWidth={1.5} strokeDasharray="5,5" />
      <text x={pad + 2} y={scaleY(1.0845) - 5} fill="#ff9800" fontSize={8}>Equal Lows (Liquidez)</text>

      {/* SL zone below */}
      <rect x={pad} y={scaleY(1.0845)} width={180} height={scaleY(1.0830) - scaleY(1.0845)} fill="#ef535010" />
      <text x={pad + 5} y={scaleY(1.0830) + 12} fill="#ef5350" fontSize={7}>Stop Loss de traders retail</text>

      {/* Sweep label */}
      <circle cx={175} cy={scaleY(1.0818)} r={6} fill="#ff9800" opacity={0.8} />
      <text x={185} y={scaleY(1.0818) + 3} fill="#ff9800" fontSize={10} fontWeight="bold">SWEEP!</text>

      {/* Arrow showing reversal */}
      <path d="M 190 ${scaleY(1.0830)} Q 220 ${scaleY(1.0850)} 250 ${scaleY(1.0900)}" fill="none" stroke="#26a69a" strokeWidth={2} />
      <text x={260} y={scaleY(1.0920)} fill="#26a69a" fontSize={9} fontWeight="bold">Rally post-sweep</text>
    </>
  );

  return (
    <div className="bg-[#1a1a2e] border border-[#2a2a40] rounded-xl p-4">
      <h4 className="text-white text-sm font-bold mb-1">EUR/USD M15 - Caza de Liquidez (Sweep)</h4>
      <p className="text-xs text-[#787b86] mb-3">Equal lows crean liquidez. El precio barre los SL y luego sube con fuerza.</p>
      <CandlestickSVG candles={candles} W={W} H={H} pad={pad} annotations={annotations} />
    </div>
  );
}

// ============================================================================
// CHART 4: Fibonacci Retracement with OTE
// ============================================================================
export function FibonacciChart() {
  const candles: Candle[] = [
    {o:1.0780,h:1.0795,l:1.0775,c:1.0790}, {o:1.0790,h:1.0810,l:1.0788,c:1.0808},
    {o:1.0808,h:1.0825,l:1.0805,c:1.0822}, {o:1.0822,h:1.0845,l:1.0818,c:1.0842},
    {o:1.0842,h:1.0858,l:1.0838,c:1.0855}, {o:1.0855,h:1.0875,l:1.0852,c:1.0872},
    {o:1.0872,h:1.0890,l:1.0868,c:1.0888}, {o:1.0888,h:1.0905,l:1.0885,c:1.0900},
    // Top
    {o:1.0900,h:1.0915,l:1.0895,c:1.0910},
    // Retracement begins
    {o:1.0910,h:1.0912,l:1.0892,c:1.0895}, {o:1.0895,h:1.0900,l:1.0878,c:1.0880},
    {o:1.0880,h:1.0888,l:1.0868,c:1.0872}, {o:1.0872,h:1.0878,l:1.0858,c:1.0862},
    // Bounce at 61.8%
    {o:1.0862,h:1.0865,l:1.0848,c:1.0852},
    // Pin bar at OTE
    {o:1.0852,h:1.0870,l:1.0835,c:1.0868},
    // Continuation up
    {o:1.0868,h:1.0890,l:1.0865,c:1.0888}, {o:1.0888,h:1.0910,l:1.0885,c:1.0908},
    {o:1.0908,h:1.0928,l:1.0905,c:1.0925}, {o:1.0925,h:1.0945,l:1.0920,c:1.0940},
  ];
  const W = 650, H = 320, pad = 15;
  const { scaleY } = drawCandles(candles, W, H, pad);

  const swingLow = 1.0780;
  const swingHigh = 1.0915;
  const fib382 = swingHigh - (swingHigh - swingLow) * 0.382;
  const fib50 = swingHigh - (swingHigh - swingLow) * 0.5;
  const fib618 = swingHigh - (swingHigh - swingLow) * 0.618;
  const fib786 = swingHigh - (swingHigh - swingLow) * 0.786;

  const annotations = (
    <>
      {/* Fib levels */}
      {[
        { level: "0% (Top)", price: swingHigh, color: "#26a69a" },
        { level: "38.2%", price: fib382, color: "#42a5f5" },
        { level: "50%", price: fib50, color: "#ffca28" },
        { level: "61.8%", price: fib618, color: "#ff9800" },
        { level: "78.6%", price: fib786, color: "#ef5350" },
        { level: "100% (Bottom)", price: swingLow, color: "#ef5350" },
      ].map((f, i) => (
        <g key={i}>
          <line x1={pad} y1={scaleY(f.price)} x2={W - 55} y2={scaleY(f.price)} stroke={f.color} strokeWidth={0.7} strokeDasharray="4,4" opacity={0.6} />
          <text x={W - 53} y={scaleY(f.price) + 3} fill={f.color} fontSize={7} fontFamily="monospace">{f.level}</text>
        </g>
      ))}

      {/* OTE Zone highlight */}
      <rect x={pad} y={scaleY(fib618)} width={W - pad - 55} height={scaleY(fib786) - scaleY(fib618)}
        fill="#ff980012" stroke="#ff980044" strokeWidth={1} />
      <text x={pad + 5} y={scaleY(fib786) + 14} fill="#ff9800" fontSize={10} fontWeight="bold">ZONA OTE (61.8% - 78.6%)</text>

      {/* Entry point */}
      <circle cx={230} cy={scaleY(1.0852)} r={5} fill="#26a69a" />
      <text x={238} y={scaleY(1.0852) - 5} fill="#26a69a" fontSize={9} fontWeight="bold">Pin Bar = ENTRADA</text>
    </>
  );

  return (
    <div className="bg-[#1a1a2e] border border-[#2a2a40] rounded-xl p-4">
      <h4 className="text-white text-sm font-bold mb-1">EUR/USD H4 - Fibonacci + OTE Zone</h4>
      <p className="text-xs text-[#787b86] mb-3">El precio retrocede al 61.8%-78.6% (zona OTE), forma Pin Bar, y continua la tendencia.</p>
      <CandlestickSVG candles={candles} W={W} H={H} pad={pad} annotations={annotations} />
    </div>
  );
}

// ============================================================================
// CHART 5: Trend Structure (HH/HL)
// ============================================================================
export function TrendStructureChart() {
  const candles: Candle[] = [
    {o:1.0800,h:1.0812,l:1.0795,c:1.0808}, {o:1.0808,h:1.0820,l:1.0805,c:1.0818},
    {o:1.0818,h:1.0835,l:1.0815,c:1.0832}, {o:1.0832,h:1.0848,l:1.0828,c:1.0845},
    // HH1
    {o:1.0845,h:1.0858,l:1.0840,c:1.0852},
    // Pullback to HL1
    {o:1.0852,h:1.0855,l:1.0838,c:1.0842}, {o:1.0842,h:1.0848,l:1.0830,c:1.0835},
    // HL1 bounce
    {o:1.0835,h:1.0850,l:1.0832,c:1.0848}, {o:1.0848,h:1.0862,l:1.0845,c:1.0860},
    {o:1.0860,h:1.0878,l:1.0858,c:1.0875}, {o:1.0875,h:1.0892,l:1.0872,c:1.0888},
    // HH2
    {o:1.0888,h:1.0905,l:1.0885,c:1.0900},
    // Pullback to HL2
    {o:1.0900,h:1.0902,l:1.0882,c:1.0885}, {o:1.0885,h:1.0890,l:1.0868,c:1.0872},
    // HL2 bounce
    {o:1.0872,h:1.0888,l:1.0868,c:1.0885}, {o:1.0885,h:1.0905,l:1.0882,c:1.0902},
    {o:1.0902,h:1.0920,l:1.0898,c:1.0918}, {o:1.0918,h:1.0935,l:1.0915,c:1.0932},
    // HH3
    {o:1.0932,h:1.0948,l:1.0928,c:1.0945},
  ];
  const W = 650, H = 300, pad = 15;
  const { scaleY } = drawCandles(candles, W, H, pad);

  const annotations = (
    <>
      {/* HH markers */}
      <circle cx={80} cy={scaleY(1.0858)} r={5} fill="#26a69a" />
      <text x={68} y={scaleY(1.0858) - 8} fill="#26a69a" fontSize={10} fontWeight="bold">HH</text>

      <circle cx={195} cy={scaleY(1.0905)} r={5} fill="#26a69a" />
      <text x={183} y={scaleY(1.0905) - 8} fill="#26a69a" fontSize={10} fontWeight="bold">HH</text>

      <circle cx={315} cy={scaleY(1.0948)} r={5} fill="#26a69a" />
      <text x={303} y={scaleY(1.0948) - 8} fill="#26a69a" fontSize={10} fontWeight="bold">HH</text>

      {/* HL markers */}
      <circle cx={110} cy={scaleY(1.0830)} r={5} fill="#42a5f5" />
      <text x={98} y={scaleY(1.0830) + 16} fill="#42a5f5" fontSize={10} fontWeight="bold">HL</text>

      <circle cx={230} cy={scaleY(1.0868)} r={5} fill="#42a5f5" />
      <text x={218} y={scaleY(1.0868) + 16} fill="#42a5f5" fontSize={10} fontWeight="bold">HL</text>

      {/* Trendline */}
      <line x1={110} y1={scaleY(1.0830)} x2={230} y2={scaleY(1.0868)} stroke="#42a5f5" strokeWidth={1.5} strokeDasharray="6,4" />

      {/* Label */}
      <rect x={W - 200} y={H - 35} width={145} height={22} rx={4} fill="#26a69a22" />
      <text x={W - 195} y={H - 19} fill="#26a69a" fontSize={10} fontWeight="bold">TENDENCIA ALCISTA</text>
    </>
  );

  return (
    <div className="bg-[#1a1a2e] border border-[#2a2a40] rounded-xl p-4">
      <h4 className="text-white text-sm font-bold mb-1">EUR/USD H4 - Estructura Alcista (HH/HL)</h4>
      <p className="text-xs text-[#787b86] mb-3">máximos más altos (HH) y mínimos más altos (HL) confirman tendencia alcista.</p>
      <CandlestickSVG candles={candles} W={W} H={H} pad={pad} annotations={annotations} />
    </div>
  );
}

// ============================================================================
// CHART 6: BOS (Break of Structure)
// ============================================================================
export function BOSChart() {
  const candles: Candle[] = [
    // Downtrend
    {o:1.0920,h:1.0928,l:1.0908,c:1.0912}, {o:1.0912,h:1.0918,l:1.0898,c:1.0902},
    {o:1.0902,h:1.0910,l:1.0888,c:1.0892}, // LH
    {o:1.0892,h:1.0898,l:1.0878,c:1.0882}, {o:1.0882,h:1.0888,l:1.0868,c:1.0872},
    {o:1.0872,h:1.0880,l:1.0858,c:1.0862}, // LL
    {o:1.0862,h:1.0875,l:1.0858,c:1.0872}, {o:1.0872,h:1.0882,l:1.0868,c:1.0878},
    // LH
    {o:1.0878,h:1.0888,l:1.0872,c:1.0882},
    // LL
    {o:1.0882,h:1.0885,l:1.0855,c:1.0858}, {o:1.0858,h:1.0862,l:1.0842,c:1.0845},
    // REVERSAL - BOS
    {o:1.0845,h:1.0868,l:1.0838,c:1.0865}, {o:1.0865,h:1.0892,l:1.0862,c:1.0890},
    // BOS - breaks above LH
    {o:1.0890,h:1.0910,l:1.0888,c:1.0908},
    {o:1.0908,h:1.0925,l:1.0905,c:1.0922}, {o:1.0922,h:1.0938,l:1.0918,c:1.0935},
  ];
  const W = 650, H = 300, pad = 15;
  const { scaleY } = drawCandles(candles, W, H, pad);

  const annotations = (
    <>
      {/* LH level line */}
      <line x1={30} y1={scaleY(1.0892)} x2={280} y2={scaleY(1.0892)} stroke="#ff9800" strokeWidth={1.5} strokeDasharray="5,5" />
      <text x={35} y={scaleY(1.0892) - 5} fill="#ff9800" fontSize={8}>Nivel LH anterior</text>

      {/* LH markers */}
      <text x={45} y={scaleY(1.0910) - 5} fill="#ef5350" fontSize={9} fontWeight="bold">LH</text>
      <text x={140} y={scaleY(1.0888) - 5} fill="#ef5350" fontSize={9} fontWeight="bold">LH</text>

      {/* LL markers */}
      <text x={95} y={scaleY(1.0858) + 14} fill="#ef5350" fontSize={9} fontWeight="bold">LL</text>
      <text x={175} y={scaleY(1.0842) + 14} fill="#ef5350" fontSize={9} fontWeight="bold">LL</text>

      {/* BOS marker */}
      <circle cx={225} cy={scaleY(1.0895)} r={8} fill="none" stroke="#ff9800" strokeWidth={2} />
      <text x={238} y={scaleY(1.0895) - 5} fill="#ff9800" fontSize={12} fontWeight="bold">BOS!</text>

      {/* New trend label */}
      <rect x={W - 200} y={H - 35} width={145} height={22} rx={4} fill="#26a69a22" />
      <text x={W - 195} y={H - 19} fill="#26a69a" fontSize={10} fontWeight="bold">CAMBIO DE TENDENCIA</text>
    </>
  );

  return (
    <div className="bg-[#1a1a2e] border border-[#2a2a40] rounded-xl p-4">
      <h4 className="text-white text-sm font-bold mb-1">EUR/USD H1 - Break of Structure (BOS)</h4>
      <p className="text-xs text-[#787b86] mb-3">Tendencia bajista (LH/LL). El precio rompe el ultimo LH = BOS = posible cambio de tendencia.</p>
      <CandlestickSVG candles={candles} W={W} H={H} pad={pad} annotations={annotations} />
    </div>
  );
}

export const REALISTIC_CHARTS = {
  supportResistance: SupportResistanceChart,
  orderBlock: OrderBlockChart,
  liquiditySweep: LiquiditySweepChart,
  fibonacci: FibonacciChart,
  trendStructure: TrendStructureChart,
  bos: BOSChart,
};
