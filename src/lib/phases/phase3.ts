import type { Phase } from "../courseData";

export const PHASE_3: Phase = {
  id: "fase-3",
  number: 3,
  title: "Gestion de Riesgo y Psicologia",
  subtitle: "Lo que separa ganadores de perdedores",
  description: "Esta es LA FASE MAS IMPORTANTE del curso. Puedes tener la mejor estrategia del mundo, pero sin gestión de riesgo y control emocional, PERDERAS todo tu dinero. Aqui aprenderas a proteger tu capital como un profesional y a dominar tu mente para operar con disciplina inquebrantable.",
  color: "#EF4444",
  gradient: "from-red-500 to-red-700",
  modules: [
    // ========================================================================
    // MODULO 3-1: MONEY MANAGEMENT PROFESIONAL
    // ========================================================================
    {
      id: "mod-3-1",
      title: "Money Management Profesional",
      description: "Aprende a proteger tu capital y maximizar tus ganancias con gestión de riesgo matematica",
      icon: "\u{1F6E1}\uFE0F",
      color: "#EF4444",
      lessons: [
        // --------------------------------------------------------------------
        // LECCION 3-1-1: LAS 7 REGLAS DE ORO DEL MONEY MANAGEMENT
        // --------------------------------------------------------------------
        {
          id: "3-1-1",
          title: "Las 7 Reglas de Oro del Money Management",
          duration: "35 min",
          content: `
<h2>Las 7 Reglas de Oro del Money Management</h2>

<div class="analogy-box">
<h3>La Analogia del Casino</h3>
<p>Imagina un casino. El casino SIEMPRE gana a largo plazo. No porque gane cada apuesta, sino porque tiene una <strong>ventaja estadistica</strong> y <strong>gestiona su riesgo perfectamente</strong>. Si alguien gana 1 millon, el casino no quiebra porque ese millon es una fraccion minima de su capital. TU debes ser el casino, no el jugador. La gestión de riesgo es lo que convierte el trading de un juego de azar en un NEGOCIO rentable.</p>
</div>

<div class="warning-box">
<h4>LA VERDAD QUE NADIE TE DICE</h4>
<p>El 90% de los traders que pierden dinero NO pierden por mala estrategia. Pierden por MALA GESTION DE RIESGO. Arriesgan demasiado, no usan Stop Loss, y dejan que una sola operación destruya semanas de trabajo. Esta lección va a cambiar eso para siempre.</p>
</div>

<h3>REGLA #1: Nunca arriesgues más del 1-2% por operación</h3>

<div class="highlight-box red">
<h4>La Regla Mas Importante del Trading</h4>
<p>En CADA operación, el máximo que puedes perder es el <strong>1-2% de tu cuenta</strong>. No el 5%, no el 10%, no "lo que sientas". El 1-2%. SIEMPRE. SIN EXCEPCIONES.</p>
</div>

<div class="calculation-box">
<h4>Ejemplo Practico: Cuenta de 10,000$</h4>
<ul>
<li><strong>Riesgo 1%</strong> = 100$ máximo de perdida por trade</li>
<li><strong>Riesgo 2%</strong> = 200$ máximo de perdida por trade</li>
<li><strong>Riesgo 5% (MAL)</strong> = 500$ máximo de perdida por trade</li>
</ul>
</div>

<div class="formula-box">
<h4>Por que el 1% funciona - La Matematica de la Supervivencia</h4>
<p><strong>Con riesgo del 1% por operación:</strong></p>
<ul>
<li>10 perdidas seguidas = pierdes 9.56% de tu cuenta (quedan 9,044$)</li>
<li>20 perdidas seguidas = pierdes 18.21% (quedan 8,179$)</li>
<li>Necesitarias 100+ perdidas seguidas para perder el 50%</li>
<li><strong>PRACTICAMENTE IMPOSIBLE quedarte sin cuenta</strong></li>
</ul>
<p><strong>Con riesgo del 5% por operación:</strong></p>
<ul>
<li>10 perdidas seguidas = pierdes 40.13% de tu cuenta (quedan 5,987$)</li>
<li>20 perdidas seguidas = pierdes 64.15% (quedan 3,585$)</li>
<li><strong>En 13 perdidas seguidas ya perdiste MAS DEL 50%</strong></li>
</ul>
<p><strong>Con riesgo del 10% por operación:</strong></p>
<ul>
<li>5 perdidas seguidas = pierdes 40.95% (quedan 5,905$)</li>
<li>10 perdidas seguidas = pierdes 65.13% (quedan 3,487$)</li>
<li><strong>En 7 perdidas seguidas ya perdiste más de la mitad</strong></li>
</ul>
</div>

<div class="highlight-box green">
<h4>El Secreto: Recuperacion Asimetrica</h4>
<p>Si pierdes el 10% de tu cuenta, necesitas ganar un 11.1% para recuperarte. Si pierdes el 50%, necesitas ganar un 100% (el DOBLE). Si pierdes el 90%, necesitas ganar un 900%. <strong>Es matematicamente más fácil NO perder que recuperarse.</strong></p>
<table style="width:100%; border-collapse:collapse; margin-top:10px;">
<tr style="border-bottom:2px solid rgba(0,0,0,0.1);"><th style="text-align:left; padding:8px;">Perdida</th><th style="text-align:left; padding:8px;">Ganancia necesaria para recuperar</th></tr>
<tr><td style="padding:8px;">-10%</td><td style="padding:8px;">+11.1%</td></tr>
<tr><td style="padding:8px;">-20%</td><td style="padding:8px;">+25%</td></tr>
<tr><td style="padding:8px;">-30%</td><td style="padding:8px;">+42.9%</td></tr>
<tr><td style="padding:8px;">-50%</td><td style="padding:8px;">+100%</td></tr>
<tr><td style="padding:8px;">-70%</td><td style="padding:8px;">+233%</td></tr>
<tr><td style="padding:8px;">-90%</td><td style="padding:8px;">+900%</td></tr>
</table>
</div>

<h3>REGLA #2: SIEMPRE usa Stop Loss</h3>

<div class="highlight-box red">
<h4>SIN EXCEPCION. SIN NEGOCIACION.</h4>
<p>Cada operación DEBE tener un Stop Loss ANTES de entrar. No despues. No "mental". Un Stop Loss REAL puesto en la plataforma. Si tu broker no permite SL, CAMBIA de broker. Una sola operación sin SL puede destruir MESES de trabajo.</p>
</div>

<div class="example-box">
<h4>Historia Real: El Flash Crash del Franco Suizo (2015)</h4>
<p>El 15 de enero de 2015, el Banco Nacional Suizo elimino el techo del EUR/CHF. En MINUTOS, el par cayo 2,800 pips (un 30%). Traders sin Stop Loss perdieron TODO su capital en segundos. Algunos quedaron con deuda. Brokers quebraron. Los que tenian SL perdieron su 1-2% y siguieron operando al dia siguiente.</p>
</div>

<h3>REGLA #3: Ratio Riesgo/Beneficio mínimo 1:2</h3>

<div style="display:flex;justify-content:center;margin:20px 0">
<svg width="420" height="200" viewBox="0 0 420 200" style="background:#131722;border-radius:12px;border:1px solid #2a2a40">
<text x="210" y="20" fill="white" font-size="11" text-anchor="middle" font-weight="bold">VISUALIZACION DEL RATIO RIESGO/BENEFICIO</text>
<!-- Entrada -->
<line x1="60" y1="120" x2="360" y2="120" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="4,4"/>
<text x="370" y="123" fill="#3b82f6" font-size="9">Entrada</text>
<circle cx="60" cy="120" r="5" fill="#3b82f6"/>
<!-- SL -->
<line x1="60" y1="155" x2="200" y2="155" stroke="#ef5350" stroke-width="1.5"/>
<rect x="60" y="122" width="140" height="33" fill="#ef535010" stroke="#ef535030"/>
<text x="130" y="142" fill="#ef5350" font-size="10" text-anchor="middle" font-weight="bold">RIESGO: -100$</text>
<text x="130" y="170" fill="#ef5350" font-size="9" text-anchor="middle">Stop Loss (30 pips)</text>
<!-- TP -->
<line x1="60" y1="50" x2="360" y2="50" stroke="#26a69a" stroke-width="1.5"/>
<rect x="60" y="50" width="300" height="70" fill="#26a69a08" stroke="#26a69a30"/>
<text x="210" y="78" fill="#26a69a" font-size="12" text-anchor="middle" font-weight="bold">BENEFICIO: +200$</text>
<text x="210" y="93" fill="#26a69a" font-size="9" text-anchor="middle">Take Profit (60 pips) = RATIO 1:2</text>
<!-- Flechas -->
<text x="30" y="90" fill="#26a69a" font-size="20">↑</text>
<text x="25" y="80" fill="#26a69a" font-size="8">2R</text>
<text x="30" y="145" fill="#ef5350" font-size="16">↓</text>
<text x="25" y="152" fill="#ef5350" font-size="8">1R</text>
<text x="210" y="195" fill="#fbbf24" font-size="10" text-anchor="middle" font-weight="bold">Con 1:2, solo necesitas 34% de acierto para ser rentable</text>
</svg>
</div>

<div class="strategy-box">
<h4>El Poder del Ratio 1:2</h4>
<p>Si arriesgas 100$ para ganar 200$, con SOLO el 40% de acierto eres rentable:</p>
<ul>
<li>10 trades con 40% acierto: 4 ganadores x 200$ = 800$</li>
<li>6 perdedores x 100$ = 600$</li>
<li><strong>Resultado: +200$ de beneficio (perdiendo 6 de cada 10)</strong></li>
</ul>
<p>Con ratio 1:3 (arriesgas 100$ para ganar 300$), solo necesitas el 26% de acierto.</p>
<p>Con ratio 1:1, necesitas más del 50% de acierto (muy difícil de mantener).</p>
</div>

<div class="comparison-table">
<div class="comparison-col">
<h4>Ratios Buenos</h4>
<ul>
<li>1:2 - Minimo aceptable</li>
<li>1:3 - Ideal para swing trading</li>
<li>1:4+ - Excelente pero oportunidades raras</li>
</ul>
</div>
<div class="comparison-col">
<h4>Ratios Malos</h4>
<ul>
<li>1:1 - Necesitas >50% winrate</li>
<li>1:0.5 - Necesitas >67% winrate</li>
<li>Sin ratio definido - DESASTRE</li>
</ul>
</div>
</div>

<h3>REGLA #4: Limite de Drawdown Diario y Semanal</h3>

<div class="highlight-box yellow">
<h4>Limites de Perdida</h4>
<ul>
<li><strong>Drawdown diario máximo:</strong> 3% de la cuenta. Si pierdes 3% en un dia, APAGAS la computadora y te vas.</li>
<li><strong>Drawdown semanal máximo:</strong> 5-6% de la cuenta. Si llegas al limite semanal, no operas hasta el lunes siguiente.</li>
<li><strong>Drawdown mensual máximo:</strong> 8-10% de la cuenta. Si llegas, paras el mes y analizas que paso.</li>
</ul>
<p>Las prop firms (cuentas fondeadas) usan limites similares: 4-5% diario, 8-12% total. Si los profesionales lo hacen, tu también.</p>
</div>

<h3>REGLA #5: NUNCA promedies posiciones perdedoras</h3>

<div class="warning-box">
<h4>El Error Mas Caro del Trading</h4>
<p>"Averaging down" o "promediar a la baja" significa comprar MAS cuando tu posición esta perdiendo, esperando que el precio "vuelva". Es la forma más rápida de destruir una cuenta. Si tu análisis fue incorrecto, aceptalo y sal. No dupliques la apuesta perdedora.</p>
</div>

<div class="example-box">
<h4>Ejemplo de Desastre</h4>
<p>Compras EUR/USD a 1.1000. Baja a 1.0950, compras más para "promediar". Baja a 1.0900, compras MAS. Ahora tienes el TRIPLE de exposicion y el precio sigue bajando. Lo que era una perdida de 50 pips se convierte en una perdida de 300 pips con triple tamano. <strong>Una operación que debia perder 100$ acaba perdiendo 900$.</strong></p>
</div>

<h3>REGLA #6: Maximo 2-3 operaciones simultaneas</h3>

<div class="highlight-box blue">
<h4>Menos es Mas</h4>
<p>No necesitas estar en 10 trades a la vez. Con 2-3 operaciones bien analizadas es suficiente. Mas de 3 operaciones abiertas:</p>
<ul>
<li>Aumenta tu riesgo total (si el mercado se mueve en contra, pierdes en todas)</li>
<li>Reduce tu capacidad de gestión (no puedes monitorear 10 trades bien)</li>
<li>Genera estres y decisiones emocionales</li>
<li>Muchos pares estan CORRELACIONADOS (EUR/USD y GBP/USD se mueven juntos)</li>
</ul>
</div>

<div class="warning-box">
<h4>Cuidado con la Correlacion</h4>
<p>Si abres BUY en EUR/USD y BUY en GBP/USD, NO tienes 2 trades independientes. Tienes basicamente el DOBLE de riesgo en la misma dirección, porque ambos pares se mueven similar. Estar largo en 3 pares correlacionados = arriesgar 3 veces más de lo que crees.</p>
</div>

<h3>REGLA #7: Compounding vs Retiros - Crece Inteligentemente</h3>

<div class="highlight-box green">
<h4>El Poder del Interes Compuesto en Trading</h4>
<p>Si ganas un 5% mensual consistente con una cuenta de 10,000$:</p>
<table style="width:100%; border-collapse:collapse; margin-top:10px;">
<tr style="border-bottom:2px solid rgba(0,0,0,0.1);"><th style="text-align:left; padding:6px;">Mes</th><th style="text-align:left; padding:6px;">Sin compounding (retiras ganancias)</th><th style="text-align:left; padding:6px;">Con compounding (reinviertes)</th></tr>
<tr><td style="padding:6px;">Mes 1</td><td style="padding:6px;">10,500$</td><td style="padding:6px;">10,500$</td></tr>
<tr><td style="padding:6px;">Mes 6</td><td style="padding:6px;">10,000$ + 3,000$ retirados</td><td style="padding:6px;">13,401$</td></tr>
<tr><td style="padding:6px;">Mes 12</td><td style="padding:6px;">10,000$ + 6,000$ retirados</td><td style="padding:6px;">17,959$</td></tr>
<tr><td style="padding:6px;">Mes 24</td><td style="padding:6px;">10,000$ + 12,000$ retirados</td><td style="padding:6px;">32,251$</td></tr>
<tr><td style="padding:6px;">Mes 36</td><td style="padding:6px;">10,000$ + 18,000$ retirados</td><td style="padding:6px;">57,946$</td></tr>
</table>
<p><strong>Diferencia en 3 años: 28,000$ vs 57,946$.</strong> El compounding DUPLICA tus resultados.</p>
</div>

<div class="strategy-box">
<h4>Estrategia Hibrida Recomendada</h4>
<p>Retira el 50% de las ganancias y reinvierte el otro 50%. Asi disfrutas de tu trabajo Y haces crecer la cuenta. Ejemplo con 10,000$ y 5% mensual:</p>
<ul>
<li>Mes 1: Ganas 500$. Retiras 250$, reinviertes 250$. Cuenta: 10,250$</li>
<li>Mes 2: Ganas 512$. Retiras 256$, reinviertes 256$. Cuenta: 10,506$</li>
<li>Despues de 12 meses: Cuenta ~13,400$ + ~3,600$ retirados</li>
</ul>
</div>

<div class="highlight-box purple">
<h4>RESUMEN: Las 7 Reglas en una Imagen Mental</h4>
<ol>
<li><strong>1-2% máximo por trade</strong> - Tu escudo protector</li>
<li><strong>SIEMPRE Stop Loss</strong> - Tu cinturon de seguridad</li>
<li><strong>R:R mínimo 1:2</strong> - Tu ventaja matematica</li>
<li><strong>Drawdown limits (3% dia, 5% semana)</strong> - Tu freno de emergencia</li>
<li><strong>Nunca promediar perdedoras</strong> - No tires dinero bueno al malo</li>
<li><strong>Maximo 2-3 trades abiertos</strong> - Calidad sobre cantidad</li>
<li><strong>Compounding inteligente</strong> - Crece exponencialmente</li>
</ol>
</div>`,
          keyPoints: [
            "Nunca arriesgar más del 1-2% del capital por operación - es la regla más importante del trading",
            "SIEMPRE usar Stop Loss real en la plataforma, nunca mental, nunca sin el",
            "Ratio Riesgo/Beneficio mínimo de 1:2 - con 40% de acierto ya eres rentable",
            "Limites de drawdown: 3% diario, 5% semanal, 10% mensual máximo",
            "Nunca promediar posiciones perdedoras - es la forma más rápida de destruir una cuenta",
            "El interes compuesto duplica resultados vs retirar todas las ganancias"
          ],
          quiz: [
            {
              question: "Si tienes una cuenta de 25,000$ y aplicas la regla del 1%, cual es el máximo que puedes perder en UNA operación?",
              options: ["250$", "2,500$", "1,250$", "500$"],
              correctIndex: 0,
              explanation: "El 1% de 25,000$ = 250$. Ese es el máximo absoluto que puedes perder en una sola operación."
            },
            {
              question: "Con un ratio R:R de 1:3, que porcentaje de acierto necesitas para ser rentable?",
              options: ["50%", "33%", "26%", "75%"],
              correctIndex: 2,
              explanation: "Con 1:3, si aciertas 26 de 100 trades: 26 x 300$ = 7,800$, pierdes 74 x 100$ = 7,400$. Beneficio: 400$. Solo necesitas acertar 1 de cada 4."
            },
            {
              question: "Pierdes 50% de tu cuenta. Cuanto necesitas ganar para recuperarte?",
              options: ["50%", "75%", "100%", "150%"],
              correctIndex: 2,
              explanation: "Si tu cuenta baja de 10,000$ a 5,000$ (perdida del 50%), necesitas ganar 5,000$ sobre 5,000$, lo cual es un 100%. La recuperacion es asimetrica."
            },
            {
              question: "Que es lo PEOR que puedes hacer cuando una operación esta en perdida?",
              options: ["Cerrarla en Stop Loss", "Esperar a que se recupere sin SL", "Abrir MAS posiciones en la misma dirección (promediar)", "Reducir el tamano de posición"],
              correctIndex: 2,
              explanation: "Promediar posiciones perdedoras multiplica tu riesgo exponencialmente. Lo que era una perdida controlada se convierte en una catastrofe."
            }
          ],
          practicalExercise: "Abre una hoja de cálculo. Simula 50 operaciones con riesgo del 1% (100$ en cuenta de 10,000$), ratio 1:2, y 45% de acierto. Calcula el resultado final. Luego repite con riesgo del 5%. Compara los resultados y el drawdown máximo de cada escenario. Esto te convencera de por que el 1% es sagrado."
        },

        // --------------------------------------------------------------------
        // LECCION 3-1-2: POSITION SIZING
        // --------------------------------------------------------------------
        {
          id: "3-1-2",
          title: "Position Sizing: La Ciencia del Tamano de Posicion",
          duration: "40 min",
          content: `
<h2>Position Sizing: La Ciencia del Tamano de Posicion</h2>

<div class="analogy-box">
<h3>La Analogia del Cinturon de Seguridad Ajustable</h3>
<p>Imagina que tu coche tiene un cinturon de seguridad que puedes ajustar segun la velocidad. A 30km/h, va holgado. A 120km/h, lo aprietas al máximo. El position sizing es exactamente eso: ajustar tu "proteccion" (tamano de posición) segun la "velocidad" (volatilidad y distancia del Stop Loss) para que el impacto de un choque (perdida) siempre sea el mismo: 1-2% de tu cuenta.</p>
</div>

<div class="highlight-box blue">
<h4>El Concepto Clave</h4>
<p>Position sizing responde a una pregunta simple: <strong>"Con cuantos lotes/contratos/unidades debo entrar para que, si mi Stop Loss se activa, pierda EXACTAMENTE el 1-2% de mi cuenta?"</strong> No es adivinar. Es una FORMULA MATEMATICA.</p>
</div>

<h3>La Formula Universal del Position Sizing</h3>

<div style="display:flex;justify-content:center;margin:20px 0">
<svg width="460" height="180" viewBox="0 0 460 180" style="background:#131722;border-radius:12px;border:1px solid #2a2a40">
<text x="230" y="22" fill="white" font-size="12" text-anchor="middle" font-weight="bold">FORMULA DE POSITION SIZING</text>
<!-- Formula visual -->
<rect x="30" y="45" width="400" height="50" rx="8" fill="#2962ff15" stroke="#2962ff44"/>
<text x="230" y="68" fill="white" font-size="14" text-anchor="middle" font-weight="bold" font-family="monospace">Lotes = Riesgo($) / (SL pips x Valor pip)</text>
<text x="230" y="85" fill="#787b86" font-size="9" text-anchor="middle">Tamano exacto de tu posición para cada trade</text>
<!-- Ejemplo -->
<rect x="30" y="110" width="130" height="55" rx="6" fill="#26a69a12" stroke="#26a69a33"/>
<text x="95" y="128" fill="#26a69a" font-size="9" text-anchor="middle" font-weight="bold">Cuenta: 10,000$</text>
<text x="95" y="142" fill="#26a69a" font-size="9" text-anchor="middle">Riesgo 1% = 100$</text>
<text x="95" y="156" fill="#787b86" font-size="8" text-anchor="middle">Lo que arriesgas</text>
<rect x="170" y="110" width="120" height="55" rx="6" fill="#ff980012" stroke="#ff980033"/>
<text x="230" y="128" fill="#ff9800" font-size="9" text-anchor="middle" font-weight="bold">SL: 30 pips</text>
<text x="230" y="142" fill="#ff9800" font-size="9" text-anchor="middle">Pip value: 10$</text>
<text x="230" y="156" fill="#787b86" font-size="8" text-anchor="middle">Tu stop loss</text>
<rect x="300" y="110" width="130" height="55" rx="6" fill="#8b5cf612" stroke="#8b5cf633"/>
<text x="365" y="128" fill="#8b5cf6" font-size="9" text-anchor="middle" font-weight="bold">= 0.33 lotes</text>
<text x="365" y="142" fill="#8b5cf6" font-size="9" text-anchor="middle">100 / (30x10)</text>
<text x="365" y="156" fill="#787b86" font-size="8" text-anchor="middle">Resultado</text>
<!-- Arrows -->
<text x="158" y="140" fill="#787b86" font-size="14">÷</text>
<text x="293" y="140" fill="#787b86" font-size="14">=</text>
</svg>
</div>

<div class="formula-box">
<h4>FORMULA MAESTRA</h4>
<p style="font-size:1.2em; text-align:center; margin: 15px 0; font-weight:bold;">
Tamano de Posicion = Riesgo en $ / (Distancia SL en pips x Valor por pip)
</p>
<p>Donde:</p>
<ul>
<li><strong>Riesgo en $</strong> = Capital x Porcentaje de riesgo (ej: 10,000$ x 1% = 100$)</li>
<li><strong>Distancia SL en pips</strong> = Precio de entrada - Precio de Stop Loss (en pips)</li>
<li><strong>Valor por pip</strong> = Depende del par y tamano del lote</li>
</ul>
</div>

<h3>Position Sizing en FOREX</h3>

<div class="calculation-box">
<h4>Valores por Pip en Forex (pares con USD)</h4>
<table style="width:100%; border-collapse:collapse;">
<tr style="border-bottom:2px solid rgba(0,0,0,0.1);"><th style="text-align:left; padding:8px;">Tamano</th><th style="text-align:left; padding:8px;">Unidades</th><th style="text-align:left; padding:8px;">Valor por pip</th></tr>
<tr><td style="padding:8px;">1 Lote estandar</td><td style="padding:8px;">100,000</td><td style="padding:8px;">~10$</td></tr>
<tr><td style="padding:8px;">1 Mini lote (0.10)</td><td style="padding:8px;">10,000</td><td style="padding:8px;">~1$</td></tr>
<tr><td style="padding:8px;">1 Micro lote (0.01)</td><td style="padding:8px;">1,000</td><td style="padding:8px;">~0.10$</td></tr>
</table>
</div>

<div class="example-box">
<h4>EJEMPLO COMPLETO #1: Forex - EUR/USD</h4>
<p><strong>Datos:</strong></p>
<ul>
<li>Capital: 10,000$</li>
<li>Riesgo: 1% = 100$</li>
<li>Entrada: 1.0850 (Buy)</li>
<li>Stop Loss: 1.0800 (50 pips de distancia)</li>
</ul>
<p><strong>Calculo:</strong></p>
<p>Tamano = 100$ / (50 pips x 10$ por pip por lote) = 100$ / 500$ = 0.20 lotes</p>
<p><strong>Resultado: Entrar con 0.20 lotes (2 mini lotes)</strong></p>
<p>Si el SL se activa: 50 pips x 2$ por pip = 100$ de perdida = exactamente el 1%</p>
</div>

<div class="example-box">
<h4>EJEMPLO COMPLETO #2: Forex - GBP/USD con SL amplio</h4>
<p><strong>Datos:</strong></p>
<ul>
<li>Capital: 5,000$</li>
<li>Riesgo: 2% = 100$</li>
<li>Entrada: 1.2650 (Sell)</li>
<li>Stop Loss: 1.2750 (100 pips de distancia)</li>
</ul>
<p><strong>Calculo:</strong></p>
<p>Tamano = 100$ / (100 pips x 10$ por pip por lote) = 100$ / 1,000$ = 0.10 lotes</p>
<p><strong>Resultado: Entrar con 0.10 lotes (1 mini lote)</strong></p>
<p>Nota: SL más amplio = posición más PEQUENA. Es automático con la formula.</p>
</div>

<div class="example-box">
<h4>EJEMPLO COMPLETO #3: Cuenta pequena - 500$</h4>
<p><strong>Datos:</strong></p>
<ul>
<li>Capital: 500$</li>
<li>Riesgo: 1% = 5$</li>
<li>Entrada EUR/USD: 1.0900 (Buy)</li>
<li>Stop Loss: 1.0870 (30 pips de distancia)</li>
</ul>
<p><strong>Calculo:</strong></p>
<p>Tamano = 5$ / (30 pips x 10$ por pip por lote) = 5$ / 300$ = 0.017 lotes</p>
<p><strong>Resultado: Entrar con 0.02 lotes (redondeado) = 2 micro lotes</strong></p>
<p>Perdida real si SL se activa: 30 x 0.20$ = 6$ (ligeramente más del 1%, aceptable)</p>
</div>

<h3>Position Sizing en INDICES (S&P 500, NASDAQ, etc.)</h3>

<div class="calculation-box">
<h4>Indices - Valor por punto</h4>
<p>En indices, cada broker tiene un valor diferente por punto/tick. Debes verificar en tu plataforma.</p>
<table style="width:100%; border-collapse:collapse;">
<tr style="border-bottom:2px solid rgba(0,0,0,0.1);"><th style="text-align:left; padding:8px;">Indice</th><th style="text-align:left; padding:8px;">Valor típico por punto (1 lote)</th></tr>
<tr><td style="padding:8px;">US500 (S&P 500)</td><td style="padding:8px;">~1$ por punto</td></tr>
<tr><td style="padding:8px;">US100 (NASDAQ)</td><td style="padding:8px;">~1$ por punto</td></tr>
<tr><td style="padding:8px;">US30 (Dow Jones)</td><td style="padding:8px;">~1$ por punto</td></tr>
<tr><td style="padding:8px;">XAUUSD (Oro)</td><td style="padding:8px;">~1$ por 0.1 puntos (1 lote)</td></tr>
</table>
</div>

<div class="example-box">
<h4>EJEMPLO: Indices - US500 (S&P 500)</h4>
<p><strong>Datos:</strong></p>
<ul>
<li>Capital: 20,000$</li>
<li>Riesgo: 1% = 200$</li>
<li>Entrada US500: 5,250 (Buy)</li>
<li>Stop Loss: 5,225 (25 puntos de distancia)</li>
<li>Valor: 1$ por punto por lote en tu broker</li>
</ul>
<p><strong>Calculo:</strong></p>
<p>Tamano = 200$ / (25 puntos x 1$ por punto por lote) = 200$ / 25$ = 8 lotes</p>
<p><strong>Resultado: Entrar con 8 lotes</strong></p>
</div>

<h3>Position Sizing en CRIPTOMONEDAS</h3>

<div class="example-box">
<h4>EJEMPLO: Bitcoin (BTC/USD)</h4>
<p><strong>Datos:</strong></p>
<ul>
<li>Capital: 3,000$</li>
<li>Riesgo: 1% = 30$</li>
<li>Entrada BTC: 65,000$ (Buy)</li>
<li>Stop Loss: 63,500$ (1,500$ de distancia)</li>
</ul>
<p><strong>Calculo:</strong></p>
<p>Tamano = 30$ / 1,500$ = 0.02 BTC</p>
<p>Valor de la posición: 0.02 x 65,000$ = 1,300$ (el apalancamiento cubre la diferencia)</p>
<p><strong>Resultado: Comprar 0.02 BTC</strong></p>
</div>

<h3>Metodos Avanzados de Position Sizing</h3>

<div class="strategy-box">
<h4>Metodo 1: Fixed Fractional (Fraccion Fija) - RECOMENDADO</h4>
<p>Es el método que hemos estado usando. Siempre arriesgas un % fijo de tu cuenta ACTUAL (no la inicial). A medida que ganas, tu posición crece. A medida que pierdes, tu posición se reduce automáticamente.</p>
<ul>
<li><strong>Ventaja:</strong> Se ajusta automáticamente. Cuando pierdes, arriesgas menos en términos absolutos. Cuando ganas, aprovechas el compounding.</li>
<li><strong>Ejemplo:</strong> Cuenta empieza en 10,000$: riesgo = 100$. Despues de ganar y llegar a 12,000$: riesgo = 120$. Si baja a 8,000$: riesgo = 80$.</li>
</ul>
</div>

<div class="strategy-box">
<h4>Metodo 2: Fixed Ratio (Ratio Fijo)</h4>
<p>Aumentas el tamano de posición solo cuando alcanzas cierto beneficio acumulado (llamado "delta").</p>
<ul>
<li>Delta = cantidad de beneficio necesaria para subir un nivel</li>
<li><strong>Ejemplo con delta de 1,000$:</strong> Empiezas con 0.01 lotes. Cuando acumulas 1,000$ de ganancia, subes a 0.02 lotes. Cuando acumulas otros 1,000$ (2,000$ total), subes a 0.03 lotes.</li>
<li><strong>Ventaja:</strong> Crecimiento más conservador, ideal para cuentas pequenas</li>
</ul>
</div>

<div class="strategy-box">
<h4>Metodo 3: Criterio de Kelly (Simplificado)</h4>
<p>Formula matematica que calcula el porcentaje OPTIMO a arriesgar basado en tu winrate y ratio R:R.</p>
<div class="formula-box">
<p style="text-align:center; font-size:1.1em; font-weight:bold;">Kelly% = W - [(1-W) / R]</p>
<p>Donde: W = Winrate (en decimal), R = Ratio R:R promedio</p>
</div>
<p><strong>Ejemplo:</strong> Si tu winrate es 55% (W=0.55) y tu ratio promedio es 1.5:1 (R=1.5):</p>
<p>Kelly% = 0.55 - [(1-0.55) / 1.5] = 0.55 - 0.30 = 0.25 = 25%</p>
<p><strong>IMPORTANTE:</strong> El Kelly puro es MUY agresivo. Los profesionales usan "Half Kelly" o "Quarter Kelly" (dividir el resultado entre 2 o 4). En este caso: 25% / 4 = 6.25%, y nosotros recomendamos máximo 2%.</p>
</div>

<h3>Calculadora Rapida de Position Sizing</h3>

<div class="highlight-box purple">
<h4>Tabla Rapida: Tamano de Posicion en Forex (cuenta de 10,000$, riesgo 1%)</h4>
<table style="width:100%; border-collapse:collapse;">
<tr style="border-bottom:2px solid rgba(0,0,0,0.1);"><th style="padding:6px;">SL (pips)</th><th style="padding:6px;">Lotes</th><th style="padding:6px;">Perdida si SL hit</th></tr>
<tr><td style="padding:6px;">10 pips</td><td style="padding:6px;">1.00</td><td style="padding:6px;">100$</td></tr>
<tr><td style="padding:6px;">20 pips</td><td style="padding:6px;">0.50</td><td style="padding:6px;">100$</td></tr>
<tr><td style="padding:6px;">30 pips</td><td style="padding:6px;">0.33</td><td style="padding:6px;">~100$</td></tr>
<tr><td style="padding:6px;">50 pips</td><td style="padding:6px;">0.20</td><td style="padding:6px;">100$</td></tr>
<tr><td style="padding:6px;">75 pips</td><td style="padding:6px;">0.13</td><td style="padding:6px;">~100$</td></tr>
<tr><td style="padding:6px;">100 pips</td><td style="padding:6px;">0.10</td><td style="padding:6px;">100$</td></tr>
<tr><td style="padding:6px;">150 pips</td><td style="padding:6px;">0.07</td><td style="padding:6px;">~105$</td></tr>
<tr><td style="padding:6px;">200 pips</td><td style="padding:6px;">0.05</td><td style="padding:6px;">100$</td></tr>
</table>
<p><strong>Observa:</strong> SL más amplio = posición más pequena. SIEMPRE pierdes lo mismo: ~100$. ESO es position sizing.</p>
</div>

<div class="warning-box">
<h4>Errores Comunes de Position Sizing</h4>
<ul>
<li><strong>Usar siempre el mismo número de lotes:</strong> Si siempre usas 0.10 lotes, tu riesgo cambia segun donde pongas el SL. Eso NO es gestión de riesgo.</li>
<li><strong>Calcular basado en la cuenta inicial:</strong> Si empezaste con 10,000$ pero ahora tienes 8,000$, tu 1% es 80$, NO 100$.</li>
<li><strong>Ignorar el apalancamiento:</strong> Que tu broker te deje abrir 5 lotes no significa que DEBAS. El position sizing te dice cuanto DEBES abrir.</li>
<li><strong>Redondear hacia arriba:</strong> Si el cálculo da 0.17 lotes, usa 0.17, no 0.20. Mejor arriesgar un poco menos que un poco más.</li>
</ul>
</div>`,
          keyPoints: [
            "La formula universal: Tamano = Riesgo en $ / (Distancia SL x Valor por pip)",
            "SL más amplio = posición más pequena para mantener el mismo riesgo en dólares",
            "Fixed Fractional (fraccion fija) es el método recomendado para la mayoria de traders",
            "El Criterio de Kelly da el riesgo óptimo, pero los pros usan solo 1/4 del Kelly",
            "SIEMPRE calcular el tamano de posición ANTES de entrar al trade, nunca usar lotes fijos",
            "Con cuentas pequenas (500$), se usan micro lotes (0.01) para mantener el riesgo correcto"
          ],
          quiz: [
            {
              question: "Cuenta de 15,000$, riesgo 1%, SL de 40 pips en EUR/USD. Con cuantos lotes entras?",
              options: ["0.15 lotes", "0.375 lotes", "0.40 lotes", "1.50 lotes"],
              correctIndex: 1,
              explanation: "Riesgo = 15,000$ x 1% = 150$. Tamano = 150$ / (40 pips x 10$ por pip) = 150$ / 400$ = 0.375 lotes."
            },
            {
              question: "Si tu SL es de 100 pips en vez de 50 pips, que pasa con el tamano de posición?",
              options: ["Se duplica", "Se reduce a la mitad", "Se mantiene igual", "Depende del par"],
              correctIndex: 1,
              explanation: "Si el SL se duplica (de 50 a 100 pips), el tamano de posición se reduce a la mitad para mantener el mismo riesgo en dólares. Mas pips de SL = menos lotes."
            },
            {
              question: "Que es el método Fixed Fractional?",
              options: ["Usar siempre el mismo número de lotes", "Arriesgar siempre el mismo porcentaje del capital ACTUAL", "Aumentar posición cuando pierdes", "Usar el 50% de la cuenta en cada trade"],
              correctIndex: 1,
              explanation: "Fixed Fractional significa arriesgar siempre el mismo porcentaje (ej: 1%) del capital actual. Si la cuenta crece, el riesgo en dólares crece. Si baja, el riesgo en dólares baja automáticamente."
            },
            {
              question: "Por que NO debes usar siempre el mismo número de lotes?",
              options: ["Porque es ilegal", "Porque tu riesgo real cambia segun la distancia del Stop Loss", "Porque el broker no lo permite", "No hay ninguna razon, es perfectamente válido"],
              correctIndex: 1,
              explanation: "Con lotes fijos, si tu SL es de 20 pips arriesgas 200$, pero si tu SL es de 100 pips arriesgas 1,000$. Tu riesgo sería diferente en cada trade, lo cual es peligroso."
            }
          ],
          practicalExercise: "Crea tu propia tabla de position sizing. Con tu capital actual (o simulado), calcula el tamano de posición para: 1) EUR/USD con SL de 25 pips, 2) EUR/USD con SL de 75 pips, 3) GBP/USD con SL de 50 pips. Usa riesgo del 1%. Luego abre TradingView, identifica 3 setups potenciales, mide la distancia al SL lógico y calcula cuantos lotes usarias en cada uno."
        },

        // --------------------------------------------------------------------
        // LECCION 3-1-3: TU PLAN DE TRADING COMPLETO
        // --------------------------------------------------------------------
        {
          id: "3-1-3",
          title: "Tu Plan de Trading Completo (Plantilla)",
          duration: "45 min",
          content: `
<h2>Tu Plan de Trading Completo</h2>
<div style="display:flex;justify-content:center;margin:20px 0"><svg width="460" height="90" viewBox="0 0 460 90" style="background:#131722;border-radius:10px;border:1px solid #2a2a40"><text x="230" y="15" fill="white" font-size="10" text-anchor="middle" font-weight="bold">COMPONENTES DE UN PLAN DE TRADING</text><rect x="8" y="28" width="72" height="35" rx="5" fill="#3b82f615" stroke="#3b82f6"/><text x="44" y="44" fill="#3b82f6" font-size="7" text-anchor="middle" font-weight="bold">MERCADOS</text><text x="44" y="56" fill="#787b86" font-size="6" text-anchor="middle">Qué operar</text><rect x="86" y="28" width="72" height="35" rx="5" fill="#8b5cf615" stroke="#8b5cf6"/><text x="122" y="44" fill="#8b5cf6" font-size="7" text-anchor="middle" font-weight="bold">HORARIO</text><text x="122" y="56" fill="#787b86" font-size="6" text-anchor="middle">Cuándo</text><rect x="164" y="28" width="72" height="35" rx="5" fill="#26a69a15" stroke="#26a69a"/><text x="200" y="44" fill="#26a69a" font-size="7" text-anchor="middle" font-weight="bold">ESTRATEGIA</text><text x="200" y="56" fill="#787b86" font-size="6" text-anchor="middle">Cómo entrar</text><rect x="242" y="28" width="72" height="35" rx="5" fill="#ef535015" stroke="#ef5350"/><text x="278" y="44" fill="#ef5350" font-size="7" text-anchor="middle" font-weight="bold">RIESGO</text><text x="278" y="56" fill="#787b86" font-size="6" text-anchor="middle">Cuánto</text><rect x="320" y="28" width="72" height="35" rx="5" fill="#f59e0b15" stroke="#f59e0b"/><text x="356" y="44" fill="#f59e0b" font-size="7" text-anchor="middle" font-weight="bold">EMOCIONES</text><text x="356" y="56" fill="#787b86" font-size="6" text-anchor="middle">Reglas</text><rect x="398" y="28" width="54" height="35" rx="5" fill="#ec489915" stroke="#ec4899"/><text x="425" y="44" fill="#ec4899" font-size="7" text-anchor="middle" font-weight="bold">REVISIÓN</text><text x="425" y="56" fill="#787b86" font-size="6" text-anchor="middle">Mejora</text><text x="230" y="80" fill="#787b86" font-size="7" text-anchor="middle">Sin plan escrito = sin disciplina = sin rentabilidad</text></svg></div>

<div class="analogy-box">
<h3>La Analogia del Plan de Vuelo</h3>
<p>Ningun piloto despega sin un plan de vuelo. El plan dice exactamente: ruta, altitud, velocidad, combustible necesario, aeropuertos alternativos si hay emergencia. Un trader sin plan de trading es como un piloto que despega "a ver que pasa". Puedes tener suerte un par de veces, pero tarde o temprano te estrellas.</p>
</div>

<div class="warning-box">
<h4>La Estadistica Brutal</h4>
<p>Segun estudios de brokers regulados, el 95% de los traders que NO tienen un plan escrito pierden dinero. Entre los que SI tienen un plan escrito y lo siguen, la tasa de éxito sube al 40-50%. Tener un plan no garantiza ganar, pero NO tenerlo casi garantiza perder.</p>
</div>

<h3>SECCION 1: Informacion General</h3>

<div class="strategy-box">
<h4>Plantilla - Datos del Trader</h4>
<ul>
<li><strong>Nombre:</strong> [Tu nombre]</li>
<li><strong>Fecha de creacion del plan:</strong> [Fecha]</li>
<li><strong>Capital inicial:</strong> [Cantidad]</li>
<li><strong>Broker:</strong> [Nombre del broker]</li>
<li><strong>Plataforma:</strong> [MT4/MT5/TradingView/cTrader]</li>
<li><strong>Estilo de trading:</strong> [Day trading / Swing trading / Scalping]</li>
<li><strong>Objetivo mensual:</strong> [Realista: 3-8% para empezar]</li>
<li><strong>Horas dedicadas al dia:</strong> [Cuantas horas puedes dedicar]</li>
</ul>
</div>

<h3>SECCION 2: Mercados y Horarios</h3>

<div class="strategy-box">
<h4>Plantilla - Mercados a Operar</h4>
<ul>
<li><strong>Mercados principales:</strong> [Ej: EUR/USD, GBP/USD, US500]</li>
<li><strong>Mercados secundarios:</strong> [Ej: USD/JPY, XAUUSD]</li>
<li><strong>Mercados PROHIBIDOS:</strong> [Ej: Pares exoticos, criptos de baja capitalizacion]</li>
</ul>
<p><strong>Horario de operación:</strong></p>
<ul>
<li><strong>Sesion principal:</strong> [Ej: London-NY overlap 15:00-19:00 hora local]</li>
<li><strong>Analisis pre-mercado:</strong> [Ej: 14:30-15:00]</li>
<li><strong>Revision post-mercado:</strong> [Ej: 19:00-19:30]</li>
<li><strong>Dias de operación:</strong> [Ej: Lunes a Viernes, excepto primer viernes del mes (NFP)]</li>
</ul>
</div>

<div class="highlight-box yellow">
<h4>Consejo: Especializa tus Mercados</h4>
<p>No intentes operar 15 pares diferentes. Elige 2-3 y conviertete en EXPERTO en esos mercados. Conoceras sus patrones, su volatilidad típica, como reaccionan a noticias. Es mejor ser maestro de 2 pares que aprendiz de 15.</p>
</div>

<h3>SECCION 3: Reglas de Estrategia</h3>

<div class="strategy-box">
<h4>Plantilla - Reglas de Entrada</h4>
<p><strong>Setup alcista (BUY) - TODOS estos criterios deben cumplirse:</strong></p>
<ol>
<li>[Ej: Precio por encima de la media movil de 200 periodos]</li>
<li>[Ej: Retroceso a zona de soporte/demanda identificada en H4]</li>
<li>[Ej: Vela de rechazo o patrón de confirmación en M15]</li>
<li>[Ej: RSI por encima de 50 pero no en sobrecompra]</li>
<li>[Ej: No hay noticias de alto impacto en las proximas 2 horas]</li>
</ol>
<p><strong>Setup bajista (SELL) - TODOS estos criterios deben cumplirse:</strong></p>
<ol>
<li>[Condiciones inversas a las de compra]</li>
</ol>
<p><strong>Regla de ORO:</strong> Si falta UNA sola condicion, NO entro. Sin excepciones.</p>
</div>

<div class="strategy-box">
<h4>Plantilla - Reglas de Salida</h4>
<p><strong>Stop Loss:</strong></p>
<ul>
<li>[Ej: Debajo del último swing low + 5 pips de margen para BUY]</li>
<li>[Ej: Maximo SL: 50 pips para day trading, 150 pips para swing]</li>
<li>[Ej: NUNCA mover el SL más lejos del precio. Solo acercarlo (trailing)]</li>
</ul>
<p><strong>Take Profit:</strong></p>
<ul>
<li>[Ej: Siguiente zona de resistencia/oferta]</li>
<li>[Ej: Minimo R:R de 1:2]</li>
<li>[Ej: Cerrar 50% en TP1 (1:1), mover SL a breakeven, dejar el resto correr a TP2 (1:2+)]</li>
</ul>
<p><strong>Gestion activa:</strong></p>
<ul>
<li>[Ej: Mover SL a breakeven cuando el trade va +1R a favor]</li>
<li>[Ej: Usar trailing stop de 20 pips cuando va +2R a favor]</li>
<li>[Ej: Cerrar manualmente si aparece señal contraria clara]</li>
</ul>
</div>

<h3>SECCION 4: Reglas de Gestion de Riesgo</h3>

<div class="strategy-box">
<h4>Plantilla - Riesgo</h4>
<ul>
<li><strong>Riesgo por operación:</strong> 1% del capital actual (MAXIMO 2% en A+ setups)</li>
<li><strong>Maximo operaciones simultaneas:</strong> 3</li>
<li><strong>Maximo operaciones por dia:</strong> 3 (ganadoras o perdedoras)</li>
<li><strong>Drawdown diario máximo:</strong> 3% (si llego, paro el dia)</li>
<li><strong>Drawdown semanal máximo:</strong> 5% (si llego, paro la semana)</li>
<li><strong>Drawdown mensual máximo:</strong> 10% (si llego, paro y reviso todo)</li>
<li><strong>Correlacion:</strong> No abrir más de 2 posiciones en la misma dirección en pares correlacionados</li>
<li><strong>Noticias:</strong> No operar 30 minutos antes/despues de noticias de alto impacto (NFP, FOMC, BCE)</li>
</ul>
</div>

<h3>SECCION 5: Reglas Emocionales</h3>

<div class="highlight-box red">
<h4>Plantilla - Control Emocional</h4>
<p><strong>PARO DE OPERAR inmediatamente si:</strong></p>
<ul>
<li>Pierdo 2 operaciones seguidas en el dia</li>
<li>Siento la urgencia de "recuperar" una perdida</li>
<li>Me siento ansioso, frustrado o euforia excesiva</li>
<li>No dormi bien la noche anterior (menos de 6 horas)</li>
<li>Tengo problemas personales que afectan mi concentracion</li>
<li>Estoy operando por aburrimiento, no por setup válido</li>
<li>Estoy tentado a operar sin que se cumplan TODAS mis reglas</li>
</ul>
</div>

<div class="strategy-box">
<h4>Plantilla - Rutina Diaria del Trader</h4>
<p><strong>ANTES del mercado (30 min):</strong></p>
<ol>
<li>Revisar calendario economico (ForexFactory, Investing.com)</li>
<li>Analisis de los pares en timeframes superiores (H4, D1)</li>
<li>Marcar zonas de soporte/resistencia clave</li>
<li>Definir posibles setups para el dia</li>
<li>Revisar estado emocional: "Estoy preparado para operar hoy?"</li>
</ol>
<p><strong>DURANTE el mercado:</strong></p>
<ol>
<li>Esperar a que el setup aparezca (PACIENCIA)</li>
<li>Verificar que se cumplen TODAS las reglas de entrada</li>
<li>Calcular position sizing antes de entrar</li>
<li>Ejecutar con SL y TP puestos</li>
<li>NO tocar la operación una vez abierta (excepto trailing stop)</li>
</ol>
<p><strong>DESPUES del mercado (15-30 min):</strong></p>
<ol>
<li>Registrar todas las operaciones en el diario</li>
<li>Capturar screenshots del antes, durante y despues</li>
<li>Evaluar: "Segui mi plan? Si/No. Por que?"</li>
<li>Nota emocional del dia</li>
<li>Apagar la computadora y desconectar</li>
</ol>
</div>

<h3>SECCION 6: Revision y Mejora Continua</h3>

<div class="strategy-box">
<h4>Plantilla - Revisiones Periodicas</h4>
<p><strong>Revision semanal (Domingo, 1 hora):</strong></p>
<ul>
<li>Cuantos trades tome esta semana?</li>
<li>Cuantos ganadores vs perdedores?</li>
<li>Segui mi plan en cada operación?</li>
<li>Cual fue mi mejor trade y por que?</li>
<li>Cual fue mi peor trade y que puedo aprender?</li>
<li>Drawdown de la semana?</li>
</ul>
<p><strong>Revision mensual (Primer domingo del mes, 2-3 horas):</strong></p>
<ul>
<li>Resultado total del mes ($ y %)</li>
<li>Winrate y ratio R:R promedio</li>
<li>Maximo drawdown del mes</li>
<li>Errores repetidos (patrones emocionales)</li>
<li>Que cambiar/mejorar para el próximo mes?</li>
<li>Necesito ajustar alguna regla del plan?</li>
</ul>
<p><strong>Revision trimestral:</strong></p>
<ul>
<li>Revision completa de la estrategia</li>
<li>Decidir si escalar capital o mantener</li>
<li>Actualizar el plan con lo aprendido</li>
</ul>
</div>

<div class="highlight-box green">
<h4>El Plan es un Documento VIVO</h4>
<p>Tu plan de trading no es un documento que escribes una vez y olvidas. Es un documento vivo que evoluciona contigo. Cada mes deberías revisarlo y ajustarlo basado en tus resultados y experiencias. PERO: no lo cambies impulsivamente despues de una mala semana. Los cambios deben basarse en datos de al menos 30-50 operaciones.</p>
</div>

<div class="warning-box">
<h4>La Regla de las 50 Operaciones</h4>
<p>No juzgues tu estrategia ni tu plan con 5 o 10 trades. Necesitas MINIMO 50 operaciones para tener una muestra estadisticamente relevante. Si despues de 50 trades aplicando tu plan fielmente los resultados no son buenos, entonces ajusta. No antes.</p>
</div>`,
          keyPoints: [
            "Un plan de trading escrito es INDISPENSABLE - el 95% de traders sin plan pierden dinero",
            "El plan debe cubrir: mercados, horarios, reglas de entrada/salida, riesgo y emociones",
            "Las reglas emocionales son tan importantes como las reglas tecnicas",
            "Rutina diaria: análisis pre-mercado, ejecucion disciplinada, revisión post-mercado",
            "Revisiones semanales, mensuales y trimestrales para mejora continua",
            "No cambiar el plan impulsivamente - esperar mínimo 50 operaciones antes de ajustar"
          ],
          quiz: [
            {
              question: "Cual es el propósito principal de un plan de trading?",
              options: ["Impresionar a otros traders", "Eliminar decisiones emocionales y operar con reglas claras", "Cumplir requisitos del broker", "Solo es necesario para cuentas grandes"],
              correctIndex: 1,
              explanation: "El plan de trading elimina la toma de decisiones emocional. Todo esta predefinido: cuando entrar, cuando salir, cuanto arriesgar. Asi operas como un robot disciplinado, no como un apostador."
            },
            {
              question: "Cuantas operaciones necesitas para evaluar si tu plan funciona?",
              options: ["5 operaciones", "10 operaciones", "Minimo 50 operaciones", "Solo 1 operación perfecta"],
              correctIndex: 2,
              explanation: "Se necesitan mínimo 50 operaciones para tener una muestra estadisticamente relevante. En menos de eso, los resultados pueden ser suerte o mala suerte, no reflejo real de tu sistema."
            },
            {
              question: "Que debes hacer si pierdes 2 operaciones seguidas en un dia?",
              options: ["Abrir un trade más grande para recuperar", "Seguir operando normal", "Parar de operar por el dia y revisar", "Cambiar de estrategia inmediatamente"],
              correctIndex: 2,
              explanation: "El plan dice: si pierdes 2 seguidas, paras. Esto previene el revenge trading (operar para recuperar perdidas), que es uno de los errores más destructivos en trading."
            },
            {
              question: "Con que frecuencia debes revisar y actualizar tu plan?",
              options: ["Nunca, una vez escrito es definitivo", "Cada dia", "Revision semanal rápida, mensual profunda, trimestral completa", "Solo cuando pierdes dinero"],
              correctIndex: 2,
              explanation: "El plan es un documento vivo. Revision semanal rápida para trackear, mensual profunda para analizar, trimestral para ajustes estrategicos. Los cambios deben basarse en datos, no emociones."
            }
          ],
          practicalExercise: "TAREA OBLIGATORIA: Copia la plantilla de esta lección y completa CADA seccion con tus propios datos. No dejes NADA en blanco. Si aun no tienes estrategia definida, escribe las reglas generales que planeas seguir. Imprime tu plan y ponlo junto a tu pantalla de trading. Antes de cada operación, preguntate: 'Esto cumple con mi plan?'. Si la respuesta es no, no operes."
        }
      ]
    },

    // ========================================================================
    // MODULO 3-2: PSICOLOGIA DEL TRADING
    // ========================================================================
    {
      id: "mod-3-2",
      title: "Psicologia del Trading",
      description: "Domina tu mente para dominar el mercado - la diferencia entre traders rentables y perdedores",
      icon: "\u{1F9E0}",
      color: "#EF4444",
      lessons: [
        // --------------------------------------------------------------------
        // LECCION 3-2-1: LOS 7 ENEMIGOS PSICOLOGICOS
        // --------------------------------------------------------------------
        {
          id: "3-2-1",
          title: "Los 7 Enemigos Psicologicos del Trader",
          duration: "40 min",
          content: `
<h2>Los 7 Enemigos Psicológicos del Trader</h2>

<div style="display:flex;justify-content:center;margin:20px 0"><svg width="460" height="100" viewBox="0 0 460 100" style="background:#131722;border-radius:12px;border:1px solid #2a2a40"><text x="230" y="16" fill="white" font-size="10" text-anchor="middle" font-weight="bold">LOS 7 ENEMIGOS DEL TRADER</text><rect x="10" y="28" width="55" height="38" rx="6" fill="#fbbf2415" stroke="#fbbf24"/><text x="37" y="45" fill="#fbbf24" font-size="7" text-anchor="middle" font-weight="bold">MIEDO</text><text x="37" y="58" fill="#787b86" font-size="6" text-anchor="middle">No entrar</text><rect x="72" y="28" width="55" height="38" rx="6" fill="#f9731615" stroke="#f97316"/><text x="99" y="45" fill="#f97316" font-size="7" text-anchor="middle" font-weight="bold">CODICIA</text><text x="99" y="58" fill="#787b86" font-size="6" text-anchor="middle">No salir</text><rect x="134" y="28" width="55" height="38" rx="6" fill="#ef535015" stroke="#ef5350"/><text x="161" y="45" fill="#ef5350" font-size="7" text-anchor="middle" font-weight="bold">VENGANZA</text><text x="161" y="58" fill="#787b86" font-size="6" text-anchor="middle">Recuperar</text><rect x="196" y="28" width="55" height="38" rx="6" fill="#ec489915" stroke="#ec4899"/><text x="223" y="45" fill="#ec4899" font-size="7" text-anchor="middle" font-weight="bold">FOMO</text><text x="223" y="58" fill="#787b86" font-size="6" text-anchor="middle">Perseguir</text><rect x="258" y="28" width="55" height="38" rx="6" fill="#8b5cf615" stroke="#8b5cf6"/><text x="285" y="45" fill="#8b5cf6" font-size="7" text-anchor="middle" font-weight="bold">SOBRE-OP</text><text x="285" y="58" fill="#787b86" font-size="6" text-anchor="middle">Demasiado</text><rect x="320" y="28" width="62" height="38" rx="6" fill="#6366f115" stroke="#6366f1"/><text x="351" y="45" fill="#6366f1" font-size="7" text-anchor="middle" font-weight="bold">IMPACIENCIA</text><text x="351" y="58" fill="#787b86" font-size="6" text-anchor="middle">Anticipar</text><rect x="389" y="28" width="62" height="38" rx="6" fill="#14b8a615" stroke="#14b8a6"/><text x="420" y="45" fill="#14b8a6" font-size="7" text-anchor="middle" font-weight="bold">ESPERANZA</text><text x="420" y="58" fill="#787b86" font-size="6" text-anchor="middle">No cortar</text><text x="230" y="88" fill="#ef5350" font-size="9" text-anchor="middle" font-weight="bold">Antídoto: REGLAS escritas + DIARIO + DISCIPLINA</text></svg></div>

<div class="analogy-box">
<h3>La Analogia del Guerrero Interior</h3>
<p>Todo trader libra DOS batallas simultaneas: una contra el mercado y otra contra si mismo. La batalla contra el mercado la puedes ganar con estrategia y análisis técnico. Pero la batalla contra ti mismo es mucho más difícil, porque tu peor enemigo conoce todos tus puntos debiles. Los 7 enemigos que vas a conocer aquí son los responsables del 80% de las perdidas en trading. Identificarlos es el primer paso para vencerlos.</p>
</div>

<div class="warning-box">
<h4>Dato Clave</h4>
<p>Mark Douglas, autor de "Trading in the Zone", estudio a miles de traders durante decadas y concluyo: "El trading es 80% psicología y 20% estrategia." Los traders exitosos no son necesariamente los más inteligentes ni los que tienen mejores indicadores. Son los que mejor controlan sus emociones.</p>
</div>

<h3>ENEMIGO #1: EL MIEDO</h3>

<div class="psychology-card fear">
<h4>El Miedo - El Paralizador</h4>
<p><strong>Como se manifiesta:</strong></p>
<ul>
<li>No entras a un trade aunque tu setup sea perfecto porque "puede que pierda"</li>
<li>Cierras operaciones ganadoras demasiado pronto por miedo a que se gire</li>
<li>Reduces tu tamano de posición hasta niveles insignificantes</li>
<li>Despues de una racha perdedora, no puedes apretar el boton de compra/venta</li>
<li>Analizas y analizas pero nunca ejecutas ("paralisis por análisis")</li>
</ul>
<p><strong>Por que aparece:</strong> Tu cerebro primitivo (amigdala) asocia perder dinero con peligro de supervivencia. Cuando ves una perdida, se activa la misma respuesta que si vieras un depredador. Es una reaccion biologica, NO una debilidad personal.</p>
</div>

<div class="highlight-box green">
<h4>SOLUCION al Miedo</h4>
<ol>
<li><strong>Acepta la perdida ANTES de entrar:</strong> Antes de cada trade, di en voz alta: "Estoy dispuesto a perder [X]$ en esta operación." Si no puedes decirlo, reduce el tamano.</li>
<li><strong>Piensa en probabilidades:</strong> No estás arriesgando dinero, estas ejecutando una probabilidad. Como un casino, pierdes a veces pero ganas a largo plazo.</li>
<li><strong>Usa alertas automaticas:</strong> Si la paralisis es muy fuerte, configura alertas que te avisen cuando el precio llegue a tu zona y usa ordenes pendientes en vez de ordenes de mercado.</li>
<li><strong>Empieza con cuenta demo o muy pequena:</strong> Opera con cantidades que no te generen ansiedad mientras desarrollas confianza.</li>
<li><strong>Enfocate en el PROCESO, no en el resultado:</strong> La pregunta no es "gane o perdi?" sino "segui mi plan?"</li>
</ol>
</div>

<h3>ENEMIGO #2: LA AVARICIA (GREED)</h3>

<div class="psychology-card greed">
<h4>La Avaricia - El Insaciable</h4>
<p><strong>Como se manifiesta:</strong></p>
<ul>
<li>Mueves tu Take Profit más lejos cuando el trade va a tu favor ("seguro que sigue subiendo")</li>
<li>Aumentas el tamano de posición despues de ganar 2-3 trades ("estoy en racha")</li>
<li>No cierras una posición ganadora porque quieres "exprimir cada pip"</li>
<li>Arriesgas 5-10% en vez de 1% porque "este setup es seguro"</li>
<li>Ves que ganaste 200$ y piensas "podría haber sido 2,000$ si hubiera metido más"</li>
</ul>
<p><strong>Por que aparece:</strong> La dopamina. Tu cerebro libera dopamina cuando ganas, y quiere MAS. Es la misma quimica que la adiccion al juego. Cuanto más ganas, más quieres, y empiezas a tomar riesgos irracionales.</p>
</div>

<div class="highlight-box green">
<h4>SOLUCION a la Avaricia</h4>
<ol>
<li><strong>TP y SL se ponen ANTES de entrar, y NO se mueven:</strong> Define tu salida con el análisis frio, no con la emocion del momento.</li>
<li><strong>Usa la regla del "Suficiente":</strong> Define un objetivo diario. Si lo alcanzas, APAGA la pantalla. No sigas.</li>
<li><strong>Mantente fiel a tu position sizing:</strong> No importa cuantos trades hayas ganado, el próximo es 1% de riesgo. Sin excepciones.</li>
<li><strong>Recuerda las rachas:</strong> Toda racha ganadora TERMINA. No dejes que la euforia destruya lo que construiste.</li>
</ol>
</div>

<h3>ENEMIGO #3: EL REVENGE TRADING (Operaciones de Venganza)</h3>

<div class="psychology-card revenge">
<h4>Revenge Trading - El Destructor de Cuentas</h4>
<p><strong>Como se manifiesta:</strong></p>
<ul>
<li>Pierdes un trade y INMEDIATAMENTE abres otro para "recuperar"</li>
<li>Aumentas el tamano de la siguiente posición para recuperar más rápido</li>
<li>Abandonas tu estrategia y empiezas a operar por impulso</li>
<li>Sientes ira contra el mercado, como si fuera "personal"</li>
<li>Operas fuera de tu horario habitual porque "necesitas recuperar"</li>
</ul>
<p><strong>Por que aparece:</strong> La aversión a la perdida. Estudios muestran que perder 100$ duele EMOCIONALMENTE el doble que ganar 100$. Tu cerebro quiere eliminar ese dolor inmediatamente, y la única forma que conoce es "recuperar" el dinero. Pero en estado emocional, tus decisiones son PESIMAS.</p>
</div>

<div class="highlight-box red">
<h4>SOLUCION al Revenge Trading</h4>
<p><strong>Esta es la solucion más simple y efectiva del mundo:</strong></p>
<ol>
<li><strong>REGLA ABSOLUTA: 2 perdidas seguidas = paras el dia.</strong> No es negociable. No "un trade más". PARAS.</li>
<li><strong>Levantate de la silla fisicamente.</strong> Sal a caminar 15-30 minutos. Lejos de la pantalla.</li>
<li><strong>Pon una nota junto a tu monitor:</strong> "REVENGE TRADING = DESTRUCCION. Respira. Apaga. Vuelve mañana."</li>
<li><strong>Acepta que la perdida ya ocurrio.</strong> El dinero que perdiste NO existe. No hay nada que "recuperar". Cada trade es independiente.</li>
</ol>
</div>

<h3>ENEMIGO #4: FOMO (Fear Of Missing Out)</h3>

<div class="psychology-card fomo">
<h4>FOMO - El Miedo a Perderse la Oportunidad</h4>
<p><strong>Como se manifiesta:</strong></p>
<ul>
<li>Ves que un par subio 200 pips y entras a la carrera sin análisis ("no me lo quiero perder")</li>
<li>Entras tarde a un movimiento que ya ocurrio</li>
<li>Ves a otros traders en redes sociales presumir ganancias y entras en panico por no estar en ese trade</li>
<li>Abres un trade porque "el mercado se esta moviendo" aunque no hay setup</li>
<li>Sientes ansiedad cuando no tienes operaciones abiertas</li>
</ul>
<p><strong>Por que aparece:</strong> Instinto social de manada. Tu cerebro primitivo interpreta "todos estan ganando menos yo" como exclusion del grupo, lo cual en la prehistoria significaba muerte. Absurdo en trading, pero tu cerebro no distingue.</p>
</div>

<div class="highlight-box green">
<h4>SOLUCION al FOMO</h4>
<ol>
<li><strong>El mercado SIEMPRE da otra oportunidad.</strong> Si perdiste este movimiento, habra otro mañana. Y pasado. Y la semana que viene. SIEMPRE.</li>
<li><strong>Si el tren ya salio, NO corras detras.</strong> Espera el siguiente. Entrar tarde es la forma más comun de comprar en el máximo.</li>
<li><strong>Deja de seguir "gurus" en redes sociales.</strong> El 90% exageran o mienten sobre sus resultados. Compararte con ellos es toxico.</li>
<li><strong>Recuerda: no operar ES una operación.</strong> A veces la mejor decisión es no hacer nada y preservar tu capital para cuando SI aparezca tu setup.</li>
</ol>
</div>

<h3>ENEMIGO #5: OVERTRADING (Sobreoperar)</h3>

<div class="psychology-card overtrading">
<h4>Overtrading - El Agotador</h4>
<p><strong>Como se manifiesta:</strong></p>
<ul>
<li>Abres 10-15 trades al dia cuando tu plan dice 2-3</li>
<li>Operas en timeframes muy bajos buscando "acción" constante</li>
<li>Sientes que si no estas en el mercado, estas perdiendo oportunidades</li>
<li>Tomas setups mediocres porque "algo es mejor que nada"</li>
<li>Tu cuenta de broker muestra spreads/comisiones enormes al final del mes</li>
</ul>
<p><strong>Por que aparece:</strong> Adiccion a la acción y la dopamina. Cada operación es una "apuesta" que genera excitacion. Tambien puede ser aburrimiento o la creencia falsa de que "más trades = más dinero".</p>
</div>

<div class="highlight-box green">
<h4>SOLUCION al Overtrading</h4>
<ol>
<li><strong>Pon un limite DIARIO de operaciones en tu plan.</strong> 2-3 es suficiente. Cuando llegas al limite, PARAS.</li>
<li><strong>Calidad > Cantidad.</strong> Es mejor 1 trade perfecto que 10 trades mediocres. Los sniper traders (1-2 trades al dia) son consistentemente más rentables.</li>
<li><strong>Calcula cuanto pagas en spreads/comisiones.</strong> Si abres 15 trades al dia con 2 pips de spread, son 30 pips de costos ANTES de ganar nada.</li>
<li><strong>Busca un hobby fuera del trading.</strong> Si operas por aburrimiento, necesitas otra actividad. Gimnasio, lectura, paseo. El trading no es entretenimiento.</li>
</ol>
</div>

<h3>ENEMIGO #6: LA IMPACIENCIA</h3>

<div class="psychology-card impatience">
<h4>La Impaciencia - El Saboteador Silencioso</h4>
<p><strong>Como se manifiesta:</strong></p>
<ul>
<li>Entras antes de que tu setup se complete porque "ya casi esta"</li>
<li>Cierras un trade ganador a los 5 minutos porque no puedes esperar a que llegue al TP</li>
<li>Cambias de estrategia cada semana porque "esta no da resultados rápido"</li>
<li>Quieres ser rentable en 2 semanas y te frustras cuando no lo logras</li>
<li>Mueves tu SL para que no te saque antes de tiempo, y luego pierdes más</li>
</ul>
<p><strong>Por que aparece:</strong> Vivimos en la era de la gratificacion instantanea. Netflix, delivery en 30 min, likes en redes. Tu cerebro espera resultados inmediatos en todo, incluido el trading. Pero el trading requiere paciencia de MESES y ANOS.</p>
</div>

<div class="highlight-box green">
<h4>SOLUCION a la Impaciencia</h4>
<ol>
<li><strong>Acepta el timeline real:</strong> 6-12 meses de aprendizaje. 1-2 años para ser consistente. No hay atajos.</li>
<li><strong>Usa alertas de precio:</strong> En vez de mirar la pantalla esperando que el precio llegue, configura alertas. Te avisan cuando es hora de actuar.</li>
<li><strong>"Let the trade work":</strong> Una vez que entras con SL y TP, cierra la plataforma y vuelve en 1 hora. El trade no necesita que lo mires.</li>
<li><strong>Opera en timeframes más altos:</strong> H4 y D1 requieren menos tiempo frente a la pantalla y generan menos ansiedad que M1 y M5.</li>
</ol>
</div>

<h3>ENEMIGO #7: LA ESPERANZA (HOPE)</h3>

<div class="psychology-card hope">
<h4>La Esperanza - El Asesino Disfrazado</h4>
<p><strong>Como se manifiesta:</strong></p>
<ul>
<li>"Ya va a girar, ya va a girar..." mientras la operación cae 100 pips en tu contra</li>
<li>Eliminas o mueves tu Stop Loss porque "seguro que se recupera"</li>
<li>Mantienes una operación perdedora durante DIAS esperando un milagro</li>
<li>"Este trade es diferente" - la frase más peligrosa en trading</li>
<li>Ignoras las señales de que tu análisis fue incorrecto</li>
</ul>
<p><strong>Por que aparece:</strong> El sesgo de confirmación. Tu cerebro busca información que confirme lo que quieres creer (que el trade va a funcionar) e ignora la información contraria. Mas la incapacidad de aceptar que te equivocaste.</p>
</div>

<div class="highlight-box red">
<h4>SOLUCION a la Esperanza Toxica</h4>
<ol>
<li><strong>Tu Stop Loss es tu verdad.</strong> Si el precio llega a tu SL, tu análisis fue incorrecto. PUNTO. No hay discusion.</li>
<li><strong>La esperanza NO es una estrategia de trading.</strong> Si tu única razon para mantener un trade es "espero que se gire", SAL INMEDIATAMENTE.</li>
<li><strong>Preguntate:</strong> "Si no tuviera esta posición abierta, la abriria ahora?" Si la respuesta es no, CIERRA.</li>
<li><strong>Define el punto de invalidacion ANTES:</strong> Antes de entrar, decide exactamente que precio te demuestra que estabas equivocado. Ese es tu SL. Si llega, RESPETALO.</li>
</ol>
</div>

<div class="highlight-box purple">
<h4>RESUMEN: Mapa de los 7 Enemigos</h4>
<table style="width:100%; border-collapse:collapse;">
<tr style="border-bottom:2px solid rgba(0,0,0,0.2);"><th style="text-align:left; padding:8px;">Enemigo</th><th style="text-align:left; padding:8px;">Sintoma principal</th><th style="text-align:left; padding:8px;">Antidoto rápido</th></tr>
<tr style="border-bottom:1px solid rgba(0,0,0,0.1);"><td style="padding:8px;">Miedo</td><td style="padding:8px;">No ejecutas trades validos</td><td style="padding:8px;">Acepta la perdida antes de entrar</td></tr>
<tr style="border-bottom:1px solid rgba(0,0,0,0.1);"><td style="padding:8px;">Avaricia</td><td style="padding:8px;">Arriesgas demasiado o mueves el TP</td><td style="padding:8px;">TP fijo, no se toca</td></tr>
<tr style="border-bottom:1px solid rgba(0,0,0,0.1);"><td style="padding:8px;">Revenge Trading</td><td style="padding:8px;">Operas impulsivamente tras perder</td><td style="padding:8px;">2 perdidas = paras el dia</td></tr>
<tr style="border-bottom:1px solid rgba(0,0,0,0.1);"><td style="padding:8px;">FOMO</td><td style="padding:8px;">Entras a movimientos ya hechos</td><td style="padding:8px;">Siempre habra otro trade</td></tr>
<tr style="border-bottom:1px solid rgba(0,0,0,0.1);"><td style="padding:8px;">Overtrading</td><td style="padding:8px;">Demasiadas operaciones diarias</td><td style="padding:8px;">Maximo 2-3 trades/dia</td></tr>
<tr style="border-bottom:1px solid rgba(0,0,0,0.1);"><td style="padding:8px;">Impaciencia</td><td style="padding:8px;">Entras antes del setup, sales antes del TP</td><td style="padding:8px;">Usa alertas, cierra la pantalla</td></tr>
<tr><td style="padding:8px;">Esperanza</td><td style="padding:8px;">Mantienes perdedoras sin SL</td><td style="padding:8px;">SL es ley, no se mueve jamas</td></tr>
</table>
</div>`,
          keyPoints: [
            "Los 7 enemigos: Miedo, Avaricia, Revenge Trading, FOMO, Overtrading, Impaciencia y Esperanza",
            "El trading es 80% psicología y 20% estrategia segun Mark Douglas",
            "Revenge Trading es el destructor de cuentas #1: 2 perdidas seguidas = paras el dia",
            "FOMO te hace comprar en maximos - si el tren ya salio, espera el siguiente",
            "La esperanza NO es una estrategia: si tu única razon para mantener un trade es esperanza, sal",
            "Cada enemigo tiene soluciones practicas que puedes aplicar desde HOY"
          ],
          quiz: [
            {
              question: "Pierdes un trade y sientes urgencia de abrir otro inmediatamente para recuperar. Que enemigo es?",
              options: ["FOMO", "Avaricia", "Revenge Trading", "Impaciencia"],
              correctIndex: 2,
              explanation: "Esto es Revenge Trading: operar impulsivamente para 'vengar' una perdida. La solucion es parar despues de 2 perdidas seguidas."
            },
            {
              question: "Ves que el oro subio 500 pips y entras a comprar sin análisis porque no quieres perderte el movimiento. Que enemigo es?",
              options: ["FOMO", "Avaricia", "Miedo", "Esperanza"],
              correctIndex: 0,
              explanation: "FOMO (Fear Of Missing Out): entrar a un movimiento tarde porque tienes miedo de perderte la oportunidad. Resultado típico: compras en el máximo."
            },
            {
              question: "Tu trade va perdiendo 80 pips pero no cierras porque 'seguro que se gira'. Que enemigo es?",
              options: ["Miedo", "Impaciencia", "Esperanza", "Overtrading"],
              correctIndex: 2,
              explanation: "La Esperanza toxica: mantener una posición perdedora basandote en fe, no en análisis. La solucion es respetar el Stop Loss sin excepciones."
            },
            {
              question: "Cual es la regla más efectiva contra el Revenge Trading?",
              options: ["Meditar 1 hora", "2 perdidas seguidas = parar de operar el dia", "Operar con más capital", "Cambiar de broker"],
              correctIndex: 1,
              explanation: "La regla de las 2 perdidas es simple, clara y extremadamente efectiva. Previene la escalada emocional que destruye cuentas."
            }
          ],
          practicalExercise: "Durante 1 semana (en demo o real), lleva un 'diario emocional' junto a cada trade. Antes de abrir: 'Que emocion siento? Miedo, ansiedad, euforia, aburrimiento, urgencia?'. Despues del trade: 'Que emocion senti durante? Segui mi plan o la emocion me controlo?'. Al final de la semana, identifica CUAL de los 7 enemigos es tu mayor debilidad."
        },

        // --------------------------------------------------------------------
        // LECCION 3-2-2: EL DIARIO DE TRADING
        // --------------------------------------------------------------------
        {
          id: "3-2-2",
          title: "El Diario de Trading: Tu Arma Secreta",
          duration: "35 min",
          content: `
<h2>El Diario de Trading: Tu Arma Secreta</h2>
<div style="display:flex;justify-content:center;margin:20px 0"><svg width="400" height="90" viewBox="0 0 400 90" style="background:#131722;border-radius:10px;border:1px solid #2a2a40"><text x="200" y="15" fill="white" font-size="10" text-anchor="middle" font-weight="bold">MENTALIDAD: AMATEUR vs PROFESIONAL</text><rect x="10" y="28" width="185" height="38" rx="6" fill="#ef535010" stroke="#ef535044"/><text x="102" y="44" fill="#ef5350" font-size="8" text-anchor="middle" font-weight="bold">AMATEUR</text><text x="102" y="58" fill="#787b86" font-size="7" text-anchor="middle">"¿Cuánto gané hoy?"</text><rect x="205" y="28" width="185" height="38" rx="6" fill="#26a69a10" stroke="#26a69a44"/><text x="297" y="44" fill="#26a69a" font-size="8" text-anchor="middle" font-weight="bold">PROFESIONAL</text><text x="297" y="58" fill="#787b86" font-size="7" text-anchor="middle">"¿Seguí mi plan al 100%?"</text><text x="200" y="82" fill="#f59e0b" font-size="8" text-anchor="middle" font-weight="bold">PROCESO sobre RESULTADO = consistencia a largo plazo</text></svg></div>

<div style="display:flex;justify-content:center;margin:20px 0"><svg width="460" height="110" viewBox="0 0 460 110" style="background:#131722;border-radius:12px;border:1px solid #2a2a40"><text x="230" y="16" fill="white" font-size="10" text-anchor="middle" font-weight="bold">QUÉ REGISTRAR EN TU DIARIO DE TRADING</text><rect x="8" y="28" width="88" height="32" rx="5" fill="#3b82f615" stroke="#3b82f6"/><text x="52" y="42" fill="#3b82f6" font-size="7" text-anchor="middle" font-weight="bold">TRADE</text><text x="52" y="53" fill="#787b86" font-size="6" text-anchor="middle">Par, dirección, R:R</text><rect x="102" y="28" width="88" height="32" rx="5" fill="#26a69a15" stroke="#26a69a"/><text x="146" y="42" fill="#26a69a" font-size="7" text-anchor="middle" font-weight="bold">PRECIOS</text><text x="146" y="53" fill="#787b86" font-size="6" text-anchor="middle">Entry, SL, TP, Exit</text><rect x="196" y="28" width="88" height="32" rx="5" fill="#f59e0b15" stroke="#f59e0b"/><text x="240" y="42" fill="#f59e0b" font-size="7" text-anchor="middle" font-weight="bold">RESULTADO</text><text x="240" y="53" fill="#787b86" font-size="6" text-anchor="middle">P/L, pips, Win/Loss</text><rect x="290" y="28" width="82" height="32" rx="5" fill="#ef535015" stroke="#ef5350"/><text x="331" y="42" fill="#ef5350" font-size="7" text-anchor="middle" font-weight="bold">EMOCIONES</text><text x="331" y="53" fill="#787b86" font-size="6" text-anchor="middle">Antes y durante</text><rect x="378" y="28" width="74" height="32" rx="5" fill="#8b5cf615" stroke="#8b5cf6"/><text x="415" y="42" fill="#8b5cf6" font-size="7" text-anchor="middle" font-weight="bold">ERRORES</text><text x="415" y="53" fill="#787b86" font-size="6" text-anchor="middle">Qué mejorar</text><rect x="8" y="68" width="220" height="28" rx="5" fill="#14b8a610" stroke="#14b8a633"/><text x="118" y="86" fill="#14b8a6" font-size="8" text-anchor="middle">+ Captura de pantalla del gráfico</text><rect x="235" y="68" width="217" height="28" rx="5" fill="#ec489910" stroke="#ec489933"/><text x="343" y="86" fill="#ec4899" font-size="8" text-anchor="middle">+ Notas: ¿Seguí mi plan? ¿Por qué?</text></svg></div>

<div class="analogy-box">
<h3>La Analogia del Atleta de Elite</h3>
<p>Todo atleta olimpico revisa videos de sus entrenamientos y competiciones. Un corredor analiza cada zancada, cada curva, cada segundo. No para torturarse, sino para encontrar los detalles que le hacen ganar o perder. Tu diario de trading es exactamente eso: el video de tu rendimiento. Sin el, estas corriendo a ciegas. Con el, cada semana eres un trader un poco mejor.</p>
</div>

<div class="highlight-box blue">
<h4>El Dato que Convence</h4>
<p>Un estudio de la Universidad de California encontro que los traders que llevaban un diario detallado mejoraban su rentabilidad un 30% en promedio despues de 3 meses. Los que no, se mantenian iguales o empeoraban. El diario es literalmente el arma secreta que separa al 10% ganador del 90% perdedor.</p>
</div>

<h3>Que Registrar en Cada Operacion</h3>

<div class="strategy-box">
<h4>DATOS OBLIGATORIOS de cada trade</h4>
<table style="width:100%; border-collapse:collapse;">
<tr style="border-bottom:2px solid rgba(0,0,0,0.1);"><th style="text-align:left; padding:8px;">Campo</th><th style="text-align:left; padding:8px;">Ejemplo</th></tr>
<tr style="border-bottom:1px solid rgba(0,0,0,0.05);"><td style="padding:8px;"><strong>Fecha y hora</strong></td><td style="padding:8px;">2026-04-10, 16:30 UTC+2</td></tr>
<tr style="border-bottom:1px solid rgba(0,0,0,0.05);"><td style="padding:8px;"><strong>Par/Activo</strong></td><td style="padding:8px;">EUR/USD</td></tr>
<tr style="border-bottom:1px solid rgba(0,0,0,0.05);"><td style="padding:8px;"><strong>Direccion</strong></td><td style="padding:8px;">BUY (Long)</td></tr>
<tr style="border-bottom:1px solid rgba(0,0,0,0.05);"><td style="padding:8px;"><strong>Precio de entrada</strong></td><td style="padding:8px;">1.0852</td></tr>
<tr style="border-bottom:1px solid rgba(0,0,0,0.05);"><td style="padding:8px;"><strong>Stop Loss</strong></td><td style="padding:8px;">1.0820 (32 pips)</td></tr>
<tr style="border-bottom:1px solid rgba(0,0,0,0.05);"><td style="padding:8px;"><strong>Take Profit</strong></td><td style="padding:8px;">1.0916 (64 pips)</td></tr>
<tr style="border-bottom:1px solid rgba(0,0,0,0.05);"><td style="padding:8px;"><strong>Ratio R:R</strong></td><td style="padding:8px;">1:2</td></tr>
<tr style="border-bottom:1px solid rgba(0,0,0,0.05);"><td style="padding:8px;"><strong>Tamano posición</strong></td><td style="padding:8px;">0.31 lotes</td></tr>
<tr style="border-bottom:1px solid rgba(0,0,0,0.05);"><td style="padding:8px;"><strong>Riesgo en $</strong></td><td style="padding:8px;">100$ (1%)</td></tr>
<tr style="border-bottom:1px solid rgba(0,0,0,0.05);"><td style="padding:8px;"><strong>Razon de entrada</strong></td><td style="padding:8px;">Rechazo de zona de demanda H4 + vela martillo M15 + RSI divergencia</td></tr>
<tr style="border-bottom:1px solid rgba(0,0,0,0.05);"><td style="padding:8px;"><strong>Resultado</strong></td><td style="padding:8px;">TP alcanzado: +200$</td></tr>
<tr style="border-bottom:1px solid rgba(0,0,0,0.05);"><td style="padding:8px;"><strong>Segui mi plan?</strong></td><td style="padding:8px;">Si, 100%</td></tr>
<tr><td style="padding:8px;"><strong>Nota emocional</strong></td><td style="padding:8px;">Confiado al entrar. Un poco ansioso cuando retrocedio 10 pips pero no toque nada.</td></tr>
</table>
</div>

<h3>Los Screenshots: Tu Evidencia Visual</h3>

<div class="highlight-box yellow">
<h4>3 Screenshots por Trade</h4>
<ol>
<li><strong>ANTES de entrar:</strong> Captura del gráfico con tu análisis marcado (zonas, lineas, indicadores). Muestra POR QUE decidiste entrar.</li>
<li><strong>DURANTE (opcional):</strong> Si el trade tuvo un desarrollo interesante, captura como evoluciono.</li>
<li><strong>DESPUES de cerrar:</strong> Captura del resultado final. Donde entro, donde salio, que paso.</li>
</ol>
<p><strong>Truco:</strong> En TradingView, usa la herramienta de "Posicion Long/Short" para marcar tu entrada, SL y TP directamente en el gráfico. Luego captura.</p>
</div>

<h3>El Registro Emocional</h3>

<div class="highlight-box red">
<h4>La Escala Emocional del Trader</h4>
<p>Antes de cada trade, puntuate del 1 al 5 en estas emociones:</p>
<table style="width:100%; border-collapse:collapse;">
<tr style="border-bottom:2px solid rgba(0,0,0,0.1);"><th style="text-align:left; padding:6px;">Emocion</th><th style="text-align:left; padding:6px;">1</th><th style="text-align:left; padding:6px;">3</th><th style="text-align:left; padding:6px;">5</th></tr>
<tr style="border-bottom:1px solid rgba(0,0,0,0.05);"><td style="padding:6px;">Confianza</td><td style="padding:6px;">Inseguro</td><td style="padding:6px;">Normal</td><td style="padding:6px;">Muy seguro</td></tr>
<tr style="border-bottom:1px solid rgba(0,0,0,0.05);"><td style="padding:6px;">Calma</td><td style="padding:6px;">Ansioso</td><td style="padding:6px;">Tranquilo</td><td style="padding:6px;">Zen total</td></tr>
<tr style="border-bottom:1px solid rgba(0,0,0,0.05);"><td style="padding:6px;">Disciplina</td><td style="padding:6px;">Impulsivo</td><td style="padding:6px;">Controlado</td><td style="padding:6px;">Robotico</td></tr>
<tr><td style="padding:6px;">Paciencia</td><td style="padding:6px;">Ansioso por entrar</td><td style="padding:6px;">Esperando</td><td style="padding:6px;">Solo entro con setup A+</td></tr>
</table>
<p><strong>Zona óptima para operar:</strong> Confianza 3-4, Calma 3+, Disciplina 4+, Paciencia 3+</p>
<p><strong>NO operes si:</strong> Cualquier emocion en 1-2, o confianza en 5 (exceso de confianza es peligroso)</p>
</div>

<h3>Contexto del Mercado</h3>

<div class="strategy-box">
<h4>Apunta el Contexto de Cada Trade</h4>
<ul>
<li><strong>Tendencia general:</strong> Alcista / Bajista / Lateral en D1 y H4</li>
<li><strong>Sesion:</strong> Londres / NY / Solapamiento / Asia</li>
<li><strong>Noticias relevantes:</strong> Hubo alguna noticia importante? (NFP, FOMC, BCE, etc.)</li>
<li><strong>Volatilidad:</strong> Alta / Normal / Baja (puedes usar el ATR como referencia)</li>
<li><strong>Sentimiento del mercado:</strong> Risk-on (optimista) / Risk-off (pesimista)</li>
</ul>
</div>

<h3>La Revision Semanal</h3>

<div class="strategy-box">
<h4>Cada Domingo: 1 Hora de Revision</h4>
<p><strong>Estadisticas de la semana:</strong></p>
<ul>
<li>Total trades: ___</li>
<li>Ganadores: ___ | Perdedores: ___</li>
<li>Winrate: ___%</li>
<li>R:R promedio: ___</li>
<li>Resultado neto: ___$</li>
<li>Maximo drawdown de la semana: ___%</li>
</ul>
<p><strong>Preguntas de reflexion:</strong></p>
<ol>
<li>Segui mi plan en todas las operaciones? Si no, en cuales falle y por que?</li>
<li>Cual fue mi MEJOR trade de la semana? Que hice bien?</li>
<li>Cual fue mi PEOR trade? Que puedo aprender?</li>
<li>Hubo algun patrón emocional? (ej: siempre pierdo los lunes, o despues de almorzar)</li>
<li>Que voy a hacer DIFERENTE la próxima semana?</li>
</ol>
</div>

<h3>La Revision Mensual</h3>

<div class="strategy-box">
<h4>Primer Domingo del Mes: 2-3 Horas de Analisis Profundo</h4>
<p><strong>Estadisticas del mes:</strong></p>
<ul>
<li>Total trades del mes</li>
<li>Resultado neto en $ y %</li>
<li>Winrate por par/activo</li>
<li>Winrate por sesión (Londres, NY, etc.)</li>
<li>Winrate por dia de la semana</li>
<li>Winrate por tipo de setup</li>
<li>R:R promedio real (no el planeado, el REAL)</li>
<li>Mayor ganancia en un solo trade</li>
<li>Mayor perdida en un solo trade</li>
<li>Racha maxima de perdidas consecutivas</li>
</ul>
</div>

<h3>Patrones a Buscar en tu Diario</h3>

<div class="grid-cards">
<div class="card">
<h4>Patrones de Horario</h4>
<p>"Gano más en sesión de Londres que en NY." "Pierdo consistentemente despues de las 18:00." Esto te dice CUANDO eres más efectivo.</p>
</div>
<div class="card">
<h4>Patrones de Par/Activo</h4>
<p>"Mi winrate en EUR/USD es 55% pero en GBP/JPY es 30%." Esto te dice DONDE eres más efectivo. Deja de operar lo que no te funciona.</p>
</div>
<div class="card">
<h4>Patrones Emocionales</h4>
<p>"Cuando mi confianza esta en 5 (excesiva), pierdo el 70% de las veces." "Despues de 2 ganadores seguidos, overtrading." Esto revela tus trampas emocionales.</p>
</div>
<div class="card">
<h4>Patrones de Setup</h4>
<p>"Los trades en retroceso a demanda tienen 60% winrate, pero las rupturas solo 35%." Esto te dice QUE tipo de operaciones te funcionan mejor.</p>
</div>
</div>

<div class="highlight-box green">
<h4>Herramientas Recomendadas para tu Diario</h4>
<ul>
<li><strong>Google Sheets / Excel:</strong> Gratis, flexible, puedes crear gráficos de rendimiento. La opcion más accesible.</li>
<li><strong>Notion:</strong> Plantillas bonitas, fácil de organizar, permite incrustar imagenes.</li>
<li><strong>Edgewonk:</strong> Software especializado en diarios de trading. Caro pero muy completo. Calcula todas las estadisticas automáticamente.</li>
<li><strong>TradeZella / Tradervue:</strong> Plataformas online especializadas. Importan trades automáticamente de tu broker.</li>
<li><strong>Cuaderno fisico:</strong> Si, un cuaderno de papel también funciona. Escribir a mano fuerza la reflexion.</li>
</ul>
</div>

<div class="warning-box">
<h4>El Error Mas Comun con el Diario</h4>
<p>Empezar con mucha motivación y dejarlo despues de 2 semanas. El diario solo funciona si es CONSISTENTE. Mejor registrar poco pero todos los dias que hacer un diario super detallado que abandonas al mes. Empieza simple: par, dirección, entrada, SL, TP, resultado, y una nota emocional. 2 minutos por trade. Luego lo expandes.</p>
</div>`,
          keyPoints: [
            "El diario de trading mejora la rentabilidad un 30% en promedio segun estudios",
            "Registrar datos obligatorios: par, entrada, SL, TP, tamano, resultado y emocion",
            "3 screenshots por trade: antes de entrar, durante (opcional) y despues de cerrar",
            "Revision semanal (1 hora) y mensual (2-3 horas) para encontrar patrones",
            "Buscar patrones de horario, activo, emociones y tipo de setup en tus datos",
            "Consistencia > Perfeccion: mejor un diario simple diario que uno detallado que abandonas"
          ],
          quiz: [
            {
              question: "Cual es el beneficio PRINCIPAL de llevar un diario de trading?",
              options: ["Presumir ante otros traders", "Identificar patrones en tu operativa y mejorar sistematicamente", "Es requisito del broker", "Solo sirve para impuestos"],
              correctIndex: 1,
              explanation: "El diario te permite identificar patrones (que funciona, que no, cuando operas mejor, que emociones te sabotean) y mejorar basandote en datos reales, no en opiniones."
            },
            {
              question: "Que información emocional debes registrar?",
              options: ["No es necesario registrar emociones", "Solo si te sientes mal", "Estado emocional antes, durante y despues del trade con puntuacion", "Solo la emocion despues del resultado"],
              correctIndex: 2,
              explanation: "Registrar emociones antes, durante y despues permite correlacionar tu estado emocional con tus resultados. Muchos traders descubren que sus peores trades coinciden con estados emocionales especificos."
            },
            {
              question: "Con que frecuencia debes hacer revisión profunda de tu diario?",
              options: ["Diariamente", "Semanalmente (rápida) y mensualmente (profunda)", "Solo cuando pierdes dinero", "Una vez al año"],
              correctIndex: 1,
              explanation: "Revision semanal rápida (1h) para trackear, revisión mensual profunda (2-3h) para analizar estadisticas, patrones y hacer ajustes."
            },
            {
              question: "Descubres en tu diario que pierdes el 70% de los trades en GBP/JPY pero ganas el 60% en EUR/USD. Que haces?",
              options: ["Operar más GBP/JPY para mejorar", "Dejar de operar GBP/JPY y enfocarte en EUR/USD", "Ignorar el dato", "Operar ambos por igual"],
              correctIndex: 1,
              explanation: "Si los datos muestran consistentemente que un par no te funciona, lo inteligente es dejar de operarlo y enfocarte donde SI tienes ventaja. El diario te da esta información vital."
            }
          ],
          practicalExercise: "Crea tu diario de trading HOY. Usa Google Sheets o Excel. Haz columnas para: Fecha, Par, Direccion, Entrada, SL, TP, R:R, Lotes, Riesgo$, Resultado$, Segui plan (Si/No), Emocion pre-trade (1-5), Nota emocional. Registra tus proximas 20 operaciones (demo o real). Al final, calcula tu winrate, R:R promedio y busca patrones. Este ejercicio vale más que 100 horas viendo videos de YouTube."
        },

        // --------------------------------------------------------------------
        // LECCION 3-2-3: MENTALIDAD DE TRADER PROFESIONAL
        // --------------------------------------------------------------------
        {
          id: "3-2-3",
          title: "Mentalidad de Trader Profesional",
          duration: "40 min",
          content: `
<h2>Mentalidad de Trader Profesional</h2>

<div class="analogy-box">
<h3>La Analogia del Jugador de Poker Profesional</h3>
<p>Un jugador profesional de poker no se enfada cuando pierde una mano. No se emociona demasiado cuando gana un bote grande. Sabe que en una noche puede perder incluso jugando perfectamente, y puede ganar jugando mal (suerte). Lo que le importa es: "Tome la decisión correcta con la información que tenia?" Si la respuesta es si, fue una buena mano, gane o pierda. EXACTAMENTE lo mismo aplica al trading.</p>
</div>

<h3>PILAR 1: Proceso sobre Resultados</h3>

<div class="highlight-box blue">
<h4>La Mentalidad del Profesional</h4>
<p>Un amateur evalua un trade por el RESULTADO: "Gane? Buen trade. Perdi? Mal trade."</p>
<p>Un profesional evalua un trade por el PROCESO: "Segui mi plan? Buen trade. No segui mi plan? Mal trade."</p>
<p><strong>Esto significa que puedes tener:</strong></p>
<ul>
<li><strong>Buen trade + Perdida:</strong> Seguiste tu plan perfectamente, pero el SL se activo. ESTO ES NORMAL y CORRECTO.</li>
<li><strong>Mal trade + Ganancia:</strong> Entraste sin setup, arriesgaste 10%, y por suerte gano. ESTO ES PELIGROSO, porque refuerza malos hábitos.</li>
</ul>
</div>

<div class="comparison-table">
<div class="comparison-col">
<h4>Mentalidad Amateur</h4>
<ul>
<li>"Necesito ganar dinero HOY"</li>
<li>Evalua por resultados inmediatos</li>
<li>Cada perdida es un fracaso personal</li>
<li>Cambia de estrategia cada semana</li>
<li>"El mercado me odia"</li>
<li>Busca la operación perfecta</li>
<li>Operar = adrenalina y emocion</li>
</ul>
</div>
<div class="comparison-col">
<h4>Mentalidad Profesional</h4>
<ul>
<li>"Necesito ejecutar mi plan correctamente"</li>
<li>Evalua por adherencia al proceso</li>
<li>Cada perdida es un costo de negocio</li>
<li>Refina la misma estrategia durante meses</li>
<li>"El mercado es neutral, yo gestiono mi riesgo"</li>
<li>Busca la ejecucion perfecta del PLAN</li>
<li>Operar = trabajo profesional rutinario</li>
</ul>
</div>
</div>

<h3>PILAR 2: Pensamiento Probabilistico</h3>

<div class="highlight-box green">
<h4>Piensa como un Casino, no como un Jugador</h4>
<p>El casino no sabe si la PROXIMA apuesta en la ruleta sera roja o negra. Pero sabe que despues de 10,000 giros, ganara porque tiene ventaja estadistica. TU debes pensar igual:</p>
<ul>
<li>No sabes si el PROXIMO trade sera ganador o perdedor</li>
<li>Pero si tu estrategia tiene ventaja (winrate + R:R positivo), despues de 100 trades serás rentable</li>
<li>Cada trade individual es IRRELEVANTE. Lo que importa es la SERIE de trades</li>
</ul>
</div>

<div class="calculation-box">
<h4>Expectativa Matematica (Expectancy)</h4>
<p><strong>Formula:</strong></p>
<p style="text-align:center; font-weight:bold; font-size:1.1em;">Expectancy = (Winrate x Ganancia promedio) - (Lossrate x Perdida promedio)</p>
<p><strong>Ejemplo con tus números:</strong></p>
<ul>
<li>Winrate: 45%</li>
<li>Ganancia promedio: 200$ (ratio 1:2)</li>
<li>Perdida promedio: 100$</li>
</ul>
<p>Expectancy = (0.45 x 200$) - (0.55 x 100$) = 90$ - 55$ = <strong>+35$ por trade</strong></p>
<p>Esto significa que CADA trade que tomas, en promedio, genera 35$ de beneficio. Algunos ganarás 200$, otros perderás 100$, pero la media es +35$. Por eso necesitas MUCHOS trades para que la ventaja se manifieste.</p>
</div>

<div class="warning-box">
<h4>La Ley de los Grandes Numeros</h4>
<p>Si lanzas una moneda 10 veces, podrias sacar 8 caras y 2 cruces. Parece injusto. Pero si la lanzas 10,000 veces, te acercaras mucho al 50/50. En trading es igual: en 10 trades puedes tener 8 perdedoras por mala suerte. Pero en 200 trades, tu winrate real aparecera. Por eso: NO juzgues tu sistema con pocos trades. Necesitas volumen.</p>
</div>

<h3>PILAR 3: La Zona - Estado de Rendimiento Optimo</h3>

<div class="highlight-box purple">
<h4>Que es "La Zona"</h4>
<p>Mark Douglas lo llamo "The Zone": un estado mental donde operas sin esfuerzo emocional. No tienes miedo, no tienes codicia, no tienes duda. Simplemente ejecutas tu plan como un piloto automático. Es el estado donde los mejores traders del mundo operan la mayor parte del tiempo.</p>
<p><strong>Caracteristicas de estar "en la zona":</strong></p>
<ul>
<li>No te importa el resultado individual de cada trade</li>
<li>Ejecutas tu plan sin vacilacion ni emocion</li>
<li>Aceptas cualquier resultado como parte del proceso</li>
<li>No sientes urgencia ni ansiedad</li>
<li>Cada trade es uno más de miles que harás en tu carrera</li>
</ul>
</div>

<div class="strategy-box">
<h4>Como Llegar a "La Zona"</h4>
<ol>
<li><strong>Acepta los 5 verdades fundamentales del trading:</strong>
<ul>
<li>Cualquier cosa puede pasar en el mercado</li>
<li>No necesitas saber que pasara despues para ganar dinero</li>
<li>Hay una distribución aleatoria entre ganadores y perdedores para cualquier set de variables</li>
<li>Una ventaja (edge) es simplemente una mayor probabilidad de que ocurra algo</li>
<li>Cada momento en el mercado es único</li>
</ul></li>
<li><strong>Opera con dinero que puedes permitirte perder:</strong> Si el dinero en riesgo te causa ansiedad, reduce el tamano hasta que no sientas nada.</li>
<li><strong>Practica mindfulness:</strong> 5-10 minutos de respiracion consciente antes de operar baja el cortisol y mejora la toma de decisiones.</li>
</ol>
</div>

<h3>PILAR 4: Rutinas del Trader Profesional</h3>

<div class="grid-cards">
<div class="card">
<h4>Rutina Matutina</h4>
<ul>
<li>Despertar a la misma hora</li>
<li>Ejercicio fisico (30 min mínimo)</li>
<li>Desayuno saludable</li>
<li>5-10 min de meditacion/respiracion</li>
<li>Revision del calendario economico</li>
<li>Analisis pre-mercado</li>
</ul>
</div>
<div class="card">
<h4>Durante la Sesion</h4>
<ul>
<li>Hidratacion constante</li>
<li>Descanso cada 60-90 minutos</li>
<li>No comer comida pesada</li>
<li>Telefono en silencio/otra habitacion</li>
<li>Redes sociales CERRADAS</li>
<li>Musica relajante o silencio</li>
</ul>
</div>
<div class="card">
<h4>Post-Mercado</h4>
<ul>
<li>Registrar trades en diario</li>
<li>Screenshots y notas</li>
<li>Evaluar adherencia al plan</li>
<li>Cerrar TODAS las plataformas</li>
<li>Actividad de desconexion</li>
<li>No pensar en trading hasta mañana</li>
</ul>
</div>
<div class="card">
<h4>Fin de Semana</h4>
<ul>
<li>Revision semanal (domingo)</li>
<li>Descanso TOTAL sabado (no mirar gráficos)</li>
<li>Preparar la semana siguiente</li>
<li>Formacion/estudio 1-2 horas</li>
<li>Ejercicio y vida social</li>
<li>Recargar energia mental</li>
</ul>
</div>
</div>

<h3>PILAR 5: Manejar Rachas Perdedoras</h3>

<div class="highlight-box red">
<h4>Las Rachas Perdedoras son INEVITABLES</h4>
<p>Todo trader, incluso los mejores del mundo, tiene rachas perdedoras. Con un winrate del 50%, la probabilidad de tener 5 perdidas seguidas en algun momento de 100 trades es del 97%. Es CASI SEGURO que te pasara. La pregunta no es SI tendrás rachas perdedoras, sino COMO las manejaras.</p>
</div>

<div class="strategy-box">
<h4>Protocolo para Rachas Perdedoras</h4>
<ol>
<li><strong>3-5 perdidas seguidas:</strong> Reduce el riesgo a la mitad (de 1% a 0.5%). Revisa tu diario. Asegurate de que sigues tu plan. Puede ser mala suerte.</li>
<li><strong>5-7 perdidas seguidas:</strong> Para de operar 2-3 dias. Revisa todos los trades de la racha. Busca si hay un error sistematico. Opera en demo unos dias antes de volver a real.</li>
<li><strong>7-10 perdidas seguidas:</strong> Para 1 semana completa. Revisa la estrategia en profundidad. Posiblemente el mercado cambio y tu estrategia necesita ajuste. Habla con otros traders o mentores.</li>
<li><strong>Mas de 10:</strong> Vuelve a demo por 2-4 semanas. Reevalua todo: estrategia, mercados, horarios. No vuelvas a real hasta tener 2 semanas consecutivas rentables en demo.</li>
</ol>
</div>

<div class="highlight-box yellow">
<h4>Lo que NO debes hacer en una racha perdedora</h4>
<ul>
<li>Aumentar el tamano de posición para "recuperar más rápido" (receta para desastre)</li>
<li>Cambiar completamente de estrategia (dale tiempo a la actual)</li>
<li>Operar más frecuentemente (overtrading emocional)</li>
<li>Buscar "la operación milagrosa" que recupere todo</li>
<li>Dejar de usar Stop Loss "porque siempre me sacan"</li>
<li>Compararte con otros traders que "si estan ganando"</li>
</ul>
</div>

<h3>PILAR 6: Growth Mindset - Mentalidad de Crecimiento</h3>

<div class="highlight-box green">
<h4>El Trader con Mentalidad de Crecimiento</h4>
<p>Carol Dweck, psicologa de Stanford, identifico dos tipos de mentalidad:</p>
<ul>
<li><strong>Fixed Mindset (Mentalidad fija):</strong> "No sirvo para esto." "No tengo talento." "Los que ganan es porque tienen información privilegiada." Se rinde ante los obstaculos.</li>
<li><strong>Growth Mindset (Mentalidad de crecimiento):</strong> "Aun no soy rentable, pero estoy aprendiendo." "Esta perdida me enseno algo." "Cada error me acerca a la consistencia." Ve los obstaculos como oportunidades de mejora.</li>
</ul>
<p><strong>Cada trade perdedor es una LECCION, no un fracaso.</strong> Cada error es INFORMACION, no una condena. Los mejores traders del mundo perdieron miles de trades antes de ser consistentes.</p>
</div>

<div class="strategy-box">
<h4>Frases para Reprogramar tu Mente</h4>
<p>Escribe estas frases y lelas cada dia antes de operar:</p>
<ul>
<li>"Soy un gestor de riesgo. Mi trabajo es proteger mi capital primero y generar beneficios segundo."</li>
<li>"Cada trade es simplemente una ejecucion de probabilidades. El resultado individual no importa."</li>
<li>"No necesito acertar todas las operaciones. Solo necesito seguir mi plan consistentemente."</li>
<li>"Una perdida no es un fracaso. Es el costo de hacer negocios."</li>
<li>"Mi ventaja se manifiesta en SERIES de trades, no en operaciones individuales."</li>
<li>"Si segui mi plan, fue un buen trade sin importar el resultado."</li>
<li>"El mercado estará aquí mañana. No hay urgencia."</li>
</ul>
</div>

<h3>Como Piensan los Profesionales vs los Amateurs</h3>

<div class="comparison-table">
<div class="comparison-col">
<h4>El Amateur dice:</h4>
<ul>
<li>"Necesito ganar dinero ya"</li>
<li>"Este trade va a ser el bueno"</li>
<li>"El mercado me debe dinero"</li>
<li>"Voy a arriesgar más para recuperar"</li>
<li>"No puedo perder esta oportunidad"</li>
<li>"Mi estrategia no funciona" (tras 10 trades)</li>
<li>"Los traders exitosos tienen un secreto"</li>
</ul>
</div>
<div class="comparison-col">
<h4>El Profesional dice:</h4>
<ul>
<li>"Necesito ejecutar mi proceso correctamente"</li>
<li>"Este trade es uno de miles"</li>
<li>"El mercado no me debe nada"</li>
<li>"Voy a reducir riesgo y analizar"</li>
<li>"Habra otra oportunidad mañana"</li>
<li>"Necesito 100+ trades para evaluar"</li>
<li>"El secreto es disciplina y gestión de riesgo"</li>
</ul>
</div>
</div>

<div class="highlight-box purple">
<h4>EL MENSAJE FINAL DE ESTA FASE</h4>
<p>Si has llegado hasta aquí y has absorbido este conocimiento, ya tienes MAS preparación mental que el 90% de los traders del mundo. La gestión de riesgo y la psicología son los verdaderos "secretos" del trading rentable. No hay indicador magico, no hay setup perfecto, no hay algoritmo secreto. Hay DISCIPLINA, hay GESTION DE RIESGO, y hay CONTROL EMOCIONAL. Domina estos tres pilares y el mercado se convertira en tu fuente de ingresos consistente. No en un dia, no en una semana, pero con práctica y paciencia, LO LOGRARAS.</p>
</div>`,
          keyPoints: [
            "Proceso sobre resultados: un trade que sigue el plan es bueno aunque pierda dinero",
            "Pensamiento probabilistico: cada trade es parte de una serie, el resultado individual no importa",
            "La Zona es el estado mental óptimo donde operas sin emocion, solo ejecutas el plan",
            "Las rachas perdedoras son inevitables: reduce riesgo, revisa, no entres en panico",
            "Growth mindset: cada perdida es una lección, cada error es información valiosa",
            "Los profesionales NO tienen un secreto magico - tienen disciplina y gestión de riesgo"
          ],
          quiz: [
            {
              question: "Seguiste tu plan perfectamente pero el trade perdio dinero (SL activado). Como debes evaluar ese trade?",
              options: ["Fue un mal trade porque perdi dinero", "Fue un buen trade porque segui mi proceso", "Debo cambiar de estrategia", "Debo dejar de operar"],
              correctIndex: 1,
              explanation: "Un trade donde seguiste tu plan es un BUEN trade sin importar el resultado. La perdida es simplemente un costo de negocio. Lo que importa es la ejecucion del proceso, no el resultado individual."
            },
            {
              question: "Que es la 'expectativa matematica' (expectancy) en trading?",
              options: ["La cantidad que esperas ganar en el próximo trade", "El beneficio promedio por trade basado en winrate y ratio R:R", "Tu objetivo de ganancias mensual", "Cuanto dinero necesitas para empezar"],
              correctIndex: 1,
              explanation: "La expectancy = (Winrate x Ganancia promedio) - (Lossrate x Perdida promedio). Te dice cuanto ganas EN PROMEDIO por cada trade que tomas. Es positiva si tienes ventaja."
            },
            {
              question: "Llevas 6 perdidas seguidas. Segun el protocolo, que debes hacer?",
              options: ["Duplicar el tamano para recuperar rápido", "Parar 2-3 dias, revisar todos los trades de la racha, operar en demo antes de volver", "Seguir operando normal", "Cambiar completamente de estrategia"],
              correctIndex: 1,
              explanation: "Con 5-7 perdidas seguidas, el protocolo dice: parar 2-3 dias, revisar la racha en tu diario, buscar errores sistematicos, y operar en demo antes de volver a real."
            },
            {
              question: "Cual es la diferencia CLAVE entre la mentalidad amateur y profesional?",
              options: ["Los profesionales nunca pierden", "Los profesionales se enfocan en el proceso, los amateurs en el resultado", "Los profesionales tienen mejor software", "Los profesionales operan más horas"],
              correctIndex: 1,
              explanation: "La diferencia fundamental es el enfoque: amateurs miden éxito por dinero ganado/perdido en cada trade. Profesionales miden éxito por si ejecutaron su plan correctamente. Los resultados vienen como consecuencia de un buen proceso repetido muchas veces."
            }
          ],
          practicalExercise: "Ejercicio de 30 dias: Cada mañana antes de operar, lee las 7 frases de reprogramación mental en voz alta. Luego, evalua tu estado emocional (1-5 en confianza, calma, disciplina, paciencia). Si alguna esta por debajo de 3, NO operes ese dia. Al final de los 30 dias, compara tus resultados de las primeras 2 semanas vs las ultimas 2. Notaras una mejora significativa en tu consistencia y control emocional."
        },
        {
          id: "3-2-4",
          title: "La Rutina Diaria del Trader Profesional",
          duration: "20 min",
          content: `
<h2>Tu Rutina Diaria: De Amateur a Profesional</h2>
<div style="display:flex;justify-content:center;margin:20px 0"><svg width="420" height="90" viewBox="0 0 420 90" style="background:#131722;border-radius:10px;border:1px solid #2a2a40"><text x="210" y="15" fill="white" font-size="10" text-anchor="middle" font-weight="bold">PROTOCOLO DE RACHA PERDEDORA</text><rect x="8" y="28" width="75" height="35" rx="5" fill="#ef535015" stroke="#ef5350"/><text x="45" y="44" fill="#ef5350" font-size="7" text-anchor="middle" font-weight="bold">1. PARA</text><text x="45" y="56" fill="#787b86" font-size="6" text-anchor="middle">Cierra todo</text><text x="90" y="48" fill="#555" font-size="10">→</text><rect x="97" y="28" width="75" height="35" rx="5" fill="#3b82f615" stroke="#3b82f6"/><text x="134" y="44" fill="#3b82f6" font-size="7" text-anchor="middle" font-weight="bold">2. RESPIRA</text><text x="134" y="56" fill="#787b86" font-size="6" text-anchor="middle">Desconecta 24h</text><text x="179" y="48" fill="#555" font-size="10">→</text><rect x="186" y="28" width="75" height="35" rx="5" fill="#f59e0b15" stroke="#f59e0b"/><text x="223" y="44" fill="#f59e0b" font-size="7" text-anchor="middle" font-weight="bold">3. ANALIZA</text><text x="223" y="56" fill="#787b86" font-size="6" text-anchor="middle">Revisa diario</text><text x="268" y="48" fill="#555" font-size="10">→</text><rect x="275" y="28" width="68" height="35" rx="5" fill="#8b5cf615" stroke="#8b5cf6"/><text x="309" y="44" fill="#8b5cf6" font-size="7" text-anchor="middle" font-weight="bold">4. CLASIFICA</text><text x="309" y="56" fill="#787b86" font-size="6" text-anchor="middle">Causa</text><text x="350" y="48" fill="#555" font-size="10">→</text><rect x="357" y="28" width="55" height="35" rx="5" fill="#26a69a15" stroke="#26a69a"/><text x="384" y="44" fill="#26a69a" font-size="7" text-anchor="middle" font-weight="bold">5. AJUSTA</text><text x="384" y="56" fill="#787b86" font-size="6" text-anchor="middle">Vuelve</text><text x="210" y="80" fill="#ef5350" font-size="8" text-anchor="middle" font-weight="bold">NUNCA: aumentar riesgo, cambiar estrategia, revenge trade</text></svg></div>
<div class="analogy-box"><h3>El Atleta Profesional</h3><p>Un futbolista profesional no llega al campo y empieza a jugar. Tiene una rutina: calentamiento, repaso tactico, hidratacion, enfoque mental. Un trader profesional también tiene una rutina estructurada. Sin ella, estas improvisando, y los improvisadores pierden.</p></div>
<h3>Rutina Pre-Market (30 min antes de operar)</h3>
<div class="strategy-box"><h4>Checklist Matutina</h4><ol>
<li><strong>Revisa Forex Factory:</strong> Identifica noticias de alto impacto del dia. Marca las horas en tu calendario.</li>
<li><strong>Analisis Top-Down:</strong> Abre D1 → H4 → H1 de tus pares. Identifica tendencia, niveles clave, y zonas de interes.</li>
<li><strong>Marca tus zonas:</strong> Dibuja soportes, resistencias, OBs, FVGs en tu gráfico.</li>
<li><strong>Define tu sesgo:</strong> Para cada par: LONG, SHORT, o NO OPERAR.</li>
<li><strong>Revisa tu plan:</strong> Lee tus reglas de riesgo y emocionales.</li>
<li><strong>Check emocional:</strong> Del 1 al 5, como estas de calma, confianza, paciencia? Si < 3 en cualquiera, NO operes.</li>
</ol></div>
<h3>Durante la Sesion de Trading</h3>
<div class="grid-cards">
<div class="card green-border"><h4>HACER</h4><ul>
<li>Esperar que el precio llegue a TUS zonas</li>
<li>Buscar confirmación antes de entrar</li>
<li>Calcular position size ANTES de cada trade</li>
<li>Poner SL y TP INMEDIATAMENTE</li>
<li>Registrar cada trade en el diario</li>
</ul></div>
<div class="card red-border"><h4>NO HACER</h4><ul>
<li>Perseguir el precio (si no llego a tu zona, dejalo ir)</li>
<li>Operar por aburrimiento</li>
<li>Mover el SL hacia abajo</li>
<li>Mirar el trade abierto cada segundo</li>
<li>Operar más de 3 trades al dia</li>
</ul></div>
</div>
<h3>Rutina Post-Market (15 min despues de cerrar)</h3>
<div class="strategy-box"><h4>Revision Diaria</h4><ol>
<li><strong>Resultado del dia:</strong> Cuantas operaciones, W/L, P/L total</li>
<li><strong>Seguiste tu plan?</strong> Si/No. Si no, POR QUE?</li>
<li><strong>Mejor decisión del dia:</strong> Que hiciste bien?</li>
<li><strong>Peor decisión del dia:</strong> Que mejorarias?</li>
<li><strong>Captura de pantalla</strong> de cada trade con anotaciones</li>
<li><strong>Estado emocional:</strong> Como te sentiste durante la sesion?</li>
</ol></div>
<h3>Rutina Semanal (Domingo 30 min)</h3>
<div class="highlight-box blue"><h4>Revision Semanal</h4><ul>
<li>Win Rate de la semana</li>
<li>R:R promedio</li>
<li>P/L total de la semana</li>
<li>Patron de errores más comun</li>
<li>Mejor y peor dia</li>
<li>Objetivos para la próxima semana</li>
<li>Ajustes a la estrategia (si hay datos suficientes)</li>
</ul></div>
<div class="highlight-box green"><h4>La Formula del Exito en Trading</h4>
<p><strong>Buena estrategia + Buena gestión de riesgo + Rutina consistente + Diario de trading = RENTABILIDAD</strong></p>
<p>No es magia. Es disciplina repetida dia tras dia. Los que siguen esta formula por 6-12 meses se convierten en traders rentables. Los que buscan atajos pierden su dinero.</p></div>`,
          keyPoints: [
            "Pre-market (30 min): noticias, análisis top-down, zonas, sesgo, check emocional",
            "Durante sesion: esperar zonas, confirmar, registrar, max 3 trades/dia",
            "Post-market (15 min): resultado, plan seguido?, mejor/peor decision, capturas",
            "Revision semanal: win rate, R:R, patrón de errores, ajustes",
            "Buena estrategia + gestión riesgo + rutina + diario = RENTABILIDAD"
          ],
          quiz: [
            { question: "Que deberías hacer PRIMERO en tu rutina pre-market?", options: ["Abrir un trade rápido", "Revisar Forex Factory para noticias de alto impacto", "Poner indicadores nuevos", "Mirar Twitter"], correctIndex: 1, explanation: "Lo primero es revisar las noticias. Un dato de alto impacto puede invalidar todo tu análisis técnico. Siempre saber que noticias hay ANTES de operar." },
            { question: "Si tu check emocional da 2/5 en calma, que deberías hacer?", options: ["Operar con menos riesgo", "NO operar ese dia", "Operar solo cripto", "Ignorar y operar igual"], correctIndex: 1, explanation: "Si tu estado emocional esta por debajo de 3/5 en cualquier categoria, la decisión correcta es NO operar. Tradear con emociones negativas lleva a malas decisiones." },
            { question: "Con que frecuencia deberías hacer una revisión completa de tu rendimiento?", options: ["Cada trade", "Diariamente (breve) y semanalmente (completa)", "Solo al final del mes", "Nunca, los resultados hablan solos"], correctIndex: 1, explanation: "Revision diaria breve (15 min post-market) + revisión semanal completa (30 min dominical). Esto te permite detectar patrones y mejorar constantemente." }
          ]
        },
        {
          id: "3-2-5",
          title: "Como Superar una Racha Perdedora",
          duration: "20 min",
          content: `
<h2>Rachas Perdedoras: Todos las Tienen, Pocos las Sobreviven</h2>
<div class="analogy-box"><h3>El Beisbol</h3><p>Hasta los mejores bateadores de beisbol fallan 7 de cada 10 veces. En trading es igual: incluso con una estrategia ganadora, tendrás rachas de 5, 8, incluso 10 perdidas seguidas. La pregunta no es SI te pasara, sino CUANDO te pase, estarás preparado?</p></div>
<h3>La Matematica de las Rachas Perdedoras</h3>
<div class="calculation-box"><h4>Probabilidad de rachas consecutivas</h4>
<p>Con un win rate del 50% (bastante normal):</p>
<ul>
<li><strong>3 perdidas seguidas:</strong> 12.5% de probabilidad (1 de cada 8 series)</li>
<li><strong>5 perdidas seguidas:</strong> 3.1% (pasara cada ~32 series)</li>
<li><strong>7 perdidas seguidas:</strong> 0.78% (pasara eventualmente)</li>
<li><strong>10 perdidas seguidas:</strong> 0.1% (raro pero POSIBLE)</li>
</ul>
<p><strong>Con 200+ trades al año, una racha de 5-7 perdidas es INEVITABLE.</strong></p></div>
<h3>El Protocolo de Recuperacion de 5 Pasos</h3>
<div class="strategy-box"><h4>Cuando llevas 3+ perdidas seguidas</h4><ol>
<li><strong>PARA.</strong> Cierra la plataforma. No operes hoy. Punto.</li>
<li><strong>RESPIRA.</strong> Haz ejercicio, sal a caminar, desconecta del mercado mínimo 24 horas.</li>
<li><strong>ANALIZA.</strong> Revisa los trades perdedores con la cabeza fria: seguiste tu plan? Los setups eran validos? El mercado estaba en condiciones favorables?</li>
<li><strong>CLASIFICA.</strong> Las perdidas fueron por: a) Mala ejecucion (tu culpa), b) El mercado (condiciones adversas), c) Mala suerte (setups validos que no funcionaron).</li>
<li><strong>AJUSTA.</strong> Si fue mala ejecucion: refuerza la disciplina. Si fue el mercado: cambia de par o espera mejores condiciones. Si fue mala suerte: no cambies NADA, sigue con tu plan.</li>
</ol></div>
<div class="highlight-box red"><h4>Lo que NO Debes Hacer en una Racha Perdedora</h4>
<ul>
<li>Aumentar el tamano de posición para "recuperar rápido"</li>
<li>Cambiar de estrategia</li>
<li>Operar más frecuentemente</li>
<li>Quitar o mover el Stop Loss</li>
<li>Operar con emociones (frustracion, desesperacion, rabia)</li>
<li>Compararte con otros traders</li>
</ul></div>
<div class="highlight-box green"><h4>Lo que SI Debes Hacer</h4>
<ul>
<li>REDUCIR el tamano de posición a la mitad temporalmente</li>
<li>Volver a demo por 1-2 dias si es necesario</li>
<li>Revisar tu diario de trading con calma</li>
<li>Hablar con un mentor o accountability partner</li>
<li>Recordar: una racha perdedora NO define tu capacidad como trader</li>
<li>Confiar en el proceso: si tu backtest es positivo en 100+ trades, 5 perdidas no invalidan la estrategia</li>
</ul></div>
<div class="highlight-box blue"><h4>La Regla de Oro</h4>
<p>Si tu estrategia es rentable en un backtest de 100+ trades, una racha de 5-10 perdidas es ESTADISTICAMENTE NORMAL. No cambies la estrategia. Cambia tu gestión emocional. El trader que sobrevive a la racha con la disciplina intacta es el que se convierte en profesional.</p></div>`,
          keyPoints: [
            "Con 50% win rate, una racha de 5-7 perdidas es INEVITABLE a lo largo del año",
            "Protocolo: PARA → RESPIRA → ANALIZA → CLASIFICA → AJUSTA",
            "NUNCA aumentes riesgo ni cambies estrategia durante una racha perdedora",
            "REDUCE el tamano de posición a la mitad temporalmente",
            "Si el backtest es positivo en 100+ trades, 5 perdidas no invalidan la estrategia"
          ],
          quiz: [
            { question: "Con un win rate del 50%, cual es la probabilidad de tener 5 perdidas seguidas?", options: ["0% - imposible", "3.1% - raro pero inevitable con suficientes trades", "50% - muy probable", "25%"], correctIndex: 1, explanation: "Con 50% win rate, la probabilidad de 5 perdidas consecutivas es (0.5)^5 = 3.1%. Con 200+ trades al año, pasara." },
            { question: "Que deberías hacer PRIMERO cuando llevas 3+ perdidas seguidas?", options: ["Abrir más operaciones para recuperar", "PARAR de operar y cerrar la plataforma", "Cambiar de estrategia", "Duplicar el riesgo"], correctIndex: 1, explanation: "Lo primero es PARAR. No puedes tomar buenas decisiones con las emociones alteradas. Desconecta y vuelve cuando estes calmado." },
            { question: "Si tu backtest muestra 55% win rate en 200 trades pero llevas 6 perdidas seguidas, que haces?", options: ["Cambias de estrategia inmediatamente", "Reduces el tamano a la mitad pero sigues el plan - la racha es estadisticamente normal", "Dejas el trading", "Triplicas el riesgo"], correctIndex: 1, explanation: "Con 200 trades de backtest positivo, 6 perdidas seguidas es normal estadisticamente. Reduce el riesgo temporalmente pero NO cambies la estrategia." }
          ]
        }
      ]
    }
  ]
};
