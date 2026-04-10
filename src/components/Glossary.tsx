"use client";
import { useState, useMemo } from "react";

interface Term {
  term: string;
  definition: string;
  category: string;
  related?: string[];
}

const TERMS: Term[] = [
  // BASICOS
  { term: "Trading", definition: "Comprar y vender activos financieros para obtener beneficio por la diferencia de precio.", category: "Basico" },
  { term: "Forex", definition: "Foreign Exchange. Mercado de divisas donde se compran y venden monedas. El mercado mas grande del mundo (7.5B$/dia).", category: "Basico", related: ["Par de divisas", "Pip"] },
  { term: "Par de divisas", definition: "Dos monedas que se comparan entre si. Ej: EUR/USD = cuantos dolares vale un euro.", category: "Basico" },
  { term: "Broker", definition: "Intermediario que ejecuta tus ordenes de compra/venta en el mercado a cambio de comisiones.", category: "Basico" },
  { term: "Bull / Bullish", definition: "Alcista. Cuando el mercado sube o se espera que suba. Un 'toro' empuja hacia arriba.", category: "Basico" },
  { term: "Bear / Bearish", definition: "Bajista. Cuando el mercado baja o se espera que baje. Un 'oso' golpea hacia abajo.", category: "Basico" },
  { term: "Long", definition: "Posicion de compra. Ganas si el precio SUBE.", category: "Basico", related: ["Short"] },
  { term: "Short", definition: "Posicion de venta. Ganas si el precio BAJA. El broker te 'presta' el activo para venderlo primero.", category: "Basico", related: ["Long"] },
  // PRECIO
  { term: "Pip", definition: "Point in Percentage. Movimiento minimo de precio en Forex (0.0001 en la mayoria de pares).", category: "Precio" },
  { term: "Spread", definition: "Diferencia entre precio de compra (Ask) y venta (Bid). Es la comision del broker.", category: "Precio" },
  { term: "Bid", definition: "Precio de VENTA. El precio mas alto que un comprador esta dispuesto a pagar.", category: "Precio", related: ["Ask", "Spread"] },
  { term: "Ask", definition: "Precio de COMPRA. El precio mas bajo al que un vendedor esta dispuesto a vender.", category: "Precio", related: ["Bid", "Spread"] },
  { term: "Lote", definition: "Unidad de medida del tamano de posicion. 1 lote estandar = 100,000 unidades. Mini lote = 0.1. Micro = 0.01.", category: "Precio" },
  { term: "Slippage", definition: "Diferencia entre el precio esperado y el precio real de ejecucion. Ocurre en mercados volatiles.", category: "Precio" },
  { term: "Gap", definition: "Hueco en el precio cuando el mercado abre a un nivel diferente del cierre anterior. Comun los lunes en Forex.", category: "Precio" },
  // ORDENES
  { term: "Orden de Mercado", definition: "Compra/venta al precio ACTUAL, se ejecuta inmediatamente.", category: "Ordenes" },
  { term: "Orden Limitada", definition: "Compra/venta a un precio ESPECIFICO que tu defines. Solo se ejecuta si el precio llega ahi.", category: "Ordenes" },
  { term: "Buy Limit", definition: "Orden de compra a un precio MAS BAJO que el actual. Para comprar en retrocesos.", category: "Ordenes" },
  { term: "Sell Limit", definition: "Orden de venta a un precio MAS ALTO que el actual. Para vender en rebotes.", category: "Ordenes" },
  { term: "Buy Stop", definition: "Orden de compra a un precio MAS ALTO que el actual. Para comprar en rupturas alcistas.", category: "Ordenes" },
  { term: "Sell Stop", definition: "Orden de venta a un precio MAS BAJO que el actual. Para vender en rupturas bajistas.", category: "Ordenes" },
  { term: "Stop Loss (SL)", definition: "Orden que cierra tu posicion automaticamente para LIMITAR PERDIDAS. OBLIGATORIO en cada trade.", category: "Ordenes" },
  { term: "Take Profit (TP)", definition: "Orden que cierra tu posicion automaticamente para ASEGURAR GANANCIAS.", category: "Ordenes" },
  { term: "Trailing Stop", definition: "Stop Loss que se mueve automaticamente a tu favor, protegiendo ganancias mientras deja correr el trade.", category: "Ordenes" },
  // RIESGO
  { term: "Apalancamiento", definition: "El broker te presta dinero para operar con mas capital. 1:100 = operas 100x tu dinero. Multiplica ganancias Y perdidas.", category: "Riesgo" },
  { term: "Margen", definition: "Deposito de garantia necesario para mantener una posicion abierta con apalancamiento.", category: "Riesgo" },
  { term: "Margin Call", definition: "Aviso del broker cuando tu margen disponible es insuficiente. Si no depositas mas, cerrara tus posiciones.", category: "Riesgo" },
  { term: "Drawdown", definition: "Caida maxima del capital desde su punto mas alto. Ej: cuenta de 10K baja a 8K = drawdown del 20%.", category: "Riesgo" },
  { term: "R:R (Risk/Reward)", definition: "Ratio riesgo/beneficio. 1:2 = arriesgas 1 para ganar 2. Con 1:2, solo necesitas 34% de acierto.", category: "Riesgo" },
  { term: "Position Sizing", definition: "Calculo del tamano exacto de posicion basado en tu riesgo por trade y distancia al Stop Loss.", category: "Riesgo" },
  { term: "Equity", definition: "Tu dinero REAL en este momento: Balance + P/L de operaciones abiertas.", category: "Riesgo" },
  { term: "Win Rate", definition: "Porcentaje de trades ganadores. Con buen R:R, 40-50% es suficiente para ser rentable.", category: "Riesgo" },
  { term: "Profit Factor", definition: "Ganancias totales / Perdidas totales. >1.5 es bueno, >2 es excelente.", category: "Riesgo" },
  { term: "Expectancy", definition: "Ganancia promedio esperada por trade. (Win% x Avg Win) - (Loss% x Avg Loss). Debe ser positiva.", category: "Riesgo" },
  // ANALISIS TECNICO
  { term: "Soporte", definition: "Nivel de precio donde la demanda es suficiente para detener la caida. El precio 'rebota' hacia arriba.", category: "Analisis Tecnico" },
  { term: "Resistencia", definition: "Nivel de precio donde la oferta es suficiente para detener la subida. El precio 'rebota' hacia abajo.", category: "Analisis Tecnico" },
  { term: "Tendencia", definition: "Direccion general del mercado. Alcista (HH/HL), Bajista (LH/LL), o Lateral (rango).", category: "Analisis Tecnico" },
  { term: "HH (Higher High)", definition: "Maximo mas alto. Indica tendencia alcista.", category: "Analisis Tecnico" },
  { term: "HL (Higher Low)", definition: "Minimo mas alto. Confirma tendencia alcista.", category: "Analisis Tecnico" },
  { term: "LH (Lower High)", definition: "Maximo mas bajo. Indica tendencia bajista.", category: "Analisis Tecnico" },
  { term: "LL (Lower Low)", definition: "Minimo mas bajo. Confirma tendencia bajista.", category: "Analisis Tecnico" },
  { term: "BOS (Break of Structure)", definition: "Ruptura de un maximo/minimo anterior en la estructura. Indica posible cambio de tendencia.", category: "Analisis Tecnico" },
  { term: "CHoCH (Change of Character)", definition: "El primer BOS que senala un cambio de tendencia. Primera senal de que la tendencia actual se debilita.", category: "Analisis Tecnico" },
  { term: "Timeframe", definition: "Periodo de tiempo de cada vela: M1 (1 min), M5, M15, H1, H4, D1 (diario), W1 (semanal).", category: "Analisis Tecnico" },
  { term: "Fibonacci", definition: "Niveles de retroceso basados en la secuencia matematica de Fibonacci. Clave: 38.2%, 50%, 61.8%, 78.6%.", category: "Analisis Tecnico" },
  { term: "OTE (Optimal Trade Entry)", definition: "Zona entre 61.8% y 78.6% de Fibonacci. Donde las instituciones buscan entradas.", category: "Analisis Tecnico" },
  { term: "Divergencia", definition: "Cuando el precio y un indicador (RSI) se mueven en direcciones opuestas. Senal de posible giro.", category: "Analisis Tecnico" },
  // INDICADORES
  { term: "SMA", definition: "Simple Moving Average. Promedio simple de los ultimos N periodos.", category: "Indicadores" },
  { term: "EMA", definition: "Exponential Moving Average. Promedio que da mas peso a datos recientes. Mas reactiva que SMA.", category: "Indicadores" },
  { term: "RSI", definition: "Relative Strength Index. Mide velocidad del precio (0-100). >70 sobrecompra, <30 sobreventa.", category: "Indicadores" },
  { term: "MACD", definition: "Moving Average Convergence Divergence. Muestra la relacion entre dos EMAs. Cruces = senales.", category: "Indicadores" },
  { term: "Volumen", definition: "Cantidad de transacciones en un periodo. Volumen alto confirma movimientos. Bajo = sospechoso.", category: "Indicadores" },
  { term: "Volume Profile", definition: "Muestra volumen por NIVEL DE PRECIO (horizontal). POC = precio con mas volumen.", category: "Indicadores" },
  { term: "POC (Point of Control)", definition: "Precio con mayor volumen tradeado en un periodo. Actua como iman para el precio.", category: "Indicadores" },
  // VELAS
  { term: "Vela Japonesa", definition: "Representacion grafica del precio: apertura, cierre, maximo y minimo de un periodo.", category: "Velas" },
  { term: "Doji", definition: "Vela con apertura y cierre casi iguales. Indica INDECISION en el mercado.", category: "Velas" },
  { term: "Martillo (Hammer)", definition: "Cuerpo pequeno arriba, mecha inferior larga. En soporte = senal alcista.", category: "Velas" },
  { term: "Estrella Fugaz", definition: "Cuerpo pequeno abajo, mecha superior larga. En resistencia = senal bajista.", category: "Velas" },
  { term: "Envolvente", definition: "Vela que 'envuelve' completamente a la anterior. Alcista (verde envuelve roja) o Bajista (roja envuelve verde).", category: "Velas" },
  { term: "Pin Bar", definition: "Vela con mecha larga (2/3 total) y cuerpo pequeno. Muestra rechazo fuerte de un nivel.", category: "Velas" },
  { term: "Morning Star", definition: "Patron de 3 velas alcista: roja grande + pequena + verde grande. Giro en suelo.", category: "Velas" },
  { term: "Evening Star", definition: "Patron de 3 velas bajista: verde grande + pequena + roja grande. Giro en techo.", category: "Velas" },
  { term: "Inside Bar", definition: "Vela completamente dentro del rango de la anterior. Consolidacion antes de movimiento explosivo.", category: "Velas" },
  // SMC / ICT
  { term: "Smart Money", definition: "El dinero de las instituciones (bancos, fondos). Mueven el mercado para cazar liquidez retail.", category: "SMC/ICT" },
  { term: "Liquidez", definition: "Ordenes pendientes (Stop Loss) en el mercado. Las instituciones la necesitan para ejecutar ordenes grandes.", category: "SMC/ICT" },
  { term: "BSL (Buy Side Liquidity)", definition: "Liquidez por ENCIMA de maximos. Stop Loss de shorts y ordenes de ruptura alcista.", category: "SMC/ICT" },
  { term: "SSL (Sell Side Liquidity)", definition: "Liquidez por DEBAJO de minimos. Stop Loss de longs y ordenes de ruptura bajista.", category: "SMC/ICT" },
  { term: "Liquidity Grab/Sweep", definition: "El precio se mueve hacia una zona de SL para 'cazarlos' antes de girarse en la direccion real.", category: "SMC/ICT" },
  { term: "Order Block (OB)", definition: "Ultima vela opuesta antes de un movimiento fuerte. Marca donde las instituciones colocaron ordenes.", category: "SMC/ICT" },
  { term: "FVG (Fair Value Gap)", definition: "Hueco de 3 velas donde la mecha de vela 1 no toca la mecha de vela 3. El precio tiende a rellenarlo.", category: "SMC/ICT" },
  { term: "Breaker Block", definition: "Order Block que FALLO (fue violado). Ahora actua como S/R en la direccion contraria.", category: "SMC/ICT" },
  { term: "Premium Zone", definition: "Zona por encima del 50% del rango. Precio 'caro'. Buscar ventas (shorts).", category: "SMC/ICT" },
  { term: "Discount Zone", definition: "Zona por debajo del 50% del rango. Precio 'barato'. Buscar compras (longs).", category: "SMC/ICT" },
  { term: "Displacement", definition: "Movimiento agresivo con velas grandes que muestra verdadera intencion del mercado.", category: "SMC/ICT" },
  { term: "Inducement", definition: "Movimiento disenado para atraer traders retail antes de un giro. Trampa dentro de la trampa.", category: "SMC/ICT" },
  { term: "Killzone", definition: "Ventanas de tiempo con maxima volatilidad. London (08-11 UTC), NY (13-16 UTC).", category: "SMC/ICT" },
  { term: "Power of 3 (AMD)", definition: "Acumulacion (Asia rango) → Manipulacion (London caza) → Distribucion (NY movimiento real).", category: "SMC/ICT" },
  // PROP FIRMS
  { term: "Prop Firm", definition: "Empresa que te da capital para tradear. Tu demuestras habilidad, ellos ponen el dinero. Profit split 80/20.", category: "Prop Firms" },
  { term: "Challenge", definition: "Evaluacion/examen de una prop firm. Alcanzar X% de beneficio sin superar el drawdown maximo.", category: "Prop Firms" },
  { term: "Profit Split", definition: "Porcentaje de ganancias que te quedas. Normalmente 80% trader, 20% prop firm.", category: "Prop Firms" },
  { term: "Drawdown Diario", definition: "Perdida maxima permitida en UN DIA. Tipicamente 5%. Superarlo = perder el challenge.", category: "Prop Firms" },
  { term: "Drawdown Total", definition: "Perdida maxima desde el balance inicial. Tipicamente 10%. Superarlo = perder la cuenta.", category: "Prop Firms" },
  // PSICOLOGIA
  { term: "FOMO", definition: "Fear of Missing Out. Miedo a perderse un trade. Lleva a entrar sin analisis.", category: "Psicologia" },
  { term: "Revenge Trading", definition: "Operar por frustracion despues de perder para 'recuperar'. Causa #1 de cuentas destruidas.", category: "Psicologia" },
  { term: "Overtrading", definition: "Operar demasiado. Mas trades = mas comisiones + peores decisiones + mas estres.", category: "Psicologia" },
  { term: "Tilt", definition: "Estado emocional alterado que lleva a decisiones irracionales. Cuando lo sientas, PARA de operar.", category: "Psicologia" },
  // ESTILOS
  { term: "Scalping", definition: "Trades de segundos a minutos. Muchos trades al dia, ganancias pequenas. Requiere concentracion extrema.", category: "Estilos" },
  { term: "Day Trading", definition: "Trades que se abren y cierran el MISMO DIA. No dejas nada abierto por la noche.", category: "Estilos" },
  { term: "Swing Trading", definition: "Trades de dias a semanas. Buscas movimientos grandes. Menos estres, ideal para combinar con trabajo.", category: "Estilos" },
  { term: "Position Trading", definition: "Trades de semanas a meses. Casi como invertir pero con analisis tecnico.", category: "Estilos" },
  // AVANZADO
  { term: "Wyckoff", definition: "Metodo de analisis basado en 4 fases: Acumulacion, Markup, Distribucion, Markdown.", category: "Avanzado" },
  { term: "Spring (Wyckoff)", definition: "Falsa ruptura del soporte en acumulacion. Caza liquidez antes de rally alcista.", category: "Avanzado" },
  { term: "Elliott Wave", definition: "Teoria de 5 ondas impulsivas + 3 ondas correctivas (A-B-C). Onda 3 es la mas fuerte.", category: "Avanzado" },
  { term: "Harmonic Patterns", definition: "Patrones geometricos (Gartley, Butterfly, Bat, Crab) con proporciones Fibonacci exactas.", category: "Avanzado" },
  { term: "Order Flow", definition: "Analisis de ordenes reales del mercado: quien compra/vende, cuanto, a que precio.", category: "Avanzado" },
  { term: "Delta", definition: "Diferencia entre compras y ventas agresivas. Positivo = presion alcista, negativo = bajista.", category: "Avanzado" },
  { term: "Backtesting", definition: "Probar una estrategia con datos historicos para evaluar si habria funcionado.", category: "Avanzado" },
  { term: "Overfitting", definition: "Cuando un modelo se ajusta demasiado a datos pasados y no funciona en tiempo real.", category: "Avanzado" },
  { term: "Sharpe Ratio", definition: "Medida del retorno ajustado al riesgo. >1 bueno, >2 excelente.", category: "Avanzado" },
  { term: "DXY", definition: "Indice del Dolar. Mide la fuerza del USD contra una cesta de monedas. Brujula del Forex.", category: "Avanzado" },
  { term: "NFP", definition: "Non-Farm Payrolls. Dato de empleo de EEUU (1er viernes del mes). Mueve el mercado 50-100 pips.", category: "Avanzado" },
  { term: "CPI", definition: "Consumer Price Index. Inflacion. Si sube, los bancos centrales suben tipos = moneda se fortalece.", category: "Avanzado" },
];

const CATEGORIES = [...new Set(TERMS.map(t => t.category))];

export default function Glossary() {
  const [search, setSearch] = useState("");
  const [selectedCat, setSelectedCat] = useState<string>("all");

  const filtered = useMemo(() => {
    return TERMS.filter(t => {
      const matchesSearch = search.length < 2 || t.term.toLowerCase().includes(search.toLowerCase()) || t.definition.toLowerCase().includes(search.toLowerCase());
      const matchesCat = selectedCat === "all" || t.category === selectedCat;
      return matchesSearch && matchesCat;
    });
  }, [search, selectedCat]);

  return (
    <div className="bg-[#1a1a2e] border border-[#2a2a40] rounded-2xl p-6">
      <h3 className="text-xl font-bold text-white mb-2">Glosario de Trading</h3>
      <p className="text-sm text-[#a0a0b8] mb-4">{TERMS.length} terminos | Busca cualquier concepto</p>

      {/* Search */}
      <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Buscar termino..."
        className="w-full bg-[#0d0d15] border border-[#2a2a40] rounded-xl px-4 py-2.5 text-white text-sm placeholder-[#555] outline-none focus:border-blue-500/50 mb-4" />

      {/* Categories */}
      <div className="flex gap-2 flex-wrap mb-4">
        <button onClick={() => setSelectedCat("all")}
          className={`text-xs px-3 py-1.5 rounded-lg transition ${selectedCat === "all" ? "bg-blue-600 text-white" : "bg-[#0d0d15] text-[#a0a0b8] hover:text-white"}`}>
          Todos ({TERMS.length})
        </button>
        {CATEGORIES.map(cat => (
          <button key={cat} onClick={() => setSelectedCat(cat)}
            className={`text-xs px-3 py-1.5 rounded-lg transition ${selectedCat === cat ? "bg-blue-600 text-white" : "bg-[#0d0d15] text-[#a0a0b8] hover:text-white"}`}>
            {cat} ({TERMS.filter(t => t.category === cat).length})
          </button>
        ))}
      </div>

      {/* Terms */}
      <div className="space-y-2 max-h-[500px] overflow-y-auto">
        {filtered.length === 0 ? (
          <p className="text-[#555] text-center py-8">No se encontraron terminos</p>
        ) : filtered.map((t, i) => (
          <div key={i} className="bg-[#0d0d15] border border-[#2a2a40] rounded-xl p-3">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h4 className="text-white font-bold text-sm">{t.term}</h4>
                <p className="text-xs text-[#a0a0b8] mt-1">{t.definition}</p>
                {t.related && (
                  <p className="text-[10px] text-[#555] mt-1">Relacionado: {t.related.join(", ")}</p>
                )}
              </div>
              <span className="text-[9px] bg-[#1a1a2e] text-[#777] px-2 py-0.5 rounded-full shrink-0">{t.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
