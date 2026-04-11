import type { Phase } from "../courseData";

export const PHASE_2: Phase = {
  id: "fase-2",
  number: 2,
  title: "Analisis Tecnico Completo",
  subtitle: "Domina la lectura de gráficos como un profesional",
  description: "El análisis técnico es el lenguaje de los mercados. Aqui vas a aprender a leer gráficos como un libro abierto: estructura de mercado, indicadores, patrones, Fibonacci y análisis multi-timeframe. Todo lo que necesitas para encontrar entradas de alta probabilidad.",
  color: "#8B5CF6",
  gradient: "from-purple-500 to-purple-700",
  modules: [
    // ================================================================
    // MODULE 2-1: ESTRUCTURA DEL MERCADO
    // ================================================================
    {
      id: "mod-2-1",
      title: "Estructura del Mercado",
      description: "Aprende a leer la estructura del precio como los traders institucionales",
      icon: "🏗️",
      color: "#8B5CF6",
      lessons: [
        // --------------------------------------------------------------
        // LESSON 2-1-1: SOPORTES Y RESISTENCIAS
        // --------------------------------------------------------------
        {
          id: "2-1-1",
          title: "Soportes y Resistencias: La Base de Todo",
          duration: "35 min",
          content: `
<h2>Soportes y Resistencias: El Concepto Mas Importante del Trading</h2>

<div class="analogy-box">
<h3>La Analogia del Suelo y el Techo</h3>
<p>Imagina una pelota rebotando dentro de una habitacion. El suelo es el <strong>soporte</strong>: el precio rebota hacia arriba cuando lo toca. El techo es la <strong>resistencia</strong>: el precio rebota hacia abajo cuando lo alcanza. Pero a veces la pelota rompe el techo y sube al piso de arriba, o rompe el suelo y cae al sotano. Eso es un <strong>breakout</strong>.</p>
</div>

<h3>Primer Error Fatal: Son ZONAS, No Lineas</h3>

<div class="warning-box">
<h4>El Error Numero 1 de los Principiantes</h4>
<p>Los traders nuevos dibujan una línea fina y esperan que el precio la toque al pip exacto. Los profesionales saben que soportes y resistencias son <strong>ZONAS</strong>, areas donde se concentra presión compradora o vendedora. Piensa en un rango de 10-30 pips, no en un número exacto.</p>
</div>

<div class="highlight-box purple">
<h4>Que es un Soporte (Support)</h4>
<p>Una <strong>zona de precio donde hay suficiente demanda (compradores)</strong> para detener la caida del precio y potencialmente hacerlo subir. Es un "suelo" temporal. Cuando el precio se acerca a un soporte, los compradores entran con fuerza porque perciben que el activo esta "barato".</p>
</div>

<div class="highlight-box blue">
<h4>Que es una Resistencia (Resistance)</h4>
<p>Una <strong>zona de precio donde hay suficiente oferta (vendedores)</strong> para detener la subida del precio y potencialmente hacerlo bajar. Es un "techo" temporal. Los vendedores entran con fuerza porque perciben que el activo esta "caro".</p>
</div>

<div style="display:flex;justify-content:center;margin:24px 0">
<svg width="500" height="220" viewBox="0 0 500 220" style="background:#131722;border-radius:12px;border:1px solid #2a2a40">
<rect x="20" y="35" width="460" height="22" rx="4" fill="#ef535012" stroke="#ef535030" stroke-dasharray="5,4"/>
<text x="30" y="50" fill="#ef5350" font-size="11" font-weight="bold">RESISTENCIA (techo)</text>
<rect x="20" y="150" width="460" height="22" rx="4" fill="#26a69a12" stroke="#26a69a30" stroke-dasharray="5,4"/>
<text x="30" y="165" fill="#26a69a" font-size="11" font-weight="bold">SOPORTE (suelo)</text>
<polyline points="50,120 80,50 110,58 140,155 170,160 200,52 230,48 260,158 290,150 320,50 350,55 380,155 410,148 450,90" fill="none" stroke="#8b5cf6" stroke-width="2"/>
<circle cx="80" cy="50" r="4" fill="#ef5350"/><text x="85" y="30" fill="#ef5350" font-size="8">Rechazo</text>
<circle cx="200" cy="52" r="4" fill="#ef5350"/>
<circle cx="140" cy="155" r="4" fill="#26a69a"/><text x="145" y="180" fill="#26a69a" font-size="8">Rebote</text>
<circle cx="260" cy="158" r="4" fill="#26a69a"/>
<circle cx="320" cy="50" r="4" fill="#ef5350"/>
<circle cx="380" cy="155" r="4" fill="#26a69a"/>
<text x="250" y="210" fill="#a0a0b8" font-size="10" text-anchor="middle">El precio REBOTA entre soporte y resistencia</text>
</svg>
</div>

<h3>Por Que Funcionan los Soportes y Resistencias</h3>

<p>No es magia ni profecia autocumplida. Los S/R funcionan por <strong>psicología del mercado</strong> y <strong>ordenes institucionales</strong>:</p>

<div class="grid-cards">
<div class="card">
<h4>1. Memoria del Mercado</h4>
<p>Si el precio reboto en 1.0800 tres veces antes, los traders lo recuerdan. Cuando el precio vuelve a ese nivel, ponen ordenes de compra ahi. Miles de traders haciendo lo mismo = demanda real.</p>
</div>
<div class="card">
<h4>2. Ordenes Institucionales</h4>
<p>Los bancos y fondos de inversión colocan ordenes masivas en niveles clave. Un banco puede tener 500 millones en ordenes de compra en 1.0800. Eso crea un "muro" real de demanda.</p>
</div>
<div class="card">
<h4>3. Numeros Redondos (Psicologicos)</h4>
<p>Niveles como 1.1000, 50,000 en BTC, o 4,000 en S&P 500 actuan como S/R naturales. Los humanos gravitamos hacia números redondos al colocar ordenes.</p>
</div>
<div class="card">
<h4>4. Pain Trade</h4>
<p>Los traders que perdieron dinero en un nivel quieren "recuperar" su dinero cuando el precio vuelve. Este comportamiento crea presión real en esas zonas.</p>
</div>
</div>

<h3>Como Identificar Zonas de Soporte y Resistencia</h3>
<div style="display:flex;justify-content:center;margin:20px 0"><svg width="380" height="120" viewBox="0 0 380 120" style="background:#131722;border-radius:10px;border:1px solid #2a2a40"><text x="190" y="16" fill="white" font-size="10" text-anchor="middle" font-weight="bold">VOLUME PROFILE: POC y VALUE AREA</text><rect x="200" y="25" width="30" height="8" rx="2" fill="#3b82f644"/><rect x="200" y="35" width="60" height="8" rx="2" fill="#3b82f666"/><rect x="200" y="45" width="120" height="8" rx="2" fill="#3b82f6"/><text x="330" y="53" fill="#3b82f6" font-size="8" font-weight="bold">← POC (máximo volumen)</text><rect x="200" y="55" width="90" height="8" rx="2" fill="#3b82f688"/><rect x="200" y="65" width="45" height="8" rx="2" fill="#3b82f655"/><rect x="200" y="75" width="25" height="8" rx="2" fill="#3b82f633"/><rect x="195" y="35" width="3" height="42" fill="#f59e0b"/><text x="190" y="90" fill="#f59e0b" font-size="7" text-anchor="end">Value Area (70% volumen)</text><polyline points="30,85 60,70 90,55 120,50 150,48 180,52 190,55" fill="none" stroke="#8b5cf6" stroke-width="1.5"/><text x="100" y="105" fill="#787b86" font-size="7" text-anchor="middle">El precio es atraído hacia el POC como un imán</text></svg></div>

<div class="strategy-box">
<h4>Metodo Profesional en 4 Pasos</h4>
<ol>
<li><strong>Empieza en timeframe alto (H4/Diario):</strong> Los niveles en timeframes altos son los más fuertes. Abre el gráfico diario y busca zonas donde el precio ha reaccionado múltiples veces.</li>
<li><strong>Busca "clusters" de reacciones:</strong> No busques toques exactos. Busca ZONAS donde el precio ha dejado mechas, ha revertido, o ha consolidado. Cuantas más reacciones, más fuerte es la zona.</li>
<li><strong>Dibuja un rectangulo, no una línea:</strong> En TradingView, usa la herramienta de rectangulo. El soporte no es 1.0800, es la zona de 1.0790 a 1.0815. Dale un ancho real.</li>
<li><strong>Valida con volumen:</strong> Si tienes Volume Profile, verifica que hay alto volumen en esa zona. Alto volumen = muchas ordenes ejecutadas = nivel importante.</li>
</ol>
</div>

<h3>Cambio de Polaridad: El Concepto Clave</h3>

<div class="highlight-box green">
<h4>Polarity Flip / Role Reversal</h4>
<p>Cuando un <strong>soporte se rompe</strong>, se convierte en <strong>resistencia</strong>. Cuando una <strong>resistencia se rompe</strong>, se convierte en <strong>soporte</strong>. Este es uno de los conceptos más poderosos del trading y funciona en TODOS los mercados y timeframes.</p>
</div>

<div class="example-box">
<h4>Ejemplo Real: EUR/USD</h4>
<p>El precio encuentra resistencia en 1.1000 tres veces (triple top). En el cuarto intento, ROMPE por encima y cierra en 1.1050. Ahora, 1.1000 se ha convertido en soporte. Cuando el precio retroceda a 1.1000, esperas un REBOTE hacia arriba porque los vendedores de antes ahora son compradores defendiendo su posición.</p>
<p><strong>Trade profesional:</strong> Esperas el retroceso (pullback) a 1.1000, confirmas con una vela de rechazo (martillo), y entras LONG con stop loss debajo de 1.0980.</p>
</div>

<h3>Fakeouts (Rupturas Falsas): La Trampa del Mercado</h3>

<div class="warning-box">
<h4>Cuidado con los Fakeouts</h4>
<p>Un <strong>fakeout</strong> ocurre cuando el precio rompe momentaneamente un soporte o resistencia, activa los stop losses de otros traders, y luego <strong>vuelve</strong> a la dirección original. Es una trampa diseñada para sacar dinero de los traders impacientes.</p>
</div>

<div class="grid-cards">
<div class="card">
<h4>Como Detectar un Fakeout</h4>
<ul>
<li>La vela cierra de vuelta dentro de la zona S/R</li>
<li>Mecha larga sin cuerpo en la zona de ruptura</li>
<li>Volumen bajo durante la "ruptura"</li>
<li>Ocurre cerca de números redondos</li>
</ul>
</div>
<div class="card">
<h4>Como Protegerte</h4>
<ul>
<li>Nunca entres en el breakout inmediato</li>
<li>Espera al CIERRE de la vela por encima/debajo</li>
<li>Espera un retest (pullback) del nivel roto</li>
<li>Coloca stops más alla de la zona, no en el borde</li>
</ul>
</div>
</div>

<h3>Fuerza de los Niveles: No Todos Son Iguales</h3>

<div class="comparison-table">
<div class="comparison-col">
<h4>Nivel FUERTE</h4>
<ul>
<li>Multiples toques (3+)</li>
<li>Visible en timeframe diario/semanal</li>
<li>Coincide con número redondo</li>
<li>Alto volumen en la zona</li>
<li>Cambio de polaridad confirmado</li>
</ul>
</div>
<div class="comparison-col">
<h4>Nivel DEBIL</h4>
<ul>
<li>Solo 1-2 toques</li>
<li>Solo visible en M5/M15</li>
<li>Precio aleatorio sin significado</li>
<li>Bajo volumen</li>
<li>Nunca ha actuado como cambio de polaridad</li>
</ul>
</div>
</div>

<div class="highlight-box yellow">
<h4>Regla Profesional</h4>
<p>Cuantas más veces se testea un nivel, MAS DEBIL se vuelve (contraintuitivo). Si el precio toca un soporte 5-6 veces, probablemente lo va a romper. Es como golpear una pared: cada golpe la debilita un poco más. Los niveles más fuertes son los que se testean 2-3 veces y luego el precio se aleja con fuerza.</p>
</div>`,
          keyPoints: [
            "Soportes y resistencias son ZONAS (rectangulos), no líneas exactas",
            "Cambio de polaridad: soporte roto se convierte en resistencia y viceversa",
            "Los fakeouts son trampas - espera siempre al cierre de vela y al retest antes de entrar",
            "Los niveles de timeframes altos (H4/Diario) son los más fuertes y fiables",
            "Cuantas más veces se testea un nivel, más debil se vuelve - probablemente se rompa",
            "Los números redondos (1.1000, 50000 BTC) actuan como S/R psicologicos naturales"
          ],
          quiz: [
            {
              question: "¿Por qué los profesionales dibujan zonas en vez de líneas para soportes y resistencias?",
              options: [
                "Porque se ve más bonito en el gráfico",
                "Porque el precio raramente reacciona al pip exacto - hay un rango de presión compradora/vendedora",
                "Porque TradingView solo permite rectangulos",
                "Porque las líneas confunden a otros traders"
              ],
              correctIndex: 1,
              explanation: "El precio no reacciona en un punto matematico exacto. Las ordenes institucionales y los stop losses se distribuyen en una ZONA de precio, creando un area de soporte/resistencia, no una línea."
            },
            {
              question: "¿Qué es el cambio de polaridad (polarity flip)?",
              options: [
                "Cuando cambias de operar Forex a Cripto",
                "Cuando un soporte roto se convierte en resistencia o viceversa",
                "Cuando el mercado cambia de alcista a bajista",
                "Cuando cambias el timeframe del gráfico"
              ],
              correctIndex: 1,
              explanation: "El cambio de polaridad es uno de los conceptos más potentes: un soporte que se rompe se convierte en resistencia (y viceversa). Los traders que compraron en el soporte ahora quieren salir sin perdida cuando el precio vuelve."
            },
            {
              question: "¿Qué ocurre cuando un soporte se testea muchas veces (5-6 toques)?",
              options: [
                "Se vuelve más fuerte con cada toque",
                "Se mantiene igual de fuerte siempre",
                "Se debilita y probablemente se rompa eventualmente",
                "Se convierte automáticamente en resistencia"
              ],
              correctIndex: 2,
              explanation: "Contraintuitivamente, cada toque de un nivel lo debilita. Es como golpear una pared: eventualmente cede. Los niveles más fuertes son los que se testean 2-3 veces y luego el precio se aleja con fuerza."
            },
            {
              question: "¿Cómo te proteges de un fakeout al tradear un breakout?",
              options: [
                "Entras inmediatamente cuando el precio toca el nivel",
                "Nunca tradeas breakouts",
                "Esperas al cierre de vela más alla del nivel y/o al retest posterior",
                "Usas el máximo apalancamiento posible"
              ],
              correctIndex: 2,
              explanation: "La proteccion contra fakeouts es la paciencia: espera a que la vela CIERRE por encima/debajo del nivel (no solo la mecha), y mejor aun, espera al retest donde el nivel roto cambia de polaridad."
            }
          ],
          practicalExercise: "Abre TradingView con EUR/USD en gráfico Diario. Identifica las 3 zonas de soporte y las 3 zonas de resistencia más importantes de los ultimos 3 meses. Dibujalas con rectangulos (no líneas). Para cada zona, anota: cuantas veces el precio reacciono ahi, si hubo algun cambio de polaridad, y si coincide con un número redondo. Busca al menos un fakeout reciente."
        },
        // --------------------------------------------------------------
        // LESSON 2-1-2: TENDENCIAS Y ESTRUCTURA
        // --------------------------------------------------------------
        {
          id: "2-1-2",
          title: "Tendencias y Estructura del Mercado",
          duration: "40 min",
          content: `
<h2>Estructura del Mercado: El ADN del Precio</h2>
<div style="display:flex;justify-content:center;margin:20px 0"><svg width="380" height="110" viewBox="0 0 380 110" style="background:#131722;border-radius:10px;border:1px solid #2a2a40"><text x="190" y="16" fill="white" font-size="10" text-anchor="middle" font-weight="bold">CANAL ASCENDENTE</text><line x1="30" y1="90" x2="350" y2="30" stroke="#26a69a" stroke-width="1.5" stroke-dasharray="5,4"/><line x1="30" y1="60" x2="350" y2="0" stroke="#26a69a" stroke-width="1.5" stroke-dasharray="5,4"/><polyline points="40,82 80,52 120,72 160,42 200,62 240,32 280,52 320,25" fill="none" stroke="#8b5cf6" stroke-width="2"/><circle cx="80" cy="52" r="3" fill="#26a69a"/><text x="80" y="47" fill="#26a69a" font-size="7" text-anchor="middle">Compra</text><circle cx="160" cy="42" r="3" fill="#ef5350"/><text x="160" y="37" fill="#ef5350" font-size="7" text-anchor="middle">Venta</text><circle cx="200" cy="62" r="3" fill="#26a69a"/><text x="200" y="75" fill="#26a69a" font-size="7" text-anchor="middle">Compra</text><circle cx="280" cy="52" r="3" fill="#ef5350"/><text x="280" y="47" fill="#ef5350" font-size="7" text-anchor="middle">Venta</text><text x="190" y="100" fill="#787b86" font-size="8" text-anchor="middle">Compra en la línea inferior, vende en la superior</text></svg></div>

<div class="analogy-box">
<h3>La Analogia de las Escaleras</h3>
<p>Imagina que el precio es una persona subiendo o bajando escaleras. Al <strong>subir</strong>, cada escalon es más alto que el anterior (Higher Highs y Higher Lows). Al <strong>bajar</strong>, cada escalon es más bajo (Lower Highs y Lower Lows). Y a veces la persona se queda parada en un rellano sin subir ni bajar: eso es un <strong>rango</strong>.</p>
</div>

<h3>Los 4 Puntos Clave de la Estructura</h3>

<div class="grid-cards">
<div class="card">
<h4>HH - Higher High</h4>
<p><strong>Maximo más alto.</strong> El precio alcanza un nuevo máximo que supera al máximo anterior. Es señal de fuerza alcista. Los compradores tienen el control.</p>
</div>
<div class="card">
<h4>HL - Higher Low</h4>
<p><strong>Minimo más alto.</strong> El retroceso del precio no llega tan abajo como el retroceso anterior. Los compradores entran antes, señal de demanda creciente.</p>
</div>
<div class="card">
<h4>LH - Lower High</h4>
<p><strong>Maximo más bajo.</strong> El precio intenta subir pero no alcanza el máximo anterior. Los vendedores toman control. Es debilidad alcista o fuerza bajista.</p>
</div>
<div class="card">
<h4>LL - Lower Low</h4>
<p><strong>Minimo más bajo.</strong> El precio rompe por debajo del mínimo anterior. Los vendedores dominan completamente. Confirma tendencia bajista.</p>
</div>
</div>

<div style="display:flex;justify-content:center;gap:20px;margin:24px 0;flex-wrap:wrap">
<!-- TENDENCIA ALCISTA -->
<svg width="240" height="180" viewBox="0 0 240 180" style="background:#131722;border-radius:10px;border:1px solid #2a2a40">
<text x="120" y="18" fill="#26a69a" font-size="11" text-anchor="middle" font-weight="bold">TENDENCIA ALCISTA</text>
<polyline points="20,140 50,100 70,118 110,70 130,90 170,40 200,55 230,20" fill="none" stroke="#26a69a" stroke-width="2.5"/>
<circle cx="50" cy="100" r="3" fill="#26a69a"/><text x="50" y="95" fill="#26a69a" font-size="8" text-anchor="middle">HH</text>
<circle cx="110" cy="70" r="3" fill="#26a69a"/><text x="110" y="65" fill="#26a69a" font-size="8" text-anchor="middle">HH</text>
<circle cx="170" cy="40" r="3" fill="#26a69a"/><text x="170" y="35" fill="#26a69a" font-size="8" text-anchor="middle">HH</text>
<circle cx="70" cy="118" r="3" fill="#42a5f5"/><text x="70" y="133" fill="#42a5f5" font-size="8" text-anchor="middle">HL</text>
<circle cx="130" cy="90" r="3" fill="#42a5f5"/><text x="130" y="105" fill="#42a5f5" font-size="8" text-anchor="middle">HL</text>
<circle cx="200" cy="55" r="3" fill="#42a5f5"/><text x="200" y="70" fill="#42a5f5" font-size="8" text-anchor="middle">HL</text>
<text x="120" y="170" fill="#787b86" font-size="9" text-anchor="middle">Maximos y minimos SUBEN</text>
</svg>
<!-- TENDENCIA BAJISTA -->
<svg width="240" height="180" viewBox="0 0 240 180" style="background:#131722;border-radius:10px;border:1px solid #2a2a40">
<text x="120" y="18" fill="#ef5350" font-size="11" text-anchor="middle" font-weight="bold">TENDENCIA BAJISTA</text>
<polyline points="20,20 50,60 70,42 110,100 130,78 170,135 200,118 230,160" fill="none" stroke="#ef5350" stroke-width="2.5"/>
<circle cx="70" cy="42" r="3" fill="#ff9800"/><text x="70" y="37" fill="#ff9800" font-size="8" text-anchor="middle">LH</text>
<circle cx="130" cy="78" r="3" fill="#ff9800"/><text x="130" y="73" fill="#ff9800" font-size="8" text-anchor="middle">LH</text>
<circle cx="200" cy="118" r="3" fill="#ff9800"/><text x="200" y="113" fill="#ff9800" font-size="8" text-anchor="middle">LH</text>
<circle cx="50" cy="60" r="3" fill="#ef5350"/><text x="50" y="75" fill="#ef5350" font-size="8" text-anchor="middle">LL</text>
<circle cx="110" cy="100" r="3" fill="#ef5350"/><text x="110" y="115" fill="#ef5350" font-size="8" text-anchor="middle">LL</text>
<circle cx="170" cy="135" r="3" fill="#ef5350"/><text x="170" y="150" fill="#ef5350" font-size="8" text-anchor="middle">LL</text>
<text x="120" y="170" fill="#787b86" font-size="9" text-anchor="middle">Maximos y minimos BAJAN</text>
</svg>
</div>

<h3>Las 3 Fases del Mercado</h3>

<div class="highlight-box green">
<h4>1. Tendencia Alcista (Uptrend / Bullish)</h4>
<p>El precio forma una secuencia de <strong>HH + HL</strong> (maximos y minimos cada vez más altos). Es como subir escaleras: cada paso te lleva más arriba. Para tradear en tendencia alcista, buscas COMPRAR en los retrocesos (en los HL).</p>
<p><strong>Estructura:</strong> HL → HH → HL → HH → HL → HH</p>
</div>

<div class="highlight-box red">
<h4>2. Tendencia Bajista (Downtrend / Bearish)</h4>
<p>El precio forma una secuencia de <strong>LH + LL</strong> (maximos y minimos cada vez más bajos). Es bajar escaleras: cada paso te lleva más abajo. Para tradear en tendencia bajista, buscas VENDER en los retrocesos (en los LH).</p>
<p><strong>Estructura:</strong> LH → LL → LH → LL → LH → LL</p>
</div>

<div class="highlight-box yellow">
<h4>3. Rango / Consolidacion (Sideways)</h4>
<p>El precio se mueve lateralmente entre un soporte y una resistencia sin formar nuevos HH/LL. No hay tendencia clara. Aqui puedes comprar en soporte y vender en resistencia, o simplemente ESPERAR a que rompa.</p>
</div>

<h3>BOS - Break of Structure (Ruptura de Estructura)</h3>

<div style="display:flex;justify-content:center;margin:20px 0">
<svg width="420" height="180" viewBox="0 0 420 180" style="background:#131722;border-radius:10px;border:1px solid #2a2a40">
<text x="210" y="16" fill="white" font-size="10" text-anchor="middle" font-weight="bold">BOS ALCISTA - El precio rompe el último HH</text>
<!-- Tendencia alcista -->
<polyline points="20,140 60,95 85,112 130,68 155,85 200,45 225,60" fill="none" stroke="#26a69a" stroke-width="2"/>
<!-- Nivel HH anterior -->
<line x1="130" y1="68" x2="300" y2="68" stroke="#ff9800" stroke-width="1.5" stroke-dasharray="5,4"/>
<text x="305" y="72" fill="#ff9800" font-size="8">Ultimo HH</text>
<!-- BOS - rompe el HH -->
<polyline points="225,60 250,50 280,40 310,30" fill="none" stroke="#26a69a" stroke-width="2.5"/>
<circle cx="265" cy="65" r="8" fill="none" stroke="#ff9800" stroke-width="2"/>
<text x="278" y="68" fill="#ff9800" font-size="11" font-weight="bold">BOS!</text>
<!-- Labels -->
<text x="60" y="90" fill="#26a69a" font-size="8">HH</text>
<text x="85" y="120" fill="#42a5f5" font-size="8">HL</text>
<text x="130" y="62" fill="#26a69a" font-size="8">HH</text>
<text x="155" y="92" fill="#42a5f5" font-size="8">HL</text>
<text x="200" y="40" fill="#26a69a" font-size="8">HH</text>
<text x="210" y="170" fill="#26a69a" font-size="9" text-anchor="middle">Ruptura del HH anterior = tendencia CONTINUA</text>
</svg>
</div>

<div class="highlight-box blue">
<h4>Que es un BOS</h4>
<p>Un <strong>Break of Structure</strong> ocurre cuando el precio rompe un swing high (en tendencia alcista) o un swing low (en tendencia bajista), <strong>confirmando la continuacion de la tendencia</strong>.</p>
<ul>
<li><strong>BOS Alcista:</strong> El precio rompe por encima del último HH. Confirma que la tendencia alcista continua.</li>
<li><strong>BOS Bajista:</strong> El precio rompe por debajo del último LL. Confirma que la tendencia bajista continua.</li>
</ul>
</div>

<div class="example-box">
<h4>Ejemplo de BOS Alcista en EUR/USD</h4>
<p>El precio hace un HL en 1.0850 y sube. El último HH estaba en 1.0920. Cuando el precio rompe 1.0920 y cierra por encima, tenemos un <strong>BOS alcista</strong>. Esto confirma que debemos seguir buscando COMPRAS. El siguiente HL sera nuestra zona de entrada.</p>
</div>

<h3>CHoCH - Change of Character (Cambio de Caracter)</h3>

<div class="warning-box">
<h4>El Concepto Mas Importante de Smart Money</h4>
<p>Un <strong>CHoCH</strong> es la primera señal de que la tendencia puede estar cambiando. Es la "alerta temprana" de un cambio de tendencia.</p>
</div>

<div class="grid-cards">
<div class="card">
<h4>CHoCH Bajista a Alcista</h4>
<p>En tendencia bajista (LH-LL-LH-LL), el precio rompe por encima del último <strong>LH</strong>. Es la primera señal de que los compradores estan tomando control. No es confirmación total, pero es la alerta.</p>
</div>
<div class="card">
<h4>CHoCH Alcista a Bajista</h4>
<p>En tendencia alcista (HH-HL-HH-HL), el precio rompe por debajo del último <strong>HL</strong>. Es la primera señal de que los vendedores estan tomando control. Los alcistas estan perdiendo fuerza.</p>
</div>
</div>

<div class="strategy-box">
<h4>Como Tradear BOS y CHoCH</h4>
<ol>
<li><strong>Identifica la tendencia actual:</strong> Mira la secuencia de HH/HL o LH/LL en H4 o Diario.</li>
<li><strong>Espera un BOS para continuacion:</strong> Si la tendencia es alcista y ves un BOS (nuevo HH), busca entrar en el próximo HL.</li>
<li><strong>Espera un CHoCH para reversal:</strong> Si ves un CHoCH, NO entres inmediatamente. Espera a que se forme la nueva estructura (nuevo HH o LL) antes de entrar.</li>
<li><strong>Confirma con volumen:</strong> Un BOS real tiene volumen alto. Un BOS con bajo volumen puede ser fakeout.</li>
</ol>
</div>

<h3>Las 4 Fases del Ciclo de Mercado (Wyckoff Simplificado)</h3>

<div class="grid-cards">
<div class="card">
<h4>Fase 1: Acumulacion</h4>
<p>Despues de una caida, el precio se mueve lateral. Las "manos fuertes" (instituciones) estan comprando silenciosamente. El volumen empieza a crecer en las subidas. El sentimiento público es negativo.</p>
</div>
<div class="card">
<h4>Fase 2: Markup (Subida)</h4>
<p>El precio sale del rango hacia arriba. BOS alcista confirmado. Se forman HH y HL. El público empieza a comprar. Las noticias son cada vez más positivas.</p>
</div>
<div class="card">
<h4>Fase 3: Distribucion</h4>
<p>Despues de una subida, el precio se mueve lateral otra vez. Las instituciones estan vendiendo a los compradores tardios. El volumen crece en las bajadas. Euforia publica.</p>
</div>
<div class="card">
<h4>Fase 4: Markdown (Caida)</h4>
<p>El precio sale del rango hacia abajo. BOS bajista confirmado. Se forman LH y LL. Panico, noticias negativas, el público vende con perdidas. Las instituciones esperan para volver a acumular.</p>
</div>
</div>

<div class="highlight-box purple">
<h4>Regla de Oro</h4>
<p>Siempre opera A FAVOR de la estructura del mercado. Si el HTF (timeframe alto) muestra HH/HL, solo busca COMPRAS. Si muestra LH/LL, solo busca VENTAS. Operar contra la estructura es la forma más rápida de perder dinero. "The trend is your friend until the end."</p>
</div>`,
          keyPoints: [
            "Tendencia alcista = secuencia de HH (Higher Highs) y HL (Higher Lows)",
            "Tendencia bajista = secuencia de LH (Lower Highs) y LL (Lower Lows)",
            "BOS (Break of Structure) confirma continuacion de tendencia",
            "CHoCH (Change of Character) es la primera señal de posible cambio de tendencia",
            "Las 4 fases Wyckoff: Acumulacion, Markup, Distribucion, Markdown",
            "Siempre opera a favor de la estructura del timeframe alto (HTF)"
          ],
          quiz: [
            {
              question: "¿En una tendencia alcista, que secuencia de puntos forma el precio?",
              options: [
                "Lower Highs y Lower Lows (LH/LL)",
                "Higher Highs y Higher Lows (HH/HL)",
                "Higher Highs y Lower Lows (HH/LL)",
                "El precio se mueve sin patron"
              ],
              correctIndex: 1,
              explanation: "Una tendencia alcista se define por maximos cada vez más altos (HH) y minimos cada vez más altos (HL). Es como subir escaleras: cada paso es más alto que el anterior."
            },
            {
              question: "¿Cuál es la diferencia entre BOS y CHoCH?",
              options: [
                "No hay diferencia, significan lo mismo",
                "BOS confirma continuacion de tendencia; CHoCH indica posible cambio de tendencia",
                "BOS es para Forex y CHoCH es para cripto",
                "CHoCH confirma tendencia y BOS indica cambio"
              ],
              correctIndex: 1,
              explanation: "BOS (Break of Structure) confirma que la tendencia actual sigue viva rompiendo un nuevo HH o LL. CHoCH (Change of Character) es la primera señal de que la tendencia podría estar cambiando al romper un HL (en alcista) o un LH (en bajista)."
            },
            {
              question: "¿En qué fase del ciclo Wyckoff las instituciones compran silenciosamente mientras el sentimiento público es negativo?",
              options: [
                "Markup (Subida)",
                "Distribucion",
                "Acumulacion",
                "Markdown (Caida)"
              ],
              correctIndex: 2,
              explanation: "En la fase de Acumulacion, las instituciones compran grandes cantidades mientras el precio se mueve lateral. El público tiene miedo y no quiere comprar, lo cual permite a las instituciones acumular a buen precio."
            },
            {
              question: "¿Qué deberías hacer si el timeframe alto (Diario) muestra LH/LL pero en M15 ves un CHoCH alcista?",
              options: [
                "Comprar inmediatamente porque el CHoCH en M15 cambia todo",
                "Ser cauteloso - el HTF bajista manda, el CHoCH en LTF puede ser solo un retroceso",
                "Ignorar ambas señales y no tradear",
                "Cambiar al gráfico de 1 minuto para más confirmación"
              ],
              correctIndex: 1,
              explanation: "El timeframe alto (HTF) siempre tiene prioridad. Un CHoCH en M15 dentro de una tendencia bajista en el Diario probablemente es solo un retroceso temporal, no un cambio de tendencia real. Mantente a favor del HTF."
            }
          ],
          practicalExercise: "Abre EUR/USD en gráfico H4 en TradingView. Identifica la tendencia actual marcando todos los HH, HL, LH y LL de las ultimas 2 semanas. Marca cada BOS con una línea horizontal verde y cada CHoCH con una línea horizontal roja. Determina en que fase del ciclo Wyckoff crees que esta el mercado ahora y justifica tu respuesta."
        },
        // --------------------------------------------------------------
        // LESSON 2-1-3: LINEAS DE TENDENCIA Y CANALES
        // --------------------------------------------------------------
        {
          id: "2-1-3",
          title: "Líneas de Tendencia y Canales",
          duration: "30 min",
          content: `
<h2>Lineas de Tendencia y Canales: Guias del Precio</h2>

<div class="analogy-box">
<h3>La Analogia de los Rieles del Tren</h3>
<p>Imagina que el precio es un tren. Las líneas de tendencia son los rieles que guian su dirección. Mientras el tren siga sobre los rieles, sabes hacia donde va. Cuando se sale de los rieles (rompe la línea de tendencia), algo esta cambiando. Los canales son como un tunel: el precio rebota entre el suelo y el techo del tunel.</p>
</div>

<h3>Como Dibujar Lineas de Tendencia Correctamente</h3>

<div class="strategy-box">
<h4>Las 3 Reglas de Oro</h4>
<ol>
<li><strong>Necesitas MINIMO 2 puntos de contacto</strong> para trazar una línea de tendencia, y 3 para confirmarla. Cuantos más toques, más fuerte es la línea.</li>
<li><strong>Conecta las MECHAS (wicks), no los cuerpos.</strong> Las mechas representan el máximo rechazo del precio. En una tendencia alcista, conecta los minimos de las mechas inferiores (los HL). En bajista, los maximos de las mechas superiores (los LH).</li>
<li><strong>No fuerces la línea.</strong> Si tienes que "torcer" la línea para que toque los puntos, probablemente no es válida. Una buena línea de tendencia debe verse natural y evidente.</li>
</ol>
</div>

<div class="highlight-box green">
<h4>Linea de Tendencia Alcista (Ascending Trendline)</h4>
<p>Se dibuja conectando <strong>dos o más minimos ascendentes (HL)</strong>. La línea va de abajo-izquierda a arriba-derecha. Actua como un <strong>soporte dinámico</strong>: mientras el precio se mantenga POR ENCIMA de la línea, la tendencia alcista sigue intacta.</p>
<p><strong>Trade:</strong> Cuando el precio retrocede y toca la línea de tendencia alcista, es una oportunidad de COMPRA con stop debajo de la línea.</p>
</div>

<div class="highlight-box red">
<h4>Linea de Tendencia Bajista (Descending Trendline)</h4>
<p>Se dibuja conectando <strong>dos o más maximos descendentes (LH)</strong>. La línea va de arriba-izquierda a abajo-derecha. Actua como una <strong>resistencia dinámica</strong>: mientras el precio se mantenga POR DEBAJO, la tendencia bajista sigue intacta.</p>
<p><strong>Trade:</strong> Cuando el precio sube y toca la línea de tendencia bajista, es una oportunidad de VENTA con stop por encima de la línea.</p>
</div>

<h3>Canales de Precio (Price Channels)</h3>

<p>Un canal se forma cuando trazas <strong>dos líneas de tendencia paralelas</strong> que contienen el movimiento del precio. El precio "rebota" entre la línea superior y la inferior como una pelota de ping-pong.</p>

<div class="grid-cards">
<div class="card">
<h4>Canal Ascendente</h4>
<p>Ambas líneas apuntan hacia arriba. La línea inferior conecta los HL (soporte dinámico) y la superior conecta los HH (resistencia dinámica). El mercado es alcista pero se puede operar en ambas direcciones dentro del canal.</p>
<p><strong>Compra:</strong> En la parte baja del canal (línea inferior). <strong>Venta parcial:</strong> En la parte alta (línea superior).</p>
</div>
<div class="card">
<h4>Canal Descendente</h4>
<p>Ambas líneas apuntan hacia abajo. La línea superior conecta los LH y la inferior los LL. El mercado es bajista. Opera a favor de la tendencia principal (ventas).</p>
<p><strong>Venta:</strong> En la parte alta del canal (línea superior). <strong>Compra parcial:</strong> Solo traders agresivos en la parte baja.</p>
</div>
<div class="card">
<h4>Canal Horizontal (Rango)</h4>
<p>Lineas paralelas horizontales. El precio no tiene tendencia clara. Es un rango clasico. Compra en soporte, vende en resistencia. O espera al breakout.</p>
<p><strong>Cuidado:</strong> Los breakouts de canales horizontales despues de larga consolidacion suelen ser muy explosivos.</p>
</div>
</div>

<h3>Trading de Canales: Estrategia Completa</h3>

<div class="strategy-box">
<h4>Estrategia de Canal en 5 Pasos</h4>
<ol>
<li><strong>Identifica el canal:</strong> Necesitas al menos 2 toques en cada línea (4 puntos total) para confirmar un canal válido.</li>
<li><strong>Opera a favor de la tendencia:</strong> En canal ascendente, prioriza COMPRAS en la línea inferior. En descendente, prioriza VENTAS en la superior.</li>
<li><strong>Entrada:</strong> Espera a que el precio toque una línea del canal + una vela de confirmación (pin bar, envolvente, etc.).</li>
<li><strong>Stop Loss:</strong> Justo fuera del canal (10-20 pips más alla de la línea). Si el precio sale del canal, tu trade esta invalidado.</li>
<li><strong>Take Profit:</strong> La línea opuesta del canal. Si compraste en la línea inferior, tu TP es la línea superior. El ratio R:R suele ser excelente (2:1 o mejor).</li>
</ol>
</div>

<div class="example-box">
<h4>Ejemplo: Canal Ascendente en GBP/USD H4</h4>
<p>El precio forma un canal ascendente claro con 3 toques en la línea inferior y 2 en la superior. El ancho del canal es de 150 pips. El precio acaba de tocar la línea inferior en 1.2650 con un martillo (hammer).</p>
<p><strong>Entrada:</strong> Compra en 1.2660 (tras confirmar martillo). <strong>Stop Loss:</strong> 1.2620 (40 pips debajo de la línea). <strong>Take Profit:</strong> 1.2800 (línea superior del canal = 140 pips). <strong>R:R = 3.5:1.</strong></p>
</div>

<h3>Rupturas de Lineas de Tendencia y Canales</h3>

<div class="highlight-box yellow">
<h4>Cuando Se Rompe un Canal</h4>
<p>Una ruptura de canal es una señal MUY potente porque indica que el equilibrio entre compradores y vendedores ha cambiado drasticamente.</p>
<ul>
<li><strong>Ruptura por arriba de canal ascendente:</strong> Aceleracion alcista. Movimiento explosivo al alza. Busca compras en pullback a la línea superior rota.</li>
<li><strong>Ruptura por abajo de canal ascendente:</strong> Posible cambio de tendencia. Señal de venta fuerte. Busca ventas en pullback a la línea inferior rota.</li>
<li><strong>Medida del movimiento:</strong> Despues de la ruptura, el precio suele moverse una distancia igual al ANCHO del canal. Si el canal media 100 pips, espera un movimiento de 100 pips desde el punto de ruptura.</li>
</ul>
</div>

<div class="warning-box">
<h4>Errores Comunes con Lineas de Tendencia</h4>
<ul>
<li><strong>Dibujar demasiadas líneas:</strong> Si tu gráfico parece una telaraña, tienes demasiadas líneas. Mantente con las 2-3 más importantes.</li>
<li><strong>Forzar líneas:</strong> Si necesitas "ajustar" la línea para que funcione, no es válida. Las buenas líneas son obvias.</li>
<li><strong>Ignorar el timeframe:</strong> Una línea de tendencia en M5 no tiene la misma fuerza que una en Diario. Siempre prioriza líneas de timeframes altos.</li>
<li><strong>No ajustar:</strong> Las líneas de tendencia se pueden redibujar. Si la tendencia se acelera o desacelera, ajusta tu línea a los nuevos puntos de contacto.</li>
</ul>
</div>`,
          keyPoints: [
            "Las líneas de tendencia necesitan mínimo 2 puntos para dibujar y 3 para confirmar",
            "Conecta las mechas (wicks), no los cuerpos de las velas",
            "Los canales son dos líneas de tendencia paralelas donde el precio rebota entre ellas",
            "En canal ascendente prioriza compras en la línea inferior; en descendente ventas en la superior",
            "Cuando un canal se rompe, el movimiento suele ser igual al ancho del canal",
            "No fuerces líneas de tendencia - si no son obvias, no son validas"
          ],
          quiz: [
            {
              question: "¿Cuántos puntos de contacto minimos necesitas para CONFIRMAR una línea de tendencia?",
              options: [
                "1 punto",
                "2 puntos",
                "3 puntos",
                "5 puntos"
              ],
              correctIndex: 2,
              explanation: "Con 2 puntos puedes DIBUJAR una línea, pero necesitas un tercer toque para CONFIRMAR que es una línea de tendencia válida que el mercado respeta."
            },
            {
              question: "¿Al dibujar una línea de tendencia alcista, que puntos conectas?",
              options: [
                "Los maximos (Higher Highs)",
                "Los minimos (Higher Lows) usando las mechas",
                "Los cierres de cada vela",
                "Cualquier punto que te convenga"
              ],
              correctIndex: 1,
              explanation: "Una línea de tendencia alcista conecta los minimos ascendentes (Higher Lows) utilizando las mechas inferiores de las velas, ya que representan el máximo rechazo del precio."
            },
            {
              question: "¿Despues de la ruptura de un canal de 120 pips de ancho, que movimiento se espera?",
              options: [
                "Exactamente 60 pips (la mitad del canal)",
                "Aproximadamente 120 pips desde el punto de ruptura",
                "No se puede predecir",
                "El precio siempre vuelve dentro del canal"
              ],
              correctIndex: 1,
              explanation: "La regla de medida de canales dice que el precio suele moverse una distancia igual al ancho del canal desde el punto de ruptura. Un canal de 120 pips de ancho proyecta un movimiento de 120 pips."
            }
          ],
          practicalExercise: "Abre GBP/USD en H4 en TradingView. Busca un canal de precio (ascendente, descendente o horizontal) de las ultimas 2-4 semanas. Dibuja las dos líneas del canal conectando al menos 2 puntos en cada línea. Mide el ancho del canal en pips. Si el precio esta cerca de una línea del canal, planifica un trade: donde entrarias, donde pondrias el stop loss y donde el take profit. Calcula tu ratio R:R."
        }
      ]
    },
    // ================================================================
    // MODULE 2-2: INDICADORES TECNICOS
    // ================================================================
    {
      id: "mod-2-2",
      title: "Indicadores Tecnicos",
      description: "Domina los indicadores que realmente usan los traders profesionales",
      icon: "📈",
      color: "#7C3AED",
      lessons: [
        // --------------------------------------------------------------
        // LESSON 2-2-1: MEDIAS MOVILES EN PROFUNDIDAD
        // --------------------------------------------------------------
        {
          id: "2-2-1",
          title: "Medias Móviles en Profundidad",
          duration: "35 min",
          content: `
<h2>Medias Moviles: Tu Primer Indicador Serio</h2>

<div class="analogy-box">
<h3>La Analogia del Promedio de Notas</h3>
<p>Imagina que sacas estas notas en 5 examenes: 6, 8, 7, 9, 10. Tu media es 8. Si mañana sacas un 4, tu nueva media baja a 7.3. La media "suaviza" tus resultados eliminando el ruido de un examen bueno o malo. Las medias moviles hacen exactamente lo mismo con el precio: suavizan el ruido para mostrarte la TENDENCIA real.</p>
</div>

<h3>SMA vs EMA: Las Dos Familias</h3>

<div class="comparison-table">
<div class="comparison-col">
<h4>SMA (Simple Moving Average)</h4>
<ul>
<li>Calcula el promedio simple de N periodos</li>
<li>Todos los precios pesan igual</li>
<li>Reacciona más LENTO a cambios</li>
<li>Mejor para identificar tendencias a largo plazo</li>
<li>Menos señales falsas</li>
</ul>
</div>
<div class="comparison-col">
<h4>EMA (Exponential Moving Average)</h4>
<ul>
<li>Da MAS peso a los precios recientes</li>
<li>Precios nuevos importan más que los viejos</li>
<li>Reacciona más RAPIDO a cambios</li>
<li>Mejor para trading activo y scalping</li>
<li>Mas señales (incluyendo falsas)</li>
</ul>
</div>
</div>

<div class="calculation-box">
<h4>Formula SMA</h4>
<p><strong>SMA(20) = (Cierre_1 + Cierre_2 + ... + Cierre_20) / 20</strong></p>
<p>Ejemplo: Si los ultimos 5 cierres de EUR/USD son 1.0810, 1.0820, 1.0830, 1.0825, 1.0815</p>
<p>SMA(5) = (1.0810 + 1.0820 + 1.0830 + 1.0825 + 1.0815) / 5 = <strong>1.0820</strong></p>
</div>

<h3>Los Periodos Mas Importantes</h3>

<div class="grid-cards">
<div class="card">
<h4>EMA 9 / EMA 21</h4>
<p><strong>Corto plazo.</strong> Las usan los scalpers y day traders. Reaccionan muy rápido. Ideales para entradas en M5-M15. El cruce de la 9 sobre la 21 es una señal clasica de cambio de momentum.</p>
</div>
<div class="card">
<h4>EMA 50</h4>
<p><strong>Medio plazo.</strong> La más importante para swing traders. Si el precio esta por encima de la EMA 50, la tendencia intermedia es alcista. Es un excelente soporte/resistencia dinámico.</p>
</div>
<div class="card">
<h4>SMA 100</h4>
<p><strong>Medio-largo plazo.</strong> Usada por muchos fondos institucionales. Actua como soporte/resistencia fuerte en gráficos diarios y semanales.</p>
</div>
<div class="card">
<h4>SMA 200</h4>
<p><strong>Largo plazo. LA MAS IMPORTANTE.</strong> La "línea de vida" del mercado. Si el precio esta encima: mercado alcista. Si esta debajo: mercado bajista. Es la media movil más observada del mundo.</p>
</div>
</div>

<h3>Cruces de Medias Moviles (Moving Average Crossovers)</h3>

<div style="display:flex;justify-content:center;margin:20px 0">
<svg width="460" height="200" viewBox="0 0 460 200" style="background:#131722;border-radius:12px;border:1px solid #2a2a40">
<text x="230" y="18" fill="white" font-size="11" text-anchor="middle" font-weight="bold">GOLDEN CROSS vs DEATH CROSS</text>
<!-- EMA rápida (21) -->
<polyline points="30,130 60,120 90,110 120,108 150,115 180,105 210,85 240,70 270,55 300,48 330,42 360,38 400,30" fill="none" stroke="#3b82f6" stroke-width="2"/>
<text x="410" y="33" fill="#3b82f6" font-size="8">EMA 21</text>
<!-- EMA lenta (50) -->
<polyline points="30,110 60,112 90,115 120,118 150,120 180,118 210,110 240,95 270,80 300,68 330,60 360,55 400,50" fill="none" stroke="#ff9800" stroke-width="2"/>
<text x="410" y="53" fill="#ff9800" font-size="8">EMA 50</text>
<!-- Punto de cruce -->
<circle cx="170" cy="112" r="8" fill="none" stroke="#26a69a" stroke-width="2.5"/>
<text x="170" y="140" fill="#26a69a" font-size="10" text-anchor="middle" font-weight="bold">GOLDEN CROSS</text>
<text x="170" y="153" fill="#26a69a" font-size="8" text-anchor="middle">EMA rápida cruza arriba = ALCISTA</text>
<!-- Precio subiendo tras cruce -->
<polyline points="170,112 200,90 230,75 260,60 290,50 320,42 350,35" fill="none" stroke="#26a69a33" stroke-width="8"/>
<text x="350" y="80" fill="#787b86" font-size="8" text-anchor="middle">El precio sube</text>
<text x="350" y="92" fill="#787b86" font-size="8" text-anchor="middle">tras el cruce</text>
<!-- Legend -->
<rect x="30" y="170" width="400" height="22" rx="4" fill="#131722" stroke="#2a2a40"/>
<circle cx="50" cy="181" r="4" fill="#3b82f6"/><text x="60" y="184" fill="#787b86" font-size="8">EMA Rapida (21)</text>
<circle cx="160" cy="181" r="4" fill="#ff9800"/><text x="170" y="184" fill="#787b86" font-size="8">EMA Lenta (50)</text>
<text x="310" y="184" fill="#787b86" font-size="8">Cruce arriba = compra | Cruce abajo = venta</text>
</svg>
</div>

<div class="highlight-box green">
<h4>Golden Cross (Cruz Dorada)</h4>
<p>La media movil corta (ej: SMA 50) cruza POR ENCIMA de la media movil larga (ej: SMA 200). Es una señal <strong>alcista</strong> potente. Historicamente, los Golden Cross en el S&P 500 han precedido rallies significativos. Traders institucionales y algoritmos monitorean este cruce.</p>
<p><strong>Ejemplo:</strong> Cuando la SMA 50 de Bitcoin cruzo por encima de la SMA 200 en octubre 2023, BTC paso de $27,000 a $73,000 en 5 meses.</p>
</div>

<div class="highlight-box red">
<h4>Death Cross (Cruz de la Muerte)</h4>
<p>La media movil corta cruza POR DEBAJO de la larga. Es una señal <strong>bajista</strong>. Indica que el momentum a corto plazo se ha deteriorado significativamente. Muchos gestores reducen posiciones cuando ocurre.</p>
<p><strong>Precaucion:</strong> Los cruces son indicadores RETRASADOS (lagging). Para cuando se produce el cruce, una parte del movimiento ya ha ocurrido. Usalos como confirmación, no como señal única de entrada.</p>
</div>

<h3>Medias Moviles como Soporte/Resistencia Dinamico</h3>

<div class="strategy-box">
<h4>Estrategia: EMA Bounce (Rebote en EMA)</h4>
<p>Este es uno de los setups más consistentes en trading. El concepto es simple: en tendencia, el precio retrocede hasta una media movil clave y rebota a favor de la tendencia.</p>
<ol>
<li><strong>Identifica la tendencia:</strong> Precio por encima de EMA 50 = alcista. Por debajo = bajista.</li>
<li><strong>Espera el retroceso:</strong> El precio debe retroceder HACIA la EMA (no a traves de ella).</li>
<li><strong>Confirmacion:</strong> Busca una vela de rechazo (martillo, envolvente) justo en la EMA.</li>
<li><strong>Entrada:</strong> Al cierre de la vela de confirmación.</li>
<li><strong>Stop Loss:</strong> 10-20 pips debajo de la EMA (para compras) o encima (para ventas).</li>
<li><strong>Take Profit:</strong> Ultimo swing high/low o 2x el riesgo.</li>
</ol>
</div>

<div class="example-box">
<h4>Ejemplo Real: EMA 21 Bounce en NAS100 M15</h4>
<p>NAS100 esta en tendencia alcista clara en M15. El precio retrocede y toca la EMA 21 en 18,250. Se forma un martillo con mecha larga inferior. Entrada: 18,260. Stop: 18,230 (30 puntos). TP: 18,350 (90 puntos). R:R = 3:1. El precio rebota y alcanza el TP en 2 horas.</p>
</div>

<h3>Moving Average Ribbon (Cinta de Medias Moviles)</h3>

<div class="highlight-box blue">
<h4>El Ribbon: Multiples EMAs para Leer la Fuerza</h4>
<p>Un ribbon son varias EMAs juntas (tipicamente: 5, 8, 13, 21, 34, 55, 89). Cuando estan SEPARADAS y en orden, la tendencia es fuerte. Cuando se COMPRIMEN (juntan), la tendencia se debilita o va a cambiar.</p>
<ul>
<li><strong>EMAs expandidas y en orden ascendente:</strong> Tendencia alcista fuerte. Busca compras.</li>
<li><strong>EMAs expandidas y en orden descendente:</strong> Tendencia bajista fuerte. Busca ventas.</li>
<li><strong>EMAs comprimidas (enredadas):</strong> Sin tendencia, rango. NO tradees. Espera.</li>
<li><strong>EMAs cruzandose entre si:</strong> Posible cambio de tendencia. Estate atento al CHoCH.</li>
</ul>
</div>

<div class="warning-box">
<h4>Errores Comunes con Medias Moviles</h4>
<ul>
<li><strong>Usar MAs en rango:</strong> Las medias moviles son INUTILES en mercados laterales. Generan señales falsas constantemente. Solo usalas en mercados con tendencia.</li>
<li><strong>Buscar el período "perfecto":</strong> No existe la MA perfecta. Lo importante es ser consistente. Elige tus periodos y mantelos.</li>
<li><strong>Entrar solo por un cruce:</strong> Un cruce de MAs sin otra confirmación (estructura, velas, volumen) tiene baja probabilidad. Siempre combina con otra señal.</li>
</ul>
</div>`,
          keyPoints: [
            "SMA da peso igual a todos los periodos; EMA da más peso a los precios recientes",
            "SMA 200 es la media movil más importante - define si el mercado es alcista o bajista",
            "Golden Cross (MA corta cruza arriba de MA larga) = señal alcista fuerte",
            "Las MAs actuan como soporte/resistencia dinámico - el 'EMA Bounce' es un setup clasico",
            "El Moving Average Ribbon muestra la fuerza de la tendencia por la separacion de las EMAs",
            "Las medias moviles son INUTILES en mercados laterales - solo usalas en tendencia"
          ],
          quiz: [
            {
              question: "¿Cuál es la diferencia principal entre SMA y EMA?",
              options: [
                "La SMA es más precisa que la EMA",
                "La EMA da más peso a los precios recientes, reacciona más rápido",
                "La SMA solo funciona en Forex y la EMA en cripto",
                "No hay ninguna diferencia significativa"
              ],
              correctIndex: 1,
              explanation: "La EMA (Exponential Moving Average) pondera más los precios recientes, haciendola más sensible a los cambios de precio. La SMA trata todos los precios por igual, haciendola más suave pero más lenta."
            },
            {
              question: "¿Qué indica un Golden Cross?",
              options: [
                "Señal bajista - el precio va a caer",
                "Señal alcista - la MA corta cruza por encima de la MA larga",
                "El precio ha tocado un nivel de soporte",
                "El volumen ha aumentado dramaticamente"
              ],
              correctIndex: 1,
              explanation: "El Golden Cross ocurre cuando la media movil de corto plazo (ej: SMA 50) cruza por encima de la de largo plazo (ej: SMA 200). Es una señal alcista historicamente asociada con rallies significativos."
            },
            {
              question: "¿En qué condicion de mercado las medias moviles dan PEORES señales?",
              options: [
                "En tendencia alcista fuerte",
                "En tendencia bajista fuerte",
                "En mercados laterales (rango)",
                "Funcionan igual de bien siempre"
              ],
              correctIndex: 2,
              explanation: "Las medias moviles son indicadores de TENDENCIA. En mercados laterales, el precio cruza las MAs constantemente generando señales falsas. Solo son utiles cuando hay una tendencia clara."
            },
            {
              question: "¿Qué indica un Moving Average Ribbon con las EMAs comprimidas y enredadas?",
              options: [
                "Tendencia alcista muy fuerte",
                "Tendencia bajista muy fuerte",
                "Mercado sin tendencia clara - no tradear",
                "Momento perfecto para entrar en un trade"
              ],
              correctIndex: 2,
              explanation: "Cuando las EMAs del ribbon se comprimen y se enredan entre si, indica que no hay tendencia clara. Es una señal de consolidacion/rango donde las estrategias de tendencia no funcionan. Mejor esperar."
            }
          ],
          practicalExercise: "En TradingView, abre EUR/USD diario. Agrega: EMA 21 (azul), EMA 50 (naranja) y SMA 200 (roja). Identifica: 1) Donde esta el precio respecto a cada MA (arriba o abajo), 2) Hay algun Golden Cross o Death Cross reciente? 3) Busca 3 ejemplos donde el precio reboto en la EMA 50 o SMA 200. 4) Agrega las EMAs 9, 13, 21, 34, 55 para crear un ribbon y determina si estan expandidas o comprimidas."
        },
        // --------------------------------------------------------------
        // LESSON 2-2-2: RSI, MACD Y MOMENTUM
        // --------------------------------------------------------------
        {
          id: "2-2-2",
          title: "RSI, MACD y Osciladores de Momentum",
          duration: "40 min",
          content: `
<h2>Osciladores de Momentum: Mide la Fuerza del Mercado</h2>

<div class="analogy-box">
<h3>La Analogia del Velocimetro</h3>
<p>Si las medias moviles te dicen la DIRECCION del coche (norte o sur), los osciladores de momentum te dicen la VELOCIDAD. Un coche puede ir hacia el norte pero FRENANDO (momentum debilitandose). O puede ir hacia el sur pero ACELERANDO (momentum creciente). Saber la velocidad te ayuda a predecir si el coche va a seguir o a parar.</p>
</div>

<h3>RSI (Relative Strength Index) - El Rey de los Osciladores</h3>

<div class="highlight-box blue">
<h4>Que es el RSI</h4>
<p>El RSI mide la <strong>fuerza relativa</strong> de los movimientos alcistas vs bajistas en un período (default: 14). Oscila entre 0 y 100.</p>
<ul>
<li><strong>RSI > 70:</strong> Sobrecompra (overbought). El precio ha subido "demasiado rápido". Puede corregir.</li>
<li><strong>RSI < 30:</strong> Sobreventa (oversold). El precio ha caido "demasiado rápido". Puede rebotar.</li>
<li><strong>RSI = 50:</strong> Zona neutra. Ni compradores ni vendedores dominan.</li>
</ul>
</div>

<div class="formula-box">
<h4>Formula del RSI</h4>
<p><strong>RSI = 100 - (100 / (1 + RS))</strong></p>
<p>Donde RS = Media de ganancias / Media de perdidas (en N periodos)</p>
<p>Si en 14 periodos la media de subidas es 1.2% y la media de bajadas es 0.8%: RS = 1.5, RSI = 60</p>
</div>

<div class="warning-box">
<h4>Error Fatal: RSI en Sobrecompra NO Significa "Vende"</h4>
<p>El error más comun de los principiantes. En una tendencia alcista FUERTE, el RSI puede mantenerse en sobrecompra durante SEMANAS. Bitcoin paso de 30,000$ a 69,000$ con el RSI diario constantemente por encima de 70. Vender solo porque el RSI esta en 75 en una tendencia fuerte te va a costar mucho dinero.</p>
<p><strong>Regla profesional:</strong> En tendencia alcista, RSI oscila entre 40 y 80. En tendencia bajista, entre 20 y 60. Ajusta tus niveles al contexto.</p>
</div>

<h3>Divergencias del RSI: El Setup Mas Poderoso</h3>

<div style="display:flex;justify-content:center;margin:20px 0">
<svg width="460" height="240" viewBox="0 0 460 240" style="background:#131722;border-radius:12px;border:1px solid #2a2a40">
<text x="230" y="18" fill="white" font-size="11" text-anchor="middle" font-weight="bold">DIVERGENCIA BAJISTA DEL RSI</text>
<!-- Precio (arriba) -->
<rect x="30" y="30" width="400" height="85" rx="0" fill="#131722" stroke="#1e222d" stroke-width="0.5"/>
<text x="40" y="45" fill="#787b86" font-size="8">PRECIO</text>
<!-- Precio sube -->
<polyline points="50,95 90,75 130,85 170,55 210,70 250,42 290,58 330,35" fill="none" stroke="#8b5cf6" stroke-width="2"/>
<circle cx="170" cy="55" r="4" fill="#8b5cf6"/><text x="170" y="50" fill="#8b5cf6" font-size="9" text-anchor="middle">HH</text>
<circle cx="250" cy="42" r="4" fill="#8b5cf6"/>
<circle cx="330" cy="35" r="4" fill="#ef5350"/><text x="330" y="30" fill="#ef5350" font-size="9" text-anchor="middle">HH (mas alto)</text>
<!-- Linea de tendencia precio -->
<line x1="170" y1="55" x2="330" y2="35" stroke="#8b5cf6" stroke-width="1.5" stroke-dasharray="4,3"/>
<text x="260" y="30" fill="#8b5cf6" font-size="7">Precio SUBE ↗</text>
<!-- RSI (abajo) -->
<rect x="30" y="125" width="400" height="85" rx="0" fill="#0d111a" stroke="#1e222d" stroke-width="0.5"/>
<text x="40" y="140" fill="#787b86" font-size="8">RSI (14)</text>
<line x1="30" y1="145" x2="430" y2="145" stroke="#333" stroke-width="0.5" stroke-dasharray="2,2"/><text x="432" y="148" fill="#555" font-size="6">70</text>
<line x1="30" y1="175" x2="430" y2="175" stroke="#333" stroke-width="0.5" stroke-dasharray="2,2"/><text x="432" y="178" fill="#555" font-size="6">50</text>
<!-- RSI baja -->
<polyline points="50,185 90,170 130,178 170,142 210,168 250,150 290,165 330,158" fill="none" stroke="#f59e0b" stroke-width="2"/>
<circle cx="170" cy="142" r="4" fill="#f59e0b"/><text x="170" y="138" fill="#f59e0b" font-size="8" text-anchor="middle">78</text>
<circle cx="330" cy="158" r="4" fill="#ef5350"/><text x="330" y="155" fill="#ef5350" font-size="8" text-anchor="middle">68</text>
<!-- Linea de tendencia RSI -->
<line x1="170" y1="142" x2="330" y2="158" stroke="#ef5350" stroke-width="1.5" stroke-dasharray="4,3"/>
<text x="260" y="165" fill="#ef5350" font-size="7">RSI BAJA ↘</text>
<!-- Divergencia label -->
<rect x="100" y="215" width="260" height="20" rx="6" fill="#ef535015" stroke="#ef535044"/>
<text x="230" y="229" fill="#ef5350" font-size="10" text-anchor="middle" font-weight="bold">DIVERGENCIA: Precio sube pero RSI baja = GIRO BAJISTA</text>
</svg>
</div>

<div class="highlight-box green">
<h4>Divergencia Regular Alcista (Bullish Divergence)</h4>
<p>El precio hace un <strong>nuevo mínimo (LL)</strong> pero el RSI hace un <strong>mínimo más alto (HL)</strong>. El precio baja pero la fuerza vendedora se debilita. Es una señal de que la caida esta perdiendo fuerza y puede venir un rebote o cambio de tendencia.</p>
<p><strong>Accion:</strong> Busca confirmación (vela de rechazo, CHoCH en LTF) y considera COMPRAS.</p>
</div>

<div class="highlight-box red">
<h4>Divergencia Regular Bajista (Bearish Divergence)</h4>
<p>El precio hace un <strong>nuevo máximo (HH)</strong> pero el RSI hace un <strong>máximo más bajo (LH)</strong>. El precio sube pero la fuerza compradora se debilita. Señal de que la subida se esta agotando.</p>
<p><strong>Accion:</strong> Busca confirmación y considera VENTAS.</p>
</div>

<div class="highlight-box purple">
<h4>Divergencia Oculta Alcista (Hidden Bullish Divergence)</h4>
<p>El precio hace un <strong>mínimo más alto (HL)</strong> pero el RSI hace un <strong>mínimo más bajo (LL)</strong>. Esto es una señal de CONTINUACION alcista. La tendencia se esta "recargando" para otro impulso al alza. Es la favorita de los traders de tendencia.</p>
</div>

<div class="highlight-box yellow">
<h4>Divergencia Oculta Bajista (Hidden Bearish Divergence)</h4>
<p>El precio hace un <strong>máximo más bajo (LH)</strong> pero el RSI hace un <strong>máximo más alto (HH)</strong>. Señal de continuacion bajista. La tendencia bajista se recarga.</p>
</div>

<h3>MACD (Moving Average Convergence Divergence)</h3>

<div class="highlight-box blue">
<h4>Los 3 Componentes del MACD</h4>
<ol>
<li><strong>Linea MACD:</strong> EMA(12) - EMA(26). Es la diferencia entre dos medias exponenciales. Cuando es positiva, la EMA rápida esta encima de la lenta (momentum alcista).</li>
<li><strong>Linea Signal:</strong> EMA(9) del MACD. Es un "suavizado" del MACD. Los cruces entre MACD y Signal generan señales.</li>
<li><strong>Histograma:</strong> MACD - Signal. Las barras del histograma. Cuando crecen = momentum acelerando. Cuando decrecen = momentum desacelerando.</li>
</ol>
</div>

<div class="grid-cards">
<div class="card">
<h4>Señal de Compra MACD</h4>
<p>La línea MACD cruza POR ENCIMA de la línea Signal. El histograma pasa de negativo a positivo. Especialmente potente cuando ocurre debajo de la línea cero (en territorio bajista cruzando a alcista).</p>
</div>
<div class="card">
<h4>Señal de Venta MACD</h4>
<p>La línea MACD cruza POR DEBAJO de la línea Signal. El histograma pasa de positivo a negativo. Mas potente cuando ocurre encima de la línea cero.</p>
</div>
<div class="card">
<h4>Divergencia MACD</h4>
<p>Igual que con RSI: si el precio hace nuevo HH pero el MACD no, divergencia bajista. Si el precio hace nuevo LL pero el MACD no, divergencia alcista. Busca divergencias en el histograma.</p>
</div>
<div class="card">
<h4>Histograma Decreciente</h4>
<p>Aunque el MACD este en territorio positivo, si las barras del histograma DECRECEN, el momentum se esta debilitando. Es una alerta temprana antes del cruce. Prepara tu salida o ajusta stops.</p>
</div>
</div>

<h3>Stochastic Oscillator (Estocastico)</h3>

<div class="highlight-box purple">
<h4>El Estocastico: Velocidad del Precio</h4>
<p>Mide donde esta el precio actual respecto a su rango de N periodos (default: 14). Tiene dos líneas: %K (rápida) y %D (lenta, media de %K).</p>
<ul>
<li><strong>Stochastic > 80:</strong> Sobrecompra. Pero en tendencia fuerte puede mantenerse ahi mucho tiempo.</li>
<li><strong>Stochastic < 20:</strong> Sobreventa. Posible rebote pero no actues solo por esto.</li>
<li><strong>Cruce %K y %D en sobrecompra:</strong> Señal de venta si confirma con estructura.</li>
<li><strong>Cruce %K y %D en sobreventa:</strong> Señal de compra si confirma con estructura.</li>
</ul>
</div>

<div class="strategy-box">
<h4>Combinacion Mortal: RSI + MACD + Estructura</h4>
<ol>
<li><strong>Paso 1 - Estructura:</strong> Identifica la tendencia en H4 (HH/HL = alcista).</li>
<li><strong>Paso 2 - RSI:</strong> Espera que el RSI en H1 llegue a zona 30-40 (sobreventa relativa en tendencia alcista).</li>
<li><strong>Paso 3 - MACD:</strong> Busca un cruce alcista del MACD o histograma creciendo en H1.</li>
<li><strong>Paso 4 - Entrada:</strong> Si los 3 se alinean + vela de confirmación, entra LONG.</li>
<li><strong>Resultado:</strong> Esta combinación filtra el 80% de señales falsas y te deja con setups de alta probabilidad.</li>
</ol>
</div>`,
          keyPoints: [
            "RSI mide fuerza relativa (0-100): >70 sobrecompra, <30 sobreventa, pero NO vender/comprar solo por eso",
            "Divergencia regular: precio hace nuevo extremo pero RSI no - señal de posible reversa",
            "Divergencia oculta: señal de CONTINUACION de tendencia, favorita de traders profesionales",
            "MACD tiene 3 componentes: línea MACD, Signal y Histograma - el histograma muestra aceleracion del momentum",
            "Nunca uses un oscilador solo - combinalo siempre con estructura de mercado y acción del precio",
            "En tendencia fuerte, el RSI puede permanecer en sobrecompra/sobreventa durante semanas"
          ],
          quiz: [
            {
              question: "¿El RSI de EUR/USD esta en 78 y el mercado esta en tendencia alcista fuerte. Que deberías hacer?",
              options: [
                "Vender inmediatamente porque esta en sobrecompra",
                "Nada especial - en tendencia alcista fuerte el RSI puede mantenerse en sobrecompra mucho tiempo",
                "Comprar más porque el RSI alto significa fuerza",
                "Cerrar todas tus posiciones"
              ],
              correctIndex: 1,
              explanation: "En tendencia alcista fuerte, el RSI rutinariamente se mantiene entre 40 y 80. Un RSI de 78 no es señal de venta automática. Necesitas ver una divergencia, un CHoCH o una ruptura de estructura para considerar ventas."
            },
            {
              question: "¿El precio hace un nuevo mínimo (LL) pero el RSI hace un mínimo más alto (HL). Que tipo de divergencia es?",
              options: [
                "Divergencia regular bajista",
                "Divergencia oculta alcista",
                "Divergencia regular alcista",
                "No es una divergencia"
              ],
              correctIndex: 2,
              explanation: "Divergencia regular alcista: precio hace LL pero RSI hace HL. La fuerza vendedora se debilita. El precio baja pero el momentum no acompaña. Señal de posible reversa alcista."
            },
            {
              question: "¿En el MACD, que indica un histograma que pasa de barras crecientes a barras decrecientes (aun siendo positivo)?",
              options: [
                "La tendencia alcista se esta acelerando",
                "No indica nada relevante",
                "El momentum alcista se esta debilitando - alerta temprana",
                "Debes comprar más inmediatamente"
              ],
              correctIndex: 2,
              explanation: "Un histograma MACD decreciente (aunque siga positivo) indica que el momentum se esta desacelerando. Es una alerta temprana de que el movimiento puede estar agotandose, antes de que se produzca el cruce MACD/Signal."
            },
            {
              question: "¿Qué tipo de divergencia indica CONTINUACION de la tendencia existente?",
              options: [
                "Divergencia regular",
                "Divergencia oculta",
                "Ambas indican continuacion",
                "Ninguna indica continuacion"
              ],
              correctIndex: 1,
              explanation: "Las divergencias ocultas indican continuacion de tendencia. En tendencia alcista: precio hace HL pero RSI hace LL = divergencia oculta alcista (continuacion al alza). Las regulares indican posible reversa."
            }
          ],
          practicalExercise: "En TradingView, abre BTC/USD en H4. Agrega el RSI(14) y MACD(12,26,9). Busca: 1) Al menos una divergencia regular (alcista o bajista) de los ultimos 2 meses - marca donde el precio y el RSI divergen. 2) Identifica un cruce MACD alcista que haya resultado en un movimiento significativo. 3) Encuentra un momento donde el histograma MACD empezo a decrecer antes de que el precio cayera. 4) Anota si las divergencias coincidieron con niveles de soporte/resistencia."
        },
        // --------------------------------------------------------------
        // LESSON 2-2-3: VOLUMEN Y VOLUME PROFILE
        // --------------------------------------------------------------
        {
          id: "2-2-3",
          title: "Volumen y Volume Profile",
          duration: "35 min",
          content: `
<h2>Volumen: La Verdad Detras del Precio</h2>

<div class="analogy-box">
<h3>La Analogia de la Manifestacion</h3>
<p>Imagina que hay una votacion en tu ciudad. Si 100 personas votan "Si", el resultado es significativo. Pero si solo 3 personas votan, el resultado no importa. El volumen es igual: un movimiento de precio con ALTO volumen es como una votacion masiva - es real y significativo. Un movimiento con BAJO volumen es como una votacion de 3 personas - probablemente no se mantendra.</p>
</div>

<h3>Lectura Basica del Volumen</h3>

<div class="grid-cards">
<div class="card">
<h4>Precio Sube + Volumen Alto</h4>
<p><strong>ALCISTA FUERTE.</strong> Muchos participantes estan comprando. La subida tiene conviccion. Probablemente continuara. Es un movimiento "saludable".</p>
</div>
<div class="card">
<h4>Precio Sube + Volumen Bajo</h4>
<p><strong>SOSPECHOSO.</strong> El precio sube pero pocos estan comprando. La subida puede ser un retroceso temporal dentro de una tendencia bajista. Desconfia.</p>
</div>
<div class="card">
<h4>Precio Baja + Volumen Alto</h4>
<p><strong>BAJISTA FUERTE.</strong> Muchos participantes estan vendiendo (o hay panico). La caida es real. Puede haber más caida por venir. O puede ser capitulacion (final de la caida).</p>
</div>
<div class="card">
<h4>Precio Baja + Volumen Bajo</h4>
<p><strong>RETROCESO NORMAL.</strong> Un retroceso saludable en una tendencia alcista suele tener volumen decreciente. Los compradores no estan vendiendo, simplemente no hay nuevas compras temporalmente.</p>
</div>
</div>

<h3>Picos de Volumen (Volume Spikes)</h3>

<div class="highlight-box yellow">
<h4>Que Indican los Picos de Volumen</h4>
<p>Un pico de volumen (una barra 3-5x más grande que el promedio) indica un evento significativo:</p>
<ul>
<li><strong>Pico en maximos:</strong> Posible distribucion. Las instituciones pueden estar vendiendo a los compradores tardios. Señal de posible techo.</li>
<li><strong>Pico en minimos:</strong> Posible capitulacion. Los vendedores se rinden masivamente. A menudo marca el fondo. Es el "panic selling".</li>
<li><strong>Pico en breakout:</strong> CONFIRMACION. Un breakout de soporte/resistencia con alto volumen es mucho más fiable que uno con bajo volumen.</li>
<li><strong>Pico sin movimiento de precio:</strong> Absorcion. Las instituciones estan absorbiendo todas las ventas (o compras) sin dejar que el precio se mueva. Señal MUY alcista (o bajista).</li>
</ul>
</div>

<h3>OBV (On-Balance Volume)</h3>

<div class="highlight-box blue">
<h4>El Indicador que Anticipa Movimientos</h4>
<p>El OBV es un indicador acumulativo: si la vela cierra alcista, su volumen se SUMA al total. Si cierra bajista, se RESTA. El resultado es una línea que muestra el flujo acumulado de volumen.</p>
<p><strong>La clave:</strong> Si el OBV sube pero el precio esta lateral, las instituciones estan acumulando. Cuando el precio "alcance" al OBV, habra un breakout alcista. Y viceversa para bajista.</p>
</div>

<div class="example-box">
<h4>Ejemplo: OBV Divergencia en Gold (XAUUSD)</h4>
<p>El oro consolida entre 2,000$ y 2,050$ durante 2 semanas. El precio parece "aburrido". Pero el OBV esta subiendo consistentemente: cada dia que sube tiene más volumen que cada dia que baja. Las instituciones estan acumulando silenciosamente. Cuando el oro rompe 2,050$, explota a 2,100$ en 3 dias. El OBV lo anticipo.</p>
</div>

<h3>Volume Profile: La Herramienta Institucional</h3>

<div class="highlight-box purple">
<h4>Que es Volume Profile</h4>
<p>Mientras las barras de volumen muestran CUANTO volumen hubo en cada PERIODO de tiempo, el <strong>Volume Profile</strong> muestra cuanto volumen hubo en cada NIVEL DE PRECIO. Es un histograma horizontal que te dice: "En este precio se tradearon X contratos".</p>
</div>

<div class="grid-cards">
<div class="card">
<h4>POC (Point of Control)</h4>
<p>El nivel de precio con MAYOR volumen. Es donde más contratos se intercambiaron. Actua como un iman: el precio tiende a volver al POC. Es el "precio justo" según el mercado. Los institucionales colocan muchas ordenes aquí.</p>
</div>
<div class="card">
<h4>Value Area (VA)</h4>
<p>El rango de precios donde se ejecuto el <strong>70% del volumen total</strong>. Tiene un tope (VAH - Value Area High) y un suelo (VAL - Value Area Low). El precio pasa la mayor parte del tiempo dentro del Value Area.</p>
</div>
<div class="card">
<h4>High Volume Nodes (HVN)</h4>
<p>Niveles con mucho volumen. Actuan como zonas de consolidacion, soportes/resistencias fuertes. El precio tiende a "pegarse" a estos niveles. Son como imanes.</p>
</div>
<div class="card">
<h4>Low Volume Nodes (LVN)</h4>
<p>Niveles con poco volumen. El precio pasa RAPIDAMENTE por estas zonas porque no hay interes. Son como "vacios" donde el precio acelera. Cuando el precio entra en un LVN, espera un movimiento rápido hasta el siguiente HVN.</p>
</div>
</div>

<div class="strategy-box">
<h4>Estrategia con Volume Profile</h4>
<ol>
<li><strong>Identifica el POC del dia/semana anterior:</strong> Es tu referencia principal. Si el precio abre por encima del POC, sesgo alcista. Por debajo, sesgo bajista.</li>
<li><strong>Usa VAH y VAL como S/R:</strong> El Value Area High actua como resistencia y el VAL como soporte. Tradea los rebotes en estos niveles.</li>
<li><strong>Busca LVN para targets:</strong> Si el precio rompe el VAH, el próximo objetivo es el siguiente HVN (nodo de alto volumen). El precio viajara rápido por los LVN.</li>
<li><strong>Observa la forma del perfil:</strong> Un perfil con forma de "D" indica equilibrio. Un perfil con forma de "b" o "P" indica desbalance (compradores o vendedores dominantes).</li>
</ol>
</div>

<div class="example-box">
<h4>Ejemplo Practico: Trading con Volume Profile en ES (S&P 500 Futures)</h4>
<p>El POC del dia anterior esta en 5,200. El VAH en 5,220 y el VAL en 5,180. El mercado abre en 5,210 (dentro del Value Area, encima del POC).</p>
<p><strong>Escenario 1 (precio sube a VAH):</strong> Si el precio toca 5,220 y rechaza, vende con target al POC (5,200). SL en 5,230.</p>
<p><strong>Escenario 2 (precio rompe VAH):</strong> Si cierra vela por encima de 5,220 con volumen, compra con target en el siguiente HVN. El precio viajara rápido por el LVN entre 5,220 y 5,250.</p>
</div>

<div class="warning-box">
<h4>Nota sobre Volumen en Forex</h4>
<p>El volumen real de Forex no existe publicamente porque es un mercado descentralizado (OTC). El volumen que ves en tu broker es solo el volumen de ESE broker, no del mercado entero. Para Forex, el volumen es una referencia, no un dato exacto. En Futuros (CME), Acciones y Cripto, el volumen si es real y preciso.</p>
</div>`,
          keyPoints: [
            "Volumen confirma el precio: movimiento con alto volumen es más fiable que con bajo volumen",
            "Precio sube + volumen bajo = sospechoso; precio sube + volumen alto = alcista fuerte",
            "OBV anticipa movimientos: si el OBV sube mientras el precio esta lateral, se prepara un breakout alcista",
            "Volume Profile muestra volumen por NIVEL DE PRECIO, no por tiempo",
            "El POC (Point of Control) actua como iman - el precio tiende a volver a el",
            "Los LVN (Low Volume Nodes) son zonas donde el precio se mueve RAPIDAMENTE"
          ],
          quiz: [
            {
              question: "¿El precio rompe una resistencia importante pero el volumen es muy bajo. Que significa?",
              options: [
                "Es un breakout fuerte y fiable",
                "Es sospechoso - un breakout sin volumen puede ser un fakeout",
                "El volumen no importa en breakouts",
                "Debes comprar inmediatamente"
              ],
              correctIndex: 1,
              explanation: "Un breakout necesita volumen para ser válido. Un breakout con bajo volumen indica que pocos participantes estan convencidos, lo que aumenta drasticamente la probabilidad de un fakeout."
            },
            {
              question: "¿Qué es el POC (Point of Control) en Volume Profile?",
              options: [
                "El precio más alto del dia",
                "El precio de cierre",
                "El nivel de precio donde se ejecuto el mayor volumen",
                "El promedio de todos los precios"
              ],
              correctIndex: 2,
              explanation: "El POC es el nivel de precio con mayor volumen operado. Representa el 'precio justo' según el mercado y actua como un iman que atrae al precio. Es un soporte/resistencia muy fuerte."
            },
            {
              question: "¿El OBV esta subiendo pero el precio se mantiene lateral. Que esta ocurriendo?",
              options: [
                "No esta pasando nada importante",
                "Las instituciones estan vendiendo",
                "Las instituciones estan acumulando silenciosamente - posible breakout alcista",
                "El indicador esta roto"
              ],
              correctIndex: 2,
              explanation: "Cuando el OBV sube mientras el precio esta lateral, significa que el volumen en los dias alcistas es mayor que en los bajistas. Las instituciones estan comprando sin mover el precio. Cuando la acumulación se complete, el precio rompera al alza."
            }
          ],
          practicalExercise: "En TradingView, abre NAS100 o S&P500 en H1. Agrega el indicador Volume Profile (Visible Range). Identifica: 1) El POC - marca con una línea horizontal. 2) El Value Area High y Low. 3) Busca los LVN (huecos en el perfil) donde el precio viajaria rápido. 4) Agrega el OBV y compara si confirma o contradice la dirección del precio. 5) En las ultimas 5 velas, verifica si el volumen confirma el movimiento del precio."
        }
      ]
    },
    // ================================================================
    // MODULE 2-3: PATRONES Y FIBONACCI
    // ================================================================
    {
      id: "mod-2-3",
      title: "Patrones y Fibonacci",
      description: "Fibonacci, patrones de gráfico y análisis multi-timeframe para setups de alta probabilidad",
      icon: "🔢",
      color: "#6D28D9",
      lessons: [
        // --------------------------------------------------------------
        // LESSON 2-3-1: FIBONACCI COMPLETO
        // --------------------------------------------------------------
        {
          id: "2-3-1",
          title: "Fibonacci Completo: Retrocesos y Extensiones",
          duration: "40 min",
          content: `
<h2>Fibonacci: Las Matematicas del Mercado</h2>

<div class="analogy-box">
<h3>La Analogia de la Liga Elastica</h3>
<p>Imagina que estiras una liga elastica. Cuanto más la estiras, más fuerza tiene para volver. El precio funciona igual: despues de un movimiento impulsivo fuerte, tiende a "retroceder" una porcion predecible del movimiento antes de continuar. Los niveles de Fibonacci son esas porciones: 38.2%, 50%, 61.8%, 78.6%. El mercado "respira" en estos ritmos.</p>
</div>

<h3>La Secuencia de Fibonacci y el Ratio Dorado</h3>

<div class="highlight-box blue">
<h4>Los Numeros Magicos</h4>
<p>La secuencia: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144... Cada número es la suma de los dos anteriores. El ratio entre números consecutivos converge a <strong>1.618</strong> (el ratio dorado o Phi). Este ratio aparece en la naturaleza (espirales de conchas, petalos de flores) y también en los mercados financieros.</p>
<p>Los ratios de Fibonacci usados en trading: <strong>0.236, 0.382, 0.500, 0.618, 0.786, 1.000, 1.272, 1.618, 2.618</strong></p>
</div>

<div style="display:flex;justify-content:center;margin:24px 0">
<svg width="460" height="260" viewBox="0 0 460 260" style="background:#131722;border-radius:12px;border:1px solid #2a2a40">
<text x="230" y="18" fill="white" font-size="11" text-anchor="middle" font-weight="bold">RETROCESOS DE FIBONACCI</text>
<!-- Impulso alcista -->
<line x1="40" y1="220" x2="140" y2="35" stroke="#26a69a" stroke-width="3"/>
<circle cx="40" cy="220" r="4" fill="#26a69a"/><text x="15" y="225" fill="#26a69a" font-size="8">Swing Low</text>
<circle cx="140" cy="35" r="4" fill="#26a69a"/><text x="115" y="28" fill="#26a69a" font-size="8">Swing High</text>
<!-- Fib levels -->
<line x1="140" y1="35" x2="420" y2="35" stroke="#26a69a55" stroke-width="0.8" stroke-dasharray="3,3"/><text x="425" y="38" fill="#26a69a" font-size="8">0%</text>
<line x1="140" y1="79" x2="420" y2="79" stroke="#42a5f555" stroke-width="0.8" stroke-dasharray="3,3"/><text x="425" y="82" fill="#42a5f5" font-size="8">23.6%</text>
<line x1="140" y1="106" x2="420" y2="106" stroke="#60a5fa88" stroke-width="0.8" stroke-dasharray="3,3"/><text x="425" y="109" fill="#60a5fa" font-size="8">38.2%</text>
<line x1="140" y1="127" x2="420" y2="127" stroke="#fbbf2488" stroke-width="0.8" stroke-dasharray="3,3"/><text x="425" y="130" fill="#fbbf24" font-size="8">50%</text>
<line x1="140" y1="149" x2="420" y2="149" stroke="#ff980088" stroke-width="1" stroke-dasharray="3,3"/><text x="425" y="152" fill="#ff9800" font-size="8" font-weight="bold">61.8%</text>
<line x1="140" y1="180" x2="420" y2="180" stroke="#ef535088" stroke-width="0.8" stroke-dasharray="3,3"/><text x="425" y="183" fill="#ef5350" font-size="8">78.6%</text>
<line x1="140" y1="220" x2="420" y2="220" stroke="#ef535055" stroke-width="0.8" stroke-dasharray="3,3"/><text x="425" y="223" fill="#ef5350" font-size="8">100%</text>
<!-- OTE Zone highlight -->
<rect x="140" y="145" width="280" height="40" rx="4" fill="#ff980012" stroke="#ff980044" stroke-width="1.5"/>
<text x="280" y="172" fill="#ff9800" font-size="11" text-anchor="middle" font-weight="bold">ZONA OTE (61.8% - 78.6%)</text>
<!-- Retroceso y rebote -->
<polyline points="140,35 180,55 200,75 230,149 250,140 280,90 320,50 370,30" fill="none" stroke="#8b5cf6" stroke-width="2"/>
<circle cx="230" cy="149" r="5" fill="#ff9800"/>
<text x="235" y="145" fill="#ff9800" font-size="9" font-weight="bold">Entrada OTE</text>
<text x="230" y="250" fill="#787b86" font-size="9" text-anchor="middle">El 61.8% (Golden Ratio) es el nivel más importante de Fibonacci</text>
</svg>
</div>

<h3>Retrocesos de Fibonacci (Fibonacci Retracements)</h3>

<div class="highlight-box purple">
<h4>Que Son los Retrocesos</h4>
<p>Los retrocesos de Fibonacci miden CUANTO retrocede el precio despues de un movimiento impulsivo. Si el EUR/USD sube de 1.0800 a 1.1000 (200 pips de impulso), los retrocesos te dicen donde es PROBABLE que el retroceso se detenga y el precio continue subiendo.</p>
</div>

<div class="grid-cards">
<div class="card">
<h4>23.6% - Retroceso Superficial</h4>
<p>Tendencia MUY fuerte. Apenas retrocede. Si el precio solo llega al 23.6%, la tendencia tiene mucha fuerza y urgencia. Dificil de tradear porque el retroceso es mínimo.</p>
</div>
<div class="card">
<h4>38.2% - Retroceso Moderado</h4>
<p>Tendencia fuerte. Primer nivel "serio" de retroceso. En tendencias fuertes, el 38.2% suele ser suficiente para que el precio rebote. Combinado con soporte horizontal, es excelente.</p>
</div>
<div class="card">
<h4>50% - Nivel Psicologico</h4>
<p>No es un ratio Fibonacci real, pero es el nivel más observado. "El precio retrocede la mitad del movimiento." Muchos traders institucionales colocan ordenes aquí.</p>
</div>
<div class="card">
<h4>61.8% - El Ratio Dorado</h4>
<p>El nivel MAS IMPORTANTE de Fibonacci. El 61.8% es el ratio dorado y el retroceso más observado en el mundo. Si el precio llega al 61.8% y lo respeta, la probabilidad de continuacion es muy alta.</p>
</div>
</div>

<h3>La OTE Zone (Optimal Trade Entry)</h3>

<div class="highlight-box green">
<h4>La Zona de Entrada Optima: 61.8% - 78.6%</h4>
<p>Los traders de Smart Money Concepts (ICT) llaman a la zona entre el <strong>61.8% y 78.6%</strong> de Fibonacci la "OTE Zone" (Optimal Trade Entry). Es la zona donde las instituciones prefieren entrar porque ofrece el mejor ratio riesgo/recompensa.</p>
<p><strong>Por que funciona:</strong> Un retroceso al 61.8-78.6% te permite entrar con un stop loss corto (debajo del 100%) y un target largo (extension del 127.2% o 161.8%). Esto da ratios R:R de 3:1 o mejores.</p>
</div>

<div class="strategy-box">
<h4>Como Dibujar Fibonacci Correctamente</h4>
<ol>
<li><strong>Identifica un impulso claro:</strong> Un movimiento de swing low a swing high (para retroceso alcista) o de swing high a swing low (para retroceso bajista). Debe ser un movimiento IMPULSIVO, no un retroceso.</li>
<li><strong>En TradingView:</strong> Selecciona la herramienta "Fibonacci Retracement" (en la barra lateral izquierda).</li>
<li><strong>Para impulso ALCISTA:</strong> Haz clic en el MINIMO del impulso y arrastra hasta el MAXIMO. El 0% estará arriba (el máximo) y el 100% abajo (el mínimo).</li>
<li><strong>Para impulso BAJISTA:</strong> Haz clic en el MAXIMO y arrastra hasta el MINIMO. El 0% abajo y el 100% arriba.</li>
<li><strong>Busca confluencia:</strong> Los mejores trades ocurren cuando un nivel Fibonacci coincide con otra señal: soporte/resistencia horizontal, media movil, línea de tendencia. Cuanta más confluencia, mejor.</li>
</ol>
</div>

<h3>Extensiones de Fibonacci (Fibonacci Extensions)</h3>

<div class="highlight-box yellow">
<h4>Para Que Sirven las Extensiones</h4>
<p>Mientras los retrocesos te dicen DONDE entrar, las extensiones te dicen DONDE tomar beneficios (take profit). Las extensiones proyectan hasta donde puede llegar el SIGUIENTE impulso despues del retroceso.</p>
</div>

<div class="grid-cards">
<div class="card">
<h4>Extension 127.2%</h4>
<p>Primer target conservador. Si el precio retroceso al 61.8%, el primer TP natural es la extension 127.2%. En tendencias normales, este nivel se alcanza frecuentemente.</p>
</div>
<div class="card">
<h4>Extension 161.8%</h4>
<p>Target principal. El ratio dorado aplicado como extension. Es el take profit preferido de muchos profesionales. Si entras en la OTE zone (61.8%) con TP en 161.8%, tu R:R suele ser 3:1 o mejor.</p>
</div>
<div class="card">
<h4>Extension 200%</h4>
<p>Movimiento simetrico. El precio ha recorrido la misma distancia que el impulso original medido desde el fin del retroceso. Target agresivo que se alcanza en tendencias fuertes.</p>
</div>
<div class="card">
<h4>Extension 261.8%</h4>
<p>Target extendido. Solo se alcanza en tendencias muy fuertes o movimientos parabolicos. Usa trailing stop si apuntas a este nivel.</p>
</div>
</div>

<h3>Confluencia: Cuando Fibonacci Se Vuelve Poderoso</h3>

<div class="example-box">
<h4>Ejemplo de Setup Fibonacci con Confluencia Perfecta en EUR/USD H4</h4>
<p>EUR/USD impulsa de 1.0750 a 1.1000 (250 pips). Ahora retrocede.</p>
<ul>
<li><strong>Fib 50%:</strong> 1.0875</li>
<li><strong>Fib 61.8%:</strong> 1.0845</li>
<li><strong>Fib 78.6%:</strong> 1.0803</li>
<li><strong>Soporte horizontal previo:</strong> 1.0850 (resistencia que se convirtio en soporte)</li>
<li><strong>EMA 50 en H4:</strong> 1.0855</li>
</ul>
<p>La zona 1.0840-1.0860 tiene TRIPLE confluencia: Fib 61.8%, soporte horizontal y EMA 50. Esta es una zona de entrada de alta probabilidad.</p>
<p><strong>Trade:</strong> Compra en 1.0850. SL en 1.0790 (debajo del 78.6%). TP1 en extension 127.2% = 1.1070. TP2 en extension 161.8% = 1.1155. R:R del TP1 = 3.7:1.</p>
</div>

<div class="warning-box">
<h4>Reglas Importantes de Fibonacci</h4>
<ul>
<li><strong>Fibonacci NO es magia:</strong> No todos los retrocesos se detienen en niveles Fib. Es una herramienta de PROBABILIDAD, no una certeza.</li>
<li><strong>Necesitas un impulso CLARO:</strong> Si no puedes identificar un impulso impulsivo obvio, no uses Fibonacci. En rangos no funciona.</li>
<li><strong>Siempre busca confluencia:</strong> Un nivel Fib SOLO es debil. Un nivel Fib + S/R + EMA + divergencia RSI = setup de alta probabilidad.</li>
<li><strong>Si el precio rompe el 100% del retroceso:</strong> Tu análisis esta INVALIDADO. El impulso que usaste ya no es válido. Acepta la perdida y reevalua.</li>
</ul>
</div>`,
          keyPoints: [
            "Los ratios clave de retroceso son: 38.2%, 50%, 61.8% (ratio dorado) y 78.6%",
            "La OTE Zone (Optimal Trade Entry) esta entre 61.8% y 78.6% del retroceso",
            "Las extensiones (127.2%, 161.8%, 261.8%) te dicen donde tomar beneficios",
            "Para impulso alcista: dibuja Fibonacci del mínimo al máximo del impulso",
            "Fibonacci solo es potente cuando tiene CONFLUENCIA con otras herramientas (S/R, EMA, divergencia)",
            "Si el precio rompe el 100% del retroceso, el análisis esta invalidado"
          ],
          quiz: [
            {
              question: "¿Cuál es el nivel de retroceso de Fibonacci MAS importante y observado?",
              options: [
                "23.6%",
                "38.2%",
                "50%",
                "61.8%"
              ],
              correctIndex: 3,
              explanation: "El 61.8% es el ratio dorado (derivado de la secuencia de Fibonacci) y es el nivel de retroceso más importante y observado en todos los mercados. Es la base de la OTE Zone."
            },
            {
              question: "¿Qué es la OTE Zone (Optimal Trade Entry)?",
              options: [
                "La zona entre 0% y 23.6%",
                "La zona entre 38.2% y 50%",
                "La zona entre 61.8% y 78.6% del retroceso",
                "Cualquier nivel de Fibonacci"
              ],
              correctIndex: 2,
              explanation: "La OTE Zone esta entre el 61.8% y 78.6% del retroceso de Fibonacci. Ofrece el mejor ratio riesgo/recompensa porque el stop es relativamente corto (debajo del 100%) y el target es amplio."
            },
            {
              question: "¿Para dibujar Fibonacci en un impulso ALCISTA, de donde a donde dibujas?",
              options: [
                "Del máximo al mínimo",
                "Del mínimo (inicio del impulso) al máximo (final del impulso)",
                "Del cierre de una vela al cierre de otra",
                "No importa la dirección"
              ],
              correctIndex: 1,
              explanation: "Para un impulso alcista, dibujas Fibonacci del punto más bajo (swing low, inicio del impulso) al punto más alto (swing high, final del impulso). El 0% queda arriba y el 100% abajo."
            },
            {
              question: "¿El precio retrocede y toca el 61.8% de Fibonacci. Este nivel coincide con un soporte horizontal y la EMA 50. Que significa?",
              options: [
                "Demasiadas confluencias - es confuso",
                "Es una zona de entrada de ALTA probabilidad por la triple confluencia",
                "Debes esperar a que rompa todos los niveles",
                "Fibonacci no funciona con otros indicadores"
              ],
              correctIndex: 1,
              explanation: "La confluencia multiple (Fibonacci + soporte horizontal + EMA) crea una zona de alta probabilidad. Cuantas más herramientas independientes señalen el mismo nivel, mayor la probabilidad de que el precio reaccione ahi."
            }
          ],
          practicalExercise: "En TradingView, abre BTCUSD en H4. Encuentra el último impulso alcista o bajista claro (al menos 500 puntos). Dibuja el retroceso de Fibonacci. Identifica: 1) Donde esta el 38.2%, 50%, 61.8% y 78.6%. 2) Alguno de estos niveles coincide con un soporte/resistencia horizontal? 3) Alguno coincide con una EMA (21 o 50)? 4) Si encontraste confluencia, planifica un trade: entrada en la zona de confluencia, SL debajo del 100%, TP en extension 161.8%. Calcula el R:R."
        },
        // --------------------------------------------------------------
        // LESSON 2-3-2: PATRONES DE GRAFICO
        // --------------------------------------------------------------
        {
          id: "2-3-2",
          title: "Patrones de Gráfico Clásicos",
          duration: "40 min",
          content: `
<h2>Patrones de Grafico: El Lenguaje Visual del Mercado</h2>

<div class="analogy-box">
<h3>La Analogia de las Huellas</h3>
<p>Cuando un detective examina una escena del crimen, busca patrones en las huellas para reconstruir lo que paso. Los patrones de gráfico son las "huellas" que dejan compradores y vendedores. Un doble techo es como dos intentos fallidos de escapar por una ventana. Un triangulo es como dos paredes que se estrechan hasta que alguien tiene que salir por un lado.</p>
</div>

<h3>Patrones de Reversión (Cambio de Tendencia)</h3>

<div style="display:flex;justify-content:center;gap:20px;margin:20px 0;flex-wrap:wrap">
<!-- DOBLE TECHO -->
<svg width="220" height="160" viewBox="0 0 220 160" style="background:#131722;border-radius:10px;border:1px solid #2a2a40">
<text x="110" y="16" fill="#ef5350" font-size="9" text-anchor="middle" font-weight="bold">DOBLE TECHO (M) - BAJISTA</text>
<polyline points="20,120 50,90 80,40 100,80 130,42 160,95 190,130" fill="none" stroke="#ef5350" stroke-width="2"/>
<circle cx="80" cy="40" r="3" fill="#ef5350"/><circle cx="130" cy="42" r="3" fill="#ef5350"/>
<line x1="60" y1="40" x2="150" y2="40" stroke="#ef535055" stroke-width="1" stroke-dasharray="3,3"/>
<text x="105" y="35" fill="#ef5350" font-size="7" text-anchor="middle">Resistencia</text>
<line x1="40" y1="80" x2="170" y2="80" stroke="#ff9800" stroke-width="1" stroke-dasharray="4,3"/>
<text x="175" y="83" fill="#ff9800" font-size="7">Neckline</text>
<text x="110" y="150" fill="#787b86" font-size="8" text-anchor="middle">Forma de "M"</text>
</svg>
<!-- DOBLE SUELO -->
<svg width="220" height="160" viewBox="0 0 220 160" style="background:#131722;border-radius:10px;border:1px solid #2a2a40">
<text x="110" y="16" fill="#26a69a" font-size="9" text-anchor="middle" font-weight="bold">DOBLE SUELO (W) - ALCISTA</text>
<polyline points="20,40 50,70 80,125 100,80 130,122 160,65 190,30" fill="none" stroke="#26a69a" stroke-width="2"/>
<circle cx="80" cy="125" r="3" fill="#26a69a"/><circle cx="130" cy="122" r="3" fill="#26a69a"/>
<line x1="60" y1="125" x2="150" y2="125" stroke="#26a69a55" stroke-width="1" stroke-dasharray="3,3"/>
<text x="105" y="138" fill="#26a69a" font-size="7" text-anchor="middle">Soporte</text>
<line x1="40" y1="80" x2="170" y2="80" stroke="#ff9800" stroke-width="1" stroke-dasharray="4,3"/>
<text x="175" y="83" fill="#ff9800" font-size="7">Neckline</text>
<text x="110" y="150" fill="#787b86" font-size="8" text-anchor="middle">Forma de "W"</text>
</svg>
<!-- HEAD & SHOULDERS -->
<svg width="220" height="160" viewBox="0 0 220 160" style="background:#131722;border-radius:10px;border:1px solid #2a2a40">
<text x="110" y="16" fill="#ef5350" font-size="9" text-anchor="middle" font-weight="bold">CABEZA Y HOMBROS - BAJISTA</text>
<polyline points="15,110 35,85 55,60 65,85 85,65 105,25 120,65 140,85 155,55 175,85 195,115" fill="none" stroke="#ef5350" stroke-width="2"/>
<text x="55" y="55" fill="#787b86" font-size="7" text-anchor="middle">Hombro</text>
<text x="105" y="20" fill="#ef5350" font-size="7" text-anchor="middle">Cabeza</text>
<text x="155" y="50" fill="#787b86" font-size="7" text-anchor="middle">Hombro</text>
<line x1="35" y1="85" x2="175" y2="85" stroke="#ff9800" stroke-width="1.5" stroke-dasharray="4,3"/>
<text x="185" y="88" fill="#ff9800" font-size="7">Neckline</text>
<text x="110" y="150" fill="#787b86" font-size="8" text-anchor="middle">Cambio de tendencia</text>
</svg>
</div>

<div class="highlight-box red">
<h4>Doble Techo (Double Top) - Patrón Bajista</h4>
<p>El precio sube y toca una resistencia, retrocede, vuelve a subir al MISMO nivel y vuelve a ser rechazado. Forma una "M" en el gráfico. Indica que los compradores no pudieron romper la resistencia en dos intentos.</p>
<ul>
<li><strong>Confirmacion:</strong> El precio rompe por debajo del "neckline" (el mínimo entre los dos techos) con volumen.</li>
<li><strong>Target:</strong> La distancia del techo al neckline, proyectada hacia abajo desde el punto de ruptura.</li>
<li><strong>Entrada:</strong> En la ruptura del neckline o en el retest posterior.</li>
</ul>
</div>

<div class="highlight-box green">
<h4>Doble Suelo (Double Bottom) - Patrón Alcista</h4>
<p>El opuesto del doble techo. El precio cae a un soporte, rebota, vuelve a caer al MISMO nivel y vuelve a rebotar. Forma una "W" en el gráfico. Los vendedores no pudieron romper el soporte.</p>
<ul>
<li><strong>Confirmacion:</strong> Ruptura por encima del neckline (máximo entre los dos suelos) con volumen.</li>
<li><strong>Target:</strong> Distancia del suelo al neckline, proyectada hacia arriba.</li>
<li><strong>Nota:</strong> El segundo suelo puede ser ligeramente más alto o más bajo que el primero. No necesita ser exacto al pip.</li>
</ul>
</div>

<div class="pattern-card">
<h4>Head and Shoulders (Cabeza y Hombros) - El Patrón Más Fiable</h4>
<p>Considerado el patrón de reversión más fiable del análisis técnico. Tiene 3 picos: hombro izquierdo, cabeza (el pico más alto) y hombro derecho (mas bajo que la cabeza). Los tres picos estan conectados por un "neckline" en los minimos.</p>
<div class="grid-cards">
<div class="card">
<h4>H&S Normal (Bajista)</h4>
<p>Aparece al final de una tendencia alcista. El hombro derecho más bajo que la cabeza = compradores perdiendo fuerza. Ruptura del neckline = confirmación de venta.</p>
<p><strong>Target:</strong> Distancia de la cabeza al neckline, proyectada hacia abajo.</p>
</div>
<div class="card">
<h4>H&S Invertido (Alcista)</h4>
<p>Aparece al final de una tendencia bajista. Tres valles con el del medio (cabeza) siendo el más profundo. Ruptura del neckline hacia arriba = señal de compra.</p>
<p><strong>Target:</strong> Distancia de la cabeza al neckline, proyectada hacia arriba.</p>
</div>
</div>
</div>

<h3>Patrones de Continuacion</h3>

<div class="grid-cards">
<div class="card">
<h4>Triangulo Simetrico</h4>
<p>Las líneas de tendencia superior e inferior convergen formando un triangulo. El precio comprime entre maximos cada vez más bajos y minimos cada vez más altos. Puede romper en cualquier dirección, pero generalmente continua la tendencia previa.</p>
<p><strong>Trade:</strong> Espera la ruptura con volumen. Target = altura del triangulo en su parte más ancha.</p>
</div>
<div class="card">
<h4>Triangulo Ascendente (Bullish)</h4>
<p>Resistencia horizontal + minimos ascendentes. Los compradores son cada vez más agresivos (compran más caro cada vez) contra una resistencia fija. Alta probabilidad de ruptura ALCISTA.</p>
<p><strong>Trade:</strong> Compra en ruptura de la resistencia o compra en la línea de tendencia inferior con SL debajo.</p>
</div>
<div class="card">
<h4>Triangulo Descendente (Bearish)</h4>
<p>Soporte horizontal + maximos descendentes. Los vendedores son cada vez más agresivos contra un soporte fijo. Alta probabilidad de ruptura BAJISTA.</p>
<p><strong>Trade:</strong> Vende en ruptura del soporte o vende en la línea de tendencia superior con SL encima.</p>
</div>
</div>

<div class="grid-cards">
<div class="card">
<h4>Bandera Alcista (Bull Flag)</h4>
<p>Despues de un movimiento impulsivo fuerte al alza ("asta" de la bandera), el precio consolida en un canal descendente estrecho (la "bandera"). Es una pausa antes de continuar al alza. El volumen DECRECE durante la bandera.</p>
<p><strong>Target:</strong> La altura del asta, proyectada desde el punto de ruptura de la bandera.</p>
</div>
<div class="card">
<h4>Bandera Bajista (Bear Flag)</h4>
<p>Lo opuesto: impulso bajista fuerte, luego consolidacion en canal ascendente. El precio descansa antes de continuar bajando. Muy comun en tendencias bajistas fuertes.</p>
<p><strong>Nota:</strong> Las banderas son de los patrones más fiables. En tendencias fuertes, aparecen múltiples banderas seguidas.</p>
</div>
<div class="card">
<h4>Cuña Ascendente (Rising Wedge) - Bajista</h4>
<p>Similar a un triangulo pero ambas líneas apuntan HACIA ARRIBA. Los maximos suben pero cada vez menos. Los minimos suben pero cada vez menos. La tendencia se agota. Ruptura tipicamente BAJISTA.</p>
<p><strong>Engaño:</strong> Parece alcista (el precio sube) pero la compresión indica agotamiento. Es una trampa para compradores.</p>
</div>
<div class="card">
<h4>Cuña Descendente (Falling Wedge) - Alcista</h4>
<p>Ambas líneas apuntan HACIA ABAJO pero convergen. Parece bajista pero es alcista. Los vendedores pierden fuerza progresivamente. Ruptura tipicamente ALCISTA.</p>
<p><strong>Nota:</strong> Las cuñas pueden ser de reversión (al final de tendencia) o de continuacion (como pausa en una tendencia).</p>
</div>
</div>

<h3>Medicion de Targets en Patrones</h3>

<div class="strategy-box">
<h4>Regla Universal de Medicion</h4>
<p>Para TODOS los patrones, el target de precio se mide así:</p>
<ol>
<li><strong>Mide la ALTURA del patron</strong> en su punto más ancho (del nivel más alto al más bajo dentro del patron).</li>
<li><strong>Proyecta esa distancia</strong> desde el punto de RUPTURA en la dirección de la ruptura.</li>
<li><strong>Ese es tu target MINIMO.</strong> En tendencias fuertes, el precio puede ir mucho más alla.</li>
</ol>
<p><strong>Ejemplo:</strong> Doble techo con maximos en 1.1200 y neckline en 1.1100. Altura = 100 pips. Si rompe el neckline, target = 1.1100 - 100 = 1.1000.</p>
</div>

<div class="warning-box">
<h4>Reglas Criticas para Patrones</h4>
<ul>
<li><strong>Siempre espera la CONFIRMACION (ruptura).</strong> Un patrón no esta "completo" hasta que rompe el neckline o la línea clave. Muchos patrones fallan.</li>
<li><strong>Volumen es tu aliado:</strong> La ruptura debe venir con volumen creciente. Sin volumen, desconfia.</li>
<li><strong>No busques patrones donde no hay:</strong> Si tienes que forzar la interpretacion, probablemente no es un patrón válido. Los buenos patrones son OBVIOS.</li>
<li><strong>Contexto importa:</strong> Un doble techo en una tendencia alcista fuerte de HTF puede fallar. Los patrones funcionan mejor cuando van A FAVOR de la tendencia del timeframe superior.</li>
</ul>
</div>`,
          keyPoints: [
            "Doble techo (M) = patrón bajista; Doble suelo (W) = patrón alcista",
            "Head & Shoulders es considerado el patrón de reversión más fiable del análisis técnico",
            "Triangulo ascendente = sesgo alcista; descendente = sesgo bajista; simetrico = depende del contexto",
            "Las banderas (flags) son de los patrones de continuacion más fiables",
            "Cuña ascendente es BAJISTA (engaño); cuña descendente es ALCISTA",
            "Target de cualquier patrón = altura del patrón proyectada desde el punto de ruptura"
          ],
          quiz: [
            {
              question: "¿Un doble techo tiene sus maximos en 1.3500 y el neckline en 1.3400. Si se confirma, cual es el target?",
              options: [
                "1.3300 (100 pips debajo del neckline)",
                "1.3600 (100 pips encima del techo)",
                "1.3450 (mitad entre techo y neckline)",
                "No se puede calcular"
              ],
              correctIndex: 0,
              explanation: "Altura del patrón = 1.3500 - 1.3400 = 100 pips. Se proyecta esa distancia hacia ABAJO desde el punto de ruptura (neckline): 1.3400 - 100 = 1.3300."
            },
            {
              question: "¿Una cuña ascendente (rising wedge) es un patrón de que tipo?",
              options: [
                "Alcista - porque el precio sube",
                "Bajista - indica agotamiento de la tendencia alcista",
                "Neutral - puede ir en cualquier dirección",
                "Solo aparece en mercados de cripto"
              ],
              correctIndex: 1,
              explanation: "Aunque parece alcista (el precio sube), la cuña ascendente es un patrón BAJISTA. Las dos líneas convergentes hacia arriba indican que los compradores pierden fuerza progresivamente. La ruptura típica es hacia abajo."
            },
            {
              question: "¿Qué patrón de gráfico se forma despues de un impulso fuerte al alza seguido de una consolidacion en canal descendente estrecho?",
              options: [
                "Doble techo",
                "Triangulo simetrico",
                "Bandera alcista (Bull Flag)",
                "Cuña descendente"
              ],
              correctIndex: 2,
              explanation: "Una bandera alcista (bull flag) se forma cuando hay un impulso fuerte al alza (el 'asta'), seguido de una consolidacion en un canal descendente estrecho (la 'bandera'). Es un patrón de continuacion que indica que la tendencia alcista probablemente continuara."
            },
            {
              question: "¿Cuál es la señal de CONFIRMACION para un Head and Shoulders?",
              options: [
                "Cuando se forma el hombro derecho",
                "Cuando el precio rompe el neckline con volumen",
                "Cuando la cabeza es más alta que los hombros",
                "Cuando el volumen es alto en el hombro izquierdo"
              ],
              correctIndex: 1,
              explanation: "Un H&S no esta confirmado hasta que el precio rompe el neckline (la línea que conecta los minimos entre los hombros) con volumen significativo. Antes de eso, el patrón puede fallar."
            }
          ],
          practicalExercise: "En TradingView, abre 4 gráficos diferentes (EUR/USD, GBP/USD, BTCUSD, NAS100) en H4 o Diario. Busca al menos 1 patrón de cada tipo: 1) Un doble techo o doble suelo. 2) Un triangulo (simetrico, ascendente o descendente). 3) Una bandera (bull flag o bear flag). 4) Una cuña (ascendente o descendente). Para cada patron: marca los puntos clave, dibuja el neckline o líneas de ruptura, y calcula el target proyectado."
        },
        // --------------------------------------------------------------
        // LESSON 2-3-3: MULTI-TIMEFRAME ANALYSIS
        // --------------------------------------------------------------
        {
          id: "2-3-3",
          title: "Análisis Multi-Timeframe: El Arma Secreta",
          duration: "40 min",
          content: `
<h2>Multi-Timeframe Analysis (MTA): Ver el Bosque Y los Arboles</h2>

<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin:16px 0">
<div style="border-radius:8px;overflow:hidden;border:1px solid #2a2a40">
<img src="/charts/chart-eurusd-d1.png" alt="EUR/USD Diario" style="width:100%;display:block" />
<div style="padding:6px;background:#131722;text-align:center"><span style="color:#ef5350;font-size:10px;font-weight:bold">D1 - Tendencia</span></div>
</div>
<div style="border-radius:8px;overflow:hidden;border:1px solid #2a2a40">
<img src="/charts/chart-eurusd-h4.png" alt="EUR/USD H4" style="width:100%;display:block" />
<div style="padding:6px;background:#131722;text-align:center"><span style="color:#f59e0b;font-size:10px;font-weight:bold">H4 - Setup</span></div>
</div>
<div style="border-radius:8px;overflow:hidden;border:1px solid #2a2a40">
<img src="/charts/chart-eurusd-h1.png" alt="EUR/USD H1" style="width:100%;display:block" />
<div style="padding:6px;background:#131722;text-align:center"><span style="color:#26a69a;font-size:10px;font-weight:bold">H1 - Entrada</span></div>
</div>
</div>
<p style="text-align:center;color:#555;font-size:10px;margin-bottom:12px">EUR/USD en 3 temporalidades - Capturas reales de TradingView</p>

<div class="analogy-box">
<h3>La Analogia de Google Maps</h3>
<p>Cuando usas Google Maps, primero miras el mapa grande para ver la dirección general (norte, sur). Luego haces zoom para ver las calles. Y finalmente más zoom para encontrar la entrada exacta del edificio. El análisis multi-timeframe es igual: el <strong>timeframe alto</strong> te da la dirección, el <strong>medio</strong> te da la zona, y el <strong>bajo</strong> te da la entrada precisa.</p>
</div>

<h3>El Concepto Fundamental: HTF vs LTF</h3>

<div class="highlight-box blue">
<h4>HTF (Higher Time Frame) - El Jefe</h4>
<p>El timeframe alto MANDA. Define la dirección general del mercado. Tu NUNCA operas contra la tendencia del HTF. Si el diario es alcista, solo buscas COMPRAS. Punto.</p>
<ul>
<li><strong>Swing Traders:</strong> HTF = Semanal/Diario</li>
<li><strong>Day Traders:</strong> HTF = Diario/H4</li>
<li><strong>Scalpers:</strong> HTF = H4/H1</li>
</ul>
</div>

<div class="highlight-box purple">
<h4>LTF (Lower Time Frame) - El Francotirador</h4>
<p>El timeframe bajo te da la ENTRADA PRECISA. Aqui buscas el setup específico: la vela de confirmación, el patrón de entrada, el timing exacto. No defines dirección en LTF - ya la tienes del HTF.</p>
<ul>
<li><strong>Swing Traders:</strong> LTF = H4/H1</li>
<li><strong>Day Traders:</strong> LTF = M15/M5</li>
<li><strong>Scalpers:</strong> LTF = M5/M1</li>
</ul>
</div>

<h3>La Regla de los 3 Timeframes</h3>

<div class="strategy-box">
<h4>El Framework de 3 Pantallas (Adaptado de Alexander Elder)</h4>
<ol>
<li><strong>Pantalla 1 - HTF (La Tendencia):</strong> Mira el gráfico más alto para determinar la TENDENCIA. Usa estructura de mercado (HH/HL o LH/LL) y medias moviles (precio respecto a SMA 200). Esto define si buscas COMPRAS o VENTAS. No buscas entradas aquí.</li>
<li><strong>Pantalla 2 - MTF (La Zona):</strong> Baja un timeframe para encontrar la ZONA de entrada. Aqui buscas niveles de Fibonacci, soportes/resistencias, zonas de Supply/Demand, o Order Blocks donde el precio podría reaccionar a favor de la tendencia del HTF.</li>
<li><strong>Pantalla 3 - LTF (La Entrada):</strong> Baja al timeframe más bajo para encontrar el TRIGGER exacto de entrada. Busca un CHoCH a favor de tu dirección, un patrón de velas de confirmación, o una ruptura de mini-estructura que confirme que el precio va en tu dirección.</li>
</ol>
</div>

<h3>Combinaciones de Timeframes Recomendadas</h3>

<div class="comparison-table">
<div class="comparison-col">
<h4>Day Trading</h4>
<ul>
<li><strong>HTF:</strong> Diario (tendencia)</li>
<li><strong>MTF:</strong> H1 (zona)</li>
<li><strong>LTF:</strong> M15 o M5 (entrada)</li>
</ul>
</div>
<div class="comparison-col">
<h4>Swing Trading</h4>
<ul>
<li><strong>HTF:</strong> Semanal (tendencia)</li>
<li><strong>MTF:</strong> Diario (zona)</li>
<li><strong>LTF:</strong> H4 (entrada)</li>
</ul>
</div>
</div>

<div class="highlight-box yellow">
<h4>Regla del Factor 4-6x</h4>
<p>La relación entre timeframes debe ser de 4 a 6 veces. El M15 es ~4x el M5. El H4 es 4x el H1. El Diario es ~6x el H4. NO saltes de Semanal a M5 directamente - la diferencia es demasiado grande y perderás contexto. Siempre usa un timeframe intermedio.</p>
</div>

<h3>Workflow Practico Paso a Paso</h3>

<div class="strategy-box">
<h4>Tu Rutina de Analisis Multi-Timeframe (Day Trading)</h4>
<ol>
<li><strong>DIARIO (5 minutos):</strong> Abre el gráfico diario de tu par. Preguntate: Cual es la tendencia? (HH/HL = alcista, LH/LL = bajista). Donde estan los niveles clave de S/R? Hay algun patrón grande formandose? El precio esta cerca de la SMA 200?</li>
<li><strong>H1 (10 minutos):</strong> Baja a H1. Identifica la estructura interna. Donde estan los niveles de Fibonacci del último impulso? Hay alguna zona de confluencia (Fib + S/R + EMA)? Marca tu "zona de interes" - el area donde buscas entradas.</li>
<li><strong>M15/M5 (Ejecucion):</strong> Solo miras M15/M5 CUANDO el precio llega a tu zona de interes en H1. Aqui buscas el trigger: CHoCH en M15 a favor de tu dirección, vela envolvente, o martillo en tu zona. ESTA es tu entrada.</li>
<li><strong>Ejecuta el trade:</strong> Entrada en LTF. Stop loss basado en la estructura de LTF (debajo del último HL en compras). Take profit basado en MTF/HTF (próximo nivel de S/R en H1 o extension Fibonacci).</li>
</ol>
</div>

<div class="example-box">
<h4>Ejemplo Completo: Multi-Timeframe en GBP/USD</h4>
<p><strong>Diario:</strong> Tendencia alcista (HH/HL). Precio por encima de SMA 200. Soporte fuerte en 1.2700. Conclusion: solo buscar COMPRAS.</p>
<p><strong>H1:</strong> El precio acaba de hacer un impulso de 1.2700 a 1.2850. Ahora retrocede. El Fibonacci 61.8% = 1.2757. La EMA 50 en H1 esta en 1.2760. Soporte horizontal previo en 1.2750. TRIPLE confluencia en la zona 1.2750-1.2765.</p>
<p><strong>M15:</strong> El precio llega a 1.2755 (dentro de la zona). En M15, se forma un CHoCH alcista: el precio rompe un LH, formando el primer HH en M15. Aparece un martillo con mecha larga inferior. TRIGGER confirmado.</p>
<p><strong>Trade:</strong> Compra en 1.2765 (cierre del martillo en M15). SL en 1.2735 (30 pips, debajo del HL del CHoCH en M15). TP1 en 1.2850 (85 pips, último HH en H1 = R:R 2.8:1). TP2 en extension 161.8% = 1.2940 (175 pips = R:R 5.8:1).</p>
</div>

<h3>Errores Fatales del Multi-Timeframe</h3>

<div class="warning-box">
<h4>Los 5 Errores que Destruyen Cuentas</h4>
<ul>
<li><strong>1. Operar CONTRA el HTF:</strong> El error número 1. Si el diario es bajista, NO busques compras en M15. Es como nadar contra la corriente del rio.</li>
<li><strong>2. Analisis-paralisis:</strong> Mirar 7 timeframes diferentes te confunde. Elige 3 y mantente con ellos. Mas timeframes NO es mejor.</li>
<li><strong>3. Buscar entradas en el HTF:</strong> El HTF es para DIRECCION, no para entradas. Si entras en el diario, tu stop loss sera enorme. Usa el LTF para precision.</li>
<li><strong>4. Ignorar el MTF:</strong> Saltar del Diario a M5 directamente pierde contexto. El timeframe medio (H1) es donde identificas las zonas de interes.</li>
<li><strong>5. Cambiar de timeframe durante el trade:</strong> Una vez que entras, gestiona el trade en el timeframe de entrada. No bajes a M1 buscando motivos para salir por miedo.</li>
</ul>
</div>

<div class="highlight-box green">
<h4>La Regla de Oro del Multi-Timeframe</h4>
<p><strong>El HTF decide la DIRECCION. El MTF decide la ZONA. El LTF decide la ENTRADA.</strong> Cuando los 3 timeframes estan alineados a favor de tu trade, tienes un setup de maxima probabilidad. Esa alineacion es lo que separa a los traders profesionales de los amateurs.</p>
</div>`,
          keyPoints: [
            "HTF define DIRECCION (tendencia), MTF define ZONA (donde entrar), LTF define ENTRADA (trigger exacto)",
            "NUNCA operes contra la tendencia del timeframe alto - es el error más comun y costoso",
            "Usa la regla del factor 4-6x entre timeframes: Diario→H1→M15 o Semanal→Diario→H4",
            "La triple confluencia (Fib + S/R + EMA en la misma zona) es el setup de más alta probabilidad",
            "El análisis de 3 pantallas: tendencia en HTF, zona en MTF, trigger en LTF",
            "Una vez dentro del trade, gestiona en el timeframe de entrada - no bajes a M1 por miedo"
          ],
          quiz: [
            {
              question: "¿El gráfico diario de EUR/USD muestra tendencia bajista (LH/LL). En M15 ves un CHoCH alcista. Que haces?",
              options: [
                "Compras inmediatamente - el CHoCH en M15 indica cambio de tendencia",
                "Ignoras el CHoCH en M15 - probablemente es solo un retroceso dentro de la tendencia bajista del diario",
                "Cambias a M1 para buscar más confirmación alcista",
                "Esperas al cierre semanal"
              ],
              correctIndex: 1,
              explanation: "El HTF SIEMPRE manda. Un CHoCH en M15 dentro de una tendencia bajista en el Diario es muy probablemente solo un retroceso temporal (la onda correctiva). Deberias buscar VENTAS cuando ese retroceso alcista termine, no compras."
            },
            {
              question: "¿Cuál es la combinación de timeframes recomendada para day trading?",
              options: [
                "Semanal - Diario - H4",
                "Diario - H1 - M15/M5",
                "H1 - M15 - M1",
                "Mensual - Semanal - Diario"
              ],
              correctIndex: 1,
              explanation: "Para day trading, la combinación ideal es: Diario (tendencia general), H1 (zonas de interes e identificacion de niveles) y M15/M5 (entrada precisa y trigger). Esto mantiene la relación 4-6x entre timeframes."
            },
            {
              question: "¿En el framework de 3 pantallas, para que usas el timeframe MEDIO (MTF)?",
              options: [
                "Para determinar la tendencia general",
                "Para encontrar el trigger exacto de entrada",
                "Para identificar zonas de interes (Fibonacci, S/R, confluencia)",
                "Para gestionar el trade despues de entrar"
              ],
              correctIndex: 2,
              explanation: "El MTF (timeframe medio) sirve para identificar las ZONAS de interes donde buscas entrar: niveles de Fibonacci, soportes/resistencias, confluencias. No defines tendencia (eso es HTF) ni buscas entrada exacta (eso es LTF)."
            },
            {
              question: "¿Por qué NO deberías saltar directamente del gráfico Semanal al M5?",
              options: [
                "Porque TradingView no lo permite",
                "Porque la diferencia es demasiado grande y pierdes el contexto intermedio",
                "Porque el M5 tiene demasiadas velas",
                "Porque el Semanal se actualiza muy lento"
              ],
              correctIndex: 1,
              explanation: "Saltar de Semanal a M5 pierde todo el contexto intermedio. Los niveles del Semanal son demasiado amplios para entradas en M5. Necesitas el timeframe intermedio (Diario/H4) para identificar las zonas de interes dentro del contexto del Semanal."
            }
          ],
          practicalExercise: "Realiza un análisis multi-timeframe COMPLETO de EUR/USD o GBP/USD siguiendo estos pasos exactos: 1) DIARIO: Identifica la tendencia (HH/HL o LH/LL), marca los niveles clave de S/R, y decide tu sesgo (compras o ventas). 2) H1: Dibuja Fibonacci del último impulso, identifica EMAs, y encuentra tu 'zona de interes' donde hay confluencia. 3) M15: Si el precio ya esta en tu zona, busca un trigger (CHoCH, patrón de velas). Si no esta en tu zona, ESPERA. 4) Documenta todo: captura de pantalla de cada timeframe, tu zona de entrada, stop loss, take profit y ratio R:R."
        }
      ]
    },
    // ================================================================
    // MODULE 2-4: ANALISIS FUNDAMENTAL Y CORRELACIONES
    // ================================================================
    {
      id: "mod-2-4",
      title: "Análisis Fundamental y Correlaciones",
      description: "Entiende QUE mueve el precio desde la perspectiva macroeconomica",
      icon: "🌍",
      color: "#F59E0B",
      lessons: [
        {
          id: "2-4-1",
          title: "Análisis Fundamental: Las Noticias que Mueven el Mercado",
          duration: "30 min",
          content: `
<h2>Analisis Fundamental para Traders</h2>
<div class="analogy-box"><h3>El Analisis Fundamental es el PORQUE</h3><p>El análisis técnico te dice DONDE puede ir el precio. El fundamental te dice POR QUE. Imagina que ves nubes negras (fundamental) y miras la app del tiempo (técnico). Ambos te dan información útil. Juntos, son poderosos.</p></div>
<h3>Los 5 Eventos Economicos que MAS Mueven el Mercado</h3>
<div class="grid-cards">
<div class="card"><h4>1. NFP (Non-Farm Payrolls)</h4><p>Primer viernes de cada mes. Empleo en EEUU. El dato MAS importante del mes. El dolar se mueve 50-100 pips en minutos.</p><p class="text-xs mt-1" style="color:#f59e0b">Impacto: EXTREMO</p></div>
<div class="card"><h4>2. CPI (Inflacion)</h4><p>Mensual. Si la inflacion sube, los bancos centrales suben tipos de interes = moneda se fortalece.</p><p class="text-xs mt-1" style="color:#ef4444">Impacto: MUY ALTO</p></div>
<div class="card"><h4>3. Decisiones de Tipos de Interes</h4><p>Fed (USD), BCE (EUR), BoE (GBP). Tipos altos = moneda fuerte. Tipos bajos = moneda debil.</p><p class="text-xs mt-1" style="color:#ef4444">Impacto: MUY ALTO</p></div>
<div class="card"><h4>4. PIB (GDP)</h4><p>Trimestral. Mide el crecimiento economico. PIB alto = economía fuerte = moneda fuerte.</p><p class="text-xs mt-1" style="color:#f59e0b">Impacto: ALTO</p></div>
</div>
<h3>El Calendario Economico: Tu Mejor Amigo</h3>
<div class="strategy-box"><h4>Como Usar Forex Factory</h4><ol>
<li>Ve a <strong>forexfactory.com/calendar</strong> CADA DIA antes de operar</li>
<li>Filtra por noticias de <strong>ALTO IMPACTO</strong> (icono rojo)</li>
<li>Anota la hora exacta de cada noticia</li>
<li><strong>REGLA:</strong> NO abras operaciones 30 minutos antes ni 15 minutos despues de una noticia de alto impacto</li>
<li>Si ya tienes una operación abierta, cierra antes de la noticia o pon SL ajustado</li>
</ol></div>
<h3>Tipos de Interes: El Motor del Forex</h3>
<div class="highlight-box blue"><h4>La Regla de Oro del Fundamental</h4><p>El dinero fluye hacia donde hay MAYOR rendimiento. Si EEUU sube los tipos de interes y Europa los mantiene, el USD se fortalece contra el EUR (EUR/USD baja). Asi de simple.</p></div>
<div class="comparison-table">
<div class="comparison-col"><h4>Datos MEJORES que lo esperado</h4><ul><li>NFP sale 250K vs esperado 180K</li><li>Moneda del pais se FORTALECE</li><li>USD sube → EUR/USD BAJA</li></ul></div>
<div class="comparison-col"><h4>Datos PEORES que lo esperado</h4><ul><li>NFP sale 120K vs esperado 180K</li><li>Moneda del pais se DEBILITA</li><li>USD baja → EUR/USD SUBE</li></ul></div>
</div>
<div class="warning-box"><h4>REGLA para Principiantes sobre Noticias</h4><p>NO tradees noticias directamente. La volatilidad es extrema y puede activar tu SL en segundos. Espera a que el polvo se asiente (15-30 min despues) y opera la REACCION, no la noticia.</p></div>
<h3>Sentimiento de Mercado</h3>
<div class="grid-cards">
<div class="card"><h4>Risk-On (Apetito por riesgo)</h4><p>Mercados optimistas. Acciones suben, oro baja, monedas de riesgo (AUD, NZD) suben, JPY y CHF bajan.</p></div>
<div class="card"><h4>Risk-Off (Aversión al riesgo)</h4><p>Mercados temerosos. Acciones bajan, oro sube, JPY y CHF suben (refugios seguros), monedas de riesgo bajan.</p></div>
</div>`,
          keyPoints: [
            "NFP (primer viernes del mes) es el dato más importante - 50-100 pips de movimiento",
            "Tipos de interes altos = moneda fuerte, tipos bajos = moneda debil",
            "SIEMPRE revisa Forex Factory antes de operar",
            "NO tradees directamente las noticias - espera 15-30 min despues",
            "Risk-On = optimismo (acciones suben), Risk-Off = miedo (oro y JPY suben)"
          ],
          quiz: [
            { question: "¿Qué pasa con el USD si la Fed sube los tipos de interes?", options: ["USD se debilita", "USD se fortalece", "No tiene efecto", "Solo afecta al oro"], correctIndex: 1, explanation: "Tipos de interes más altos atraen capital extranjero buscando mayor rendimiento, fortaleciendo la moneda." },
            { question: "¿Si el NFP sale mucho peor de lo esperado, que pasa con EUR/USD?", options: ["EUR/USD baja", "EUR/USD sube (el USD se debilita)", "No se mueve", "El mercado cierra"], correctIndex: 1, explanation: "Datos de empleo malos debilitan al USD. Si el USD se debilita, EUR/USD sube." },
            { question: "¿Cuál es la regla para tradear noticias como principiante?", options: ["Entrar justo antes de la noticia", "No tradear noticias - esperar 15-30 min despues", "Poner el máximo apalancamiento", "Solo operar criptomonedas"], correctIndex: 1, explanation: "La volatilidad extrema durante noticias puede activar SL instantaneamente. Espera a que el polvo se asiente." }
          ],
          practicalExercise: "Ve a forexfactory.com. Identifica las 3 noticias de alto impacto de esta semana para USD. Anota fecha, hora y dato esperado. Observa que pasa con EUR/USD cuando se publica cada una (sin operar, solo observar)."
        },
        {
          id: "2-4-2",
          title: "Correlaciones entre Mercados: El Mapa Oculto",
          duration: "25 min",
          content: `
<h2>Correlaciones: Como los Mercados se Conectan</h2>
<div class="analogy-box"><h3>El Efecto Domino</h3><p>Los mercados estan conectados como fichas de domino. Cuando uno se mueve, arrastra a otros. Entender estas conexiones te da una ventaja enorme porque puedes ANTICIPAR movimientos.</p></div>
<h3>Correlaciones Clave que DEBES Conocer</h3>
<div class="vocab-card"><h4>DXY (Indice del Dolar) - El Rey de las Correlaciones</h4><p>El DXY mide la fuerza del dolar contra una cesta de monedas. Es la brujula del Forex.</p>
<ul><li><strong>DXY sube → EUR/USD baja</strong> (correlacion inversa)</li><li><strong>DXY sube → GBP/USD baja</strong> (correlacion inversa)</li><li><strong>DXY sube → USD/JPY sube</strong> (correlacion directa)</li><li><strong>DXY sube → Oro (XAUUSD) baja</strong> (generalmente)</li></ul>
<div class="highlight-box yellow"><p><strong>TRUCO:</strong> Antes de operar CUALQUIER par con USD, mira el DXY primero. Si el DXY tiene soporte fuerte, no busques compras en EUR/USD.</p></div></div>
<div class="vocab-card"><h4>Oro (XAUUSD) y el Dolar</h4><p>Correlacion inversa: cuando el dolar sube, el oro baja y viceversa. El oro es el "refugio seguro" - sube cuando hay miedo en los mercados.</p></div>
<div class="vocab-card"><h4>Petroleo y CAD</h4><p>Canada es gran exportador de petroleo. Si el petroleo sube, el CAD se fortalece (USD/CAD baja).</p></div>
<div class="vocab-card"><h4>Indices de EE.UU. (S&P 500) y Risk Sentiment</h4><p>S&P 500 sube = Risk-On = monedas de riesgo suben (AUD, NZD). S&P 500 baja = Risk-Off = refugios suben (JPY, CHF, Oro).</p></div>
<h3>Correlaciones entre Pares de Forex</h3>
<div class="grid-cards">
<div class="card green-border"><h4>Correlacion Positiva</h4><p><strong>EUR/USD y GBP/USD:</strong> Se mueven en la misma dirección ~80% del tiempo. Si ves un setup en EUR/USD, mira si GBP/USD confirma.</p></div>
<div class="card red-border"><h4>Correlacion Negativa</h4><p><strong>EUR/USD y USD/CHF:</strong> Se mueven en dirección OPUESTA ~90% del tiempo. Si EUR/USD sube, USD/CHF baja.</p></div>
</div>
<div class="warning-box"><h4>ERROR COMUN: Doble Exposicion</h4><p>Si abres LONG en EUR/USD y LONG en GBP/USD al mismo tiempo, NO estas diversificando. Ambos pares se mueven casi igual. Estas duplicando tu riesgo en el mismo trade. Elige UNO.</p></div>
<h3>Como Usar Correlaciones en tu Trading</h3>
<div class="strategy-box"><h4>Workflow Diario de Correlaciones</h4><ol>
<li><strong>Mira el DXY:</strong> Tendencia alcista = busca SHORT en EUR/USD, GBP/USD. Tendencia bajista = busca LONG.</li>
<li><strong>Confirma con correlaciones:</strong> Si quieres LONG EUR/USD, verifica que GBP/USD también tenga sesgo alcista.</li>
<li><strong>Revisa el sentimiento:</strong> S&P 500 subiendo = Risk-On = favorable para pares de riesgo.</li>
<li><strong>Evita doble exposicion:</strong> No operes EUR/USD y GBP/USD en la misma dirección simultaneamente.</li>
</ol></div>`,
          keyPoints: [
            "DXY (Indice del Dolar) es la brujula del Forex - miralo SIEMPRE antes de operar",
            "DXY sube → EUR/USD baja, GBP/USD baja, Oro baja",
            "EUR/USD y GBP/USD se mueven juntos ~80% - no abras trades en ambos",
            "Petroleo sube → CAD se fortalece (USD/CAD baja)",
            "S&P 500 sube = Risk-On = monedas de riesgo (AUD, NZD) suben"
          ],
          quiz: [
            { question: "¿Si el DXY esta en una fuerte tendencia alcista, que operación buscarias en EUR/USD?", options: ["LONG (compra)", "SHORT (venta)", "Ambas", "Ninguna"], correctIndex: 1, explanation: "DXY alcista = dolar fuerte. Si el dolar se fortalece, EUR/USD baja, así que buscas SHORT." },
            { question: "¿Si tienes un LONG en EUR/USD, por que NO deberías abrir un LONG en GBP/USD al mismo tiempo?", options: ["Porque ambos pares se mueven juntos y estarias duplicando riesgo, no diversificando", "Porque GBP/USD es más volatil", "Porque el broker no lo permite", "No hay problema en hacerlo"], correctIndex: 0, explanation: "EUR/USD y GBP/USD tienen correlacion positiva ~80%. Abrir ambos en la misma dirección es como duplicar el mismo trade." },
            { question: "¿Si el petroleo esta subiendo fuertemente, que podrias esperar del USD/CAD?", options: ["Que suba", "Que baje (CAD se fortalece)", "Que no se mueva", "Que el mercado cierre"], correctIndex: 1, explanation: "Canada exporta petroleo. Petroleo sube → economía canadiense se beneficia → CAD se fortalece → USD/CAD baja." }
          ]
        }
      ]
    },
    // ================================================================
    // MODULE 2-5: MERCADOS Y PRODUCTOS AVANZADOS
    // ================================================================
    {
      id: "mod-2-5",
      title: "Mercados y Productos Avanzados",
      description: "Domina derivados, acciones, trading de noticias, gaps e intermarket analysis",
      icon: "🔬",
      color: "#14B8A6",
      lessons: [
        // --------------------------------------------------------------
        // LESSON 2-5-1: OPCIONES Y FUTUROS
        // --------------------------------------------------------------
        {
          id: "2-5-1",
          title: "Opciones y Futuros: Los Derivados Financieros",
          duration: "30 min",
          content: `
<h2>Opciones y Futuros: Instrumentos que los Profesionales Usan a Diario</h2>

<div class="analogy-box">
<h3>La Analogía del Seguro de Coche</h3>
<p>Una <strong>opción</strong> funciona exactamente como un seguro de coche. Pagas una <strong>prima</strong> (precio de la opción) para tener el <strong>derecho</strong> (no la obligación) de comprar o vender un activo a un precio determinado. Si no necesitas usarlo, pierdes la prima. Si lo necesitas, te salva de una pérdida catastrófica. Los <strong>futuros</strong>, en cambio, son como un contrato de compraventa firmado: <strong>ambas partes están obligadas</strong> a cumplir.</p>
</div>

<h3>¿Qué Son los Derivados Financieros?</h3>

<div class="highlight-box purple">
<h4>Definición Clave</h4>
<p>Un <strong>derivado</strong> es un instrumento financiero cuyo valor <strong>deriva</strong> (de ahí el nombre) de otro activo subyacente: una acción, un índice, una divisa, una materia prima, etc. No compras el activo directamente, sino un <strong>contrato</strong> que se basa en su precio. Los derivados más comunes son las <strong>opciones</strong> y los <strong>futuros</strong>.</p>
</div>

<h3>Opciones: Calls y Puts Explicados de Forma Simple</h3>

<div class="grid-cards">
<div class="card">
<h4>📈 CALL (Opción de Compra)</h4>
<p>Te da el <strong>derecho a COMPRAR</strong> un activo a un precio fijo (strike price) antes de una fecha de vencimiento. Compras un Call cuando crees que el precio va a <strong>SUBIR</strong>.</p>
<p><strong>Ejemplo:</strong> Apple cotiza a $170. Compras un Call con strike $175 por $3 de prima. Si Apple sube a $185, ejerces tu derecho: compras a $175, el mercado está a $185 → ganancia de $10 - $3 prima = $7 por acción.</p>
</div>
<div class="card">
<h4>📉 PUT (Opción de Venta)</h4>
<p>Te da el <strong>derecho a VENDER</strong> un activo a un precio fijo antes de una fecha de vencimiento. Compras un Put cuando crees que el precio va a <strong>BAJAR</strong>.</p>
<p><strong>Ejemplo:</strong> Apple cotiza a $170. Compras un Put con strike $165 por $2.50 de prima. Si Apple baja a $155, ejerces tu derecho: vendes a $165 cuando el mercado está a $155 → ganancia de $10 - $2.50 prima = $7.50 por acción.</p>
</div>
</div>

<h3>Futuros: Contratos con Obligación</h3>

<div class="highlight-box blue">
<h4>¿Qué es un Contrato de Futuros?</h4>
<p>Un <strong>futuro</strong> es un acuerdo para comprar o vender un activo a un precio determinado en una <strong>fecha futura</strong>. A diferencia de las opciones, aquí <strong>ambas partes están obligadas</strong>. Los futuros se usan mucho en petróleo, oro, índices (ES para S&P 500, NQ para Nasdaq) y divisas.</p>
</div>

<div class="comparison-table">
<div class="comparison-col">
<h4>Opciones</h4>
<ul>
<li>Derecho, NO obligación</li>
<li>Pagas una prima por adelantado</li>
<li>Pérdida máxima = la prima</li>
<li>Ganancia potencialmente ilimitada</li>
<li>Afectadas por tiempo y volatilidad</li>
</ul>
</div>
<div class="comparison-col">
<h4>Futuros</h4>
<ul>
<li>Obligación para ambas partes</li>
<li>No hay prima, solo margen</li>
<li>Pérdida potencialmente ilimitada</li>
<li>Ganancia potencialmente ilimitada</li>
<li>Relación más directa con el subyacente</li>
</ul>
</div>
</div>

<h3>¿En Qué se Diferencian de los CFDs y el Spot?</h3>

<div class="grid-cards">
<div class="card">
<h4>CFD (Contract for Difference)</h4>
<p>Contrato con tu broker para intercambiar la diferencia de precio. No tiene fecha de expiración fija. No se negocia en bolsa regulada (OTC). Más accesible para retail.</p>
</div>
<div class="card">
<h4>Spot (Contado)</h4>
<p>Compraventa inmediata del activo real. En Forex, liquidación en T+2. En cripto, tienes el activo directamente. Sin apalancamiento natural.</p>
</div>
<div class="card">
<h4>Futuros</h4>
<p>Se negocian en bolsas reguladas (CME, CBOE). Tienen fecha de vencimiento. Estandarizados. Más transparentes que CFDs. Usados por instituciones.</p>
</div>
<div class="card">
<h4>Opciones</h4>
<p>Bolsas reguladas. Fecha de vencimiento + strike price. Riesgo limitado para el comprador. Permiten estrategias que ningún otro instrumento permite.</p>
</div>
</div>

<h3>¿Por Qué los Traders Usan Derivados?</h3>

<div class="grid-cards">
<div class="card">
<h4>🛡️ Hedging (Cobertura)</h4>
<p>Tienes acciones de Apple y temes una caída. Compras Puts para protegerte. Si Apple cae, el Put sube y compensa tu pérdida. Es como un seguro de cartera.</p>
</div>
<div class="card">
<h4>⚡ Apalancamiento</h4>
<p>Con $300 de prima puedes controlar $17,000 en acciones de Apple (100 acciones × $170). El apalancamiento de opciones es enorme, pero tu pérdida máxima es la prima.</p>
</div>
<div class="card">
<h4>🎯 Especulación</h4>
<p>Crees que el mercado va a moverse fuerte pero no sabes la dirección. Puedes usar estrategias de opciones que ganan con <strong>cualquier</strong> movimiento grande (straddle).</p>
</div>
</div>

<h3>Estrategias Básicas de Opciones</h3>

<div class="strategy-box">
<h4>Las 3 Estrategias Fundamentales</h4>
<ol>
<li><strong>Long Call:</strong> Compras un Call cuando esperas que el precio SUBA. Riesgo máximo = prima pagada. Ganancia = ilimitada.</li>
<li><strong>Long Put:</strong> Compras un Put cuando esperas que el precio BAJE. Riesgo máximo = prima pagada. Ganancia = hasta que el activo llegue a cero.</li>
<li><strong>Covered Call:</strong> Ya tienes las acciones y VENDES un Call. Cobras la prima como ingreso extra. Si el precio sube mucho, entregas las acciones al strike. Ideal para generar ingresos recurrentes en posiciones que ya tienes.</li>
</ol>
</div>

<h3>Las Greeks Simplificadas: Delta y Theta</h3>

<div class="highlight-box green">
<h4>Delta (Δ) - Sensibilidad al Precio</h4>
<p><strong>Delta mide cuánto cambia el precio de la opción por cada $1 que se mueve el subyacente.</strong> Un Call con Delta 0.50 sube $0.50 cuando la acción sube $1. Un Put tiene Delta negativo. Delta cerca de 1.0 = la opción se mueve casi como la acción. Delta cerca de 0 = la opción apenas reacciona.</p>
</div>

<div class="highlight-box red">
<h4>Theta (Θ) - Deterioro Temporal</h4>
<p><strong>Theta mide cuánto valor pierde la opción cada día que pasa.</strong> Las opciones tienen fecha de vencimiento, y cada día que pasa sin movimiento, pierden valor. Theta es el enemigo del comprador de opciones y el amigo del vendedor. Por eso los profesionales dicen: "las opciones son un activo que se derrite".</p>
</div>

<h3>¿Cuándo Considerar Opciones vs. Trading Spot?</h3>

<div class="grid-cards">
<div class="card">
<h4>Usa Opciones Cuando...</h4>
<ul>
<li>Quieres riesgo limitado y definido</li>
<li>Esperas un evento binario (earnings, FOMC)</li>
<li>Quieres generar ingresos extra en posiciones existentes</li>
<li>Quieres apostar a la volatilidad, no la dirección</li>
</ul>
</div>
<div class="card">
<h4>Usa Spot/CFD Cuando...</h4>
<ul>
<li>Quieres simplicidad (dirección pura)</li>
<li>No quieres preocuparte por vencimientos</li>
<li>Operas intradía con entradas/salidas rápidas</li>
<li>Tu capital es pequeño y las comisiones de opciones son altas</li>
</ul>
</div>
</div>

<div style="display:flex;justify-content:center;margin:24px 0">
<svg width="520" height="280" viewBox="0 0 520 280" style="background:#131722;border-radius:12px;border:1px solid #2a2a40">
<text x="260" y="22" fill="white" font-size="12" text-anchor="middle" font-weight="bold">DIAGRAMA DE GANANCIA/PÉRDIDA: LONG CALL</text>
<line x1="60" y1="180" x2="480" y2="180" stroke="#555" stroke-width="1"/>
<line x1="200" y1="40" x2="200" y2="250" stroke="#555" stroke-width="1"/>
<text x="490" y="184" fill="#a0a0b8" font-size="9">Precio</text>
<text x="204" y="36" fill="#a0a0b8" font-size="9">Ganancia</text>
<text x="204" y="260" fill="#a0a0b8" font-size="9">Pérdida</text>
<line x1="80" y1="210" x2="300" y2="210" stroke="#ef5350" stroke-width="2.5"/>
<line x1="300" y1="210" x2="460" y2="80" stroke="#26a69a" stroke-width="2.5"/>
<circle cx="300" cy="210" r="5" fill="#f59e0b"/>
<text x="300" y="234" fill="#f59e0b" font-size="10" text-anchor="middle" font-weight="bold">Strike Price</text>
<line x1="80" y1="210" x2="80" y2="180" stroke="#ef5350" stroke-width="1" stroke-dasharray="3,3"/>
<text x="160" y="226" fill="#ef5350" font-size="9" text-anchor="middle">Pérdida máx = Prima</text>
<circle cx="350" cy="180" r="4" fill="#26a69a"/>
<text x="355" y="174" fill="#26a69a" font-size="9">Break-even</text>
<text x="430" y="96" fill="#26a69a" font-size="9">Ganancia</text>
<text x="430" y="108" fill="#26a69a" font-size="9">ilimitada ↑</text>
<rect x="70" y="180" width="230" height="30" fill="#ef535010" rx="2"/>
<text x="185" y="200" fill="#ef5350" font-size="8" text-anchor="middle">ZONA DE PÉRDIDA (máximo = prima pagada)</text>
<rect x="350" y="80" width="110" height="100" fill="#26a69a10" rx="2"/>
<text x="405" y="150" fill="#26a69a" font-size="8" text-anchor="middle">ZONA DE</text>
<text x="405" y="162" fill="#26a69a" font-size="8" text-anchor="middle">GANANCIA</text>
</svg>
</div>

<div class="warning-box">
<h4>⚠️ Advertencia para Principiantes</h4>
<p>Las opciones son instrumentos complejos. Antes de operar con dinero real: (1) practica en paper trading, (2) entiende perfectamente cómo funciona Theta (el tiempo te va en contra), (3) nunca VENDAS opciones descubiertas (riesgo ilimitado), y (4) empieza con posiciones pequeñas. Muchos traders profesionales tardaron años en dominar opciones.</p>
</div>`,
          keyPoints: [
            "Una opción da el DERECHO (no obligación) de comprar/vender a un precio fijo; un futuro es una OBLIGACIÓN",
            "Call = derecho a comprar (apuestas a subida), Put = derecho a vender (apuestas a bajada)",
            "Delta mide cuánto se mueve la opción por cada $1 del subyacente; Theta mide cuánto valor pierde por día",
            "La pérdida máxima al COMPRAR opciones es la prima pagada; al VENDER puede ser ilimitada",
            "Covered Call: vender un Call sobre acciones que ya tienes para generar ingresos recurrentes"
          ],
          quiz: [
            {
              question: "¿Cuál es la diferencia fundamental entre una opción y un futuro?",
              options: [
                "Las opciones son más baratas",
                "La opción da un derecho sin obligación, el futuro obliga a ambas partes",
                "Los futuros no tienen fecha de vencimiento",
                "Las opciones solo existen para acciones"
              ],
              correctIndex: 1,
              explanation: "La diferencia clave es que la opción te da el DERECHO (puedes decidir no ejercerla y solo pierdes la prima), mientras que el futuro es un contrato OBLIGATORIO para ambas partes."
            },
            {
              question: "¿Qué mide Theta (Θ) en opciones y por qué es importante?",
              options: [
                "Mide la volatilidad del mercado",
                "Mide cuánto valor pierde la opción cada día que pasa sin movimiento",
                "Mide la sensibilidad al precio del subyacente",
                "Mide el volumen de operaciones"
              ],
              correctIndex: 1,
              explanation: "Theta mide el deterioro temporal: las opciones pierden valor cada día que pasa. Es el 'enemigo' del comprador de opciones porque su posición se 'derrite' con el tiempo si el precio no se mueve a su favor."
            },
            {
              question: "¿Qué estrategia usarías si ya tienes acciones y quieres generar ingresos extra?",
              options: [
                "Long Call",
                "Long Put",
                "Covered Call (vender un Call sobre tus acciones)",
                "Comprar más acciones"
              ],
              correctIndex: 2,
              explanation: "El Covered Call consiste en vender un Call sobre acciones que ya posees. Cobras la prima como ingreso. Si el precio no sube hasta el strike, te quedas con la prima y las acciones. Es la estrategia más conservadora de opciones."
            }
          ],
          practicalExercise: "Abre un simulador de opciones gratuito (OptionsProfit Calculator o similar). Elige Apple (AAPL) y simula: (1) Comprar un Call con strike 5% por encima del precio actual, vencimiento 30 días. Anota la prima, el Delta y Theta. (2) Comprar un Put con strike 5% por debajo del precio actual, misma expiración. Compara ambas primas. (3) Calcula: ¿cuánto tiene que moverse Apple para que tu Call sea rentable después de pagar la prima (break-even)?"
        },
        // --------------------------------------------------------------
        // LESSON 2-5-2: TRADING DE ACCIONES
        // --------------------------------------------------------------
        {
          id: "2-5-2",
          title: "Trading de Acciones: Análisis Fundamental de Empresas",
          duration: "25 min",
          content: `
<h2>Análisis Fundamental de Acciones: Más Allá de los Gráficos</h2>

<div class="analogy-box">
<h3>La Analogía del Comprador de Casas</h3>
<p>Cuando compras una casa, no solo miras la fachada (el gráfico). Revisas los cimientos, la fontanería, el tejado, el barrio, los impuestos. El <strong>análisis fundamental</strong> es exactamente eso: mirar "dentro" de la empresa para saber si su acción es una buena compra al precio actual. El gráfico te dice CUÁNDO comprar; el fundamental te dice QUÉ comprar.</p>
</div>

<h3>Las Métricas Clave que Todo Trader de Acciones Debe Conocer</h3>

<div style="display:flex;justify-content:center;margin:24px 0">
<svg width="480" height="200" viewBox="0 0 480 200" style="background:#131722;border-radius:12px;border:1px solid #2a2a40">
<text x="240" y="22" fill="white" font-size="12" text-anchor="middle" font-weight="bold">CÁLCULO DEL P/E RATIO</text>
<rect x="40" y="45" width="160" height="55" rx="8" fill="#8b5cf620" stroke="#8b5cf6" stroke-width="1.5"/>
<text x="120" y="68" fill="#8b5cf6" font-size="11" text-anchor="middle" font-weight="bold">Precio de la Acción</text>
<text x="120" y="88" fill="white" font-size="18" text-anchor="middle" font-weight="bold">$150</text>
<text x="230" y="78" fill="#f59e0b" font-size="24" text-anchor="middle" font-weight="bold">÷</text>
<rect x="270" y="45" width="180" height="55" rx="8" fill="#26a69a20" stroke="#26a69a" stroke-width="1.5"/>
<text x="360" y="68" fill="#26a69a" font-size="11" text-anchor="middle" font-weight="bold">Ganancia por Acción (EPS)</text>
<text x="360" y="88" fill="white" font-size="18" text-anchor="middle" font-weight="bold">$6.00</text>
<text x="240" y="130" fill="#f59e0b" font-size="18" text-anchor="middle" font-weight="bold">=</text>
<rect x="140" y="140" width="200" height="50" rx="8" fill="#f59e0b20" stroke="#f59e0b" stroke-width="1.5"/>
<text x="240" y="162" fill="#f59e0b" font-size="11" text-anchor="middle" font-weight="bold">P/E Ratio</text>
<text x="240" y="182" fill="white" font-size="18" text-anchor="middle" font-weight="bold">25x</text>
</svg>
</div>

<div class="vocab-card">
<h4>P/E Ratio (Price to Earnings)</h4>
<p><strong>Precio de la acción ÷ Ganancia por acción (EPS).</strong> Es la métrica más usada. Un P/E de 25 significa que estás pagando $25 por cada $1 de ganancia. P/E alto = expectativas de crecimiento alto (o acción cara). P/E bajo = empresa infravalorada (o con problemas). El P/E promedio del S&P 500 históricamente es ~20-22.</p>
</div>

<div class="vocab-card">
<h4>Revenue (Ingresos) y Earnings (Ganancias)</h4>
<p><strong>Revenue</strong> es TODO el dinero que entra a la empresa (ventas totales). <strong>Earnings (Net Income)</strong> es lo que queda después de restar costos, impuestos, etc. Una empresa puede tener revenue enorme pero earnings negativos (pierde dinero). Amazon fue así durante años.</p>
</div>

<div class="vocab-card">
<h4>EPS (Earnings Per Share - Ganancia por Acción)</h4>
<p><strong>Ganancia neta ÷ número de acciones.</strong> Si la empresa ganó $6 mil millones y tiene 1,000 millones de acciones, el EPS es $6.00. Trimestre a trimestre, el mercado compara el EPS real vs. el esperado por los analistas (consensus). Superar expectativas = acción sube. Decepcionar = acción cae.</p>
</div>

<div class="vocab-card">
<h4>Market Cap (Capitalización de Mercado)</h4>
<p><strong>Precio de acción × número total de acciones.</strong> Es el "tamaño" de la empresa. Mega cap: >$200B (Apple, Microsoft). Large cap: $10B-$200B. Mid cap: $2B-$10B. Small cap: <$2B. Las small caps son más volátiles y arriesgadas, las mega caps son más estables.</p>
</div>

<h3>Balance Sheet Básico: Lo Esencial</h3>

<div class="grid-cards">
<div class="card">
<h4>Activos (Assets)</h4>
<p>Todo lo que la empresa posee: efectivo, propiedades, inventario, patentes. El efectivo disponible (Cash & Equivalents) es crucial - una empresa con mucho cash puede sobrevivir crisis.</p>
</div>
<div class="card">
<h4>Pasivos (Liabilities)</h4>
<p>Todo lo que la empresa debe: deudas, préstamos, obligaciones. Una empresa con deuda excesiva es arriesgada. Mira el ratio Deuda/Equity: mayor a 2 es señal de alerta.</p>
</div>
<div class="card">
<h4>Equity (Patrimonio Neto)</h4>
<p>Activos - Pasivos = Equity. Es lo que realmente "vale" la empresa para los accionistas. Si los pasivos superan los activos, la empresa tiene equity negativo (peligro).</p>
</div>
</div>

<h3>Earnings Reports: Cómo Mueven las Acciones</h3>

<div class="highlight-box yellow">
<h4>Los Earnings son el Evento Más Importante para una Acción</h4>
<p>Cada trimestre, las empresas publican sus resultados financieros. El mercado reacciona violentamente comparando los resultados REALES vs. las EXPECTATIVAS de los analistas (consensus). No importa si la empresa ganó mucho dinero; importa si ganó MÁS o MENOS de lo que se esperaba.</p>
</div>

<div class="example-box">
<h4>Ejemplo: Apple reporta Earnings</h4>
<p><strong>Expectativa de analistas:</strong> EPS $1.50, Revenue $90B. <strong>Resultado real:</strong> EPS $1.65, Revenue $94B. Apple SUPERÓ expectativas → la acción sube 3-5% after-hours. Pero si Apple reporta EPS $1.45, Revenue $88B → DECEPCIONÓ → la acción puede caer 5-8% incluso si ganó miles de millones.</p>
</div>

<h3>Pre-Market y After-Hours: Trading Fuera de Horario</h3>

<div class="highlight-box blue">
<h4>Horarios Extendidos</h4>
<p><strong>Pre-market:</strong> 4:00 AM - 9:30 AM ET. Los earnings se publican aquí frecuentemente. Volumen bajo, spreads amplios, movimientos exagerados. <strong>After-hours:</strong> 4:00 PM - 8:00 PM ET. Los resultados trimestrales suelen salir justo después del cierre (4:05-4:15 PM). Los movimientos after-hours pueden revertirse al día siguiente cuando entra más volumen.</p>
</div>

<div class="warning-box">
<h4>⚠️ Cuidado con el Trading Fuera de Horario</h4>
<p>El volumen en pre-market y after-hours es muy bajo. Los spreads son amplios, la liquidez escasa, y los movimientos pueden ser exagerados. Un gap de -5% after-hours puede convertirse en solo -2% al abrir el mercado regular cuando entra más volumen. No tomes decisiones precipitadas basándote solo en movimientos fuera de horario.</p>
</div>

<h3>Análisis por Sectores</h3>

<div class="grid-cards">
<div class="card">
<h4>Tecnología (XLK)</h4>
<p>Alto crecimiento, P/E elevados. Sensibles a tasas de interés (tasas altas = tech baja). FAANG/Magnificent 7 dominan el S&P 500.</p>
</div>
<div class="card">
<h4>Financiero (XLF)</h4>
<p>Bancos se benefician de tasas de interés altas (mayor margen de préstamos). Sensibles a la curva de rendimientos.</p>
</div>
<div class="card">
<h4>Energía (XLE)</h4>
<p>Ligado al precio del petróleo. Ciclo económico lo afecta mucho. Alta volatilidad.</p>
</div>
<div class="card">
<h4>Salud/Defensivo (XLV)</h4>
<p>Menos volátil, considerado defensivo. La gente necesita medicinas sin importar la economía. Buen sector en recesiones.</p>
</div>
</div>

<h3>Combinando Fundamental + Técnico para Acciones</h3>

<div class="strategy-box">
<h4>El Método Dual: Fundamental para Seleccionar, Técnico para el Timing</h4>
<ol>
<li><strong>Filtra con fundamentales:</strong> Busca acciones con earnings crecientes, P/E razonable para su sector, deuda manejable, y revenue en aumento.</li>
<li><strong>Identifica el sesgo:</strong> ¿La empresa está en tendencia fundamental positiva (crecimiento) o negativa (declive)?</li>
<li><strong>Usa el técnico para la entrada:</strong> Espera a que el gráfico te dé un setup: pullback a soporte, rotura de resistencia con volumen, patrón de vela de reversión.</li>
<li><strong>Confirma con earnings:</strong> No abras posiciones grandes justo antes de un reporte de earnings (riesgo de gap enorme). Espera después del reporte para ver la reacción.</li>
</ol>
</div>`,
          keyPoints: [
            "P/E Ratio = Precio ÷ EPS; un P/E alto significa altas expectativas de crecimiento (o acción cara)",
            "Los earnings reports mueven acciones violentamente: importa si superan o decepcionan vs. las EXPECTATIVAS, no el resultado absoluto",
            "Pre-market y after-hours tienen bajo volumen y spreads amplios; los movimientos pueden revertirse en sesión regular",
            "Market Cap define el tamaño: Mega cap (>$200B) es estable, Small cap (<$2B) es volátil",
            "Combina fundamental (QUÉ comprar) con técnico (CUÁNDO comprar) para máxima efectividad"
          ],
          quiz: [
            {
              question: "¿Qué significa un P/E Ratio de 30 para una acción?",
              options: [
                "La acción ha subido 30% este año",
                "Estás pagando $30 por cada $1 de ganancia de la empresa",
                "La empresa tiene 30 empleados",
                "La acción cuesta $30"
              ],
              correctIndex: 1,
              explanation: "P/E = Precio ÷ Earnings Per Share. Un P/E de 30 significa que pagas $30 por cada $1 que la empresa gana. Esto puede indicar altas expectativas de crecimiento futuro o que la acción está sobrevalorada."
            },
            {
              question: "¿Por qué una acción puede CAER después de reportar ganancias récord?",
              options: [
                "Porque el mercado es irracional",
                "Porque las ganancias fueron altas pero MENORES a lo que los analistas esperaban",
                "Porque los traders siempre venden después de earnings",
                "Porque la bolsa cierra después del reporte"
              ],
              correctIndex: 1,
              explanation: "Lo que mueve la acción no es el resultado absoluto sino la comparación con las EXPECTATIVAS (consensus). Si los analistas esperaban EPS de $2.00 y la empresa reporta $1.80, la acción cae aunque $1.80 sea un récord histórico."
            },
            {
              question: "¿Cuál es la forma más segura de usar análisis fundamental y técnico juntos?",
              options: [
                "Solo usar fundamental e ignorar gráficos",
                "Solo usar técnico e ignorar los números de la empresa",
                "Usar fundamental para seleccionar QUÉ comprar y técnico para decidir CUÁNDO entrar",
                "Alternar entre uno y otro cada semana"
              ],
              correctIndex: 2,
              explanation: "El método más efectivo combina ambos: los fundamentales te dicen qué empresas son sólidas, y el análisis técnico te da el timing óptimo de entrada con soportes, resistencias y patrones de precio."
            }
          ],
          practicalExercise: "Ve a Yahoo Finance o Finviz.com. Elige 3 acciones del S&P 500 de sectores diferentes. Para cada una, anota: (1) P/E Ratio actual y compáralo con el promedio del sector. (2) EPS del último trimestre: ¿superó o decepcionó las expectativas? (3) Revenue: ¿está creciendo trimestre a trimestre? (4) Deuda total vs. Cash disponible. Luego abre el gráfico de cada una en TradingView y marca los niveles de soporte/resistencia clave. ¿Alguna está en un buen nivel técnico para entrar?"
        },
        // --------------------------------------------------------------
        // LESSON 2-5-3: TRADING DE NOTICIAS
        // --------------------------------------------------------------
        {
          id: "2-5-3",
          title: "Trading de Noticias: NFP, CPI y FOMC Paso a Paso",
          duration: "30 min",
          content: `
<h2>Trading de Noticias: Cómo Operar los 3 Eventos que Más Mueven el Mercado</h2>

<div class="analogy-box">
<h3>La Analogía del Terremoto</h3>
<p>Los datos económicos son como terremotos en el mercado. El <strong>NFP</strong> es un terremoto de magnitud 8: mueve TODO. El <strong>CPI</strong> es magnitud 7: sacude fuerte. El <strong>FOMC</strong> es magnitud 9: puede cambiar la dirección del mercado durante meses. No intentas predecir el terremoto; te preparas para REACCIONAR cuando ocurra.</p>
</div>

<div class="warning-box">
<h4>🚨 REGLA DE ORO: NUNCA Operes DENTRO de la Noticia</h4>
<p>El error más caro de los traders novatos es intentar "adivinar" el resultado del dato y abrir una posición ANTES de la publicación. Esto es <strong>apostar, no tradear</strong>. El spread se amplía enormemente (de 1 pip a 20+ pips en EUR/USD), los slippages son brutales, y las mechas pueden activar tu stop loss en ambas direcciones en segundos. <strong>La regla profesional: opera la REACCIÓN, no la noticia.</strong></p>
</div>

<h3>1. NFP (Non-Farm Payrolls) - El Dato Rey del Forex</h3>

<div class="highlight-box purple">
<h4>¿Qué es el NFP?</h4>
<p>El informe de empleo no agrícola de Estados Unidos. Mide cuántos empleos se crearon o perdieron en el mes anterior (excluyendo el sector agrícola). Se publica el <strong>primer viernes de cada mes a las 8:30 AM ET</strong>. Es el dato de empleo más importante del mundo porque el empleo es uno de los dos mandatos de la Fed (empleo máximo + estabilidad de precios).</p>
</div>

<div class="grid-cards">
<div class="card">
<h4>NFP Mejor de lo Esperado (más empleos)</h4>
<p>Economía fuerte → Fed puede subir tasas → USD se fortalece → EUR/USD baja, GBP/USD baja, Oro baja, Índices pueden subir o bajar (depende del contexto de tasas).</p>
</div>
<div class="card">
<h4>NFP Peor de lo Esperado (menos empleos)</h4>
<p>Economía débil → Fed puede bajar tasas → USD se debilita → EUR/USD sube, GBP/USD sube, Oro sube, Índices pueden bajar.</p>
</div>
</div>

<h3>2. CPI (Consumer Price Index) - El Dato de la Inflación</h3>

<div class="highlight-box blue">
<h4>¿Qué es el CPI?</h4>
<p>El Índice de Precios al Consumidor mide la inflación: cuánto suben los precios de bienes y servicios. Se publica <strong>el segundo martes de cada mes a las 8:30 AM ET</strong> (aproximadamente). Hay dos versiones: CPI general (incluye alimentos y energía) y <strong>Core CPI</strong> (excluye alimentos y energía, más importante para la Fed).</p>
</div>

<div class="grid-cards">
<div class="card">
<h4>CPI Mayor de lo Esperado (más inflación)</h4>
<p>Inflación alta → Fed sube tasas o las mantiene altas → USD sube, Bonos bajan, Tech baja, Oro reacciona mixto (inflación positiva pero USD fuerte es negativo).</p>
</div>
<div class="card">
<h4>CPI Menor de lo Esperado (menos inflación)</h4>
<p>Inflación cediendo → Fed puede bajar tasas → USD baja, Bonos suben, Tech sube, S&P 500 sube, Oro sube.</p>
</div>
</div>

<h3>3. FOMC (Federal Open Market Committee) - La Decisión de Tasas</h3>

<div class="highlight-box green">
<h4>¿Qué es el FOMC?</h4>
<p>El comité de la Reserva Federal que decide las tasas de interés de EE.UU. Se reúne <strong>8 veces al año</strong>. La decisión se publica a las <strong>2:00 PM ET</strong>, seguida de una <strong>conferencia de prensa de Jerome Powell a las 2:30 PM ET</strong>. La conferencia de prensa a menudo mueve más que la decisión misma porque revela las intenciones futuras de la Fed.</p>
</div>

<div class="vocab-card">
<h4>Dot Plot (Gráfico de Puntos)</h4>
<p>Se publica cada 3 meses (marzo, junio, septiembre, diciembre). Muestra las proyecciones individuales de cada miembro del FOMC sobre dónde estarán las tasas en el futuro. Es clave porque revela si la Fed planea subir, mantener o bajar tasas.</p>
</div>

<h3>Protocolo de Trading de Noticias: Paso a Paso</h3>

<div style="display:flex;justify-content:center;margin:24px 0">
<svg width="540" height="300" viewBox="0 0 540 300" style="background:#131722;border-radius:12px;border:1px solid #2a2a40">
<text x="270" y="22" fill="white" font-size="12" text-anchor="middle" font-weight="bold">PROTOCOLO DE TRADING: NFP (Ejemplo)</text>
<rect x="20" y="40" width="150" height="80" rx="8" fill="#ef535020" stroke="#ef5350" stroke-width="1.5"/>
<text x="95" y="58" fill="#ef5350" font-size="10" text-anchor="middle" font-weight="bold">ANTES (30 min)</text>
<text x="95" y="75" fill="#a0a0b8" font-size="8" text-anchor="middle">• Cierra trades abiertos</text>
<text x="95" y="87" fill="#a0a0b8" font-size="8" text-anchor="middle">• Marca S/R en M15 y H1</text>
<text x="95" y="99" fill="#a0a0b8" font-size="8" text-anchor="middle">• Reduce tamaño de posición</text>
<text x="95" y="111" fill="#a0a0b8" font-size="8" text-anchor="middle">• NO abras nuevos trades</text>
<line x1="170" y1="80" x2="190" y2="80" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrowhead)"/>
<rect x="195" y="40" width="150" height="80" rx="8" fill="#f59e0b20" stroke="#f59e0b" stroke-width="1.5"/>
<text x="270" y="58" fill="#f59e0b" font-size="10" text-anchor="middle" font-weight="bold">DURANTE (0-15 min)</text>
<text x="270" y="75" fill="#a0a0b8" font-size="8" text-anchor="middle">• NO operes - solo observa</text>
<text x="270" y="87" fill="#a0a0b8" font-size="8" text-anchor="middle">• Spread amplísimo (20+ pips)</text>
<text x="270" y="99" fill="#a0a0b8" font-size="8" text-anchor="middle">• Mechas falsas enormes</text>
<text x="270" y="111" fill="#a0a0b8" font-size="8" text-anchor="middle">• Slippage brutal</text>
<line x1="345" y1="80" x2="365" y2="80" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrowhead2)"/>
<rect x="370" y="40" width="150" height="80" rx="8" fill="#26a69a20" stroke="#26a69a" stroke-width="1.5"/>
<text x="445" y="58" fill="#26a69a" font-size="10" text-anchor="middle" font-weight="bold">DESPUÉS (15-60 min)</text>
<text x="445" y="75" fill="#a0a0b8" font-size="8" text-anchor="middle">• Espera que el spread se</text>
<text x="445" y="87" fill="#a0a0b8" font-size="8" text-anchor="middle">  normalice (15-30 min)</text>
<text x="445" y="99" fill="#a0a0b8" font-size="8" text-anchor="middle">• Busca retest de niveles</text>
<text x="445" y="111" fill="#a0a0b8" font-size="8" text-anchor="middle">• Entra en la REACCIÓN</text>
<defs>
<marker id="arrowhead" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto"><polygon points="0 0, 6 2, 0 4" fill="#f59e0b"/></marker>
<marker id="arrowhead2" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto"><polygon points="0 0, 6 2, 0 4" fill="#f59e0b"/></marker>
</defs>
<rect x="20" y="150" width="500" height="130" rx="8" fill="#14b8a610" stroke="#14b8a6" stroke-width="1"/>
<text x="270" y="172" fill="#14b8a6" font-size="11" text-anchor="middle" font-weight="bold">SETUP POST-NFP (la estrategia profesional)</text>
<text x="40" y="195" fill="#a0a0b8" font-size="9">1. Espera 15-30 minutos después de la publicación a que se calme la volatilidad inicial</text>
<text x="40" y="212" fill="#a0a0b8" font-size="9">2. Identifica la DIRECCIÓN DOMINANTE: ¿el precio se estabilizó arriba o abajo del nivel pre-noticia?</text>
<text x="40" y="229" fill="#a0a0b8" font-size="9">3. Espera un PULLBACK (retroceso) hacia una zona de soporte/resistencia clave en M15</text>
<text x="40" y="246" fill="#a0a0b8" font-size="9">4. Busca una vela de confirmación (engulfing, pin bar) en la zona de S/R</text>
<text x="40" y="263" fill="#a0a0b8" font-size="9">5. Entra con stop loss por debajo/encima de la zona. Target: siguiente nivel de S/R o 1:2 R:R</text>
</svg>
</div>

<div class="strategy-box">
<h4>Calendario Económico: Tu Herramienta Esencial</h4>
<ol>
<li><strong>Usa ForexFactory.com o Investing.com:</strong> Filtra solo los eventos de impacto ALTO (bandera roja).</li>
<li><strong>Anota los 3 datos clave del mes:</strong> NFP (primer viernes), CPI (segundo martes aprox.), FOMC (fechas fijas).</li>
<li><strong>Revisa el CONSENSUS (expectativa):</strong> Antes de cada dato, los analistas publican su expectativa. Lo que importa es la DESVIACIÓN entre el dato real y el consensus.</li>
<li><strong>Mira el dato anterior:</strong> Una sorpresa grande respecto al dato anterior amplifica la reacción.</li>
</ol>
</div>

<div class="example-box">
<h4>Ejemplo Real: Trading Post-NFP en EUR/USD</h4>
<p><strong>Consensus:</strong> 200K empleos. <strong>Resultado:</strong> 280K (mucho mejor). Reacción inmediata: EUR/USD cae 70 pips en 5 minutos (USD se fortalece). Spread pasa de 1 pip a 15 pips. Después de 20 minutos, el spread vuelve a 2 pips. EUR/USD retrocede (pullback) 30 pips hacia arriba, tocando una resistencia rota que ahora es soporte. Pin bar bajista en M15 en esa zona → ENTRY SHORT. Stop loss: 20 pips arriba de la zona. Target: mínimo del spike inicial. Resultado: +50 pips con 1:2.5 R:R.</p>
</div>

<div class="warning-box">
<h4>⚠️ FOMC: Cuidado con la Conferencia de Prensa</h4>
<p>La decisión de tasas a las 2:00 PM ET puede mover el mercado en una dirección, y la conferencia de prensa de Powell a las 2:30 PM puede REVERTIR todo el movimiento. No pongas targets agresivos entre las 2:00 y las 3:00 PM en días de FOMC. Espera a que termine la conferencia de prensa para operar con más claridad.</p>
</div>`,
          keyPoints: [
            "NUNCA operes DENTRO de la noticia: opera la REACCIÓN 15-30 minutos después cuando el spread se normaliza",
            "NFP (primer viernes, 8:30 AM ET): dato de empleo más importante; mejor de lo esperado = USD fuerte",
            "CPI: dato de inflación; Core CPI es el más importante para la Fed y afecta expectativas de tasas",
            "FOMC: la conferencia de prensa de Powell (2:30 PM) puede revertir la reacción a la decisión de tasas (2:00 PM)",
            "Siempre revisa el CONSENSUS antes del dato: lo que importa es la DESVIACIÓN entre lo real y lo esperado"
          ],
          quiz: [
            {
              question: "¿Cuál es la regla más importante al tradear noticias como el NFP?",
              options: [
                "Abrir la posición 5 minutos antes del dato para anticipar",
                "Usar el máximo apalancamiento para aprovechar la volatilidad",
                "Nunca operar DENTRO del dato; esperar 15-30 min y operar la REACCIÓN",
                "Cerrar todas las posiciones y no operar ese día"
              ],
              correctIndex: 2,
              explanation: "La regla de oro es operar la REACCIÓN, no la noticia. Durante la publicación, el spread se amplía enormemente, hay slippage brutal y mechas falsas. Los profesionales esperan 15-30 minutos a que se calme y luego buscan un setup en la dirección dominante."
            },
            {
              question: "¿Qué pasa generalmente con EUR/USD si el NFP sale MUCHO MEJOR de lo esperado?",
              options: [
                "EUR/USD sube porque la economía está fuerte",
                "EUR/USD baja porque un NFP fuerte fortalece el USD",
                "No tiene efecto en EUR/USD",
                "Depende del color de la vela anterior"
              ],
              correctIndex: 1,
              explanation: "NFP mejor de lo esperado = economía fuerte = la Fed puede subir o mantener tasas altas = USD se fortalece. Como EUR/USD es euro contra dólar, si el dólar sube, EUR/USD baja."
            },
            {
              question: "¿Por qué es peligroso operar durante la decisión del FOMC sin esperar a la conferencia de prensa?",
              options: [
                "Porque el mercado cierra durante la conferencia",
                "Porque la conferencia de prensa puede REVERTIR toda la reacción inicial a la decisión de tasas",
                "Porque la decisión siempre es la esperada",
                "Porque los brokers bloquean las operaciones"
              ],
              correctIndex: 1,
              explanation: "La decisión de tasas a las 2:00 PM puede mover el mercado en una dirección, pero la conferencia de prensa de Powell a las 2:30 PM, donde revela intenciones futuras, puede REVERTIR completamente ese movimiento. Los profesionales esperan hasta después de las 3:00 PM."
            },
            {
              question: "¿Qué es el Core CPI y por qué es más importante que el CPI general?",
              options: [
                "Incluye más categorías de productos",
                "Es más barato de calcular",
                "Excluye alimentos y energía (volátiles) y refleja mejor la tendencia inflacionaria subyacente que la Fed monitorea",
                "Solo mide precios en las ciudades principales"
              ],
              correctIndex: 2,
              explanation: "El Core CPI excluye alimentos y energía porque sus precios son muy volátiles (petróleo, clima). La Fed prefiere el Core CPI porque muestra la tendencia de inflación 'subyacente' sin el ruido de factores temporales."
            }
          ],
          practicalExercise: "Abre ForexFactory.com y encuentra las fechas de los próximos NFP, CPI y FOMC. Para cada uno: (1) Anota el consensus (expectativa) cuando esté disponible. (2) Después de la publicación, observa EUR/USD en M15 durante los primeros 60 minutos SIN operar. Anota: cuánto se movió en los primeros 5 minutos, cuánto se amplió el spread, cuándo se normalizó el spread, y si hubo un pullback tradeable después. (3) Marca en el gráfico dónde habrías entrado usando el protocolo post-noticia."
        },
        // --------------------------------------------------------------
        // LESSON 2-5-4: TRADING DE GAPS
        // --------------------------------------------------------------
        {
          id: "2-5-4",
          title: "Trading de Gaps: Gap Fill, Gap and Go, Exhaustion Gaps",
          duration: "20 min",
          content: `
<h2>Trading de Gaps: Cómo Aprovechar los Saltos del Precio</h2>

<div class="analogy-box">
<h3>La Analogía del Ascensor</h3>
<p>Normalmente, el precio se mueve como una persona subiendo escaleras: un paso a la vez. Un <strong>gap</strong> es cuando el precio toma un ascensor: salta de un piso a otro sin pasar por los pisos intermedios. Esto deja un "hueco" en el gráfico donde no hubo transacciones. Entender POR QUÉ se produjo el gap y QUÉ TIPO de gap es te dice si el precio va a volver a "llenar" ese hueco o si va a seguir en la misma dirección.</p>
</div>

<div class="highlight-box purple">
<h4>¿Qué es un Gap?</h4>
<p>Un <strong>gap</strong> (hueco) ocurre cuando el precio de apertura de una sesión es significativamente diferente al precio de cierre de la sesión anterior. No hay velas ni transacciones en ese rango de precio. Los gaps ocurren por noticias fuera de horario, earnings after-hours, eventos geopolíticos de fin de semana, o cambios drásticos en el sentimiento del mercado.</p>
</div>

<h3>Los 4 Tipos de Gaps</h3>

<div style="display:flex;justify-content:center;margin:24px 0">
<svg width="540" height="400" viewBox="0 0 540 400" style="background:#131722;border-radius:12px;border:1px solid #2a2a40">
<text x="270" y="22" fill="white" font-size="12" text-anchor="middle" font-weight="bold">LOS 4 TIPOS DE GAPS</text>

<rect x="15" y="40" width="245" height="160" rx="8" fill="#78909c15" stroke="#78909c" stroke-width="1"/>
<text x="137" y="60" fill="#78909c" font-size="10" text-anchor="middle" font-weight="bold">1. COMMON GAP (Ordinario)</text>
<rect x="35" y="100" width="14" height="30" rx="2" fill="#26a69a"/>
<rect x="55" y="90" width="14" height="35" rx="2" fill="#26a69a"/>
<rect x="75" y="95" width="14" height="25" rx="2" fill="#ef5350"/>
<rect x="95" y="85" width="14" height="30" rx="2" fill="#26a69a"/>
<rect x="130" y="110" width="14" height="25" rx="2" fill="#ef5350"/>
<line x1="109" y1="105" x2="130" y2="110" stroke="#f59e0b" stroke-width="1" stroke-dasharray="3,2"/>
<rect x="109" y="105" width="21" height="5" fill="#f59e0b20"/>
<text x="120" y="103" fill="#f59e0b" font-size="7">gap</text>
<rect x="150" y="95" width="14" height="30" rx="2" fill="#26a69a"/>
<rect x="170" y="100" width="14" height="25" rx="2" fill="#26a69a"/>
<polyline points="155,105 165,100 180,107" fill="none" stroke="#78909c" stroke-width="1" stroke-dasharray="2,2"/>
<text x="137" y="155" fill="#78909c" font-size="8" text-anchor="middle">Se llena rápidamente</text>
<text x="137" y="168" fill="#78909c" font-size="8" text-anchor="middle">Sin significado especial</text>
<text x="137" y="181" fill="#78909c" font-size="8" text-anchor="middle">Bajo volumen, dentro de rango</text>
<text x="137" y="194" fill="#26a69a" font-size="8" text-anchor="middle" font-weight="bold">→ Tradea el GAP FILL</text>

<rect x="280" y="40" width="245" height="160" rx="8" fill="#26a69a15" stroke="#26a69a" stroke-width="1"/>
<text x="402" y="60" fill="#26a69a" font-size="10" text-anchor="middle" font-weight="bold">2. BREAKAWAY GAP (Ruptura)</text>
<rect x="300" y="130" width="14" height="25" rx="2" fill="#ef5350"/>
<rect x="320" y="125" width="14" height="30" rx="2" fill="#ef5350"/>
<rect x="340" y="120" width="14" height="28" rx="2" fill="#26a69a"/>
<rect x="375" y="80" width="14" height="30" rx="2" fill="#26a69a"/>
<line x1="354" y1="120" x2="375" y2="110" stroke="#f59e0b" stroke-width="1" stroke-dasharray="3,2"/>
<rect x="354" y="110" width="21" height="10" fill="#f59e0b20"/>
<text x="365" y="108" fill="#f59e0b" font-size="7">GAP</text>
<rect x="395" y="75" width="14" height="35" rx="2" fill="#26a69a"/>
<rect x="415" y="70" width="14" height="30" rx="2" fill="#26a69a"/>
<rect x="435" y="65" width="14" height="35" rx="2" fill="#26a69a"/>
<line x1="300" y1="135" x2="360" y2="135" stroke="#78909c" stroke-width="1" stroke-dasharray="3,2"/>
<text x="330" y="147" fill="#78909c" font-size="7">Rango previo</text>
<text x="402" y="155" fill="#26a69a" font-size="8" text-anchor="middle">Rompe una consolidación</text>
<text x="402" y="168" fill="#26a69a" font-size="8" text-anchor="middle">Alto volumen</text>
<text x="402" y="181" fill="#26a69a" font-size="8" text-anchor="middle">Inicio de nueva tendencia</text>
<text x="402" y="194" fill="#26a69a" font-size="8" text-anchor="middle" font-weight="bold">→ Tradea en dirección del gap</text>

<rect x="15" y="220" width="245" height="160" rx="8" fill="#8b5cf615" stroke="#8b5cf6" stroke-width="1"/>
<text x="137" y="240" fill="#8b5cf6" font-size="10" text-anchor="middle" font-weight="bold">3. RUNAWAY GAP (Continuación)</text>
<rect x="35" y="310" width="14" height="25" rx="2" fill="#26a69a"/>
<rect x="55" y="300" width="14" height="30" rx="2" fill="#26a69a"/>
<rect x="75" y="290" width="14" height="28" rx="2" fill="#26a69a"/>
<rect x="95" y="280" width="14" height="30" rx="2" fill="#26a69a"/>
<rect x="130" y="258" width="14" height="30" rx="2" fill="#26a69a"/>
<line x1="109" y1="280" x2="130" y2="288" stroke="#f59e0b" stroke-width="1" stroke-dasharray="3,2"/>
<rect x="109" y="278" width="21" height="10" fill="#f59e0b20"/>
<text x="120" y="276" fill="#f59e0b" font-size="7">GAP</text>
<rect x="150" y="248" width="14" height="30" rx="2" fill="#26a69a"/>
<rect x="170" y="240" width="14" height="28" rx="2" fill="#26a69a"/>
<rect x="190" y="260" width="14" height="20" rx="2" fill="#26a69a"/>
<text x="137" y="340" fill="#8b5cf6" font-size="8" text-anchor="middle">Ocurre EN MEDIO de tendencia</text>
<text x="137" y="353" fill="#8b5cf6" font-size="8" text-anchor="middle">Señal de fuerza y momentum</text>
<text x="137" y="366" fill="#8b5cf6" font-size="8" text-anchor="middle" font-weight="bold">→ Tradea en dirección del gap</text>

<rect x="280" y="220" width="245" height="160" rx="8" fill="#ef535015" stroke="#ef5350" stroke-width="1"/>
<text x="402" y="240" fill="#ef5350" font-size="10" text-anchor="middle" font-weight="bold">4. EXHAUSTION GAP (Agotamiento)</text>
<rect x="300" y="320" width="14" height="25" rx="2" fill="#26a69a"/>
<rect x="320" y="310" width="14" height="30" rx="2" fill="#26a69a"/>
<rect x="340" y="295" width="14" height="28" rx="2" fill="#26a69a"/>
<rect x="360" y="285" width="14" height="30" rx="2" fill="#26a69a"/>
<rect x="395" y="265" width="14" height="25" rx="2" fill="#26a69a"/>
<line x1="374" y1="285" x2="395" y2="290" stroke="#f59e0b" stroke-width="1" stroke-dasharray="3,2"/>
<rect x="374" y="282" width="21" height="8" fill="#f59e0b20"/>
<text x="385" y="280" fill="#f59e0b" font-size="7">GAP</text>
<rect x="415" y="280" width="14" height="25" rx="2" fill="#ef5350"/>
<rect x="435" y="290" width="14" height="30" rx="2" fill="#ef5350"/>
<rect x="455" y="305" width="14" height="28" rx="2" fill="#ef5350"/>
<text x="402" y="346" fill="#ef5350" font-size="8" text-anchor="middle">Ocurre al FINAL de tendencia</text>
<text x="402" y="359" fill="#ef5350" font-size="8" text-anchor="middle">Seguido de reversión</text>
<text x="402" y="372" fill="#ef5350" font-size="8" text-anchor="middle">Volumen alto pero se llena rápido</text>
<text x="402" y="385" fill="#ef5350" font-size="8" text-anchor="middle" font-weight="bold">→ Tradea el GAP FILL (reversión)</text>
</svg>
</div>

<h3>Estrategia 1: Gap Fill (70% de los Gaps se Llenan)</h3>

<div class="strategy-box">
<h4>Gap Fill: La Estrategia de Mayor Probabilidad</h4>
<p>Estadísticamente, <strong>aproximadamente el 70% de los gaps se llenan</strong> (el precio vuelve al nivel pre-gap). Esta estrategia aprovecha esa probabilidad:</p>
<ol>
<li><strong>Identifica el gap:</strong> El precio abre significativamente arriba o abajo del cierre anterior.</li>
<li><strong>Determina el tipo:</strong> Los Common Gaps y Exhaustion Gaps se llenan con mayor frecuencia. Los Breakaway Gaps a menudo NO se llenan.</li>
<li><strong>Espera confirmación:</strong> No entres inmediatamente. Espera los primeros 15-30 minutos para ver si el precio empieza a revertir hacia el gap.</li>
<li><strong>Entrada:</strong> Entra en dirección contraria al gap (si el gap fue al alza, ve SHORT; si fue a la baja, ve LONG).</li>
<li><strong>Target:</strong> El cierre de la sesión anterior (el nivel donde "se llena" el gap).</li>
<li><strong>Stop loss:</strong> Por encima/debajo del extremo del gap.</li>
</ol>
</div>

<h3>Estrategia 2: Gap and Go (Cuando el Gap NO se Llena)</h3>

<div class="strategy-box">
<h4>Gap and Go: Siguiendo el Momentum</h4>
<p>Cuando el gap tiene fuerza (Breakaway o Runaway), el precio NO se llena y continúa en la dirección del gap:</p>
<ol>
<li><strong>Identifica un gap con volumen alto:</strong> El volumen en la apertura es 2-3x el promedio.</li>
<li><strong>Espera 15-30 minutos:</strong> Si el precio NO intenta llenar el gap y se mantiene o sigue en la dirección del gap...</li>
<li><strong>Entrada:</strong> En la dirección del gap, en un mini-pullback dentro de la nueva tendencia.</li>
<li><strong>Stop loss:</strong> En el punto medio del gap (si se llena hasta la mitad, la tesis está rota).</li>
<li><strong>Target:</strong> Extensión del movimiento usando Fibonacci o niveles de S/R previos.</li>
</ol>
</div>

<h3>Weekend Gaps en Forex</h3>

<div class="highlight-box yellow">
<h4>Gaps de Fin de Semana en Forex</h4>
<p>El Forex cierra el viernes a las 5:00 PM ET y reabre el domingo a las 5:00 PM ET. Si ocurre algo importante durante el fin de semana (elecciones, crisis geopolítica, reunión del G7), el precio puede abrir el domingo con un gap significativo. La estadística: <strong>la mayoría de los weekend gaps en Forex se llenan durante la semana siguiente</strong>. Estrategia: si el gap no es por un evento fundamental masivo, busca el gap fill durante las siguientes 24-48 horas.</p>
</div>

<h3>¿Cómo Identificar el Tipo de Gap?</h3>

<div class="grid-cards">
<div class="card">
<h4>¿Es un Common Gap?</h4>
<p>Ocurre dentro de un rango de consolidación. Sin catalizador de noticias obvio. Volumen normal o bajo. Se llena en pocas horas.</p>
</div>
<div class="card">
<h4>¿Es un Breakaway Gap?</h4>
<p>Rompe una consolidación o rango claro. Catalizador de noticias presente. Volumen muy alto. El precio no vuelve al gap.</p>
</div>
<div class="card">
<h4>¿Es un Runaway Gap?</h4>
<p>Ocurre en medio de una tendencia fuerte ya establecida. Señal de aceleración del momentum. No tiene por qué haber noticia nueva.</p>
</div>
<div class="card">
<h4>¿Es un Exhaustion Gap?</h4>
<p>Ocurre después de una tendencia larga/extendida. Volumen alto al inicio pero se revierte rápidamente. Señal de que la tendencia está agotada.</p>
</div>
</div>

<div class="warning-box">
<h4>⚠️ Precaución con los Gaps</h4>
<p>Nunca asumas automáticamente que un gap se va a llenar. Identifica primero el tipo de gap. Los Breakaway Gaps pueden tardar MESES en llenarse (o nunca hacerlo). Y ten cuidado con el tamaño de posición: los gaps generan movimientos rápidos y tu stop loss puede sufrir slippage.</p>
</div>`,
          keyPoints: [
            "Un gap es un salto en el precio donde no hubo transacciones; ocurre por noticias fuera de horario, earnings o eventos de fin de semana",
            "4 tipos de gaps: Common (se llena rápido), Breakaway (inicio de tendencia), Runaway (continuación), Exhaustion (fin de tendencia)",
            "Aproximadamente el 70% de los gaps se llenan; los Common y Exhaustion se llenan más frecuentemente que los Breakaway",
            "Gap Fill: opera en CONTRA del gap esperando que se llene; Gap and Go: opera A FAVOR si el volumen es alto y no se llena",
            "Los weekend gaps en Forex suelen llenarse durante la semana siguiente salvo eventos fundamentales masivos"
          ],
          quiz: [
            {
              question: "¿Qué tipo de gap tiene la MAYOR probabilidad de llenarse rápidamente?",
              options: [
                "Breakaway Gap (ruptura)",
                "Runaway Gap (continuación)",
                "Common Gap (ordinario)",
                "Todos tienen la misma probabilidad"
              ],
              correctIndex: 2,
              explanation: "El Common Gap (ordinario) es el que se llena más rápido y con mayor frecuencia. Ocurre dentro de rangos de consolidación, sin catalizador fundamental importante, y el precio suele volver al nivel pre-gap en pocas horas."
            },
            {
              question: "¿Cuándo usarías la estrategia 'Gap and Go' en vez de esperar el gap fill?",
              options: [
                "Cuando el gap es pequeño y sin volumen",
                "Cuando el gap tiene volumen alto, rompe una consolidación y no intenta llenarse en los primeros 15-30 minutos",
                "Siempre, porque es más rentable",
                "Solo en criptomonedas"
              ],
              correctIndex: 1,
              explanation: "Gap and Go se usa cuando el gap tiene fuerza real: volumen 2-3x el promedio, rompe un nivel clave (Breakaway Gap), y en los primeros 15-30 minutos el precio no intenta volver al nivel anterior. Esto indica momentum real."
            },
            {
              question: "¿Qué señala un Exhaustion Gap y cómo se tradea?",
              options: [
                "Inicio de tendencia; compra en dirección del gap",
                "Continuación de tendencia; mantén posiciones",
                "Final de tendencia; busca el gap fill porque el precio probablemente revertirá",
                "No se puede tradear"
              ],
              correctIndex: 2,
              explanation: "El Exhaustion Gap ocurre al final de una tendencia extendida. Es la 'última boqueada' del movimiento. Se identifica porque ocurre después de una subida/bajada prolongada y se llena rápidamente. Se tradea esperando el gap fill (reversión)."
            }
          ],
          practicalExercise: "Abre TradingView con el S&P 500 (SPY o ES1!) en gráfico diario. Busca los últimos 10 gaps visibles en los últimos 3 meses. Para cada gap: (1) Clasifícalo como Common, Breakaway, Runaway o Exhaustion. (2) Anota si se llenó y cuánto tardó. (3) Mide el tamaño del gap en puntos/porcentaje. (4) Identifica si hubo una noticia asociada. Luego busca un weekend gap reciente en EUR/USD (gráfico H1): ¿se llenó durante la semana? ¿Cuántas horas tardó?"
        },
        // --------------------------------------------------------------
        // LESSON 2-5-5: INTERMARKET ANALYSIS
        // --------------------------------------------------------------
        {
          id: "2-5-5",
          title: "Intermarket Analysis: Cómo Todo Está Conectado",
          duration: "25 min",
          content: `
<h2>Análisis Intermarket: El Mapa de Conexiones del Mercado Global</h2>

<div class="analogy-box">
<h3>La Analogía del Ecosistema</h3>
<p>Los mercados financieros son como un ecosistema. Si llueve más (bajan las tasas de interés), ciertos animales prosperan (acciones tech, oro) y otros sufren (el dólar, los bancos). Si hay sequía (suben las tasas), ocurre lo contrario. Nada se mueve en aislamiento. Entender estas conexiones es lo que separa a un trader competente de uno que solo mira un gráfico sin contexto.</p>
</div>

<h3>Las Relaciones Intermarket Fundamentales</h3>

<div style="display:flex;justify-content:center;margin:24px 0">
<svg width="520" height="420" viewBox="0 0 520 420" style="background:#131722;border-radius:12px;border:1px solid #2a2a40">
<text x="260" y="22" fill="white" font-size="12" text-anchor="middle" font-weight="bold">RED DE CONEXIONES INTERMARKET</text>

<circle cx="260" cy="110" r="38" fill="#ef535025" stroke="#ef5350" stroke-width="2"/>
<text x="260" y="106" fill="#ef5350" font-size="11" text-anchor="middle" font-weight="bold">USD</text>
<text x="260" y="120" fill="#ef5350" font-size="8" text-anchor="middle">(Dólar)</text>

<circle cx="100" cy="200" r="35" fill="#f59e0b25" stroke="#f59e0b" stroke-width="2"/>
<text x="100" y="196" fill="#f59e0b" font-size="11" text-anchor="middle" font-weight="bold">ORO</text>
<text x="100" y="210" fill="#f59e0b" font-size="8" text-anchor="middle">(XAUUSD)</text>

<circle cx="420" cy="200" r="35" fill="#26a69a25" stroke="#26a69a" stroke-width="2"/>
<text x="420" y="196" fill="#26a69a" font-size="11" text-anchor="middle" font-weight="bold">BONOS</text>
<text x="420" y="210" fill="#26a69a" font-size="8" text-anchor="middle">(Treasuries)</text>

<circle cx="100" cy="330" r="35" fill="#8b5cf625" stroke="#8b5cf6" stroke-width="2"/>
<text x="100" y="326" fill="#8b5cf6" font-size="11" text-anchor="middle" font-weight="bold">ACCIONES</text>
<text x="100" y="340" fill="#8b5cf6" font-size="8" text-anchor="middle">(S&P 500)</text>

<circle cx="260" cy="330" r="35" fill="#78909c25" stroke="#78909c" stroke-width="2"/>
<text x="260" y="326" fill="#78909c" font-size="11" text-anchor="middle" font-weight="bold">PETRÓLEO</text>
<text x="260" y="340" fill="#78909c" font-size="8" text-anchor="middle">(WTI/Brent)</text>

<circle cx="420" cy="330" r="35" fill="#e91e6325" stroke="#e91e63" stroke-width="2"/>
<text x="420" y="326" fill="#e91e63" font-size="11" text-anchor="middle" font-weight="bold">VIX</text>
<text x="420" y="340" fill="#e91e63" font-size="8" text-anchor="middle">(Volatilidad)</text>

<line x1="225" y1="130" x2="130" y2="180" stroke="#ef5350" stroke-width="1.5"/>
<text x="160" y="148" fill="#ef5350" font-size="8" transform="rotate(-25,160,148)">INVERSO</text>

<line x1="295" y1="130" x2="390" y2="180" stroke="#ef5350" stroke-width="1.5"/>
<text x="355" y="148" fill="#ef5350" font-size="8" transform="rotate(25,355,148)">INVERSO*</text>

<line x1="240" y1="145" x2="120" y2="300" stroke="#26a69a" stroke-width="1.5" stroke-dasharray="4,3"/>
<text x="160" y="228" fill="#26a69a" font-size="8" transform="rotate(-50,160,228)">VARIABLE</text>

<line x1="260" y1="148" x2="260" y2="295" stroke="#ef5350" stroke-width="1.5"/>
<text x="274" y="225" fill="#ef5350" font-size="8">INVERSO</text>

<line x1="130" y1="320" x2="225" y2="330" stroke="#78909c" stroke-width="1.5" stroke-dasharray="4,3"/>
<text x="178" y="315" fill="#78909c" font-size="7">Crecimiento</text>

<line x1="135" y1="330" x2="385" y2="330" stroke="#ef5350" stroke-width="1.5"/>
<text x="260" y="320" fill="#ef5350" font-size="8" text-anchor="middle">INVERSO</text>

<line x1="390" y1="215" x2="135" y2="310" stroke="#26a69a" stroke-width="1.5" stroke-dasharray="4,3"/>

<text x="260" y="395" fill="#a0a0b8" font-size="9" text-anchor="middle">* Cuando las tasas de interés suben (yields suben), precios de bonos bajan</text>
<text x="260" y="410" fill="#a0a0b8" font-size="9" text-anchor="middle">Las líneas rojas sólidas indican relación inversa; las verdes punteadas, variable</text>
</svg>
</div>

<h3>Relación 1: Bonos vs. Acciones</h3>

<div class="highlight-box red">
<h4>Bonos y Acciones: Relación Inversa (Cuando las Tasas Suben)</h4>
<p>Cuando la Fed sube las tasas de interés, los <strong>rendimientos de bonos (yields) suben</strong> y los <strong>precios de bonos bajan</strong> (relación inversa entre precio y yield). Las acciones sufren porque: (1) las empresas pagan más por préstamos, (2) los inversores prefieren bonos seguros con alto rendimiento, (3) el descuento de flujos futuros aumenta. Cuando la Fed baja tasas → bonos suben, acciones suben.</p>
</div>

<h3>Relación 2: USD vs. Commodities</h3>

<div class="highlight-box purple">
<h4>Dólar Fuerte = Commodities Débiles</h4>
<p>La mayoría de las materias primas (petróleo, oro, cobre, soja) se cotizan en dólares. Cuando el dólar se fortalece, se necesitan MENOS dólares para comprar la misma cantidad de commodity → el precio baja. Cuando el dólar se debilita, se necesitan MÁS dólares → el precio sube. Esta relación inversa es una de las más consistentes del mercado.</p>
</div>

<h3>Relación 3: Petróleo y Divisas (CAD, NOK)</h3>

<div class="grid-cards">
<div class="card">
<h4>🛢️ Petróleo y CAD (Dólar Canadiense)</h4>
<p>Canadá es uno de los mayores exportadores de petróleo del mundo. Cuando el petróleo sube, la economía canadiense se beneficia → CAD se fortalece → USD/CAD baja. <strong>Correlación: Petróleo ↑ = USD/CAD ↓</strong></p>
</div>
<div class="card">
<h4>🇳🇴 Petróleo y NOK (Corona Noruega)</h4>
<p>Noruega es gran exportador de petróleo y gas. Cuando el petróleo sube, la NOK se fortalece → USD/NOK baja. Similar al CAD pero con menor liquidez.</p>
</div>
</div>

<h3>Relación 4: Oro vs. Rendimientos Reales</h3>

<div class="highlight-box yellow">
<h4>Oro y Yields Reales: La Relación que Pocos Conocen</h4>
<p>El oro NO paga intereses. Los bonos SÍ. Cuando los <strong>rendimientos reales</strong> (yield del bono - inflación) son altos y positivos, los inversores prefieren bonos al oro → oro baja. Cuando los rendimientos reales son bajos o negativos (inflación mayor que el yield), el oro es más atractivo → oro sube. <strong>Sigue los TIPS (Treasury Inflation-Protected Securities) para ver yields reales.</strong></p>
</div>

<h3>Relación 5: VIX vs. S&P 500</h3>

<div class="highlight-box red">
<h4>VIX: El "Índice del Miedo"</h4>
<p>El <strong>VIX</strong> mide la volatilidad esperada del S&P 500 en los próximos 30 días. Tiene una relación <strong>fuertemente inversa</strong> con el S&P 500. Cuando las acciones caen fuerte, el miedo sube → VIX se dispara. Cuando el mercado está tranquilo y alcista → VIX baja. Niveles clave: VIX <15 = complacencia. VIX 20-30 = miedo moderado. VIX >30 = pánico (posible oportunidad de compra contrarian).</p>
</div>

<h3>Relación 6: Cobre como Indicador Económico</h3>

<div class="vocab-card">
<h4>🔴 Dr. Copper: El Metal con Doctorado en Economía</h4>
<p>El cobre se usa en construcción, electrónica, infraestructura... en casi TODO. Por eso se le llama "Dr. Copper": porque <strong>predice</strong> la salud económica. Cobre subiendo = demanda industrial fuerte = economía creciendo. Cobre bajando = demanda industrial débil = posible desaceleración económica. Si el cobre diverge de las acciones (cobre baja pero acciones suben), es una señal de advertencia.</p>
</div>

<h3>La Curva de Rendimientos: El Predictor de Recesiones</h3>

<div class="highlight-box blue">
<h4>Inversión de la Curva de Rendimientos</h4>
<p>Normalmente, los bonos a largo plazo (10 años) pagan MÁS que los de corto plazo (2 años). Cuando el bono de 2 años paga MÁS que el de 10 años, la curva se <strong>invierte</strong>. Una inversión de la curva ha predicho TODAS las recesiones de los últimos 50 años (con 6-18 meses de anticipación). Sigue el spread 10Y-2Y: cuando se vuelve negativo, prepárate para un posible entorno de recesión.</p>
</div>

<h3>Tu Dashboard Intermarket Diario</h3>

<div class="strategy-box">
<h4>Checklist Intermarket: 5 Minutos Cada Mañana</h4>
<ol>
<li><strong>DXY (Índice del Dólar):</strong> ¿Tendencia alcista o bajista? Esto define el sesgo para Forex y commodities.</li>
<li><strong>US10Y (Rendimiento del Bono a 10 Años):</strong> ¿Subiendo o bajando? Impacta acciones, especialmente tech.</li>
<li><strong>VIX:</strong> ¿Por debajo de 15 (calma) o por encima de 25 (miedo)? Define el apetito de riesgo del mercado.</li>
<li><strong>Petróleo (WTI):</strong> ¿Subiendo o bajando? Impacta CAD, NOK, sector energía e inflación.</li>
<li><strong>S&P 500 Futuros (ES):</strong> ¿Risk-on (alcista) o risk-off (bajista)? Define si las divisas de riesgo (AUD, NZD) se fortalecen o debilitan.</li>
<li><strong>Oro (XAUUSD):</strong> ¿Subiendo como refugio o bajando por USD fuerte? Confirma o contradice tu lectura del DXY.</li>
</ol>
</div>

<div class="example-box">
<h4>Ejemplo de Lectura Intermarket Completa</h4>
<p><strong>Escenario:</strong> DXY bajando, US10Y bajando, VIX en 12, Petróleo subiendo, S&P 500 en máximos, Oro subiendo levemente.</p>
<p><strong>Lectura:</strong> Entorno Risk-On claro. USD débil beneficia a EUR/USD y GBP/USD (buscar LONG). Petróleo al alza beneficia a CAD (buscar SHORT USD/CAD). VIX bajo indica complacencia (posible corrección eventual, pero no inmediata). Oro subiendo a pesar de Risk-On puede indicar preocupaciones inflacionarias de fondo.</p>
<p><strong>Sesgo operativo:</strong> Buscar operaciones CONTRA el dólar (short USD). Favorecer pares de riesgo (AUD, NZD, CAD al alza). Ser cauto con posiciones a largo plazo en acciones porque VIX muy bajo históricamente precede a correcciones.</p>
</div>

<div class="warning-box">
<h4>⚠️ Las Correlaciones Cambian</h4>
<p>Las correlaciones intermarket no son estáticas. En ciertos regímenes de mercado (como una crisis), las correlaciones normales se rompen: todo puede bajar junto (acciones, bonos, oro) en una liquidación de pánico. Usa el intermarket analysis como CONTEXTO y FILTRO, no como la única razón para un trade. Siempre confirma con el gráfico del activo que vas a operar.</p>
</div>`,
          keyPoints: [
            "Bonos vs. acciones: cuando las tasas suben, los yields de bonos suben y las acciones tienden a caer (relación inversa)",
            "USD fuerte = commodities débiles (petróleo, oro, cobre cotizan en dólares); USD débil = commodities al alza",
            "VIX y S&P 500 tienen relación fuertemente inversa: VIX >30 = pánico (posible oportunidad contrarian de compra)",
            "Inversión de la curva de rendimientos (2Y > 10Y) ha predicho TODAS las recesiones de los últimos 50 años",
            "Construye un dashboard diario: DXY, US10Y, VIX, Petróleo, S&P 500 futuros y Oro para leer el contexto global"
          ],
          quiz: [
            {
              question: "¿Por qué un dólar fuerte generalmente hace que el precio del oro baje?",
              options: [
                "Porque el oro pierde calidad cuando el dólar sube",
                "Porque el oro cotiza en dólares: USD fuerte = menos dólares necesarios para comprar la misma cantidad de oro",
                "Porque los mineros producen menos oro",
                "No hay relación entre el dólar y el oro"
              ],
              correctIndex: 1,
              explanation: "El oro cotiza en USD. Si el dólar se fortalece, se necesitan MENOS dólares para comprar la misma onza de oro, así que el precio en dólares baja. Además, un dólar fuerte suele venir con tasas altas, lo que hace que los bonos sean más atractivos que el oro (que no paga intereses)."
            },
            {
              question: "¿Qué señala una inversión de la curva de rendimientos (bono 2Y paga más que el 10Y)?",
              options: [
                "Que la economía está creciendo rápidamente",
                "Que es un buen momento para comprar acciones tech",
                "Que históricamente ha precedido TODAS las recesiones de los últimos 50 años (con 6-18 meses de anticipación)",
                "Que los bonos a corto plazo son más seguros"
              ],
              correctIndex: 2,
              explanation: "La inversión de la curva (2Y yield > 10Y yield) indica que los inversores ven más riesgo a corto plazo que a largo plazo. Ha precedido todas las recesiones de los últimos 50 años, aunque el timing varía entre 6 y 18 meses."
            },
            {
              question: "¿Por qué al cobre se le llama 'Dr. Copper'?",
              options: [
                "Porque fue descubierto por un doctor",
                "Porque se usa en hospitales",
                "Porque su precio predice la salud económica global al usarse en construcción, electrónica e infraestructura",
                "Porque cura enfermedades"
              ],
              correctIndex: 2,
              explanation: "El cobre se usa en casi toda actividad industrial: construcción, electrónica, infraestructura, manufactura. Por eso su precio refleja la demanda industrial real. Si el cobre sube, la economía está activa. Si baja, la demanda industrial se está debilitando."
            }
          ],
          practicalExercise: "Abre TradingView y crea un layout con 6 gráficos: DXY, US10Y, VIX, Petróleo WTI (CL1!), S&P 500 (SPY o ES1!) y Oro (XAUUSD). Todos en gráfico diario. Analiza la situación actual: (1) ¿El DXY está en tendencia alcista o bajista? (2) ¿Los yields están subiendo o bajando? (3) ¿El VIX está en zona de complacencia (<15) o miedo (>25)? (4) Escribe una 'lectura intermarket' como la del ejemplo: ¿estamos en Risk-On o Risk-Off? ¿Qué pares de Forex y qué dirección favorece este contexto? Repite este ejercicio cada mañana durante una semana."
        }
      ]
    }
  ]
};
