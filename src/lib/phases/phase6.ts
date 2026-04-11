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
<h2>Backtesting: La Ciencia Detrás del Trading</h2>
<div style="display:flex;justify-content:center;margin:20px 0"><svg width="420" height="90" viewBox="0 0 420 90" style="background:#131722;border-radius:10px;border:1px solid #2a2a40"><text x="210" y="15" fill="white" font-size="10" text-anchor="middle" font-weight="bold">STACK DE PYTHON PARA TRADING</text><rect x="8" y="28" width="95" height="35" rx="5" fill="#3b82f615" stroke="#3b82f6"/><text x="55" y="44" fill="#3b82f6" font-size="8" text-anchor="middle" font-weight="bold">pandas</text><text x="55" y="56" fill="#787b86" font-size="6" text-anchor="middle">Datos + DataFrames</text><rect x="110" y="28" width="95" height="35" rx="5" fill="#26a69a15" stroke="#26a69a"/><text x="157" y="44" fill="#26a69a" font-size="8" text-anchor="middle" font-weight="bold">numpy</text><text x="157" y="56" fill="#787b86" font-size="6" text-anchor="middle">Cálculos + Arrays</text><rect x="212" y="28" width="95" height="35" rx="5" fill="#f59e0b15" stroke="#f59e0b"/><text x="259" y="44" fill="#f59e0b" font-size="8" text-anchor="middle" font-weight="bold">yfinance</text><text x="259" y="56" fill="#787b86" font-size="6" text-anchor="middle">Datos mercado</text><rect x="314" y="28" width="100" height="35" rx="5" fill="#8b5cf615" stroke="#8b5cf6"/><text x="364" y="44" fill="#8b5cf6" font-size="8" text-anchor="middle" font-weight="bold">MetaTrader5</text><text x="364" y="56" fill="#787b86" font-size="6" text-anchor="middle">Ejecución real</text><text x="210" y="80" fill="#787b86" font-size="7" text-anchor="middle">pip install pandas numpy yfinance MetaTrader5</text></svg></div>

<div style="display:flex;justify-content:center;margin:20px 0"><svg width="460" height="90" viewBox="0 0 460 90" style="background:#131722;border-radius:10px;border:1px solid #2a2a40"><text x="230" y="15" fill="white" font-size="10" text-anchor="middle" font-weight="bold">WORKFLOW DE BACKTESTING</text><rect x="8" y="28" width="85" height="35" rx="6" fill="#3b82f615" stroke="#3b82f6"/><text x="50" y="44" fill="#3b82f6" font-size="7" text-anchor="middle" font-weight="bold">1. DATOS</text><text x="50" y="56" fill="#787b86" font-size="6" text-anchor="middle">Históricos reales</text><text x="100" y="48" fill="#555" font-size="10">→</text><rect x="107" y="28" width="85" height="35" rx="6" fill="#8b5cf615" stroke="#8b5cf6"/><text x="149" y="44" fill="#8b5cf6" font-size="7" text-anchor="middle" font-weight="bold">2. REGLAS</text><text x="149" y="56" fill="#787b86" font-size="6" text-anchor="middle">Entrada/Salida/SL</text><text x="199" y="48" fill="#555" font-size="10">→</text><rect x="206" y="28" width="85" height="35" rx="6" fill="#f59e0b15" stroke="#f59e0b"/><text x="248" y="44" fill="#f59e0b" font-size="7" text-anchor="middle" font-weight="bold">3. EJECUTAR</text><text x="248" y="56" fill="#787b86" font-size="6" text-anchor="middle">Simular trades</text><text x="298" y="48" fill="#555" font-size="10">→</text><rect x="305" y="28" width="75" height="35" rx="6" fill="#26a69a15" stroke="#26a69a"/><text x="342" y="44" fill="#26a69a" font-size="7" text-anchor="middle" font-weight="bold">4. MEDIR</text><text x="342" y="56" fill="#787b86" font-size="6" text-anchor="middle">Win%, R:R, DD</text><text x="387" y="48" fill="#555" font-size="10">→</text><rect x="394" y="28" width="60" height="35" rx="6" fill="#ec489915" stroke="#ec4899"/><text x="424" y="44" fill="#ec4899" font-size="7" text-anchor="middle" font-weight="bold">5. AJUSTAR</text><text x="424" y="56" fill="#787b86" font-size="6" text-anchor="middle">Optimizar</text><text x="230" y="82" fill="#787b86" font-size="7" text-anchor="middle">Mínimo 50-100 trades para resultados estadísticamente válidos</text></svg></div>

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
<li><strong>Conocer tus números:</strong> Win rate, profit factor, drawdown máximo esperado</li>
<li><strong>Confianza real:</strong> Cuando llevas 5 perdidas seguidas, sabes que tu backtest mostro rachas de 8 y aun así fue rentable</li>
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
<li>Ideal para estrategias de acción del precio</li>
<li>Gratis con TradingView</li>
</ul>
</div>
<div class="comparison-col">
<h4>Automatizado</h4>
<ul>
<li>Usas codigo (Python, Pine Script)</li>
<li>Pruebas miles de operaciones en segundos</li>
<li>Mas rápido y objetivo (sin sesgo)</li>
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
<li><strong>Registra cada trade</strong> en una hoja de cálculo: entrada, SL, TP, resultado</li>
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
<li><strong>Solucion:</strong> Manten tu estrategia SIMPLE. 3-5 reglas máximo.</li>
<li><strong>Test fuera de muestra:</strong> Backtestea en un período (2020-2023) y luego válida en otro período que NO usaste (2024). Si funciona en ambos, es robusta.</li>
<li><strong>Walk-forward analysis:</strong> Divide tus datos en segmentos y válida secuencialmente.</li>
</ul>
</div>

<div class="highlight-box green">
<h4>La Regla de Oro del Backtesting</h4>
<p>Si tu estrategia no es rentable en al menos 200 trades de backtest en MULTIPLES condiciones de mercado (tendencia, rango, volatilidad alta/baja), NO LA OPERES CON DINERO REAL. El backtest es tu filtro número uno.</p>
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
            { question: "Cual es el tamano de muestra mínimo recomendado para un backtest confiable?", options: ["10 trades", "30 trades", "100-200 trades", "Solo 5 trades buenos"], correctIndex: 2, explanation: "Se necesitan al menos 100-200 trades para que los resultados del backtest sean estadisticamente significativos y confiables." },
            { question: "Que es el overfitting?", options: ["Cuando tu estrategia funciona en todos los mercados", "Cuando ajustas tanto los parametros que funciona perfecto en el pasado pero falla en datos nuevos", "Cuando usas demasiado apalancamiento", "Cuando operas muchos pares a la vez"], correctIndex: 1, explanation: "El overfitting es sobre-optimizar tu estrategia para datos historicos especificos. Funciona perfecto en el backtest pero falla en operaciones reales porque no es una estrategia robusta." },
            { question: "Un profit factor de 0.8 significa que:", options: ["Tu estrategia es muy rentable", "Estas perdiendo dinero — las perdidas superan las ganancias", "Necesitas más datos", "Es un buen resultado para empezar"], correctIndex: 1, explanation: "Un profit factor por debajo de 1.0 significa que las perdidas totales superan las ganancias totales. Necesitas un profit factor de al menos 1.5 para que la estrategia sea viable." }
          ],
          practicalExercise: "Abre TradingView, activa el modo Replay en EUR/USD gráfico de 1H. Ve atras 6 meses. Aplica UNA estrategia simple (ej: rebote en soporte/resistencia con confirmación de vela). Opera al menos 30 trades anotando en Excel: fecha, dirección, entrada, SL, TP, resultado en pips, resultado en %. Al final calcula: win rate, profit factor, max drawdown, y esperanza matematica."
        },
        {
          id: "6-1-2",
          title: "Python para Trading y Bots",
          duration: "45 min",
          content: `
<h2>Python: El Lenguaje del Trader Moderno</h2>
<div class="analogy-box">
<h3>Python es tu Asistente Personal</h3>
<p>Imagina tener un asistente que trabaja 24/7, nunca se cansa, no tiene emociones y puede analizar miles de datos en segundos. Eso es lo que Python hace por tu trading. No necesitas ser ingeniero — con lo básico puedes crear herramientas muy poderosas.</p>
</div>

<h3>Por Que Python para Trading?</h3>
<div class="grid-cards">
<div class="card"><h4>Gratuito y Open Source</h4><p>Python es gratis. Las librerias de trading son gratis. No necesitas pagar nada para empezar.</p></div>
<div class="card"><h4>Facil de Aprender</h4><p>Python es el lenguaje más fácil de aprender. Su sintaxis es casi como leer ingles.</p></div>
<div class="card"><h4>Librerias Poderosas</h4><p>pandas, numpy, matplotlib, yfinance — herramientas especializadas para datos financieros.</p></div>
<div class="card"><h4>Comunidad Enorme</h4><p>Miles de tutoriales, foros, y codigo gratuito para trading. Nunca estaras solo.</p></div>
</div>

<h3>Las Librerias Esenciales</h3>
<div class="highlight-box blue">
<h4>Tu Kit de Herramientas en Python</h4>
<ul>
<li><strong>pandas:</strong> Manejo de datos en tablas (DataFrames). Es el Excel de Python pero 1000x más poderoso.</li>
<li><strong>numpy:</strong> Calculos matematicos rapidos. Media, desviacion estandar, correlaciones.</li>
<li><strong>matplotlib / plotly:</strong> Crear gráficos y visualizaciones de tus resultados.</li>
<li><strong>yfinance:</strong> Descargar datos de precios historicos GRATIS (acciones, crypto, forex).</li>
<li><strong>ta-lib / pandas-ta:</strong> Calcular indicadores tecnicos (RSI, MACD, Bollinger, etc.) automáticamente.</li>
</ul>
</div>

<h3>Obteniendo Datos del Mercado</h3>
<div class="highlight-box green">
<h4>Ejemplo: Descargar Datos con yfinance</h4>
<pre><code>
import yfinance as yf
import pandas as pd

# Descargar datos de EUR/USD (ultimos 2 años)
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

# Generar señales
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
<p>Un bot de trading es tan bueno como la estrategia detras de el. Si tu estrategia no es rentable en backtesting manual, automatizarla no la hara rentable. Primero válida la estrategia manualmente, luego automatiza. Los bots que "prometen" ganancias garantizadas son SIEMPRE estafas.</p>
</div>`,
          keyPoints: [
            "Python es gratuito, fácil de aprender, y tiene librerias poderosas para trading (pandas, numpy, yfinance)",
            "yfinance permite descargar datos historicos gratis para backtesting en Python",
            "APIs como OANDA y Binance permiten obtener datos en tiempo real y ejecutar trades automaticos",
            "MetaTrader5 se integra con Python para automatizar operaciones en forex",
            "Un bot solo es tan bueno como la estrategia detras — primero válida manualmente, luego automatiza",
            "Python puede enviar alertas a Telegram cuando se cumplan condiciones de tu estrategia"
          ],
          quiz: [
            { question: "Cual libreria de Python se usa para descargar datos historicos de precios gratis?", options: ["numpy", "matplotlib", "yfinance", "tensorflow"], correctIndex: 2, explanation: "yfinance permite descargar datos historicos gratuitos de Yahoo Finance para acciones, forex y criptomonedas." },
            { question: "Para que sirve pandas en el contexto de trading?", options: ["Para crear gráficos bonitos", "Para manejar datos en tablas (DataFrames), como un Excel super poderoso", "Para enviar ordenes al broker", "Para minar criptomonedas"], correctIndex: 1, explanation: "pandas es la libreria fundamental para manejo de datos tabulares en Python. Permite organizar, filtrar y analizar datos de precios de forma eficiente." },
            { question: "Que es lo PRIMERO que debes hacer antes de automatizar una estrategia con un bot?", options: ["Conectar la API del broker", "Validar que la estrategia es rentable con backtesting manual", "Comprar un servidor VPS", "Aprender machine learning"], correctIndex: 1, explanation: "Antes de automatizar, debes validar que tu estrategia es rentable con backtesting manual. Automatizar una estrategia perdedora solo pierde dinero más rápido." },
            { question: "Que libreria permite controlar MetaTrader 5 desde Python?", options: ["yfinance", "pandas", "MetaTrader5 (mt5)", "requests"], correctIndex: 2, explanation: "La libreria MetaTrader5 permite conectar Python con MT5 para obtener datos, enviar ordenes y gestionar posiciones de forma automatizada." }
          ],
          practicalExercise: "Instala Python (python.org) y las librerias: pip install yfinance pandas numpy matplotlib. Luego crea un script que: 1) Descargue datos de EUR/USD de los ultimos 2 años. 2) Calcule la SMA de 20 y 50 periodos. 3) Cuente cuantas veces la SMA20 cruzo por encima de la SMA50 (señal de compra) y por debajo (señal de venta). 4) Imprima los resultados. Si no tienes experiencia con Python, usa ChatGPT para ayudarte con el codigo."
        },
        {
          id: "6-1-3",
          title: "Pine Script: Indicadores Custom en TradingView",
          duration: "40 min",
          content: `
<h2>Pine Script: Tu Propio Indicador en TradingView</h2>
<div style="display:flex;justify-content:center;margin:20px 0"><svg width="420" height="85" viewBox="0 0 420 85" style="background:#131722;border-radius:10px;border:1px solid #2a2a40"><text x="210" y="15" fill="white" font-size="10" text-anchor="middle" font-weight="bold">PINE SCRIPT: INDICADORES CUSTOM</text><rect x="8" y="28" width="95" height="32" rx="5" fill="#26a69a15" stroke="#26a69a"/><text x="55" y="42" fill="#26a69a" font-size="7" text-anchor="middle" font-weight="bold">INDICATOR</text><text x="55" y="54" fill="#787b86" font-size="6" text-anchor="middle">Visualización</text><rect x="110" y="28" width="95" height="32" rx="5" fill="#3b82f615" stroke="#3b82f6"/><text x="157" y="42" fill="#3b82f6" font-size="7" text-anchor="middle" font-weight="bold">STRATEGY</text><text x="157" y="54" fill="#787b86" font-size="6" text-anchor="middle">Backtest auto</text><rect x="212" y="28" width="100" height="32" rx="5" fill="#f59e0b15" stroke="#f59e0b"/><text x="262" y="42" fill="#f59e0b" font-size="7" text-anchor="middle" font-weight="bold">ALERTCONDITION</text><text x="262" y="54" fill="#787b86" font-size="6" text-anchor="middle">Notificaciones</text><rect x="319" y="28" width="93" height="32" rx="5" fill="#8b5cf615" stroke="#8b5cf6"/><text x="365" y="42" fill="#8b5cf6" font-size="7" text-anchor="middle" font-weight="bold">PUBLISH</text><text x="365" y="54" fill="#787b86" font-size="6" text-anchor="middle">Compartir</text><text x="210" y="75" fill="#787b86" font-size="7" text-anchor="middle">TradingView Editor → Crear → Probar → Publicar</text></svg></div>
<div class="analogy-box">
<h3>Pine Script es como Crear tu Propia Receta</h3>
<p>TradingView tiene cientos de indicadores, pero ninguno es EXACTAMENTE lo que necesitas. Pine Script te permite crear TU receta perfecta: combinar indicadores, crear condiciones especificas, y generar alertas automaticas. Es como tener un chef personal que cocina exactamente lo que tu quieres.</p>
</div>

<h3>Que es Pine Script?</h3>
<p><strong>Pine Script</strong> es el lenguaje de programacion de TradingView. Te permite crear:</p>
<div class="grid-cards">
<div class="card"><h4>Indicadores Custom</h4><p>Combina RSI + Volumen + tu logica personal en un solo indicador que te de señales claras.</p></div>
<div class="card"><h4>Alertas Automaticas</h4><p>Recibe notificaciones en tu telefono cuando se cumplan TUS condiciones especificas.</p></div>
<div class="card"><h4>Strategy Scripts</h4><p>Backtestea estrategias directamente en TradingView con resultados detallados y gráficos.</p></div>
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

// Dibujar en el gráfico
plot(sma20, color=color.blue, title="SMA 20")
plot(sma50, color=color.red, title="SMA 50")

// Detectar cruce alcista
crossUp = ta.crossover(sma20, sma50)
crossDown = ta.crossunder(sma20, sma50)

// Marcar cruces en el gráfico
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
<div class="card"><h4>Condicionales</h4><p><code>if/else</code>, operadores logicos (<code>and</code>, <code>or</code>), comparaciones (<code>></code>, <code><</code>, <code>==</code>) para crear logica de señales.</p></div>
<div class="card"><h4>Visualizacion</h4><p><code>plot()</code>, <code>plotshape()</code>, <code>bgcolor()</code>, <code>label.new()</code> — funciones para dibujar en el gráfico.</p></div>
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
<li>Anade el indicador al gráfico</li>
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
<p>TradingView mostrara automáticamente las estadisticas del backtest: net profit, win rate, profit factor, max drawdown, y más.</p>
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
<p>No necesitas ser programador experto. Con lo básico puedes crear indicadores muy utiles. TradingView tiene una documentacion excelente (pine-script-docs) y la comunidad responde preguntas rapidamente. Empieza modificando scripts existentes antes de crear los tuyos desde cero.</p>
</div>`,
          keyPoints: [
            "Pine Script es el lenguaje de TradingView para crear indicadores custom, alertas y estrategias de backtest",
            "Estructura basica: //@version=5, indicator(), variables de precio (open, high, low, close), funciones ta.*",
            "alertcondition() permite crear alertas que se envian al movil, email o webhook automáticamente",
            "Strategy scripts permiten backtestear directamente en TradingView con estadisticas completas",
            "Puedes publicar tus indicadores gratis o vender acceso como servicio premium"
          ],
          quiz: [
            { question: "Para que sirve Pine Script?", options: ["Para minar criptomonedas", "Para crear indicadores custom, alertas y estrategias de backtest en TradingView", "Para programar bots de trading en MetaTrader", "Para hackear brokers"], correctIndex: 1, explanation: "Pine Script es el lenguaje de programacion propio de TradingView que permite crear indicadores personalizados, alertas automaticas y scripts de backtesting." },
            { question: "Que funcion de Pine Script usas para detectar cuando una linea cruza por encima de otra?", options: ["ta.sma()", "ta.crossover()", "plot()", "alertcondition()"], correctIndex: 1, explanation: "ta.crossover(a, b) devuelve true cuando la serie 'a' cruza por encima de la serie 'b'. Es la funcion estandar para detectar cruces alcistas." },
            { question: "Cual es la diferencia entre 'indicator' y 'strategy' en Pine Script?", options: ["No hay diferencia", "indicator muestra visualizaciones, strategy permite hacer backtest con entradas y salidas simuladas", "strategy es más rápido", "indicator es de pago"], correctIndex: 1, explanation: "indicator() es para crear indicadores visuales y alertas. strategy() permite definir entradas y salidas de trades que TradingView simula con datos historicos para mostrar estadisticas de backtest." },
            { question: "Como puedes recibir una notificacion en tu movil cuando tu indicador detecta una señal?", options: ["No es posible", "Usando alertcondition() en el script y configurando una alerta en TradingView", "Enviando un email manualmente", "Pagando una suscripcion especial"], correctIndex: 1, explanation: "Usas alertcondition() en tu script para definir la condicion, luego configuras una alerta en TradingView que envia push notifications a tu movil cuando la condicion se cumple." }
          ],
          practicalExercise: "Abre el Editor de Pine Script en TradingView (icono de codigo en la parte inferior). Copia el ejemplo del 'RSI Pro con Alertas' de esta lección. Anadelo al gráfico de EUR/USD en 1H. Luego modifica: 1) Cambia el período del RSI a 21. 2) Anade una media movil SMA de 200 periodos al indicador del RSI. 3) Crea una alerta que se active cuando el RSI cruce por debajo de 25. Experimenta cambiando colores y parametros."
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
<div class="highlight-box blue"><h4>Que es un Bot de Trading?</h4><p>Un programa que ejecuta tu estrategia automáticamente: analiza el mercado, detecta señales, abre y cierra operaciones sin que tu estes delante de la pantalla.</p></div>
<h3>Arquitectura de un Bot de Trading</h3>
<div class="grid-cards">
<div class="card"><h4>1. Fuente de Datos</h4><p>Obtener precios en tiempo real. APIs: OANDA, Binance, MT5, Alpha Vantage, yfinance.</p></div>
<div class="card"><h4>2. Motor de Estrategia</h4><p>La logica que decide cuando comprar/vender. Tu estrategia codificada en Python.</p></div>
<div class="card"><h4>3. Gestion de Riesgo</h4><p>Calculo automático de position size, SL/TP, max trades por dia, drawdown limits.</p></div>
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
        """Calcula EMAs y genera señales"""
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
<li>Abrir y cerrar ordenes automáticamente</li>
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
<li>Gestion de riesgo automática incorporada</li>
<li>Sistema de apagado de emergencia</li>
<li>Monitoreo diario incluso cuando es automático</li>
</ul></div>`,
          keyPoints: [
            "Un bot tiene 4 partes: datos, estrategia, riesgo, ejecucion",
            "Python + pandas para backtesting, MT5 API para ejecucion real",
            "SIEMPRE backtestear 6+ meses antes de usar en real",
            "3 meses mínimo de forward test en demo",
            "Un bot sin gestión de riesgo es una bomba de tiempo"
          ],
          quiz: [
            { question: "Cuales son las 4 partes principales de un bot de trading?", options: ["HTML, CSS, JS, React", "Datos, Estrategia, Gestion de Riesgo, Ejecucion", "Comprar, Vender, Esperar, Cerrar", "Indicador, Senal, Alerta, Email"], correctIndex: 1, explanation: "Un bot necesita: fuente de datos (precios), motor de estrategia (logica), gestión de riesgo (position sizing, SL), y ejecucion (conexion al broker)." },
            { question: "Cuanto tiempo mínimo deberias backtestear un bot antes de ponerlo en real?", options: ["1 semana", "1 mes", "6+ meses de backtest + 3 meses de demo", "No necesita backtest"], correctIndex: 2, explanation: "Minimo 6 meses de backtest historico positivo + 3 meses de forward test en demo para verificar que funciona en condiciones reales." },
            { question: "Que libreria de Python permite conectar directamente con MetaTrader 5?", options: ["pandas", "numpy", "MetaTrader5 (mt5)", "yfinance"], correctIndex: 2, explanation: "La libreria oficial MetaTrader5 (import MetaTrader5 as mt5) permite obtener datos, abrir/cerrar ordenes, y consultar la cuenta desde Python." }
          ]
        }
      ]
    },
    {
      id: "mod-6-3",
      title: "Ciencia de Datos para Trading",
      description: "APIs, Machine Learning y despliegue de bots",
      icon: "🧬",
      color: "#8B5CF6",
      lessons: [
        {
          id: "6-3-1",
          title: "APIs y Fuentes de Datos de Mercado",
          duration: "25 min",
          content: `
<h2>Obteniendo Datos Reales del Mercado</h2>
<div style="display:flex;justify-content:center;margin:20px 0"><svg width="420" height="85" viewBox="0 0 420 85" style="background:#131722;border-radius:10px;border:1px solid #2a2a40"><text x="210" y="15" fill="white" font-size="10" text-anchor="middle" font-weight="bold">ML EN TRADING: FUNCIONA vs NO FUNCIONA</text><rect x="8" y="28" width="200" height="32" rx="6" fill="#26a69a10" stroke="#26a69a44"/><text x="108" y="42" fill="#26a69a" font-size="8" text-anchor="middle" font-weight="bold">✅ Clasificar régimen | Detectar patrones</text><text x="108" y="54" fill="#787b86" font-size="6" text-anchor="middle">Optimizar parámetros | Filtrar setups</text><rect x="215" y="28" width="198" height="32" rx="6" fill="#ef535010" stroke="#ef535044"/><text x="314" y="42" fill="#ef5350" font-size="8" text-anchor="middle" font-weight="bold">❌ Predecir precio exacto</text><text x="314" y="54" fill="#787b86" font-size="6" text-anchor="middle">Reemplazar al trader | Ganar siempre</text><text x="210" y="75" fill="#f59e0b" font-size="8" text-anchor="middle" font-weight="bold">ML = herramienta complementaria, NO varita mágica</text></svg></div>
<div style="display:flex;justify-content:center;margin:20px 0"><svg width="420" height="85" viewBox="0 0 420 85" style="background:#131722;border-radius:10px;border:1px solid #2a2a40"><text x="210" y="15" fill="white" font-size="10" text-anchor="middle" font-weight="bold">FUENTES DE DATOS PARA TRADING</text><rect x="8" y="28" width="95" height="32" rx="5" fill="#26a69a15" stroke="#26a69a"/><text x="55" y="42" fill="#26a69a" font-size="7" text-anchor="middle" font-weight="bold">yfinance</text><text x="55" y="54" fill="#787b86" font-size="6" text-anchor="middle">Acciones (gratis)</text><rect x="110" y="28" width="95" height="32" rx="5" fill="#3b82f615" stroke="#3b82f6"/><text x="157" y="42" fill="#3b82f6" font-size="7" text-anchor="middle" font-weight="bold">OANDA API</text><text x="157" y="54" fill="#787b86" font-size="6" text-anchor="middle">Forex (gratis)</text><rect x="212" y="28" width="95" height="32" rx="5" fill="#f59e0b15" stroke="#f59e0b"/><text x="259" y="42" fill="#f59e0b" font-size="7" text-anchor="middle" font-weight="bold">Binance API</text><text x="259" y="54" fill="#787b86" font-size="6" text-anchor="middle">Crypto (gratis)</text><rect x="314" y="28" width="98" height="32" rx="5" fill="#8b5cf615" stroke="#8b5cf6"/><text x="363" y="42" fill="#8b5cf6" font-size="7" text-anchor="middle" font-weight="bold">Alpha Vantage</text><text x="363" y="54" fill="#787b86" font-size="6" text-anchor="middle">Multi (gratis)</text><text x="210" y="75" fill="#26a69a" font-size="7" text-anchor="middle" font-weight="bold">Todas las APIs tienen versión gratuita suficiente para empezar</text></svg></div>
<div class="highlight-box blue"><h4>Sin datos, no hay trading algorítmico</h4><p>Todo bot necesita datos: precios historicos para backtest y precios en tiempo real para operar. Aqui aprendes de donde sacarlos.</p></div>
<h3>Fuentes de Datos Gratuitas</h3>
<div class="grid-cards">
<div class="card"><h4>Yahoo Finance (yfinance)</h4><p>Datos historicos de acciones, indices, ETFs, cripto. Gratis, fácil de usar. Limitado para Forex intraddia.</p>
<div class="code-block"><pre><code>import yfinance as yf
data = yf.download("EURUSD=X", period="1y", interval="1d")
print(data.tail())</code></pre></div></div>
<div class="card"><h4>OANDA API</h4><p>Datos Forex en tiempo real y historicos. Gratis con cuenta demo. Excelente para Forex.</p></div>
<div class="card"><h4>Binance API</h4><p>Datos cripto en tiempo real. Gratis. La mejor fuente para criptomonedas.</p></div>
<div class="card"><h4>Alpha Vantage</h4><p>Datos de acciones y Forex. API key gratuita con limite de 5 llamadas/minuto.</p></div>
</div>
<h3>Fuentes de Datos Profesionales (de pago)</h3>
<div class="grid-cards">
<div class="card"><h4>Polygon.io</h4><p>Datos tick-by-tick de acciones US. Desde 29$/mes. Calidad institucional.</p></div>
<div class="card"><h4>Quandl / Nasdaq Data</h4><p>Datos economicos y financieros. Fundamental + precio. Desde 50$/mes.</p></div>
</div>
<h3>Almacenamiento de Datos</h3>
<div class="strategy-box"><h4>Workflow Recomendado</h4><ol>
<li><strong>Descarga:</strong> Usa yfinance/OANDA API para descargar historicos</li>
<li><strong>Guarda en CSV/Parquet:</strong> No descargues cada vez, guarda localmente</li>
<li><strong>Base de datos (avanzado):</strong> SQLite o PostgreSQL para datasets grandes</li>
<li><strong>Actualiza incrementalmente:</strong> Solo descarga datos nuevos cada dia</li>
</ol></div>
<div class="code-block"><pre><code># Descargar y guardar datos
import yfinance as yf
import pandas as pd

# Descargar 5 años de datos diarios
data = yf.download("SPY", period="5y", interval="1d")
data.to_csv("spy_daily.csv")

# Cargar despues sin re-descargar
data = pd.read_csv("spy_daily.csv", index_col=0, parse_dates=True)
print(f"Datos: {len(data)} dias desde {data.index[0]} hasta {data.index[-1]}")</code></pre></div>
<h3>Datos en Tiempo Real</h3>
<div class="highlight-box green"><h4>WebSockets para Tiempo Real</h4><p>Para datos en vivo, las APIs usan WebSockets (conexion permanente). Recibes cada tick/vela al instante.</p>
<div class="code-block"><pre><code># Ejemplo con Binance WebSocket (cripto)
import websocket
import json

def on_message(ws, message):
    data = json.loads(message)
    price = float(data['p'])
    print(f"BTC/USDT: {price}")

ws = websocket.WebSocketApp(
    "wss://stream.binance.com:9443/ws/btcusdt@trade",
    on_message=on_message
)
ws.run_forever()</code></pre></div></div>`,
          keyPoints: [
            "yfinance: datos gratuitos de acciones/indices/cripto (ideal para empezar)",
            "OANDA API: la mejor fuente gratuita para datos Forex",
            "Guarda datos localmente en CSV para no re-descargar cada vez",
            "WebSockets para datos en tiempo real (tick by tick)",
            "Para backtesting necesitas mínimo 1-2 años de datos historicos"
          ],
          quiz: [
            { question: "Cual es la mejor fuente gratuita de datos Forex?", options: ["Yahoo Finance", "OANDA API (con cuenta demo)", "Google Finance", "Twitter"], correctIndex: 1, explanation: "OANDA ofrece datos Forex historicos y en tiempo real gratuitamente con una cuenta demo. Es la fuente estandar para Forex algorítmico." },
            { question: "Porque deberias guardar los datos localmente en CSV?", options: ["Porque son más bonitos", "Para no tener que re-descargar cada vez que ejecutas tu codigo (mas rápido y eficiente)", "Porque las APIs son de pago", "No necesitas guardarlos"], correctIndex: 1, explanation: "Descargar datos cada vez es lento y puede alcanzar limites de la API. Guardando en CSV, cargas en milisegundos." },
            { question: "Que tecnologia se usa para recibir datos de precios en tiempo real?", options: ["HTTP requests cada segundo", "WebSockets (conexion permanente)", "Email", "FTP"], correctIndex: 1, explanation: "WebSockets mantienen una conexion abierta y reciben datos instantaneamente cuando hay un nuevo tick/trade." }
          ]
        },
        {
          id: "6-3-2",
          title: "Machine Learning Basico para Trading",
          duration: "30 min",
          content: `
<h2>Machine Learning Aplicado al Trading</h2>
<div style="display:flex;justify-content:center;margin:20px 0"><svg width="420" height="90" viewBox="0 0 420 90" style="background:#131722;border-radius:10px;border:1px solid #2a2a40"><text x="210" y="15" fill="white" font-size="10" text-anchor="middle" font-weight="bold">DEPLOY DE BOT 24/7</text><rect x="8" y="28" width="90" height="35" rx="5" fill="#3b82f615" stroke="#3b82f6"/><text x="53" y="44" fill="#3b82f6" font-size="8" text-anchor="middle" font-weight="bold">TU CÓDIGO</text><text x="53" y="56" fill="#787b86" font-size="6" text-anchor="middle">Python bot</text><text x="105" y="48" fill="#555" font-size="10">→</text><rect x="112" y="28" width="95" height="35" rx="5" fill="#8b5cf615" stroke="#8b5cf6"/><text x="159" y="44" fill="#8b5cf6" font-size="8" text-anchor="middle" font-weight="bold">VPS 5-20€/mes</text><text x="159" y="56" fill="#787b86" font-size="6" text-anchor="middle">DigitalOcean/Vultr</text><text x="214" y="48" fill="#555" font-size="10">→</text><rect x="221" y="28" width="95" height="35" rx="5" fill="#26a69a15" stroke="#26a69a"/><text x="268" y="44" fill="#26a69a" font-size="8" text-anchor="middle" font-weight="bold">CRON / 24/7</text><text x="268" y="56" fill="#787b86" font-size="6" text-anchor="middle">Ejecuta sin parar</text><text x="323" y="48" fill="#555" font-size="10">→</text><rect x="330" y="28" width="82" height="35" rx="5" fill="#f59e0b15" stroke="#f59e0b"/><text x="371" y="44" fill="#f59e0b" font-size="8" text-anchor="middle" font-weight="bold">TELEGRAM</text><text x="371" y="56" fill="#787b86" font-size="6" text-anchor="middle">Alertas al móvil</text><text x="210" y="80" fill="#26a69a" font-size="8" text-anchor="middle" font-weight="bold">Tu bot opera mientras duermes, comes o viajas</text></svg></div>
<div class="warning-box"><h4>Expectativas Realistas</h4><p>ML NO es una varita magica. La mayoria de modelos de ML en trading FALLAN en produccion. Usalo como herramienta complementaria, no como tu única estrategia. El mercado es más complejo que cualquier algoritmo.</p></div>
<h3>Aplicaciones Reales de ML en Trading</h3>
<div class="grid-cards">
<div class="card green-border"><h4>Clasificacion de Regimenes</h4><p>Detectar si el mercado esta en tendencia, rango, o alta volatilidad para adaptar tu estrategia automáticamente.</p></div>
<div class="card green-border"><h4>Deteccion de Patrones</h4><p>Identificar automáticamente patrones de velas, figuras chartistas, o setups de Price Action.</p></div>
<div class="card yellow-border"><h4>Prediccion de Direccion</h4><p>Predecir si el precio subira o bajara. Funciona a corto plazo pero es MUY difícil de hacer bien.</p></div>
<div class="card red-border"><h4>Prediccion de Precio Exacto</h4><p>Predecir el precio exacto futuro. CASI IMPOSIBLE con precision util. No pierdas tiempo en esto.</p></div>
</div>
<h3>Tu Primer Modelo: Random Forest para Clasificar Tendencia</h3>
<div class="code-block"><pre><code>import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report

# Preparar features (indicadores como columnas)
data = pd.read_csv("eurusd_daily.csv")
data['SMA_20'] = data['Close'].rolling(20).mean()
data['SMA_50'] = data['Close'].rolling(50).mean()
data['RSI'] = compute_rsi(data['Close'], 14)  # funcion propia
data['ATR'] = compute_atr(data, 14)

# Target: precio sube (1) o baja (0) en los próximos 5 dias
data['Target'] = (data['Close'].shift(-5) > data['Close']).astype(int)
data = data.dropna()

# Features y target
features = ['SMA_20', 'SMA_50', 'RSI', 'ATR']
X = data[features]
y = data['Target']

# Split 80/20
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, shuffle=False  # NO shuffle en time series!
)

# Entrenar modelo
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Evaluar
predictions = model.predict(X_test)
print(classification_report(y_test, predictions))</code></pre></div>
<h3>Errores CRITICOS de ML en Trading</h3>
<div class="grid-cards">
<div class="card red-border"><h4>1. Look-ahead Bias</h4><p>Usar datos del futuro para predecir. Ej: calcular RSI con datos que incluyen el dia que intentas predecir. SIEMPRE usa shift().</p></div>
<div class="card red-border"><h4>2. Overfitting</h4><p>El modelo "memoriza" datos pasados en vez de aprender patrones. Un Sharpe de 5.0 en backtest que pierde en real = overfitting.</p></div>
<div class="card red-border"><h4>3. Shuffle en Time Series</h4><p>NUNCA hagas shuffle en datos de tiempo. El train set SIEMPRE debe ser anterior al test set cronologicamente.</p></div>
<div class="card red-border"><h4>4. No incluir costes</h4><p>Si no incluyes spreads, comisiones y slippage, tu backtest sera irrealmente optimista.</p></div>
</div>
<div class="highlight-box blue"><h4>El Enfoque Pragmatico</h4><p>En vez de intentar que ML prediga el mercado, usalo para:</p>
<ul>
<li><strong>Filtrar:</strong> "De mis 10 setups diarios, cuales tienen mayor probabilidad segun historico?"</li>
<li><strong>Optimizar:</strong> "Que parametros funcionan mejor para mi estrategia en diferentes condiciones?"</li>
<li><strong>Clasificar:</strong> "Estamos en mercado trending o ranging? Adapto mi enfoque."</li>
</ul>
<p>Esto es MUCHO más realista y util que intentar predecir el precio.</p></div>`,
          keyPoints: [
            "ML NO es magia - la mayoria de modelos fallan en produccion",
            "Usos reales: clasificacion de regimenes, deteccion de patrones, optimizacion de parametros",
            "NUNCA hagas shuffle en datos de tiempo (el train debe ser ANTES del test)",
            "Overfitting es el enemigo #1 - un backtest perfecto que falla en real",
            "Enfoque pragmatico: usar ML para filtrar y clasificar, no para predecir precios"
          ],
          quiz: [
            { question: "Cual es el error más comun al usar ML en trading?", options: ["Usar Python", "Overfitting - el modelo memoriza datos pasados y no funciona en real", "Usar demasiados datos", "No usar suficientes indicadores"], correctIndex: 1, explanation: "Overfitting ocurre cuando el modelo se ajusta demasiado a los datos de entrenamiento. Funciona perfecto en backtest pero pierde en real." },
            { question: "Por que NUNCA debes hacer shuffle en datos de time series?", options: ["Porque es más lento", "Porque mezclar datos temporales crea look-ahead bias - el modelo veria datos del futuro", "No hay razon, siempre se puede hacer shuffle", "Porque Python no lo permite"], correctIndex: 1, explanation: "En time series, shuffle mezcla pasado y futuro. El modelo entrenaria con datos de 2024 para predecir 2023, lo cual es trampa." },
            { question: "Cual es el uso MAS realista y util de ML en trading?", options: ["Predecir el precio exacto del Bitcoin mañana", "Clasificar el regimen de mercado (tendencia/rango) para adaptar la estrategia", "Reemplazar completamente al trader humano", "Hackear el mercado"], correctIndex: 1, explanation: "Clasificar si el mercado esta en tendencia o rango es un uso práctico y realista de ML. Permite adaptar tu estrategia automáticamente segun las condiciones." }
          ]
        },
        {
          id: "6-3-3",
          title: "Desplegando tu Bot 24/7 en la Nube",
          duration: "25 min",
          content: `
<h2>Tu Bot Funcionando 24/7 sin tu PC Encendido</h2>
<div class="analogy-box"><h3>El Empleado que Nunca Duerme</h3><p>Tu bot en la nube es como un empleado que trabaja 24/7 sin vacaciones, sin emociones, sin cansancio. Ejecuta tu estrategia perfectamente mientras tu duermes, comes o viajas.</p></div>
<h3>Opciones de Hosting para tu Bot</h3>
<div class="grid-cards">
<div class="card"><h4>VPS (Servidor Privado Virtual)</h4><p>Un ordenador remoto que esta siempre encendido. Desde 5-20 euros/mes. La opcion más popular para bots de trading.</p>
<p><strong>Proveedores:</strong> DigitalOcean, Vultr, AWS Lightsail, Hetzner</p></div>
<div class="card"><h4>AWS/Google Cloud (Funciones)</h4><p>Lambda functions que se ejecutan por horario. Pagas solo por uso. Ideal para bots que ejecutan pocas veces al dia.</p></div>
<div class="card"><h4>Railway / Render</h4><p>Plataformas simples para desplegar apps Python. Gratis para proyectos pequenos. Facil de configurar.</p></div>
<div class="card"><h4>Tu PC con cron/scheduler</h4><p>Si tu PC esta siempre encendido, puedes usar Task Scheduler (Windows) o cron (Linux/Mac). Gratis pero depende de tu PC.</p></div>
</div>
<h3>Setup de un Bot en VPS (Paso a Paso)</h3>
<div class="strategy-box"><h4>Workflow Completo</h4><ol>
<li><strong>Crea cuenta en DigitalOcean/Vultr</strong> (droplet de 5-10$/mes con Ubuntu)</li>
<li><strong>Conecta por SSH:</strong> <code>ssh root@tu-ip-del-servidor</code></li>
<li><strong>Instala Python:</strong> <code>apt update && apt install python3 python3-pip</code></li>
<li><strong>Sube tu codigo:</strong> Usa git clone o scp para subir tu bot</li>
<li><strong>Instala dependencias:</strong> <code>pip install -r requirements.txt</code></li>
<li><strong>Configura cron:</strong> Para ejecutar cada hora: <code>crontab -e</code> → <code>0 * * * * cd /root/bot && python3 main.py</code></li>
<li><strong>Monitorea:</strong> Logs, alertas por Telegram cuando abre/cierra trades</li>
</ol></div>
<h3>Alertas por Telegram (IMPRESCINDIBLE)</h3>
<div class="highlight-box green"><h4>Tu Bot te Avisa de Todo</h4>
<div class="code-block"><pre><code>import requests

TELEGRAM_TOKEN = "tu-bot-token"
CHAT_ID = "tu-chat-id"

def send_alert(message):
    url = f"https://api.telegram.org/bot{TELEGRAM_TOKEN}/sendMessage"
    requests.post(url, json={
        "chat_id": CHAT_ID,
        "text": message,
        "parse_mode": "HTML"
    })

# Ejemplos de uso:
send_alert("LONG EUR/USD @ 1.0850 | SL: 1.0820 | TP: 1.0910")
send_alert("Trade CERRADO: +45 pips | Balance: 10,450 USD")
send_alert("ALERTA: Drawdown al 3.5% - revisad")</code></pre></div></div>
<h3>Seguridad del Bot</h3>
<div class="warning-box"><h4>Checklist de Seguridad OBLIGATORIO</h4>
<ul>
<li><strong>Max drawdown automático:</strong> Si pierde X%, el bot se APAGA solo</li>
<li><strong>Max trades por dia:</strong> Limitar a 3-5 para evitar loops</li>
<li><strong>Kill switch:</strong> Poder apagar el bot remotamente (via Telegram o API)</li>
<li><strong>API keys seguras:</strong> NUNCA en el codigo. Usa variables de entorno</li>
<li><strong>Logs detallados:</strong> Registrar CADA acción del bot para poder auditar</li>
<li><strong>Alertas de error:</strong> Si algo falla, que te avise inmediatamente</li>
<li><strong>Revision diaria:</strong> Aunque sea automático, REVISA los resultados cada dia</li>
</ul></div>
<div class="highlight-box blue"><h4>El Stack Completo del Algo Trader</h4>
<p><strong>Desarrollo:</strong> Python + pandas + numpy + scikit-learn</p>
<p><strong>Backtest:</strong> backtesting.py o Backtrader</p>
<p><strong>Ejecucion:</strong> MT5 API o ccxt (cripto)</p>
<p><strong>Hosting:</strong> VPS (DigitalOcean/Vultr) 10$/mes</p>
<p><strong>Alertas:</strong> Bot de Telegram</p>
<p><strong>Monitoreo:</strong> Logs + alertas automaticas</p>
<p><strong>Coste total:</strong> ~10-20$/mes. Accesible para cualquiera.</strong></p></div>`,
          keyPoints: [
            "VPS (5-20 euros/mes) es la opcion más popular para bots 24/7",
            "Alertas por Telegram son IMPRESCINDIBLES para saber que hace tu bot",
            "Seguridad: max drawdown automático, kill switch, API keys en variables de entorno",
            "Stack completo: Python + MT5/ccxt + VPS + Telegram = ~10-20$/mes",
            "Aunque sea automático, REVISA los resultados CADA DIA"
          ],
          quiz: [
            { question: "Cual es la forma más economica y popular de tener un bot 24/7?", options: ["Comprar un servidor fisico", "VPS (Servidor Privado Virtual) por 5-20 euros/mes", "Dejar tu PC encendido siempre", "Pagar un servicio de 500$/mes"], correctIndex: 1, explanation: "Un VPS es un servidor en la nube que cuesta 5-20 euros/mes y esta siempre encendido. Es la opcion estandar para bots de trading." },
            { question: "Que es un 'kill switch' en un bot de trading?", options: ["Un indicador técnico", "Mecanismo para APAGAR el bot remotamente en caso de emergencia", "Un tipo de orden", "Una estrategia de scalping"], correctIndex: 1, explanation: "Un kill switch permite apagar tu bot inmediatamente si algo sale mal, sin tener que acceder fisicamente al servidor." },
            { question: "Donde NUNCA deberias poner tus API keys del broker?", options: ["En variables de entorno", "Directamente en el codigo fuente (hardcoded)", "En un archivo .env", "En un gestor de secretos"], correctIndex: 1, explanation: "Las API keys nunca deben estar en el codigo fuente. Si subes tu codigo a GitHub, cualquiera podria acceder a tu cuenta del broker." }
          ]
        }
      ]
    },
    {
      id: "mod-6-4",
      title: "Trading Algorítmico Avanzado",
      description: "Pine Script profesional, portafolio de estrategias y optimización robusta",
      icon: "⚙️",
      color: "#F59E0B",
      lessons: [
        {
          id: "6-4-1",
          title: "Pine Script Avanzado: Indicadores Custom Profesionales",
          duration: "30 min",
          content: `
<h2>Pine Script Avanzado: Crea Indicadores de Nivel Institucional</h2>
<div style="display:flex;justify-content:center;margin:20px 0"><svg width="420" height="85" viewBox="0 0 420 85" style="background:#131722;border-radius:10px;border:1px solid #2a2a40"><text x="210" y="15" fill="white" font-size="10" text-anchor="middle" font-weight="bold">PINE SCRIPT AVANZADO: DETECTOR SMC</text><rect x="8" y="28" width="95" height="32" rx="5" fill="#26a69a15" stroke="#26a69a"/><text x="55" y="42" fill="#26a69a" font-size="7" text-anchor="middle" font-weight="bold">OB DETECTOR</text><text x="55" y="54" fill="#787b86" font-size="6" text-anchor="middle">Marca Order Blocks</text><rect x="110" y="28" width="95" height="32" rx="5" fill="#8b5cf615" stroke="#8b5cf6"/><text x="157" y="42" fill="#8b5cf6" font-size="7" text-anchor="middle" font-weight="bold">FVG DETECTOR</text><text x="157" y="54" fill="#787b86" font-size="6" text-anchor="middle">Marca Fair Value Gaps</text><rect x="212" y="28" width="100" height="32" rx="5" fill="#f59e0b15" stroke="#f59e0b"/><text x="262" y="42" fill="#f59e0b" font-size="7" text-anchor="middle" font-weight="bold">STRUCTURE</text><text x="262" y="54" fill="#787b86" font-size="6" text-anchor="middle">BOS + CHoCH auto</text><rect x="319" y="28" width="93" height="32" rx="5" fill="#ef535015" stroke="#ef5350"/><text x="365" y="42" fill="#ef5350" font-size="7" text-anchor="middle" font-weight="bold">ALERTAS</text><text x="365" y="54" fill="#787b86" font-size="6" text-anchor="middle">Push al móvil</text><text x="210" y="75" fill="#26a69a" font-size="7" text-anchor="middle" font-weight="bold">Un solo indicador que hace todo el análisis SMC por ti</text></svg></div>
<div class="analogy-box">
<h3>La Analogía del Ingeniero vs el Operario</h3>
<p>Hasta ahora has sido un <strong>operario</strong>: usas las herramientas que otros crearon. Ahora te conviertes en <strong>ingeniero</strong>: diseñas tus propias herramientas. Los indicadores custom profesionales te dan una ventaja competitiva porque NADIE más tiene exactamente tu combinación de señales.</p>
</div>

<h3>Indicadores Multi-Timeframe (MTF)</h3>
<p>Los indicadores multi-timeframe te permiten <strong>ver la estructura del mercado superior sin cambiar de gráfico</strong>. Esto es crucial para confirmar tendencias y evitar operar contra la corriente principal.</p>

<div class="highlight-box green">
<h4>¿Por Qué Multi-Timeframe?</h4>
<ul>
<li><strong>Contexto superior:</strong> Ves la tendencia del timeframe mayor directamente en tu gráfico de operación</li>
<li><strong>Filtro de señales:</strong> Solo operas en la dirección de la tendencia superior</li>
<li><strong>Confluencia:</strong> Cuando múltiples timeframes coinciden, la probabilidad de éxito aumenta</li>
<li><strong>Eficiencia:</strong> No necesitas cambiar entre gráficos constantemente</li>
</ul>
</div>

<div class="code-block"><pre><code>//@version=5
indicator("MTF EMA + RSI Dashboard", overlay=true)

// === INPUTS ===
emaLen   = input.int(21, "Longitud EMA")
rsiLen   = input.int(14, "Longitud RSI")
htf1     = input.timeframe("60",  "Timeframe Superior 1")
htf2     = input.timeframe("240", "Timeframe Superior 2")

// === EMA MULTI-TIMEFRAME ===
ema_current = ta.ema(close, emaLen)
ema_htf1    = request.security(syminfo.tickerid, htf1, ta.ema(close, emaLen))
ema_htf2    = request.security(syminfo.tickerid, htf2, ta.ema(close, emaLen))

// === RSI MULTI-TIMEFRAME ===
rsi_current = ta.rsi(close, rsiLen)
rsi_htf1    = request.security(syminfo.tickerid, htf1, ta.rsi(close, rsiLen))
rsi_htf2    = request.security(syminfo.tickerid, htf2, ta.rsi(close, rsiLen))

// === PLOTEO DE EMAs ===
plot(ema_current, "EMA Actual",   color=color.blue,   linewidth=2)
plot(ema_htf1,    "EMA HTF1",     color=color.orange,  linewidth=2)
plot(ema_htf2,    "EMA HTF2",     color=color.red,     linewidth=3)

// === TABLA DASHBOARD ===
var table panel = table.new(position.top_right, 4, 4,
     bgcolor=color.new(color.black, 80), border_width=1)

if barstate.islast
    table.cell(panel, 0, 0, "TF",        text_color=color.white, text_size=size.small)
    table.cell(panel, 1, 0, "Tendencia",  text_color=color.white, text_size=size.small)
    table.cell(panel, 2, 0, "RSI",        text_color=color.white, text_size=size.small)
    table.cell(panel, 3, 0, "Señal",      text_color=color.white, text_size=size.small)

    // Fila timeframe actual
    trend_curr = close > ema_current ? "ALCISTA" : "BAJISTA"
    table.cell(panel, 0, 1, timeframe.period, text_color=color.white, text_size=size.small)
    table.cell(panel, 1, 1, trend_curr,
         text_color=close > ema_current ? color.green : color.red, text_size=size.small)
    table.cell(panel, 2, 1, str.tostring(rsi_current, "#.0"),
         text_color=rsi_current > 70 ? color.red : rsi_current < 30 ? color.green : color.white,
         text_size=size.small)

    // Fila HTF1
    trend_htf1 = ema_htf1 > ema_htf1[1] ? "ALCISTA" : "BAJISTA"
    table.cell(panel, 0, 2, htf1, text_color=color.white, text_size=size.small)
    table.cell(panel, 1, 2, trend_htf1,
         text_color=trend_htf1 == "ALCISTA" ? color.green : color.red, text_size=size.small)
    table.cell(panel, 2, 2, str.tostring(rsi_htf1, "#.0"),
         text_color=rsi_htf1 > 70 ? color.red : rsi_htf1 < 30 ? color.green : color.white,
         text_size=size.small)

    // Fila HTF2
    trend_htf2 = ema_htf2 > ema_htf2[1] ? "ALCISTA" : "BAJISTA"
    table.cell(panel, 0, 3, htf2, text_color=color.white, text_size=size.small)
    table.cell(panel, 1, 3, trend_htf2,
         text_color=trend_htf2 == "ALCISTA" ? color.green : color.red, text_size=size.small)
    table.cell(panel, 2, 3, str.tostring(rsi_htf2, "#.0"),
         text_color=rsi_htf2 > 70 ? color.red : rsi_htf2 < 30 ? color.green : color.white,
         text_size=size.small)

    // Señal combinada
    allBull = close > ema_current and trend_htf1 == "ALCISTA" and trend_htf2 == "ALCISTA"
    allBear = close < ema_current and trend_htf1 == "BAJISTA" and trend_htf2 == "BAJISTA"
    table.cell(panel, 3, 1, allBull ? "COMPRAR" : allBear ? "VENDER" : "ESPERAR",
         text_color=allBull ? color.green : allBear ? color.red : color.yellow,
         text_size=size.normal)</code></pre></div>

<h3>Alertas Personalizadas con Condiciones Complejas</h3>
<p>Las alertas profesionales no son simples cruces de media. Combinan <strong>múltiples condiciones, filtros de volumen y confirmaciones multi-timeframe</strong>.</p>

<div class="code-block"><pre><code>//@version=5
indicator("Sistema de Alertas Profesional", overlay=true)

// === CONDICIONES DE ENTRADA ===
ema21   = ta.ema(close, 21)
ema50   = ta.ema(close, 50)
rsi     = ta.rsi(close, 14)
vol_sma = ta.sma(volume, 20)

// Condición LONG: cruce EMA + RSI no sobrecomprado + volumen alto
longCondition = ta.crossover(ema21, ema50) and
     rsi < 65 and
     volume > vol_sma * 1.3

// Condición SHORT: cruce EMA bajista + RSI no sobrevendido + volumen alto
shortCondition = ta.crossunder(ema21, ema50) and
     rsi > 35 and
     volume > vol_sma * 1.3

// === ALERTAS ===
alertcondition(longCondition,  title="Señal LONG",
     message="LONG {{ticker}} @ {{close}} | RSI: " + str.tostring(rsi, "#.0") +
     " | Vol: " + str.tostring(volume/vol_sma*100, "#.0") + "% del promedio")

alertcondition(shortCondition, title="Señal SHORT",
     message="SHORT {{ticker}} @ {{close}} | RSI: " + str.tostring(rsi, "#.0") +
     " | Vol: " + str.tostring(volume/vol_sma*100, "#.0") + "% del promedio")

// === VISUAL: formas en el gráfico ===
plotshape(longCondition,  title="Long",  style=shape.triangleup,
     location=location.belowbar, color=color.green, size=size.normal, text="LONG")
plotshape(shortCondition, title="Short", style=shape.triangledown,
     location=location.abovebar, color=color.red, size=size.normal, text="SHORT")</code></pre></div>

<h3>Strategy Tester: Reglas de Entrada y Salida Automatizadas</h3>
<p>El <strong>Strategy Tester</strong> de Pine Script te permite backtestear directamente en TradingView con resultados detallados: profit factor, drawdown, ratio Sharpe y más.</p>

<div class="code-block"><pre><code>//@version=5
strategy("Estrategia EMA Cross con Gestión de Riesgo",
     overlay=true, default_qty_type=strategy.percent_of_equity,
     default_qty_value=2, initial_capital=10000, commission_value=0.04)

// === PARÁMETROS ===
emaFast = input.int(21, "EMA Rápida")
emaSlow = input.int(50, "EMA Lenta")
slPercent = input.float(1.5, "Stop Loss %", step=0.1)
tpPercent = input.float(3.0, "Take Profit %", step=0.1)

// === CÁLCULOS ===
fast = ta.ema(close, emaFast)
slow = ta.ema(close, emaSlow)

// === CONDICIONES ===
longEntry  = ta.crossover(fast, slow)  and ta.rsi(close, 14) < 65
shortEntry = ta.crossunder(fast, slow) and ta.rsi(close, 14) > 35

// === EJECUCIÓN ===
if longEntry
    strategy.entry("Long", strategy.long)
    strategy.exit("Exit Long", "Long",
         stop=close * (1 - slPercent/100),
         limit=close * (1 + tpPercent/100))

if shortEntry
    strategy.entry("Short", strategy.short)
    strategy.exit("Exit Short", "Short",
         stop=close * (1 + slPercent/100),
         limit=close * (1 - tpPercent/100))

// === VISUALIZACIÓN ===
plot(fast, "EMA Rápida", color=color.blue,  linewidth=2)
plot(slow, "EMA Lenta",  color=color.orange, linewidth=2)
bgcolor(strategy.position_size > 0 ? color.new(color.green, 90) :
     strategy.position_size < 0 ? color.new(color.red, 90) : na)</code></pre></div>

<h3>Indicador SMC Completo: Detección de Order Blocks, FVGs y Estructura</h3>
<div class="strategy-box">
<h4>Smart Money Concepts (SMC) Automatizado</h4>
<p>Este es el indicador más avanzado del curso: <strong>detecta automáticamente Order Blocks, Fair Value Gaps y cambios de estructura</strong>. Los traders institucionales usan conceptos similares — ahora tú puedes automatizar su detección.</p>
</div>

<div class="code-block"><pre><code>//@version=5
indicator("SMC Detector Pro", overlay=true, max_boxes_count=500,
     max_labels_count=500, max_lines_count=500)

// === ORDER BLOCK DETECTION ===
obLookback = input.int(10, "OB Lookback")

// Detectar vela de impulso alcista (para OB bajista previo)
bullishImpulse = close > open and (close - open) > ta.atr(14) * 1.5
bearishImpulse = open > close and (open - close) > ta.atr(14) * 1.5

// Encontrar el último Order Block antes del impulso
var box bullOB = na
var box bearOB = na

if bullishImpulse
    // Buscar la última vela bajista antes del impulso = Bullish OB
    for i = 1 to obLookback
        if close[i] < open[i]
            bullOB := box.new(bar_index[i], high[i], bar_index, low[i],
                 bgcolor=color.new(color.green, 85), border_color=color.green)
            label.new(bar_index[i], high[i], "OB+",
                 style=label.style_label_down, color=color.green,
                 textcolor=color.white, size=size.small)
            break

if bearishImpulse
    for i = 1 to obLookback
        if close[i] > open[i]
            bearOB := box.new(bar_index[i], high[i], bar_index, low[i],
                 bgcolor=color.new(color.red, 85), border_color=color.red)
            label.new(bar_index[i], low[i], "OB-",
                 style=label.style_label_up, color=color.red,
                 textcolor=color.white, size=size.small)
            break

// === FAIR VALUE GAP (FVG) DETECTION ===
// FVG alcista: low[0] > high[2] (gap entre vela actual y dos velas atrás)
fvgBull = low > high[2] and close[1] > open[1]
fvgBear = high < low[2] and close[1] < open[1]

if fvgBull
    box.new(bar_index[1], low, bar_index[1], high[2],
         bgcolor=color.new(color.green, 90), border_color=color.green,
         border_style=line.style_dashed)
    label.new(bar_index[1], (low + high[2])/2, "FVG+",
         style=label.style_label_center, color=color.new(color.green, 70),
         textcolor=color.white, size=size.tiny)

if fvgBear
    box.new(bar_index[1], high, bar_index[1], low[2],
         bgcolor=color.new(color.red, 90), border_color=color.red,
         border_style=line.style_dashed)
    label.new(bar_index[1], (high + low[2])/2, "FVG-",
         style=label.style_label_center, color=color.new(color.red, 70),
         textcolor=color.white, size=size.tiny)

// === STRUCTURE: Break of Structure (BOS) ===
swingHigh = ta.pivothigh(high, 5, 5)
swingLow  = ta.pivotlow(low, 5, 5)
var float lastHigh = na
var float lastLow  = na

if not na(swingHigh)
    lastHigh := swingHigh
    label.new(bar_index[5], swingHigh, "HH",
         style=label.style_label_down, color=color.blue,
         textcolor=color.white, size=size.tiny)

if not na(swingLow)
    lastLow := swingLow
    label.new(bar_index[5], swingLow, "LL",
         style=label.style_label_up, color=color.blue,
         textcolor=color.white, size=size.tiny)

// BOS: precio rompe el último swing
bosUp   = not na(lastHigh) and close > lastHigh and close[1] <= lastHigh
bosDown = not na(lastLow)  and close < lastLow  and close[1] >= lastLow

if bosUp
    line.new(bar_index - 10, lastHigh, bar_index, lastHigh,
         color=color.green, style=line.style_solid, width=2)
    label.new(bar_index, lastHigh, "BOS ↑",
         style=label.style_label_up, color=color.green,
         textcolor=color.white)

if bosDown
    line.new(bar_index - 10, lastLow, bar_index, lastLow,
         color=color.red, style=line.style_solid, width=2)
    label.new(bar_index, lastLow, "BOS ↓",
         style=label.style_label_down, color=color.red,
         textcolor=color.white)</code></pre></div>

<div class="warning-box">
<h4>Importante sobre el Indicador SMC</h4>
<ul>
<li>Este indicador es una <strong>herramienta de análisis</strong>, no una señal automática de compra/venta</li>
<li>Los Order Blocks y FVGs deben <strong>confirmarse con la acción del precio en tiempo real</strong></li>
<li>Úsalo como <strong>complemento</strong> a tu análisis manual, no como sustituto</li>
<li>Ajusta el parámetro <em>OB Lookback</em> según el timeframe que operes</li>
</ul>
</div>

<div class="highlight-box blue">
<h4>Resumen: Tu Arsenal de Pine Script</h4>
<div class="grid-cards">
<div class="card">
<h5>Multi-Timeframe</h5>
<p>Contexto superior en tu gráfico. Filtra señales falsas viendo la tendencia mayor.</p>
</div>
<div class="card">
<h5>Alertas Profesionales</h5>
<p>Combinan múltiples condiciones + volumen. Te avisan solo cuando TODO se alinea.</p>
</div>
<div class="card">
<h5>Strategy Tester</h5>
<p>Backtesting directo en TradingView con métricas completas.</p>
</div>
<div class="card">
<h5>SMC Detector</h5>
<p>Order Blocks + FVGs + estructura de mercado automatizados.</p>
</div>
</div>
</div>`,
          keyPoints: [
            "Los indicadores multi-timeframe permiten ver la tendencia superior sin cambiar de gráfico — opera solo en la dirección de la tendencia mayor",
            "Las alertas profesionales combinan múltiples condiciones (EMA + RSI + volumen) para reducir señales falsas drásticamente",
            "El Strategy Tester de Pine Script permite backtestear estrategias completas con métricas de rendimiento directamente en TradingView",
            "Un indicador SMC automatiza la detección de Order Blocks, Fair Value Gaps y Break of Structure — herramientas de análisis institucional",
            "Los indicadores custom son herramientas de APOYO al análisis, nunca señales automáticas de compra/venta sin confirmación"
          ],
          quiz: [
            { question: "¿Qué función de Pine Script se usa para obtener datos de un timeframe superior?", options: ["ta.ema()", "request.security()", "input.timeframe()", "syminfo.tickerid()"], correctIndex: 1, explanation: "request.security() permite solicitar datos de cualquier timeframe diferente al actual, esencial para análisis multi-timeframe." },
            { question: "¿Cuál es la diferencia principal entre 'indicator()' y 'strategy()' en Pine Script?", options: ["No hay diferencia", "indicator() solo muestra datos visuales; strategy() permite simular operaciones con el Strategy Tester", "strategy() es más rápido", "indicator() es para profesionales y strategy() para principiantes"], correctIndex: 1, explanation: "indicator() crea herramientas visuales de análisis, mientras que strategy() permite simular entradas/salidas y obtener métricas de backtesting completas." },
            { question: "¿Qué es un Order Block (OB) en Smart Money Concepts?", options: ["Un bloque de órdenes pendientes visibles en el libro", "La última vela contraria antes de un movimiento impulsivo fuerte — zona institucional de interés", "Un tipo de indicador de volumen", "Una orden limitada que bloquea otras órdenes"], correctIndex: 1, explanation: "Un Order Block es la última vela contraria antes de un impulso fuerte, representando la zona donde las instituciones acumularon posiciones antes del movimiento." }
          ]
        },
        {
          id: "6-4-2",
          title: "Portfolio de Estrategias: No Dependas de Una Sola",
          duration: "25 min",
          content: `
<h2>Portfolio de Estrategias: Diversifica tu Trading</h2>
<div style="display:flex;justify-content:center;margin:20px 0"><svg width="380" height="90" viewBox="0 0 380 90" style="background:#131722;border-radius:10px;border:1px solid #2a2a40"><text x="190" y="15" fill="white" font-size="10" text-anchor="middle" font-weight="bold">PORTFOLIO DE ESTRATEGIAS</text><rect x="8" y="28" width="115" height="35" rx="6" fill="#26a69a15" stroke="#26a69a"/><text x="65" y="42" fill="#26a69a" font-size="8" text-anchor="middle" font-weight="bold">TREND FOLLOWING</text><text x="65" y="56" fill="#787b86" font-size="6" text-anchor="middle">50% capital | EMAs + BOS</text><rect x="130" y="28" width="120" height="35" rx="6" fill="#3b82f615" stroke="#3b82f6"/><text x="190" y="42" fill="#3b82f6" font-size="8" text-anchor="middle" font-weight="bold">MEAN REVERSION</text><text x="190" y="56" fill="#787b86" font-size="6" text-anchor="middle">30% capital | RSI + S/R</text><rect x="257" y="28" width="115" height="35" rx="6" fill="#f59e0b15" stroke="#f59e0b"/><text x="314" y="42" fill="#f59e0b" font-size="8" text-anchor="middle" font-weight="bold">BREAKOUT</text><text x="314" y="56" fill="#787b86" font-size="6" text-anchor="middle">20% capital | Rupturas</text><text x="190" y="80" fill="#787b86" font-size="7" text-anchor="middle">3 estrategias no correlacionadas = rendimiento más estable</text></svg></div>
<div class="analogy-box">
<h3>La Analogía del Equipo de Fútbol</h3>
<p>Un equipo de fútbol no pone 11 delanteros. Tiene <strong>defensas, mediocampistas y atacantes</strong> porque cada posición cumple una función diferente según el momento del partido. Tu trading debe funcionar igual: necesitas <strong>estrategias ofensivas</strong> (trend following) para cuando el mercado se mueve, <strong>estrategias defensivas</strong> (mean reversion) para cuando el mercado lateral, y <strong>estrategias de contraataque</strong> (breakout) para momentos explosivos.</p>
</div>

<h3>¿Por Qué Necesitas Múltiples Estrategias?</h3>
<div class="warning-box">
<h4>El Error Fatal del Trader de Una Sola Estrategia</h4>
<p>Si solo tienes una estrategia de tendencia y el mercado entra en rango 3 meses... <strong>pierdes 3 meses seguidos</strong>. Tu cuenta sufre, tu psicología se destruye y terminas abandonando una estrategia que SÍ funciona — solo que no en TODAS las condiciones de mercado.</p>
</div>

<div class="highlight-box green">
<h4>Beneficios de un Portfolio de Estrategias</h4>
<ul>
<li><strong>Curva de equity más suave:</strong> Cuando una estrategia pierde, otra puede ganar</li>
<li><strong>Menos drawdown:</strong> El drawdown combinado es menor que el de cada estrategia individual</li>
<li><strong>Ingresos más consistentes:</strong> No dependes de un solo tipo de mercado</li>
<li><strong>Resiliencia psicológica:</strong> Es más fácil aguantar rachas malas si otras estrategias compensan</li>
<li><strong>Adaptabilidad:</strong> Cubres más condiciones de mercado sin cambiar tu operativa</li>
</ul>
</div>

<h3>Los 3 Pilares de un Portfolio de Estrategias</h3>
<div class="grid-cards">
<div class="card">
<h4>1. Trend Following (Seguimiento de Tendencia)</h4>
<p><strong>Cuándo brilla:</strong> Mercados con tendencias claras y sostenidas</p>
<p><strong>Cuándo sufre:</strong> Mercados laterales y choppy</p>
<p><strong>Herramientas:</strong> Cruces de EMAs, ADX > 25, canales de Donchian, breakouts de estructura</p>
<p><strong>Win rate típico:</strong> 35-45% (pero las ganadoras son mucho mayores que las perdedoras)</p>
<p><strong>Ejemplo:</strong> Entrar cuando EMA21 cruza EMA50 al alza con ADX > 25. Stop trailing con ATR.</p>
</div>
<div class="card">
<h4>2. Mean Reversion (Reversión a la Media)</h4>
<p><strong>Cuándo brilla:</strong> Mercados en rango, laterales, consolidación</p>
<p><strong>Cuándo sufre:</strong> Tendencias fuertes y breakouts</p>
<p><strong>Herramientas:</strong> RSI extremos, Bandas de Bollinger, desviaciones estándar, zonas de soporte/resistencia</p>
<p><strong>Win rate típico:</strong> 60-70% (pero los trades ganadores son más pequeños)</p>
<p><strong>Ejemplo:</strong> Comprar cuando RSI < 25 y precio toca Banda Bollinger inferior. TP en la media.</p>
</div>
<div class="card">
<h4>3. Breakout (Ruptura)</h4>
<p><strong>Cuándo brilla:</strong> Después de consolidaciones prolongadas, noticias de alto impacto</p>
<p><strong>Cuándo sufre:</strong> Mercados sin volatilidad, fakeouts frecuentes</p>
<p><strong>Herramientas:</strong> Rangos de consolidación, ATR para medir volatilidad, volumen como confirmación</p>
<p><strong>Win rate típico:</strong> 30-40% (pero las ganadoras pueden ser enormes: 3-5R)</p>
<p><strong>Ejemplo:</strong> Entrar en ruptura de rango de 20 velas con volumen > 150% del promedio. Stop debajo del rango.</p>
</div>
</div>

<h3>Correlación Entre Estrategias</h3>
<p>La clave de un buen portfolio es que las estrategias tengan <strong>baja correlación</strong> entre sí. Si todas ganan y pierden al mismo tiempo, no hay diversificación real.</p>

<div class="calculation-box">
<h4>Tabla de Correlación Ideal</h4>
<table>
<tr><th>Estrategia</th><th>Trend Following</th><th>Mean Reversion</th><th>Breakout</th></tr>
<tr><td><strong>Trend Following</strong></td><td>1.00</td><td>-0.40</td><td>0.30</td></tr>
<tr><td><strong>Mean Reversion</strong></td><td>-0.40</td><td>1.00</td><td>-0.20</td></tr>
<tr><td><strong>Breakout</strong></td><td>0.30</td><td>-0.20</td><td>1.00</td></tr>
</table>
<p><strong>Interpretación:</strong> Trend Following y Mean Reversion tienen correlación negativa (-0.40), lo que significa que cuando una pierde, la otra tiende a ganar. Esto es EXACTAMENTE lo que queremos.</p>
</div>

<h3>Asignación de Capital Entre Estrategias</h3>
<div class="strategy-box">
<h4>Modelo de Asignación Sugerido para Principiantes</h4>
<ul>
<li><strong>50% — Trend Following:</strong> Es la base. Históricamente, las tendencias generan los mayores retornos</li>
<li><strong>30% — Mean Reversion:</strong> Genera ingresos durante los períodos laterales (que son la mayoría del tiempo)</li>
<li><strong>20% — Breakout:</strong> Captura movimientos explosivos con riesgo controlado</li>
</ul>
<p><strong>Nota:</strong> Esta distribución es un punto de partida. Ajústala según tus resultados de backtesting y tu tolerancia al riesgo.</p>
</div>

<div class="highlight-box blue">
<h4>Rebalanceo del Portfolio</h4>
<p>Cada <strong>mes o trimestre</strong>, revisa el rendimiento de cada estrategia y rebalancea:</p>
<ul>
<li>Si una estrategia ha tenido drawdown excesivo (> 2x su drawdown esperado del backtest), <strong>reduce su asignación temporalmente</strong></li>
<li>Si una estrategia consistentemente supera expectativas, <strong>considera aumentar ligeramente su peso</strong></li>
<li>Si el mercado ha cambiado de régimen (de tendencial a lateral), <strong>el portfolio se ajusta naturalmente</strong> porque la estrategia correcta toma el protagonismo</li>
</ul>
</div>

<h3>Cuándo Retirar una Estrategia</h3>
<div class="warning-box">
<h4>Señales de que una Estrategia Debe Retirarse</h4>
<ul>
<li><strong>Underperformance sostenida:</strong> Rendimiento por debajo de su backtest durante más de 6 meses consecutivos</li>
<li><strong>Cambio estructural:</strong> El mercado que operaba ha cambiado fundamentalmente (nueva regulación, cambio de volatilidad permanente)</li>
<li><strong>Drawdown 2x el esperado:</strong> Si tu backtest mostraba -15% máximo y llevas -30%, algo está mal</li>
<li><strong>Degradación del edge:</strong> Demasiados participantes usan la misma estrategia, eliminando la ventaja</li>
</ul>
<p><strong>IMPORTANTE:</strong> No retires una estrategia solo porque lleva 2 semanas malas. Las rachas perdedoras son NORMALES. Usa datos objetivos, no emociones.</p>
</div>

<div class="highlight-box green">
<h4>Construyendo tu Sistema de Trading Robusto</h4>
<div class="grid-cards">
<div class="card">
<h5>Paso 1: Desarrolla</h5>
<p>Crea y backtestea cada estrategia por separado con al menos 200 operaciones históricas.</p>
</div>
<div class="card">
<h5>Paso 2: Correlaciona</h5>
<p>Verifica que las estrategias tengan baja correlación. Si todas pierden al mismo tiempo, no sirve.</p>
</div>
<div class="card">
<h5>Paso 3: Asigna capital</h5>
<p>Distribuye capital según riesgo. Empieza conservador: 50/30/20 o incluso 40/30/30.</p>
</div>
<div class="card">
<h5>Paso 4: Opera y monitorea</h5>
<p>Ejecuta las 3 estrategias en paralelo. Revisa resultados semanalmente. Rebalancea mensualmente.</p>
</div>
</div>
</div>`,
          keyPoints: [
            "Un portfolio de estrategias (trend following + mean reversion + breakout) reduce el drawdown y suaviza la curva de equity porque cada tipo funciona en condiciones de mercado diferentes",
            "La correlación negativa entre estrategias es la clave: cuando una pierde, otra tiende a ganar — esto es verdadera diversificación",
            "Asignación sugerida para empezar: 50% trend following, 30% mean reversion, 20% breakout — ajusta según tus resultados de backtesting",
            "Rebalancea mensual o trimestralmente según rendimiento real vs esperado — no por emociones ni rachas cortas",
            "Retira una estrategia solo con datos objetivos: underperformance de 6+ meses, drawdown 2x el esperado, o cambio estructural del mercado"
          ],
          quiz: [
            { question: "¿Por qué es peligroso depender de una sola estrategia de trading?", options: ["Porque una sola estrategia siempre pierde dinero", "Porque ninguna estrategia funciona en TODOS los tipos de mercado — cuando el mercado cambia de régimen, tu única estrategia puede perder durante meses", "Porque los brokers no lo permiten", "Porque es aburrido operar una sola estrategia"], correctIndex: 1, explanation: "Los mercados alternan entre tendencias, rangos y explosiones. Una sola estrategia solo funciona bien en uno de estos regímenes, sufriendo pérdidas prolongadas en los demás." },
            { question: "¿Qué significa que dos estrategias tengan correlación negativa?", options: ["Que ambas pierden al mismo tiempo", "Que cuando una gana, la otra tiende a perder — lo ideal para diversificar un portfolio", "Que una es mejor que la otra", "Que no se pueden usar juntas"], correctIndex: 1, explanation: "La correlación negativa entre estrategias significa que se compensan mutuamente: cuando el mercado lateral daña tu trend following, tu mean reversion tiende a compensar esas pérdidas." },
            { question: "¿Cuál es la señal más confiable para retirar una estrategia de tu portfolio?", options: ["Que lleve 2 semanas perdiendo", "Que un youtuber diga que ya no funciona", "Rendimiento sostenido por debajo del backtest durante más de 6 meses consecutivos o drawdown 2x el esperado", "Que encuentres una estrategia nueva más emocionante"], correctIndex: 2, explanation: "Las rachas malas de 2-4 semanas son completamente normales. Solo debes retirar una estrategia con evidencia objetiva de degradación prolongada, no por emociones ni opiniones externas." }
          ]
        },
        {
          id: "6-4-3",
          title: "Optimización sin Overfitting: El Arte del Backtesting",
          duration: "30 min",
          content: `
<h2>Optimización sin Overfitting: Cómo Saber si tu Estrategia REALMENTE Funciona</h2>
<div style="display:flex;justify-content:center;margin:20px 0"><svg width="420" height="90" viewBox="0 0 420 90" style="background:#131722;border-radius:10px;border:1px solid #2a2a40"><text x="210" y="15" fill="white" font-size="10" text-anchor="middle" font-weight="bold">BACKTESTING SIN OVERFITTING</text><rect x="8" y="28" width="95" height="35" rx="5" fill="#26a69a15" stroke="#26a69a"/><text x="55" y="42" fill="#26a69a" font-size="7" text-anchor="middle" font-weight="bold">IN-SAMPLE</text><text x="55" y="56" fill="#787b86" font-size="6" text-anchor="middle">70% datos: entrenar</text><rect x="110" y="28" width="100" height="35" rx="5" fill="#f59e0b15" stroke="#f59e0b"/><text x="160" y="42" fill="#f59e0b" font-size="7" text-anchor="middle" font-weight="bold">OUT-OF-SAMPLE</text><text x="160" y="56" fill="#787b86" font-size="6" text-anchor="middle">30% datos: validar</text><rect x="217" y="28" width="100" height="35" rx="5" fill="#8b5cf615" stroke="#8b5cf6"/><text x="267" y="42" fill="#8b5cf6" font-size="7" text-anchor="middle" font-weight="bold">WALK-FORWARD</text><text x="267" y="56" fill="#787b86" font-size="6" text-anchor="middle">Ventana deslizante</text><rect x="324" y="28" width="88" height="35" rx="5" fill="#ef535015" stroke="#ef5350"/><text x="368" y="42" fill="#ef5350" font-size="7" text-anchor="middle" font-weight="bold">MONTE CARLO</text><text x="368" y="56" fill="#787b86" font-size="6" text-anchor="middle">1000 simulaciones</text><text x="210" y="80" fill="#ef5350" font-size="8" text-anchor="middle" font-weight="bold">Si funciona en OUT-OF-SAMPLE = estrategia real. Si no = overfitting.</text></svg></div>
<div class="analogy-box">
<h3>La Analogía del Estudiante que Memoriza vs el que Entiende</h3>
<p>Imagina dos estudiantes antes de un examen. Uno <strong>memoriza</strong> todas las respuestas del examen de práctica y saca 100%. El otro <strong>entiende</strong> los conceptos y saca 85% en la práctica. ¿Quién sacará mejor nota en el examen real? El que entiende, porque el examen tendrá preguntas DIFERENTES. El <strong>overfitting</strong> es exactamente como memorizar: tu estrategia saca resultados perfectos en datos pasados pero FALLA en datos nuevos porque se adaptó al ruido en vez de a los patrones reales.</p>
</div>

<h3>¿Qué es el Overfitting y Por Qué es el Enemigo #1?</h3>
<div class="warning-box">
<h4>La Trampa Más Peligrosa del Backtesting</h4>
<p>El overfitting ocurre cuando <strong>optimizas tanto los parámetros de tu estrategia que se ajustan perfectamente a los datos históricos, pero pierden toda capacidad predictiva en datos nuevos</strong>. Es la razón número uno por la que estrategias que lucen increíbles en backtest fracasan estrepitosamente en cuenta real.</p>
<ul>
<li><strong>Señal de peligro:</strong> Si tu backtest muestra un profit factor > 3 o win rate > 75%, probablemente hay overfitting</li>
<li><strong>Ejemplo clásico:</strong> "EMA de 23 períodos con RSI de 13 funciona perfecto en EUR/USD de enero a junio 2024" — estos números mágicos solo funcionan en ese período específico</li>
</ul>
</div>

<h3>Walk-Forward Optimization: El Estándar de Oro</h3>
<p>La Walk-Forward Optimization (WFO) es la técnica más confiable para optimizar sin overfitting. Simula <strong>exactamente lo que harías en la vida real</strong>: optimizar con datos pasados y luego operar con datos nuevos.</p>

<div class="strategy-box">
<h4>Cómo Funciona el Walk-Forward</h4>
<ol>
<li><strong>Divide tus datos en ventanas:</strong>
  <ul>
  <li>Ventana de optimización (In-Sample): 70-80% de los datos — aquí optimizas los parámetros</li>
  <li>Ventana de validación (Out-of-Sample): 20-30% de los datos — aquí pruebas sin tocar nada</li>
  </ul>
</li>
<li><strong>Desliza la ventana hacia adelante:</strong>
  <ul>
  <li>Período 1: Optimiza en Ene-Jun, valida en Jul-Ago</li>
  <li>Período 2: Optimiza en Mar-Ago, valida en Sep-Oct</li>
  <li>Período 3: Optimiza en May-Oct, valida en Nov-Dic</li>
  </ul>
</li>
<li><strong>Evalúa los resultados Out-of-Sample:</strong> Si el rendimiento es consistente en TODAS las ventanas de validación, tu estrategia es robusta</li>
</ol>
</div>

<div class="code-block"><pre><code># Walk-Forward Optimization en Python
import pandas as pd
import numpy as np

def walk_forward_optimization(data, in_sample_pct=0.7, n_windows=5):
    """
    Walk-Forward Optimization para validar estrategias de trading.
    Divide los datos en ventanas deslizantes de optimización y validación.
    """
    total_len = len(data)
    window_size = total_len // n_windows
    results = []

    for i in range(n_windows):
        start = i * window_size
        end = start + window_size
        if end > total_len:
            break

        # Dividir en in-sample y out-of-sample
        split = start + int(window_size * in_sample_pct)
        in_sample  = data.iloc[start:split]
        out_sample = data.iloc[split:end]

        # Optimizar parámetros en in-sample
        best_params = optimize_strategy(in_sample)

        # Validar con esos parámetros en out-of-sample
        oos_result = backtest_strategy(out_sample, best_params)

        results.append({
            'window': i + 1,
            'in_sample_start': in_sample.index[0],
            'in_sample_end': in_sample.index[-1],
            'out_sample_start': out_sample.index[0],
            'out_sample_end': out_sample.index[-1],
            'best_params': best_params,
            'oos_profit_factor': oos_result['profit_factor'],
            'oos_win_rate': oos_result['win_rate'],
            'oos_return': oos_result['total_return']
        })

    return pd.DataFrame(results)

def optimize_strategy(data, ema_range=range(10, 60, 5),
                      rsi_range=range(10, 25, 2)):
    """Encuentra los mejores parámetros en los datos in-sample"""
    best_pf = 0
    best_params = {}

    for ema_len in ema_range:
        for rsi_len in rsi_range:
            result = backtest_strategy(data,
                         {'ema': ema_len, 'rsi': rsi_len})
            if result['profit_factor'] > best_pf:
                best_pf = result['profit_factor']
                best_params = {'ema': ema_len, 'rsi': rsi_len}

    return best_params

# Ejemplo de uso:
# results = walk_forward_optimization(price_data, n_windows=6)
# print(results[['window', 'best_params',
#                 'oos_profit_factor', 'oos_win_rate']])</code></pre></div>

<h3>Simulación Monte Carlo: ¿Suerte o Habilidad?</h3>
<p>La simulación Monte Carlo responde a la pregunta más importante del trading: <strong>"¿Mis resultados son por habilidad o por suerte?"</strong>. Genera miles de escenarios aleatorios reordenando tus trades para ver el rango de resultados posibles.</p>

<div class="highlight-box green">
<h4>¿Qué te Dice Monte Carlo?</h4>
<ul>
<li><strong>Drawdown máximo esperado:</strong> En el peor 5% de escenarios, ¿cuánto puedes perder?</li>
<li><strong>Probabilidad de ruina:</strong> ¿Cuál es la probabilidad de perder el 50% de tu cuenta?</li>
<li><strong>Rango de retornos:</strong> Tu retorno esperado no es un número fijo, es un RANGO</li>
<li><strong>Confianza en tu edge:</strong> Si el 95% de simulaciones son rentables, tu estrategia es robusta</li>
</ul>
</div>

<div class="code-block"><pre><code># Simulación Monte Carlo para Trading
import numpy as np

def monte_carlo_simulation(trades_pnl, n_simulations=10000,
                           initial_balance=10000):
    """
    Ejecuta simulación Monte Carlo reordenando los trades.
    trades_pnl: lista de P&L de cada trade (en USD o pips)
    """
    results = []
    max_drawdowns = []

    for _ in range(n_simulations):
        # Reordenar trades aleatoriamente
        shuffled = np.random.permutation(trades_pnl)

        # Calcular curva de equity
        equity = [initial_balance]
        for pnl in shuffled:
            equity.append(equity[-1] + pnl)

        equity = np.array(equity)
        final_balance = equity[-1]
        results.append(final_balance)

        # Calcular max drawdown
        peak = np.maximum.accumulate(equity)
        drawdown = (peak - equity) / peak * 100
        max_drawdowns.append(drawdown.max())

    results = np.array(results)
    max_drawdowns = np.array(max_drawdowns)

    return {
        'media_retorno': np.mean(results) - initial_balance,
        'mediana_retorno': np.median(results) - initial_balance,
        'peor_5pct': np.percentile(results, 5) - initial_balance,
        'mejor_5pct': np.percentile(results, 95) - initial_balance,
        'prob_rentable': (results > initial_balance).mean() * 100,
        'prob_ruina_50pct': (results < initial_balance * 0.5).mean() * 100,
        'max_dd_promedio': np.mean(max_drawdowns),
        'max_dd_peor_5pct': np.percentile(max_drawdowns, 95),
    }

# Ejemplo de uso:
# mis_trades = [50, -30, 80, -25, 60, -40, 45, -20, ...]
# resultado = monte_carlo_simulation(mis_trades, n_simulations=10000)
# print(f"Probabilidad de ser rentable: {resultado['prob_rentable']:.1f}%")
# print(f"Max Drawdown esperado (peor 5%): {resultado['max_dd_peor_5pct']:.1f}%")</code></pre></div>

<h3>Análisis de Sensibilidad de Parámetros</h3>
<p>Una estrategia robusta debe funcionar bien con <strong>un rango amplio de parámetros</strong>, no solo con valores exactos. Si cambiar la EMA de 21 a 23 destruye tus resultados, hay overfitting.</p>

<div class="strategy-box">
<h4>Test de Robustez de Parámetros</h4>
<p>Para cada parámetro de tu estrategia, prueba variaciones de ±20% y verifica que los resultados se mantengan estables:</p>
<ul>
<li><strong>EMA 21:</strong> Prueba con 17, 19, 21, 23, 25. Si todos son rentables, el parámetro es robusto</li>
<li><strong>RSI 14:</strong> Prueba con 11, 12, 14, 16, 17. Si solo RSI=14 funciona, hay overfitting</li>
<li><strong>Stop Loss 1.5%:</strong> Prueba con 1.0%, 1.3%, 1.5%, 1.8%, 2.0%. Debe haber un "meseta" de rentabilidad</li>
</ul>
<p><strong>Regla de oro:</strong> Si una variación de ±20% en cualquier parámetro convierte tu estrategia de ganadora en perdedora, NO es una estrategia robusta.</p>
</div>

<h3>Tamaños de Muestra Mínimos</h3>
<div class="calculation-box">
<h4>¿Cuántos Trades Necesitas para Validar una Estrategia?</h4>
<table>
<tr><th>Métrica</th><th>Mínimo Recomendado</th><th>Ideal</th></tr>
<tr><td>Número total de trades</td><td>100</td><td>200+</td></tr>
<tr><td>Trades ganadores</td><td>30+</td><td>60+</td></tr>
<tr><td>Trades perdedores</td><td>30+</td><td>60+</td></tr>
<tr><td>Período de tiempo</td><td>2 años</td><td>5+ años</td></tr>
<tr><td>Ciclos de mercado cubiertos</td><td>1 alcista + 1 bajista</td><td>2+ de cada uno</td></tr>
</table>
<p><strong>IMPORTANTE:</strong> 30 trades NO es suficiente para validar nada estadísticamente. Necesitas al menos 100 para que el win rate tenga un margen de error aceptable.</p>
</div>

<h3>Significancia Estadística en Trading</h3>
<div class="highlight-box blue">
<h4>¿Cuándo Puedes Confiar en tus Resultados?</h4>
<p>Para saber si tu estrategia tiene un edge REAL y no es solo suerte, necesitas verificar la <strong>significancia estadística</strong>:</p>
<ul>
<li><strong>t-test del retorno medio:</strong> ¿Es el retorno promedio por trade significativamente diferente de cero? Si p-value > 0.05, tus resultados podrían ser pura suerte</li>
<li><strong>Monte Carlo al 95%:</strong> Si el 95% de las simulaciones son rentables, tienes confianza estadística</li>
<li><strong>Profit Factor en Out-of-Sample > 1.2:</strong> No basta con ser > 1.0, necesitas margen para comisiones y slippage</li>
<li><strong>Ratio de Sharpe > 1.0:</strong> Indica que el retorno justifica el riesgo asumido</li>
</ul>
</div>

<h3>Errores Comunes del Backtesting que DEBES Evitar</h3>
<div class="warning-box">
<h4>Las 7 Trampas Mortales del Backtesting</h4>
<ol>
<li><strong>Look-ahead bias:</strong> Usar información del futuro para tomar decisiones del presente (ej: usar datos de cierre para decidir entrar al inicio de la misma vela)</li>
<li><strong>Survivorship bias:</strong> Solo testear acciones/pares que existen HOY, ignorando las que quebraron o fueron deslistadas</li>
<li><strong>Ignorar costes:</strong> No incluir comisiones, spread, slippage y swap en el backtest — pueden destruir una estrategia rentable</li>
<li><strong>Over-optimization:</strong> Probar 1000 combinaciones de parámetros hasta encontrar la "perfecta" — es fitting al ruido</li>
<li><strong>Período demasiado corto:</strong> Backtestear solo 6 meses no cubre diferentes condiciones de mercado</li>
<li><strong>Ignorar drawdown:</strong> Una estrategia con +200% de retorno pero -60% de drawdown es prácticamente inutilizable psicológicamente</li>
<li><strong>No validar Out-of-Sample:</strong> Si usas el 100% de datos para optimizar, NO tienes validación real. Siempre reserva datos sin tocar</li>
</ol>
</div>

<div class="highlight-box green">
<h4>Checklist Final: ¿Tu Estrategia es Robusta?</h4>
<div class="grid-cards">
<div class="card">
<h5>Walk-Forward</h5>
<p>Rendimiento consistente en todas las ventanas out-of-sample, no solo en una.</p>
</div>
<div class="card">
<h5>Monte Carlo</h5>
<p>95%+ de simulaciones rentables. Probabilidad de ruina menor al 5%.</p>
</div>
<div class="card">
<h5>Sensibilidad</h5>
<p>Variaciones de ±20% en parámetros no destruyen los resultados.</p>
</div>
<div class="card">
<h5>Muestra</h5>
<p>100+ trades, 2+ años, cubriendo mercados alcistas y bajistas.</p>
</div>
</div>
</div>`,
          keyPoints: [
            "El overfitting es el enemigo número uno del backtesting: la estrategia se ajusta al ruido histórico y falla con datos nuevos — si tu backtest es demasiado perfecto, desconfía",
            "Walk-Forward Optimization es el estándar de oro: optimiza en datos pasados (in-sample) y valida en datos futuros (out-of-sample) con ventanas deslizantes",
            "La simulación Monte Carlo te dice si tus resultados son por habilidad o suerte — reordena tus trades miles de veces para ver el rango real de resultados posibles",
            "Una estrategia robusta funciona con variaciones de ±20% en sus parámetros — si solo funciona con valores exactos, es overfitting al ruido",
            "Necesitas mínimo 100 trades y 2 años de datos para validar estadísticamente cualquier estrategia — 30 trades NO es suficiente para ninguna conclusión confiable"
          ],
          quiz: [
            { question: "¿Qué es el overfitting en el contexto del backtesting de trading?", options: ["Usar demasiados indicadores en el gráfico", "Cuando la estrategia se ajusta tanto a los datos históricos que pierde capacidad predictiva en datos nuevos", "Cuando el backtest tiene pocas operaciones", "Cuando usas un timeframe demasiado pequeño"], correctIndex: 1, explanation: "El overfitting ocurre cuando optimizas excesivamente los parámetros para que encajen perfectamente con datos pasados. Como memorizar las respuestas de un examen: funciona en ese examen específico, pero falla en cualquier otro." },
            { question: "¿Cuál es el propósito principal de la simulación Monte Carlo en trading?", options: ["Predecir el precio futuro con exactitud", "Generar miles de escenarios reordenando trades para determinar si los resultados son por habilidad o suerte", "Calcular el tamaño de posición óptimo", "Optimizar los parámetros de la estrategia"], correctIndex: 1, explanation: "Monte Carlo reordena tus trades aleatoriamente miles de veces para mostrarte el rango real de resultados posibles, ayudándote a distinguir si tu edge es real o fue casualidad del orden específico en que ocurrieron tus operaciones." },
            { question: "¿Cuántos trades mínimos se necesitan para validar una estrategia estadísticamente?", options: ["10-20 trades son suficientes", "30 trades", "Al menos 100 trades con 2+ años de datos cubriendo diferentes condiciones de mercado", "500 trades mínimo obligatorio"], correctIndex: 2, explanation: "Con menos de 100 trades, el margen de error estadístico es demasiado alto para sacar conclusiones confiables. Necesitas suficientes datos para cubrir mercados alcistas, bajistas y laterales." }
          ]
        }
      ]
    }
  ]
};
