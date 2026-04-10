import type { Phase } from "../courseData";

export const PHASE_1: Phase = {
  id: "fase-1",
  number: 1,
  title: "Fundamentos Absolutos",
  subtitle: "De cero a entender el mercado",
  description: "Empezamos desde cero absoluto. No necesitas saber NADA de finanzas. Aqui vas a entender que es el trading, como funcionan los mercados, y vas a dar tus primeros pasos con confianza.",
  color: "#3B82F6",
  gradient: "from-blue-500 to-blue-700",
  modules: [
    {
      id: "mod-1-1",
      title: "Que es el Trading",
      description: "Entiende que es esto del trading de una vez por todas",
      icon: "📊",
      color: "#3B82F6",
      lessons: [
        {
          id: "1-1-1",
          title: "Trading explicado como si tuvieras 5 anos",
          duration: "15 min",
          content: `
<h2>Bienvenido al Mundo del Trading</h2>
<div class="analogy-box">
<h3>La Analogia del Mercadillo</h3>
<p>Imagina que vas a un mercadillo un sabado por la manana. Ves un puesto vendiendo camisetas a 5 euros. Tu sabes que esas camisetas en una tienda cuestan 15 euros. Asi que compras 10 camisetas por 50 euros y las vendes en internet a 12 euros cada una. Resultado: gastaste 50 euros y ganaste 120 euros. <strong>Eso es trading.</strong></p>
</div>
<p>El <strong>trading</strong> es simplemente <strong>comprar algo a un precio y venderlo a un precio mayor</strong> (o venderlo primero y comprarlo despues a un precio menor). En vez de camisetas, usamos:</p>
<div class="grid-cards">
<div class="card"><h4>Divisas (Forex)</h4><p>Compras euros y vendes dolares, o al reves. El mercado mas grande del mundo con 7.5 BILLONES de dolares diarios.</p></div>
<div class="card"><h4>Acciones</h4><p>Compras un pedacito de Apple, Tesla, Amazon... Si la empresa sube, tu ganas.</p></div>
<div class="card"><h4>Criptomonedas</h4><p>Bitcoin, Ethereum... Activos digitales que puedes comprar y vender 24/7.</p></div>
<div class="card"><h4>Indices y Materias Primas</h4><p>S&P 500, NASDAQ, Oro, Petroleo... Paquetes de acciones o recursos naturales.</p></div>
</div>
<h3>La Gran Diferencia: Trading vs Invertir</h3>
<div class="comparison-table">
<div class="comparison-col"><h4>Trading</h4><ul><li>Operaciones cortas (minutos a semanas)</li><li>Buscas beneficio rapido</li><li>Analizas graficos y patrones</li><li>Puedes ganar cuando el mercado SUBE o BAJA</li><li>Requiere mas tiempo y dedicacion</li></ul></div>
<div class="comparison-col"><h4>Inversion</h4><ul><li>Largo plazo (meses a anos)</li><li>Crecimiento gradual</li><li>Analizas la empresa/economia</li><li>Generalmente solo ganas si sube</li><li>Mas pasivo, "comprar y mantener"</li></ul></div>
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
<div class="card"><h4>Scalping</h4><p>Operaciones de segundos a minutos. Muchas operaciones al dia, ganancias pequenas por operacion. Requiere concentracion extrema.</p></div>
<div class="card"><h4>Day Trading</h4><p>Operaciones que se abren y cierran el MISMO DIA. No dejas nada abierto por la noche. 1-5 operaciones al dia.</p></div>
<div class="card"><h4>Swing Trading</h4><p>Operaciones de dias a semanas. Buscas movimientos grandes. Menos estres, ideal para combinar con trabajo.</p></div>
<div class="card"><h4>Position Trading</h4><p>Semanas a meses. Casi como invertir pero con analisis tecnico. Muy pocas operaciones.</p></div>
</div>
<div class="warning-box">
<h4>Realidad del Trading</h4>
<p>El 70-90% de los traders pierden dinero. PERO, los que aprenden correctamente, tienen disciplina y gestionan bien el riesgo, pueden vivir del trading. Este curso existe para que estes en ese 10-30% ganador. No hay atajos: requiere estudio, practica y disciplina.</p>
</div>`,
          keyPoints: [
            "Trading = comprar y vender activos financieros para obtener beneficio",
            "Puedes ganar cuando el mercado sube (LONG) o baja (SHORT)",
            "4 estilos: Scalping, Day Trading, Swing Trading, Position Trading",
            "El 70-90% pierde dinero, pero con educacion y disciplina puedes ser rentable"
          ],
          quiz: [
            { question: "Que es el trading en palabras simples?", options: ["Comprar y vender activos para obtener beneficio por la diferencia de precio", "Guardar dinero en el banco", "Apostar en un casino online", "Comprar acciones y nunca venderlas"], correctIndex: 0, explanation: "El trading consiste en comprar y vender activos financieros aprovechando las diferencias de precio para obtener un beneficio." },
            { question: "Que es una posicion SHORT (corta)?", options: ["Comprar un activo esperando que suba", "Vender un activo prestado esperando que baje para recomprarlo mas barato", "Mantener una inversion por poco tiempo", "Comprar criptomonedas"], correctIndex: 1, explanation: "Una posicion corta (SHORT) significa vender un activo primero (prestado por el broker) y recomprarlo despues a un precio menor." },
            { question: "Cual es la diferencia principal entre scalping y swing trading?", options: ["No hay diferencia", "El scalping dura segundos/minutos, el swing dura dias/semanas", "El swing es mas rapido que el scalping", "El scalping solo funciona con acciones"], correctIndex: 1, explanation: "El scalping opera en segundos/minutos buscando ganancias pequenas, mientras el swing trading mantiene posiciones dias o semanas buscando movimientos mas grandes." }
          ],
          practicalExercise: "Abre TradingView.com (gratis). Busca BTCUSD. Observa como sube y baja. Identifica un momento donde habrias comprado (LONG) y otro donde habrias vendido (SHORT). Apuntalo."
        },
        {
          id: "1-1-2",
          title: "Los Mercados Financieros: Donde ocurre todo",
          duration: "20 min",
          content: `
<h2>Los Mercados Financieros</h2>
<div class="analogy-box"><h3>Piensa en un Centro Comercial</h3><p>Un centro comercial tiene muchas tiendas: ropa, electronica, comida... Los mercados financieros son igual: hay diferentes "tiendas" donde se compran y venden diferentes cosas.</p></div>
<h3>Los 5 Mercados Principales</h3>
<div class="market-card forex"><h4>1. FOREX (Foreign Exchange) - Divisas</h4><div class="stats"><span>Volumen diario: 7.5 BILLONES $</span><span>24h Lunes a Viernes</span><span>Apalancamiento: 1:30 a 1:500</span></div><p>El mercado mas grande del mundo. Compras/vendes monedas: EUR/USD, GBP/USD, USD/JPY. <strong>Ideal para principiantes y cuentas fondeadas.</strong></p>
<div class="highlight-box blue"><h4>Pares Principales (Majors) - Los mas tradeados</h4><ul><li><strong>EUR/USD</strong> - Euro vs Dolar (el mas liquido del mundo)</li><li><strong>GBP/USD</strong> - Libra vs Dolar (muy volatil)</li><li><strong>USD/JPY</strong> - Dolar vs Yen (movido por Bank of Japan)</li><li><strong>USD/CHF</strong> - Dolar vs Franco Suizo (refugio seguro)</li><li><strong>AUD/USD, NZD/USD, USD/CAD</strong> - Pares de commodities</li></ul></div></div>
<div class="market-card indices"><h4>2. Indices Bursatiles</h4><div class="stats"><span>Principales: S&P 500, NASDAQ, DAX</span><span>Horario: 9:30-16:00 ET + futuros</span></div><p>Un indice es una "canasta" de acciones. El S&P 500 = las 500 empresas mas grandes de EE.UU. Si la economia va bien, sube. <strong>Muy popular en prop firms.</strong></p>
<div class="example-box"><strong>Activos mas tradeados:</strong> US500 (S&P), US100 (NASDAQ), US30 (Dow Jones), GER40 (DAX aleman)</div></div>
<div class="market-card crypto"><h4>3. Criptomonedas</h4><div class="stats"><span>Principales: BTC, ETH, SOL</span><span>24/7 nunca cierra</span><span>Volatilidad: MUY ALTA</span></div><p>Puede subir o bajar 10% en un dia. Ideal para traders que buscan grandes movimientos y pueden operar fines de semana.</p></div>
<div class="market-card stocks"><h4>4. Acciones</h4><div class="stats"><span>NYSE, NASDAQ</span><span>9:30-16:00 ET</span></div><p>Compras un pedacito de una empresa. Las mas tradeadas: Tesla, Apple, NVIDIA, Amazon, Meta.</p></div>
<div class="market-card commodities"><h4>5. Materias Primas</h4><div class="stats"><span>Oro, Petroleo, Gas, Plata</span><span>Movido por geopolitica</span></div><p>El oro (XAUUSD) es el "refugio seguro" por excelencia. El petroleo se mueve con conflictos y OPEP.</p></div>
<h3>Sesiones de Trading - CUANDO Tradear</h3>
<div class="sessions-timeline">
<div class="session sydney"><h4>Sydney</h4><p>22:00 - 07:00 UTC</p><p>Baja volatilidad</p></div>
<div class="session tokyo"><h4>Tokio</h4><p>00:00 - 09:00 UTC</p><p>JPY se mueve</p></div>
<div class="session london"><h4>Londres</h4><p>08:00 - 17:00 UTC</p><p>ALTA volatilidad</p></div>
<div class="session newyork"><h4>Nueva York</h4><p>13:00 - 22:00 UTC</p><p>ALTA volatilidad</p></div>
</div>
<div class="highlight-box green"><h4>El Mejor Momento: Solapamiento London-NY</h4><p>13:00-17:00 UTC (15:00-19:00 Espana). MAXIMO volumen y movimiento. Es el "prime time" del trading. La mayoria de traders profesionales operan exclusivamente en este horario.</p></div>`,
          keyPoints: [
            "Forex es el mercado mas grande (7.5 billones$/dia) - ideal para empezar",
            "5 mercados: Forex, Indices, Cripto, Acciones, Materias Primas",
            "El solapamiento London-NY (13:00-17:00 UTC) es el mejor momento",
            "Indices son muy populares en cuentas fondeadas (prop firms)"
          ],
          quiz: [
            { question: "Cual es el mercado financiero mas grande del mundo?", options: ["Acciones", "Criptomonedas", "Forex (divisas)", "Materias primas"], correctIndex: 2, explanation: "Forex mueve 7.5 billones de dolares diarios." },
            { question: "Que mercado esta abierto 24/7?", options: ["Forex", "Acciones", "Criptomonedas", "Indices"], correctIndex: 2, explanation: "El mercado cripto nunca cierra." },
            { question: "Cual es el mejor momento del dia para tradear Forex?", options: ["Sesion de Sydney", "Sesion de Tokio", "Solapamiento Londres-Nueva York", "Cierre de Nueva York"], correctIndex: 2, explanation: "El solapamiento London-NY tiene mayor volumen y volatilidad." }
          ]
        },
        {
          id: "1-1-3",
          title: "Terminologia ESENCIAL del Trader",
          duration: "25 min",
          content: `
<h2>El Diccionario del Trader</h2>
<p>Estos terminos los vas a usar TODOS LOS DIAS. No te preocupes si no los memorizas ahora.</p>
<div class="vocab-section">
<h3>Terminos del Precio</h3>
<div class="vocab-card"><h4>PIP (Point in Percentage)</h4><p>El movimiento minimo de precio en Forex. En EUR/USD, un pip es 0.0001.</p><div class="example-box"><strong>Ejemplo:</strong> EUR/USD de 1.0800 a 1.0850 = 50 pips</div></div>
<div class="vocab-card"><h4>SPREAD</h4><p>La diferencia entre precio de compra (ASK) y venta (BID). Es la comision del broker.</p><div class="example-box"><strong>Ejemplo:</strong> BID: 1.0800 | ASK: 1.0802 → Spread = 2 pips</div></div>
<div class="vocab-card"><h4>LOTE (Lot Size)</h4><ul><li><strong>1 Lote Estandar</strong> = 100,000 unidades (1 pip = ~10$)</li><li><strong>1 Mini Lote (0.1)</strong> = 10,000 unidades (1 pip = ~1$)</li><li><strong>1 Micro Lote (0.01)</strong> = 1,000 unidades (1 pip = ~0.10$)</li></ul></div>
</div>
<div class="vocab-section">
<h3>Tipos de Ordenes</h3>
<div class="vocab-card"><h4>ORDEN DE MERCADO (Market Order)</h4><p>Compras/vendes AL PRECIO ACTUAL, inmediatamente.</p></div>
<div class="vocab-card"><h4>ORDEN LIMITADA (Limit Order)</h4><p>Se ejecuta solo si el precio llega a un nivel especifico que tu defines.</p>
<ul><li><strong>Buy Limit:</strong> Comprar a un precio MAS BAJO que el actual</li><li><strong>Sell Limit:</strong> Vender a un precio MAS ALTO que el actual</li><li><strong>Buy Stop:</strong> Comprar a un precio MAS ALTO (para rupturas alcistas)</li><li><strong>Sell Stop:</strong> Vender a un precio MAS BAJO (para rupturas bajistas)</li></ul></div>
<div class="vocab-card"><h4>STOP LOSS (SL)</h4><p>Cierra tu operacion automaticamente para LIMITAR PERDIDAS. Tu cinturon de seguridad.</p><div class="highlight-box red"><strong>REGLA DE ORO: NUNCA operes sin Stop Loss. NUNCA. JAMAS.</strong></div></div>
<div class="vocab-card"><h4>TAKE PROFIT (TP)</h4><p>Cierra tu operacion automaticamente para ASEGURAR GANANCIAS. Tu objetivo.</p></div>
<div class="vocab-card"><h4>TRAILING STOP</h4><p>Un Stop Loss que se MUEVE automaticamente a tu favor. Si el precio sube 50 pips, tu SL tambien sube 50 pips. Protege ganancias mientras dejas correr el trade.</p></div>
</div>
<div class="vocab-section">
<h3>Gestion de Riesgo</h3>
<div class="vocab-card"><h4>APALANCAMIENTO (Leverage)</h4><p>El broker te presta dinero para operar con mas capital.</p><div class="example-box"><strong>Ejemplo:</strong> 1,000$ con apalancamiento 1:100 = operas como si tuvieras 100,000$. Las ganancias Y perdidas se multiplican.</div><div class="warning-box"><p>El apalancamiento es una espada de doble filo. Puede multiplicar ganancias Y perdidas. Usa siempre el minimo necesario.</p></div></div>
<div class="vocab-card"><h4>DRAWDOWN</h4><p>La caida maxima de tu cuenta desde su punto mas alto. Cuenta llego a 10,000$ y ahora tiene 8,000$ = drawdown del 20%. <strong>Prop firms limitan a 5-10%.</strong></p></div>
<div class="vocab-card"><h4>RATIO RIESGO/BENEFICIO (R:R)</h4><p>Relacion entre lo que arriesgas y lo que puedes ganar.</p><div class="example-box"><strong>Ejemplo:</strong> Arriesgas 50$ (SL) para ganar 150$ (TP) = Ratio 1:3. Aunque pierdas 2 de cada 3 operaciones, sigues siendo rentable.</div></div>
<div class="vocab-card"><h4>EQUITY vs BALANCE</h4><p><strong>Balance:</strong> Dinero en tu cuenta SIN contar operaciones abiertas.</p><p><strong>Equity:</strong> Balance + ganancias/perdidas de operaciones abiertas. Es tu dinero REAL en este momento.</p></div>
</div>`,
          keyPoints: [
            "PIP = movimiento minimo. SPREAD = comision del broker",
            "Stop Loss OBLIGATORIO en cada operacion",
            "4 tipos de ordenes pendientes: Buy/Sell Limit, Buy/Sell Stop",
            "Ratio R:R de 1:2+ es la clave de la rentabilidad",
            "Equity = tu dinero real incluyendo operaciones abiertas"
          ],
          quiz: [
            { question: "Si EUR/USD pasa de 1.0800 a 1.0835, cuantos pips se movio?", options: ["3.5 pips", "35 pips", "350 pips", "0.35 pips"], correctIndex: 1, explanation: "1.0835 - 1.0800 = 0.0035. Cada pip = 0.0001, asi que son 35 pips." },
            { question: "Cual es la diferencia entre Buy Limit y Buy Stop?", options: ["No hay diferencia", "Buy Limit compra mas abajo del precio actual, Buy Stop compra mas arriba", "Buy Limit es para vender, Buy Stop es para comprar", "Buy Stop no existe"], correctIndex: 1, explanation: "Buy Limit se coloca por DEBAJO del precio actual (comprar en retroceso). Buy Stop se coloca por ENCIMA (comprar en ruptura)." },
            { question: "Con ratio R:R de 1:2, que porcentaje de acierto necesitas para ser rentable?", options: ["51%", "34%", "75%", "90%"], correctIndex: 1, explanation: "Con 1:2, si ganas 34 de 100: 34 x 200$ = 6,800$, pierdes 66 x 100$ = 6,600$. Beneficio = 200$." },
            { question: "Que es el equity de tu cuenta?", options: ["Solo el dinero depositado", "El balance mas/menos las ganancias/perdidas de operaciones abiertas", "Las comisiones pagadas", "El apalancamiento disponible"], correctIndex: 1, explanation: "Equity = Balance + P/L de operaciones abiertas. Es tu dinero real en el momento actual." }
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
<p>Es la plataforma de graficos mas popular del mundo. GRATIS y es donde pasaras el 80% de tu tiempo analizando.</p>
<div class="step-by-step">
<div class="step"><h4>Paso 1: Crear Cuenta</h4><p>Ve a <strong>tradingview.com</strong> y crea cuenta gratuita con Google o email.</p></div>
<div class="step"><h4>Paso 2: Abrir un Grafico</h4><p>Busca: <strong>EURUSD</strong> (Euro/Dolar), <strong>BTCUSD</strong> (Bitcoin), <strong>US500</strong> (S&P 500), <strong>XAUUSD</strong> (Oro)</p></div>
<div class="step"><h4>Paso 3: Temporalidad</h4><p>Empieza con: <strong>D (diario)</strong> para tendencia general, <strong>H4</strong> para analisis, <strong>H1</strong> para entradas.</p></div>
<div class="step"><h4>Paso 4: Tipo de Grafico</h4><p>Selecciona <strong>"Velas Japonesas"</strong> (Candlestick). Es el unico que usaremos.</p></div>
<div class="step"><h4>Paso 5: Herramientas de Dibujo</h4><p>Panel izquierdo: Linea horizontal (soportes/resistencias), Linea de tendencia, Rectangulo (zonas), Fibonacci.</p></div>
<div class="step"><h4>Paso 6: Configurar Layout</h4><p>Crea un layout con multiples temporalidades: pon D1, H4 y H1 del mismo par lado a lado.</p></div>
</div>
<h3>MetaTrader 4/5: Donde Ejecutas</h3>
<div class="highlight-box blue"><h4>Diferencia Clave</h4><p><strong>TradingView</strong> = Donde analizas (laboratorio)</p><p><strong>MetaTrader</strong> = Donde ejecutas operaciones (sala de trading)</p><p>Muchos traders usan ambas a la vez.</p></div>
<h3>Indicadores Iniciales Recomendados</h3>
<div class="strategy-box"><h4>Setup Minimalista para Empezar</h4><ol><li><strong>EMA 21</strong> y <strong>EMA 50</strong> - Para ver tendencia</li><li><strong>RSI (14)</strong> - Para momentum y divergencias</li><li><strong>Volumen</strong> - Para confirmar movimientos</li></ol><p>NO uses mas de 3 indicadores. Menos es mas.</p></div>
<h3>Cuenta Demo: Tu Campo de Entrenamiento</h3>
<div class="highlight-box green"><h4>REGLA CRITICA</h4><p>NUNCA pongas dinero real hasta completar al menos las Fases 1-4 y haber practicado MINIMO 3 meses en demo con resultados positivos consistentes. Sin excepciones.</p></div>`,
          keyPoints: [
            "TradingView para analizar, MetaTrader para ejecutar",
            "Temporalidades: D1 para tendencia, H4 para setup, H1 para entrada",
            "Maximo 3 indicadores: EMA 21/50, RSI 14, Volumen",
            "MINIMO 3 meses en demo antes de dinero real"
          ],
          quiz: [
            { question: "Para que sirve TradingView principalmente?", options: ["Ejecutar compras/ventas", "Analizar graficos y mercado", "Depositar dinero", "Hablar con traders"], correctIndex: 1, explanation: "TradingView es para analisis. MetaTrader para ejecutar." },
            { question: "Cuantos indicadores deberias usar como maximo al empezar?", options: ["10-15", "2-3", "7-8", "Ninguno"], correctIndex: 1, explanation: "2-3 indicadores son suficientes. Mas indicadores = mas confusion." }
          ]
        },
        {
          id: "1-2-2",
          title: "Como elegir un Broker (sin que te estafen)",
          duration: "20 min",
          content: `
<h2>Eligiendo tu Broker: Tu Socio Financiero</h2>
<div class="analogy-box"><h3>El Broker es como un Agente Inmobiliario</h3><p>Tu quieres comprar/vender una casa (activo financiero), pero no puedes ir directamente al mercado. El broker es el intermediario que ejecuta tus ordenes a cambio de una comision (spread).</p></div>
<h3>Tipos de Brokers</h3>
<div class="grid-cards">
<div class="card green-border"><h4>ECN/STP (Acceso Directo)</h4><p>Tu orden va directamente al mercado. Spreads bajos pero cobran comision. <strong>MEJOR OPCION.</strong> Sin conflicto de intereses.</p></div>
<div class="card red-border"><h4>Market Maker (Creador de Mercado)</h4><p>El broker toma la otra parte de tu operacion. Puede haber conflicto de intereses. Spreads mas altos pero sin comision. <strong>CUIDADO.</strong></p></div>
</div>
<h3>Que Buscar en un Broker</h3>
<div class="strategy-box"><h4>Checklist del Broker Perfecto</h4><ol>
<li><strong>Regulacion:</strong> FCA (UK), CySEC (EU), ASIC (Australia), NFA (USA). Si no esta regulado, HUYE.</li>
<li><strong>Spreads bajos:</strong> EUR/USD deberia ser 0.1-1.5 pips maximo</li>
<li><strong>Ejecucion rapida:</strong> Menos de 100ms de latencia</li>
<li><strong>Deposito minimo razonable:</strong> 50-500$ es normal</li>
<li><strong>MetaTrader 4 o 5:</strong> La plataforma estandar de la industria</li>
<li><strong>Retiros faciles:</strong> Deberia procesar en 1-3 dias laborables</li>
<li><strong>Soporte en tu idioma:</strong> Si hay problemas, poder comunicarte</li>
</ol></div>
<h3>Brokers Recomendados para Empezar</h3>
<div class="grid-cards">
<div class="card"><h4>IC Markets</h4><p>ECN. Regulado ASIC/CySEC. Spreads desde 0.0 pips. Deposito minimo 200$. Excelente para Forex.</p></div>
<div class="card"><h4>Pepperstone</h4><p>ECN. Regulado FCA/ASIC. Spreads bajos. MT4/MT5/TradingView. Muy popular.</p></div>
<div class="card"><h4>XM</h4><p>Market Maker pero regulado. Deposito desde 5$. Bonus de bienvenida. Bueno para empezar con poco capital.</p></div>
<div class="card"><h4>Interactive Brokers</h4><p>El mas profesional. Para acciones, opciones, futuros. Ideal si quieres diversificar mercados.</p></div>
</div>
<div class="warning-box"><h4>Senales de ESTAFA</h4><ul>
<li>No esta regulado por ningun organismo</li>
<li>Te promete ganancias garantizadas</li>
<li>Bonus enormes "irreales" (300%, 500%...)</li>
<li>No te dejan retirar tu dinero facilmente</li>
<li>Te llaman insistentemente para que deposites mas</li>
<li>No tienen sede fisica verificable</li>
</ul><p><strong>Si ves cualquiera de estas senales, HUYE inmediatamente.</strong></p></div>`,
          keyPoints: [
            "Brokers ECN/STP son mejores que Market Makers (menos conflicto de intereses)",
            "SIEMPRE verifica que este regulado (FCA, CySEC, ASIC)",
            "Spread del EUR/USD deberia ser maximo 1.5 pips",
            "Si prometen ganancias garantizadas = ESTAFA"
          ],
          quiz: [
            { question: "Que tipo de broker es mejor para evitar conflictos de interes?", options: ["Market Maker", "ECN/STP (acceso directo al mercado)", "Cualquiera sirve", "Los no regulados"], correctIndex: 1, explanation: "Un broker ECN/STP envia tus ordenes directamente al mercado, sin tomar la otra parte de tu operacion." },
            { question: "Cual NO es una senal de broker estafa?", options: ["Promete ganancias garantizadas", "Esta regulado por la FCA de UK", "Te llama insistentemente para depositar mas", "Bonus del 500%"], correctIndex: 1, explanation: "Estar regulado por la FCA (Financial Conduct Authority del Reino Unido) es senal de legitimidad." }
          ]
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
          title: "Anatomia de una Vela Japonesa",
          duration: "20 min",
          content: `
<h2>Las Velas Japonesas: El ABC del Trader</h2>
<div class="analogy-box"><h3>El Resumen de un Partido</h3><p>Cada vela es como el resumen de un partido de futbol: como empezo (apertura), que paso durante el partido (max/min), y como termino (cierre). El color dice quien gano: compradores (verde) o vendedores (rojo).</p></div>
<h3>Anatomia de una Vela</h3>
<div class="candle-anatomy"><p>Cada vela tiene 4 datos:</p><ul>
<li><strong>APERTURA (Open):</strong> Precio al inicio del periodo</li>
<li><strong>CIERRE (Close):</strong> Precio al final del periodo</li>
<li><strong>MAXIMO (High):</strong> Precio mas alto alcanzado</li>
<li><strong>MINIMO (Low):</strong> Precio mas bajo alcanzado</li>
</ul></div>
<div class="candle-part"><strong>Mecha Superior (Upper Shadow)</strong><p>Muestra hasta donde subieron los compradores antes de que los vendedores los empujaran de vuelta.</p></div>
<div class="candle-part"><strong>Cuerpo (Body)</strong><p>Diferencia entre apertura y cierre. <strong>Verde</strong> = precio SUBIO. <strong>Rojo</strong> = precio BAJO.</p></div>
<div class="candle-part"><strong>Mecha Inferior (Lower Shadow)</strong><p>Muestra hasta donde bajaron los vendedores antes de que los compradores los empujaran de vuelta.</p></div>
<h3>Que Te Cuentan las Velas</h3>
<div class="grid-cards">
<div class="card green-border"><h4>Vela Verde Grande</h4><p>Compradores DOMINARON. Fuerte presion alcista.</p></div>
<div class="card red-border"><h4>Vela Roja Grande</h4><p>Vendedores DOMINARON. Fuerte presion bajista.</p></div>
<div class="card yellow-border"><h4>Cuerpo Pequeno</h4><p>Indecision. Ni compradores ni vendedores dominan.</p></div>
<div class="card purple-border"><h4>Mechas Largas</h4><p>Hubo PELEA. Muestra rechazo de un nivel de precio.</p></div>
</div>
<h3>Los 5 Patrones de Vela MAS IMPORTANTES</h3>
<div class="pattern-card"><h4>1. DOJI</h4><p>Apertura y cierre casi iguales. Cuerpo muy pequeno.</p><p><strong>Significado:</strong> INDECISION. Si aparece tras tendencia fuerte, posible giro.</p></div>
<div class="pattern-card"><h4>2. MARTILLO (Hammer)</h4><p>Cuerpo pequeno arriba, mecha inferior larga (2x el cuerpo minimo).</p><p><strong>Significado:</strong> En tendencia bajista = SENAL ALCISTA. Los compradores rechazaron precios bajos.</p></div>
<div class="pattern-card"><h4>3. ESTRELLA FUGAZ (Shooting Star)</h4><p>Cuerpo pequeno abajo, mecha superior larga. Martillo invertido.</p><p><strong>Significado:</strong> En tendencia alcista = SENAL BAJISTA. Los vendedores rechazaron precios altos.</p></div>
<div class="pattern-card"><h4>4. ENVOLVENTE (Engulfing)</h4><p>Una vela "se come" completamente a la anterior.</p><p><strong>Envolvente Alcista:</strong> Verde grande envuelve roja = COMPRA</p><p><strong>Envolvente Bajista:</strong> Roja grande envuelve verde = VENTA</p></div>
<div class="pattern-card"><h4>5. PIN BAR</h4><p>Mecha muy larga (2/3 del tamano total) y cuerpo pequeno en un extremo.</p><p><strong>La senal favorita de Price Action.</strong> Pin alcista = mecha larga abajo = LONG. Pin bajista = mecha larga arriba = SHORT.</p></div>
<div class="warning-box"><h4>REGLA CRITICA</h4><p>Una vela SOLA no es suficiente. Siempre combina con el CONTEXTO: donde aparece (soporte/resistencia), tendencia, y otros factores. No operes por una sola vela aislada.</p></div>`,
          keyPoints: [
            "Cada vela: Apertura, Cierre, Maximo, Minimo",
            "Verde = subio, Roja = bajo. Mechas = rechazo de niveles",
            "5 patrones clave: Doji, Martillo, Estrella Fugaz, Envolvente, Pin Bar",
            "NUNCA operes por una sola vela - siempre mira el contexto"
          ],
          quiz: [
            { question: "Que indica una vela verde grande sin mechas?", options: ["Indecision", "Dominio total de compradores", "Mercado cerrado", "Dominio vendedores"], correctIndex: 1, explanation: "Compradores controlaron todo el periodo sin dar oportunidad a vendedores." },
            { question: "Un Martillo tiene la mecha larga en...", options: ["Arriba", "Abajo", "Ambos lados", "No tiene mechas"], correctIndex: 1, explanation: "El Martillo tiene mecha inferior larga, indica rechazo de precios bajos." },
            { question: "Envolvente Bajista en resistencia significa...", options: ["Seguir subiendo", "Nada", "Posible giro hacia abajo", "Comprar inmediatamente"], correctIndex: 2, explanation: "Envolvente Bajista en resistencia = vendedores tomando control = posible giro bajista." }
          ],
          practicalExercise: "En TradingView, EUR/USD en H4: identifica 3 Doji, 2 Martillos, 2 Estrellas Fugaz y 1 Envolvente. Marca cada uno y observa que paso DESPUES."
        },
        {
          id: "1-3-2",
          title: "Patrones de Velas Avanzados y Combinaciones",
          duration: "25 min",
          content: `
<h2>Patrones de Velas Avanzados</h2>
<p>Ahora que conoces los patrones basicos, vamos con los patrones de multiples velas y combinaciones que usan los profesionales.</p>
<h3>Patrones de 2-3 Velas</h3>
<div class="pattern-card"><h4>MORNING STAR (Estrella de la Manana)</h4><p>Patron de 3 velas ALCISTA:</p><ol><li>Vela roja grande (bajistas dominan)</li><li>Vela pequena (doji o cuerpo chico) = indecision</li><li>Vela verde grande (alcistas toman control)</li></ol><p><strong>Aparece en suelos/soportes. Senal de giro alcista MUY fiable.</strong></p></div>
<div class="pattern-card"><h4>EVENING STAR (Estrella de la Tarde)</h4><p>Patron de 3 velas BAJISTA (inverso del Morning Star):</p><ol><li>Vela verde grande</li><li>Vela pequena (indecision)</li><li>Vela roja grande</li></ol><p><strong>Aparece en techos/resistencias. Senal de giro bajista.</strong></p></div>
<div class="pattern-card"><h4>THREE WHITE SOLDIERS (Tres Soldados Blancos)</h4><p>3 velas verdes consecutivas, cada una cerrando mas alto. Cuerpos grandes, mechas pequenas.</p><p><strong>Senal alcista MUY fuerte.</strong> Indica momentum comprador sostenido.</p></div>
<div class="pattern-card"><h4>THREE BLACK CROWS (Tres Cuervos Negros)</h4><p>3 velas rojas consecutivas, cada una cerrando mas bajo.</p><p><strong>Senal bajista MUY fuerte.</strong> Inverso de los Tres Soldados.</p></div>
<div class="pattern-card"><h4>TWEEZER TOP / BOTTOM</h4><p><strong>Tweezer Top:</strong> Dos velas con maximos casi identicos en resistencia = BAJISTA</p><p><strong>Tweezer Bottom:</strong> Dos velas con minimos casi identicos en soporte = ALCISTA</p><p>Muestra que el mercado RECHAZO el mismo nivel dos veces.</p></div>
<div class="pattern-card"><h4>INSIDE BAR (Barra Interior)</h4><p>Una vela completamente contenida dentro del rango de la vela anterior. La segunda vela es mas pequena.</p><p><strong>Significado:</strong> CONSOLIDACION antes de un movimiento explosivo. Espera la ruptura de la vela madre.</p><p><strong>Setup:</strong> Entrada cuando el precio rompe el maximo (LONG) o minimo (SHORT) de la vela madre.</p></div>
<h3>Patrones de Continuacion</h3>
<div class="grid-cards">
<div class="card"><h4>Rising Three Methods</h4><p>En tendencia alcista: vela verde grande → 3 velas rojas pequenas → vela verde grande. La tendencia continua.</p></div>
<div class="card"><h4>Falling Three Methods</h4><p>En tendencia bajista: vela roja grande → 3 velas verdes pequenas → vela roja grande. La caida continua.</p></div>
</div>
<h3>La Jerarquia de Fiabilidad</h3>
<div class="highlight-box blue"><h4>De MAS a MENOS fiable</h4><ol>
<li><strong>Envolvente en soporte/resistencia clave</strong> - La mas fiable</li>
<li><strong>Morning/Evening Star en niveles clave</strong></li>
<li><strong>Pin Bar con rechazo de nivel institucional</strong></li>
<li><strong>Inside Bar breakout con tendencia</strong></li>
<li><strong>Doji en extremo de tendencia</strong></li>
<li><strong>Martillo/Estrella Fugaz aislados</strong> - Menos fiable sola</li>
</ol></div>
<div class="highlight-box green"><h4>LA REGLA DE ORO de las Velas</h4><p>Un patron de velas SOLO es valido si aparece en un NIVEL IMPORTANTE (soporte, resistencia, order block, fibonacci). Un martillo en medio de la nada no significa nada. Un martillo en un soporte fuerte con confluencia = entrada de alta probabilidad.</p></div>`,
          keyPoints: [
            "Morning/Evening Star son de los patrones mas fiables",
            "Inside Bar = consolidacion antes de movimiento explosivo",
            "Three Soldiers/Crows = momentum fuerte y sostenido",
            "Un patron SOLO es valido en un NIVEL IMPORTANTE",
            "La confluencia (patron + nivel + tendencia) es lo que realmente importa"
          ],
          quiz: [
            { question: "Que es un Morning Star?", options: ["Una vela verde sola", "Patron de 3 velas: roja grande, vela pequena, verde grande = giro alcista", "Un indicador tecnico", "El gap de apertura"], correctIndex: 1, explanation: "Morning Star es un patron de 3 velas de giro alcista: bajista grande → indecision → alcista grande." },
            { question: "Que significa un Inside Bar?", options: ["El precio se mueve muy rapido", "Consolidacion antes de un movimiento explosivo", "Final de la tendencia", "Error en el grafico"], correctIndex: 1, explanation: "Inside Bar indica que el mercado esta comprimiendo energia (consolidando) antes de un movimiento fuerte." },
            { question: "Un martillo en medio de una tendencia sin ningun soporte cerca es...", options: ["Senal de compra fuerte", "Senal poco fiable - necesita contexto/nivel importante", "Senal de venta", "Momento de cerrar todo"], correctIndex: 1, explanation: "Los patrones de velas SOLO son fiables cuando aparecen en niveles importantes (soporte, resistencia, order block, etc.)." }
          ]
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
<div class="highlight-box red"><p>Estos errores son la razon por la que la mayoria pierde dinero. Leelos, memorizalos, y JURA que no los cometeras.</p></div>
<div class="grid-cards">
<div class="card red-border"><h4>1. Operar sin Stop Loss</h4><p>"Ya se va a recuperar..." NO. Una operacion sin SL puede destruir tu cuenta entera en minutos. SIEMPRE pon SL antes de entrar.</p></div>
<div class="card red-border"><h4>2. Arriesgar demasiado por trade</h4><p>Principiantes arriesgan 10-20% por operacion. Con 5 perdidas seguidas (que PASARA), pierdes todo. Maximo 1-2%.</p></div>
<div class="card red-border"><h4>3. Revenge Trading</h4><p>Perder → frustacion → operar mas para "recuperar" → perder mas. El ciclo destructivo #1. Si pierdes 2 seguidas, CIERRA la plataforma.</p></div>
<div class="card red-border"><h4>4. No tener un plan de trading</h4><p>Operar "a ojo" es como navegar sin mapa. Necesitas reglas escritas ANTES de operar: que, cuando, cuanto, como.</p></div>
<div class="card red-border"><h4>5. Operar en cuenta real demasiado pronto</h4><p>Minimo 3 meses en demo con resultados positivos. Si pierdes en demo, perderas 10x mas en real por las emociones.</p></div>
<div class="card red-border"><h4>6. Seguir "senales" de otros</h4><p>Grupos de Telegram, "gurus" de Instagram... El 95% son estafas. Si supieran ganar, no venderian senales. Aprende TU.</p></div>
<div class="card red-border"><h4>7. Cambiar de estrategia cada semana</h4><p>Una estrategia necesita al menos 30-50 trades para evaluarla. Si cambias cada 5 trades, nunca sabras si funciona.</p></div>
<div class="card red-border"><h4>8. Sobreoperar (Overtrading)</h4><p>Mas trades ≠ mas dinero. Mas trades = mas comisiones + peores decisiones + mas estres. 1-3 buenos trades al dia es SUFICIENTE.</p></div>
<div class="card red-border"><h4>9. Ignorar la gestion de riesgo</h4><p>El 80% del exito en trading es gestion de riesgo. No el mejor indicador, no la mejor estrategia. RIESGO.</p></div>
<div class="card red-border"><h4>10. Expectativas irreales</h4><p>"Voy a duplicar mi cuenta en un mes." NO. Los mejores traders del mundo hacen 2-5% MENSUAL. Eso es excelente. Acepta la realidad.</p></div>
</div>
<div class="highlight-box green"><h4>La Buena Noticia</h4><p>Ahora que conoces estos errores, ya estas por delante del 90% de traders que nunca los aprenden (o los aprenden perdiendo todo su dinero). Graba estos 10 puntos en tu mente.</p></div>`,
          keyPoints: [
            "SIEMPRE Stop Loss, NUNCA arriesgar mas del 1-2%, NUNCA revenge trading",
            "3 meses minimo en demo antes de dinero real",
            "No sigas senales de otros - aprende tu mismo",
            "Una estrategia necesita 30-50 trades para evaluarla",
            "Expectativas realistas: 2-5% mensual es EXCELENTE"
          ],
          quiz: [
            { question: "Cuantos trades necesitas como minimo para evaluar si una estrategia funciona?", options: ["5 trades", "10 trades", "30-50 trades", "200 trades"], correctIndex: 2, explanation: "30-50 trades es el minimo para tener una muestra estadisticamente relevante. Con menos, no puedes saber si los resultados son por la estrategia o por suerte." },
            { question: "Cual es un retorno mensual REALISTA y excelente para un trader profesional?", options: ["50-100%", "20-30%", "2-5%", "0.5%"], correctIndex: 2, explanation: "2-5% mensual es lo que hacen los mejores. Suena poco pero es 24-60% anual, que supera a casi cualquier fondo de inversion del mundo." },
            { question: "Por que no deberias seguir 'senales' de grupos de Telegram?", options: ["Porque Telegram no funciona bien", "Porque el 95% son estafas y si supieran ganar consistentemente no venderian senales", "Porque las senales llegan tarde", "Porque solo funcionan en Forex"], correctIndex: 1, explanation: "Si alguien pudiera ganar consistentemente en trading, no necesitaria vender senales a 20 euros/mes. La mayoria son estafas o traders mediocres que ganan mas vendiendo senales que operando." }
          ]
        },
        {
          id: "1-4-2",
          title: "Tu Hoja de Ruta: De Principiante a Experto",
          duration: "15 min",
          content: `
<h2>El Camino Completo: Tu Mapa de Aqui a Vivir del Trading</h2>
<div class="analogy-box"><h3>El Viaje del Trading</h3><p>Aprender trading es como aprender a conducir. Primero estudias la teoria (este curso), luego practicas en un circuito cerrado (demo), luego conduces por la ciudad con cuidado (cuenta pequena/prop firm), y eventualmente conduces con confianza (trader profesional). No puedes saltarte pasos.</p></div>
<h3>Las 5 Etapas del Trader</h3>
<div class="strategy-box"><h4>Etapa 1: Incompetente Inconsciente (Mes 1)</h4><p>"No se lo que no se." Crees que el trading es facil. Haces trades aleatorios. Puedes ganar algo por suerte. Aqui es donde el 50% abandona.</p></div>
<div class="strategy-box"><h4>Etapa 2: Incompetente Consciente (Meses 2-4)</h4><p>"Ahora se que no se nada." Empiezas a estudiar (este curso). Te das cuenta de la complejidad. Frustacion. Es NORMAL. No abandones aqui.</p></div>
<div class="strategy-box"><h4>Etapa 3: Competente Consciente (Meses 5-9)</h4><p>"Puedo hacerlo si me concentro." Tu estrategia funciona cuando sigues tu plan. Pero todavia luchas con las emociones. Necesitas enfoque activo.</p></div>
<div class="strategy-box"><h4>Etapa 4: Competente Inconsciente (Meses 10-18)</h4><p>"Lo hago sin pensar." Tu plan de trading es automatico. Tomas decisiones correctas naturalmente. Aqui empiezas a ser consistente.</p></div>
<div class="strategy-box"><h4>Etapa 5: Maestria (18+ meses)</h4><p>"Adapto y evoluciono." Lees el mercado como un libro. Adaptas tu estrategia segun condiciones. Eres rentable consistentemente. Vives del trading.</p></div>
<h3>Tu Plan de Accion Inmediato</h3>
<div class="highlight-box green"><h4>Que hacer AHORA MISMO</h4><ol>
<li><strong>Completa la Fase 1</strong> de este curso (ya casi estas)</li>
<li><strong>Abre TradingView</strong> y familiarizate con la plataforma</li>
<li><strong>NO pongas dinero real</strong> en ningun lado todavia</li>
<li><strong>Sigue con la Fase 2</strong> (Analisis Tecnico) manana</li>
<li><strong>Dedica 1-2 horas al dia</strong> al estudio y practica</li>
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
            "El camino toma 12-18 meses minimo para ser consistente",
            "Dedica 1-2 horas al dia al estudio y practica",
            "Meses 1-6: estudio y demo. Meses 7-12: prop firms y cuenta real",
            "Es un maraton, no un sprint. La paciencia gana."
          ],
          quiz: [
            { question: "En que etapa empiezas a ser realmente consistente?", options: ["Etapa 1 - Incompetente inconsciente", "Etapa 2 - Incompetente consciente", "Etapa 4 - Competente inconsciente", "Desde el primer dia"], correctIndex: 2, explanation: "La consistencia llega en la Etapa 4 (Competente Inconsciente), cuando tu plan de trading se vuelve automatico y tomas decisiones correctas sin esfuerzo consciente." },
            { question: "Cuanto tiempo toma de forma realista ser un trader consistente?", options: ["1-2 semanas", "1-2 meses", "12-18 meses", "5+ anos"], correctIndex: 2, explanation: "12-18 meses es un timeline realista para un trader dedicado que estudia y practica 1-2 horas al dia. Puede ser mas rapido con dedicacion completa, pero rara vez menos de 9 meses." }
          ]
        }
      ]
    }
  ]
};
