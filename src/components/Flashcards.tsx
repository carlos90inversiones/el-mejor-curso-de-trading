"use client";
import { useState, useMemo, useCallback } from "react";

const FLASHCARD_DATA = [
  { front: "Que es un PIP?", back: "Point in Percentage. Movimiento mínimo de precio en Forex (0.0001 en la mayoría de pares). EUR/USD de 1.0800 a 1.0850 = 50 pips.", category: "básico" },
  { front: "Que es el SPREAD?", back: "Diferencia entre precio de compra (Ask) y venta (Bid). Es la comision del broker. Spread bajo = broker bueno.", category: "básico" },
  { front: "Que es un STOP LOSS?", back: "Orden que cierra tu posición automaticamente para LIMITAR pérdidaS. OBLIGATORIO en cada trade, sin excepciones.", category: "básico" },
  { front: "Que es el R:R?", back: "Ratio Riesgo/Beneficio. 1:2 = arriesgas 1 para ganar 2. Con 1:2 solo necesitas 34% de acierto para ser rentable.", category: "Riesgo" },
  { front: "Cuanto arriesgar por trade?", back: "máximo 1-2% del capital por operación. Con cuenta de 10K = max 100-200$ por trade.", category: "Riesgo" },
  { front: "Que es un ORDER BLOCK?", back: "Ultima vela opuesta antes de un movimiento fuerte. Marca donde las instituciones colocaron sus ordenes. El precio tiende a volver ahi.", category: "SMC" },
  { front: "Que es un FVG (Fair Value Gap)?", back: "Hueco de 3 velas donde mecha de vela 1 no toca mecha de vela 3. El precio tiende a rellenar estos gaps.", category: "SMC" },
  { front: "Que es LIQUIDEZ?", back: "Ordenes pendientes (Stop Loss) acumuladas. Las instituciones necesitan liquidez para ejecutar ordenes grandes. Se acumula encima de máximos y debajo de mínimos obvios.", category: "SMC" },
  { front: "Que es el Power of 3 (AMD)?", back: "Acumulacion (Asia rango) → Manipulacion (London caza liquidez) → Distribucion (NY movimiento real). Se repite CADA DIA.", category: "ICT" },
  { front: "Que es Premium/Discount?", back: "Arriba del 50% del rango = Premium (caro, buscar ventas). Abajo del 50% = Discount (barato, buscar compras).", category: "ICT" },
  { front: "Que son las Killzones?", back: "Ventanas de maxima volátilidad. London: 08-11 UTC. NY: 13-16 UTC. aquí es donde debes operar.", category: "ICT" },
  { front: "Que es un BOS?", back: "Break of Structure. Ruptura de un máximo/mínimo anterior. Indica posible cambio de tendencia.", category: "Estructura" },
  { front: "Que es CHoCH?", back: "Change of Character. El PRIMER BOS que señala cambio de tendencia. La primera Señal de debilidad.", category: "Estructura" },
  { front: "HH/HL = ?", back: "Higher High / Higher Low = TENDENCIA ALCISTA. El precio hace máximos y mínimos cada vez más altos.", category: "Estructura" },
  { front: "LH/LL = ?", back: "Lower High / Lower Low = TENDENCIA BAJISTA. El precio hace máximos y mínimos cada vez más bajos.", category: "Estructura" },
  { front: "Que es un Doji?", back: "Vela con apertura y cierre casi iguales. Indica INDECISION. Tras tendencia fuerte puede señalar giro.", category: "Velas" },
  { front: "Que es un Martillo?", back: "Cuerpo pequeno arriba, mecha inferior larga (2x cuerpo). En SOPORTE = Señal alcista. Rechazo de precios bajos.", category: "Velas" },
  { front: "Que es una Envolvente?", back: "Vela que envuelve completamente a la anterior. Alcista (verde envuelve roja) = COMPRA. Bajista (roja envuelve verde) = VENTA.", category: "Velas" },
  { front: "Nivel de Fibonacci más importante?", back: "61.8% (Golden Ratio). La zona OTE (61.8%-78.6%) es donde las instituciones buscan entradas.", category: "Fibonacci" },
  { front: "Que es el DXY?", back: "índice del Dolar. Mide fuerza del USD. DXY sube = USD fuerte = EUR/USD baja. Es la brujula del Forex.", category: "Fundamental" },
  { front: "NFP = ?", back: "Non-Farm Payrolls. Empleo de EEUU, primer viernes del mes. El dato MAS importante. Mueve 50-100 pips en minutos.", category: "Fundamental" },
  { front: "Que es el DRAWDOWN?", back: "Caida maxima desde el punto más alto. Cuenta 10K baja a 8K = DD 20%. Prop firms limitan a 5-10%.", category: "Riesgo" },
  { front: "Que es REVENGE TRADING?", back: "Operar por frustracion despues de perder para 'recuperar'. Causa #1 de cuentas destruidas. Si pierdes 2 seguidas, PARA.", category: "Psicologia" },
  { front: "Que es FOMO?", back: "Fear of Missing Out. Miedo a perderse un movimiento. Lleva a entrar sin análisis. El mercado SIEMPRE da más oportunidades.", category: "Psicologia" },
  { front: "Formula de Position Sizing?", back: "tamaño = Riesgo en $ / (SL en pips x Valor del pip). Ej: 100$ / (30 pips x 10$) = 0.33 lotes.", category: "Riesgo" },
  { front: "Que es una Prop Firm?", back: "Empresa que te da capital para tradear. Tu pones la habilidad, ellos el dinero. Profit split tipico: 80% tu, 20% ellos.", category: "Prop Firm" },
  { front: "Objetivo tipico de un challenge?", back: "Fase 1: 8-10% de beneficio. Fase 2: 5%. Drawdown diario max: 5%. Drawdown total max: 10%.", category: "Prop Firm" },
  { front: "Que es OVERFITTING?", back: "Cuando un modelo de ML se ajusta demasiado a datos pasados. Funciona perfecto en backtest pero pierde en real.", category: "Algo" },
  { front: "Mejor sesion para scalping?", back: "London Open (08-10 UTC) y NY Open (13-15 UTC). Maxima volátilidad, setups claros.", category: "Estilos" },
  { front: "Regla tras 2 pérdidas seguidas?", back: "CIERRA la plataforma. Vuelve MANANA con mente fresca. Nunca revenge trading.", category: "Psicología" },
  { front: "¿Qué es una opción Call?", back: "Contrato que da el derecho, no la obligación, de comprar un activo a un precio específico (strike) antes del vencimiento. El comprador paga una prima por este derecho.", category: "Opciones" },
  { front: "¿Qué es el Delta en opciones?", back: "Mide cuánto cambia el precio de la opción por cada $1 de movimiento en el subyacente. Un Delta de 0.5 significa que la opción sube $0.50 por cada $1 que sube el activo.", category: "Opciones" },
  { front: "¿Qué es el Theta en opciones?", back: "Representa la pérdida de valor de una opción con el paso del tiempo (decaimiento temporal). Una opción con Theta de -0.05 pierde $5 de valor cada día.", category: "Opciones" },
  { front: "¿Qué es el Implied Volatility (IV)?", back: "La volatilidad que el mercado descuenta en el precio de la opción. Un IV alto significa opciones caras; vender opciones con IV alto sobre el percentil 50 suele ser ventajoso.", category: "Opciones" },
  { front: "¿Qué es un Iron Condor?", back: "Estrategia neutral que combina un Bull Put Spread y un Bear Call Spread. Genera beneficio cuando el activo se queda dentro de un rango definido hasta el vencimiento.", category: "Opciones" },
  { front: "¿Qué es el Gamma Squeeze?", back: "Los market makers compran más acciones para cubrir su exposición cuando las opciones Call se acercan al dinero rápidamente, acelerando el alza del precio.", category: "Opciones" },
  { front: "¿Qué es un contrato de futuros?", back: "Acuerdo estandarizado para comprar o vender un activo a un precio fijo en una fecha futura. La obligación es bilateral para ambas partes.", category: "Futuros" },
  { front: "¿Qué es el Roll Over en futuros?", back: "Cerrar una posición en el contrato próximo a vencer y abrirla en el siguiente. Se hace 5-10 días antes del vencimiento para evitar entrega física.", category: "Futuros" },
  { front: "¿Qué es Contango y Backwardation?", back: "Contango: futuros cotizan por encima del spot (curva ascendente). Backwardation: futuros más baratos que el spot, señal de demanda inmediata fuerte.", category: "Futuros" },
  { front: "¿Qué es el margen en futuros?", back: "Depósito de garantía para mantener una posición abierta. El margen inicial es para abrir; el de mantenimiento es el mínimo para evitar margin call.", category: "Futuros" },
  { front: "¿Qué son los E-mini S&P 500 (ES)?", back: "Contrato de futuros sobre el S&P 500 con multiplicador de $50 por punto. Un movimiento de 1 punto = $50 de ganancia o pérdida por contrato.", category: "Futuros" },
  { front: "¿Qué es el Point of Control (POC)?", back: "Nivel de precio donde más volumen se negoció durante una sesión. Actúa como imán de precio y zona de soporte/resistencia futura.", category: "Market Profile" },
  { front: "¿Qué es el Value Area?", back: "Rango de precios donde se negoció ~70% del volumen total. El VAH (high) y VAL (low) son niveles clave de referencia.", category: "Market Profile" },
  { front: "¿Qué es un perfil en D?", back: "Perfil equilibrado con forma de campana: consenso entre compradores y vendedores. Indica consolidación sin tendencia clara.", category: "Market Profile" },
  { front: "¿Qué es un perfil en p o b?", back: "El perfil en 'p' indica sesión alcista (compradores dominan). El perfil en 'b' indica sesión bajista (vendedores dominan).", category: "Market Profile" },
  { front: "¿Qué es el Tape Reading?", back: "Leer el flujo de órdenes en tiempo real a través del Time & Sales y libro de órdenes para anticipar movimientos de precio inminentes.", category: "Tape Reading" },
  { front: "¿Qué indica un block trade en el tape?", back: "Orden de gran tamaño en un solo precio: actividad institucional. En el Ask = compra agresiva; en el Bid = venta agresiva.", category: "Tape Reading" },
  { front: "¿Qué es una iceberg order?", back: "Orden grande dividida en partes menores para ocultar la intención. Se detecta cuando en un mismo nivel se ejecutan grandes cantidades repetidamente.", category: "Tape Reading" },
  { front: "¿Qué es el Delta acumulado?", back: "Diferencia entre volumen ejecutado en el Ask (compras agresivas) y en el Bid (ventas agresivas). Delta positivo = presión compradora.", category: "Tape Reading" },
  { front: "¿Qué es el análisis intermercado?", back: "Estudio de relaciones entre acciones, bonos, materias primas y divisas. Permite entender el contexto macroeconómico que impulsa los mercados.", category: "Intermarket" },
  { front: "¿Cuál es la relación bonos-acciones?", back: "Generalmente inversa: bonos suben (yields bajan) → acciones tienden a subir. Yields suben mucho → presionan valoraciones a la baja.", category: "Intermarket" },
  { front: "¿Cómo afecta el dólar a las materias primas?", back: "Relación inversa: dólar fuerte encarece commodities para compradores extranjeros, reduciendo demanda y presionando precios a la baja.", category: "Intermarket" },
  { front: "¿Qué indica el spread High Yield vs Treasuries?", back: "Mide apetito por riesgo. Spread se amplía = risk-off (huyen del riesgo). Spread se comprime = risk-on (apetito por riesgo).", category: "Intermarket" },
  { front: "¿Qué es la reversión a la media?", back: "Los precios tienden a volver a su promedio histórico tras desviaciones extremas. Los extremos no son sostenibles estadísticamente.", category: "Mean Reversion" },
  { front: "¿Cómo se usa el Z-Score?", back: "Mide cuántas desviaciones estándar está el precio de su media. Z-Score > +2 o < -2 = sobreextendido, alta probabilidad de reversión.", category: "Mean Reversion" },
  { front: "¿Qué es el Bollinger Squeeze?", back: "Compresión extrema de bandas = baja volatilidad, posible expansión inminente. Traders de reversión operan el retorno a la media de 20 períodos.", category: "Mean Reversion" },
  { front: "¿Qué es el trading estacional?", back: "Estrategia basada en patrones históricos recurrentes en fechas específicas del año. Se apoya en datos de décadas para identificar sesgos direccionales.", category: "Estacional" },
  { front: "¿Qué es Sell in May and Go Away?", back: "Patrón que describe peor desempeño del mercado entre mayo-octubre y mejor rendimiento entre noviembre-abril.", category: "Estacional" },
  { front: "¿Qué es el Santa Claus Rally?", back: "Alza estadística durante los últimos 5 días de diciembre y los 2 primeros de enero. Ocurre en más del 75% de los años.", category: "Estacional" },
  { front: "¿Qué es el Drawdown máximo?", back: "Caída porcentual más grande pico-valle. DD del 20% requiere 25% para recuperarse; del 50% requiere 100%. Controlar es CLAVE.", category: "Gestión" },
  { front: "¿Qué es el ratio de Sharpe?", back: "Retorno ajustado al riesgo = exceso de rentabilidad / desviación estándar. Sharpe > 1 es bueno; > 2 es excelente.", category: "Gestión" },
  { front: "¿Qué es la correlación en gestión de cartera?", back: "Mide cómo se mueven dos activos. +1 = idéntico, -1 = opuesto. Diversificar con baja correlación reduce riesgo total.", category: "Gestión" },
  { front: "¿Qué es una divergencia alcista?", back: "Precio marca mínimos más bajos pero el indicador (RSI, MACD) marca mínimos más altos. Señala debilitamiento bajista y posible giro al alza.", category: "Técnico" },
  { front: "¿Qué es el VWAP?", back: "Precio promedio ponderado por volumen del día. Institucionales lo usan como referencia: arriba = alcista intradía, abajo = bajista.", category: "Técnico" },
  { front: "¿Qué es el Volume Profile?", back: "Distribución horizontal del volumen por nivel de precio. HVN (alto volumen) = precio lento. LVN (bajo volumen) = precio rápido.", category: "Técnico" },
  { front: "¿Qué es el sesgo de confirmación?", back: "Buscar solo info que confirme tu idea e ignorar la contraria. Lleva a mantener perdedores demasiado tiempo.", category: "Psicología" },
  { front: "¿Qué es el tilt emocional?", back: "Estado de deterioro emocional tras pérdidas que lleva a decisiones impulsivas. Solución: parar, alejarse de pantallas, resetear.", category: "Psicología" },
  { front: "¿Proceso vs resultado en trading?", back: "Un buen trader evalúa operaciones por la ejecución del plan, no por si ganaron o perdieron. El proceso es lo que controlas.", category: "Psicología" },
  { front: "¿Qué es el Daily Drawdown Limit?", back: "Pérdida máxima permitida en un solo día en prop firms: generalmente 4-5%. Superarlo = descalificación.", category: "Prop Firm" },
  { front: "¿Qué es el Max Drawdown Total?", back: "Pérdida máxima acumulada permitida: 8-12%. Se calcula desde el balance más alto (trailing) o desde capital inicial.", category: "Prop Firm" },
  { front: "¿Qué es el Profit Target en prop firms?", back: "Objetivo de ganancia para pasar fase. Fase 1: 8-10%. Fase 2: 5%. Tiempo ilimitado en la mayoría de firmas.", category: "Prop Firm" },
  { front: "¿Cómo proteger una cuenta fondeada?", back: "Riesgo 0.5-1% por operación, evitar noticias de alto impacto, no acumular posiciones correlacionadas, parar al 50% del DD diario.", category: "Prop Firm" },
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
