import type { Phase } from "../courseData";

export const PHASE_1: Phase = {
  id: "fase-1",
  number: 1,
  title: "Fundamentos Absolutos",
  subtitle: "De cero a entender el mercado",
  description: "Empezamos desde cero absoluto. No necesitas saber NADA de finanzas. Aquí vas a entender qué es el trading, cómo funcionan los mercados, y vas a dar tus primeros pasos con confianza.",
  color: "#3B82F6",
  gradient: "from-blue-500 to-blue-700",
  modules: [
    {
      id: "mod-1-1",
      title: "Qué es el Trading",
      description: "Entiende qué es esto del trading de una vez por todas",
      icon: "📊",
      color: "#3B82F6",
      lessons: [
        {
          id: "1-1-1",
          title: "Trading Explicado Desde Cero Absoluto",
          duration: "15 min",
          content: `
<h2>Bienvenido al Mundo del Trading</h2>
<div class="analogy-box">
<h3>La Analogia del Mercadillo</h3>
<p>Imagina que vas a un mercadillo un sábado por la mañana. Ves un puesto vendiendo camisetas a 5 euros. Tu sabes que esas camisetas en una tienda cuestan 15 euros. Asi que compras 10 camisetas por 50 euros y las vendes en internet a 12 euros cada una. Resultado: gastaste 50 euros y ganaste 120 euros. <strong>Eso es trading.</strong></p>
</div>
<p>El <strong>trading</strong> es simplemente <strong>comprar algo a un precio y venderlo a un precio mayor</strong> (o venderlo primero y comprarlo despues a un precio menor). En vez de camisetas, usamos:</p>
<div class="grid-cards">
<div class="card"><h4>Divisas (Forex)</h4><p>Compras euros y vendes dólares, o al revés. El mercado más grande del mundo con 7.5 BILLONES de dólares diarios.</p></div>
<div class="card"><h4>Acciones</h4><p>Compras un pedacito de Apple, Tesla, Amazon... Si la empresa sube, tu ganas.</p></div>
<div class="card"><h4>Criptomonedas</h4><p>Bitcoin, Ethereum... Activos digitales que puedes comprar y vender 24/7.</p></div>
<div class="card"><h4>Índices y Materias Primas</h4><p>S&P 500, NASDAQ, Oro, Petróleo... Paquetes de acciones o recursos naturales.</p></div>
</div>
<h3>La Gran Diferencia: Trading vs Invertir</h3>
<div class="comparison-table">
<div class="comparison-col"><h4>Trading</h4><ul><li>Operaciones cortas (minutos a semanas)</li><li>Buscas beneficio rápido</li><li>Analizas gráficos y patrones</li><li>Puedes ganar cuando el mercado SUBE o BAJA</li><li>Requiere más tiempo y dedicacion</li></ul></div>
<div class="comparison-col"><h4>Inversion</h4><ul><li>Largo plazo (meses a años)</li><li>Crecimiento gradual</li><li>Analizas la empresa/economía</li><li>Generalmente solo ganas si sube</li><li>Mas pasivo, "comprar y mantener"</li></ul></div>
</div>
<h3>Como Se Gana Dinero en Trading</h3>
<div class="highlight-box green">
<h4>1. Comprar Barato, Vender Caro (Posicion LARGA / LONG)</h4>
<p>Compras Bitcoin a 30,000$ → Sube a 35,000$ → Vendes → <strong>Ganancia: 5,000$</strong></p>
<p>Es lo intuitivo: compras algo esperando que suba de precio.</p>
</div>
<div class="highlight-box red">
<h4>2. Vender Caro, Comprar Barato (Posicion CORTA / SHORT)</h4>
<p>Vendes Bitcoin a 35,000$ → Baja a 30,000$ → Compras → <strong>Ganancia: 5,000$</strong></p>
<p>El broker te "presta" el activo, tu lo vendes caro, y cuando baja lo recompras barato. La diferencia es tu ganancia.</p>
</div>
<h3>Los 4 Estilos de Trading</h3>
<div class="grid-cards">
<div class="card"><h4>Scalping</h4><p>Operaciones de segundos a minutos. Muchas operaciones al día, ganancias pequeñas por operación. Requiere concentración extrema.</p></div>
<div class="card"><h4>Day Trading</h4><p>Operaciones que se abren y cierran el MISMO DIA. No dejas nada abierto por la noche. 1-5 operaciones al día.</p></div>
<div class="card"><h4>Swing Trading</h4><p>Operaciones de días a semanas. Buscas movimientos grandes. Menos estrés, ideal para combinar con trabajo.</p></div>
<div class="card"><h4>Position Trading</h4><p>Semanas a meses. Casi como invertir pero con análisis técnico. Muy pocas operaciones.</p></div>
</div>
<div class="warning-box">
<h4>Realidad del Trading</h4>
<p>El 70-90% de los traders pierden dinero. PERO, los que aprenden correctamente, tienen disciplina y gestionan bien el riesgo, pueden vivir del trading. Este curso existe para que estés en ese 10-30% ganador. No hay atajos: requiere estudio, práctica y disciplina.</p>
</div>`,
          keyPoints: [
            "Trading = comprar y vender activos financieros para obtener beneficio",
            "Puedes ganar cuando el mercado sube (LONG) o baja (SHORT)",
            "4 estilos: Scalping, Day Trading, Swing Trading, Position Trading",
            "El 70-90% pierde dinero, pero con educación y disciplina puedes ser rentable"
          ],
          quiz: [
            { question: "¿Qué es el trading en palabras simples?", options: ["Comprar y vender activos para obtener beneficio por la diferencia de precio", "Guardar dinero en el banco", "Apostar en un casino online", "Comprar acciones y nunca venderlas"], correctIndex: 0, explanation: "El trading consiste en comprar y vender activos financieros aprovechando las diferencias de precio para obtener un beneficio." },
            { question: "¿Qué es una posición SHORT (corta)?", options: ["Comprar un activo esperando que suba", "Vender un activo prestado esperando que baje para recomprarlo más barato", "Mantener una inversión por poco tiempo", "Comprar criptomonedas"], correctIndex: 1, explanation: "Una posición corta (SHORT) significa vender un activo primero (prestado por el broker) y recomprarlo despues a un precio menor." },
            { question: "¿Cuál es la diferencia principal entre scalping y swing trading?", options: ["No hay diferencia", "El scalping dura segundos/minutos, el swing dura días/semanas", "El swing es más rápido que el scalping", "El scalping solo funciona con acciones"], correctIndex: 1, explanation: "El scalping opera en segundos/minutos buscando ganancias pequeñas, mientras el swing trading mantiene posiciones días o semanas buscando movimientos más grandes." }
          ],
          practicalExercise: "Abre TradingView.com (gratis). Busca BTCUSD. Observa como sube y baja. Identifica un momento donde habrías comprado (LONG) y otro donde habrías vendido (SHORT). Apúntalo."
        },
        {
          id: "1-1-2",
          title: "Los Mercados Financieros: Dónde Ocurre Todo",
          duration: "20 min",
          content: `
<h2>Los Mercados Financieros</h2>
<div class="analogy-box"><h3>Piensa en un Centro Comercial</h3><p>Un centro comercial tiene muchas tiendas: ropa, electrónica, comida... Los mercados financieros son igual: hay diferentes "tiendas" donde se compran y venden diferentes cosas.</p></div>
<h3>Los 5 Mercados Principales</h3>

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin:20px 0">
<div style="border-radius:12px;overflow:hidden;border:1px solid #2a2a40">
<img src="/charts/chart-eurusd-h4.png" alt="EUR/USD H4 en TradingView" style="width:100%;display:block" />
<div style="padding:8px;background:#131722;text-align:center"><span style="color:#26a69a;font-size:11px;font-weight:bold">EUR/USD H4 - Forex</span></div>
</div>
<div style="border-radius:12px;overflow:hidden;border:1px solid #2a2a40">
<img src="/charts/chart-btcusdt-d1.png" alt="BTC/USDT Diario en TradingView" style="width:100%;display:block" />
<div style="padding:8px;background:#131722;text-align:center"><span style="color:#f59e0b;font-size:11px;font-weight:bold">BTC/USDT Diario - Crypto</span></div>
</div>
<div style="border-radius:12px;overflow:hidden;border:1px solid #2a2a40">
<img src="/charts/chart-spx-d1.png" alt="S&P 500 Diario en TradingView" style="width:100%;display:block" />
<div style="padding:8px;background:#131722;text-align:center"><span style="color:#8b5cf6;font-size:11px;font-weight:bold">S&P 500 Diario - Índice</span></div>
</div>
<div style="border-radius:12px;overflow:hidden;border:1px solid #2a2a40">
<img src="/charts/chart-xauusd-d1.png" alt="Oro XAUUSD Diario en TradingView" style="width:100%;display:block" />
<div style="padding:8px;background:#131722;text-align:center"><span style="color:#f59e0b;font-size:11px;font-weight:bold">Oro (XAUUSD) Diario - Materia Prima</span></div>
</div>
<div style="border-radius:12px;overflow:hidden;border:1px solid #2a2a40">
<img src="/charts/chart-aapl-d1.png" alt="Apple AAPL Diario en TradingView" style="width:100%;display:block" />
<div style="padding:8px;background:#131722;text-align:center"><span style="color:#10b981;font-size:11px;font-weight:bold">Apple (AAPL) Diario - Acciones</span></div>
</div>
</div>
<p style="text-align:center;color:#555;font-size:11px;margin-bottom:16px">Capturas reales de TradingView - Abril 2026</p>
<div class="highlight-box blue"><h4>Antes de ver los mercados, 3 conceptos rápidos:</h4>
<ul>
<li><strong>Apalancamiento:</strong> Es como un "préstamo" del broker. Si tienes 1:30 significa que con 1.000€ puedes controlar 30.000€ en el mercado. Más apalancamiento = más ganancia potencial PERO también más riesgo. Profundizaremos en esto en la Fase 3.</li>
<li><strong>Cuentas fondeadas (Prop Firms):</strong> Son empresas que te dan SU dinero para que tú operes. Si demuestras que eres rentable, te dejan usar cuentas de 100.000€ o más. Tú no arriesgas tu dinero. Lo veremos en detalle en la Fase 5.</li>
<li><strong>Volatilidad:</strong> Cuánto se mueve el precio. Alta volatilidad = el precio sube y baja mucho en poco tiempo.</li>
</ul></div>
<div class="market-card forex"><h4>1. FOREX (Foreign Exchange) - Divisas</h4><div class="stats"><span>Volumen diario: 7.5 BILLONES $</span><span>24h Lunes a Viernes</span><span>Apalancamiento: 1:30 a 1:500</span></div><p>El mercado más grande del mundo. Compras/vendes monedas: EUR/USD, GBP/USD, USD/JPY. <strong>Ideal para principiantes y cuentas fondeadas.</strong></p>
<div class="highlight-box blue"><h4>Pares Principales (Majors) - Los más tradeados</h4><ul><li><strong>EUR/USD</strong> - Euro vs Dolar (el más liquido del mundo)</li><li><strong>GBP/USD</strong> - Libra vs Dolar (muy volatil)</li><li><strong>USD/JPY</strong> - Dolar vs Yen (movido por Bank of Japan)</li><li><strong>USD/CHF</strong> - Dolar vs Franco Suizo (refugio seguro)</li><li><strong>AUD/USD, NZD/USD, USD/CAD</strong> - Pares de commodities</li></ul></div></div>
<div class="market-card indices"><h4>2. Índices Bursátiles</h4><div class="stats"><span>Principales: S&P 500, NASDAQ, DAX</span><span>Horario: 9:30-16:00 ET + futuros</span></div><p>Un índice es una "canasta" de acciones. El S&P 500 = las 500 empresas más grandes de EE.UU. Si la economía va bien, sube. <strong>Muy popular en prop firms.</strong></p>
<div class="example-box"><strong>Activos más tradeados:</strong> US500 (S&P), US100 (NASDAQ), US30 (Dow Jones), GER40 (DAX aleman)</div></div>
<div class="market-card crypto"><h4>3. Criptomonedas</h4><div class="stats"><span>Principales: BTC, ETH, SOL</span><span>24/7 nunca cierra</span><span>Volatilidad: MUY ALTA</span></div><p>Puede subir o bajar 10% en un día. Ideal para traders que buscan grandes movimientos y pueden operar fines de semana.</p></div>
<div class="market-card stocks"><h4>4. Acciones</h4><div class="stats"><span>NYSE, NASDAQ</span><span>9:30-16:00 ET</span></div><p>Compras un pedacito de una empresa. Las más tradeadas: Tesla, Apple, NVIDIA, Amazon, Meta.</p></div>
<div class="market-card commodities"><h4>5. Materias Primas</h4><div class="stats"><span>Oro, Petróleo, Gas, Plata</span><span>Movido por geopolítica</span></div><p>El oro (XAUUSD) es el "refugio seguro" por excelencia. El petróleo se mueve con conflictos y OPEP.</p></div>
<h3>Sesiones de Trading - CUANDO Tradear</h3>
<div class="sessions-timeline">
<div style="display:flex;justify-content:center;margin:20px 0">
<svg width="480" height="140" viewBox="0 0 480 140" style="background:#131722;border-radius:12px;border:1px solid #2a2a40">
<text x="240" y="18" fill="white" font-size="10" text-anchor="middle" font-weight="bold">SESIONES DE TRADING (UTC)</text>
<!-- Timeline bar -->
<rect x="20" y="50" width="440" height="30" rx="4" fill="#1e222d"/>
<!-- Hour markers -->
<text x="20" y="95" fill="#555" font-size="7">00</text><text x="56" y="95" fill="#555" font-size="7">02</text><text x="93" y="95" fill="#555" font-size="7">04</text><text x="130" y="95" fill="#555" font-size="7">06</text><text x="166" y="95" fill="#555" font-size="7">08</text><text x="203" y="95" fill="#555" font-size="7">10</text><text x="240" y="95" fill="#555" font-size="7">12</text><text x="276" y="95" fill="#555" font-size="7">14</text><text x="313" y="95" fill="#555" font-size="7">16</text><text x="350" y="95" fill="#555" font-size="7">18</text><text x="386" y="95" fill="#555" font-size="7">20</text><text x="423" y="95" fill="#555" font-size="7">22</text>
<!-- Sydney -->
<rect x="405" y="52" width="55" height="10" rx="2" fill="#6366f144"/><rect x="20" y="52" width="65" height="10" rx="2" fill="#6366f144"/>
<text x="430" y="48" fill="#6366f1" font-size="7">Sydney</text>
<!-- Tokyo -->
<rect x="20" y="55" width="166" height="10" rx="2" fill="#ef535033"/>
<text x="90" y="48" fill="#ef5350" font-size="7">Tokio</text>
<!-- London -->
<rect x="152" y="58" width="166" height="10" rx="2" fill="#3b82f655"/>
<text x="230" y="48" fill="#3b82f6" font-size="8" font-weight="bold">Londres</text>
<!-- NY -->
<rect x="240" y="61" width="166" height="10" rx="2" fill="#26a69a55"/>
<text x="320" y="48" fill="#26a69a" font-size="8" font-weight="bold">Nueva York</text>
<!-- Overlap highlight -->
<rect x="240" y="50" width="78" height="30" rx="0" fill="#fbbf2422" stroke="#fbbf24" stroke-width="1.5"/>
<text x="279" y="42" fill="#fbbf24" font-size="8" font-weight="bold" text-anchor="middle">SOLAPAMIENTO</text>
<!-- Best time -->
<text x="240" y="120" fill="#fbbf24" font-size="10" text-anchor="middle" font-weight="bold">13:00-17:00 UTC = MEJOR MOMENTO para tradear</text>
<text x="240" y="135" fill="#787b86" font-size="8" text-anchor="middle">(15:00-19:00 hora España)</text>
</svg>
</div>
<div class="highlight-box green"><h4>El Mejor Momento: Solapamiento London-NY</h4><p>13:00-17:00 UTC (15:00-19:00 España). MAXIMO volumen y movimiento. Es el "prime time" del trading. La mayoría de traders profesionales operan exclusivamente en este horario.</p></div>`,
          keyPoints: [
            "Forex es el mercado más grande (7.5 billones$/día) - ideal para empezar",
            "5 mercados: Forex, Índices, Cripto, Acciones, Materias Primas",
            "El solapamiento London-NY (13:00-17:00 UTC) es el mejor momento",
            "Índices son muy populares en cuentas fondeadas (prop firms)"
          ],
          quiz: [
            { question: "¿Cuál es el mercado financiero más grande del mundo?", options: ["Acciones", "Criptomonedas", "Forex (divisas)", "Materias primas"], correctIndex: 2, explanation: "Forex mueve 7.5 billones de dólares diarios." },
            { question: "¿Qué mercado esta abierto 24/7?", options: ["Forex", "Acciones", "Criptomonedas", "Índices"], correctIndex: 2, explanation: "El mercado cripto nunca cierra." },
            { question: "¿Cuál es el mejor momento del día para tradear Forex?", options: ["Sesion de Sydney", "Sesion de Tokio", "Solapamiento Londres-Nueva York", "Cierre de Nueva York"], correctIndex: 2, explanation: "El solapamiento London-NY tiene mayor volumen y volatilidad." }
          ]
        },
        {
          id: "1-1-3",
          title: "Terminología ESENCIAL del Trader",
          duration: "25 min",
          content: `
<h2>El Diccionario del Trader</h2>
<p>Estos términos los vas a usar TODOS LOS DIAS. No te preocupes si no los memorizas ahora.</p>
<div class="vocab-section">
<h3>Términos del Precio</h3>
<div class="vocab-card"><h4>PIP (Point in Percentage)</h4><p>El movimiento mínimo de precio en Forex. En EUR/USD, un pip es 0.0001.</p><div class="example-box"><strong>Ejemplo:</strong> EUR/USD de 1.0800 a 1.0850 = 50 pips</div></div>
<div class="vocab-card"><h4>SPREAD</h4><p>La diferencia entre precio de compra (ASK) y venta (BID). Es la comisión del broker.</p><div class="example-box"><strong>Ejemplo:</strong> BID: 1.0800 | ASK: 1.0802 → Spread = 2 pips</div></div>
<div class="vocab-card"><h4>LOTE (Lot Size)</h4><ul><li><strong>1 Lote Estandar</strong> = 100,000 unidades (1 pip = ~10$)</li><li><strong>1 Mini Lote (0.1)</strong> = 10,000 unidades (1 pip = ~1$)</li><li><strong>1 Micro Lote (0.01)</strong> = 1,000 unidades (1 pip = ~0.10$)</li></ul></div>
</div>
<div class="vocab-section">
<h3>Tipos de Ordenes</h3>

<div style="display:flex;justify-content:center;margin:20px 0">
<svg width="460" height="220" viewBox="0 0 460 220" style="background:#131722;border-radius:12px;border:1px solid #2a2a40">
<text x="230" y="18" fill="white" font-size="11" text-anchor="middle" font-weight="bold">TIPOS DE ORDENES PENDIENTES</text>
<!-- Precio actual -->
<line x1="30" y1="110" x2="430" y2="110" stroke="#3b82f6" stroke-width="2"/>
<rect x="175" y="100" width="110" height="20" rx="4" fill="#3b82f6"/><text x="230" y="114" fill="white" font-size="10" text-anchor="middle" font-weight="bold">PRECIO ACTUAL</text>
<!-- Buy Limit (abajo) -->
<rect x="30" y="155" width="100" height="40" rx="6" fill="#26a69a20" stroke="#26a69a"/>
<text x="80" y="172" fill="#26a69a" font-size="9" text-anchor="middle" font-weight="bold">BUY LIMIT</text>
<text x="80" y="187" fill="#787b86" font-size="7" text-anchor="middle">Comprar más abajo</text>
<!-- Sell Limit (arriba) -->
<rect x="30" y="35" width="100" height="40" rx="6" fill="#ef535020" stroke="#ef5350"/>
<text x="80" y="52" fill="#ef5350" font-size="9" text-anchor="middle" font-weight="bold">SELL LIMIT</text>
<text x="80" y="67" fill="#787b86" font-size="7" text-anchor="middle">Vender más arriba</text>
<!-- Buy Stop (arriba) -->
<rect x="250" y="35" width="100" height="40" rx="6" fill="#26a69a20" stroke="#26a69a"/>
<text x="300" y="52" fill="#26a69a" font-size="9" text-anchor="middle" font-weight="bold">BUY STOP</text>
<text x="300" y="67" fill="#787b86" font-size="7" text-anchor="middle">Comprar en ruptura</text>
<!-- Sell Stop (abajo) -->
<rect x="250" y="155" width="100" height="40" rx="6" fill="#ef535020" stroke="#ef5350"/>
<text x="300" y="172" fill="#ef5350" font-size="9" text-anchor="middle" font-weight="bold">SELL STOP</text>
<text x="300" y="187" fill="#787b86" font-size="7" text-anchor="middle">Vender en ruptura</text>
<!-- Flechas -->
<text x="80" y="145" fill="#26a69a" font-size="12">↓</text>
<text x="80" y="90" fill="#ef5350" font-size="12">↑</text>
<text x="300" y="90" fill="#26a69a" font-size="12">↑</text>
<text x="300" y="145" fill="#ef5350" font-size="12">↓</text>
<!-- Labels -->
<text x="145" y="145" fill="#787b86" font-size="7">Retroceso</text>
<text x="365" y="80" fill="#787b86" font-size="7">Breakout</text>
<text x="230" y="212" fill="#787b86" font-size="8" text-anchor="middle">LIMIT = esperar retroceso | STOP = seguir rupturas</text>
</svg>
</div>

<div class="vocab-card"><h4>ORDEN DE MERCADO (Market Order)</h4><p>Compras/vendes AL PRECIO ACTUAL, inmediatamente.</p></div>
<div class="vocab-card"><h4>ORDEN LIMITADA (Limit Order)</h4><p>Se ejecuta solo si el precio llega a un nivel específico que tu defines.</p>
<ul><li><strong>Buy Limit:</strong> Comprar a un precio MAS BAJO que el actual</li><li><strong>Sell Limit:</strong> Vender a un precio MAS ALTO que el actual</li><li><strong>Buy Stop:</strong> Comprar a un precio MAS ALTO (para rupturas alcistas)</li><li><strong>Sell Stop:</strong> Vender a un precio MAS BAJO (para rupturas bajistas)</li></ul></div>
<div class="vocab-card"><h4>STOP LOSS (SL)</h4><p>Cierra tu operación automáticamente para LIMITAR PERDIDAS. Tu cinturón de seguridad.</p><div class="highlight-box red"><strong>REGLA DE ORO: NUNCA operes sin Stop Loss. NUNCA. JAMAS.</strong></div></div>
<div class="vocab-card"><h4>TAKE PROFIT (TP)</h4><p>Cierra tu operación automáticamente para ASEGURAR GANANCIAS. Tu objetivo.</p></div>
<div class="vocab-card"><h4>TRAILING STOP</h4><p>Un Stop Loss que se MUEVE automáticamente a tu favor. Si el precio sube 50 pips, tu SL también sube 50 pips. Protege ganancias mientras dejas correr el trade.</p></div>
</div>
<div class="vocab-section">
<h3>Gestion de Riesgo</h3>
<div class="vocab-card"><h4>APALANCAMIENTO (Leverage)</h4><p>El broker te presta dinero para operar con más capital.</p>
<div style="display:flex;justify-content:center;margin:15px 0">
<svg width="380" height="120" viewBox="0 0 380 120" style="background:#131722;border-radius:10px;border:1px solid #2a2a40">
<text x="190" y="18" fill="white" font-size="10" text-anchor="middle" font-weight="bold">APALANCAMIENTO 1:100</text>
<!-- Tu dinero -->
<rect x="20" y="40" width="60" height="50" rx="6" fill="#3b82f622" stroke="#3b82f6"/>
<text x="50" y="60" fill="#3b82f6" font-size="9" text-anchor="middle" font-weight="bold">TU</text>
<text x="50" y="78" fill="#3b82f6" font-size="11" text-anchor="middle" font-weight="bold">1,000$</text>
<!-- Flecha -->
<text x="100" y="70" fill="#fbbf24" font-size="16">→ x100 →</text>
<!-- Poder de compra -->
<rect x="190" y="35" width="170" height="60" rx="6" fill="#26a69a15" stroke="#26a69a"/>
<text x="275" y="55" fill="#26a69a" font-size="9" text-anchor="middle" font-weight="bold">OPERAS COMO SI TUVIERAS</text>
<text x="275" y="78" fill="#26a69a" font-size="16" text-anchor="middle" font-weight="bold">100,000$</text>
<text x="190" y="112" fill="#ef5350" font-size="9" text-anchor="middle" font-weight="bold">CUIDADO: ganancias Y perdidas se multiplican x100</text>
</svg>
</div>
<div class="warning-box"><p>El apalancamiento es una espada de doble filo. Puede multiplicar ganancias Y perdidas. Usa siempre el mínimo necesario.</p></div></div>
<div class="vocab-card"><h4>DRAWDOWN</h4><p>La caída maxima de tu cuenta desde su punto más alto. Cuenta llegó a 10,000$ y ahora tiene 8,000$ = drawdown del 20%. <strong>Prop firms limitan a 5-10%.</strong></p></div>
<div class="vocab-card"><h4>RATIO RIESGO/BENEFICIO (R:R)</h4><p>Relación entre lo que arriesgas y lo que puedes ganar.</p><div class="example-box"><strong>Ejemplo:</strong> Arriesgas 50$ (SL) para ganar 150$ (TP) = Ratio 1:3. Aunque pierdas 2 de cada 3 operaciones, sigues siendo rentable.</div></div>
<div class="vocab-card"><h4>EQUITY vs BALANCE</h4><p><strong>Balance:</strong> Dinero en tu cuenta SIN contar operaciones abiertas.</p><p><strong>Equity:</strong> Balance + ganancias/perdidas de operaciones abiertas. Es tu dinero REAL en este momento.</p></div>
</div>`,
          keyPoints: [
            "PIP = movimiento mínimo. SPREAD = comisión del broker",
            "Stop Loss OBLIGATORIO en cada operación",
            "4 tipos de ordenes pendientes: Buy/Sell Limit, Buy/Sell Stop",
            "Ratio R:R de 1:2+ es la clave de la rentabilidad",
            "Equity = tu dinero real incluyendo operaciones abiertas"
          ],
          quiz: [
            { question: "¿Si EUR/USD pasa de 1.0800 a 1.0835, cuantos pips se movio?", options: ["3.5 pips", "35 pips", "350 pips", "0.35 pips"], correctIndex: 1, explanation: "1.0835 - 1.0800 = 0.0035. Cada pip = 0.0001, así que son 35 pips." },
            { question: "¿Cuál es la diferencia entre Buy Limit y Buy Stop?", options: ["No hay diferencia", "Buy Limit compra más abajo del precio actual, Buy Stop compra más arriba", "Buy Limit es para vender, Buy Stop es para comprar", "Buy Stop no existe"], correctIndex: 1, explanation: "Buy Limit se coloca por DEBAJO del precio actual (comprar en retroceso). Buy Stop se coloca por ENCIMA (comprar en ruptura)." },
            { question: "¿Con ratio R:R de 1:2, que porcentaje de acierto necesitas para ser rentable?", options: ["51%", "34%", "75%", "90%"], correctIndex: 1, explanation: "Con 1:2, si ganas 34 de 100: 34 x 200$ = 6,800$, pierdes 66 x 100$ = 6,600$. Beneficio = 200$." },
            { question: "¿Qué es el equity de tu cuenta?", options: ["Solo el dinero depositado", "El balance mas/menos las ganancias/perdidas de operaciones abiertas", "Las comisiones pagadas", "El apalancamiento disponible"], correctIndex: 1, explanation: "Equity = Balance + P/L de operaciones abiertas. Es tu dinero real en el momento actual." }
          ]
        }
      ]
    },
    {
      id: "mod-1-2",
      title: "Tu Plataforma y Herramientas",
      description: "Configura todo lo necesario para empezar",
      icon: "🖥️",
      color: "#8B5CF6",
      lessons: [
        {
          id: "1-2-1",
          title: "Configurando TradingView paso a paso",
          duration: "20 min",
          content: `
<h2>TradingView: Tu Centro de Control</h2>
<p>Es la plataforma de gráficos más popular del mundo. GRATIS y es donde pasaras el 80% de tu tiempo analizando.</p>
<div class="step-by-step">
<div class="step"><h4>Paso 1: Crear Cuenta</h4><p>Ve a <strong>tradingview.com</strong> y crea cuenta gratuita con Google o email.</p></div>
<div class="step"><h4>Paso 2: Abrir un Grafico</h4><p>Busca: <strong>EURUSD</strong> (Euro/Dolar), <strong>BTCUSD</strong> (Bitcoin), <strong>US500</strong> (S&P 500), <strong>XAUUSD</strong> (Oro)</p></div>
<div class="step"><h4>Paso 3: Temporalidad</h4><p>Empieza con: <strong>D (diario)</strong> para tendencia general, <strong>H4</strong> para análisis, <strong>H1</strong> para entradas.</p></div>
<div class="step"><h4>Paso 4: Tipo de Grafico</h4><p>Selecciona <strong>"Velas Japonesas"</strong> (Candlestick). Es el único que usaremos.</p></div>
<div class="step"><h4>Paso 5: Herramientas de Dibujo</h4><p>Panel izquierdo: Linea horizontal (para marcar niveles importantes), Linea de tendencia, Rectangulo (para marcar zonas). Más herramientas las irás añadiendo conforme avances en el curso.</p></div>
<div class="step"><h4>Paso 6: Configurar Layout</h4><p>Crea un layout con múltiples temporalidades: pon D1, H4 y H1 del mismo par lado a lado.</p></div>
</div>
<h3>MetaTrader 4/5: Donde Ejecutas</h3>
<div class="highlight-box blue"><h4>Diferencia Clave</h4><p><strong>TradingView</strong> = Donde analizas (laboratorio)</p><p><strong>MetaTrader</strong> = Donde ejecutas operaciones (sala de trading)</p><p>Muchos traders usan ambas a la vez.</p></div>
<h3>Indicadores Iniciales Recomendados</h3>
<div class="highlight-box blue"><h4>¿Qué son los indicadores?</h4><p>Son herramientas matemáticas que se dibujan sobre el gráfico para ayudarte a ver cosas que a simple vista son difíciles de detectar. Piensa en ellos como "gafas especiales" para el gráfico. Hay cientos, pero solo necesitas 3 para empezar:</p></div>
<div class="strategy-box"><h4>Setup Minimalista para Empezar</h4><ol><li><strong>EMA 21 y EMA 50</strong> (Media Móvil Exponencial) — Son líneas que siguen el precio suavizado. Si el precio está POR ENCIMA de la línea = tendencia alcista. Si está POR DEBAJO = tendencia bajista. La 21 es rápida, la 50 es lenta.</li><li><strong>RSI 14</strong> (Índice de Fuerza Relativa) — Un número del 0 al 100. Si pasa de 70 = el precio ha subido "demasiado" y podría bajar. Si baja de 30 = ha bajado "demasiado" y podría subir.</li><li><strong>Volumen</strong> — Las barras de abajo del gráfico. Muestran CUÁNTA gente está comprando/vendiendo. Volumen alto = movimiento importante. Volumen bajo = movimiento débil.</li></ol><p>NO uses más de 3 indicadores. Los estudiaremos a fondo en la Fase 2.</p></div>
<h3>Cuenta Demo: Tu Campo de Entrenamiento</h3>
<div class="highlight-box green"><h4>REGLA CRITICA</h4><p>NUNCA pongas dinero real hasta completar al menos las Fases 1-4 y haber practicado MINIMO 3 meses en demo con resultados positivos consistentes. Sin excepciones.</p></div>`,
          keyPoints: [
            "TradingView para analizar, MetaTrader para ejecutar",
            "Temporalidades: D1 para tendencia, H4 para setup, H1 para entrada",
            "Maximo 3 indicadores: EMA 21/50, RSI 14, Volumen",
            "MINIMO 3 meses en demo antes de dinero real"
          ],
          quiz: [
            { question: "¿Para qué sirve TradingView principalmente?", options: ["Ejecutar compras/ventas", "Analizar gráficos y mercado", "Depositar dinero", "Hablar con traders"], correctIndex: 1, explanation: "TradingView es para análisis. MetaTrader para ejecutar." },
            { question: "¿Cuántos indicadores deberías usar como máximo al empezar?", options: ["10-15", "2-3", "7-8", "Ninguno"], correctIndex: 1, explanation: "2-3 indicadores son suficientes. Mas indicadores = más confusion." }
          ],
          practicalExercise: "Configura TradingView con velas japonesas, EMA 21 (azul), EMA 50 (naranja), RSI 14. Guarda el layout. Practica cambiar entre temporalidades D1, H4, H1. Dibuja 2 lineas horizontales en niveles que te parezcan importantes."
        },
        {
          id: "1-2-2",
          title: "Cómo Elegir un Broker (Sin Que Te Estafen)",
          duration: "20 min",
          content: `
<h2>Eligiendo tu Broker: Tu Socio Financiero</h2>
<div class="analogy-box"><h3>El Broker es como un Agente Inmobiliario</h3><p>Tu quieres comprar/vender una casa (activo financiero), pero no puedes ir directamente al mercado. El broker es el intermediario que ejecuta tus ordenes a cambio de una comisión (spread).</p></div>
<h3>Tipos de Brokers</h3>
<div style="display:flex;justify-content:center;margin:20px 0"><svg width="420" height="100" viewBox="0 0 420 100" style="background:#131722;border-radius:10px;border:1px solid #2a2a40"><text x="210" y="16" fill="white" font-size="10" text-anchor="middle" font-weight="bold">ECN/STP vs MARKET MAKER</text><rect x="10" y="28" width="195" height="45" rx="6" fill="#26a69a10" stroke="#26a69a44"/><text x="107" y="44" fill="#26a69a" font-size="9" text-anchor="middle" font-weight="bold">ECN/STP ✅ RECOMENDADO</text><text x="107" y="58" fill="#787b86" font-size="7" text-anchor="middle">Tu orden va DIRECTO al mercado</text><text x="107" y="68" fill="#787b86" font-size="6" text-anchor="middle">Spreads bajos | Sin conflicto de interés</text><rect x="215" y="28" width="195" height="45" rx="6" fill="#ef535010" stroke="#ef535044"/><text x="312" y="44" fill="#ef5350" font-size="9" text-anchor="middle" font-weight="bold">MARKET MAKER ⚠️ CUIDADO</text><text x="312" y="58" fill="#787b86" font-size="7" text-anchor="middle">El broker toma la otra parte</text><text x="312" y="68" fill="#787b86" font-size="6" text-anchor="middle">Spreads más altos | Posible conflicto</text><text x="210" y="90" fill="#f59e0b" font-size="8" text-anchor="middle" font-weight="bold">Siempre elige ECN/STP: tus intereses están alineados con el broker</text></svg></div>
<div class="grid-cards">
<div class="card green-border"><h4>ECN/STP (Acceso Directo)</h4><p>Tu orden va directamente al mercado. Spreads bajos pero cobran comisión. <strong>MEJOR OPCION.</strong> Sin conflicto de intereses.</p></div>
<div class="card red-border"><h4>Market Maker (Creador de Mercado)</h4><p>El broker toma la otra parte de tu operación. Puede haber conflicto de intereses. Spreads más altos pero sin comisión. <strong>CUIDADO.</strong></p></div>
</div>
<h3>Que Buscar en un Broker</h3>
<div class="strategy-box"><h4>Checklist del Broker Perfecto</h4><ol>
<li><strong>Regulacion:</strong> FCA (UK), CySEC (EU), ASIC (Australia), NFA (USA). Si no esta regulado, HUYE.</li>
<li><strong>Spreads bajos:</strong> EUR/USD debería ser 0.1-1.5 pips máximo</li>
<li><strong>Ejecucion rápida:</strong> Menos de 100ms de latencia</li>
<li><strong>Deposito mínimo razonable:</strong> 50-500$ es normal</li>
<li><strong>MetaTrader 4 o 5:</strong> La plataforma estandar de la industria</li>
<li><strong>Retiros faciles:</strong> Deberia procesar en 1-3 días laborables</li>
<li><strong>Soporte en tu idioma:</strong> Si hay problemas, poder comunicarte</li>
</ol></div>
<h3>Brokers Recomendados para Empezar</h3>
<div class="grid-cards">
<div class="card"><h4>IC Markets</h4><p>ECN. Regulado ASIC/CySEC. Spreads desde 0.0 pips. Deposito mínimo 200$. Excelente para Forex.</p></div>
<div class="card"><h4>Pepperstone</h4><p>ECN. Regulado FCA/ASIC. Spreads bajos. MT4/MT5/TradingView. Muy popular.</p></div>
<div class="card"><h4>XM</h4><p>Market Maker pero regulado. Deposito desde 5$. Bonus de bienvenida. Bueno para empezar con poco capital.</p></div>
<div class="card"><h4>Interactive Brokers</h4><p>El más profesional. Para acciones, opciones, futuros. Ideal si quieres diversificar mercados.</p></div>
</div>
<div class="warning-box"><h4>Senales de ESTAFA</h4><ul>
<li>No esta regulado por ningún organismo</li>
<li>Te promete ganancias garantizadas</li>
<li>Bonus enormes "irreales" (300%, 500%...)</li>
<li>No te dejan retirar tu dinero fácilmente</li>
<li>Te llaman insistentemente para que deposites más</li>
<li>No tienen sede fisica verificable</li>
</ul><p><strong>Si ves cualquiera de estas señales, HUYE inmediatamente.</strong></p></div>`,
          keyPoints: [
            "Brokers ECN/STP son mejores que Market Makers (menos conflicto de intereses)",
            "SIEMPRE verifica que este regulado (FCA, CySEC, ASIC)",
            "Spread del EUR/USD debería ser máximo 1.5 pips",
            "Si prometen ganancias garantizadas = ESTAFA"
          ],
          quiz: [
            { question: "¿Qué tipo de broker es mejor para evitar conflictos de interes?", options: ["Market Maker", "ECN/STP (acceso directo al mercado)", "Cualquiera sirve", "Los no regulados"], correctIndex: 1, explanation: "Un broker ECN/STP envia tus ordenes directamente al mercado, sin tomar la otra parte de tu operación." },
            { question: "¿Cuál NO es una señal de broker estafa?", options: ["Promete ganancias garantizadas", "Esta regulado por la FCA de UK", "Te llama insistentemente para depositar más", "Bonus del 500%"], correctIndex: 1, explanation: "Estar regulado por la FCA (Financial Conduct Authority del Reino Unido) es señal de legitimidad." }
          ],
          practicalExercise: "Investiga 3 brokers regulados (IC Markets, Pepperstone, XM). Compara: regulacion, spread EUR/USD, deposito minimo, plataformas disponibles. Elige 1 y abre una cuenta DEMO (no real)."
        }
      ]
    },
    {
      id: "mod-1-3",
      title: "Velas Japonesas: El Lenguaje del Precio",
      description: "Aprende a leer lo que el mercado te dice",
      icon: "🕯️",
      color: "#EF4444",
      lessons: [
        {
          id: "1-3-1",
          title: "Anatomía de una Vela Japonesa",
          duration: "20 min",
          content: `
<h2>Las Velas Japonesas: El ABC del Trader</h2>
<div class="analogy-box"><h3>El Resumen de un Partido</h3><p>Cada vela es como el resumen de un partido de futbol: como empezo (apertura), que paso durante el partido (max/min), y como término (cierre). El color dice quien gano: compradores (verde) o vendedores (rojo).</p></div>
<div class="highlight-box blue"><h4>Concepto previo: Soporte y Resistencia</h4><p>Antes de ver los patrones de velas, necesitas entender dos conceptos básicos que usaremos mucho:</p>
<ul>
<li><strong>Soporte:</strong> Un nivel de precio donde el mercado ha "rebotado hacia arriba" varias veces. Es como un suelo — el precio llega ahí y los compradores lo empujan hacia arriba.</li>
<li><strong>Resistencia:</strong> Un nivel de precio donde el mercado ha sido "rechazado hacia abajo" varias veces. Es como un techo — el precio llega ahí y los vendedores lo empujan hacia abajo.</li>
</ul>
<p>Los patrones de velas son MUCHO más fiables cuando aparecen en estos niveles. Los estudiaremos a fondo en la Fase 2, pero con esta idea básica ya puedes entender por qué el CONTEXTO importa.</p></div>

<h3>Anatomia de una Vela</h3>
<p>Cada vela tiene 4 datos. Mira esta imagen:</p>

<div style="display:flex;justify-content:center;gap:40px;margin:24px 0;flex-wrap:wrap">
<!-- VELA ALCISTA -->
<div style="text-align:center">
<svg width="160" height="240" viewBox="0 0 160 240">
<text x="80" y="15" fill="#26a69a" font-size="12" text-anchor="middle" font-weight="bold">VELA ALCISTA</text>
<line x1="80" y1="30" x2="80" y2="70" stroke="#26a69a" stroke-width="2"/>
<rect x="55" y="70" width="50" height="80" rx="4" fill="#26a69a"/>
<line x1="80" y1="150" x2="80" y2="200" stroke="#26a69a" stroke-width="2"/>
<text x="140" y="35" fill="#a0a0b8" font-size="9" text-anchor="start">Maximo (High)</text><line x1="82" y1="30" x2="135" y2="32" stroke="#555" stroke-width="0.5"/>
<text x="140" y="78" fill="#26a69a" font-size="9" text-anchor="start">Cierre (Close)</text><line x1="105" y1="75" x2="135" y2="75" stroke="#555" stroke-width="0.5"/>
<text x="140" y="155" fill="#26a69a" font-size="9" text-anchor="start">Apertura (Open)</text><line x1="105" y1="150" x2="135" y2="152" stroke="#555" stroke-width="0.5"/>
<text x="140" y="205" fill="#a0a0b8" font-size="9" text-anchor="start">Minimo (Low)</text><line x1="82" y1="200" x2="135" y2="202" stroke="#555" stroke-width="0.5"/>
<text x="10" y="55" fill="#787b86" font-size="8">Mecha</text><text x="10" y="65" fill="#787b86" font-size="8">Superior</text>
<text x="10" y="115" fill="#26a69a" font-size="9" font-weight="bold">CUERPO</text>
<text x="10" y="180" fill="#787b86" font-size="8">Mecha</text><text x="10" y="190" fill="#787b86" font-size="8">Inferior</text>
<text x="80" y="230" fill="#26a69a" font-size="10" text-anchor="middle">Cierre > Apertura = SUBIO</text>
</svg>
</div>
<!-- VELA BAJISTA -->
<div style="text-align:center">
<svg width="160" height="240" viewBox="0 0 160 240">
<text x="80" y="15" fill="#ef5350" font-size="12" text-anchor="middle" font-weight="bold">VELA BAJISTA</text>
<line x1="80" y1="30" x2="80" y2="70" stroke="#ef5350" stroke-width="2"/>
<rect x="55" y="70" width="50" height="80" rx="4" fill="#ef5350"/>
<line x1="80" y1="150" x2="80" y2="200" stroke="#ef5350" stroke-width="2"/>
<text x="140" y="78" fill="#ef5350" font-size="9" text-anchor="start">Apertura (Open)</text>
<text x="140" y="155" fill="#ef5350" font-size="9" text-anchor="start">Cierre (Close)</text>
<text x="80" y="230" fill="#ef5350" font-size="10" text-anchor="middle">Cierre < Apertura = BAJO</text>
</svg>
</div>
</div>

<h3>Que Te Cuentan las Velas</h3>
<div style="display:flex;justify-content:center;gap:20px;margin:20px 0;flex-wrap:wrap">
<div style="text-align:center">
<svg width="80" height="120" viewBox="0 0 80 120">
<line x1="40" y1="10" x2="40" y2="25" stroke="#26a69a" stroke-width="2"/><rect x="20" y="25" width="40" height="60" rx="3" fill="#26a69a"/><line x1="40" y1="85" x2="40" y2="95" stroke="#26a69a" stroke-width="2"/>
<text x="40" y="115" fill="#26a69a" font-size="8" text-anchor="middle" font-weight="bold">Verde Grande</text>
</svg>
<p style="font-size:11px;color:#a0a0b8;max-width:90px">Compradores dominan</p>
</div>
<div style="text-align:center">
<svg width="80" height="120" viewBox="0 0 80 120">
<line x1="40" y1="10" x2="40" y2="25" stroke="#ef5350" stroke-width="2"/><rect x="20" y="25" width="40" height="60" rx="3" fill="#ef5350"/><line x1="40" y1="85" x2="40" y2="95" stroke="#ef5350" stroke-width="2"/>
<text x="40" y="115" fill="#ef5350" font-size="8" text-anchor="middle" font-weight="bold">Roja Grande</text>
</svg>
<p style="font-size:11px;color:#a0a0b8;max-width:90px">Vendedores dominan</p>
</div>
<div style="text-align:center">
<svg width="80" height="120" viewBox="0 0 80 120">
<line x1="40" y1="20" x2="40" y2="45" stroke="#fbbf24" stroke-width="2"/><rect x="25" y="45" width="30" height="10" rx="2" fill="#fbbf24"/><line x1="40" y1="55" x2="40" y2="80" stroke="#fbbf24" stroke-width="2"/>
<text x="40" y="115" fill="#fbbf24" font-size="8" text-anchor="middle" font-weight="bold">Doji</text>
</svg>
<p style="font-size:11px;color:#a0a0b8;max-width:90px">Indecisión total</p>
</div>
<div style="text-align:center">
<svg width="80" height="120" viewBox="0 0 80 120">
<line x1="40" y1="10" x2="40" y2="30" stroke="#8b5cf6" stroke-width="2"/><rect x="25" y="30" width="30" height="15" rx="2" fill="#8b5cf6"/><line x1="40" y1="45" x2="40" y2="95" stroke="#8b5cf6" stroke-width="2"/>
<text x="40" y="115" fill="#8b5cf6" font-size="8" text-anchor="middle" font-weight="bold">Mechas Largas</text>
</svg>
<p style="font-size:11px;color:#a0a0b8;max-width:90px">Rechazo fuerte</p>
</div>
</div>

<h3>Los 5 Patrones de Vela MAS IMPORTANTES</h3>

<div class="pattern-card"><h4>1. DOJI</h4>
<div style="display:flex;align-items:center;gap:20px;flex-wrap:wrap">
<svg width="80" height="100" viewBox="0 0 80 100"><line x1="40" y1="10" x2="40" y2="38" stroke="#fbbf24" stroke-width="2"/><rect x="28" y="38" width="24" height="4" rx="2" fill="#fbbf24"/><line x1="40" y1="42" x2="40" y2="75" stroke="#fbbf24" stroke-width="2"/><text x="40" y="92" fill="#fbbf24" font-size="10" text-anchor="middle" font-weight="bold">DOJI</text></svg>
<div><p>Apertura y cierre casi iguales. Cuerpo muy pequeno con mechas a ambos lados.</p><p><strong>Significado:</strong> INDECISION total. Si aparece tras tendencia fuerte, posible giro.</p></div>
</div></div>

<div class="pattern-card"><h4>2. MARTILLO (Hammer)</h4>
<div style="display:flex;align-items:center;gap:20px;flex-wrap:wrap">
<svg width="80" height="100" viewBox="0 0 80 100"><line x1="40" y1="15" x2="40" y2="25" stroke="#26a69a" stroke-width="2"/><rect x="28" y="25" width="24" height="15" rx="2" fill="#26a69a"/><line x1="40" y1="40" x2="40" y2="80" stroke="#26a69a" stroke-width="2"/><text x="40" y="95" fill="#26a69a" font-size="10" text-anchor="middle" font-weight="bold">MARTILLO</text></svg>
<div><p>Cuerpo pequeno arriba, <strong>mecha inferior MUY larga</strong> (mínimo 2x el cuerpo).</p><p><strong>Significado:</strong> En soporte/tendencia bajista = <span style="color:#26a69a;font-weight:bold">SENAL ALCISTA</span>. Los compradores rechazaron precios bajos con fuerza.</p></div>
</div></div>

<div class="pattern-card"><h4>3. ESTRELLA FUGAZ (Shooting Star)</h4>
<div style="display:flex;align-items:center;gap:20px;flex-wrap:wrap">
<svg width="80" height="100" viewBox="0 0 80 100"><line x1="40" y1="10" x2="40" y2="55" stroke="#ef5350" stroke-width="2"/><rect x="28" y="55" width="24" height="15" rx="2" fill="#ef5350"/><line x1="40" y1="70" x2="40" y2="78" stroke="#ef5350" stroke-width="2"/><text x="40" y="95" fill="#ef5350" font-size="9" text-anchor="middle" font-weight="bold">ESTRELLA FUGAZ</text></svg>
<div><p>Cuerpo pequeno abajo, <strong>mecha superior MUY larga</strong>. Es un martillo invertido.</p><p><strong>Significado:</strong> En resistencia/tendencia alcista = <span style="color:#ef5350;font-weight:bold">SENAL BAJISTA</span>. Los vendedores rechazaron precios altos.</p></div>
</div></div>

<div class="pattern-card"><h4>4. ENVOLVENTE (Engulfing)</h4>
<div style="display:flex;align-items:center;gap:20px;flex-wrap:wrap">
<svg width="130" height="100" viewBox="0 0 130 100">
<line x1="35" y1="20" x2="35" y2="30" stroke="#ef5350" stroke-width="1.5"/><rect x="25" y="30" width="20" height="30" rx="2" fill="#ef5350"/><line x1="35" y1="60" x2="35" y2="70" stroke="#ef5350" stroke-width="1.5"/>
<line x1="80" y1="15" x2="80" y2="22" stroke="#26a69a" stroke-width="1.5"/><rect x="65" y="22" width="30" height="50" rx="3" fill="#26a69a"/><line x1="80" y1="72" x2="80" y2="80" stroke="#26a69a" stroke-width="1.5"/>
<rect x="62" y="19" width="36" height="58" rx="4" fill="none" stroke="#26a69a" stroke-width="1.5" stroke-dasharray="4,3"/>
<text x="65" y="95" fill="#26a69a" font-size="9" text-anchor="middle" font-weight="bold">ENVOLVENTE ALCISTA</text>
</svg>
<div><p>Una vela verde grande que <strong>"se come" completamente</strong> a la roja anterior.</p><p><strong>Envolvente Alcista:</strong> <span style="color:#26a69a">Verde envuelve roja = COMPRA</span></p><p><strong>Envolvente Bajista:</strong> <span style="color:#ef5350">Roja envuelve verde = VENTA</span></p></div>
</div></div>

<div class="pattern-card"><h4>5. PIN BAR</h4>
<div style="display:flex;align-items:center;gap:20px;flex-wrap:wrap">
<div style="display:flex;gap:15px">
<svg width="60" height="100" viewBox="0 0 60 100"><line x1="30" y1="15" x2="30" y2="25" stroke="#26a69a" stroke-width="2"/><rect x="20" y="25" width="20" height="12" rx="2" fill="#26a69a"/><line x1="30" y1="37" x2="30" y2="82" stroke="#26a69a" stroke-width="2"/><text x="30" y="95" fill="#26a69a" font-size="8" text-anchor="middle" font-weight="bold">Pin Alcista</text></svg>
<svg width="60" height="100" viewBox="0 0 60 100"><line x1="30" y1="10" x2="30" y2="60" stroke="#ef5350" stroke-width="2"/><rect x="20" y="60" width="20" height="12" rx="2" fill="#ef5350"/><line x1="30" y1="72" x2="30" y2="82" stroke="#ef5350" stroke-width="2"/><text x="30" y="95" fill="#ef5350" font-size="8" text-anchor="middle" font-weight="bold">Pin Bajista</text></svg>
</div>
<div><p>Mecha muy larga (2/3 del tamano total) y cuerpo pequeno en un extremo.</p><p><strong>Pin alcista</strong> = mecha larga abajo = <span style="color:#26a69a">LONG</span></p><p><strong>Pin bajista</strong> = mecha larga arriba = <span style="color:#ef5350">SHORT</span></p><p><strong>La señal favorita de Price Action.</strong></p></div>
</div></div>

<div class="warning-box"><h4>REGLA CRITICA</h4><p>Una vela SOLA no es suficiente. Siempre combina con el CONTEXTO: donde aparece (soporte/resistencia), tendencia, y otros factores. No operes por una sola vela aislada.</p></div>`,
          keyPoints: [
            "Cada vela: Apertura, Cierre, Maximo, Minimo",
            "Verde = subio, Roja = bajo. Mechas = rechazo de niveles",
            "5 patrones clave: Doji, Martillo, Estrella Fugaz, Envolvente, Pin Bar",
            "NUNCA operes por una sola vela - siempre mira el contexto"
          ],
          quiz: [
            { question: "¿Qué indica una vela verde grande sin mechas?", options: ["Indecision", "Dominio total de compradores", "Mercado cerrado", "Dominio vendedores"], correctIndex: 1, explanation: "Compradores controlaron todo el período sin dar oportunidad a vendedores." },
            { question: "¿Un Martillo tiene la mecha larga en...", options: ["Arriba", "Abajo", "Ambos lados", "No tiene mechas"], correctIndex: 1, explanation: "El Martillo tiene mecha inferior larga, indica rechazo de precios bajos." },
            { question: "¿Envolvente Bajista en resistencia significa...", options: ["Seguir subiendo", "Nada", "Posible giro hacia abajo", "Comprar inmediatamente"], correctIndex: 2, explanation: "Envolvente Bajista en resistencia = vendedores tomando control = posible giro bajista." }
          ],
          practicalExercise: "En TradingView, EUR/USD en H4: identifica 3 Doji, 2 Martillos, 2 Estrellas Fugaz y 1 Envolvente. Marca cada uno y observa que paso DESPUES."
        },
        {
          id: "1-3-2",
          title: "Patrones de Velas Avanzados y Combinaciones",
          duration: "25 min",
          content: `
<h2>Patrones de Velas Avanzados</h2>
<p>Ahora que conoces los patrones básicos, vamos con los patrones de múltiples velas y combinaciones que usan los profesionales.</p>
<h3>Patrones de 2-3 Velas</h3>
<div class="pattern-card"><h4>MORNING STAR (Estrella de la Mañana)</h4><p>Patrón de 3 velas ALCISTA:</p><ol><li>Vela roja grande (bajistas dominan)</li><li>Vela pequeña (doji o cuerpo chico) = indecisión</li><li>Vela verde grande (alcistas toman control)</li></ol><p><strong>Aparece en suelos/soportes. Señal de giro alcista MUY fiable.</strong></p></div>
<div class="pattern-card"><h4>EVENING STAR (Estrella de la Tarde)</h4><p>Patrón de 3 velas BAJISTA (inverso del Morning Star):</p><ol><li>Vela verde grande</li><li>Vela pequeña (indecisión)</li><li>Vela roja grande</li></ol><p><strong>Aparece en techos/resistencias. Señal de giro bajista.</strong></p></div>
<div class="pattern-card"><h4>THREE WHITE SOLDIERS (Tres Soldados Blancos)</h4><p>3 velas verdes consecutivas, cada una cerrando más alto. Cuerpos grandes, mechas pequeñas.</p><p><strong>Señal alcista MUY fuerte.</strong> Indica momentum comprador sostenido.</p></div>
<div class="pattern-card"><h4>THREE BLACK CROWS (Tres Cuervos Negros)</h4><p>3 velas rojas consecutivas, cada una cerrando más bajo.</p><p><strong>Señal bajista MUY fuerte.</strong> Inverso de los Tres Soldados.</p></div>
<div class="pattern-card"><h4>TWEEZER TOP / BOTTOM</h4><p><strong>Tweezer Top:</strong> Dos velas con maximos casi identicos en resistencia = BAJISTA</p><p><strong>Tweezer Bottom:</strong> Dos velas con minimos casi identicos en soporte = ALCISTA</p><p>Muestra que el mercado RECHAZO el mismo nivel dos veces.</p></div>
<div class="pattern-card"><h4>INSIDE BAR (Barra Interior)</h4><p>Una vela completamente contenida dentro del rango de la vela anterior. La segunda vela es más pequeña.</p><p><strong>Significado:</strong> CONSOLIDACION antes de un movimiento explosivo. Espera la ruptura de la vela madre.</p><p><strong>Setup:</strong> Entrada cuando el precio rompe el máximo (LONG) o mínimo (SHORT) de la vela madre.</p></div>
<h3>Patrones de Continuacion</h3>
<div class="grid-cards">
<div class="card"><h4>Rising Three Methods</h4><p>En tendencia alcista: vela verde grande → 3 velas rojas pequeñas → vela verde grande. La tendencia continua.</p></div>
<div class="card"><h4>Falling Three Methods</h4><p>En tendencia bajista: vela roja grande → 3 velas verdes pequeñas → vela roja grande. La caída continua.</p></div>
</div>
<h3>La Jerarquia de Fiabilidad</h3>
<div class="highlight-box blue"><h4>De MAS a MENOS fiable</h4><ol>
<li><strong>Envolvente en soporte/resistencia clave</strong> - La más fiable</li>
<li><strong>Morning/Evening Star en niveles clave</strong></li>
<li><strong>Pin Bar con rechazo de nivel institucional</strong></li>
<li><strong>Inside Bar breakout con tendencia</strong></li>
<li><strong>Doji en extremo de tendencia</strong></li>
<li><strong>Martillo/Estrella Fugaz aislados</strong> - Menos fiable sola</li>
</ol></div>
<div class="highlight-box green"><h4>LA REGLA DE ORO de las Velas</h4><p>Un patrón de velas SOLO es válido si aparece en un NIVEL IMPORTANTE (soporte o resistencia). Un martillo en medio de la nada no significa nada. Un martillo en un soporte fuerte = señal de alta probabilidad. En las próximas fases aprenderás más herramientas para confirmar estas zonas.</p></div>`,
          keyPoints: [
            "Morning/Evening Star son de los patrones más fiables",
            "Inside Bar = consolidación antes de movimiento explosivo",
            "Three Soldiers/Crows = momentum fuerte y sostenido",
            "Un patrón SOLO es válido en un NIVEL IMPORTANTE",
            "La confluencia (patrón + nivel + tendencia) es lo que realmente importa"
          ],
          quiz: [
            { question: "¿Qué es un Morning Star?", options: ["Una vela verde sola", "Patrón de 3 velas: roja grande, vela pequeña, verde grande = giro alcista", "Un indicador técnico", "El gap de apertura"], correctIndex: 1, explanation: "Morning Star es un patrón de 3 velas de giro alcista: bajista grande → indecisión → alcista grande." },
            { question: "¿Qué significa un Inside Bar?", options: ["El precio se mueve muy rápido", "Consolidacion antes de un movimiento explosivo", "Final de la tendencia", "Error en el gráfico"], correctIndex: 1, explanation: "Inside Bar indica que el mercado esta comprimiendo energia (consolidando) antes de un movimiento fuerte." },
            { question: "¿Un martillo en medio de una tendencia sin ningún soporte cerca es...", options: ["Señal de compra fuerte", "Señal poco fiable - necesita contexto/nivel importante", "Señal de venta", "Momento de cerrar todo"], correctIndex: 1, explanation: "Los patrones de velas SOLO son fiables cuando aparecen en niveles importantes como soportes o resistencias." }
          ],
          practicalExercise: "En EUR/USD H4, identifica al menos: 2 Morning Star, 2 Inside Bar, 1 Three White Soldiers. Marca cada patron con la herramienta de texto. Observa que paso DESPUES de cada patron y anotalo."
        }
      ]
    },
    {
      id: "mod-1-4",
      title: "Primeros Pasos en el Mercado Real",
      description: "Lo que necesitas saber antes de poner tu primer centimo",
      icon: "🎓",
      color: "#10B981",
      lessons: [
        {
          id: "1-4-1",
          title: "Los 10 Errores Mortales del Principiante",
          duration: "20 min",
          content: `
<h2>Errores que DESTRUYEN al 90% de los Principiantes</h2>
<div class="highlight-box red"><p>Estos errores son la razon por la que la mayoría pierde dinero. Leelos, memorizalos, y JURA que no los cometeras.</p></div>
<div class="grid-cards">
<div class="card red-border"><h4>1. Operar sin Stop Loss</h4><p>"Ya se va a recuperar..." NO. Una operación sin SL puede destruir tu cuenta entera en minutos. SIEMPRE pon SL antes de entrar.</p></div>
<div class="card red-border"><h4>2. Arriesgar demasiado por trade</h4><p>Principiantes arriesgan 10-20% por operación. Con 5 perdidas seguidas (que PASARA), pierdes todo. Maximo 1-2%.</p></div>
<div class="card red-border"><h4>3. Revenge Trading</h4><p>Perder → frustración → operar más para "recuperar" → perder más. El ciclo destructivo #1. Si pierdes 2 seguidas, CIERRA la plataforma.</p></div>
<div class="card red-border"><h4>4. No tener un plan de trading</h4><p>Operar "a ojo" es como navegar sin mapa. Necesitas reglas escritas ANTES de operar: que, cuando, cuanto, como.</p></div>
<div class="card red-border"><h4>5. Operar en cuenta real demasiado pronto</h4><p>Minimo 3 meses en demo con resultados positivos. Si pierdes en demo, perderás 10x más en real por las emociones.</p></div>
<div class="card red-border"><h4>6. Seguir "señales" de otros</h4><p>Grupos de Telegram, "gurus" de Instagram... El 95% son estafas. Si supieran ganar, no venderían señales. Aprende TU.</p></div>
<div class="card red-border"><h4>7. Cambiar de estrategia cada semana</h4><p>Una estrategia necesita al menos 30-50 trades para evaluarla. Si cambias cada 5 trades, nunca sabrás si funciona.</p></div>
<div class="card red-border"><h4>8. Sobreoperar (Overtrading)</h4><p>Mas trades ≠ más dinero. Mas trades = más comisiones + peores decisiones + más estrés. 1-3 buenos trades al día es SUFICIENTE.</p></div>
<div class="card red-border"><h4>9. Ignorar la gestión de riesgo</h4><p>El 80% del éxito en trading es gestión de riesgo. No el mejor indicador, no la mejor estrategia. RIESGO.</p></div>
<div class="card red-border"><h4>10. Expectativas irreales</h4><p>"Voy a duplicar mi cuenta en un mes." NO. Los mejores traders del mundo hacen 2-5% MENSUAL. Eso es excelente. Acepta la realidad.</p></div>
</div>
<div class="highlight-box green"><h4>La Buena Noticia</h4><p>Ahora que conoces estos errores, ya estas por delante del 90% de traders que nunca los aprenden (o los aprenden perdiendo todo su dinero). Graba estos 10 puntos en tu mente.</p></div>`,
          keyPoints: [
            "SIEMPRE Stop Loss, NUNCA arriesgar más del 1-2%, NUNCA revenge trading",
            "3 meses mínimo en demo antes de dinero real",
            "No sigas señales de otros - aprende tu mismo",
            "Una estrategia necesita 30-50 trades para evaluarla",
            "Expectativas realistas: 2-5% mensual es EXCELENTE"
          ],
          quiz: [
            { question: "¿Cuántos trades necesitas como mínimo para evaluar si una estrategia funciona?", options: ["5 trades", "10 trades", "30-50 trades", "200 trades"], correctIndex: 2, explanation: "30-50 trades es el mínimo para tener una muestra estadisticamente relevante. Con menos, no puedes saber si los resultados son por la estrategia o por suerte." },
            { question: "¿Cuál es un retorno mensual REALISTA y excelente para un trader profesional?", options: ["50-100%", "20-30%", "2-5%", "0.5%"], correctIndex: 2, explanation: "2-5% mensual es lo que hacen los mejores. Suena poco pero es 24-60% anual, que supera a casi cualquier fondo de inversión del mundo." },
            { question: "¿Por qué no deberías seguir 'señales' de grupos de Telegram?", options: ["Porque Telegram no funciona bien", "Porque el 95% son estafas y si supieran ganar consistentemente no venderían señales", "Porque las señales llegan tarde", "Porque solo funcionan en Forex"], correctIndex: 1, explanation: "Si alguien pudiera ganar consistentemente en trading, no necesitaría vender señales a 20 euros/mes. La mayoría son estafas o traders mediocres que ganan más vendiendo señales que operando." }
          ]
        },
        {
          id: "1-4-2",
          title: "Tu Hoja de Ruta: De Principiante a Experto",
          duration: "15 min",
          content: `
<h2>El Camino Completo: Tu Mapa de Aquí a Vivir del Trading</h2>
<div class="analogy-box"><h3>El Viaje del Trading</h3><p>Aprender trading es como aprender a conducir. Primero estudias la teoría (este curso), luego practicas en un circuito cerrado (demo), luego conduces por la ciudad con cuidado (cuenta pequeña/prop firm), y eventualmente conduces con confianza (trader profesional). No puedes saltarte pasos.</p></div>
<h3>Las 5 Etapas del Trader</h3>
<div style="display:flex;justify-content:center;margin:16px 0"><svg width="460" height="90" viewBox="0 0 460 90" style="background:#131722;border-radius:12px;border:1px solid #2a2a40"><text x="230" y="15" fill="white" font-size="9" text-anchor="middle" font-weight="bold">LAS 5 ETAPAS DEL TRADER</text><rect x="5" y="26" width="85" height="36" rx="5" fill="#ef535015" stroke="#ef5350"/><text x="47" y="40" fill="#ef5350" font-size="6" text-anchor="middle" font-weight="bold">1. INCOMPETENTE</text><text x="47" y="50" fill="#ef5350" font-size="5" text-anchor="middle">INCONSCIENTE</text><text x="47" y="58" fill="#787b86" font-size="5" text-anchor="middle">No sé lo que no sé</text><text x="95" y="47" fill="#555" font-size="8">→</text><rect x="100" y="26" width="85" height="36" rx="5" fill="#f59e0b15" stroke="#f59e0b"/><text x="142" y="40" fill="#f59e0b" font-size="6" text-anchor="middle" font-weight="bold">2. INCOMPETENTE</text><text x="142" y="50" fill="#f59e0b" font-size="5" text-anchor="middle">CONSCIENTE</text><text x="142" y="58" fill="#787b86" font-size="5" text-anchor="middle">Sé que no sé</text><text x="190" y="47" fill="#555" font-size="8">→</text><rect x="195" y="26" width="85" height="36" rx="5" fill="#3b82f615" stroke="#3b82f6"/><text x="237" y="40" fill="#3b82f6" font-size="6" text-anchor="middle" font-weight="bold">3. COMPETENTE</text><text x="237" y="50" fill="#3b82f6" font-size="5" text-anchor="middle">CONSCIENTE</text><text x="237" y="58" fill="#787b86" font-size="5" text-anchor="middle">Puedo si me concentro</text><text x="285" y="47" fill="#555" font-size="8">→</text><rect x="290" y="26" width="85" height="36" rx="5" fill="#26a69a15" stroke="#26a69a"/><text x="332" y="40" fill="#26a69a" font-size="6" text-anchor="middle" font-weight="bold">4. COMPETENTE</text><text x="332" y="50" fill="#26a69a" font-size="5" text-anchor="middle">INCONSCIENTE</text><text x="332" y="58" fill="#787b86" font-size="5" text-anchor="middle">Lo hago sin pensar</text><text x="380" y="47" fill="#555" font-size="8">→</text><rect x="385" y="26" width="68" height="36" rx="5" fill="#f59e0b15" stroke="#f59e0b"/><text x="419" y="40" fill="#f59e0b" font-size="6" text-anchor="middle" font-weight="bold">5. MAESTRÍA</text><text x="419" y="52" fill="#787b86" font-size="5" text-anchor="middle">Adapto y evoluciono</text><text x="230" y="80" fill="#26a69a" font-size="7" text-anchor="middle" font-weight="bold">Etapa 4 = consistencia real. Requiere 10-18 meses de práctica dedicada.</text></svg></div>
<div class="strategy-box"><h4>Etapa 1: Incompetente Inconsciente (Mes 1)</h4><p>"No sé lo que no sé." Crees que el trading es fácil. Haces trades aleatorios. Puedes ganar algo por suerte. Aquí es donde el 50% abandona.</p></div>
<div class="strategy-box"><h4>Etapa 2: Incompetente Consciente (Meses 2-4)</h4><p>"Ahora sé que no sé nada." Empiezas a estudiar (este curso). Te das cuenta de la complejidad. Frustración. Es NORMAL. No abandones aquí.</p></div>
<div class="strategy-box"><h4>Etapa 3: Competente Consciente (Meses 5-9)</h4><p>"Puedo hacerlo si me concentro." Tu estrategia funciona cuando sigues tu plan. Pero todavía luchas con las emociones. Necesitas enfoque activo.</p></div>
<div class="strategy-box"><h4>Etapa 4: Competente Inconsciente (Meses 10-18)</h4><p>"Lo hago sin pensar." Tu plan de trading es automático. Tomas decisiones correctas naturalmente. Aquí empiezas a ser consistente.</p></div>
<div class="strategy-box"><h4>Etapa 5: Maestria (18+ meses)</h4><p>"Adapto y evoluciono." Lees el mercado como un libro. Adaptas tu estrategia segun condiciones. Eres rentable consistentemente. Vives del trading.</p></div>
<h3>Tu Plan de Accion Inmediato</h3>
<div class="highlight-box green"><h4>Que hacer AHORA MISMO</h4><ol>
<li><strong>Completa la Fase 1</strong> de este curso (ya casi estas)</li>
<li><strong>Abre TradingView</strong> y familiarizate con la plataforma</li>
<li><strong>NO pongas dinero real</strong> en ningún lado todavía</li>
<li><strong>Sigue con la Fase 2</strong> (Analisis Tecnico) mañana</li>
<li><strong>Dedica 1-2 horas al día</strong> al estudio y práctica</li>
<li><strong>Se paciente:</strong> esto es un maraton, no un sprint</li>
</ol></div>
<div class="warning-box"><h4>El Timeline Realista</h4><ul>
<li><strong>Meses 1-3:</strong> Estudio + demo</li>
<li><strong>Meses 4-6:</strong> Practica intensiva en demo</li>
<li><strong>Meses 7-9:</strong> Primer challenge prop firm</li>
<li><strong>Meses 10-12:</strong> Cuenta fondeada activa</li>
<li><strong>Ano 2:</strong> Escalar cuentas + ingreso consistente</li>
</ul><p>Cualquiera que te diga que puedes hacerlo en menos tiempo, te esta mintiendo.</p></div>`,
          keyPoints: [
            "5 etapas: incompetente inconsciente → competente inconsciente → maestria",
            "El camino toma 12-18 meses mínimo para ser consistente",
            "Dedica 1-2 horas al día al estudio y práctica",
            "Meses 1-6: estudio y demo. Meses 7-12: prop firms y cuenta real",
            "Es un maraton, no un sprint. La paciencia gana."
          ],
          quiz: [
            { question: "¿En qué etapa empiezas a ser realmente consistente?", options: ["Etapa 1 - Incompetente inconsciente", "Etapa 2 - Incompetente consciente", "Etapa 4 - Competente inconsciente", "Desde el primer día"], correctIndex: 2, explanation: "La consistencia llega en la Etapa 4 (Competente Inconsciente), cuando tu plan de trading se vuelve automático y tomas decisiones correctas sin esfuerzo consciente." },
            { question: "¿Cuánto tiempo toma de forma realista ser un trader consistente?", options: ["1-2 semanas", "1-2 meses", "12-18 meses", "5+ años"], correctIndex: 2, explanation: "12-18 meses es un timeline realista para un trader dedicado que estudia y practica 1-2 horas al día. Puede ser más rápido con dedicación completa, pero rara vez menos de 9 meses." }
          ]
        }
      ]
    }
  ]
};
