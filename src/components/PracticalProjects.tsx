"use client";
import { useState, useEffect } from "react";

interface ProjectStep {
  title: string;
  description: string;
  checklist: string[];
}

interface Project {
  id: string;
  phaseId: string;
  phaseNumber: number;
  title: string;
  description: string;
  difficulty: "fácil" | "Medio" | "Avanzado" | "Experto";
  estimatedTime: string;
  steps: ProjectStep[];
}

const PROJECTS: Project[] = [
  {
    id: "proj-1", phaseId: "fase-1", phaseNumber: 1,
    title: "Mi Primer análisis de Mercado",
    description: "Analiza 5 activos diferentes y documenta tus observaciones. Este proyecto te familiariza con las plataformas y los diferentes mercados.",
    difficulty: "fácil", estimatedTime: "2-3 horas",
    steps: [
      { title: "Configurar TradingView", description: "Crea tu cuenta y configura el layout con velas japonesas", checklist: ["Cuenta creada en TradingView", "Tipo de Gráfico: Velas Japonesas", "Temporalidad configurada en H4", "Indicadores añadidos: EMA 21, EMA 50, RSI 14"] },
      { title: "Analizar EUR/USD (Forex)", description: "Abre EUR/USD en H4. Identifica la tendencia actual, soportes/resistencias visibles, y al menos 3 patrónes de velas.", checklist: ["Tendencia actual identificada (alcista/bajista/rango)", "2 soportes marcados", "2 resistencias marcadas", "3 patrónes de velas identificados y anotados"] },
      { title: "Analizar BTCUSD (Cripto)", description: "Abre Bitcoin. Observa la volátilidad comparada con EUR/USD.", checklist: ["volátilidad diaria observada", "Tendencia en D1 identificada", "Diferencia con Forex anotada"] },
      { title: "Analizar US500 (Indice)", description: "Abre el S&P 500. Observa como se mueve comparado con los anteriores.", checklist: ["Sesiones de trading identificadas", "Movimiento durante apertura US observado", "Comparacion con EUR/USD documentada"] },
      { title: "Analizar XAUUSD (Oro)", description: "El oro como refugio seguro. Observa correlaciones.", checklist: ["Comportamiento del oro observado", "Relacion con el dolar anotada", "volátilidad comparada"] },
      { title: "Crear tu Resumen", description: "Escribe un resumen de 1 pagina comparando los 4 activos.", checklist: ["Resumen escrito", "Cual te parece más fácil de leer?", "Cual elegiras para empezar a practicar?"] }
    ]
  },
  {
    id: "proj-2", phaseId: "fase-2", phaseNumber: 2,
    title: "análisis técnico Completo de EUR/USD",
    description: "Realiza un análisis técnico profesional completo del EUR/USD usando todo lo aprendido en la Fase 2.",
    difficulty: "Medio", estimatedTime: "3-4 horas",
    steps: [
      { title: "análisis Multi-Temporalidad", description: "Analiza EUR/USD en D1, H4 y H1. Identifica la tendencia en cada uno.", checklist: ["Tendencia en D1 identificada", "Tendencia en H4 identificada", "Tendencia en H1 identificada", "Las 3 temporalidades estan alineadas?"] },
      { title: "Soportes/Resistencias Clave", description: "Marca los niveles más importantes en cada temporalidad.", checklist: ["3+ soportes en D1 marcados", "3+ resistencias en D1 marcados", "Niveles refinados en H4", "Zonas de confluencia identificadas"] },
      { title: "Estructura de Mercado", description: "Identifica HH/HL o LH/LL en H4. Busca BOS recientes.", checklist: ["Estructura marcada (HH/HL o LH/LL)", "BOS recientes identificados", "CHoCH si hay cambio de tendencia"] },
      { title: "Indicadores", description: "Aplica EMA 21/50, RSI y volumen para confirmar tu análisis.", checklist: ["posición del precio respecto a EMAs", "RSI: sobrecompra/sobreventa/divergencias?", "Volumen confirma o contradice?"] },
      { title: "Fibonacci", description: "Si hay un movimiento impulsivo reciente, aplica Fibonacci.", checklist: ["Fibonacci aplicado al ultimo impulso", "Zona OTE (61.8-78.6%) marcada", "Confluencia con S/R?"] },
      { title: "Conclusion y Plan", description: "Escribe tu conclusion: direccion del mercado, posible entrada, SL, TP.", checklist: ["Direccion del trade definida (LONG/SHORT)", "Zona de entrada identificada", "Stop Loss definido", "Take Profit definido", "Ratio R:R calculado"] }
    ]
  },
  {
    id: "proj-3", phaseId: "fase-3", phaseNumber: 3,
    title: "Crear tu Plan de Trading Personalizado",
    description: "Escribe tu plan de trading completo siguiendo la plantilla profesional. Este sera TU documento de referencia.",
    difficulty: "Medio", estimatedTime: "2-3 horas",
    steps: [
      { title: "Datos Personales", description: "Define tu perfil como trader.", checklist: ["Mercados que operaras (max 2-3)", "Estilo de trading (day/swing)", "Horario de trading", "Capital disponible"] },
      { title: "Estrategia", description: "Define las reglas exactas de tu estrategia.", checklist: ["Temporalidades de análisis definidas", "Criterios de entrada (checklist)", "Criterios de salida (SL/TP)", "Indicadores que usaras"] },
      { title: "Gestion de Riesgo", description: "Define tus reglas de money management.", checklist: ["% de riesgo por trade definido", "Ratio R:R mínimo definido", "máximo de trades por dia", "Drawdown máximo aceptable"] },
      { title: "Reglas Emocionales", description: "Define reglas para controlar tus emociones.", checklist: ["Regla post-pérdida (cuantas antes de parar)", "Regla post-ganancia (no sobreoperar)", "Rutina pre-trading", "Protocolo de revenge trading"] },
      { title: "Revision", description: "Define como revisaras tu rendimiento.", checklist: ["Frecuencia de revision (diaria/semanal)", "Metricas a trackear", "Cuando ajustar la estrategia", "Condiciones para pasar a cuenta real"] }
    ]
  },
  {
    id: "proj-4", phaseId: "fase-4", phaseNumber: 4,
    title: "Backtest Manual: 30 Trades con tu Estrategia",
    description: "Usa la funcion 'Replay' de TradingView para backtestear tu estrategia con 30 trades históricos.",
    difficulty: "Avanzado", estimatedTime: "5-8 horas",
    steps: [
      { title: "Configurar el Backtest", description: "Elige un par, temporalidad y periodo de 3 meses.", checklist: ["Par elegido", "Temporalidades definidas", "Periodo de 3 meses seleccionado", "Reglas de estrategia escritas ANTES de empezar"] },
      { title: "Ejecutar 30 Trades", description: "Usa Replay para avanzar vela a vela. Registra CADA trade.", checklist: ["Trade 1-10 completados y registrados", "Trade 11-20 completados y registrados", "Trade 21-30 completados y registrados", "Cada trade tiene: entrada, SL, TP, resultado, captura"] },
      { title: "Calcular Estadisticas", description: "Analiza los resultados de tus 30 trades.", checklist: ["Win Rate calculado", "Profit Factor calculado", "Ratio R:R promedio", "Max drawdown del backtest", "Mejor y peor trade"] },
      { title: "Analizar Errores", description: "Revisa las pérdidas y busca patrónes.", checklist: ["Errores comunes identificados", "Horarios con peor rendimiento?", "Dias de la semana con peor rendimiento?", "Ajustes propuestos"] },
      { title: "Optimizar", description: "Ajusta tu estrategia basandote en los datos.", checklist: ["Al menos 1 mejora implementada", "Segunda ronda de 10 trades con la mejora", "Resultados comparados con la primera ronda"] }
    ]
  },
  {
    id: "proj-5", phaseId: "fase-5", phaseNumber: 5,
    title: "simulación de Challenge de Prop Firm",
    description: "Simula un challenge completo de prop firm en cuenta demo. 30 dias, reglas reales.",
    difficulty: "Experto", estimatedTime: "30 dias",
    steps: [
      { title: "Configurar la simulación", description: "Configura una cuenta demo con las reglas de FTMO.", checklist: ["Cuenta demo de 100K creada", "Objetivo: +8,000$ (8%)", "Drawdown diario max: 5,000$", "Drawdown total max: 10,000$", "Reglas escritas y visibles en tu escritorio"] },
      { title: "Semana 1: Conservador", description: "Riesgo 0.5% por trade. Objetivo: +2%.", checklist: ["Max 2 trades/dia", "Riesgo 0.5% por trade", "Resultado semanal anotado", "Diario de trading actualizado cada dia"] },
      { title: "Semana 2: Mantener Ritmo", description: "Si semana 1 positiva, mantener. Si negativa, revisar.", checklist: ["Balance semanal registrado", "Errores de semana 1 corregidos", "Drawdown monitoreado"] },
      { title: "Semana 3-4: Ajustar", description: "Basado en tu progreso, ajusta el riesgo.", checklist: ["Si > +5%: reducir riesgo a 0.25%", "Si entre 0-5%: mantener 0.5%", "Si negativo: PARAR 2 dias y revisar", "Nunca aumentar riesgo para recuperar"] },
      { title: "evaluación Final", description: "Al terminar los 30 dias, evalua tu rendimiento.", checklist: ["Objetivo de +8% alcanzado?", "Drawdown diario respetado?", "Drawdown total respetado?", "Cuantos dias operaste?", "Lecciones aprendidas documentadas"] }
    ]
  },
  {
    id: "proj-6", phaseId: "fase-6", phaseNumber: 6,
    title: "Crea tu Primer Bot de Trading",
    description: "Construye un bot simple en Python que detecte cruces de medias moviles y envie alertas.",
    difficulty: "Avanzado", estimatedTime: "4-6 horas",
    steps: [
      { title: "Instalar Python y Librerias", description: "Configura tu entorno de desarrollo.", checklist: ["Python 3.10+ instalado", "pip install pandas numpy yfinance", "VS Code o Jupyter configurado"] },
      { title: "Obtener Datos", description: "Descarga datos históricos de EUR/USD con yfinance.", checklist: ["Datos descargados correctamente", "DataFrame con Open, High, Low, Close, Volume", "Datos verificados (sin NaN)"] },
      { title: "Implementar Estrategia", description: "Programa la logica de cruce de EMAs.", checklist: ["EMA 21 calculada", "EMA 50 calculada", "señales de compra/venta generadas", "Backtest básico ejecutado"] },
      { title: "Calcular Metricas", description: "Evalua el rendimiento de tu bot.", checklist: ["Retorno total calculado", "Win rate calculado", "Max drawdown calculado", "Comparacion vs Buy & Hold"] },
      { title: "Crear Alertas", description: "Configura el bot para que te avise cuando detecte una Señal.", checklist: ["Alerta por consola funcionando", "Opcional: alerta por email o Telegram", "Bot corriendo en loop con datos en vivo"] }
    ]
  },
  {
    id: "proj-7", phaseId: "fase-7", phaseNumber: 7,
    title: "1 Mes de Trading en Demo con Diario Completo",
    description: "El proyecto final: opera 1 mes completo en demo siguiendo tu plan de trading y documentando TODO.",
    difficulty: "Experto", estimatedTime: "30 dias",
    steps: [
      { title: "Preparacion", description: "Ten todo listo antes de empezar.", checklist: ["Plan de trading escrito y revisado", "Cuenta demo configurada", "Diario de trading preparado", "Horarios de trading definidos", "Reglas emocionales claras"] },
      { title: "Semanas 1-2: Ejecucion", description: "Opera siguiendo tu plan al 100%.", checklist: ["Operar SOLO en tus horarios definidos", "CADA trade registrado en el diario", "Captura de pantalla de cada trade", "Revision diaria de 5 minutos", "Emociones registradas"] },
      { title: "Semanas 3-4: Refinamiento", description: "Ajusta basandote en tus datos.", checklist: ["Revision semanal completa", "patrónes de errores identificados", "Al menos 1 ajuste implementado", "Continuar registrando todo"] },
      { title: "evaluación Final", description: "Analiza tu mes completo.", checklist: ["Win rate final", "Profit factor", "Max drawdown", "Mejor dia / peor dia", "Emociones más frecuentes", "Top 3 errores cometidos", "Top 3 cosas que hiciste bien", "Decisiones: listo para real / necesito más practica?"] }
    ]
  }
];

export default function PracticalProjects({ phaseId }: { phaseId?: string }) {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [completedSteps, setCompletedSteps] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const saved = localStorage.getItem("trading-projects-progress");
      if (saved) setCompletedSteps(JSON.parse(saved));
    } catch {/* */}
  }, []);

  const toggleStep = (key: string) => {
    const next = { ...completedSteps, [key]: !completedSteps[key] };
    setCompletedSteps(next);
    localStorage.setItem("trading-projects-progress", JSON.stringify(next));
  };

  const filtered = phaseId ? PROJECTS.filter(p => p.phaseId === phaseId) : PROJECTS;
  const project = selectedProject ? PROJECTS.find(p => p.id === selectedProject) : null;

  if (project) {
    const totalChecks = project.steps.reduce((t, s) => t + s.checklist.length, 0);
    const completedChecks = project.steps.reduce((t, s) => t + s.checklist.filter((_, i) => completedSteps[`${project.id}-${s.title}-${i}`]).length, 0);
    const pct = totalChecks > 0 ? Math.round((completedChecks / totalChecks) * 100) : 0;

    return (
      <div className="bg-[#1a1a2e] border border-[#2a2a40] rounded-2xl p-6">
        <button onClick={() => setSelectedProject(null)} className="text-[#a0a0b8] hover:text-white mb-4 text-sm flex items-center gap-1">
          ← Volver a proyectos
        </button>
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-xs bg-blue-900/50 text-blue-400 px-2 py-0.5 rounded-full">Fase {project.phaseNumber}</span>
            <h3 className="text-xl font-bold text-white mt-1">{project.title}</h3>
            <p className="text-sm text-[#a0a0b8]">{project.description}</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-white">{pct}%</p>
            <p className="text-xs text-[#a0a0b8]">{completedChecks}/{totalChecks}</p>
          </div>
        </div>
        <div className="h-2 bg-[#0d0d15] rounded-full overflow-hidden mb-6">
          <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full transition-all" style={{ width: `${pct}%` }} />
        </div>
        <div className="space-y-4">
          {project.steps.map((step, stepIdx) => (
            <div key={stepIdx} className="bg-[#0d0d15] border border-[#2a2a40] rounded-xl p-4">
              <h4 className="text-white font-bold mb-1">Paso {stepIdx + 1}: {step.title}</h4>
              <p className="text-sm text-[#a0a0b8] mb-3">{step.description}</p>
              <div className="space-y-2">
                {step.checklist.map((item, i) => {
                  const key = `${project.id}-${step.title}-${i}`;
                  const done = completedSteps[key];
                  return (
                    <button key={i} onClick={() => toggleStep(key)} className="w-full flex items-center gap-3 text-left p-2 rounded-lg hover:bg-[#1a1a2e] transition">
                      <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 transition ${done ? "bg-green-600 border-green-600" : "border-[#555]"}`}>
                        {done && <span className="text-white text-xs">✓</span>}
                      </div>
                      <span className={`text-sm ${done ? "text-[#555] line-through" : "text-[#a0a0b8]"}`}>{item}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#1a1a2e] border border-[#2a2a40] rounded-2xl p-6">
      <h3 className="text-xl font-bold text-white mb-2">Proyectos Practicos</h3>
      <p className="text-sm text-[#a0a0b8] mb-6">Aplica lo que has aprendido con proyectos guiados paso a paso</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map(p => {
          const totalChecks = p.steps.reduce((t, s) => t + s.checklist.length, 0);
          const done = p.steps.reduce((t, s) => t + s.checklist.filter((_, i) => completedSteps[`${p.id}-${s.title}-${i}`]).length, 0);
          const pct = totalChecks > 0 ? Math.round((done / totalChecks) * 100) : 0;
          const diffColor = p.difficulty === "fácil" ? "text-green-400 bg-green-900/30" : p.difficulty === "Medio" ? "text-amber-400 bg-amber-900/30" : p.difficulty === "Avanzado" ? "text-orange-400 bg-orange-900/30" : "text-red-400 bg-red-900/30";
          return (
            <button key={p.id} onClick={() => setSelectedProject(p.id)} className="text-left bg-[#0d0d15] border border-[#2a2a40] rounded-xl p-4 hover:border-blue-500/40 transition">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs bg-blue-900/50 text-blue-400 px-2 py-0.5 rounded-full">Fase {p.phaseNumber}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${diffColor}`}>{p.difficulty}</span>
                <span className="text-xs text-[#555]">{p.estimatedTime}</span>
              </div>
              <h4 className="text-white font-bold mb-1">{p.title}</h4>
              <p className="text-xs text-[#a0a0b8] mb-3 line-clamp-2">{p.description}</p>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-1.5 bg-[#1a1a2e] rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: `${pct}%` }} />
                </div>
                <span className="text-xs text-[#a0a0b8]">{pct}%</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
