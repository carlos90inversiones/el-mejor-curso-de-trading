"use client";
import { useState, useMemo, useCallback } from "react";

const FLASHCARD_DATA = [
  { front: "Que es un PIP?", back: "Point in Percentage. Movimiento minimo de precio en Forex (0.0001 en la mayoria de pares). EUR/USD de 1.0800 a 1.0850 = 50 pips.", category: "Basico" },
  { front: "Que es el SPREAD?", back: "Diferencia entre precio de compra (Ask) y venta (Bid). Es la comision del broker. Spread bajo = broker bueno.", category: "Basico" },
  { front: "Que es un STOP LOSS?", back: "Orden que cierra tu posicion automaticamente para LIMITAR PERDIDAS. OBLIGATORIO en cada trade, sin excepciones.", category: "Basico" },
  { front: "Que es el R:R?", back: "Ratio Riesgo/Beneficio. 1:2 = arriesgas 1 para ganar 2. Con 1:2 solo necesitas 34% de acierto para ser rentable.", category: "Riesgo" },
  { front: "Cuanto arriesgar por trade?", back: "Maximo 1-2% del capital por operacion. Con cuenta de 10K = max 100-200$ por trade.", category: "Riesgo" },
  { front: "Que es un ORDER BLOCK?", back: "Ultima vela opuesta antes de un movimiento fuerte. Marca donde las instituciones colocaron sus ordenes. El precio tiende a volver ahi.", category: "SMC" },
  { front: "Que es un FVG (Fair Value Gap)?", back: "Hueco de 3 velas donde mecha de vela 1 no toca mecha de vela 3. El precio tiende a rellenar estos gaps.", category: "SMC" },
  { front: "Que es LIQUIDEZ?", back: "Ordenes pendientes (Stop Loss) acumuladas. Las instituciones necesitan liquidez para ejecutar ordenes grandes. Se acumula encima de maximos y debajo de minimos obvios.", category: "SMC" },
  { front: "Que es el Power of 3 (AMD)?", back: "Acumulacion (Asia rango) → Manipulacion (London caza liquidez) → Distribucion (NY movimiento real). Se repite CADA DIA.", category: "ICT" },
  { front: "Que es Premium/Discount?", back: "Arriba del 50% del rango = Premium (caro, buscar ventas). Abajo del 50% = Discount (barato, buscar compras).", category: "ICT" },
  { front: "Que son las Killzones?", back: "Ventanas de maxima volatilidad. London: 08-11 UTC. NY: 13-16 UTC. Aqui es donde debes operar.", category: "ICT" },
  { front: "Que es un BOS?", back: "Break of Structure. Ruptura de un maximo/minimo anterior. Indica posible cambio de tendencia.", category: "Estructura" },
  { front: "Que es CHoCH?", back: "Change of Character. El PRIMER BOS que senala cambio de tendencia. La primera senal de debilidad.", category: "Estructura" },
  { front: "HH/HL = ?", back: "Higher High / Higher Low = TENDENCIA ALCISTA. El precio hace maximos y minimos cada vez mas altos.", category: "Estructura" },
  { front: "LH/LL = ?", back: "Lower High / Lower Low = TENDENCIA BAJISTA. El precio hace maximos y minimos cada vez mas bajos.", category: "Estructura" },
  { front: "Que es un Doji?", back: "Vela con apertura y cierre casi iguales. Indica INDECISION. Tras tendencia fuerte puede senalar giro.", category: "Velas" },
  { front: "Que es un Martillo?", back: "Cuerpo pequeno arriba, mecha inferior larga (2x cuerpo). En SOPORTE = senal alcista. Rechazo de precios bajos.", category: "Velas" },
  { front: "Que es una Envolvente?", back: "Vela que envuelve completamente a la anterior. Alcista (verde envuelve roja) = COMPRA. Bajista (roja envuelve verde) = VENTA.", category: "Velas" },
  { front: "Nivel de Fibonacci mas importante?", back: "61.8% (Golden Ratio). La zona OTE (61.8%-78.6%) es donde las instituciones buscan entradas.", category: "Fibonacci" },
  { front: "Que es el DXY?", back: "Indice del Dolar. Mide fuerza del USD. DXY sube = USD fuerte = EUR/USD baja. Es la brujula del Forex.", category: "Fundamental" },
  { front: "NFP = ?", back: "Non-Farm Payrolls. Empleo de EEUU, primer viernes del mes. El dato MAS importante. Mueve 50-100 pips en minutos.", category: "Fundamental" },
  { front: "Que es el DRAWDOWN?", back: "Caida maxima desde el punto mas alto. Cuenta 10K baja a 8K = DD 20%. Prop firms limitan a 5-10%.", category: "Riesgo" },
  { front: "Que es REVENGE TRADING?", back: "Operar por frustracion despues de perder para 'recuperar'. Causa #1 de cuentas destruidas. Si pierdes 2 seguidas, PARA.", category: "Psicologia" },
  { front: "Que es FOMO?", back: "Fear of Missing Out. Miedo a perderse un movimiento. Lleva a entrar sin analisis. El mercado SIEMPRE da mas oportunidades.", category: "Psicologia" },
  { front: "Formula de Position Sizing?", back: "Tamano = Riesgo en $ / (SL en pips x Valor del pip). Ej: 100$ / (30 pips x 10$) = 0.33 lotes.", category: "Riesgo" },
  { front: "Que es una Prop Firm?", back: "Empresa que te da capital para tradear. Tu pones la habilidad, ellos el dinero. Profit split tipico: 80% tu, 20% ellos.", category: "Prop Firm" },
  { front: "Objetivo tipico de un challenge?", back: "Fase 1: 8-10% de beneficio. Fase 2: 5%. Drawdown diario max: 5%. Drawdown total max: 10%.", category: "Prop Firm" },
  { front: "Que es OVERFITTING?", back: "Cuando un modelo de ML se ajusta demasiado a datos pasados. Funciona perfecto en backtest pero pierde en real.", category: "Algo" },
  { front: "Mejor sesion para scalping?", back: "London Open (08-10 UTC) y NY Open (13-15 UTC). Maxima volatilidad, setups claros.", category: "Estilos" },
  { front: "Regla tras 2 perdidas seguidas?", back: "CIERRA la plataforma. Vuelve MANANA con mente fresca. Nunca revenge trading.", category: "Psicologia" },
];

export default function Flashcards() {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState<Set<number>>(new Set());
  const [mode, setMode] = useState<"all" | "unknown">("all");

  const cards = useMemo(() => {
    if (mode === "unknown") return FLASHCARD_DATA.filter((_, i) => !known.has(i)).map((c, i) => ({ ...c, origIdx: FLASHCARD_DATA.indexOf(c) }));
    return FLASHCARD_DATA.map((c, i) => ({ ...c, origIdx: i }));
  }, [mode, known]);

  const card = cards[index % cards.length];
  if (!card) return <p className="text-[#555] text-center py-8">Has aprendido todas las tarjetas!</p>;

  const next = () => { setFlipped(false); setIndex(i => i + 1); };
  const markKnown = () => { setKnown(prev => { const n = new Set(prev); n.add(card.origIdx); return n; }); next(); };

  return (
    <div className="bg-[#1a1a2e] border border-[#2a2a40] rounded-2xl p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-white">Flashcards de Trading</h3>
          <p className="text-sm text-[#a0a0b8]">{FLASHCARD_DATA.length} tarjetas | {known.size} dominadas</p>
        </div>
        <div className="flex gap-2">
          <button onClick={() => { setMode("all"); setIndex(0); }} className={`text-xs px-3 py-1.5 rounded-lg ${mode === "all" ? "bg-blue-600 text-white" : "bg-[#0d0d15] text-[#a0a0b8]"}`}>Todas</button>
          <button onClick={() => { setMode("unknown"); setIndex(0); }} className={`text-xs px-3 py-1.5 rounded-lg ${mode === "unknown" ? "bg-blue-600 text-white" : "bg-[#0d0d15] text-[#a0a0b8]"}`}>Por aprender</button>
        </div>
      </div>

      {/* Progress */}
      <div className="h-2 bg-[#0d0d15] rounded-full overflow-hidden mb-6">
        <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full transition-all" style={{ width: `${(known.size / FLASHCARD_DATA.length) * 100}%` }} />
      </div>

      {/* Card */}
      <button onClick={() => setFlipped(!flipped)}
        className="w-full min-h-[200px] bg-[#0d0d15] border border-[#2a2a40] rounded-xl p-8 text-center cursor-pointer hover:border-blue-500/30 transition mb-4">
        {!flipped ? (
          <div>
            <p className="text-xs text-blue-400 mb-3">{card.category}</p>
            <p className="text-xl font-bold text-white">{card.front}</p>
            <p className="text-xs text-[#555] mt-4">Toca para ver la respuesta</p>
          </div>
        ) : (
          <div>
            <p className="text-xs text-green-400 mb-3">RESPUESTA</p>
            <p className="text-white leading-relaxed">{card.back}</p>
          </div>
        )}
      </button>

      {/* Controls */}
      <div className="flex gap-3">
        <button onClick={next} className="flex-1 bg-[#2a2a40] text-[#a0a0b8] py-3 rounded-xl hover:text-white transition font-medium">
          Siguiente
        </button>
        <button onClick={markKnown} className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-xl hover:opacity-90 transition font-medium">
          Ya la se
        </button>
      </div>

      <p className="text-center text-xs text-[#555] mt-3">Tarjeta {(index % cards.length) + 1} de {cards.length}</p>
    </div>
  );
}
