import type { Phase } from "../courseData";

export const PHASE_8: Phase = {
  id: "fase-8",
  number: 8,
  title: "Plan de Práctica: 8 Semanas",
  subtitle: "De la teoría a la acción real",
  description: "Has aprendido todo lo teórico. Ahora toca PRACTICAR. Este plan de 8 semanas te guía día a día para convertir el conocimiento en habilidad real. Cada semana tiene objetivos específicos, ejercicios diarios y métricas de seguimiento.",
  color: "#14B8A6",
  gradient: "from-teal-500 to-teal-700",
  modules: [
    {
      id: "mod-8-1",
      title: "Semanas 1-2: Fundamentos en Demo",
      description: "Configura todo y empieza a operar en demo con estructura",
      icon: "🌱",
      color: "#14B8A6",
      lessons: [
        {
          id: "8-1-1",
          title: "Semana 1: Configuración y Primeros Trades",
          duration: "45 min + práctica diaria",
          content: `
<h2>Semana 1: Tu Primera Semana Como Trader</h2>

<div class="highlight-box green">
<h4>Objetivo de la Semana</h4>
<p>Configurar todo tu entorno de trading, hacer tus primeros 5-10 trades en demo, y empezar tu diario de trading. No te preocupes por ganar dinero. El objetivo es EJECUTAR CORRECTAMENTE.</p>
</div>

<h3>Día 1: Configuración</h3>
<div class="strategy-box">
<h4>Checklist del Día 1</h4>
<ol>
<li><strong>TradingView:</strong> Configura tu layout con D1 + H4 + H1 del par EUR/USD</li>
<li><strong>Indicadores:</strong> Añade EMA 21, EMA 50, RSI 14</li>
<li><strong>Cuenta demo:</strong> Abre cuenta demo en MetaTrader 5 con un broker (IC Markets, Pepperstone)</li>
<li><strong>Diario:</strong> Crea tu diario de trading (usa la herramienta del curso o un Excel)</li>
<li><strong>Plan:</strong> Imprime tu plan de trading de la Fase 3</li>
<li><strong>Horario:</strong> Define tu horario de trading (recomendado: 15:00-19:00 hora España)</li>
</ol>
</div>

<h3>Días 2-5: Primeros Trades</h3>
<div class="strategy-box">
<div style="display:flex;justify-content:center;margin:20px 0"><svg width="460" height="80" viewBox="0 0 460 80" style="background:#131722;border-radius:10px;border:1px solid #2a2a40"><text x="230" y="14" fill="white" font-size="9" text-anchor="middle" font-weight="bold">RUTINA DIARIA DEL TRADER (3.5 HORAS)</text><rect x="8" y="25" width="100" height="32" rx="5" fill="#3b82f615" stroke="#3b82f6"/><text x="58" y="40" fill="#3b82f6" font-size="7" text-anchor="middle" font-weight="bold">PRE-MARKET 30m</text><text x="58" y="50" fill="#787b86" font-size="6" text-anchor="middle">Noticias + Análisis</text><text x="115" y="43" fill="#555" font-size="10">→</text><rect x="122" y="25" width="115" height="32" rx="5" fill="#26a69a15" stroke="#26a69a"/><text x="179" y="40" fill="#26a69a" font-size="7" text-anchor="middle" font-weight="bold">TRADING 2h</text><text x="179" y="50" fill="#787b86" font-size="6" text-anchor="middle">Max 2-3 trades</text><text x="244" y="43" fill="#555" font-size="10">→</text><rect x="251" y="25" width="100" height="32" rx="5" fill="#f59e0b15" stroke="#f59e0b"/><text x="301" y="40" fill="#f59e0b" font-size="7" text-anchor="middle" font-weight="bold">POST-MARKET 30m</text><text x="301" y="50" fill="#787b86" font-size="6" text-anchor="middle">Diario + Capturas</text><text x="358" y="43" fill="#555" font-size="10">→</text><rect x="365" y="25" width="88" height="32" rx="5" fill="#8b5cf615" stroke="#8b5cf6"/><text x="409" y="40" fill="#8b5cf6" font-size="7" text-anchor="middle" font-weight="bold">ESTUDIO 30m</text><text x="409" y="50" fill="#787b86" font-size="6" text-anchor="middle">Repaso lección</text><text x="230" y="72" fill="#787b86" font-size="7" text-anchor="middle">Análisis → Ejecución → Revisión → Mejora = CICLO DIARIO</text></svg></div>
<h4>Rutina Diaria (3-4 horas)</h4>
<ol>
<li><strong>30 min - Análisis pre-market:</strong> Revisa Forex Factory, analiza D1 → H4 → H1, marca niveles clave</li>
<li><strong>2 horas - Sesión de trading:</strong> Busca setups en tu horario. Máximo 2 trades al día.</li>
<li><strong>30 min - Revisión post-market:</strong> Registra cada trade en el diario con captura de pantalla</li>
<li><strong>30 min - Estudio:</strong> Repasa 1 lección del curso que necesites reforzar</li>
</ol>
</div>

<h3>Reglas de la Semana 1</h3>
<div class="grid-cards">
<div class="card green-border"><h4>Riesgo</h4><p>0.5% por trade (la mitad de lo normal para empezar con calma)</p></div>
<div class="card"><h4>Pares</h4><p>SOLO EUR/USD. Un par. Sin excepciones.</p></div>
<div class="card"><h4>Temporalidad</h4><p>Análisis en H4, entrada en H1. No toques el M5 todavía.</p></div>
<div class="card red-border"><h4>Máximo</h4><p>2 trades al día. Si pierdes 2, PARA.</p></div>
</div>

<h3>Métricas a Registrar</h3>
<div class="highlight-box blue">
<h4>Al final de la Semana 1, anota:</h4>
<ul>
<li>Total de trades realizados</li>
<li>Win Rate (%)</li>
<li>R:R promedio</li>
<li>P/L total (en pips, no en dinero)</li>
<li>Número de veces que seguiste tu plan al 100%</li>
<li>Emociones más frecuentes durante el trading</li>
<li>Tu error más común</li>
</ul>
</div>

<div class="warning-box">
<h4>IMPORTANTE</h4>
<p>NO te preocupes si pierdes dinero esta semana. Es NORMAL. El objetivo NO es ganar. Es ejecutar correctamente: poner SL, calcular position size, seguir tu plan, y registrar todo. Si haces eso, la semana 1 es un éxito aunque pierdas todos los trades.</p>
</div>`,
          keyPoints: [
            "Semana 1: configurar entorno + primeros 5-10 trades en demo",
            "Rutina diaria: 30 min pre-market + 2h trading + 30 min revisión + 30 min estudio",
            "Riesgo 0.5%, solo EUR/USD, solo H4/H1, máximo 2 trades/día",
            "El objetivo NO es ganar dinero, es ejecutar correctamente",
            "Registrar TODO: trades, emociones, errores, capturas"
          ],
          quiz: [
            { question: "¿Cuál es el objetivo de la Semana 1?", options: ["Ganar 10% en la cuenta demo", "Configurar todo y ejecutar correctamente, sin importar el resultado", "Encontrar la mejor estrategia", "Operar el máximo de trades posible"], correctIndex: 1, explanation: "La Semana 1 es para establecer rutinas y ejecutar correctamente. Los resultados son secundarios." },
            { question: "¿Cuántos trades máximo deberías hacer por día en la Semana 1?", options: ["10-15", "5-7", "2", "Sin límite"], correctIndex: 2, explanation: "Máximo 2 trades al día. Si pierdes 2, cierras la plataforma. Calidad sobre cantidad." },
            { question: "¿Cuántos pares deberías operar en la Semana 1?", options: ["5-10 pares para diversificar", "Solo 1 par (EUR/USD)", "Todos los que tengan buena señal", "Solo criptomonedas"], correctIndex: 1, explanation: "Solo EUR/USD. Enfocarte en un par te permite aprender su comportamiento en profundidad." }
          ]
        },
        {
          id: "8-1-2",
          title: "Semana 2: Estructura y Primeros Patrones",
          duration: "45 min + práctica diaria",
          content: `
<h2>Semana 2: Identificando Estructura en Tiempo Real</h2>
<div style="display:flex;justify-content:center;margin:20px 0"><svg width="400" height="80" viewBox="0 0 400 80" style="background:#131722;border-radius:10px;border:1px solid #2a2a40"><text x="200" y="14" fill="white" font-size="9" text-anchor="middle" font-weight="bold">CHECKLIST DE CONFLUENCIAS (Min 3 para entrar)</text><rect x="5" y="24" width="55" height="28" rx="4" fill="#26a69a15" stroke="#26a69a"/><text x="32" y="42" fill="#26a69a" font-size="6" text-anchor="middle">S/R</text><rect x="63" y="24" width="50" height="28" rx="4" fill="#3b82f615" stroke="#3b82f6"/><text x="88" y="42" fill="#3b82f6" font-size="6" text-anchor="middle">OB</text><rect x="116" y="24" width="50" height="28" rx="4" fill="#8b5cf615" stroke="#8b5cf6"/><text x="141" y="42" fill="#8b5cf6" font-size="6" text-anchor="middle">FVG</text><rect x="169" y="24" width="50" height="28" rx="4" fill="#f59e0b15" stroke="#f59e0b"/><text x="194" y="42" fill="#f59e0b" font-size="6" text-anchor="middle">Fibo</text><rect x="222" y="24" width="50" height="28" rx="4" fill="#26a69a15" stroke="#26a69a"/><text x="247" y="42" fill="#26a69a" font-size="6" text-anchor="middle">BOS</text><rect x="275" y="24" width="60" height="28" rx="4" fill="#ec489915" stroke="#ec4899"/><text x="305" y="42" fill="#ec4899" font-size="6" text-anchor="middle">Killzone</text><rect x="338" y="24" width="57" height="28" rx="4" fill="#14b8a615" stroke="#14b8a6"/><text x="366" y="42" fill="#14b8a6" font-size="6" text-anchor="middle">P/D</text><text x="200" y="68" fill="#f59e0b" font-size="8" text-anchor="middle" font-weight="bold">3 = válido | 5+ = setup A+</text></svg></div>

<div class="highlight-box green">
<h4>Objetivo de la Semana</h4>
<p>Identificar estructura de mercado (HH/HL, LH/LL, BOS) en TIEMPO REAL, no solo en gráficos pasados. Marcar soportes/resistencias ANTES de que el precio llegue, y operar solo cuando el precio toque tus zonas predefinidas.</p>
</div>

<h3>Ejercicio Diario Obligatorio</h3>
<div class="strategy-box">
<h4>Antes de cada sesión (20 min)</h4>
<ol>
<li>Abre EUR/USD en D1: ¿Tendencia alcista, bajista o rango?</li>
<li>Marca los últimos 3 HH/HL o LH/LL</li>
<li>Identifica si hubo BOS recientemente</li>
<li>Baja a H4: marca 2 soportes y 2 resistencias donde ESPERARÍAS que el precio reaccione</li>
<li>Pon alertas de precio en TradingView en esas zonas</li>
<li>ESPERA a que el precio llegue. Si no llega, NO operes.</li>
</ol>
</div>

<h3>Nuevas Reglas (Semana 2)</h3>
<div class="grid-cards">
<div class="card green-border"><h4>Riesgo</h4><p>0.5-1% por trade. Puedes subir si la Semana 1 fue positiva.</p></div>
<div class="card"><h4>Confirmación</h4><p>NO entres sin una vela de confirmación (martillo, envolvente, pin bar) en tu zona.</p></div>
<div class="card"><h4>R:R mínimo</h4><p>Solo toma trades con R:R de 1:2 o mejor. Si no lo tiene, no entres.</p></div>
<div class="card"><h4>Paciencia</h4><p>Es MEJOR no operar un día entero que forzar un trade malo.</p></div>
</div>

<h3>Autoevaluación Semana 2</h3>
<div class="highlight-box blue">
<h4>Preguntas para responderte honestamente</h4>
<ul>
<li>¿Cuántas veces esperé a que el precio llegara a MI zona vs cuántas perseguí el precio?</li>
<li>¿Siempre busqué confirmación antes de entrar?</li>
<li>¿Respeté mi SL en todos los trades?</li>
<li>¿Mi R:R promedio fue 1:2 o mejor?</li>
<li>¿Seguí mi rutina diaria completa?</li>
<li>¿Anoté todo en el diario?</li>
</ul>
<p>Si puedes responder SÍ a 5 de 6, estás listo para la Semana 3. Si no, REPITE la Semana 2.</p>
</div>`,
          keyPoints: [
            "Semana 2: identificar estructura y S/R en TIEMPO REAL",
            "Marcar zonas ANTES y poner alertas - esperar al precio",
            "Solo entrar con confirmación (vela de rechazo) en tu zona",
            "R:R mínimo 1:2 obligatorio",
            "Si no puedes responder SÍ a 5/6 autoevaluación, REPITE la semana"
          ],
          quiz: [
            { question: "¿Qué deberías hacer si el precio NO llega a tus zonas predefinidas durante toda la sesión?", options: ["Buscar zonas nuevas y más cercanas", "Bajar de temporalidad hasta encontrar algo", "NO operar. Esperar al día siguiente.", "Cambiar de par"], correctIndex: 2, explanation: "Si el precio no llega a tus zonas, no hay setup. No fuerces trades. La paciencia es una habilidad." },
            { question: "¿Qué necesitas ANTES de entrar en un trade en la Semana 2?", options: ["Solo que el precio esté en soporte", "Precio en tu zona + vela de confirmación + R:R 1:2+", "Solo un indicador en sobrecompra/sobreventa", "Nada, solo intuición"], correctIndex: 1, explanation: "Necesitas 3 cosas: precio en zona predefinida + confirmación con vela de rechazo + ratio R:R de 1:2 mínimo." }
          ],
          practicalExercise: "Marca 2 soportes y 2 resistencias en H4 ANTES de cada sesion. Pon alertas. Solo opera si el precio llega a TUS zonas con confirmacion. Si no llega, NO operes. Cuenta cuantas veces esperaste vs perseguiste."
        }
      ]
    },
    {
      id: "mod-8-2",
      title: "Semanas 3-4: Smart Money en Demo",
      description: "Aplica SMC/ICT en tus operaciones diarias",
      icon: "📊",
      color: "#8B5CF6",
      lessons: [
        {
          id: "8-2-1",
          title: "Semana 3: Aplicando Smart Money Concepts",
          duration: "45 min + práctica diaria",
          content: `
<h2>Semana 3: SMC en Acción</h2>

<div class="highlight-box purple">
<h4>Objetivo de la Semana</h4>
<p>Integrar conceptos de Smart Money en tu análisis diario: identificar Order Blocks, Fair Value Gaps, y zonas de liquidez. NO es cambiar de estrategia - es MEJORAR tu análisis con una capa adicional de información.</p>
</div>

<h3>Rutina Diaria SMC (actualizada)</h3>
<div class="strategy-box">
<h4>Análisis Pre-Market con SMC (40 min)</h4>
<ol>
<li><strong>D1:</strong> Tendencia + S/R + ¿dónde está la liquidez? (equal highs/lows)</li>
<li><strong>H4:</strong> Marca los Order Blocks de los últimos movimientos impulsivos</li>
<li><strong>H4:</strong> Identifica FVGs (gaps de 3 velas) sin rellenar</li>
<li><strong>H4:</strong> ¿Estamos en Premium o Discount?</li>
<li><strong>H1:</strong> Refina las zonas de entrada (OB + FVG + Fibonacci)</li>
<li><strong>Pon alertas</strong> y ESPERA</li>
</ol>
</div>

<h3>Checklist de Confluencias</h3>
<div class="highlight-box blue">
<h4>Solo entra si tienes 3+ de estos:</h4>
<ul>
<li>✅ Precio en zona de soporte/resistencia</li>
<li>✅ Order Block válido en la zona</li>
<li>✅ FVG alineado con tu dirección</li>
<li>✅ Fibonacci (zona OTE 61.8%-78.6%)</li>
<li>✅ Estructura confirma (BOS/CHoCH a favor)</li>
<li>✅ Estás en una Killzone (London/NY)</li>
<li>✅ Premium/Discount correcto para tu dirección</li>
</ul>
<p><strong>3 confluencias = trade válido. 5+ = trade A+.</strong></p>
</div>

<h3>Errores Comunes de la Semana 3</h3>
<div class="warning-box">
<h4>Lo que NO debes hacer</h4>
<ul>
<li>❌ Marcar Order Blocks por todas partes - solo los últimos y más relevantes</li>
<li>❌ Entrar en TODOS los FVGs - solo los que tengan confluencia</li>
<li>❌ Complicar tu análisis con demasiados conceptos a la vez</li>
<li>❌ Abandonar S/R y velas japonesas - SMC complementa, no reemplaza</li>
</ul>
</div>`,
          keyPoints: [
            "Semana 3: añadir SMC (OB, FVG, liquidez) a tu análisis, no reemplazar lo anterior",
            "Checklist de confluencias: mínimo 3 para entrar, 5+ para trade A+",
            "No marcar OB/FVG por todas partes - solo los relevantes con contexto",
            "SMC complementa S/R y velas japonesas, no las reemplaza",
            "Seguir con 0.5-1% riesgo, solo EUR/USD, diario obligatorio"
          ],
          quiz: [
            { question: "¿Cuántas confluencias mínimas necesitas para un trade válido?", options: ["1", "2", "3", "7"], correctIndex: 2, explanation: "Mínimo 3 confluencias. Con 5+ tienes un setup A+ de alta probabilidad." },
            { question: "¿SMC reemplaza el análisis de soportes y resistencias?", options: ["Sí, es una mejora total", "No, SMC COMPLEMENTA S/R y velas, no las reemplaza", "Sí, ya no necesitas S/R", "Depende del mercado"], correctIndex: 1, explanation: "SMC es una capa ADICIONAL de análisis. Los soportes, resistencias y patrones de velas siguen siendo fundamentales." }
          ],
          practicalExercise: "Marca OBs y FVGs cada manana en H4. Puntua cada setup (0-7 confluencias). Solo entra con 3+. Correlaciona puntuacion con resultado al final de la semana."
        },
        {
          id: "8-2-2",
          title: "Semana 4: ICT y Power of 3 en Práctica",
          duration: "45 min + práctica diaria",
          content: `
<h2>Semana 4: Dominando el Ciclo Diario</h2>
<div style="display:flex;justify-content:center;margin:20px 0"><svg width="420" height="80" viewBox="0 0 420 80" style="background:#131722;border-radius:10px;border:1px solid #2a2a40"><text x="210" y="14" fill="white" font-size="9" text-anchor="middle" font-weight="bold">EVALUACIÓN MITAD DE CAMINO (SEMANA 4)</text><rect x="8" y="26" width="95" height="28" rx="5" fill="#26a69a15" stroke="#26a69a"/><text x="55" y="44" fill="#26a69a" font-size="7" text-anchor="middle" font-weight="bold">Win Rate 40%+</text><rect x="110" y="26" width="95" height="28" rx="5" fill="#3b82f615" stroke="#3b82f6"/><text x="157" y="44" fill="#3b82f6" font-size="7" text-anchor="middle" font-weight="bold">R:R 1.5:1+</text><rect x="212" y="26" width="95" height="28" rx="5" fill="#f59e0b15" stroke="#f59e0b"/><text x="259" y="44" fill="#f59e0b" font-size="7" text-anchor="middle" font-weight="bold">Disciplina 80%+</text><rect x="314" y="26" width="98" height="28" rx="5" fill="#8b5cf615" stroke="#8b5cf6"/><text x="363" y="44" fill="#8b5cf6" font-size="7" text-anchor="middle" font-weight="bold">Diario 100%</text><text x="210" y="68" fill="#26a69a" font-size="8" text-anchor="middle" font-weight="bold">3 de 4 positivos → avanza. Si no → repite la semana más débil.</text></svg></div>
<div style="display:flex;justify-content:center;margin:20px 0"><svg width="380" height="80" viewBox="0 0 380 80" style="background:#131722;border-radius:10px;border:1px solid #2a2a40"><text x="190" y="14" fill="white" font-size="9" text-anchor="middle" font-weight="bold">OBJETIVO SEMANAS 5-6</text><rect x="10" y="26" width="170" height="30" rx="6" fill="#26a69a15" stroke="#26a69a"/><text x="95" y="44" fill="#26a69a" font-size="9" text-anchor="middle" font-weight="bold">SEMANA 5: Positiva ✅</text><text x="192" y="44" fill="#f59e0b" font-size="12">+</text><rect x="200" y="26" width="170" height="30" rx="6" fill="#26a69a15" stroke="#26a69a"/><text x="285" y="44" fill="#26a69a" font-size="9" text-anchor="middle" font-weight="bold">SEMANA 6: Positiva ✅</text><text x="190" y="70" fill="#f59e0b" font-size="9" text-anchor="middle" font-weight="bold">= 2 semanas consecutivas positivas → LISTO para challenge</text></svg></div>

<div class="highlight-box green">
<h4>Objetivo de la Semana</h4>
<p>Identificar el Power of 3 (AMD) CADA DÍA en tiempo real. Marcar el rango asiático ANTES de London, y operar la reacción después de la manipulación. Al final de esta semana deberías ver el AMD en cada sesión automáticamente.</p>
</div>

<h3>Rutina ICT Diaria</h3>
<div class="strategy-box">
<h4>Mañana (08:00 hora España)</h4>
<ol>
<li>Marca el rango asiático: Asia High y Asia Low</li>
<li>Identifica qué lado tiene más liquidez (SL acumulados)</li>
<li>Prepara 2 escenarios: "Si London rompe Asia High..." y "Si London rompe Asia Low..."</li>
<li>Espera la manipulación (ruptura de un extremo del rango)</li>
<li>Busca cambio de estructura (BOS/CHoCH en M15) después de la manipulación</li>
<li>Entra en la dirección CONTRARIA a la ruptura asiática</li>
</ol>
</div>

<h3>Registro Especial de la Semana 4</h3>
<div class="highlight-box blue">
<h4>Cada día, anota en tu diario:</h4>
<ul>
<li>¿Se formó un rango asiático claro? (Sí/No)</li>
<li>¿London rompió Asia High o Asia Low?</li>
<li>¿Fue manipulación real o ruptura legítima?</li>
<li>¿Hubo cambio de estructura después?</li>
<li>¿El movimiento real del día fue en dirección contraria a la ruptura asiática?</li>
<li>¿Entraste? Si sí, ¿resultado?</li>
</ul>
<p>Después de 5 días, revisa los datos. Verás que el patrón AMD se repite 60-70% de los días.</p>
</div>

<h3>Evaluación de Mitad de Camino</h3>
<div class="highlight-box yellow">
<h4>Al final de la Semana 4, evalúa</h4>
<p>Has completado la primera mitad del plan. Revisa tus métricas acumuladas:</p>
<ul>
<li><strong>Win Rate:</strong> ¿40%+? Si sí, vas bien. Si no, repite semanas 2-3.</li>
<li><strong>R:R promedio:</strong> ¿1.5:1 o mejor? Si sí, perfecto.</li>
<li><strong>Disciplina:</strong> ¿Seguiste tu plan 80%+ de las veces?</li>
<li><strong>Diario:</strong> ¿Registraste TODOS los trades?</li>
</ul>
<p><strong>Si 3 de 4 son positivos, avanza a Semana 5. Si no, repite la semana más débil.</strong></p>
</div>`,
          keyPoints: [
            "Semana 4: identificar AMD (Power of 3) cada día en tiempo real",
            "Marca rango asiático ANTES de London, espera la manipulación",
            "Opera en dirección CONTRARIA a la ruptura asiática después de BOS",
            "El patrón AMD se repite 60-70% de los días",
            "Evaluación mitad: win rate 40%+, R:R 1.5:1+, disciplina 80%+, diario completo"
          ],
          quiz: [
            { question: "Al final de la Semana 4, ¿qué métricas debes tener para avanzar?", options: ["Solo ganar dinero", "Win rate 40%+, R:R 1.5:1+, disciplina 80%+, diario completo (3 de 4)", "100% de acierto", "Solo completar los trades"], correctIndex: 1, explanation: "Necesitas 3 de 4 métricas positivas. No se trata de perfección sino de consistencia medible." }
          ],
          practicalExercise: "Marca rango asiatico ANTES de London cada dia. Documenta: ruptura arriba/abajo, manipulacion o real, BOS despues, AMD cumplido. Calcula % de AMD correcto en 5 dias."
        }
      ]
    },
    {
      id: "mod-8-3",
      title: "Semanas 5-6: Consistencia y Refinamiento",
      description: "Busca 2 semanas consecutivas positivas",
      icon: "📈",
      color: "#F59E0B",
      lessons: [
        {
          id: "8-3-1",
          title: "Semanas 5-6: El Objetivo es la Consistencia",
          duration: "30 min + práctica diaria",
          content: `
<h2>Semanas 5-6: Busca 2 Semanas Positivas Consecutivas</h2>

<div class="highlight-box green">
<h4>Objetivo</h4>
<p>El objetivo de estas 2 semanas es simple pero difícil: ser POSITIVO (aunque sea por 1 pip) durante 2 semanas CONSECUTIVAS. Si pierdes una semana, el contador se reinicia. Esto entrena la CONSISTENCIA, que es lo que separa a los amateurs de los profesionales.</p>
</div>

<h3>Tu Sistema ya Está Definido</h3>
<div class="strategy-box">
<h4>A estas alturas deberías tener claro:</h4>
<ul>
<li>✅ Tu par principal (EUR/USD)</li>
<li>✅ Tu horario de trading (sesión London-NY)</li>
<li>✅ Tu estrategia (S/R + SMC/ICT + confluencias)</li>
<li>✅ Tu riesgo por trade (0.5-1%)</li>
<li>✅ Tu R:R mínimo (1:2)</li>
<li>✅ Tus reglas emocionales (max 2 pérdidas → parar)</li>
</ul>
<p><strong>NO cambies NADA durante estas 2 semanas.</strong> El sistema está definido. Ahora solo tienes que EJECUTAR.</p>
</div>

<h3>La Regla de Oro de la Consistencia</h3>
<div class="highlight-box purple">
<h4>Proceso sobre Resultado</h4>
<p>NO te midas por cuánto dinero ganaste. Mídete por cuántas veces ejecutaste tu plan CORRECTAMENTE. Un trade perdedor que siguió el plan al 100% es un ÉXITO. Un trade ganador que no siguió el plan es un FRACASO (porque no es replicable).</p>
</div>

<h3>Si No Logras 2 Semanas Positivas</h3>
<div class="warning-box">
<h4>No te frustres. Haz esto:</h4>
<ol>
<li>Revisa tu diario de las últimas 2 semanas</li>
<li>Identifica los 3 errores más repetidos</li>
<li>Escribe una regla específica para cada error</li>
<li>Reduce el riesgo a 0.25% temporalmente</li>
<li>Vuelve a intentar 2 semanas positivas</li>
</ol>
<p>Es NORMAL necesitar 3-4 intentos. Los mejores traders del mundo también pasaron por esto.</p>
</div>`,
          keyPoints: [
            "Objetivo: 2 semanas consecutivas positivas (aunque sea +1 pip)",
            "No cambiar NADA del sistema durante estas semanas - solo ejecutar",
            "Medir éxito por ejecución del plan, no por dinero ganado",
            "Si no lo logras: identificar 3 errores, crear reglas, reducir riesgo, reintentar",
            "Es normal necesitar 3-4 intentos para lograr consistencia"
          ],
          quiz: [
            { question: "¿Qué define el 'éxito' durante las Semanas 5-6?", options: ["Ganar mucho dinero", "Ejecutar tu plan correctamente el 80%+ de las veces y ser positivo 2 semanas consecutivas", "No perder nunca", "Acertar el 90% de trades"], correctIndex: 1, explanation: "El éxito es ejecutar el plan consistentemente y lograr 2 semanas positivas seguidas. El monto es irrelevante." }
          ],
          practicalExercise: "Opera 2 semanas SIN cambiar nada. Si una semana es negativa: identifica 3 errores del diario, crea 1 regla por error, repite. No cambies estrategia."
        }
      ]
    },
    {
      id: "mod-8-4",
      title: "Semanas 7-8: Simulación de Challenge",
      description: "Simula un challenge de prop firm completo",
      icon: "🏆",
      color: "#DC2626",
      lessons: [
        {
          id: "8-4-1",
          title: "Semanas 7-8: Tu Challenge de Práctica",
          duration: "30 min + práctica diaria",
          content: `
<h2>Semanas 7-8: Simulación de Challenge de Prop Firm</h2>

<div class="highlight-box green">
<h4>Objetivo Final</h4>
<p>Simula un challenge real de prop firm durante 2 semanas. Usa el simulador del curso en modo Challenge o configura tu cuenta demo con las reglas de FTMO. Si lo pasas, estás listo para un challenge REAL.</p>
</div>

<h3>Reglas del Challenge Simulado</h3>
<div style="display:flex;justify-content:center;margin:20px 0">
<svg width="460" height="140" viewBox="0 0 460 140" style="background:#131722;border-radius:12px;border:1px solid #2a2a40">
<text x="230" y="18" fill="white" font-size="11" text-anchor="middle" font-weight="bold">TU CHALLENGE SIMULADO (2 SEMANAS)</text>
<rect x="20" y="35" width="130" height="45" rx="8" fill="#26a69a15" stroke="#26a69a"/>
<text x="85" y="52" fill="#26a69a" font-size="9" text-anchor="middle" font-weight="bold">OBJETIVO</text>
<text x="85" y="70" fill="#26a69a" font-size="14" text-anchor="middle" font-weight="bold">+8%</text>
<rect x="165" y="35" width="130" height="45" rx="8" fill="#ef535015" stroke="#ef5350"/>
<text x="230" y="52" fill="#ef5350" font-size="9" text-anchor="middle" font-weight="bold">DD DIARIO</text>
<text x="230" y="70" fill="#ef5350" font-size="14" text-anchor="middle" font-weight="bold">-5%</text>
<rect x="310" y="35" width="130" height="45" rx="8" fill="#ff980015" stroke="#ff9800"/>
<text x="375" y="52" fill="#ff9800" font-size="9" text-anchor="middle" font-weight="bold">DD TOTAL</text>
<text x="375" y="70" fill="#ff9800" font-size="14" text-anchor="middle" font-weight="bold">-10%</text>
<text x="230" y="105" fill="#787b86" font-size="9" text-anchor="middle">Riesgo: 0.5% por trade | R:R: 1:2 mínimo | Máximo 2-3 trades/día</text>
<text x="230" y="125" fill="#fbbf24" font-size="10" text-anchor="middle" font-weight="bold">Objetivo semanal: +4% | = +2% por semana = totalmente alcanzable</text>
</svg>
</div>

<h3>Plan de 2 Semanas</h3>
<div class="comparison-table">
<div class="comparison-col">
<h4>Semana 7</h4>
<ul>
<li>Objetivo: +4%</li>
<li>Riesgo: 0.5% por trade</li>
<li>Foco: CALIDAD de setups</li>
<li>Si llegas a +3% al jueves, reduce riesgo a 0.25%</li>
<li>NO operes el viernes por la tarde</li>
</ul>
</div>
<div class="comparison-col">
<h4>Semana 8</h4>
<ul>
<li>Objetivo: +4% más (total +8%)</li>
<li>Si ya llevas +6%, reduce a 0.25%</li>
<li>PROTEGE las ganancias</li>
<li>La paciencia gana challenges</li>
<li>Último día: solo opera si el setup es A+</li>
</ul>
</div>
</div>

<h3>Resultados Posibles</h3>
<div class="grid-cards">
<div class="card green-border">
<h4>Si PASAS (+8% sin violar DD)</h4>
<p>¡Felicidades! Estás listo para un challenge REAL. Compra un challenge de 10K-25K (precio bajo para empezar) y aplica exactamente lo mismo.</p>
</div>
<div class="card yellow-border">
<h4>Si llegas a +4-7% pero no al 8%</h4>
<p>Muy bien. Tu sistema funciona pero necesitas más tiempo o ajustes menores. Repite el challenge simulado 1 vez más.</p>
</div>
<div class="card red-border">
<h4>Si violas el drawdown</h4>
<p>Analiza QUÉ salió mal (diario). Vuelve a las Semanas 5-6 por 2 semanas más. No te rindas.</p>
</div>
</div>

<div class="highlight-box green">
<h4>El Momento de la Verdad</h4>
<p>Si has llegado hasta aquí y has seguido el plan de 8 semanas, tienes más preparación que el 90% de los traders que compran un challenge. Tu ventaja no es que sepas más - es que tienes DISCIPLINA PROBADA durante 8 semanas de práctica real. Esa disciplina es lo que te va a hacer pasar el challenge y ser un trader rentable. Ahora ve y hazlo.</p>
</div>`,
          keyPoints: [
            "Semanas 7-8: simula un challenge real con reglas de FTMO",
            "+8% objetivo, -5% DD diario, -10% DD total, en 2 semanas",
            "Si pasas: estás listo para un challenge real de 10K-25K",
            "Si no pasas: analiza errores con diario y vuelve a intentar",
            "8 semanas de práctica = más preparación que el 90% de los traders"
          ],
          quiz: [
            { question: "¿Qué deberías hacer si llevas +6% en tu challenge simulado faltando 3 días?", options: ["Aumentar riesgo para llegar a +8% rápido", "REDUCIR riesgo a 0.25% para proteger ganancias", "Dejar de operar completamente", "Cambiar de par"], correctIndex: 1, explanation: "Con +6%, solo te faltan 2%. Reduce riesgo para proteger lo ganado. Es mejor tardar más que arriesgarse." },
            { question: "Después de completar las 8 semanas, ¿qué tamaño de challenge real recomiendas?", options: ["200K inmediatamente", "10K-25K para empezar (precio bajo, menos presión)", "No comprar challenge nunca", "500K"], correctIndex: 1, explanation: "Empieza con 10K-25K. El precio es bajo (50-150€) y la presión es menor. Cuando lo pases, escala." }
          ],
          practicalExercise: "Configura demo con reglas FTMO (100K, 5% DD diario, 10% total). Opera 2 semanas buscando +8%. Registra balance y DD diario. Si pasas: listo para challenge real."
        }
      ]
    }
  ]
};
