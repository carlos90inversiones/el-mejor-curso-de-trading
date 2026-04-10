import type { Phase } from "../courseData";

export const PHASE_6: Phase = {
  id: "fase-6",
  number: 6,
  title: "Trading Algoritmico",
  subtitle: "Automatiza tu trading con tecnologia",
  description: "Descubre como usar la tecnologia para probar tus estrategias con datos historicos, crear bots de trading en Python y desarrollar indicadores personalizados en Pine Script.",
  color: "#6366F1",
  gradient: "from-indigo-500 to-indigo-700",
  modules: [
    {
      id: "mod-6-1",
      title: "Programacion para Traders",
      description: "Backtesting, Python y Pine Script para llevar tu trading al siguiente nivel",
      icon: "🐍",
      color: "#6366F1",
      lessons: [
        {
          id: "6-1-1",
          title: "Backtesting: Prueba tu estrategia antes de arriesgar",
          duration: "35 min",
          content: `
<h2>Backtesting: La Ciencia Detras del Trading</h2>
<div class="analogy-box">
<h3>La Analogia del Simulador de Vuelo</h3>
<p>Ningun piloto vuela un avion real sin antes pasar cientos de horas en un simulador. El <strong>backtesting</strong> es el simulador del trader: pruebas tu estrategia con datos historicos REALES antes de arriesgar un solo centavo. Si no funciona en el pasado, tiene muy pocas probabilidades de funcionar en el futuro.</p>
</div>

<h3>Que es el Backtesting y Por Que es CRUCIAL</h3>
<p>El backtesting consiste en <strong>aplicar tu estrategia de trading a datos historicos del mercado</strong> para ver como habria funcionado. Es la diferencia entre operar con fe ciega y operar con datos concretos.</p>

<div class="highlight-box green">
<h4>Beneficios del Backtesting</h4>
<ul>
<li><strong>Validar tu estrategia:</strong> Sabes si funciona ANTES de arriesgar dinero real</li>
<li><strong>Conocer tus numeros:</strong> Win rate, profit factor, drawdown maximo esperado</li>
<li><strong>Confianza real:</strong> Cuando llevas 5 perdidas seguidas, sabes que tu backtest mostro rachas de 8 y aun asi fue rentable</li>
<li><strong>Optimizar parametros:</strong> Ajustar stop loss, take profit, filtros de entrada</li>
<li><strong>Eliminar emociones:</strong> Los datos no mienten, las emociones si</li>
</ul>
</div>

<h3>Backtesting Manual vs Automatizado</h3>
<div class="comparison-table">
<div class="comparison-col">
<h4>Manual</h4>
<ul>
<li>Usas el replay de TradingView</li>
<li>Retrocedes en el tiempo y operas como si fuera en vivo</li>
<li>Mas lento pero desarrolla intuicion</li>
<li>Ideal para estrategias de accion del precio</li>
<li>Gratis con TradingView</li>
</ul>
</div>
<div class="comparison-col">
<h4>Automatizado</h4>
<ul>
<li>Usas codigo (Python, Pine Script)</li>
<li>Pruebas miles de operaciones en segundos</li>
<li>Mas rapido y objetivo (sin sesgo)</li>
<li>Ideal para estrategias basadas en indicadores</li>
<li>Requiere conocimientos de programacion</li>
</ul>
</div>
</div>

<h3>Como Hacer Backtesting Manual en TradingView</h3>
<div class="highlight-box blue">
<h4>Paso a Paso: Modo Replay de TradingView</h4>
<ol>
<li><strong>Abre TradingView</strong> y selecciona el par que quieres testear (ej: EUR/USD)</li>
<li><strong>Selecciona el timeframe</strong> de tu estrategia (ej: 1H para swing, 15M para intraday)</li>
<li><strong>Haz clic en "Replay"</strong> en la barra superior (icono de reloj con flecha)</li>
<li><strong>Selecciona una fecha de inicio</strong> — ve al menos 6 meses atras</li>
<li><strong>Avanza vela por vela</strong> y aplica tu estrategia como si operaras en vivo</li>
<li><strong>Registra cada trade</strong> en una hoja de calculo: entrada, SL, TP, resultado</li>
<li><strong>Al final, calcula tus metricas</strong> (win rate, profit factor, etc.)</li>
</ol>
</div>

<h3>Las Metricas Esenciales del Backtesting</h3>
<div class="grid-cards">
<div class="card"><h4>Win Rate (% de Acierto)</h4><p>Porcentaje de trades ganadores. Un 40-60% es normal para la mayoria de estrategias rentables. Un win rate del 40% con R:R 1:3 es MUY rentable.</p></div>
<div class="card"><h4>Profit Factor</h4><p>Ganancias totales / Perdidas totales. Por encima de 1.5 es bueno. Por encima de 2.0 es excelente. Por debajo de 1.0 pierdes dinero.</p></div>
<div class="card"><h4>Max Drawdown</h4><p>La mayor caida desde un pico de equity. Si tu max drawdown es 15%, prepara tu mente para soportar ese dolor. En cuenta fondeada, debe ser menor al 10%.</p></div>
<div class="card"><h4>Ratio de Sharpe</h4><p>Mide el retorno ajustado al riesgo. Por encima de 1.0 es aceptable. Por encima de 2.0 es excelente. Tiene en cuenta la volatilidad de tus resultados.</p></div>
<div class="card"><h4>Expectancy (Esperanza Matematica)</h4><p>Cuanto esperas ganar EN PROMEDIO por cada trade. Expectancy = (Win% x Avg Win) - (Loss% x Avg Loss). Debe ser POSITIVA para que tu estrategia sea rentable.</p></div>
<div class="card"><h4>Sample Size (Tamano de Muestra)</h4><p>MINIMO 100 trades para que los datos sean estadisticamente significativos. Idealmente 200-500 trades. Con menos de 50, los resultados no son confiables.</p></div>
</div>

<h3>Evitar el Overfitting (Sobre-Optimizacion)</h3>
<div class="warning-box">
<h4>El Mayor Peligro del Backtesting</h4>
<p>El <strong>overfitting</strong> es cuando ajustas tanto los parametros de tu estrategia que funciona PERFECTO en datos historicos pero FRACASA en datos nuevos. Es como estudiar las respuestas de un examen pasado — sacas 10 en ese examen pero no aprendes nada real.</p>
<ul>
<li><strong>Senal de overfitting:</strong> Tu estrategia tiene 20 reglas y 15 filtros. Si necesitas tantas condiciones, probablemente no funciona.</li>
<li><strong>Solucion:</strong> Manten tu estrategia SIMPLE. 3-5 reglas maximo.</li>
<li><strong>Test fuera de muestra:</strong> Backtestea en un periodo (2020-2023) y luego valida en otro periodo que NO usaste (2024). Si funciona en ambos, es robusta.</li>
<li><strong>Walk-forward analysis:</strong> Divide tus datos en segmentos y valida secuencialmente.</li>
</ul>
</div>

<div class="highlight-box green">
<h4>La Regla de Oro del Backtesting</h4>
<p>Si tu estrategia no es rentable en al menos 200 trades de backtest en MULTIPLES condiciones de mercado (tendencia, rango, volatilidad alta/baja), NO LA OPERES CON DINERO REAL. El backtest es tu filtro numero uno.</p>
</div>`,
          keyPoints: [
            "Backtesting es probar tu estrategia con datos historicos antes de arriesgar dinero real",
            "Minimo 100-200 trades de muestra para que los resultados sean estadisticamente validos",
            "Metricas clave: win rate, profit factor (>1.5), max drawdown, esperanza matematica positiva",
            "Cuidado con el overfitting: mantener la estrategia simple (3-5 reglas) y validar fuera de muestra",
            "TradingView Replay permite backtesting manual gratuito — avanza vela a vela",
            "Si no funciona en backtest, no funcionara en vivo"
          ],
          quiz: [
            { question: "Que es el backtesting?", options: ["Operar en una cuenta demo", "Aplicar tu estrategia a datos historicos para ver como habria funcionado", "Copiar trades de otros traders", "Usar indicadores automaticos"], correctIndex: 1, explanation: "El backtesting consiste en aplicar tu estrategia de trading a datos historicos del mercado para evaluar su rendimiento antes de arriesgar dinero real." },
            { question: "Cual es el tamano de muestra minimo recomendado para un backtest confiable?", options: ["10 trades", "30 trades", "100-200 trades", "Solo 5 trades buenos"], correctIndex: 2, explanation: "Se necesitan al menos 100-200 trades para que los resultados del backtest sean estadisticamente significativos y confiables." },
            { question: "Que es el overfitting?", options: ["Cuando tu estrategia funciona en todos los mercados", "Cuando ajustas tanto los parametros que funciona perfecto en el pasado pero falla en datos nuevos", "Cuando usas demasiado apalancamiento", "Cuando operas muchos pares a la vez"], correctIndex: 1, explanation: "El overfitting es sobre-optimizar tu estrategia para datos historicos especificos. Funciona perfecto en el backtest pero falla en operaciones reales porque no es una estrategia robusta." },
            { question: "Un profit factor de 0.8 significa que:", options: ["Tu estrategia es muy rentable", "Estas perdiendo dinero — las perdidas superan las ganancias", "Necesitas mas datos", "Es un buen resultado para empezar"], correctIndex: 1, explanation: "Un profit factor por debajo de 1.0 significa que las perdidas totales superan las ganancias totales. Necesitas un profit factor de al menos 1.5 para que la estrategia sea viable." }
          ],
          practicalExercise: "Abre TradingView, activa el modo Replay en EUR/USD grafico de 1H. Ve atras 6 meses. Aplica UNA estrategia simple (ej: rebote en soporte/resistencia con confirmacion de vela). Opera al menos 30 trades anotando en Excel: fecha, direccion, entrada, SL, TP, resultado en pips, resultado en %. Al final calcula: win rate, profit factor, max drawdown, y esperanza matematica."
        },
        {
          id: "6-1-2",
          title: "Python para Trading y Bots",
          duration: "45 min",
          content: `
<h2>Python: El Lenguaje del Trader Moderno</h2>
<div class="analogy-box">
<h3>Python es tu Asistente Personal</h3>
<p>Imagina tener un asistente que trabaja 24/7, nunca se cansa, no tiene emociones y puede analizar miles de datos en segundos. Eso es lo que Python hace por tu trading. No necesitas ser ingeniero — con lo basico puedes crear herramientas muy poderosas.</p>
</div>

<h3>Por Que Python para Trading?</h3>
<div class="grid-cards">
<div class="card"><h4>Gratuito y Open Source</h4><p>Python es gratis. Las librerias de trading son gratis. No necesitas pagar nada para empezar.</p></div>
<div class="card"><h4>Facil de Aprender</h4><p>Python es el lenguaje mas facil de aprender. Su sintaxis es casi como leer ingles.</p></div>
<div class="card"><h4>Librerias Poderosas</h4><p>pandas, numpy, matplotlib, yfinance — herramientas especializadas para datos financieros.</p></div>
<div class="card"><h4>Comunidad Enorme</h4><p>Miles de tutoriales, foros, y codigo gratuito para trading. Nunca estaras solo.</p></div>
</div>

<h3>Las Librerias Esenciales</h3>
<div class="highlight-box blue">
<h4>Tu Kit de Herramientas en Python</h4>
<ul>
<li><strong>pandas:</strong> Manejo de datos en tablas (DataFrames). Es el Excel de Python pero 1000x mas poderoso.</li>
<li><strong>numpy:</strong> Calculos matematicos rapidos. Media, desviacion estandar, correlaciones.</li>
<li><strong>matplotlib / plotly:</strong> Crear graficos y visualizaciones de tus resultados.</li>
<li><strong>yfinance:</strong> Descargar datos de precios historicos GRATIS (acciones, crypto, forex).</li>
<li><strong>ta-lib / pandas-ta:</strong> Calcular indicadores tecnicos (RSI, MACD, Bollinger, etc.) automaticamente.</li>
</ul>
</div>

<h3>Obteniendo Datos del Mercado</h3>
<div class="highlight-box green">
<h4>Ejemplo: Descargar Datos con yfinance</h4>
<pre><code>
import yfinance as yf
import pandas as pd

# Descargar datos de EUR/USD (ultimos 2 anos)
data = yf.download("EURUSD=X", start="2023-01-01", end="2025-01-01")

# Ver las primeras filas
print(data.head())

# Calcular media movil de 50 periodos
data['SMA_50'] = data['Close'].rolling(window=50).mean()

# Calcular RSI de 14 periodos
delta = data['Close'].diff()
gain = (delta.where(delta > 0, 0)).rolling(window=14).mean()
loss = (-delta.where(delta < 0, 0)).rolling(window=14).mean()
rs = gain / loss
data['RSI'] = 100 - (100 / (1 + rs))

print(data[['Close', 'SMA_50', 'RSI']].tail(10))
</code></pre>
</div>

<h3>APIs para Datos en Tiempo Real</h3>
<div class="grid-cards">
<div class="card"><h4>yfinance (Gratis)</h4><p>Datos historicos de Yahoo Finance. Ideal para backtesting. Delay de 15-20 min en tiempo real. Soporta forex, acciones, cripto.</p></div>
<div class="card"><h4>OANDA API (Gratis con cuenta)</h4><p>Datos de forex en tiempo real. API REST bien documentada. Puedes ejecutar trades automaticos. Ideal para bots de forex.</p></div>
<div class="card"><h4>Binance API (Gratis)</h4><p>Datos de criptomonedas en tiempo real. WebSocket para streaming. Ideal para bots de cripto.</p></div>
<div class="card"><h4>Alpha Vantage (Freemium)</h4><p>Datos de acciones, forex, y cripto. Plan gratuito con limites. API key requerida.</p></div>
</div>

<h3>Ejemplo Basico de Backtest en Python</h3>
<div class="highlight-box blue">
<h4>Estrategia Simple: Cruce de Medias Moviles</h4>
<pre><code>
import yfinance as yf
import pandas as pd

# Descargar datos
data = yf.download("EURUSD=X", start="2022-01-01", end="2025-01-01")

# Calcular medias moviles
data['SMA_20'] = data['Close'].rolling(20).mean()
data['SMA_50'] = data['Close'].rolling(50).mean()

# Generar senales
data['Signal'] = 0
data.loc[data['SMA_20'] > data['SMA_50'], 'Signal'] = 1   # Compra
data.loc[data['SMA_20'] < data['SMA_50'], 'Signal'] = -1  # Venta

# Calcular retornos
data['Returns'] = data['Close'].pct_change()
data['Strategy_Returns'] = data['Signal'].shift(1) * data['Returns']

# Resultados
total_return = (1 + data['Strategy_Returns']).cumprod().iloc[-1] - 1
print(f"Retorno total de la estrategia: {total_return:.2%}")
print(f"Retorno buy-and-hold: {(data['Close'].iloc[-1] / data['Close'].iloc[0] - 1):.2%}")
</code></pre>
</div>

<h3>Creando Alertas Automaticas</h3>
<p>Python puede enviar alertas a tu telefono cuando se cumplan condiciones especificas:</p>
<div class="highlight-box green">
<h4>Ejemplo: Alerta por Telegram cuando RSI < 30</h4>
<pre><code>
import requests

def send_telegram_alert(message):
    token = "TU_BOT_TOKEN"
    chat_id = "TU_CHAT_ID"
    url = f"https://api.telegram.org/bot{token}/sendMessage"
    requests.post(url, data={"chat_id": chat_id, "text": message})

# Si RSI esta por debajo de 30, enviar alerta
if current_rsi < 30:
    send_telegram_alert(f"ALERTA: RSI de EUR/USD en {current_rsi:.1f} - Posible sobreventa!")
</code></pre>
</div>

<h3>Integracion con MetaTrader 5 (MT5)</h3>
<div class="highlight-box blue">
<h4>Python + MT5: Lo Mejor de Ambos Mundos</h4>
<pre><code>
import MetaTrader5 as mt5

# Conectar a MT5
mt5.initialize()

# Obtener datos de EURUSD
rates = mt5.copy_rates_from_pos("EURUSD", mt5.TIMEFRAME_H1, 0, 1000)

# Enviar una orden de compra
order = {
    "action": mt5.TRADE_ACTION_DEAL,
    "symbol": "EURUSD",
    "volume": 0.1,
    "type": mt5.ORDER_TYPE_BUY,
    "price": mt5.symbol_info_tick("EURUSD").ask,
    "sl": 1.0750,  # Stop Loss
    "tp": 1.0850,  # Take Profit
    "comment": "Bot Python",
}
result = mt5.order_send(order)
</code></pre>
<p>Con la libreria MetaTrader5 puedes controlar MT5 desde Python: obtener datos, enviar ordenes, gestionar posiciones — todo automatizado.</p>
</div>

<div class="warning-box">
<h4>Advertencia sobre Bots de Trading</h4>
<p>Un bot de trading es tan bueno como la estrategia detras de el. Si tu estrategia no es rentable en backtesting manual, automatizarla no la hara rentable. Primero valida la estrategia manualmente, luego automatiza. Los bots que "prometen" ganancias garantizadas son SIEMPRE estafas.</p>
</div>`,
          keyPoints: [
            "Python es gratuito, facil de aprender, y tiene librerias poderosas para trading (pandas, numpy, yfinance)",
            "yfinance permite descargar datos historicos gratis para backtesting en Python",
            "APIs como OANDA y Binance permiten obtener datos en tiempo real y ejecutar trades automaticos",
            "MetaTrader5 se integra con Python para automatizar operaciones en forex",
            "Un bot solo es tan bueno como la estrategia detras — primero valida manualmente, luego automatiza",
            "Python puede enviar alertas a Telegram cuando se cumplan condiciones de tu estrategia"
          ],
          quiz: [
            { question: "Cual libreria de Python se usa para descargar datos historicos de precios gratis?", options: ["numpy", "matplotlib", "yfinance", "tensorflow"], correctIndex: 2, explanation: "yfinance permite descargar datos historicos gratuitos de Yahoo Finance para acciones, forex y criptomonedas." },
            { question: "Para que sirve pandas en el contexto de trading?", options: ["Para crear graficos bonitos", "Para manejar datos en tablas (DataFrames), como un Excel super poderoso", "Para enviar ordenes al broker", "Para minar criptomonedas"], correctIndex: 1, explanation: "pandas es la libreria fundamental para manejo de datos tabulares en Python. Permite organizar, filtrar y analizar datos de precios de forma eficiente." },
            { question: "Que es lo PRIMERO que debes hacer antes de automatizar una estrategia con un bot?", options: ["Conectar la API del broker", "Validar que la estrategia es rentable con backtesting manual", "Comprar un servidor VPS", "Aprender machine learning"], correctIndex: 1, explanation: "Antes de automatizar, debes validar que tu estrategia es rentable con backtesting manual. Automatizar una estrategia perdedora solo pierde dinero mas rapido." },
            { question: "Que libreria permite controlar MetaTrader 5 desde Python?", options: ["yfinance", "pandas", "MetaTrader5 (mt5)", "requests"], correctIndex: 2, explanation: "La libreria MetaTrader5 permite conectar Python con MT5 para obtener datos, enviar ordenes y gestionar posiciones de forma automatizada." }
          ],
          practicalExercise: "Instala Python (python.org) y las librerias: pip install yfinance pandas numpy matplotlib. Luego crea un script que: 1) Descargue datos de EUR/USD de los ultimos 2 anos. 2) Calcule la SMA de 20 y 50 periodos. 3) Cuente cuantas veces la SMA20 cruzo por encima de la SMA50 (senal de compra) y por debajo (senal de venta). 4) Imprima los resultados. Si no tienes experiencia con Python, usa ChatGPT para ayudarte con el codigo."
        },
        {
          id: "6-1-3",
          title: "Pine Script: Indicadores Custom en TradingView",
          duration: "40 min",
          content: `
<h2>Pine Script: Tu Propio Indicador en TradingView</h2>
<div class="analogy-box">
<h3>Pine Script es como Crear tu Propia Receta</h3>
<p>TradingView tiene cientos de indicadores, pero ninguno es EXACTAMENTE lo que necesitas. Pine Script te permite crear TU receta perfecta: combinar indicadores, crear condiciones especificas, y generar alertas automaticas. Es como tener un chef personal que cocina exactamente lo que tu quieres.</p>
</div>

<h3>Que es Pine Script?</h3>
<p><strong>Pine Script</strong> es el lenguaje de programacion de TradingView. Te permite crear:</p>
<div class="grid-cards">
<div class="card"><h4>Indicadores Custom</h4><p>Combina RSI + Volumen + tu logica personal en un solo indicador que te de senales claras.</p></div>
<div class="card"><h4>Alertas Automaticas</h4><p>Recibe notificaciones en tu telefono cuando se cumplan TUS condiciones especificas.</p></div>
<div class="card"><h4>Strategy Scripts</h4><p>Backtestea estrategias directamente en TradingView con resultados detallados y graficos.</p></div>
<div class="card"><h4>Publicar y Compartir</h4><p>Comparte tus indicadores con la comunidad o vendelos como servicio premium.</p></div>
</div>

<h3>Fundamentos de Pine Script</h3>
<div class="highlight-box blue">
<h4>Estructura Basica de un Script</h4>
<pre><code>
//@version=5
indicator("Mi Primer Indicador", overlay=true)

// Calcular medias moviles
sma20 = ta.sma(close, 20)
sma50 = ta.sma(close, 50)

// Dibujar en el grafico
plot(sma20, color=color.blue, title="SMA 20")
plot(sma50, color=color.red, title="SMA 50")

// Detectar cruce alcista
crossUp = ta.crossover(sma20, sma50)
crossDown = ta.crossunder(sma20, sma50)

// Marcar cruces en el grafico
plotshape(crossUp, style=shape.triangleup, location=location.belowbar,
          color=color.green, size=size.small, title="Compra")
plotshape(crossDown, style=shape.triangledown, location=location.abovebar,
          color=color.red, size=size.small, title="Venta")
</code></pre>
</div>

<h3>Conceptos Clave de Pine Script</h3>
<div class="grid-cards">
<div class="card"><h4>Variables de Precio</h4><p><code>open</code>, <code>high</code>, <code>low</code>, <code>close</code>, <code>volume</code> — los datos basicos de cada vela. <code>close[1]</code> = cierre de la vela anterior.</p></div>
<div class="card"><h4>Funciones ta.*</h4><p><code>ta.sma()</code>, <code>ta.rsi()</code>, <code>ta.macd()</code>, <code>ta.crossover()</code> — funciones integradas para calcular indicadores tecnicos.</p></div>
<div class="card"><h4>Condicionales</h4><p><code>if/else</code>, operadores logicos (<code>and</code>, <code>or</code>), comparaciones (<code>></code>, <code><</code>, <code>==</code>) para crear logica de senales.</p></div>
<div class="card"><h4>Visualizacion</h4><p><code>plot()</code>, <code>plotshape()</code>, <code>bgcolor()</code>, <code>label.new()</code> — funciones para dibujar en el grafico.</p></div>
</div>

<h3>Ejemplo: Indicador RSI con Zonas y Alertas</h3>
<div class="highlight-box green">
<h4>Indicador RSI Mejorado</h4>
<pre><code>
//@version=5
indicator("RSI Pro con Alertas", overlay=false)

// Inputs personalizables
rsiLength = input.int(14, "Periodo RSI", minval=1)
overbought = input.int(70, "Sobrecompra", minval=50)
oversold = input.int(30, "Sobreventa", maxval=50)

// Calcular RSI
rsiValue = ta.rsi(close, rsiLength)

// Colores dinamicos
rsiColor = rsiValue >= overbought ? color.red :
           rsiValue <= oversold ? color.green : color.blue

// Dibujar
plot(rsiValue, color=rsiColor, linewidth=2, title="RSI")
hline(overbought, "Sobrecompra", color=color.red, linestyle=hline.style_dashed)
hline(oversold, "Sobreventa", color=color.green, linestyle=hline.style_dashed)
hline(50, "Medio", color=color.gray, linestyle=hline.style_dotted)

// Colorear fondo
bgcolor(rsiValue >= overbought ? color.new(color.red, 90) :
        rsiValue <= oversold ? color.new(color.green, 90) : na)

// Condiciones de alerta
alertcondition(ta.crossunder(rsiValue, oversold),
  title="RSI Sobreventa", message="RSI cruzo por debajo de 30 - Posible compra!")
alertcondition(ta.crossover(rsiValue, overbought),
  title="RSI Sobrecompra", message="RSI cruzo por encima de 70 - Posible venta!")
</code></pre>
</div>

<h3>Automatizacion de Alertas</h3>
<div class="highlight-box blue">
<h4>Como Configurar Alertas en TradingView</h4>
<ol>
<li>Crea tu indicador con <code>alertcondition()</code></li>
<li>Anade el indicador al grafico</li>
<li>Haz clic en el icono de alarma (campana) en TradingView</li>
<li>Selecciona tu indicador como condicion</li>
<li>Configura notificacion: push al movil, email, o webhook</li>
<li>Con webhook puedes conectar a Telegram, Discord, o incluso ejecutar trades automaticos</li>
</ol>
</div>

<h3>Strategy Scripts para Backtesting en TradingView</h3>
<div class="highlight-box green">
<h4>Ejemplo: Estrategia de Cruce de Medias con Backtest</h4>
<pre><code>
//@version=5
strategy("Cruce SMA Backtest", overlay=true, default_qty_type=strategy.percent_of_equity, default_qty_value=2)

// Parametros
fast = input.int(20, "SMA Rapida")
slow = input.int(50, "SMA Lenta")

// Calcular
smaFast = ta.sma(close, fast)
smaSlow = ta.sma(close, slow)

// Senales
longCondition = ta.crossover(smaFast, smaSlow)
shortCondition = ta.crossunder(smaFast, smaSlow)

// Ejecutar trades (backtest)
if longCondition
    strategy.entry("Long", strategy.long)
if shortCondition
    strategy.close("Long")

// Visualizar
plot(smaFast, color=color.blue)
plot(smaSlow, color=color.red)
</code></pre>
<p>TradingView mostrara automaticamente las estadisticas del backtest: net profit, win rate, profit factor, max drawdown, y mas.</p>
</div>

<h3>Publicar y Compartir Indicadores</h3>
<div class="highlight-box blue">
<h4>Opciones para tus Scripts</h4>
<ul>
<li><strong>Publicar gratis:</strong> Comparte con la comunidad de TradingView. Ganas reputacion y seguidores.</li>
<li><strong>Publicar con acceso por invitacion:</strong> Solo las personas que tu autorices pueden usar tu indicador. Ideal para vender acceso.</li>
<li><strong>Libreria:</strong> Publica funciones reutilizables que otros programadores pueden importar.</li>
<li><strong>Monetizar:</strong> Vende acceso a tu indicador premium por suscripcion mensual a traves de tu propia web.</li>
</ul>
</div>

<div class="warning-box">
<h4>Consejo Final sobre Pine Script</h4>
<p>No necesitas ser programador experto. Con lo basico puedes crear indicadores muy utiles. TradingView tiene una documentacion excelente (pine-script-docs) y la comunidad responde preguntas rapidamente. Empieza modificando scripts existentes antes de crear los tuyos desde cero.</p>
</div>`,
          keyPoints: [
            "Pine Script es el lenguaje de TradingView para crear indicadores custom, alertas y estrategias de backtest",
            "Estructura basica: //@version=5, indicator(), variables de precio (open, high, low, close), funciones ta.*",
            "alertcondition() permite crear alertas que se envian al movil, email o webhook automaticamente",
            "Strategy scripts permiten backtestear directamente en TradingView con estadisticas completas",
            "Puedes publicar tus indicadores gratis o vender acceso como servicio premium"
          ],
          quiz: [
            { question: "Para que sirve Pine Script?", options: ["Para minar criptomonedas", "Para crear indicadores custom, alertas y estrategias de backtest en TradingView", "Para programar bots de trading en MetaTrader", "Para hackear brokers"], correctIndex: 1, explanation: "Pine Script es el lenguaje de programacion propio de TradingView que permite crear indicadores personalizados, alertas automaticas y scripts de backtesting." },
            { question: "Que funcion de Pine Script usas para detectar cuando una linea cruza por encima de otra?", options: ["ta.sma()", "ta.crossover()", "plot()", "alertcondition()"], correctIndex: 1, explanation: "ta.crossover(a, b) devuelve true cuando la serie 'a' cruza por encima de la serie 'b'. Es la funcion estandar para detectar cruces alcistas." },
            { question: "Cual es la diferencia entre 'indicator' y 'strategy' en Pine Script?", options: ["No hay diferencia", "indicator muestra visualizaciones, strategy permite hacer backtest con entradas y salidas simuladas", "strategy es mas rapido", "indicator es de pago"], correctIndex: 1, explanation: "indicator() es para crear indicadores visuales y alertas. strategy() permite definir entradas y salidas de trades que TradingView simula con datos historicos para mostrar estadisticas de backtest." },
            { question: "Como puedes recibir una notificacion en tu movil cuando tu indicador detecta una senal?", options: ["No es posible", "Usando alertcondition() en el script y configurando una alerta en TradingView", "Enviando un email manualmente", "Pagando una suscripcion especial"], correctIndex: 1, explanation: "Usas alertcondition() en tu script para definir la condicion, luego configuras una alerta en TradingView que envia push notifications a tu movil cuando la condicion se cumple." }
          ],
          practicalExercise: "Abre el Editor de Pine Script en TradingView (icono de codigo en la parte inferior). Copia el ejemplo del 'RSI Pro con Alertas' de esta leccion. Anadelo al grafico de EUR/USD en 1H. Luego modifica: 1) Cambia el periodo del RSI a 21. 2) Anade una media movil SMA de 200 periodos al indicador del RSI. 3) Crea una alerta que se active cuando el RSI cruce por debajo de 25. Experimenta cambiando colores y parametros."
        }
      ]
    },
    {
      id: "mod-6-2",
      title: "Automatizacion y Bots",
      description: "Crea sistemas automatizados de trading",
      icon: "🤖",
      color: "#10B981",
      lessons: [
        {
          id: "6-2-1",
          title: "Creando tu Primer Bot de Trading en Python",
          duration: "35 min",
          content: `
<h2>Tu Primer Bot: De la Teoria a la Practica</h2>
<div class="highlight-box blue"><h4>Que es un Bot de Trading?</h4><p>Un programa que ejecuta tu estrategia automaticamente: analiza el mercado, detecta senales, abre y cierra operaciones sin que tu estes delante de la pantalla.</p></div>
<h3>Arquitectura de un Bot de Trading</h3>
<div class="grid-cards">
<div class="card"><h4>1. Fuente de Datos</h4><p>Obtener precios en tiempo real. APIs: OANDA, Binance, MT5, Alpha Vantage, yfinance.</p></div>
<div class="card"><h4>2. Motor de Estrategia</h4><p>La logica que decide cuando comprar/vender. Tu estrategia codificada en Python.</p></div>
<div class="card"><h4>3. Gestion de Riesgo</h4><p>Calculo automatico de position size, SL/TP, max trades por dia, drawdown limits.</p></div>
<div class="card"><h4>4. Ejecucion</h4><p>Conexion al broker para enviar ordenes reales. API de MT5, OANDA, o exchange.</p></div>
</div>
<h3>Ejemplo: Bot de Cruce de EMAs en Python</h3>
<div class="code-block"><pre><code>import pandas as pd
import numpy as np
from datetime import datetime

class TradingBot:
    def __init__(self, data, balance=10000, risk_pct=0.01):
        self.data = data
        self.balance = balance
        self.risk_pct = risk_pct
        self.trades = []
        self.position = None

    def calculate_signals(self):
        """Calcula EMAs y genera senales"""
        self.data['EMA_21'] = self.data['Close'].ewm(span=21).mean()
        self.data['EMA_50'] = self.data['Close'].ewm(span=50).mean()
        self.data['Signal'] = 0
        # Cruce alcista: EMA 21 cruza por encima de EMA 50
        self.data.loc[
            (self.data['EMA_21'] > self.data['EMA_50']) &
            (self.data['EMA_21'].shift(1) <= self.data['EMA_50'].shift(1)),
            'Signal'] = 1
        # Cruce bajista
        self.data.loc[
            (self.data['EMA_21'] < self.data['EMA_50']) &
            (self.data['EMA_21'].shift(1) >= self.data['EMA_50'].shift(1)),
            'Signal'] = -1

    def backtest(self):
        """Ejecuta el backtest"""
        self.calculate_signals()
        for i, row in self.data.iterrows():
            if row['Signal'] == 1 and not self.position:
                self.position = {
                    'type': 'LONG',
                    'entry': row['Close'],
                    'sl': row['Close'] * 0.998  # 0.2% SL
                }
            elif row['Signal'] == -1 and self.position:
                pnl = row['Close'] - self.position['entry']
                self.balance += pnl * 10000 * self.risk_pct
                self.trades.append({
                    'type': self.position['type'],
                    'entry': self.position['entry'],
                    'exit': row['Close'],
                    'pnl': pnl
                })
                self.position = None

    def get_stats(self):
        """Calcula estadisticas del backtest"""
        if not self.trades:
            return "Sin trades"
        wins = [t for t in self.trades if t['pnl'] > 0]
        losses = [t for t in self.trades if t['pnl'] <= 0]
        win_rate = len(wins)/len(self.trades)*100
        avg_win = np.mean([t['pnl'] for t in wins]) if wins else 0
        avg_loss = abs(np.mean([t['pnl'] for t in losses])) if losses else 1
        profit_factor = (sum(t['pnl'] for t in wins) /
                        abs(sum(t['pnl'] for t in losses))) if losses else float('inf')
        return {
            'Total trades': len(self.trades),
            'Win Rate': f"{win_rate:.1f}%",
            'Avg Win': f"{avg_win:.5f}",
            'Avg Loss': f"{avg_loss:.5f}",
            'Profit Factor': f"{profit_factor:.2f}",
            'Final Balance': f"USD {self.balance:.2f}"
        }
</code></pre></div>
<h3>Automatizacion con MetaTrader 5 (Python)</h3>
<div class="highlight-box green"><h4>Conexion MT5 con Python</h4>
<p>MetaTrader 5 tiene una libreria oficial de Python que permite:</p>
<ul>
<li>Obtener datos historicos y en tiempo real</li>
<li>Abrir y cerrar ordenes automaticamente</li>
<li>Consultar el estado de la cuenta</li>
<li>Todo desde un script de Python</li>
</ul>
<div class="code-block"><pre><code>import MetaTrader5 as mt5

# Conectar a MT5
mt5.initialize()

# Obtener precio actual
tick = mt5.symbol_info_tick("EURUSD")
print(f"Bid: {tick.bid}, Ask: {tick.ask}")

# Abrir una orden de compra
order = mt5.ORDER_TYPE_BUY
request = {
    "action": mt5.TRADE_ACTION_DEAL,
    "symbol": "EURUSD",
    "volume": 0.1,  # 0.1 lotes
    "type": order,
    "price": tick.ask,
    "sl": tick.ask - 0.0030,  # 30 pips SL
    "tp": tick.ask + 0.0060,  # 60 pips TP
    "comment": "Bot EMA Cross",
}
result = mt5.order_send(request)
</code></pre></div></div>
<div class="warning-box"><h4>NUNCA pongas un bot en cuenta real sin:</h4><ul>
<li>Minimo 6 meses de backtest positivo</li>
<li>3 meses de forward test en demo</li>
<li>Gestion de riesgo automatica incorporada</li>
<li>Sistema de apagado de emergencia</li>
<li>Monitoreo diario incluso cuando es automatico</li>
</ul></div>`,
          keyPoints: [
            "Un bot tiene 4 partes: datos, estrategia, riesgo, ejecucion",
            "Python + pandas para backtesting, MT5 API para ejecucion real",
            "SIEMPRE backtestear 6+ meses antes de usar en real",
            "3 meses minimo de forward test en demo",
            "Un bot sin gestion de riesgo es una bomba de tiempo"
          ],
          quiz: [
            { question: "Cuales son las 4 partes principales de un bot de trading?", options: ["HTML, CSS, JS, React", "Datos, Estrategia, Gestion de Riesgo, Ejecucion", "Comprar, Vender, Esperar, Cerrar", "Indicador, Senal, Alerta, Email"], correctIndex: 1, explanation: "Un bot necesita: fuente de datos (precios), motor de estrategia (logica), gestion de riesgo (position sizing, SL), y ejecucion (conexion al broker)." },
            { question: "Cuanto tiempo minimo deberias backtestear un bot antes de ponerlo en real?", options: ["1 semana", "1 mes", "6+ meses de backtest + 3 meses de demo", "No necesita backtest"], correctIndex: 2, explanation: "Minimo 6 meses de backtest historico positivo + 3 meses de forward test en demo para verificar que funciona en condiciones reales." },
            { question: "Que libreria de Python permite conectar directamente con MetaTrader 5?", options: ["pandas", "numpy", "MetaTrader5 (mt5)", "yfinance"], correctIndex: 2, explanation: "La libreria oficial MetaTrader5 (import MetaTrader5 as mt5) permite obtener datos, abrir/cerrar ordenes, y consultar la cuenta desde Python." }
          ]
        }
      ]
    }
  ]
};
