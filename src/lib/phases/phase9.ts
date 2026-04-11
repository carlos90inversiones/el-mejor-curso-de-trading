import type { Phase } from "../courseData";

export const PHASE_9: Phase = {
  id: "fase-9",
  number: 9,
  title: "Preparación CMT Nivel 1",
  subtitle: "La certificación más prestigiosa de análisis técnico",
  description: "El CMT (Chartered Market Technician) es la certificación de análisis técnico más reconocida del mundo. Este curso ya cubre el 70% del temario del Nivel 1. Aquí completamos el 30% restante y te preparamos para el examen.",
  color: "#0EA5E9",
  gradient: "from-sky-500 to-sky-700",
  modules: [
    {
      id: "mod-9-1",
      title: "Temario CMT Nivel 1",
      description: "Los conceptos que completan tu preparación para el examen CMT",
      icon: "🎓",
      color: "#0EA5E9",
      lessons: [
        {
          id: "9-1-1",
          title: "¿Qué es el CMT y Cómo Prepararte?",
          duration: "20 min",
          content: `
<h2>CMT: La Certificación de Élite del Análisis Técnico</h2>

<div class="analogy-box"><h3>El CMT es como el CFA pero para traders técnicos</h3><p>Si el CFA (Chartered Financial Analyst) es la certificación rey de las finanzas corporativas, el CMT (Chartered Market Technician) es la certificación rey del análisis técnico. Es reconocida globalmente por bancos, fondos de inversión y prop firms.</p></div>

<h3>¿Qué es el CMT Institute?</h3>
<p>La CMT Association es la organización global que otorga la designación CMT desde 1973. Tiene más de 4,500 miembros en 100+ países. La certificación demuestra que dominas el análisis técnico a nivel profesional.</p>

<h3>Los 3 Niveles del CMT</h3>
<div style="display:flex;justify-content:center;margin:20px 0">
<svg width="460" height="180" viewBox="0 0 460 180" style="background:#131722;border-radius:12px;border:1px solid #2a2a40">
<text x="230" y="18" fill="white" font-size="11" text-anchor="middle" font-weight="bold">LOS 3 NIVELES DEL CMT</text>
<rect x="20" y="35" width="130" height="70" rx="8" fill="#0ea5e920" stroke="#0ea5e9"/>
<text x="85" y="55" fill="#0ea5e9" font-size="10" text-anchor="middle" font-weight="bold">NIVEL 1</text>
<text x="85" y="72" fill="white" font-size="9" text-anchor="middle">Fundamentos AT</text>
<text x="85" y="86" fill="#787b86" font-size="8" text-anchor="middle">132 preguntas</text>
<text x="85" y="98" fill="#787b86" font-size="8" text-anchor="middle">~450$ | 4 horas</text>
<text x="165" y="72" fill="#555" font-size="16">→</text>
<rect x="175" y="35" width="130" height="70" rx="8" fill="#8b5cf620" stroke="#8b5cf6"/>
<text x="240" y="55" fill="#8b5cf6" font-size="10" text-anchor="middle" font-weight="bold">NIVEL 2</text>
<text x="240" y="72" fill="white" font-size="9" text-anchor="middle">Aplicación AT</text>
<text x="240" y="86" fill="#787b86" font-size="8" text-anchor="middle">170 preguntas</text>
<text x="240" y="98" fill="#787b86" font-size="8" text-anchor="middle">~550$ | 4 horas</text>
<text x="320" y="72" fill="#555" font-size="16">→</text>
<rect x="330" y="35" width="110" height="70" rx="8" fill="#f59e0b20" stroke="#f59e0b"/>
<text x="385" y="55" fill="#f59e0b" font-size="10" text-anchor="middle" font-weight="bold">NIVEL 3</text>
<text x="385" y="72" fill="white" font-size="9" text-anchor="middle">Integración</text>
<text x="385" y="86" fill="#787b86" font-size="8" text-anchor="middle">Ensayo escrito</text>
<text x="385" y="98" fill="#787b86" font-size="8" text-anchor="middle">~550$</text>
<rect x="20" y="120" width="420" height="40" rx="8" fill="#26a69a15" stroke="#26a69a44"/>
<text x="230" y="138" fill="#26a69a" font-size="10" text-anchor="middle" font-weight="bold">Este curso cubre ~70% del Nivel 1</text>
<text x="230" y="153" fill="#787b86" font-size="8" text-anchor="middle">Necesitas aprobar 70%+ (≈93 de 132 preguntas) para pasar</text>
</svg>
</div>

<h3>¿Qué Cubre el Examen CMT Nivel 1?</h3>
<div class="grid-cards">
<div class="card green-border"><h4>Ya lo sabes (70%)</h4><ul>
<li>Soportes/Resistencias y estructura</li>
<li>Tendencias y líneas de tendencia</li>
<li>Patrones de velas japonesas</li>
<li>Indicadores (RSI, MACD, medias móviles)</li>
<li>Fibonacci</li>
<li>Patrones de gráfico</li>
<li>Volumen</li>
<li>Gestión de riesgo</li>
</ul></div>
<div class="card yellow-border"><h4>Te falta aprender (30%)</h4><ul>
<li>Teoría de Dow (detallada)</li>
<li>Ciclos de mercado y estacionalidad</li>
<li>Indicadores de amplitud de mercado</li>
<li>Sentimiento de mercado (VIX, Put/Call)</li>
<li>Ética profesional del CMT</li>
<li>Teoría de mercados eficientes vs AT</li>
</ul></div>
</div>

<div class="highlight-box green"><h4>Plan de Estudio para el CMT Nivel 1</h4>
<ol>
<li><strong>Mes 1-2:</strong> Completa este curso (ya lo estás haciendo)</li>
<li><strong>Mes 3:</strong> Estudia las lecciones CMT de esta fase</li>
<li><strong>Mes 4:</strong> Lee "Technical Analysis" de Kirkpatrick (libro oficial)</li>
<li><strong>Mes 5:</strong> Practica con exámenes de prueba</li>
<li><strong>Mes 6:</strong> Presenta el examen</li>
</ol></div>`,
          keyPoints: [
            "CMT = la certificación más prestigiosa de análisis técnico del mundo",
            "3 niveles: Nivel 1 (fundamentos), Nivel 2 (aplicación), Nivel 3 (ensayo)",
            "Nivel 1: 132 preguntas multiple choice, 4 horas, ~450$, necesitas 70%+",
            "Este curso ya cubre el 70% del temario del Nivel 1",
            "Plan de estudio: 6 meses desde cero hasta presentar el examen"
          ],
          quiz: [
            { question: "¿Cuántas preguntas tiene el examen CMT Nivel 1?", options: ["50", "100", "132", "200"], correctIndex: 2, explanation: "El CMT Nivel 1 tiene 132 preguntas de opción múltiple que debes completar en 4 horas." },
            { question: "¿Qué porcentaje del temario CMT Nivel 1 ya cubre este curso?", options: ["30%", "50%", "70%", "100%"], correctIndex: 2, explanation: "Este curso cubre aproximadamente el 70% del temario. Las lecciones de esta fase completan el 30% restante." },
            { question: "¿Qué puntuación mínima necesitas para aprobar?", options: ["50%", "60%", "70%", "80%"], correctIndex: 2, explanation: "Necesitas aproximadamente un 70% (≈93 de 132 preguntas correctas) para aprobar el CMT Nivel 1." }
          ]
        },
        {
          id: "9-1-2",
          title: "Teoría de Dow: Los 6 Principios Fundamentales",
          duration: "30 min",
          content: `
<h2>Teoría de Dow: El Origen de Todo el Análisis Técnico</h2>

<div class="analogy-box"><h3>Charles Dow inventó el AT moderno</h3><p>Charles Dow (1851-1902) fue el fundador del Wall Street Journal y creador del Dow Jones Industrial Average. Sus escritos entre 1900-1902 sentaron las bases de TODO el análisis técnico moderno. Cada concepto que has aprendido en este curso tiene su raíz en la Teoría de Dow.</p></div>

<h3>Los 6 Principios de Dow</h3>

<div class="pattern-card"><h4>1. El Mercado lo Descuenta Todo</h4>
<p>El precio ya refleja TODA la información disponible: noticias, datos económicos, expectativas, emociones. No necesitas analizar fundamentales porque el precio ya los incluye. Esta es la base filosófica del análisis técnico.</p>
<div class="highlight-box blue"><p><strong>Conexión moderna:</strong> Smart Money Concepts parte de esta misma premisa - el precio muestra las intenciones institucionales.</p></div>
</div>

<div class="pattern-card"><h4>2. El Mercado Tiene 3 Tipos de Tendencias</h4>
<div style="display:flex;justify-content:center;margin:16px 0">
<svg width="420" height="150" viewBox="0 0 420 150" style="background:#131722;border-radius:10px;border:1px solid #2a2a40">
<text x="210" y="18" fill="white" font-size="10" text-anchor="middle" font-weight="bold">3 TIPOS DE TENDENCIA (DOW)</text>
<rect x="15" y="30" width="125" height="50" rx="6" fill="#26a69a15" stroke="#26a69a"/>
<text x="77" y="48" fill="#26a69a" font-size="9" text-anchor="middle" font-weight="bold">PRIMARIA</text>
<text x="77" y="62" fill="#787b86" font-size="8" text-anchor="middle">1-3+ años</text>
<text x="77" y="74" fill="#787b86" font-size="7" text-anchor="middle">La "marea" del océano</text>
<rect x="150" y="30" width="125" height="50" rx="6" fill="#3b82f615" stroke="#3b82f6"/>
<text x="212" y="48" fill="#3b82f6" font-size="9" text-anchor="middle" font-weight="bold">SECUNDARIA</text>
<text x="212" y="62" fill="#787b86" font-size="8" text-anchor="middle">3 semanas - 3 meses</text>
<text x="212" y="74" fill="#787b86" font-size="7" text-anchor="middle">Las "olas" del mar</text>
<rect x="285" y="30" width="125" height="50" rx="6" fill="#f59e0b15" stroke="#f59e0b"/>
<text x="347" y="48" fill="#f59e0b" font-size="9" text-anchor="middle" font-weight="bold">MENOR</text>
<text x="347" y="62" fill="#787b86" font-size="8" text-anchor="middle">Menos de 3 semanas</text>
<text x="347" y="74" fill="#787b86" font-size="7" text-anchor="middle">Las "ondas" pequeñas</text>
<polyline points="30,130 80,105 100,115 160,90 180,100 250,75 270,85 340,60 370,70 400,50" fill="none" stroke="#26a69a" stroke-width="2"/>
<polyline points="80,105 100,115 160,90 180,100" fill="none" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="4,3"/>
<text x="210" y="142" fill="#787b86" font-size="8" text-anchor="middle">La tendencia primaria es la más importante - opera A FAVOR de ella</text>
</svg>
</div></div>

<div class="pattern-card"><h4>3. Las Tendencias Primarias Tienen 3 Fases</h4>
<div style="display:flex;justify-content:center;margin:16px 0">
<svg width="420" height="140" viewBox="0 0 420 140" style="background:#131722;border-radius:10px;border:1px solid #2a2a40">
<text x="210" y="16" fill="white" font-size="10" text-anchor="middle" font-weight="bold">3 FASES DE UNA TENDENCIA ALCISTA (DOW)</text>
<rect x="15" y="30" width="125" height="45" rx="6" fill="#26a69a15" stroke="#26a69a44"/>
<text x="77" y="48" fill="#26a69a" font-size="9" text-anchor="middle" font-weight="bold">1. ACUMULACIÓN</text>
<text x="77" y="62" fill="#787b86" font-size="7" text-anchor="middle">Smart money compra</text>
<text x="77" y="72" fill="#787b86" font-size="7" text-anchor="middle">Noticias malas, retail vende</text>
<rect x="150" y="30" width="125" height="45" rx="6" fill="#3b82f615" stroke="#3b82f644"/>
<text x="212" y="48" fill="#3b82f6" font-size="9" text-anchor="middle" font-weight="bold">2. PARTICIPACIÓN</text>
<text x="212" y="62" fill="#787b86" font-size="7" text-anchor="middle">Tendencia clara, todos entran</text>
<text x="212" y="72" fill="#787b86" font-size="7" text-anchor="middle">Noticias mejoran</text>
<rect x="285" y="30" width="125" height="45" rx="6" fill="#ef535015" stroke="#ef535044"/>
<text x="347" y="48" fill="#ef5350" font-size="9" text-anchor="middle" font-weight="bold">3. DISTRIBUCIÓN</text>
<text x="347" y="62" fill="#787b86" font-size="7" text-anchor="middle">Smart money vende</text>
<text x="347" y="72" fill="#787b86" font-size="7" text-anchor="middle">Euforia, retail compra tarde</text>
<polyline points="30,120 80,110 140,85 200,65 260,50 320,55 380,70 400,85" fill="none" stroke="#8b5cf6" stroke-width="2"/>
<text x="210" y="132" fill="#f59e0b" font-size="8" text-anchor="middle" font-weight="bold">= Exactamente el ciclo de Wyckoff que ya aprendiste</text>
</svg>
</div></div>

<div class="pattern-card"><h4>4. Los Índices Deben Confirmarse Mutuamente</h4>
<p>Dow decía que el Dow Jones Industrial y el Dow Jones Transports deben moverse en la misma dirección para confirmar una tendencia. Si uno sube y otro no, la tendencia es sospechosa.</p>
<p><strong>Versión moderna:</strong> Confirmación entre S&P 500 y NASDAQ. Si ambos suben = tendencia alcista confirmada. Si divergen = cuidado.</p></div>

<div class="pattern-card"><h4>5. El Volumen Confirma la Tendencia</h4>
<p>En una tendencia alcista sana, el volumen sube cuando el precio sube y baja cuando el precio retrocede. Si el precio sube pero el volumen baja = la tendencia se debilita.</p></div>

<div class="pattern-card"><h4>6. La Tendencia Continúa Hasta Que Hay Señales Claras de Cambio</h4>
<p>No asumas que la tendencia ha cambiado hasta que haya evidencia clara (BOS, cambio de estructura). "The trend is your friend until it ends."</p>
<div class="highlight-box green"><p><strong>Esto es EXACTAMENTE lo que aprendiste en SMC:</strong> la tendencia continúa hasta que hay un Break of Structure (BOS) o Change of Character (CHoCH).</p></div></div>`,
          keyPoints: [
            "6 principios de Dow: el precio lo descuenta todo, 3 tipos de tendencia, 3 fases, confirmación, volumen, tendencia hasta señal de cambio",
            "3 tendencias: Primaria (1-3 años), Secundaria (3 sem-3 meses), Menor (<3 semanas)",
            "3 fases: Acumulación → Participación → Distribución (= Wyckoff)",
            "El volumen CONFIRMA la tendencia: sube con el precio en tendencia sana",
            "Toda la teoría moderna (SMC, ICT, Wyckoff) tiene raíz en Dow"
          ],
          quiz: [
            { question: "¿Cuál es el primer principio de la Teoría de Dow?", options: ["El volumen es importante", "El mercado lo descuenta todo (el precio refleja toda la información)", "Las tendencias duran 3 años", "Hay que seguir las noticias"], correctIndex: 1, explanation: "El principio fundamental: el precio ya incluye toda la información disponible. Esta es la base filosófica del análisis técnico." },
            { question: "¿Cuánto dura una tendencia PRIMARIA según Dow?", options: ["1-3 días", "1-3 semanas", "1-3 meses", "1-3+ años"], correctIndex: 3, explanation: "La tendencia primaria (la 'marea') dura de 1 a 3 o más años. Es la dirección principal del mercado." },
            { question: "¿Cuáles son las 3 fases de una tendencia primaria alcista?", options: ["Compra, Venta, Espera", "Acumulación, Participación Pública, Distribución", "Inicio, Medio, Final", "Soporte, Ruptura, Tendencia"], correctIndex: 1, explanation: "Acumulación (smart money compra), Participación Pública (todos entran), Distribución (smart money vende). Es el mismo ciclo de Wyckoff." },
            { question: "¿Qué significa que 'el volumen confirma la tendencia'?", options: ["Más volumen siempre es mejor", "En tendencia alcista sana, el volumen sube con el precio y baja en retrocesos", "El volumen no importa", "Solo importa el volumen en las noticias"], correctIndex: 1, explanation: "Si el precio sube con volumen creciente, la tendencia es fuerte. Si el precio sube pero el volumen baja, la tendencia se debilita." }
          ]
        },
        {
          id: "9-1-3",
          title: "Ciclos de Mercado y Sentimiento",
          duration: "25 min",
          content: `
<h2>Ciclos y Sentimiento: Lo que el CMT Exige que Sepas</h2>

<h3>Ciclos de Mercado</h3>
<p>Los mercados se mueven en ciclos repetitivos de diferente duración. Conocer estos ciclos te da contexto macro que pocos traders tienen.</p>

<div class="grid-cards">
<div class="card"><h4>Ciclo de Kondratieff</h4><p><strong>40-60 años.</strong> Ciclo económico largo basado en innovación tecnológica. Primavera → Verano → Otoño → Invierno económico.</p></div>
<div class="card"><h4>Ciclo de Juglar</h4><p><strong>7-11 años.</strong> Ciclo de inversión empresarial. Coincide con ciclos de recesión/expansión.</p></div>
<div class="card"><h4>Ciclo de Kitchin</h4><p><strong>3-5 años.</strong> Ciclo de inventarios. Menor pero detectable en datos económicos.</p></div>
<div class="card"><h4>Ciclo Presidencial (USA)</h4><p><strong>4 años.</strong> El mercado tiende a ser más débil en años 1-2 del mandato y más fuerte en años 3-4 (elecciones).</p></div>
</div>

<h3>Patrones Estacionales</h3>
<div class="grid-cards">
<div class="card green-border"><h4>"Sell in May and Go Away"</h4><p>Históricamente, el mercado rinde mejor de noviembre a abril que de mayo a octubre.</p></div>
<div class="card green-border"><h4>Efecto Enero</h4><p>Las acciones small-cap tienden a subir más en enero que en otros meses.</p></div>
<div class="card green-border"><h4>Rally de Santa Claus</h4><p>Las últimas 5 sesiones de diciembre + primeras 2 de enero suelen ser alcistas.</p></div>
</div>

<h3>Indicadores de Sentimiento</h3>
<div style="display:flex;justify-content:center;margin:20px 0">
<svg width="460" height="160" viewBox="0 0 460 160" style="background:#131722;border-radius:12px;border:1px solid #2a2a40">
<text x="230" y="18" fill="white" font-size="11" text-anchor="middle" font-weight="bold">INDICADORES DE SENTIMIENTO</text>
<rect x="15" y="35" width="105" height="55" rx="8" fill="#ef535015" stroke="#ef5350"/>
<text x="67" y="52" fill="#ef5350" font-size="9" text-anchor="middle" font-weight="bold">VIX</text>
<text x="67" y="66" fill="#787b86" font-size="7" text-anchor="middle">Índice del Miedo</text>
<text x="67" y="78" fill="#787b86" font-size="7" text-anchor="middle">VIX alto = miedo</text>
<text x="67" y="88" fill="#787b86" font-size="7" text-anchor="middle">VIX bajo = calma</text>
<rect x="130" y="35" width="105" height="55" rx="8" fill="#3b82f615" stroke="#3b82f6"/>
<text x="182" y="52" fill="#3b82f6" font-size="9" text-anchor="middle" font-weight="bold">Put/Call Ratio</text>
<text x="182" y="66" fill="#787b86" font-size="7" text-anchor="middle">Ratio opciones</text>
<text x="182" y="78" fill="#787b86" font-size="7" text-anchor="middle">>1 = miedo (alcista)</text>
<text x="182" y="88" fill="#787b86" font-size="7" text-anchor="middle"><0.7 = codicia (bajista)</text>
<rect x="245" y="35" width="105" height="55" rx="8" fill="#f59e0b15" stroke="#f59e0b"/>
<text x="297" y="52" fill="#f59e0b" font-size="9" text-anchor="middle" font-weight="bold">AAII Survey</text>
<text x="297" y="66" fill="#787b86" font-size="7" text-anchor="middle">Encuesta inversores</text>
<text x="297" y="78" fill="#787b86" font-size="7" text-anchor="middle">Muy alcistas = techo</text>
<text x="297" y="88" fill="#787b86" font-size="7" text-anchor="middle">Muy bajistas = suelo</text>
<rect x="360" y="35" width="90" height="55" rx="8" fill="#8b5cf615" stroke="#8b5cf6"/>
<text x="405" y="52" fill="#8b5cf6" font-size="9" text-anchor="middle" font-weight="bold">COT Report</text>
<text x="405" y="66" fill="#787b86" font-size="7" text-anchor="middle">Posiciones</text>
<text x="405" y="78" fill="#787b86" font-size="7" text-anchor="middle">institucionales</text>
<text x="405" y="88" fill="#787b86" font-size="7" text-anchor="middle">vs retail</text>
<rect x="15" y="105" width="435" height="40" rx="8" fill="#ff980010" stroke="#ff980033"/>
<text x="230" y="122" fill="#ff9800" font-size="10" text-anchor="middle" font-weight="bold">Principio Contrarian: "Be fearful when others are greedy"</text>
<text x="230" y="138" fill="#787b86" font-size="8" text-anchor="middle">Cuando TODOS son alcistas = posible techo. Cuando TODOS son bajistas = posible suelo.</text>
</svg>
</div>

<h3>Amplitud de Mercado</h3>
<div class="vocab-card"><h4>Advance-Decline Line (A/D Line)</h4><p>Cuenta cuántas acciones suben vs cuántas bajan. Si el índice sube pero la A/D Line baja = divergencia = pocos valores están subiendo = tendencia débil.</p></div>
<div class="vocab-card"><h4>McClellan Oscillator</h4><p>Derivado de la A/D Line. Mide el momentum de la amplitud. Por encima de 0 = más acciones suben. Extremos (+150/-150) = posible giro.</p></div>

<div class="warning-box"><h4>Para el Examen CMT</h4><p>Estos indicadores de sentimiento y amplitud son el 15-20% del examen que probablemente NO conocías. Estúdialos bien. El libro oficial de Kirkpatrick los cubre en detalle.</p></div>`,
          keyPoints: [
            "Ciclos: Kondratieff (40-60 años), Juglar (7-11), Kitchin (3-5), Presidencial (4)",
            "Estacionalidad: Sell in May, Efecto Enero, Rally de Santa Claus",
            "VIX alto = miedo (posible suelo), VIX bajo = calma (posible techo)",
            "Put/Call Ratio >1 = miedo (contrarian alcista), <0.7 = codicia (contrarian bajista)",
            "A/D Line divergente con precio = tendencia débil aunque el índice suba"
          ],
          quiz: [
            { question: "¿Qué indica un VIX muy alto?", options: ["Calma total en el mercado", "Miedo extremo - posible suelo (oportunidad contrarian de compra)", "Que el mercado va a subir seguro", "Que debes vender todo"], correctIndex: 1, explanation: "VIX alto = miedo extremo. Los contrarians ven esto como oportunidad de compra porque el máximo miedo suele coincidir con suelos de mercado." },
            { question: "¿Qué es 'Sell in May and Go Away'?", options: ["Una orden de venta automática", "Un patrón estacional: históricamente el mercado rinde mejor de noviembre a abril", "Una estrategia de scalping", "Un indicador técnico"], correctIndex: 1, explanation: "Es un patrón estacional observado durante décadas: el período noviembre-abril tiende a producir mejores rendimientos que mayo-octubre." },
            { question: "Si el S&P 500 sube pero la Advance-Decline Line baja, ¿qué significa?", options: ["La tendencia es fuerte", "Divergencia negativa: pocos valores empujan la subida, la tendencia es débil", "Todo está bien", "Hay que comprar más"], correctIndex: 1, explanation: "Si el índice sube pero menos acciones participan (A/D baja), la subida está concentrada en pocos valores. Es señal de debilidad." }
          ]
        }
      ]
    },
    {
      id: "mod-9-2",
      title: "Examen de Práctica CMT",
      description: "Simula el examen real con preguntas de nivel CMT",
      icon: "📝",
      color: "#6366F1",
      lessons: [
        {
          id: "9-2-1",
          title: "Examen de Práctica CMT Nivel 1 (20 Preguntas)",
          duration: "40 min",
          content: `
<h2>Examen de Práctica: Nivel CMT</h2>
<div class="highlight-box gold"><h4>Instrucciones</h4><p>Este examen simula el formato del CMT Nivel 1. Tiene 20 preguntas de nivel profesional. Necesitas 70%+ (14/20) para considerarte preparado. Las preguntas combinan conocimientos de todo el curso con los conceptos específicos del CMT.</p></div>
<div class="warning-box"><p>Este examen es significativamente MÁS DIFÍCIL que los quizzes de las lecciones regulares. Está diseñado para simular la dificultad real del CMT.</p></div>`,
          keyPoints: [
            "20 preguntas de nivel CMT profesional",
            "Necesitas 70%+ (14/20) para pasar",
            "Más difícil que los quizzes regulares del curso",
            "Cubre: Dow Theory, tendencias, patrones, indicadores, sentimiento, amplitud"
          ],
          quiz: [
            { question: "Según la Teoría de Dow, ¿cuánto dura una tendencia SECUNDARIA?", options: ["1-3 días", "3 semanas a 3 meses", "1-3 años", "Más de 5 años"], correctIndex: 1, explanation: "La tendencia secundaria (las 'olas') dura de 3 semanas a 3 meses. Son correcciones dentro de la tendencia primaria." },
            { question: "¿Qué principio de Dow establece que 'el precio refleja toda la información disponible'?", options: ["El volumen confirma la tendencia", "Los índices deben confirmarse mutuamente", "El mercado lo descuenta todo", "La tendencia tiene 3 fases"], correctIndex: 2, explanation: "El primer principio: el mercado lo descuenta todo. Es la base filosófica del AT." },
            { question: "Un Put/Call Ratio de 1.5 indica:", options: ["Codicia extrema (señal bajista)", "Miedo extremo (señal contrarian alcista)", "Neutralidad", "Error en el indicador"], correctIndex: 1, explanation: "Put/Call >1 = más puts que calls = miedo. Los contrarians ven esto como oportunidad de compra." },
            { question: "¿Qué indica un McClellan Oscillator en -150?", options: ["Tendencia alcista fuerte", "Lectura extrema que sugiere posible rebote alcista", "Neutralidad", "Que hay que vender"], correctIndex: 1, explanation: "Extremos negativos (-150) del McClellan indican sobreventa extrema. Históricamente, esto precede rebotes." },
            { question: "¿Qué fase de Dow coincide con la 'Distribución' de Wyckoff?", options: ["Fase 1 (Acumulación)", "Fase 2 (Participación Pública)", "Fase 3 (Distribución/Exceso)", "No tienen relación"], correctIndex: 2, explanation: "La Fase 3 de Dow (distribución/exceso) es exactamente la fase de Distribución de Wyckoff. Smart money vende mientras retail compra." },
            { question: "Si el Dow Jones Industrial sube pero el Dow Jones Transports baja, según Dow:", options: ["La tendencia alcista está confirmada", "Hay una divergencia - la tendencia alcista NO está confirmada", "No importa, solo mira un índice", "Los transports no son relevantes"], correctIndex: 1, explanation: "El principio 4 de Dow: los índices deben confirmarse mutuamente. Si divergen, la tendencia no está confirmada." },
            { question: "¿Cuál es el 'Efecto Enero' en los mercados?", options: ["Los mercados siempre caen en enero", "Las acciones small-cap tienden a rendir mejor en enero que en otros meses", "La Fed siempre sube tipos en enero", "Las criptomonedas suben en enero"], correctIndex: 1, explanation: "El Efecto Enero es un patrón estacional donde las small-caps históricamente rinden mejor en enero, posiblemente por rebalanceo de carteras y efecto fiscal." },
            { question: "¿Qué mide el VIX?", options: ["El volumen del mercado", "La volatilidad implícita esperada del S&P 500 (índice del miedo)", "El precio del oro", "Las tasas de interés"], correctIndex: 1, explanation: "El VIX mide la volatilidad implícita de las opciones del S&P 500. Se conoce como 'índice del miedo' porque sube cuando hay incertidumbre." },
            { question: "Según la Teoría de Dow, ¿cuándo se confirma que una tendencia ha CAMBIADO?", options: ["Cuando un indicador da señal", "Cuando hay señales claras de reversión (ruptura de estructura)", "Después de 3 velas rojas seguidas", "Nunca se puede confirmar"], correctIndex: 1, explanation: "Principio 6 de Dow: la tendencia continúa hasta que hay señales CLARAS de cambio. En terminología moderna: un BOS o CHoCH." },
            { question: "¿Qué es el COT Report y para qué sirve?", options: ["Un indicador de velas japonesas", "Un informe semanal que muestra las posiciones de institucionales, comerciales y especuladores en futuros", "Un calendario económico", "Una plataforma de trading"], correctIndex: 1, explanation: "El Commitment of Traders (COT) report muestra cómo están posicionados los grandes jugadores del mercado. Es clave para entender el sentimiento institucional." },
            { question: "Si la Advance-Decline Line sube mientras el índice está lateral, ¿qué sugiere?", options: ["El mercado va a caer", "Más acciones están subiendo - posible ruptura alcista próxima", "No significa nada", "Hay que vender todo"], correctIndex: 1, explanation: "Si la A/D Line mejora mientras el índice está lateral, indica que la amplitud del mercado se está fortaleciendo. Es una señal positiva que puede preceder una ruptura alcista." },
            { question: "¿Cuál de estos NO es un principio de la Teoría de Dow?", options: ["El mercado lo descuenta todo", "El volumen confirma la tendencia", "Los gaps siempre se rellenan", "La tendencia continúa hasta señal de cambio"], correctIndex: 2, explanation: "Los gaps siempre se rellenan NO es un principio de Dow. Es un mito común. Los gaps pueden rellenarse o no dependiendo del contexto." },
            { question: "¿Qué ciclo económico dura 40-60 años según Kondratieff?", options: ["Ciclo de inventarios", "Ciclo de inversión empresarial", "Ciclo de onda larga basado en innovación tecnológica", "Ciclo presidencial"], correctIndex: 2, explanation: "El ciclo de Kondratieff (40-60 años) se basa en grandes olas de innovación tecnológica: máquina de vapor, ferrocarriles, electricidad, internet, IA." },
            { question: "¿Qué significa 'Be fearful when others are greedy, and greedy when others are fearful'?", options: ["Seguir a la mayoría siempre", "Pensamiento contrarian: comprar cuando hay miedo extremo, vender cuando hay euforia", "Nunca tener miedo", "Solo operar cuando estás calmado"], correctIndex: 1, explanation: "Es el principio contrarian fundamental: los extremos de sentimiento suelen coincidir con techos (euforia) y suelos (pánico) del mercado." },
            { question: "¿Qué libro es la referencia oficial para el examen CMT Nivel 1?", options: ["Trading in the Zone de Mark Douglas", "Technical Analysis of the Financial Markets de Murphy", "Technical Analysis: The Complete Resource de Kirkpatrick & Dahlquist", "Market Wizards de Schwager"], correctIndex: 2, explanation: "El libro oficial del CMT es 'Technical Analysis: The Complete Resource for Financial Market Technicians' de Kirkpatrick & Dahlquist." },
            { question: "En el contexto del CMT, ¿cuál es la diferencia principal entre análisis técnico y análisis fundamental?", options: ["No hay diferencia", "El AT analiza precio y volumen, el AF analiza estados financieros y datos económicos", "El AF es mejor que el AT", "El AT solo funciona en Forex"], correctIndex: 1, explanation: "El AT se basa en datos de precio y volumen para predecir movimientos futuros. El AF analiza el valor intrínseco mediante estados financieros y datos macro." },
            { question: "¿Qué es la 'Hipótesis de Mercados Eficientes' y cómo se relaciona con el AT?", options: ["Dice que el AT siempre funciona", "Dice que los precios reflejan toda la información, haciendo imposible obtener ventaja consistente. El AT la cuestiona.", "Dice que los mercados nunca se equivocan", "No tiene relación con el AT"], correctIndex: 1, explanation: "La EMH (forma fuerte) dice que es imposible obtener ventaja consistente. El análisis técnico desafía esto argumentando que los patrones de precio son predecibles." },
            { question: "¿Cuál es el código ético principal que el CMT Institute exige?", options: ["Ganar dinero a toda costa", "Integridad profesional: no manipular mercados, revelar conflictos de interés, actuar en beneficio del cliente", "Solo operar en horario de mercado", "No compartir análisis"], correctIndex: 1, explanation: "El CMT exige estándares éticos altos: integridad, transparencia, revelación de conflictos de interés, y priorizar el interés del cliente." },
            { question: "¿Cuántas horas de estudio adicional estimas necesarias para preparar el CMT Nivel 1 después de completar este curso?", options: ["0 horas, ya estoy listo", "50-100 horas adicionales para el 30% restante", "500+ horas", "Imposible saberlo"], correctIndex: 1, explanation: "Con el 70% cubierto por este curso, necesitas 50-100 horas adicionales estudiando el libro oficial y haciendo exámenes de práctica para el 30% restante." },
            { question: "¿Qué combinación de herramientas te daría la mejor visión del sentimiento del mercado?", options: ["Solo el RSI", "VIX + Put/Call Ratio + AAII Survey + COT Report combinados", "Solo las noticias", "Solo el volumen"], correctIndex: 1, explanation: "Ningún indicador de sentimiento es perfecto solo. La combinación de VIX + Put/Call + AAII + COT te da una visión completa del sentimiento desde diferentes ángulos." }
          ],
          practicalExercise: "Haz este examen de práctica SIN consultar las lecciones. Cronometra cuánto tardas. En el CMT real tienes 132 preguntas en 4 horas = ~1.8 min/pregunta. Intenta responder cada pregunta en menos de 2 minutos. Si sacas 70%+ en menos de 40 minutos, estás preparado para el ritmo del examen real."
        }
      ]
    },
    {
      id: "mod-9-3",
      title: "Conceptos Complementarios CMT",
      description: "Los temas restantes que completan tu preparación",
      icon: "📘",
      color: "#10B981",
      lessons: [
        {
          id: "9-3-1",
          title: "Ética Profesional del CMT",
          duration: "20 min",
          content: `
<h2>Ética y Estándares Profesionales del CMT</h2>

<div style="display:flex;justify-content:center;margin:20px 0"><svg width="420" height="90" viewBox="0 0 420 90" style="background:#131722;border-radius:10px;border:1px solid #2a2a40"><text x="210" y="15" fill="white" font-size="10" text-anchor="middle" font-weight="bold">LOS 5 PILARES ÉTICOS DEL CMT</text><rect x="8" y="28" width="75" height="35" rx="5" fill="#26a69a15" stroke="#26a69a"/><text x="45" y="42" fill="#26a69a" font-size="7" text-anchor="middle" font-weight="bold">INTEGRIDAD</text><text x="45" y="54" fill="#787b86" font-size="6" text-anchor="middle">Honestidad total</text><rect x="90" y="28" width="75" height="35" rx="5" fill="#3b82f615" stroke="#3b82f6"/><text x="127" y="42" fill="#3b82f6" font-size="7" text-anchor="middle" font-weight="bold">TRANSPARENCIA</text><text x="127" y="54" fill="#787b86" font-size="6" text-anchor="middle">Sin información oculta</text><rect x="172" y="28" width="75" height="35" rx="5" fill="#f59e0b15" stroke="#f59e0b"/><text x="209" y="42" fill="#f59e0b" font-size="7" text-anchor="middle" font-weight="bold">CONFLICTOS</text><text x="209" y="54" fill="#787b86" font-size="6" text-anchor="middle">Revelar siempre</text><rect x="254" y="28" width="75" height="35" rx="5" fill="#8b5cf615" stroke="#8b5cf6"/><text x="291" y="42" fill="#8b5cf6" font-size="7" text-anchor="middle" font-weight="bold">COMPETENCIA</text><text x="291" y="54" fill="#787b86" font-size="6" text-anchor="middle">Formación continua</text><rect x="336" y="28" width="75" height="35" rx="5" fill="#ec489915" stroke="#ec4899"/><text x="373" y="42" fill="#ec4899" font-size="7" text-anchor="middle" font-weight="bold">CLIENTE</text><text x="373" y="54" fill="#787b86" font-size="6" text-anchor="middle">Prioridad #1</text><text x="210" y="78" fill="#787b86" font-size="7" text-anchor="middle">~5-10% del examen CMT cubre ética profesional</text></svg></div>

<div class="highlight-box blue">
<h4>¿Por Qué la Ética en el Examen CMT?</h4>
<p>La CMT Association quiere asegurar que los profesionales certificados actúen con integridad. Aproximadamente el 5-10% del examen CMT Nivel 1 incluye preguntas sobre ética y estándares profesionales. Es puntuación "gratis" si las estudias.</p>
</div>

<h3>Los Estándares del CMT</h3>

<div class="grid-cards">
<div class="card"><h4>I. Integridad del Mercado</h4><p>No manipular precios, no hacer front-running (operar antes que tu cliente), no difundir información falsa para mover el mercado.</p></div>
<div class="card"><h4>II. Conflictos de Interés</h4><p>Si recomiendas un activo, debes revelar si tú o tu empresa tienen posiciones en ese activo. Transparencia total.</p></div>
<div class="card"><h4>III. Deber hacia el Cliente</h4><p>Los intereses del cliente van PRIMERO. Antes que los tuyos y antes que los de tu empresa. Siempre.</p></div>
<div class="card"><h4>IV. Competencia Profesional</h4><p>Mantener tus conocimientos actualizados. No ofrecer servicios fuera de tu área de competencia.</p></div>
</div>

<h3>Situaciones Éticas en el Examen</h3>

<div class="strategy-box">
<h4>Tipo de Pregunta que Encontrarás</h4>
<p>El examen presenta ESCENARIOS y te pregunta cuál es la acción correcta:</p>
<ul>
<li><strong>Escenario:</strong> "Un analista CMT descubre que su empresa va a publicar un informe alcista sobre una acción. ¿Puede comprar acciones antes de la publicación?"</li>
<li><strong>Respuesta:</strong> NO. Eso es front-running / insider trading. Debe esperar a que el informe sea público.</li>
</ul>
<ul>
<li><strong>Escenario:</strong> "Un CMT tiene posiciones largas en oro. Un cliente le pregunta su opinión sobre el oro. ¿Qué debe hacer?"</li>
<li><strong>Respuesta:</strong> Puede dar su opinión PERO debe revelar que tiene posiciones en oro (conflicto de interés).</li>
</ul>
</div>

<div class="warning-box">
<h4>Regla de Oro para las Preguntas de Ética</h4>
<p>Cuando dudes, elige siempre la opción que: 1) Protege al cliente, 2) Es más transparente, 3) Revela más información. El CMT siempre prioriza la protección del inversor.</p>
</div>`,
          keyPoints: [
            "5-10% del examen CMT cubre ética profesional",
            "5 pilares: integridad, transparencia, conflictos, competencia, cliente primero",
            "Nunca hacer front-running ni manipular mercados",
            "Siempre revelar conflictos de interés",
            "En caso de duda: elige la opción que más protege al cliente"
          ],
          quiz: [
            { question: "Un analista CMT tiene acciones de Apple. Un cliente le pregunta si debe comprar Apple. ¿Qué debe hacer?", options: ["Recomendar comprar sin decir nada", "Dar su opinión PERO revelar que tiene posiciones en Apple", "Negarse a dar opinión", "Vender sus acciones primero"], correctIndex: 1, explanation: "Debe revelar el conflicto de interés (tiene posiciones) y luego puede dar su opinión profesional. La transparencia es obligatoria." },
            { question: "¿Qué es el 'front-running'?", options: ["Comprar acciones muy rápido", "Operar antes que tu cliente basándote en información privilegiada de una orden pendiente", "Ser el primero en operar cada mañana", "Usar stops muy ajustados"], correctIndex: 1, explanation: "Front-running es usar el conocimiento de una orden pendiente de un cliente para operar antes, beneficiándose a costa del cliente. Es ilegal y antiético." },
            { question: "En una pregunta de ética del CMT, cuando dudes, ¿qué opción debes elegir?", options: ["La que maximiza el beneficio", "La que protege más al cliente y es más transparente", "La que es más rápida", "La que tu jefe prefiere"], correctIndex: 1, explanation: "El CMT siempre prioriza la protección del inversor. En caso de duda, elige transparencia y protección del cliente." }
          ],
          practicalExercise: "Lee los Standards of Practice de la CMT Association en su web oficial (cmtassociation.org). Identifica 3 situaciones de tu vida cotidiana (no necesariamente trading) donde aplicarías estos principios éticos. Escríbelas."
        },
        {
          id: "9-3-2",
          title: "Hipótesis de Mercados Eficientes vs Análisis Técnico",
          duration: "20 min",
          content: `
<h2>EMH vs AT: El Gran Debate de las Finanzas</h2>

<div style="display:flex;justify-content:center;margin:20px 0"><svg width="420" height="100" viewBox="0 0 420 100" style="background:#131722;border-radius:10px;border:1px solid #2a2a40"><text x="210" y="16" fill="white" font-size="10" text-anchor="middle" font-weight="bold">EMH vs ANÁLISIS TÉCNICO: EL DEBATE</text><rect x="10" y="30" width="190" height="40" rx="6" fill="#ef535010" stroke="#ef535044"/><text x="105" y="47" fill="#ef5350" font-size="9" text-anchor="middle" font-weight="bold">EMH: "No puedes ganar"</text><text x="105" y="62" fill="#787b86" font-size="7" text-anchor="middle">Los precios son aleatorios</text><text x="210" y="55" fill="#f59e0b" font-size="14" font-weight="bold">vs</text><rect x="220" y="30" width="190" height="40" rx="6" fill="#26a69a10" stroke="#26a69a44"/><text x="315" y="47" fill="#26a69a" font-size="9" text-anchor="middle" font-weight="bold">AT: "Sí puedes ganar"</text><text x="315" y="62" fill="#787b86" font-size="7" text-anchor="middle">Los patrones se repiten</text><text x="210" y="90" fill="#f59e0b" font-size="8" text-anchor="middle" font-weight="bold">El examen CMT te pide conocer AMBAS posiciones</text></svg></div>

<h3>¿Qué es la Hipótesis de Mercados Eficientes (EMH)?</h3>

<p>Propuesta por Eugene Fama en 1970, la EMH dice que los precios de los activos reflejan TODA la información disponible, haciendo imposible obtener una ventaja consistente.</p>

<div class="grid-cards">
<div class="card"><h4>EMH Forma Débil</h4><p>Los precios reflejan toda la información histórica. El análisis técnico NO debería funcionar (porque los patrones pasados ya están en el precio).</p></div>
<div class="card"><h4>EMH Forma Semi-Fuerte</h4><p>Los precios reflejan toda la información pública (histórica + noticias + estados financieros). Ni AT ni AF deberían funcionar.</p></div>
<div class="card"><h4>EMH Forma Fuerte</h4><p>Los precios reflejan TODA la información, incluyendo información privilegiada. NADA debería funcionar. (Casi nadie cree esta versión.)</p></div>
</div>

<h3>¿Por Qué el AT Desafía la EMH?</h3>

<div class="highlight-box green">
<h4>Argumentos a Favor del Análisis Técnico</h4>
<ul>
<li><strong>Behavioral Finance:</strong> Los humanos NO son racionales. El miedo, la codicia y los sesgos cognitivos crean patrones repetitivos.</li>
<li><strong>Profecía autocumplida:</strong> Si millones de traders usan las mismas herramientas (S/R, Fibonacci), los niveles funcionan PORQUE todos los miran.</li>
<li><strong>Evidencia empírica:</strong> Estudios muestran que ciertas estrategias de momentum y mean-reversion han generado retornos superiores al mercado.</li>
<li><strong>Smart Money:</strong> Las instituciones no son eficientes - manipulan la liquidez, creando patrones predecibles (lo que aprendiste en SMC).</li>
</ul>
</div>

<div class="highlight-box red">
<h4>Argumentos a Favor de la EMH</h4>
<ul>
<li><strong>Costes de transacción:</strong> Muchas estrategias que funcionan en backtest dejan de funcionar cuando incluyes spreads y comisiones.</li>
<li><strong>Survivorship bias:</strong> Solo vemos a los traders exitosos, no a los miles que perdieron con las mismas estrategias.</li>
<li><strong>Degradación de estrategias:</strong> Cuando una estrategia se hace popular, pierde efectividad porque demasiados la usan.</li>
</ul>
</div>

<h3>La Respuesta Correcta para el Examen CMT</h3>

<div class="strategy-box">
<h4>Posición del CMT Institute</h4>
<p>El CMT reconoce que los mercados son "razonablemente eficientes" pero NO perfectamente eficientes. Existen ineficiencias temporales que un analista técnico bien formado puede explotar. Los mercados tienden hacia la eficiencia pero nunca la alcanzan completamente debido al comportamiento humano.</p>
<p><strong>Clave para el examen:</strong> No digas que el AT siempre funciona. Tampoco digas que nunca funciona. La respuesta correcta es que el AT puede identificar ineficiencias temporales en mercados que son "mayormente pero no completamente" eficientes.</p>
</div>`,
          keyPoints: [
            "EMH: los precios reflejan toda la información (3 formas: débil, semi-fuerte, fuerte)",
            "El AT desafía la EMH basándose en behavioral finance y patrones repetitivos",
            "Posición CMT: mercados son 'razonablemente eficientes' pero con ineficiencias explotables",
            "Behavioral Finance: humanos no son racionales → sesgos crean patrones",
            "Para el examen: la respuesta correcta está en el MEDIO (ni todo funciona ni nada funciona)"
          ],
          quiz: [
            { question: "¿Qué dice la forma DÉBIL de la EMH sobre el análisis técnico?", options: ["Que siempre funciona", "Que NO debería funcionar porque la información histórica ya está reflejada en el precio", "Que es la mejor forma de analizar", "Que solo funciona en Forex"], correctIndex: 1, explanation: "La EMH forma débil dice que los precios ya reflejan toda la información histórica, por lo que analizar patrones pasados (AT) no debería dar ventaja." },
            { question: "¿Cuál es el principal argumento de Behavioral Finance CONTRA la EMH?", options: ["Los mercados son perfectos", "Los humanos son irracionales: el miedo, la codicia y los sesgos crean patrones predecibles", "La tecnología hace los mercados eficientes", "No hay argumentos contra la EMH"], correctIndex: 1, explanation: "Behavioral Finance demuestra que los humanos toman decisiones irracionales (FOMO, revenge trading, herding). Esto crea ineficiencias que el AT puede explotar." },
            { question: "¿Cuál es la posición del CMT sobre la eficiencia de los mercados?", options: ["Los mercados son 100% eficientes", "Los mercados son 100% ineficientes", "Los mercados son 'razonablemente eficientes' pero con ineficiencias temporales explotables", "La EMH es completamente falsa"], correctIndex: 2, explanation: "El CMT toma la posición intermedia: los mercados son mayormente eficientes pero no perfectamente, y un analista técnico bien formado puede identificar ineficiencias temporales." }
          ],
          practicalExercise: "Lee un resumen de 'A Random Walk Down Wall Street' de Burton Malkiel (pro-EMH) y un resumen de 'Technical Analysis: The Complete Resource' de Kirkpatrick (pro-AT). Escribe 3 argumentos de cada lado y tu conclusión personal sobre si los mercados son eficientes."
        }
      ]
    }
  ]
};
