"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollReveal } from "@/components/Animations";

interface ExamQuestion {
  question: string;
  options: string[];
  correct: number;
  phase: number;
}

const EXAM_QUESTIONS: ExamQuestion[] = [
  { question: "¿Cuál es la función principal de un bróker en el mercado financiero?", options: ["Garantizar que el precio siempre suba", "Actuar como intermediario entre el trader y el mercado", "Proporcionar señales de trading gratuitas", "Fijar el precio de los activos"], correct: 1, phase: 1 },
  { question: "Si compras una acción a $100 y la vendes a $85, ¿cuál es tu resultado?", options: ["Ganancia de $15", "Pérdida de $15", "Punto de equilibrio", "Ganancia de $85"], correct: 1, phase: 1 },
  { question: "¿Qué representa el volumen en un gráfico de trading?", options: ["El precio máximo alcanzado en el día", "La diferencia entre apertura y cierre", "La cantidad de contratos negociados en un período", "El número de traders activos"], correct: 2, phase: 1 },
  { question: "Un trader abre posición larga en EUR/USD a 1.0850 y sube a 1.0900. ¿Qué ocurrió?", options: ["Perdió 50 pips", "Ganó 50 pips", "No ganó ni perdió", "Perdió porque el euro se fortaleció"], correct: 1, phase: 1 },
  { question: "¿Cuál es la diferencia entre un mercado alcista y uno bajista?", options: ["El alcista opera de día y el bajista de noche", "En el alcista los precios suben tendencialmente y en el bajista bajan", "El alcista es para acciones y el bajista para divisas", "Son términos intercambiables"], correct: 1, phase: 1 },
  { question: "Una vela con cuerpo pequeño y mechas largas en ambos extremos indica:", options: ["Tendencia alcista fuerte", "Indecisión entre compradores y vendedores", "Ruptura inminente", "Reversión bajista garantizada"], correct: 1, phase: 2 },
  { question: "¿Cuándo se considera que el RSI está en sobrecompra?", options: ["Por encima de 30", "Por debajo de 50", "Por encima de 70", "Por debajo de 20"], correct: 2, phase: 2 },
  { question: "El precio forma máximos más bajos mientras el MACD forma máximos más altos. ¿Qué patrón es?", options: ["Convergencia alcista", "Divergencia bajista", "Cruce de medias", "Ruptura de resistencia"], correct: 1, phase: 2 },
  { question: "¿Qué representa una media móvil de 200 períodos en gráfico diario?", options: ["Volatilidad de las últimas 200 horas", "Tendencia promedio de los últimos 200 días", "Precio máximo de 200 días", "Volumen promedio de 200 sesiones"], correct: 1, phase: 2 },
  { question: "Un soporte en $50 es roto con alto volumen. ¿Qué describe este fenómeno?", options: ["Rebote técnico", "Ruptura con confirmación (breakout)", "Retroceso de Fibonacci", "Divergencia del RSI"], correct: 1, phase: 2 },
  { question: "¿Qué indica un patrón de cabeza y hombros?", options: ["Continuación alcista", "Posible reversión de alcista a bajista", "Alta volatilidad sin dirección", "Acumulación institucional"], correct: 1, phase: 2 },
  { question: "El precio toca la banda superior de Bollinger mientras el volumen disminuye. ¿Qué indica?", options: ["Tendencia alcista fuerte", "Posible agotamiento del movimiento alcista", "Señal de compra inmediata", "El precio seguirá subiendo"], correct: 1, phase: 2 },
  { question: "Si no colocas stop-loss en una acción de $200, ¿cuál es tu riesgo máximo?", options: ["10% del valor", "$20 por acción", "La totalidad del capital invertido", "Solo el spread"], correct: 2, phase: 3 },
  { question: "Cuenta de $10,000, riesgo 2%, SL a 50 pips. ¿Cuánto riesgo máximo en dólares?", options: ["$50", "$200", "$500", "$1,000"], correct: 1, phase: 3 },
  { question: "¿Qué significa un ratio R:R de 1:3?", options: ["Por cada $3 arriesgados, esperas ganar $1", "Por cada $1 arriesgado, esperas ganar $3", "Ganas 3 de cada 10 operaciones", "El precio debe moverse 3 veces"], correct: 1, phase: 3 },
  { question: "Tasa de acierto 40% con R:R 1:3. ¿El sistema es rentable?", options: ["No, gana menos de la mitad", "Sí, el valor esperado es positivo", "Depende del mercado", "No es posible determinarlo"], correct: 1, phase: 3 },
  { question: "¿Cuál es el propósito del trailing stop?", options: ["Entrar al mercado en el momento óptimo", "Proteger ganancias mientras permite que la posición continúe a favor", "Incrementar tamaño de posición automáticamente", "Reducir el spread del bróker"], correct: 1, phase: 3 },
  { question: "5 pérdidas consecutivas del 2% cada una. ¿Drawdown acumulado aproximado?", options: ["Exactamente 10%", "Aproximadamente 9.6%", "Exactamente 2%", "Más del 15%"], correct: 1, phase: 3 },
  { question: "En SMC, ¿qué es un Order Block?", options: ["Bloque de código para trading algorítmico", "Última vela bajista antes de un movimiento alcista institucional", "Nivel de soporte de traders retail", "Zona de alta volatilidad sin dirección"], correct: 1, phase: 4 },
  { question: "¿Qué describe un 'liquidity sweep' en SMC/ICT?", options: ["Precio consolida en rango estrecho", "Precio rompe un nivel clave, activa stops y luego revierte", "Aumento de volumen en apertura", "Acumulación gradual institucional"], correct: 1, phase: 4 },
  { question: "En ICT, ¿qué es el Killzone de Nueva York?", options: ["Zona de precio de alto riesgo", "Período de mayor volatilidad al inicio de la sesión NY (7-10 AM EST)", "Momento de cierre de operaciones bancarias", "Patrón gráfico de pares USD"], correct: 1, phase: 4 },
  { question: "El precio rompe estructura de máximos y luego regresa a testear. Según SMC:", options: ["Divergencia institucional", "Change of Character (ChoCH) con retest", "Imbalance de volumen", "Sweep de liquidez interna"], correct: 1, phase: 4 },
  { question: "¿Qué es un Fair Value Gap (FVG)?", options: ["Diferencia entre bid y ask", "Ineficiencia de precio entre tres velas consecutivas sin negociación", "Gap entre sesión asiática y europea", "Indicador de volumen para detectar manipulación"], correct: 1, phase: 4 },
  { question: "Estructura con máximos y mínimos crecientes. El precio rompe el último mínimo con fuerza:", options: ["Continuación alcista", "Break of Structure bajista, posible cambio de tendencia", "Trampa para vendedores", "Señal de compra en discount"], correct: 1, phase: 4 },
  { question: "¿Diferencia entre Premium Zone y Discount Zone en ICT?", options: ["Premium arriba del 50% del rango (vender), Discount abajo (comprar)", "Premium es precio actual, Discount es histórico", "Premium para acciones, Discount para divisas", "No hay diferencia funcional"], correct: 0, phase: 4 },
  { question: "¿Cuál es el objetivo de las challenge accounts en prop firms?", options: ["Educación gratuita", "Evaluar si el trader puede seguir reglas y ser rentable", "Generar comisiones para brókers", "Competencia entre traders"], correct: 1, phase: 5 },
  { question: "Prop firm con 5% max daily DD en cuenta de $100K. Pierdes $3,000 por la mañana. ¿Cuánto puedes perder más?", options: ["$3,000", "$2,000", "$5,000", "Nada, ya superó el límite"], correct: 1, phase: 5 },
  { question: "¿Qué es un scaling plan en prop firms?", options: ["Reducir posición tras pérdidas", "Programa para aumentar capital si demuestras consistencia", "Comisión de la firma por operación", "Cierre de cuenta a fin de mes"], correct: 1, phase: 5 },
  { question: "Cuenta fondeada de $200K, split 80/20, generas $10K. ¿Cuánto recibes?", options: ["$2,000", "$8,000", "$10,000", "$4,000"], correct: 1, phase: 5 },
  { question: "¿Razón más común por la que traders fallan evaluaciones de prop firms?", options: ["Estrategias demasiado complejas", "Violar reglas de drawdown por exceso de apalancamiento", "Poca experiencia en análisis técnico", "Mercados incorrectos"], correct: 1, phase: 5 },
  { question: "En Python para trading, ¿qué hace la librería pandas?", options: ["Ejecuta órdenes automáticamente", "Manipula y analiza datos tabulares como series de precios", "Genera gráficos de velas", "Conecta con APIs de brókers"], correct: 1, phase: 6 },
  { question: "¿Qué es el backtesting en trading algorítmico?", options: ["Probar en tiempo real con capital pequeño", "Evaluar cómo habría funcionado una estrategia en datos históricos", "Optimizar parámetros en tiempo real", "Detectar errores en código de un bot"], correct: 1, phase: 6 },
  { question: "Un algoritmo genera Sharpe Ratio de 0.3. ¿Cómo se interpreta?", options: ["Excelente", "Aceptable", "Bajo retorno ajustado al riesgo", "Negativo, pierde dinero"], correct: 2, phase: 6 },
  { question: "¿Qué problema representa el overfitting?", options: ["Algoritmo opera demasiado lento", "Funciona en backtesting pero falla en real por memorizar ruido", "Código ineficiente", "Demasiadas operaciones por día"], correct: 1, phase: 6 },
  { question: "¿Cómo afecta el sesgo de confirmación al trading?", options: ["Mejora decisiones al enfocar info relevante", "Lleva a buscar solo info que confirme el análisis previo", "No impacta trading sistemático", "Ayuda a mantener disciplina"], correct: 1, phase: 7 },
  { question: "7 pérdidas seguidas, el trader dobla el tamaño. ¿Qué error comete?", options: ["Anclaje", "Revenge trading", "Exceso de confianza", "Aversión a la pérdida moderada"], correct: 1, phase: 7 },
  { question: "¿Qué distingue al trader profesional del amateur en mentalidad?", options: ["Opera más horas", "Evalúa cada operación por ejecución del proceso, no el resultado", "Usa estrategias más complejas", "Nunca tiene pérdidas"], correct: 1, phase: 7 },
  { question: "¿Cuál es el propósito de un diario de trading?", options: ["Cumplir requisitos fiscales", "Identificar patrones en errores y aciertos para mejorar", "Demostrar actividad a prop firms", "Calcular impuestos"], correct: 1, phase: 7 },
  { question: "¿Qué es una opción Call?", options: ["Derecho a vender un activo", "Derecho a comprar un activo a un precio determinado", "Obligación de comprar al precio de mercado", "Contrato para intercambiar divisas"], correct: 1, phase: 8 },
  { question: "En opciones, ¿qué representa la Theta?", options: ["Sensibilidad ante cambios en volatilidad", "Tasa de decaimiento del valor temporal", "Apalancamiento efectivo", "Probabilidad de expirar in the money"], correct: 1, phase: 8 },
  { question: "Vendes un futuro del S&P 500 a 5,000 puntos. ¿Qué posición tienes?", options: ["Larga, ganas si sube", "Corta, ganas si baja", "Neutral sin riesgo", "Una opción de venta"], correct: 1, phase: 8 },
  { question: "En Market Profile, ¿qué representa el Point of Control (POC)?", options: ["Precio de cierre más frecuente", "Nivel donde se negoció el mayor volumen", "Punto donde cambia la tendencia", "Media del rango del día"], correct: 1, phase: 8 },
  { question: "IV (Implied Volatility) elevada en opciones indica:", options: ["Tendencia alcista clara", "El mercado espera movimientos significativos y las primas son más caras", "Opciones baratas para comprar", "Market makers reducen exposición"], correct: 1, phase: 8 },
  { question: "Un bull call spread reduce el costo frente a comprar solo la call porque:", options: ["Mayor beneficio ilimitado", "Limita ganancia máxima a cambio de reducir costo neto", "Elimina todo el riesgo", "Duplica la exposición con mismo capital"], correct: 1, phase: 8 },
  { question: "¿Qué describe el 'efecto enero' en los mercados?", options: ["Acciones small-cap tienden a subir en enero por flujos estacionales", "Mayor volatilidad por datos macro", "Cierre masivo de posiciones institucionales", "Correlación temperatura-rendimiento"], correct: 0, phase: 9 },
  { question: "En mean reversion, ¿cuándo se genera señal de compra?", options: ["Precio rompe a máximos históricos", "Precio se aleja significativamente por debajo de su media", "Tendencia alcista con retrocesos menores", "RSI supera 70"], correct: 1, phase: 9 },
  { question: "Relación entre DXY y commodities:", options: ["Correlación positiva", "Correlación negativa: dólar fuerte → commodities bajan", "Sin correlación estadística", "Depende solo del petróleo"], correct: 1, phase: 9 },
  { question: "Un trader nota que el oro rinde más en enero y agosto históricamente. ¿Qué análisis aplica?", options: ["Técnico largo plazo", "Estacionalidad (seasonality analysis)", "Fundamental de oferta y demanda", "Correlación intermarket"], correct: 1, phase: 9 },
  { question: "¿Qué relación tienen los bonos del Tesoro y acciones durante crisis?", options: ["Ambos caen siempre", "Bonos suben (flight to safety) cuando acciones caen", "Acciones se recuperan antes que bonos", "Correlación positiva en todo contexto"], correct: 1, phase: 9 },
  { question: "Bollinger Bands: precio sale de banda inferior en tendencia bajista fuerte. ¿Acción más prudente?", options: ["Comprar inmediatamente", "Esperar confirmación: en tendencias fuertes el precio puede seguir fuera", "Vender más", "Cerrar todas las posiciones"], correct: 1, phase: 9 },
];

export default function ExamenFinalPage() {
  const [started, setStarted] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(EXAM_QUESTIONS.length).fill(null));
  const [showResults, setShowResults] = useState(false);

  const shuffled = useMemo(() => [...EXAM_QUESTIONS].sort(() => Math.random() - 0.5), []);

  const handleAnswer = (optionIdx: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQ] = optionIdx;
    setAnswers(newAnswers);
  };

  const score = useMemo(() => {
    let correct = 0;
    shuffled.forEach((q, i) => {
      if (answers[i] === q.correct) correct++;
    });
    return correct;
  }, [answers, shuffled]);

  const pct = Math.round((score / EXAM_QUESTIONS.length) * 100);
  const passed = pct >= 70;

  const phaseScores = useMemo(() => {
    const phases: Record<number, { total: number; correct: number }> = {};
    shuffled.forEach((q, i) => {
      if (!phases[q.phase]) phases[q.phase] = { total: 0, correct: 0 };
      phases[q.phase].total++;
      if (answers[i] === q.correct) phases[q.phase].correct++;
    });
    return phases;
  }, [answers, shuffled]);

  if (!started) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="max-w-3xl mx-auto px-4 py-12">
          <ScrollReveal>
            <div className="text-center mb-8">
              <div className="text-5xl mb-4">🎓</div>
              <h1 className="text-3xl font-extrabold text-white mb-3">Examen Final del Curso</h1>
              <p className="text-[#a0a0b8] max-w-xl mx-auto">
                50 preguntas que cubren TODAS las fases del curso. Necesitas un 70% para aprobar.
              </p>
            </div>

            <div className="bg-[#1a1a2e] border border-[#2a2a40] rounded-2xl p-6 mb-6">
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">50</div>
                  <div className="text-xs text-[#a0a0b8]">Preguntas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">9</div>
                  <div className="text-xs text-[#a0a0b8]">Fases cubiertas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">70%</div>
                  <div className="text-xs text-[#a0a0b8]">Para aprobar</div>
                </div>
              </div>

              <div className="bg-[#0d0d15] rounded-xl p-4 mb-6">
                <h3 className="text-sm font-bold text-white mb-2">Distribución por fases:</h3>
                <div className="grid grid-cols-3 gap-2 text-xs text-[#a0a0b8]">
                  <span>F1: Fundamentos (5)</span>
                  <span>F2: Análisis Técnico (7)</span>
                  <span>F3: Gestión de Riesgo (6)</span>
                  <span>F4: SMC/ICT (7)</span>
                  <span>F5: Prop Firms (5)</span>
                  <span>F6: Algorítmico (4)</span>
                  <span>F7: Psicología (4)</span>
                  <span>F8: Opciones/Futuros (6)</span>
                  <span>F9: Estacional/Inter. (6)</span>
                </div>
              </div>

              <button onClick={() => setStarted(true)}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg py-4 rounded-xl font-bold hover:opacity-90 transition">
                Empezar Examen →
              </button>
            </div>
          </ScrollReveal>
        </main>
        <Footer />
      </div>
    );
  }

  if (showResults) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="max-w-3xl mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <div className="text-5xl mb-4">{passed ? "🏆" : "📝"}</div>
            <h1 className="text-3xl font-extrabold text-white mb-2">
              {passed ? "¡Examen Aprobado!" : "Examen No Aprobado"}
            </h1>
            <p className="text-4xl font-extrabold mb-2" style={{ color: passed ? "#10b981" : "#ef4444" }}>
              {score}/{EXAM_QUESTIONS.length} ({pct}%)
            </p>
            <p className="text-[#a0a0b8]">
              {passed ? "Felicidades, tienes un conocimiento sólido de trading." : "Necesitas 70% para aprobar. Repasa las fases donde fallaste."}
            </p>
          </div>

          {/* Phase breakdown */}
          <div className="bg-[#1a1a2e] border border-[#2a2a40] rounded-2xl p-6 mb-6">
            <h3 className="text-lg font-bold text-white mb-4">Resultados por Fase</h3>
            <div className="space-y-3">
              {Object.entries(phaseScores).sort(([a], [b]) => Number(a) - Number(b)).map(([phase, data]) => {
                const phasePct = Math.round((data.correct / data.total) * 100);
                return (
                  <div key={phase} className="flex items-center gap-3">
                    <span className="text-xs font-bold text-blue-400 w-8">F{phase}</span>
                    <div className="flex-1 h-3 bg-[#0d0d15] rounded-full overflow-hidden">
                      <div className="h-full rounded-full transition-all" style={{
                        width: `${phasePct}%`,
                        background: phasePct >= 70 ? "#10b981" : phasePct >= 50 ? "#f59e0b" : "#ef4444"
                      }} />
                    </div>
                    <span className="text-xs text-[#a0a0b8] w-16 text-right">{data.correct}/{data.total} ({phasePct}%)</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex gap-3">
            <button onClick={() => { setStarted(false); setAnswers(Array(50).fill(null)); setCurrentQ(0); setShowResults(false); }}
              className="flex-1 bg-[#1a1a2e] border border-[#2a2a40] text-white py-3 rounded-xl font-medium hover:bg-[#222240] transition">
              Repetir Examen
            </button>
            <Link href="/curso" className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-medium text-center hover:opacity-90 transition">
              Volver al Curso
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const q = shuffled[currentQ];
  const progress = Math.round(((currentQ + 1) / EXAM_QUESTIONS.length) * 100);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-8">
        {/* Progress */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 h-2 bg-[#1a1a2e] rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all" style={{ width: `${progress}%` }} />
          </div>
          <span className="text-sm text-[#a0a0b8] shrink-0">{currentQ + 1}/{EXAM_QUESTIONS.length}</span>
        </div>

        {/* Question */}
        <div className="bg-[#1a1a2e] border border-[#2a2a40] rounded-2xl p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-bold px-2 py-1 bg-blue-900/50 text-blue-400 rounded-lg">Fase {q.phase}</span>
            <span className="text-xs text-[#555]">Pregunta {currentQ + 1}</span>
          </div>
          <h2 className="text-lg font-bold text-white mb-6">{q.question}</h2>

          <div className="space-y-3">
            {q.options.map((opt, i) => {
              const selected = answers[currentQ] === i;
              return (
                <button key={i} onClick={() => handleAnswer(i)}
                  className={`w-full text-left p-4 rounded-xl border transition text-sm ${
                    selected
                      ? "bg-blue-900/30 border-blue-500 text-white"
                      : "bg-[#0d0d15] border-[#2a2a40] text-[#a0a0b8] hover:border-blue-500/30 hover:text-white"
                  }`}>
                  <span className="font-bold mr-2">{String.fromCharCode(65 + i)}.</span>
                  {opt}
                </button>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex gap-3">
          {currentQ > 0 && (
            <button onClick={() => setCurrentQ(c => c - 1)}
              className="flex-1 bg-[#1a1a2e] border border-[#2a2a40] text-white py-3 rounded-xl font-medium hover:bg-[#222240] transition">
              ← Anterior
            </button>
          )}
          {currentQ < EXAM_QUESTIONS.length - 1 ? (
            <button onClick={() => setCurrentQ(c => c + 1)}
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-medium hover:opacity-90 transition">
              Siguiente →
            </button>
          ) : (
            <button onClick={() => setShowResults(true)}
              className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-xl font-medium hover:opacity-90 transition">
              Terminar Examen ✓
            </button>
          )}
        </div>

        {/* Question map */}
        <div className="mt-6 bg-[#1a1a2e] border border-[#2a2a40] rounded-xl p-4">
          <p className="text-xs text-[#555] mb-2">Mapa de preguntas:</p>
          <div className="flex flex-wrap gap-1.5">
            {shuffled.map((_, i) => (
              <button key={i} onClick={() => setCurrentQ(i)}
                className={`w-7 h-7 rounded text-[10px] font-bold transition ${
                  i === currentQ ? "bg-blue-600 text-white" :
                  answers[i] !== null ? "bg-green-900/40 text-green-400 border border-green-800/30" :
                  "bg-[#0d0d15] text-[#555] border border-[#2a2a40]"
                }`}>
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
