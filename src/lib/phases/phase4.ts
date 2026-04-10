import type { Phase } from "../courseData";

export const PHASE_4: Phase = {
  id: "fase-4",
  number: 4,
  title: "Estrategias Avanzadas",
  subtitle: "Smart Money, ICT y Price Action Profesional",
  description: "Aqui es donde te conviertes en un trader profesional. Vas a aprender las mismas estrategias que usan los traders institucionales, los conceptos de Smart Money, la metodologia ICT completa, y como construir tu propio sistema de trading con confluencias de alta probabilidad.",
  color: "#10B981",
  gradient: "from-emerald-500 to-emerald-700",
  modules: [
    // ========================================================================
    // MODULE 4-1: SMART MONEY CONCEPTS
    // ========================================================================
    {
      id: "mod-4-1",
      title: "Smart Money Concepts",
      description: "Entiende como operan las instituciones y aprende a seguir su rastro",
      icon: "\u{1F3E6}",
      color: "#10B981",
      lessons: [
        // --------------------------------------------------------------------
        // LESSON 4-1-1: LIQUIDEZ
        // --------------------------------------------------------------------
        {
          id: "4-1-1",
          title: "Liquidez: Donde esta el Dinero",
          duration: "45 min",
          content: `
<h2>Liquidez: El Combustible que Mueve el Mercado</h2>

<div class="analogy-box">
<h3>La Analogia del Tiburon y los Peces</h3>
<p>Imagina el oceano. Los peces pequenos (traders retail) nadan juntos en bancos, buscando seguridad en los numeros. Ponen sus stop loss en los mismos sitios obvios: debajo del ultimo minimo, encima del ultimo maximo. Los tiburones (instituciones, bancos, fondos) lo saben perfectamente. <strong>No pueden simplemente "comprar" o "vender" como tu y yo</strong>. Necesitan mover millones, y para eso necesitan que haya ordenes del otro lado. Los stop loss de los peces pequenos SON esas ordenes. El tiburon mueve el precio hacia donde estan los peces, se los come (activa sus stops), y DESPUES mueve el mercado en la direccion real.</p>
</div>

<h3>Que es la Liquidez en Trading</h3>
<p>La <strong>liquidez</strong> es la disponibilidad de ordenes pendientes en el mercado a diferentes niveles de precio. En terminos simples: es <strong>donde esta el dinero esperando ser ejecutado</strong>. Las instituciones necesitan liquidez para llenar sus ordenes masivas sin mover el precio demasiado en su contra.</p>

<div class="highlight-box green">
<h4>Concepto Clave: Por que las Instituciones Necesitan tu Stop Loss</h4>
<p>Un fondo de cobertura quiere comprar EUR/USD con una posicion de 500 millones de dolares. Si simplemente pone una orden de mercado, el precio se moveria 50 pips en su contra antes de llenar toda la orden. En cambio, necesita encontrar vendedores dispuestos a venderle a buenos precios. Donde estan esos vendedores? <strong>En los stop loss de los traders retail que estan en LONG</strong>. Un stop loss de un LONG es una orden de VENTA. Exactamente lo que la institucion necesita para comprar.</p>
</div>

<h3>Tipos de Liquidez</h3>

<div class="grid-cards">
<div class="card">
<h4>BSL - Buy Side Liquidity (Liquidez del Lado Comprador)</h4>
<p>Son las ordenes de COMPRA pendientes que descansan <strong>POR ENCIMA del precio actual</strong>. Incluyen: stop loss de posiciones SHORT, ordenes de compra pendientes (buy stops), y breakout traders que compraran si el precio sube. Se acumula encima de <strong>maximos iguales (equal highs), maximos de swing, y maximos de sesion</strong>.</p>
</div>
<div class="card">
<h4>SSL - Sell Side Liquidity (Liquidez del Lado Vendedor)</h4>
<p>Son las ordenes de VENTA pendientes que descansan <strong>POR DEBAJO del precio actual</strong>. Incluyen: stop loss de posiciones LONG, ordenes de venta pendientes (sell stops), y breakout traders que venderan si el precio baja. Se acumula debajo de <strong>minimos iguales (equal lows), minimos de swing, y minimos de sesion</strong>.</p>
</div>
</div>

<div class="strategy-box">
<h4>Regla de Oro de la Liquidez</h4>
<p><strong>El precio SIEMPRE se mueve hacia la liquidez.</strong> Si hay un pool de liquidez evidente arriba (BSL), el precio tendera a subir para tomarlo. Si hay liquidez evidente abajo (SSL), el precio tendera a bajar. Las instituciones NECESITAN esa liquidez para ejecutar sus ordenes. Esto no es conspiracion: es mecanica de mercado pura.</p>
</div>

<h3>Equal Highs y Equal Lows: Los Imanes de Liquidez</h3>

<p>Cuando el precio crea dos o mas maximos al mismo nivel (equal highs), cada trader retail del mundo ve una "resistencia fuerte" y pone su stop loss justo por encima. Lo mismo con equal lows: ven un "soporte fuerte" y ponen su stop justo debajo.</p>

<div class="example-box">
<h4>Ejemplo Practico: Equal Highs como Trampa</h4>
<p>EUR/USD toca 1.1050 tres veces y rebota. Miles de traders retail piensan: "resistencia triple, imposible que rompa". Ponen sus shorts con stop loss en 1.1060-1.1070. Que hace la institucion? Empuja el precio a 1.1075, activa TODOS esos stops (que son ordenes de compra), usa esa liquidez para llenar sus propias ordenes de compra masivas, y LUEGO el precio explota al alza hasta 1.1150. Los retail perdieron, la institucion gano.</p>
</div>

<div class="grid-cards">
<div class="card">
<h4>Equal Highs = BSL</h4>
<p>Dos o mas maximos en el mismo nivel crean un <strong>pool de BSL</strong> encima. El mercado los ve como resistencia. En realidad, son un iman de liquidez. <strong>Espera que el precio los barra antes de buscar shorts.</strong></p>
</div>
<div class="card">
<h4>Equal Lows = SSL</h4>
<p>Dos o mas minimos en el mismo nivel crean un <strong>pool de SSL</strong> debajo. El mercado los ve como soporte. En realidad, son un iman de liquidez. <strong>Espera que el precio los barra antes de buscar longs.</strong></p>
</div>
</div>

<h3>Liquidity Grabs (Barridas de Liquidez)</h3>

<p>Un <strong>liquidity grab</strong> o <strong>liquidity sweep</strong> ocurre cuando el precio rompe brevemente un nivel de liquidez (un maximo o minimo) y luego <strong>revierte rapidamente</strong>. Es la huella que deja la institucion al tomar la liquidez.</p>

<div class="highlight-box blue">
<h4>Como Identificar un Liquidity Grab</h4>
<ol>
<li><strong>Identifica el pool de liquidez:</strong> Equal highs, equal lows, maximos/minimos de sesion anteriores, maximos/minimos de la semana anterior</li>
<li><strong>Observa la mecha:</strong> El precio rompe el nivel con una mecha larga pero el CUERPO de la vela cierra por debajo (si era BSL) o por encima (si era SSL)</li>
<li><strong>Confirmacion:</strong> La siguiente vela muestra movimiento fuerte en la direccion opuesta al sweep</li>
<li><strong>Entrada:</strong> Entra en la direccion del reverso despues de que la liquidez ha sido tomada</li>
</ol>
</div>

<h3>Liquidez Interna vs Externa</h3>

<div class="grid-cards">
<div class="card">
<h4>Liquidez Interna (Internal Liquidity)</h4>
<p>Se encuentra DENTRO del rango de precio actual. Incluye: Fair Value Gaps (FVGs), order blocks sin mitigar, inbalances dentro de la estructura. El precio se mueve hacia la liquidez interna para <strong>rebalancear</strong> antes de continuar su movimiento. Es el "pit stop" del precio.</p>
</div>
<div class="card">
<h4>Liquidez Externa (External Liquidity)</h4>
<p>Se encuentra FUERA del rango de precio actual. Incluye: equal highs/lows, maximos/minimos de swing, niveles de sesion. El precio se mueve hacia la liquidez externa para <strong>tomar ordenes</strong> y crear la base para el siguiente movimiento grande. Es el "objetivo" del precio.</p>
</div>
</div>

<div class="strategy-box">
<h4>El Ciclo Liquidez Interna - Externa</h4>
<p>El precio se mueve en un ciclo constante: <strong>Liquidez Externa -> Liquidez Interna -> Liquidez Externa</strong>. El precio toma liquidez externa (barre un maximo/minimo), luego retrocede para llenar liquidez interna (FVGs, OBs), y despues se mueve hacia la siguiente liquidez externa. Entender este ciclo es la BASE de todo Smart Money trading.</p>
</div>

<h3>Niveles Clave de Liquidez</h3>

<div class="grid-cards">
<div class="card">
<h4>Previous Day High/Low (PDH/PDL)</h4>
<p>Los maximos y minimos del dia anterior son niveles de liquidez MUY importantes. Las instituciones frecuentemente barren estos niveles durante las killzones de London o NY.</p>
</div>
<div class="card">
<h4>Previous Week High/Low (PWH/PWL)</h4>
<p>Liquidez semanal. Movimientos mas grandes y significativos. Ideal para swing trading con Smart Money.</p>
</div>
<div class="card">
<h4>Session Highs/Lows</h4>
<p>Los maximos y minimos de la sesion asiatica son frecuentemente barridos durante London. Es uno de los setups mas consistentes de ICT.</p>
</div>
<div class="card">
<h4>Swing Points Obvios</h4>
<p>Cualquier maximo o minimo que sea obvio y visible en el grafico acumula liquidez. Cuanto mas obvio, mas liquidez acumula, y mas probable es que sea barrido.</p>
</div>
</div>

<div class="warning-box">
<h4>El Error Mas Comun de los Retail</h4>
<p>Los traders retail ponen su stop loss 5-10 pips por debajo del "soporte" o por encima de la "resistencia" porque eso dice el libro de texto. LAS INSTITUCIONES LO SABEN. Por eso el precio SIEMPRE parece "tocar tu stop y luego ir a tu favor". No es mala suerte, es el mercado tomando tu liquidez. La solucion: <strong>espera a que la liquidez sea tomada PRIMERO, y luego entra en la direccion del movimiento real</strong>.</p>
</div>

<div class="example-box">
<h4>Setup Completo de Liquidez</h4>
<p><strong>Contexto:</strong> GBP/USD en tendencia alcista en H4. En M15, ves equal lows formandose en 1.2700.</p>
<p><strong>Paso 1:</strong> Identificas SSL debajo de 1.2700 (equal lows = trampa de liquidez).</p>
<p><strong>Paso 2:</strong> Durante la sesion de London, el precio baja agresivamente y rompe 1.2700, llegando a 1.2685.</p>
<p><strong>Paso 3:</strong> El precio forma una vela de rechazo con mecha larga inferior. El cuerpo cierra encima de 1.2700.</p>
<p><strong>Paso 4:</strong> Entras en LONG en el cierre de esa vela (1.2705), con SL debajo de la mecha (1.2680).</p>
<p><strong>Paso 5:</strong> TP en la BSL mas cercana: los maximos de ayer en 1.2780.</p>
<p><strong>Resultado:</strong> 75 pips de ganancia con 25 pips de riesgo = 3:1 RR.</p>
</div>`,
          keyPoints: [
            "La liquidez son ordenes pendientes (stops, buy/sell stops) que las instituciones necesitan para llenar sus posiciones masivas",
            "BSL (Buy Side Liquidity) esta ENCIMA del precio (stops de shorts, equal highs). SSL (Sell Side Liquidity) esta DEBAJO (stops de longs, equal lows)",
            "El precio SIEMPRE se mueve hacia la liquidez - las instituciones necesitan esas ordenes como contraparte",
            "Un liquidity grab/sweep rompe brevemente un nivel y revierte: es la huella institucional",
            "Liquidez Interna (FVGs, OBs) rebalancea; Liquidez Externa (equal highs/lows, PDH/PDL) toma ordenes",
            "El ciclo es: Liquidez Externa -> Liquidez Interna -> Liquidez Externa. Entender esto cambia todo"
          ],
          quiz: [
            {
              question: "Donde se acumula la SSL (Sell Side Liquidity)?",
              options: [
                "Encima de los maximos recientes",
                "Debajo de los minimos recientes, equal lows y swing lows",
                "En el medio del rango de precio",
                "Solo en niveles de numeros redondos"
              ],
              correctIndex: 1,
              explanation: "La SSL se acumula debajo del precio actual, especificamente debajo de minimos recientes, equal lows y swing lows, donde los traders colocan sus stop loss de posiciones largas."
            },
            {
              question: "Que es un liquidity grab?",
              options: [
                "Cuando el precio rompe un nivel y continua en esa direccion",
                "Cuando el precio rompe brevemente un nivel de liquidez y luego revierte rapidamente",
                "Cuando el volumen aumenta repentinamente",
                "Cuando una vela tiene cuerpo grande sin mecha"
              ],
              correctIndex: 1,
              explanation: "Un liquidity grab ocurre cuando el precio rompe brevemente un nivel donde hay liquidez acumulada (stops, ordenes pendientes) y luego revierte, indicando que las instituciones han tomado la liquidez que necesitaban."
            },
            {
              question: "Cual es la diferencia entre liquidez interna y externa?",
              options: [
                "No hay diferencia, son lo mismo",
                "La interna esta dentro del rango (FVGs, OBs) para rebalancear; la externa esta fuera (equal highs/lows) para tomar ordenes",
                "La interna es mas importante que la externa",
                "La externa solo existe en timeframes altos"
              ],
              correctIndex: 1,
              explanation: "La liquidez interna se encuentra dentro del rango de precio actual (FVGs, order blocks) y sirve para rebalancear. La liquidez externa esta fuera del rango (equal highs/lows, PDH/PDL) y es donde las instituciones toman ordenes para sus posiciones."
            },
            {
              question: "Por que las instituciones necesitan la liquidez de los traders retail?",
              options: [
                "Porque quieren perjudicar a los pequenos traders",
                "Porque necesitan contrapartes para llenar sus ordenes masivas sin mover excesivamente el precio",
                "Porque es una conspiracion del mercado",
                "Porque los brokers se lo piden"
              ],
              correctIndex: 1,
              explanation: "Las instituciones manejan posiciones de cientos de millones de dolares. Necesitan contrapartes para ejecutar esas ordenes. Los stop loss de los retail son ordenes del lado opuesto que las instituciones usan para llenar sus posiciones a buenos precios."
            }
          ],
          practicalExercise: "Abre TradingView con EUR/USD en M15. Marca todos los equal highs y equal lows de los ultimos 3 dias. Ahora observa que paso cuando el precio llego a esos niveles: barrio la liquidez y revirtio? o la respeto? Anota cuantos de esos niveles fueron barridos antes de un movimiento fuerte. Haz esto con al menos 3 pares de divisas y compara los resultados."
        },
        // --------------------------------------------------------------------
        // LESSON 4-1-2: ORDER BLOCKS
        // --------------------------------------------------------------------
        {
          id: "4-1-2",
          title: "Order Blocks y Zonas Institucionales",
          duration: "50 min",
          content: `
<h2>Order Blocks: Las Huellas de las Instituciones</h2>

<div class="analogy-box">
<h3>La Analogia del Almacen Secreto</h3>
<p>Imagina que eres un multimillonario y quieres comprar 1,000 casas en una ciudad sin que nadie se entere (para que los precios no suban). No puedes ir y comprar 1,000 casas de golpe. En cambio, compras poco a poco, en bloques de 10-20 casas, usando diferentes agentes inmobiliarios. Cada "bloque" de compras deja una huella en los registros de propiedad. En trading, esas huellas se llaman <strong>Order Blocks</strong>: son las zonas de precio donde las instituciones acumularon sus ordenes antes de un movimiento grande.</p>
</div>

<h3>Que es un Order Block</h3>
<p>Un <strong>Order Block (OB)</strong> es la ultima vela bajista antes de un movimiento alcista fuerte, o la ultima vela alcista antes de un movimiento bajista fuerte. Representa la zona donde las instituciones colocaron sus ordenes de forma agresiva antes de impulsar el precio en una direccion.</p>

<div class="highlight-box green">
<h4>Por que los Order Blocks Funcionan</h4>
<p>Las instituciones no pueden llenar todas sus ordenes de una sola vez. Colocan una parte de su posicion, mueven el precio, y luego NECESITAN que el precio vuelva a esa zona para llenar el resto de su posicion. Es por esto que el precio tiende a volver a los Order Blocks: <strong>hay ordenes institucionales pendientes esperando ser ejecutadas</strong>.</p>
</div>

<h3>Tipos de Order Blocks</h3>

<div class="grid-cards">
<div class="card">
<h4>Bullish Order Block (OB Alcista)</h4>
<p>Es la <strong>ultima vela BAJISTA (roja)</strong> antes de un movimiento alcista impulsivo que rompe estructura. La zona del cuerpo de esa vela (de apertura a cierre) es donde las instituciones acumularon sus compras. Cuando el precio retrocede a esta zona, es una oportunidad de LONG.</p>
<p><strong>Identificacion:</strong></p>
<ol>
<li>Busca un movimiento alcista fuerte que rompa un maximo de estructura</li>
<li>Identifica la ULTIMA vela bajista antes de ese movimiento</li>
<li>Marca el rango completo de esa vela (de apertura a cierre del cuerpo)</li>
<li>Espera que el precio retroceda a esa zona</li>
</ol>
</div>
<div class="card">
<h4>Bearish Order Block (OB Bajista)</h4>
<p>Es la <strong>ultima vela ALCISTA (verde)</strong> antes de un movimiento bajista impulsivo que rompe estructura. La zona del cuerpo de esa vela es donde las instituciones acumularon sus ventas. Cuando el precio retrocede a esta zona, es una oportunidad de SHORT.</p>
<p><strong>Identificacion:</strong></p>
<ol>
<li>Busca un movimiento bajista fuerte que rompa un minimo de estructura</li>
<li>Identifica la ULTIMA vela alcista antes de ese movimiento</li>
<li>Marca el rango completo de esa vela (de apertura a cierre del cuerpo)</li>
<li>Espera que el precio retroceda a esa zona</li>
</ol>
</div>
</div>

<h3>Validando Order Blocks: No todos son iguales</h3>

<div class="strategy-box">
<h4>Checklist de un Order Block Valido</h4>
<ol>
<li><strong>Debe causar un Break of Structure (BOS):</strong> El movimiento que sale del OB debe romper un maximo o minimo de estructura. Sin BOS, no es un OB valido.</li>
<li><strong>Debe dejar un Fair Value Gap (FVG):</strong> Los OBs mas potentes crean un gap de valor justo, indicando agresion institucional extrema.</li>
<li><strong>Debe estar en una zona de descuento (para OB alcista) o premium (para OB bajista):</strong> Un OB alcista es mas fuerte en la zona de descuento (por debajo del 50% del rango). Un OB bajista es mas fuerte en la zona premium (por encima del 50%).</li>
<li><strong>No debe haber sido mitigado:</strong> Si el precio ya volvio al OB una vez, ha sido "mitigado" y pierde potencia. Los OBs frescos (sin tocar) son los mas fuertes.</li>
<li><strong>El impulso debe ser de calidad:</strong> Velas grandes, con cuerpo lleno y pocas mechas, indican movimiento institucional real.</li>
</ol>
</div>

<h3>Mitigacion de Order Blocks</h3>

<p>La <strong>mitigacion</strong> ocurre cuando el precio regresa a un Order Block y las instituciones ejecutan el resto de sus ordenes pendientes. Una vez mitigado (tocado), el OB pierde fuerza significativamente.</p>

<div class="grid-cards">
<div class="card">
<h4>OB Fresco (Sin Mitigar)</h4>
<p>El precio nunca ha regresado a la zona del OB desde su creacion. Tiene la <strong>mayor probabilidad de reaccion</strong>. Es la primera opcion siempre.</p>
</div>
<div class="card">
<h4>OB Mitigado (Tocado 1 vez)</h4>
<p>El precio ya regreso una vez. Parte de las ordenes institucionales ya fueron ejecutadas. Aun puede reaccionar pero con <strong>menor probabilidad</strong>. Requiere mas confluencias.</p>
</div>
<div class="card">
<h4>OB Invalidado</h4>
<p>El precio cerro COMPLETAMENTE a traves del OB (no solo una mecha, sino un cierre de vela). Las ordenes institucionales han sido completamente absorbidas. <strong>Ya no es valido, no tradear.</strong></p>
</div>
</div>

<div class="warning-box">
<h4>Error Critico: Confundir mechas con invalidacion</h4>
<p>Un OB NO se invalida porque una mecha lo atraviese. Se invalida cuando el CUERPO de una vela cierra completamente a traves de el. Las mechas que atraviesan pueden ser liquidity grabs que en realidad CONFIRMAN que hay instituciones defendiendo esa zona.</p>
</div>

<h3>Breaker Blocks: Cuando un OB se Invalida y se Transforma</h3>

<div class="highlight-box blue">
<h4>Que es un Breaker Block</h4>
<p>Cuando un Order Block es completamente invalidado (el precio cierra a traves de el con fuerza), ese OB se convierte en un <strong>Breaker Block</strong>. Es como si las instituciones "cambiaran de bando". Un OB alcista invalidado se convierte en un Breaker bajista, y viceversa.</p>
<p><strong>Mecanica:</strong> El precio rompe un OB alcista -> eso significa que las instituciones que compraron ahi han sido derrotadas -> ahora hay "atrapados" en esa zona -> cuando el precio regrese, esos atrapados saldran (venderan) -> eso crea presion de venta = el Breaker actua como resistencia.</p>
</div>

<div class="example-box">
<h4>Ejemplo de Breaker Block</h4>
<p><strong>Escenario:</strong> Habia un Bullish OB en EUR/USD en 1.0900.</p>
<p><strong>Invalidacion:</strong> El precio rompe 1.0900 con fuerza bajista, cerrando cuerpo de vela debajo.</p>
<p><strong>Transformacion:</strong> Ese antiguo OB alcista ahora es un Breaker BAJISTA.</p>
<p><strong>Trade:</strong> Cuando el precio retroceda a 1.0900, busca SHORT. Los traders que compraron ahi estan "atrapados" y venderan para cortar perdidas, sumando presion bajista a tu favor.</p>
</div>

<h3>Rejection Blocks</h3>

<p>Un <strong>Rejection Block</strong> es una variacion del Order Block que se forma cuando el precio <strong>rechaza agresivamente un nivel</strong> con mechas largas. A diferencia del OB clasico (donde miramos el cuerpo), en el Rejection Block miramos las <strong>mechas</strong>.</p>

<div class="strategy-box">
<h4>Identificar un Rejection Block</h4>
<p><strong>Bullish Rejection Block:</strong> Una vela con mecha inferior extremadamente larga que rechaza un nivel bajista. La zona de la mecha inferior es el Rejection Block. Indica compra institucional agresiva en esa zona exacta.</p>
<p><strong>Bearish Rejection Block:</strong> Una vela con mecha superior extremadamente larga que rechaza un nivel alcista. La zona de la mecha superior es el Rejection Block. Indica venta institucional agresiva.</p>
<p><strong>Uso:</strong> Cuando el precio regrese a la zona de la mecha, espera reaccion similar. Es una zona donde las instituciones mostraron su mano.</p>
</div>

<h3>Propulsion Blocks</h3>

<p>Un <strong>Propulsion Block</strong> (o Propulsion OB) ocurre cuando un Fair Value Gap se forma directamente desde un Order Block, creando una zona de doble confluencia extremadamente potente. Es como si el Order Block "propulsara" al precio con tanta fuerza que deja un gap de valor.</p>

<div class="highlight-box green">
<h4>Por que los Propulsion Blocks son Especiales</h4>
<p>Tienes la confluencia de un OB (zona de ordenes institucionales) + un FVG (evidencia de movimiento agresivo) en la misma zona. Cuando el precio retrocede a un Propulsion Block, tienes:</p>
<ul>
<li>Ordenes institucionales pendientes del OB</li>
<li>Necesidad de rebalanceo del FVG</li>
<li>Doble razon para que el precio reaccione</li>
</ul>
<p><strong>Los Propulsion Blocks son los OBs de mayor probabilidad que existen.</strong></p>
</div>

<h3>Refinamiento de Order Blocks</h3>

<div class="strategy-box">
<h4>Como Refinar un OB para Entradas Precisas</h4>
<p>Los OBs pueden ser refinados bajando de timeframe para encontrar la zona exacta de entrada:</p>
<ol>
<li><strong>Paso 1:</strong> Identifica el OB en tu timeframe de analisis (H1 o H4)</li>
<li><strong>Paso 2:</strong> Baja a un timeframe menor (M15 o M5)</li>
<li><strong>Paso 3:</strong> Dentro de la zona del OB de H1, busca el OB de M15/M5 mas cercano al extremo</li>
<li><strong>Paso 4:</strong> Usa el OB del TF menor como tu zona de entrada exacta</li>
</ol>
<p><strong>Beneficio:</strong> Reduces drasticamente tu stop loss (de 30 pips a 10 pips) manteniendo el mismo target, multiplicando tu ratio riesgo-beneficio.</p>
</div>

<div class="example-box">
<h4>Setup Completo con Order Block</h4>
<p><strong>1. Contexto HTF (H4):</strong> Tendencia alcista clara. BOS al alza. Identificas un Bullish OB fresco en 1.0850-1.0865.</p>
<p><strong>2. Validacion:</strong> El OB causo BOS, dejo FVG, esta en zona de descuento, esta fresco (sin mitigar).</p>
<p><strong>3. Espera:</strong> El precio retrocede hacia 1.0850-1.0865 durante la killzone de London.</p>
<p><strong>4. Refinamiento (M5):</strong> Dentro del OB de H4, encuentras un OB de M5 en 1.0855-1.0860.</p>
<p><strong>5. Confirmacion LTF:</strong> En M1, ves un CHoCH (Change of Character) alcista dentro del OB.</p>
<p><strong>6. Entrada:</strong> Long en 1.0860, SL en 1.0845 (debajo del OB refinado), TP en 1.0920 (proximo BSL).</p>
<p><strong>7. Resultado:</strong> 60 pips de ganancia con 15 pips de riesgo = 4:1 RR.</p>
</div>`,
          keyPoints: [
            "Un Order Block es la ultima vela bajista antes de un impulso alcista (Bullish OB) o la ultima vela alcista antes de un impulso bajista (Bearish OB)",
            "Un OB valido debe causar BOS, idealmente dejar FVG, estar en zona premium/discount correcta, y estar fresco (sin mitigar)",
            "Un OB se invalida cuando el cuerpo de una vela cierra completamente a traves de el, no por una simple mecha",
            "Breaker Blocks son OBs invalidados que cambian de polaridad: un OB alcista roto se convierte en resistencia bajista",
            "Los Propulsion Blocks (OB + FVG en la misma zona) son los setups de mayor probabilidad"
          ],
          quiz: [
            {
              question: "Que es un Bullish Order Block?",
              options: [
                "La ultima vela alcista antes de un movimiento bajista",
                "La ultima vela bajista antes de un movimiento alcista que causa BOS",
                "Cualquier vela roja en una tendencia alcista",
                "Una zona de soporte clasica"
              ],
              correctIndex: 1,
              explanation: "Un Bullish Order Block es la ultima vela BAJISTA (roja) antes de un movimiento alcista impulsivo que rompe estructura (BOS). Representa donde las instituciones acumularon sus compras."
            },
            {
              question: "Cuando se invalida un Order Block?",
              options: [
                "Cuando una mecha lo atraviesa",
                "Cuando el precio lo toca una vez",
                "Cuando el CUERPO de una vela cierra completamente a traves de el",
                "Despues de 24 horas sin ser tocado"
              ],
              correctIndex: 2,
              explanation: "Un OB se invalida cuando el cuerpo de una vela cierra completamente a traves de el. Las mechas que lo atraviesan no lo invalidan; de hecho, pueden ser liquidity grabs que confirman actividad institucional."
            },
            {
              question: "Que es un Breaker Block?",
              options: [
                "Un Order Block que nunca fue tocado",
                "Un Order Block invalidado que cambia de polaridad y actua en sentido contrario",
                "Un tipo de vela japonesa",
                "Una zona donde el precio siempre rebota"
              ],
              correctIndex: 1,
              explanation: "Un Breaker Block es un OB que fue completamente invalidado y ahora actua en la direccion opuesta. Un Bullish OB roto se convierte en un Breaker bajista porque los compradores atrapados crearan presion de venta al salir."
            },
            {
              question: "Por que los Propulsion Blocks son considerados los OBs mas potentes?",
              options: [
                "Porque son los mas grandes en tamano",
                "Porque combinan un OB con un FVG en la misma zona, dando doble confluencia",
                "Porque solo aparecen en timeframes altos",
                "Porque siempre generan ganancias garantizadas"
              ],
              correctIndex: 1,
              explanation: "Los Propulsion Blocks combinan un Order Block (ordenes institucionales pendientes) con un Fair Value Gap (evidencia de movimiento agresivo) en la misma zona. Esta doble confluencia les da la mayor probabilidad de reaccion."
            }
          ],
          practicalExercise: "En TradingView con GBP/USD H1, identifica los ultimos 5 BOS (Break of Structure). Para cada uno, marca el Order Block que lo causo. Luego verifica: cuando el precio retrocedio al OB, reacciono? Fue mitigado o invalidado? Intenta refinar al menos 2 de esos OBs bajando a M15 y compara la zona refinada vs la original. Anota tus observaciones sobre la precision de cada uno."
        }
      ]
    },
    // ========================================================================
    // MODULE 4-2: ICT METHODOLOGY
    // ========================================================================
    {
      id: "mod-4-2",
      title: "ICT Methodology",
      description: "Domina la metodologia ICT completa: killzones, Power of 3, FVGs y confluencias",
      icon: "\u{1F3AF}",
      color: "#10B981",
      lessons: [
        // --------------------------------------------------------------------
        // LESSON 4-2-1: KILLZONES, SESSIONS, POWER OF 3
        // --------------------------------------------------------------------
        {
          id: "4-2-1",
          title: "ICT: Killzones, Sessions y Power of 3",
          duration: "50 min",
          content: `
<h2>ICT: El Marco Temporal Institucional</h2>

<div class="analogy-box">
<h3>La Analogia del Casino</h3>
<p>Un casino no necesita ganar cada mano de poker. Solo necesita que las probabilidades esten ligeramente a su favor y jugar muchas manos. Las instituciones operan igual: tienen HORARIOS especificos donde el volumen les permite ejecutar sus estrategias con maxima eficiencia. Esos horarios son las <strong>Killzones</strong>. No tradeas a cualquier hora igual que un casino profesional no deja las mesas abiertas las 24 horas. Hay "prime time" y hay "tiempo muerto".</p>
</div>

<h3>Las 4 Sesiones del Mercado</h3>

<div class="grid-cards">
<div class="killzone-card asia">
<h4>Sesion Asiatica (Tokio)</h4>
<p><strong>Hora UTC: 00:00 - 08:00</strong></p>
<p><strong>Hora Espana: 02:00 - 10:00</strong></p>
<p><strong>Hora NY: 19:00 - 03:00 (dia anterior)</strong></p>
<p><strong>Caracteristicas:</strong></p>
<ul>
<li>Volumen BAJO, rango estrecho</li>
<li>El precio consolida y crea un RANGO definido</li>
<li>Pares de JPY, AUD y NZD son mas activos</li>
<li>Crea la liquidez que London y NY van a tomar</li>
</ul>
<p><strong>Funcion SMC:</strong> Asia CREA el rango. Es la fase de ACUMULACION.</p>
</div>
<div class="killzone-card london">
<h4>Sesion de Londres</h4>
<p><strong>Hora UTC: 07:00 - 16:00</strong></p>
<p><strong>Hora Espana: 09:00 - 18:00</strong></p>
<p><strong>Hora NY: 02:00 - 11:00</strong></p>
<p><strong>Caracteristicas:</strong></p>
<ul>
<li>Mayor volumen y volatilidad en Forex</li>
<li>ROMPE el rango asiatico (sweep de Asia high o low)</li>
<li>EUR, GBP, CHF muy activos</li>
<li>Movimientos directionales fuertes</li>
</ul>
<p><strong>Funcion SMC:</strong> London MANIPULA y DISTRIBUYE. Barre la liquidez de Asia.</p>
</div>
<div class="killzone-card newyork">
<h4>Sesion de Nueva York</h4>
<p><strong>Hora UTC: 12:00 - 21:00</strong></p>
<p><strong>Hora Espana: 14:00 - 23:00</strong></p>
<p><strong>Hora NY: 07:00 - 16:00</strong></p>
<p><strong>Caracteristicas:</strong></p>
<ul>
<li>Solapamiento con London = MAXIMO volumen</li>
<li>Noticias economicas importantes de EE.UU.</li>
<li>Puede continuar el movimiento de London o revertirlo</li>
<li>Indices americanos y USD muy activos</li>
</ul>
<p><strong>Funcion SMC:</strong> NY CONTINUA o REVIERTE. Puede crear un segundo movimiento.</p>
</div>
<div class="killzone-card overlap">
<h4>Solapamiento London-NY</h4>
<p><strong>Hora UTC: 12:00 - 16:00</strong></p>
<p><strong>Hora Espana: 14:00 - 18:00</strong></p>
<p><strong>Hora NY: 07:00 - 11:00</strong></p>
<p><strong>Caracteristicas:</strong></p>
<ul>
<li>MAXIMO volumen del dia</li>
<li>Los movimientos mas grandes ocurren aqui</li>
<li>Mejor momento para day trading</li>
<li>Noticias de alto impacto (NFP, CPI, FOMC)</li>
</ul>
<p><strong>Funcion SMC:</strong> La HORA DORADA del trading. Maxima eficiencia institucional.</p>
</div>
</div>

<h3>ICT Killzones: Las Ventanas de Oportunidad</h3>

<p>Las <strong>Killzones</strong> son ventanas de tiempo especificas DENTRO de cada sesion donde la probabilidad de movimientos institucionales es MAXIMA. No es lo mismo "sesion de London" que "London Killzone".</p>

<div class="highlight-box green">
<h4>Las Killzones Exactas de ICT (Hora de Nueva York / EST)</h4>
<ul>
<li><strong>Asian Killzone:</strong> 20:00 - 00:00 EST (02:00 - 06:00 Espana)</li>
<li><strong>London Killzone:</strong> 02:00 - 05:00 EST (08:00 - 11:00 Espana)</li>
<li><strong>New York Killzone (AM):</strong> 07:00 - 10:00 EST (13:00 - 16:00 Espana)</li>
<li><strong>London Close Killzone:</strong> 10:00 - 12:00 EST (16:00 - 18:00 Espana)</li>
</ul>
<p><strong>REGLA:</strong> SOLO busca entradas dentro de las Killzones. Fuera de ellas, el movimiento es ruido.</p>
</div>

<h3>Power of 3 (AMD): Acumulacion - Manipulacion - Distribucion</h3>

<p>El <strong>Power of 3</strong> (o AMD) es el patron que las instituciones repiten CADA DIA, CADA SESION. Es la huella digital del dinero inteligente y el concepto MAS importante de ICT.</p>

<div class="grid-cards">
<div class="concept-card">
<h4>1. Acumulacion (A)</h4>
<p><strong>Que es:</strong> Las instituciones acumulan posiciones silenciosamente durante un periodo de baja volatilidad. El precio se mueve en un rango estrecho.</p>
<p><strong>Cuando:</strong> Tipicamente durante la sesion asiatica o las primeras horas antes de una killzone.</p>
<p><strong>Que ves en el grafico:</strong> Consolidacion, rango estrecho, velas pequenas, volumen bajo.</p>
<p><strong>Lo que esta pasando realmente:</strong> Las instituciones estan construyendo sus posiciones poco a poco sin alertar al mercado.</p>
</div>
<div class="concept-card">
<h4>2. Manipulacion (M)</h4>
<p><strong>Que es:</strong> Las instituciones empujan el precio EN LA DIRECCION OPUESTA a su intencion real para activar stop losses y atrapar a los retail.</p>
<p><strong>Cuando:</strong> Al inicio de la London o NY Killzone.</p>
<p><strong>Que ves en el grafico:</strong> Un movimiento agresivo que rompe el rango de consolidacion, barre los stops, y crea un falso breakout.</p>
<p><strong>Lo que esta pasando realmente:</strong> La institucion esta tomando liquidez (activando stops) para llenar el resto de su posicion masiva.</p>
</div>
<div class="concept-card">
<h4>3. Distribucion (D)</h4>
<p><strong>Que es:</strong> El movimiento REAL. Despues de tomar la liquidez, el precio se mueve agresivamente en la direccion verdadera de la institucion.</p>
<p><strong>Cuando:</strong> Despues de la manipulacion, durante el corazon de la killzone.</p>
<p><strong>Que ves en el grafico:</strong> Movimiento direccional fuerte, velas grandes, volume alto, BOS claros.</p>
<p><strong>Lo que esta pasando realmente:</strong> La institucion ya tiene su posicion completa y ahora deja que el precio se mueva a su favor.</p>
</div>
</div>

<div class="example-box">
<h4>Ejemplo de AMD en el Dia a Dia</h4>
<p><strong>Fase A (Asia 00:00-07:00 UTC):</strong> EUR/USD se consolida entre 1.0820 y 1.0840. Rango de 20 pips. Los retail ven "soporte" en 1.0820 y "resistencia" en 1.0840. Ponen stops debajo de 1.0820 (los longs) y encima de 1.0840 (los shorts).</p>
<p><strong>Fase M (London Open 07:00-08:30 UTC):</strong> El precio rompe ABAJO de 1.0820, llegando a 1.0805. Los stops de los longs se activan (venden). Los breakout traders entran en short. PERO... el precio NO continua bajando.</p>
<p><strong>Fase D (London 08:30-15:00 UTC):</strong> Despues de tomar la liquidez de abajo (SSL), el precio se revierte violentamente al alza. Rompe 1.0840 (barre tambien a los shorts), y sube hasta 1.0900. Los que compraron en 1.0805 (despues del sweep) ganan 95 pips.</p>
</div>

<h3>El Judas Swing</h3>

<div class="highlight-box red">
<h4>Judas Swing: La Traicion del Mercado</h4>
<p>El <strong>Judas Swing</strong> es el nombre que ICT le da a la fase de MANIPULACION del AMD. Se llama "Judas" porque es una traicion: el precio te engana moviendo en una direccion para luego ir en la opuesta.</p>
<p><strong>Como tradear el Judas Swing:</strong></p>
<ol>
<li>Espera a que abra la Killzone de London o NY</li>
<li>Observa el primer movimiento agresivo (el Judas Swing)</li>
<li>Si el movimiento barre liquidez obvia (equal lows, PDL, Asia low), es probable que sea el Judas</li>
<li>Busca confirmacion de reverso: CHoCH en M1-M5, OB, FVG</li>
<li>Entra en la direccion OPUESTA al Judas Swing</li>
</ol>
<p><strong>Tasa de exito:</strong> El Judas Swing de London que barre el rango asiatico tiene una probabilidad extremadamente alta de reverso.</p>
</div>

<h3>London Barre el Rango Asiatico</h3>

<p>Uno de los setups MAS consistentes de ICT es la relacion entre la sesion asiatica y London.</p>

<div class="strategy-box">
<h4>Setup: London Sweeps Asia Range</h4>
<p><strong>Premisa:</strong> Asia crea un rango (acumulacion). London lo barre (manipulacion). Luego el precio se mueve en la direccion opuesta al sweep (distribucion).</p>
<p><strong>Ejecucion paso a paso:</strong></p>
<ol>
<li><strong>Marca el rango asiatico:</strong> El high y low de la sesion asiatica (00:00-07:00 UTC)</li>
<li><strong>Determina el bias diario:</strong> Con HTF (H4/Daily), determina si el dia es alcista o bajista</li>
<li><strong>Espera el sweep de London:</strong> Si tu bias es alcista, espera que London barra el BAJO de Asia (SSL). Si tu bias es bajista, espera que London barra el ALTO de Asia (BSL)</li>
<li><strong>Busca confirmacion en LTF:</strong> En M5 o M1, busca un CHoCH o BOS en la direccion de tu bias despues del sweep</li>
<li><strong>Entra en el OB/FVG del LTF:</strong> Tu entrada esta en el primer OB o FVG que se forme despues de la confirmacion</li>
<li><strong>TP:</strong> El extremo opuesto del rango asiatico o la siguiente liquidez externa en la direccion de tu bias</li>
</ol>
</div>

<h3>Horarios de ICT Segun Dia de la Semana</h3>

<div class="grid-cards">
<div class="card">
<h4>Lunes</h4>
<p>"Dia de preparacion". El mercado establece el rango semanal. Puede ser engannoso. ICT recomienda observar mas que tradear. Si tradeas, hazlo con tamano reducido.</p>
</div>
<div class="card">
<h4>Martes - Miercoles</h4>
<p>"Dias de maxima probabilidad". Los mejores dias para tradear segun ICT. Las instituciones estan activas y los movimientos son mas predecibles. EL CORAZON de tu semana de trading.</p>
</div>
<div class="card">
<h4>Jueves</h4>
<p>"Dia de reverso". Frecuentemente el mercado revierte el movimiento de la semana. Puede ofrecer buenas oportunidades pero requiere mas cuidado.</p>
</div>
<div class="card">
<h4>Viernes</h4>
<p>"Dia de toma de beneficios". Las instituciones cierran posiciones antes del fin de semana. Movimientos pueden ser erraticos. NO tradear despues de las 12:00 EST. Si tienes beneficios de la semana, protegelos.</p>
</div>
</div>

<div class="warning-box">
<h4>Regla de Oro del Timing ICT</h4>
<p>Si NO estas operando durante las Killzones, estas jugando contra la casa. El 80% de los movimientos significativos ocurren durante las Killzones. Fuera de ellas, el movimiento es consolidacion, ruido, y manipulacion sin direccion. <strong>Menos horas frente a la pantalla, mejores resultados.</strong></p>
</div>`,
          keyPoints: [
            "Las Killzones son ventanas especificas: London KZ (02:00-05:00 EST), NY KZ (07:00-10:00 EST), London Close (10:00-12:00 EST)",
            "Power of 3 (AMD): Acumulacion (rango/Asia) -> Manipulacion (sweep/Judas Swing) -> Distribucion (movimiento real)",
            "El Judas Swing es el movimiento falso inicial que barre liquidez antes del movimiento verdadero",
            "London frecuentemente barre el rango asiatico: es uno de los setups mas consistentes de ICT",
            "Martes y Miercoles son los mejores dias para tradear segun la metodologia ICT",
            "SOLO busca entradas durante Killzones: fuera de ellas el movimiento es ruido"
          ],
          quiz: [
            {
              question: "Que representa la fase de 'Manipulacion' en el Power of 3 (AMD)?",
              options: [
                "El movimiento real del dia a favor de las instituciones",
                "El periodo donde el precio consolida sin direccion",
                "El movimiento falso que barre liquidez en la direccion opuesta al movimiento real",
                "El cierre de posiciones al final del dia"
              ],
              correctIndex: 2,
              explanation: "La Manipulacion es el movimiento falso (Judas Swing) que las instituciones crean para barrer stops y tomar liquidez en la direccion opuesta a su intencion real, antes de que ocurra el movimiento verdadero (Distribucion)."
            },
            {
              question: "Cual es la London Killzone en hora EST?",
              options: [
                "07:00 - 10:00 EST",
                "02:00 - 05:00 EST",
                "10:00 - 12:00 EST",
                "20:00 - 00:00 EST"
              ],
              correctIndex: 1,
              explanation: "La London Killzone segun ICT es de 02:00 a 05:00 EST (08:00 a 11:00 hora de Espana). Es cuando las instituciones de Londres son mas activas y los movimientos mas significativos de la sesion europea ocurren."
            },
            {
              question: "Que setup ocurre cuando London barre el rango asiatico?",
              options: [
                "Es una senal de que Asia tenia razon y el precio continuara",
                "No tiene significado, es aleatorio",
                "London barre la liquidez creada por Asia (manipulacion) y luego distribuye en la direccion opuesta al sweep",
                "Significa que debemos cerrar todas nuestras operaciones inmediatamente"
              ],
              correctIndex: 2,
              explanation: "Cuando London barre un extremo del rango asiatico, esta tomando la liquidez acumulada durante Asia (la fase de manipulacion del AMD). Despues, el precio tipicamente se mueve en la direccion opuesta al sweep (distribucion)."
            },
            {
              question: "Segun ICT, cuales son los mejores dias de la semana para tradear?",
              options: [
                "Lunes y Viernes por la alta volatilidad",
                "Martes y Miercoles por la mayor probabilidad de movimientos predecibles",
                "Todos los dias son iguales",
                "Solo los Jueves porque hay reversiones"
              ],
              correctIndex: 1,
              explanation: "ICT considera Martes y Miercoles como los dias de maxima probabilidad. Las instituciones estan mas activas estos dias y los movimientos son mas predecibles. Lunes es de preparacion y Viernes es de toma de beneficios."
            }
          ],
          practicalExercise: "Durante una semana completa, marca el rango asiatico (high y low) CADA DIA en EUR/USD M15. Luego observa que pasa cuando abre London: barrio el high o el low de Asia? Que paso despues del sweep? El precio continuo o revirtio? Documenta los 5 dias con capturas de pantalla y calcula: en cuantos de los 5 dias el patron AMD fue visible? Esto te dara una comprension practica del Power of 3."
        },
        // --------------------------------------------------------------------
        // LESSON 4-2-2: FVG, PREMIUM/DISCOUNT, CONFLUENCIAS
        // --------------------------------------------------------------------
        {
          id: "4-2-2",
          title: "Fair Value Gaps, Premium/Discount y Confluencias",
          duration: "55 min",
          content: `
<h2>Fair Value Gaps: El Desequilibrio Institucional</h2>

<div class="analogy-box">
<h3>La Analogia de la Autopista</h3>
<p>Imagina que conduces por una autopista y hay un tramo de 5 km donde no hay NINGUNA gasolinera, restaurante ni area de descanso. Es un "hueco" en los servicios. Eventualmente, alguien construira algo ahi porque hay demanda insatisfecha. En trading, un <strong>Fair Value Gap (FVG)</strong> es exactamente eso: un "hueco" en el precio donde no hubo transacciones suficientes. El precio tiende a volver para "llenar" ese hueco, igual que alguien eventualmente construira una gasolinera en ese tramo vacio de la autopista.</p>
</div>

<h3>Que es un Fair Value Gap (FVG)</h3>

<p>Un <strong>Fair Value Gap</strong> es un desequilibrio en el precio que se crea cuando un movimiento es TAN agresivo que deja un gap entre tres velas consecutivas. Tecnicamente, es el espacio donde <strong>la mecha de la vela 1 NO se solapa con la mecha de la vela 3</strong>, dejando un hueco donde solo la vela 2 opero.</p>

<div class="highlight-box blue">
<h4>Identificacion de un FVG (Regla de las 3 Velas)</h4>
<p><strong>FVG Alcista (Bullish):</strong></p>
<ol>
<li>Vela 1: Cualquier vela (su MAXIMO es importante)</li>
<li>Vela 2: Vela alcista GRANDE y agresiva (la que crea el gap)</li>
<li>Vela 3: Cualquier vela (su MINIMO es importante)</li>
<li><strong>El FVG esta entre el maximo de la vela 1 y el minimo de la vela 3</strong></li>
</ol>
<p><strong>FVG Bajista (Bearish):</strong></p>
<ol>
<li>Vela 1: Cualquier vela (su MINIMO es importante)</li>
<li>Vela 2: Vela bajista GRANDE y agresiva (la que crea el gap)</li>
<li>Vela 3: Cualquier vela (su MAXIMO es importante)</li>
<li><strong>El FVG esta entre el minimo de la vela 1 y el maximo de la vela 3</strong></li>
</ol>
</div>

<h3>Tipos de FVG</h3>

<div class="grid-cards">
<div class="concept-card">
<h4>BISI - Buyside Imbalance Sellside Inefficiency</h4>
<p>Es el FVG ALCISTA. Se forma durante un movimiento al alza. Hay desequilibrio en el lado comprador e ineficiencia en el lado vendedor. Cuando el precio retrocede a esta zona, los compradores institucionales tienen ordenes pendientes ahi. <strong>Usalo como zona de compra (LONG).</strong></p>
</div>
<div class="concept-card">
<h4>SIBI - Sellside Imbalance Buyside Inefficiency</h4>
<p>Es el FVG BAJISTA. Se forma durante un movimiento a la baja. Hay desequilibrio en el lado vendedor e ineficiencia en el lado comprador. Cuando el precio retrocede a esta zona, los vendedores institucionales tienen ordenes pendientes ahi. <strong>Usalo como zona de venta (SHORT).</strong></p>
</div>
</div>

<h3>Inversed Fair Value Gap (IFVG)</h3>

<div class="highlight-box red">
<h4>IFVG: Cuando un FVG Cambia de Rol</h4>
<p>Un <strong>IFVG (Inversed FVG)</strong> se crea cuando el precio cierra completamente A TRAVES de un FVG con fuerza. Similar a como un OB invalidado se convierte en Breaker, un FVG atravesado se convierte en un IFVG que actua en la direccion OPUESTA.</p>
<p><strong>FVG alcista violado con cierre bajista:</strong> Se convierte en un IFVG bajista (zona de venta)</p>
<p><strong>FVG bajista violado con cierre alcista:</strong> Se convierte en un IFVG alcista (zona de compra)</p>
<p><strong>Mecanica:</strong> Los traders que tenian ordenes en ese FVG original ahora estan "atrapados" en el lado equivocado. Sus ordenes de salida (stop losses) crean presion en la direccion opuesta.</p>
</div>

<h3>Consequent Encroachment (CE)</h3>

<p>El <strong>Consequent Encroachment</strong> es el punto medio EXACTO (50%) de un Fair Value Gap. Es un concepto avanzado de ICT que funciona como un nivel de precision dentro del FVG.</p>

<div class="strategy-box">
<h4>Como Usar el CE</h4>
<p><strong>Regla:</strong> Si el precio entra en un FVG y alcanza el CE (50%), la probabilidad de que el FVG sea respetado DISMINUYE. Si el precio solo toca el borde del FVG sin alcanzar el CE, la reaccion suele ser mas fuerte.</p>
<p><strong>Como nivel de precision:</strong> El CE es el punto exacto donde puedes colocar tu entrada limit dentro de un FVG para maxima precision. Es como refinar un OB pero para FVGs.</p>
<p><strong>Calculo:</strong> CE = (Maximo del FVG + Minimo del FVG) / 2</p>
</div>

<h3>Premium y Discount Zones</h3>

<p>Este concepto es FUNDAMENTAL para filtrar trades. Piensa en ello como comprar en rebajas (discount) y vender a precio completo (premium).</p>

<div class="grid-cards">
<div class="card">
<h4>Como Calcular Premium/Discount</h4>
<p>Toma el rango actual del precio (el ultimo swing high y swing low):</p>
<p><strong>Equilibrium (50%):</strong> (Swing High + Swing Low) / 2</p>
<p><strong>Premium Zone:</strong> TODO lo que esta POR ENCIMA del 50% (caro)</p>
<p><strong>Discount Zone:</strong> TODO lo que esta POR DEBAJO del 50% (barato)</p>
</div>
<div class="card">
<h4>Niveles Fibonacci Clave en ICT</h4>
<p>ICT usa niveles de Fibonacci OTE (Optimal Trade Entry):</p>
<ul>
<li><strong>0.5 (50%):</strong> Equilibrium - zona neutral</li>
<li><strong>0.618 (61.8%):</strong> Inicio de la zona OTE</li>
<li><strong>0.705 (70.5%):</strong> PUNTO OPTIMO de entrada ICT</li>
<li><strong>0.786 (78.6%):</strong> Fin de la zona OTE</li>
</ul>
<p>La zona OTE (0.618 - 0.786) es donde ICT busca la mayoria de sus entradas.</p>
</div>
</div>

<div class="strategy-box">
<h4>Reglas de Premium/Discount</h4>
<ul>
<li><strong>SOLO compra (LONG) en Discount Zone:</strong> Por debajo del 50% del rango. Estas comprando "barato".</li>
<li><strong>SOLO vende (SHORT) en Premium Zone:</strong> Por encima del 50% del rango. Estas vendiendo "caro".</li>
<li><strong>Un OB alcista en Premium Zone:</strong> DEBIL. No tradees.</li>
<li><strong>Un OB alcista en Discount Zone:</strong> FUERTE. Alta probabilidad.</li>
<li><strong>Un FVG bajista en Discount Zone:</strong> DEBIL. Poca confianza.</li>
<li><strong>Un FVG bajista en Premium Zone:</strong> FUERTE. Alta probabilidad.</li>
</ul>
</div>

<h3>Combinando TODO: El Sistema de Confluencias ICT</h3>

<p>El poder real de ICT no esta en un concepto individual. Esta en la <strong>CONFLUENCIA</strong> de multiples conceptos alineados. Cuantas mas confluencias, mayor probabilidad.</p>

<div class="highlight-box green">
<h4>Checklist de Confluencias ICT para un Trade A+</h4>
<ol>
<li><strong>Bias HTF (Higher Time Frame):</strong> La tendencia en H4/Daily esta a tu favor? (BOS, estructura)</li>
<li><strong>Premium/Discount:</strong> Estas comprando en discount o vendiendo en premium?</li>
<li><strong>Liquidez tomada:</strong> Se ha barrido liquidez (equal highs/lows, PDH/PDL, Asia range)?</li>
<li><strong>Order Block:</strong> Hay un OB valido y fresco en tu zona de entrada?</li>
<li><strong>Fair Value Gap:</strong> Hay un FVG que coincide con tu OB?</li>
<li><strong>Killzone:</strong> Estas dentro de una Killzone activa?</li>
<li><strong>Power of 3:</strong> Puedes identificar la fase AMD del dia?</li>
<li><strong>Confirmacion LTF:</strong> Hay CHoCH o BOS en timeframe menor?</li>
</ol>
<p><strong>4-5 confluencias = Setup de alta probabilidad (A)</strong></p>
<p><strong>6-7 confluencias = Setup de altisima probabilidad (A+)</strong></p>
<p><strong>8 confluencias = El setup perfecto. RARO pero devastadoramente efectivo</strong></p>
</div>

<div class="example-box">
<h4>Trade A+ Completo con Todas las Confluencias</h4>
<p><strong>Par:</strong> EUR/USD | <strong>Fecha:</strong> Martes (dia optimo ICT)</p>
<p><strong>1. Bias HTF (H4):</strong> Tendencia alcista. Ultimo BOS al alza. Bias = LONG.</p>
<p><strong>2. Sesion:</strong> London Killzone (08:30 Espana) - Killzone activa.</p>
<p><strong>3. AMD:</strong> Asia creo rango 1.0850-1.0870. London abre y rompe ABAJO de 1.0850 (barre SSL = Manipulacion).</p>
<p><strong>4. Liquidez:</strong> El sweep tomo equal lows + Asia session low. Liquidez tomada.</p>
<p><strong>5. Premium/Discount:</strong> El rango del swing es 1.0800-1.0900. El 50% es 1.0850. El precio esta en 1.0840 = DISCOUNT zone.</p>
<p><strong>6. Order Block:</strong> En M15, hay un Bullish OB fresco en 1.0835-1.0845 (ultimo cierre bajista antes de un BOS previo).</p>
<p><strong>7. FVG:</strong> Dentro del OB hay un BISI (FVG alcista) de 1.0838 a 1.0843. OB + FVG = Propulsion Block.</p>
<p><strong>8. Confirmacion LTF:</strong> En M1, el precio toca 1.0840, forma un CHoCH alcista con vela envolvente.</p>
<p><strong>Entrada:</strong> LONG en 1.0842 | <strong>SL:</strong> 1.0828 (debajo del OB) = 14 pips | <strong>TP:</strong> 1.0898 (BSL: equal highs en H1) = 56 pips</p>
<p><strong>RR:</strong> 56/14 = <strong>4:1</strong> | <strong>Confluencias:</strong> 8/8 = Setup PERFECTO</p>
</div>

<div class="warning-box">
<h4>La Trampa de la Sobre-Complejidad</h4>
<p>ICT tiene docenas de conceptos. NO necesitas usar TODOS en cada trade. Los traders mas rentables usan 3-4 conceptos clave con maestria, no 20 conceptos a medias. Domina primero: Liquidez + OBs + FVGs + Killzones. Luego anade capas gradualmente. <strong>Simplicidad con comprension profunda siempre gana a complejidad superficial.</strong></p>
</div>`,
          keyPoints: [
            "Un FVG es un gap de 3 velas donde la mecha de la vela 1 no se solapa con la mecha de la vela 3, indicando movimiento institucional agresivo",
            "BISI = FVG alcista (zona de compra), SIBI = FVG bajista (zona de venta). IFVG = FVG violado que cambia de rol",
            "Consequent Encroachment (CE) es el 50% exacto del FVG y funciona como nivel de precision para entradas",
            "Premium Zone = encima del 50% del rango (vende aqui), Discount Zone = debajo del 50% (compra aqui)",
            "La zona OTE de ICT (Fibonacci 0.618-0.786) es el punto optimo de entrada en retrocesos",
            "4+ confluencias alineadas = setup de alta probabilidad. 6+ confluencias = setup A+ excepcional"
          ],
          quiz: [
            {
              question: "Como se identifica un Fair Value Gap alcista?",
              options: [
                "Dos velas consecutivas del mismo color",
                "El espacio entre el maximo de la vela 1 y el minimo de la vela 3, donde solo opero la vela 2 alcista agresiva",
                "Cualquier gap en el grafico",
                "Una vela con mecha larga"
              ],
              correctIndex: 1,
              explanation: "Un FVG alcista se identifica por el espacio (gap) entre el maximo de la vela 1 y el minimo de la vela 3. La vela 2 (alcista y agresiva) es la unica que opero en esa zona, dejando un desequilibrio que el precio tiende a llenar."
            },
            {
              question: "Que es la zona OTE de ICT y donde se encuentra?",
              options: [
                "Es la zona entre 0% y 50% del retroceso Fibonacci",
                "Es la zona entre 61.8% y 78.6% del retroceso Fibonacci, considerada el punto optimo de entrada",
                "Es la zona por encima del 100% de Fibonacci",
                "Es el nivel exacto de 50% de Fibonacci"
              ],
              correctIndex: 1,
              explanation: "La OTE (Optimal Trade Entry) de ICT se encuentra entre los niveles 0.618 y 0.786 del retroceso Fibonacci, con el 0.705 como punto optimo. Es donde ICT busca la mayoria de sus entradas por tener la mejor relacion riesgo-beneficio."
            },
            {
              question: "Segun las reglas de Premium/Discount, donde debes buscar compras (LONG)?",
              options: [
                "En la Premium Zone, por encima del 50% del rango",
                "En la Discount Zone, por debajo del 50% del rango",
                "En cualquier zona, no importa",
                "Solo exactamente en el 50% (Equilibrium)"
              ],
              correctIndex: 1,
              explanation: "Las compras (LONG) se buscan en la Discount Zone, debajo del 50% del rango. Estas comprando 'barato'. Las ventas (SHORT) se buscan en la Premium Zone, encima del 50%. Esto maximiza la probabilidad y el ratio riesgo-beneficio."
            }
          ],
          practicalExercise: "Abre EUR/USD en M15 y aplica TODO lo aprendido. 1) Identifica los ultimos 3 FVGs (marca si son BISI o SIBI). 2) Dibuja el retroceso Fibonacci del ultimo swing y marca las zonas Premium, Discount y OTE. 3) Busca un trade historico donde al menos 4 confluencias ICT estaban alineadas (Killzone + Liquidez tomada + OB/FVG + Premium/Discount). 4) Calcula el CE de cada FVG y observa si el precio reacciono ahi. Documenta todo con capturas de pantalla."
        }
      ]
    },
    // ========================================================================
    // MODULE 4-3: PRICE ACTION Y METODOLOGIAS CLASICAS
    // ========================================================================
    {
      id: "mod-4-3",
      title: "Price Action y Metodologias Clasicas",
      description: "Domina Price Action puro, Supply/Demand, Wyckoff y construye tu sistema completo",
      icon: "\u{1F4D0}",
      color: "#10B981",
      lessons: [
        // --------------------------------------------------------------------
        // LESSON 4-3-1: PRICE ACTION PURO Y SUPPLY/DEMAND
        // --------------------------------------------------------------------
        {
          id: "4-3-1",
          title: "Price Action Puro y Supply/Demand",
          duration: "45 min",
          content: `
<h2>Price Action: El Arte de Leer el Precio Desnudo</h2>

<div class="analogy-box">
<h3>La Analogia del Detective</h3>
<p>Un buen detective no necesita que el criminal le diga donde esta. Lee las pistas: huellas, marcas, patrones de comportamiento. El precio deja pistas EXACTAMENTE igual. Cada vela, cada mecha, cada patron te cuenta una historia. Los indicadores son como leer el informe de otro detective: llega tarde y puede estar equivocado. El price action es como estar en la escena del crimen en tiempo real. <strong>El precio es el unico indicador que NO miente y NO tiene retraso.</strong></p>
</div>

<h3>Principios del Price Action Puro</h3>

<div class="highlight-box green">
<h4>Por que Tradear sin Indicadores</h4>
<ul>
<li><strong>Los indicadores son derivados del precio:</strong> TODOS los indicadores (RSI, MACD, medias moviles) se calculan A PARTIR del precio. Son el precio procesado con un retraso. Ir a la fuente original es siempre mas rapido y preciso.</li>
<li><strong>Sin retraso (lag):</strong> El precio es informacion en TIEMPO REAL. Los indicadores siempre reaccionan DESPUES del movimiento.</li>
<li><strong>Claridad visual:</strong> Un grafico limpio te permite ver la estructura, las zonas clave y los patrones sin distracciones.</li>
<li><strong>Universalidad:</strong> El price action funciona en CUALQUIER mercado, CUALQUIER timeframe, CUALQUIER epoca. Los patrones de comportamiento humano no cambian.</li>
</ul>
</div>

<h3>Velas Japonesas en Contexto</h3>

<p>Las velas japonesas individuales NO significan nada por si solas. Un "martillo" en medio de la nada es irrelevante. Lo que importa es DONDE aparece la vela y QUE ha pasado antes.</p>

<div class="grid-cards">
<div class="concept-card">
<h4>Pin Bar / Martillo (en Soporte/Zona de Demanda)</h4>
<p><strong>Que es:</strong> Vela con cuerpo pequeno y mecha inferior larga (al menos 2/3 de la vela total).</p>
<p><strong>En contexto:</strong> En una zona de demanda, despues de una caida, un pin bar alcista indica rechazo agresivo del precio bajo. Los compradores absorbieron toda la presion vendedora.</p>
<p><strong>SIN contexto:</strong> Un pin bar en medio del rango no significa nada. Ignoralo.</p>
</div>
<div class="concept-card">
<h4>Engulfing / Envolvente</h4>
<p><strong>Que es:</strong> Una vela cuyo cuerpo envuelve completamente el cuerpo de la vela anterior.</p>
<p><strong>En contexto:</strong> Un bullish engulfing en una zona de demanda fresca, despues de un retroceso, es una senal de compra potente. Muestra que los compradores dominaron completamente a los vendedores.</p>
<p><strong>SIN contexto:</strong> Engulfings ocurren constantemente. Solo son significativos en ZONAS CLAVE.</p>
</div>
<div class="concept-card">
<h4>Inside Bar</h4>
<p><strong>Que es:</strong> Una vela cuyo rango (high-low) esta completamente dentro del rango de la vela anterior.</p>
<p><strong>En contexto:</strong> Indica consolidacion e indecision. En una zona clave, precede frecuentemente un movimiento explosivo. La rotura del rango del inside bar da la direccion.</p>
<p><strong>Uso avanzado:</strong> Multiples inside bars consecutivos = compresion extrema = explosion inminente.</p>
</div>
<div class="concept-card">
<h4>Doji de Lapida / Shooting Star (en Resistencia/Zona de Supply)</h4>
<p><strong>Que es:</strong> Vela con cuerpo pequeno y mecha superior larga.</p>
<p><strong>En contexto:</strong> En una zona de supply o resistencia, indica rechazo agresivo del precio alto. Los vendedores empujaron el precio de vuelta. Senal de venta si esta en zona correcta.</p>
</div>
</div>

<div class="warning-box">
<h4>La Regla del Contexto</h4>
<p>NUNCA tradees una vela aislada. SIEMPRE preguntate: Donde esta esta vela? Esta en una zona de supply/demand? Ha habido un barrido de liquidez? Estamos en killzone? El contexto lo es TODO. Una vela perfecta en el lugar equivocado = trade perdedor. Una vela mediocre en el lugar correcto = trade ganador.</p>
</div>

<h3>Supply y Demand: Mas alla del Soporte/Resistencia</h3>

<p>Supply/Demand es la version AVANZADA de soporte/resistencia. Mientras que S/R son lineas donde el precio "reboto" en el pasado, Supply/Demand son ZONAS donde hay ordenes institucionales pendientes.</p>

<div class="grid-cards">
<div class="card">
<h4>Soporte/Resistencia Clasico</h4>
<ul>
<li>Son LINEAS (un precio exacto)</li>
<li>Se basan en donde el precio reboto antes</li>
<li>Cuantas mas veces toca, "mas fuerte" (FALSO)</li>
<li>No explican POR QUE el precio reacciona</li>
<li>Enfoque REACTIVO</li>
</ul>
</div>
<div class="card">
<h4>Supply/Demand Zones</h4>
<ul>
<li>Son ZONAS (rango de precio)</li>
<li>Se basan en donde las instituciones dejaron ordenes</li>
<li>Cuantas mas veces toca, MAS DEBIL (ordenes se agotan)</li>
<li>Explican la mecanica: ordenes pendientes institucionales</li>
<li>Enfoque PROACTIVO</li>
</ul>
</div>
</div>

<h3>Identificando Zonas de Demanda y Supply</h3>

<div class="strategy-box">
<h4>Zona de Demanda (Compra)</h4>
<p>Una zona de demanda se crea cuando el precio <strong>cae, se detiene, consolida brevemente, y EXPLOTA al alza con fuerza</strong>. La zona es el area de consolidacion justo antes de la explosion alcista.</p>
<p><strong>Patron: Drop-Base-Rally (DBR)</strong></p>
<ol>
<li><strong>Drop:</strong> El precio cae con velas bajistas</li>
<li><strong>Base:</strong> El precio se detiene, crea 1-3 velas pequenas de consolidacion</li>
<li><strong>Rally:</strong> El precio explota al alza con velas alcistas agresivas</li>
</ol>
<p>La "Base" es tu zona de demanda. Cuando el precio regrese ahi, los compradores institucionales que no llenaron toda su posicion la primera vez tienen ordenes pendientes esperando.</p>
</div>

<div class="strategy-box">
<h4>Zona de Supply (Venta)</h4>
<p>Una zona de supply se crea cuando el precio <strong>sube, se detiene, consolida brevemente, y CAE con fuerza</strong>. La zona es el area de consolidacion justo antes de la caida.</p>
<p><strong>Patron: Rally-Base-Drop (RBD)</strong></p>
<ol>
<li><strong>Rally:</strong> El precio sube con velas alcistas</li>
<li><strong>Base:</strong> El precio se detiene, crea 1-3 velas pequenas de consolidacion</li>
<li><strong>Drop:</strong> El precio cae con velas bajistas agresivas</li>
</ol>
<p>La "Base" es tu zona de supply. Cuando el precio regrese, los vendedores institucionales tienen ordenes esperando.</p>
</div>

<h3>Variaciones de Patrones</h3>

<div class="grid-cards">
<div class="card">
<h4>Rally-Base-Rally (RBR)</h4>
<p>En tendencia alcista, el precio sube, consolida, y sigue subiendo. La base crea una zona de demanda de CONTINUACION. Es mas debil que DBR pero util en tendencias fuertes.</p>
</div>
<div class="card">
<h4>Drop-Base-Drop (DBD)</h4>
<p>En tendencia bajista, el precio baja, consolida, y sigue bajando. La base crea una zona de supply de CONTINUACION. Es mas debil que RBD pero util en tendencias fuertes.</p>
</div>
</div>

<h3>Zonas Frescas vs Testeadas</h3>

<div class="highlight-box blue">
<h4>La Regla de la Frescura</h4>
<p><strong>Zona Fresca:</strong> El precio NUNCA ha regresado a esa zona desde que fue creada. Tiene la maxima probabilidad de reaccion porque TODAS las ordenes institucionales siguen ahi. <strong>Primera opcion siempre.</strong></p>
<p><strong>Zona Testeada (1 toque):</strong> El precio regreso una vez. Parte de las ordenes ya se ejecutaron. Aun puede funcionar pero con menor probabilidad. Requiere mas confirmacion.</p>
<p><strong>Zona Agotada (2+ toques):</strong> El precio ha regresado multiples veces. Las ordenes se han agotado. <strong>NO la tradees.</strong> Es un "soporte/resistencia clasico" disfrazado de S/D zone.</p>
</div>

<div class="example-box">
<h4>Setup de Supply/Demand</h4>
<p><strong>1.</strong> En H4, identificas una zona de demanda fresca tipo DBR en GBP/USD entre 1.2650-1.2665.</p>
<p><strong>2.</strong> El precio esta actualmente en 1.2720 bajando hacia tu zona.</p>
<p><strong>3.</strong> Pones alerta en 1.2670 (justo antes de la zona).</p>
<p><strong>4.</strong> El precio llega a 1.2660 durante London Killzone.</p>
<p><strong>5.</strong> En M15, ves un pin bar alcista con mecha que penetra la zona pero cierra dentro de ella.</p>
<p><strong>6.</strong> Entrada LONG en 1.2665, SL debajo de la zona en 1.2640, TP en el ultimo swing high 1.2750.</p>
<p><strong>7.</strong> RR: 85 pips / 25 pips = 3.4:1</p>
</div>`,
          keyPoints: [
            "El precio es el unico indicador sin retraso: todo lo demas se deriva de el y llega tarde",
            "Las velas japonesas SOLO son significativas en CONTEXTO: zona clave + estructura + timing. Nunca tradees una vela aislada",
            "Supply/Demand son ZONAS de ordenes institucionales, no lineas de soporte/resistencia. Cuantas mas veces se toca, MAS DEBIL (al reves que S/R clasico)",
            "Patrones clave: Drop-Base-Rally (demanda fuerte), Rally-Base-Drop (supply fuerte), RBR y DBD (continuacion)",
            "Las zonas FRESCAS (sin tocar) son las mas poderosas. Despues de 2+ toques, la zona esta agotada"
          ],
          quiz: [
            {
              question: "Cual es la diferencia fundamental entre Supply/Demand y Soporte/Resistencia clasico?",
              options: [
                "No hay diferencia, son lo mismo",
                "S/D son zonas con ordenes institucionales donde mas toques = mas debil; S/R son lineas donde mas toques = supuestamente mas fuerte",
                "S/R es mas preciso que S/D",
                "S/D solo funciona en Forex y S/R solo en acciones"
              ],
              correctIndex: 1,
              explanation: "Supply/Demand son zonas basadas en ordenes institucionales pendientes que se AGOTAN con cada toque. Soporte/Resistencia clasico son lineas que supuestamente se 'fortalecen' con mas toques, lo cual es incorrecto desde la perspectiva institucional."
            },
            {
              question: "Que patron forma una zona de demanda fuerte?",
              options: [
                "Rally-Base-Drop (RBD)",
                "Drop-Base-Rally (DBR)",
                "Drop-Base-Drop (DBD)",
                "Rally-Rally-Rally"
              ],
              correctIndex: 1,
              explanation: "El Drop-Base-Rally (DBR) crea la zona de demanda mas fuerte. El precio cae (drop), se detiene y consolida (base = zona de demanda), y luego explota al alza (rally). La base es donde las instituciones acumularon compras agresivamente."
            },
            {
              question: "Por que las velas japonesas individuales no deben tradearse aisladamente?",
              options: [
                "Porque las velas japonesas no funcionan en trading",
                "Porque una vela aislada sin contexto (zona clave, estructura, timing) carece de significado probabilistico",
                "Porque solo funcionan en timeframes altos",
                "Porque necesitas indicadores para confirmarlas siempre"
              ],
              correctIndex: 1,
              explanation: "Una vela japonesa solo es significativa cuando aparece en el contexto correcto: en una zona clave (supply/demand, OB, FVG), con estructura favorable, y en el timing adecuado (killzone). Un martillo perfecto en medio del rango es ruido."
            }
          ],
          practicalExercise: "Abre GBP/USD en H1 con grafico LIMPIO (sin ningun indicador). 1) Identifica 3 zonas de demanda (busca patrones DBR) y 3 zonas de supply (busca patrones RBD). 2) Marca cada zona y anota si es fresca o testeada. 3) Observa que vela de confirmacion aparecio cuando el precio regreso a cada zona (pin bar, engulfing, inside bar?). 4) Compara tus zonas de S/D con los Order Blocks que identificaste en la leccion anterior. Notaras que muchas zonas coinciden."
        },
        // --------------------------------------------------------------------
        // LESSON 4-3-2: WYCKOFF METHOD
        // --------------------------------------------------------------------
        {
          id: "4-3-2",
          title: "Wyckoff Method: Las 4 Fases del Mercado",
          duration: "50 min",
          content: `
<h2>El Metodo Wyckoff: Entendiendo al "Composite Man"</h2>

<div class="analogy-box">
<h3>La Analogia del Director de Orquesta</h3>
<p>Imagina una orquesta sinfonica. Los 80 musicos (traders retail) tocan sus instrumentos, cada uno pensando que toma decisiones individuales. Pero hay UN director de orquesta (el Composite Man) que controla TODO: decide cuando suben los violines, cuando entran los tambores, y cuando hay silencio. El publico (observadores del mercado) ve la orquesta tocar, pero no siempre ve al director. <strong>Richard Wyckoff nos enseno a VER al director</strong> analizando como se comporta el precio y el volumen juntos.</p>
</div>

<h3>El Composite Man</h3>

<div class="highlight-box blue">
<h4>Quien es el Composite Man</h4>
<p>El <strong>Composite Man</strong> (hombre compuesto) es el concepto de Wyckoff que representa a TODAS las manos fuertes del mercado actuando como si fueran UNA sola entidad: bancos, fondos de cobertura, market makers, instituciones. No es una conspiracion, es una simplificacion util.</p>
<p><strong>Las 3 Leyes de Wyckoff:</strong></p>
<ol>
<li><strong>Ley de Oferta y Demanda:</strong> Si la demanda supera la oferta, el precio sube. Si la oferta supera la demanda, el precio baja. Simple, pero la clave esta en DETECTAR cual domina.</li>
<li><strong>Ley de Causa y Efecto:</strong> Cuanto mas tiempo dure una acumulacion/distribucion (causa), mayor sera el movimiento posterior (efecto). Un rango lateral de 3 meses produce un movimiento mas grande que uno de 3 dias.</li>
<li><strong>Ley de Esfuerzo vs Resultado:</strong> Si hay mucho volumen (esfuerzo) pero poco movimiento de precio (resultado), algo esta cambiando. Es como empujar un coche: si empujas fuerte y no se mueve, hay algo bloqueandolo.</li>
</ol>
</div>

<h3>Las 4 Fases del Ciclo de Mercado de Wyckoff</h3>

<div class="grid-cards">
<div class="concept-card">
<h4>Fase 1: Acumulacion</h4>
<p><strong>Que pasa:</strong> Despues de una caida prolongada, el Composite Man comienza a COMPRAR silenciosamente. El precio deja de caer pero no sube. Se queda en un rango lateral.</p>
<p><strong>Que ves:</strong></p>
<ul>
<li>Rango lateral despues de una tendencia bajista</li>
<li>El volumen empieza a aumentar en los rebotes alcistas</li>
<li>El volumen disminuye en las caidas dentro del rango</li>
<li>Los medios dicen que "todo esta mal" y los retail venden</li>
</ul>
<p><strong>Duracion:</strong> Semanas a meses. Cuanto mas dura, mas fuerte sera el movimiento posterior (Ley de Causa y Efecto).</p>
<p><strong>Eventos clave:</strong> PS (Preliminary Support), SC (Selling Climax), AR (Automatic Rally), ST (Secondary Test), Spring</p>
</div>
<div class="concept-card">
<h4>Fase 2: Markup (Tendencia Alcista)</h4>
<p><strong>Que pasa:</strong> El Composite Man ya tiene su posicion. Ahora permite/impulsa el precio al alza. La tendencia alcista comienza.</p>
<p><strong>Que ves:</strong></p>
<ul>
<li>Higher highs y higher lows consistentes</li>
<li>Volumen alto en velas alcistas, volumen bajo en retrocesos</li>
<li>Los medios empiezan a hablar positivamente</li>
<li>Los retail empiezan a comprar (TARDE)</li>
</ul>
<p><strong>Estrategia:</strong> Comprar en retrocesos (pullbacks) a zonas de demanda/OBs. Es la fase donde mas dinero se gana en LONG.</p>
</div>
<div class="concept-card">
<h4>Fase 3: Distribucion</h4>
<p><strong>Que pasa:</strong> Despues de la subida, el Composite Man comienza a VENDER sus posiciones a los retail que compran euforizados. El precio deja de subir pero no cae. Rango lateral en la parte alta.</p>
<p><strong>Que ves:</strong></p>
<ul>
<li>Rango lateral despues de una tendencia alcista</li>
<li>El volumen aumenta en las caidas dentro del rango</li>
<li>El volumen disminuye en los rebotes alcistas</li>
<li>Los medios dicen "compra, compra" y los retail compran</li>
</ul>
<p><strong>Duracion:</strong> Similar a la acumulacion. Cuanto mas dura, mas fuerte sera la caida posterior.</p>
<p><strong>Eventos clave:</strong> PSY (Preliminary Supply), BC (Buying Climax), AR (Automatic Reaction), ST (Secondary Test), UTAD</p>
</div>
<div class="concept-card">
<h4>Fase 4: Markdown (Tendencia Bajista)</h4>
<p><strong>Que pasa:</strong> El Composite Man ha vendido todo. Ahora el precio cae libremente. La tendencia bajista domina.</p>
<p><strong>Que ves:</strong></p>
<ul>
<li>Lower highs y lower lows consistentes</li>
<li>Volumen alto en velas bajistas</li>
<li>Panico en los medios</li>
<li>Los retail venden en perdida (TARDE)</li>
</ul>
<p><strong>Estrategia:</strong> Vender en pullbacks a zonas de supply. Es la fase donde mas dinero se gana en SHORT.</p>
</div>
</div>

<h3>El Spring: La Trampa Maestra de Wyckoff</h3>

<div class="highlight-box green">
<h4>Que es el Spring</h4>
<p>El <strong>Spring</strong> es el evento mas importante del esquema de Acumulacion. Es un <strong>falso rompimiento POR DEBAJO del soporte</strong> del rango de acumulacion. El Composite Man empuja el precio abajo del rango para:</p>
<ol>
<li>Activar los stop losses de los que compraron en el rango (tomar liquidez)</li>
<li>Atrapar a los retail que venden el "breakout bajista"</li>
<li>Comprar a los MEJORES precios posibles</li>
</ol>
<p><strong>Despues del Spring, el precio se revierte violentamente al alza y el MARKUP comienza.</strong></p>
<p>Si esto te suena familiar, es porque el Spring de Wyckoff es EXACTAMENTE lo mismo que un <strong>liquidity sweep de Smart Money Concepts</strong>. Wyckoff lo describio hace 100 anos.</p>
</div>

<h3>El Upthrust (UTAD): La Version Inversa</h3>

<div class="highlight-box red">
<h4>Que es el Upthrust / UTAD</h4>
<p>El <strong>Upthrust After Distribution (UTAD)</strong> es lo opuesto al Spring. Es un <strong>falso rompimiento POR ENCIMA de la resistencia</strong> del rango de distribucion. El Composite Man empuja el precio arriba del rango para:</p>
<ol>
<li>Activar los stop losses de los que vendieron en el rango</li>
<li>Atrapar a los retail que compran el "breakout alcista"</li>
<li>Vender a los MEJORES precios posibles</li>
</ol>
<p><strong>Despues del Upthrust, el precio se revierte violentamente a la baja y el MARKDOWN comienza.</strong></p>
<p>El Upthrust es el equivalente de un liquidity grab de BSL en Smart Money Concepts.</p>
</div>

<h3>Esquema de Acumulacion Wyckoff Detallado</h3>

<div class="strategy-box">
<h4>Eventos del Esquema de Acumulacion (en orden)</h4>
<ol>
<li><strong>PS (Preliminary Support):</strong> Primer intento de frenado de la caida. Volumen alto pero el precio aun cae. Primera senal de que hay compradores.</li>
<li><strong>SC (Selling Climax):</strong> Venta de panico masiva. Volumen EXTREMO. El precio cae bruscamente y rebota. Marca el limite inferior del rango.</li>
<li><strong>AR (Automatic Rally):</strong> Rebote automatico despues del SC. Sin mucho esfuerzo. Marca el limite superior del rango.</li>
<li><strong>ST (Secondary Test):</strong> El precio retestea la zona del SC con MENOS volumen. Si el volumen es menor, confirma que la venta se esta agotando.</li>
<li><strong>Spring (o Shakeout):</strong> El falso rompimiento bajista. La trampa final. MOMENTO CLAVE.</li>
<li><strong>Test del Spring:</strong> El precio retestea la zona del Spring con volumen bajo. Si no cae, confirma que el Spring funciono.</li>
<li><strong>SOS (Sign of Strength):</strong> Movimiento alcista fuerte con volumen alto que rompe la resistencia del rango. La acumulacion ha terminado.</li>
<li><strong>LPS (Last Point of Support):</strong> Ultimo retroceso al rango antes del Markup definitivo. ULTIMA oportunidad de compra.</li>
</ol>
</div>

<h3>Wyckoff y Smart Money: La Conexion</h3>

<div class="grid-cards">
<div class="card">
<h4>Wyckoff Spring = SMC Liquidity Sweep</h4>
<p>Ambos describen el falso rompimiento que toma stops antes del movimiento real. Wyckoff lo llamo Spring hace 100 anos. ICT/SMC lo llama liquidity sweep hoy.</p>
</div>
<div class="card">
<h4>Wyckoff Acumulacion = SMC Acumulacion del AMD</h4>
<p>La fase de rango donde las instituciones construyen posiciones en silencio. Mismo concepto, diferente nomenclatura.</p>
</div>
<div class="card">
<h4>Wyckoff Composite Man = SMC Smart Money</h4>
<p>La misma idea: hay manos fuertes que mueven el mercado con un proposito. Wyckoff lo llamo Composite Man. ICT lo llama Smart Money o Institutional Players.</p>
</div>
<div class="card">
<h4>Wyckoff SOS = SMC Break of Structure</h4>
<p>El Sign of Strength de Wyckoff es el Break of Structure de SMC: el momento donde la tendencia cambia oficialmente y el movimiento direccional comienza.</p>
</div>
</div>

<div class="example-box">
<h4>Identificando Wyckoff en Tiempo Real</h4>
<p><strong>Par:</strong> BTC/USD Daily</p>
<p><strong>1. SC (Selling Climax):</strong> Bitcoin cae de 30,000 a 15,500 con volumen record. Panico total. Marca el low.</p>
<p><strong>2. AR (Automatic Rally):</strong> Rebote rapido a 18,000. Sin mucho esfuerzo.</p>
<p><strong>3. ST (Secondary Test):</strong> Bitcoin cae a 16,200. Volumen mucho menor que en el SC. La venta se agota.</p>
<p><strong>4. Spring:</strong> Bitcoin cae brevemente a 15,400 (debajo del SC). Mecha larga, cierre por encima de 16,000. Los stops se activaron. EL MOMENTO DE COMPRAR.</p>
<p><strong>5. SOS:</strong> Bitcoin rompe 18,000 con volumen fuerte. La acumulacion termino.</p>
<p><strong>6. Markup:</strong> Bitcoin sube de 18,000 a 45,000+ en los meses siguientes.</p>
</div>

<div class="warning-box">
<h4>Error Comun con Wyckoff</h4>
<p>No todos los rangos laterales son acumulacion o distribucion. A veces son simplemente consolidacion sin proposito institucional claro. La CLAVE esta en el volumen: si el volumen confirma el esquema (disminuye donde debe disminuir, aumenta donde debe aumentar), es Wyckoff. Si el volumen no cuadra, probablemente no lo es. <strong>El volumen es el detector de mentiras de Wyckoff.</strong></p>
</div>`,
          keyPoints: [
            "El Composite Man de Wyckoff representa a todas las manos fuertes actuando como una sola entidad, es el mismo concepto que Smart Money",
            "Las 4 fases ciclicas: Acumulacion (rango inferior) -> Markup (tendencia alcista) -> Distribucion (rango superior) -> Markdown (tendencia bajista)",
            "El Spring es un falso rompimiento bajista en acumulacion que barre stops: es identico al liquidity sweep de SMC",
            "El Upthrust (UTAD) es un falso rompimiento alcista en distribucion: equivalente a un BSL sweep",
            "Las 3 Leyes de Wyckoff: Oferta/Demanda, Causa/Efecto (mayor rango = mayor movimiento), Esfuerzo/Resultado (volumen vs precio)",
            "El volumen es el detector de mentiras: confirma o niega cada fase del esquema Wyckoff"
          ],
          quiz: [
            {
              question: "Que es el Spring en el esquema de Acumulacion de Wyckoff?",
              options: [
                "Un movimiento alcista fuerte que rompe la resistencia del rango",
                "Un falso rompimiento por debajo del soporte del rango que barre stops antes de que el precio suba",
                "La fase inicial de la acumulacion",
                "El periodo de mayor volumen en una tendencia alcista"
              ],
              correctIndex: 1,
              explanation: "El Spring es un falso rompimiento por debajo del soporte del rango de acumulacion. El Composite Man empuja el precio abajo para activar stops, tomar liquidez, y comprar a los mejores precios antes de impulsar el Markup."
            },
            {
              question: "Cual de las leyes de Wyckoff establece que un rango lateral mas largo produce un movimiento mas grande?",
              options: [
                "Ley de Oferta y Demanda",
                "Ley de Esfuerzo vs Resultado",
                "Ley de Causa y Efecto",
                "Ley del Composite Man"
              ],
              correctIndex: 2,
              explanation: "La Ley de Causa y Efecto dice que cuanto mas tiempo dure la 'causa' (acumulacion o distribucion), mayor sera el 'efecto' (movimiento tendencial posterior). Un rango de 3 meses produce un movimiento mucho mayor que uno de 3 dias."
            },
            {
              question: "Como se conecta el Spring de Wyckoff con los conceptos de Smart Money?",
              options: [
                "No tienen ninguna relacion",
                "El Spring es identico al concepto de liquidity sweep/grab: ambos son falsos rompimientos que toman liquidez antes del movimiento real",
                "El Spring solo funciona en acciones, SMC solo en Forex",
                "El Spring es un indicador tecnico y SMC es price action"
              ],
              correctIndex: 1,
              explanation: "El Spring de Wyckoff y el liquidity sweep de SMC son esencialmente el mismo concepto: un movimiento falso que rompe un nivel clave para tomar la liquidez (activar stops) antes de que el precio se mueva en la direccion real. Wyckoff lo describio hace 100 anos."
            }
          ],
          practicalExercise: "Busca BTC/USD o SP500 en grafico Diario y encuentra un ejemplo historico de un ciclo completo de Wyckoff. Marca cada evento: PS, SC, AR, ST, Spring (si existe), SOS, LPS. Verifica si el volumen confirma cada fase. Luego, traduce cada evento a terminologia SMC: donde estan los liquidity sweeps? Donde estan los BOS? Donde estan los OBs? Comprobaras que Wyckoff y SMC cuentan la misma historia."
        },
        // --------------------------------------------------------------------
        // LESSON 4-3-3: TU SISTEMA COMPLETO DE TRADING
        // --------------------------------------------------------------------
        {
          id: "4-3-3",
          title: "Tu Sistema Completo de Trading",
          duration: "55 min",
          content: `
<h2>Construyendo TU Sistema de Trading</h2>

<div class="analogy-box">
<h3>La Analogia del Chef</h3>
<p>Conocer ingredientes individuales no te hace chef. Saber que el ajo sabe bien, que la sal realza sabores, y que el aceite de oliva es versatil no significa nada si no sabes COMBINARLOS en una receta. Hasta ahora has aprendido los ingredientes (SMC, ICT, Price Action, Wyckoff). Ahora es el momento de crear TU receta: un sistema coherente, repetible y probado que puedas ejecutar con confianza CADA DIA.</p>
</div>

<h3>Los 5 Pilares de un Sistema de Trading Profesional</h3>

<div class="grid-cards">
<div class="concept-card">
<h4>1. Bias Direccional (Hacia Donde?)</h4>
<p>Antes de buscar entradas, necesitas saber en QUE DIRECCION tradear. Sin bias, estas adivinando.</p>
<p><strong>Como determinar tu bias:</strong></p>
<ul>
<li><strong>HTF Structure (D1/H4):</strong> Higher highs + higher lows = Bias alcista. Lower highs + lower lows = Bias bajista.</li>
<li><strong>Ultimo BOS significativo:</strong> Si el ultimo BOS en H4 fue alcista, tu bias es alcista.</li>
<li><strong>Liquidez pendiente:</strong> Si hay BSL obvia por encima y SSL ya fue tomada, bias alcista.</li>
<li><strong>Wyckoff fase:</strong> Si estas en fase de Markup, bias alcista. Si estas en Markdown, bias bajista.</li>
</ul>
</div>
<div class="concept-card">
<h4>2. Zona de Entrada (Donde?)</h4>
<p>Una vez que sabes la direccion, necesitas una ZONA especifica donde buscar tu trade.</p>
<p><strong>Zonas validas para LONG:</strong></p>
<ul>
<li>Bullish Order Block fresco en Discount Zone</li>
<li>Bullish FVG (BISI) en zona OTE (0.618-0.786)</li>
<li>Zona de Demanda fresca (DBR) en Discount</li>
<li>Spring de Wyckoff (post-sweep de SSL)</li>
</ul>
<p><strong>Zonas validas para SHORT:</strong></p>
<ul>
<li>Bearish Order Block fresco en Premium Zone</li>
<li>Bearish FVG (SIBI) en zona OTE</li>
<li>Zona de Supply fresca (RBD) en Premium</li>
<li>Upthrust de Wyckoff (post-sweep de BSL)</li>
</ul>
</div>
<div class="concept-card">
<h4>3. Confirmacion (Cuando?)</h4>
<p>No entras solo porque el precio llego a tu zona. Necesitas CONFIRMACION en el timeframe de entrada.</p>
<p><strong>Tipos de confirmacion LTF:</strong></p>
<ul>
<li><strong>CHoCH (Change of Character):</strong> El primer BOS en contra de la tendencia menor dentro de tu zona</li>
<li><strong>Engulfing en zona:</strong> Vela envolvente con cuerpo fuerte en tu zona de entrada</li>
<li><strong>Pin bar/Rejection:</strong> Mecha de rechazo agresiva desde tu zona</li>
<li><strong>LTF OB/FVG:</strong> Un OB o FVG de M1-M5 que se forma dentro de tu zona de HTF</li>
</ul>
</div>
<div class="concept-card">
<h4>4. Gestion del Trade (Como?)</h4>
<p>Una vez dentro, necesitas reglas claras para gestionar la posicion.</p>
<ul>
<li><strong>Stop Loss:</strong> Debajo/encima de la zona de entrada + margen (mechas). NUNCA lo muevas en contra de tu posicion.</li>
<li><strong>Take Profit:</strong> En la siguiente zona de liquidez externa (BSL para longs, SSL para shorts).</li>
<li><strong>Parciales:</strong> Cierra 50% en 1:2 RR, mueve SL a breakeven, deja correr el 50% restante hasta el TP final.</li>
<li><strong>Maximo riesgo por trade:</strong> 1-2% del capital SIEMPRE.</li>
</ul>
</div>
</div>

<h3>El Sistema de Puntuacion de Confluencias</h3>

<p>Este es el corazon de tu sistema. Cada confluencia que se alinea suma puntos. Solo tradeas cuando tienes suficientes puntos.</p>

<div class="strategy-box">
<h4>Scorecard de Confluencias (Tu Checklist Diaria)</h4>
<table style="width:100%; border-collapse: collapse; margin: 15px 0;">
<tr style="background: rgba(16,185,129,0.2); font-weight: bold;">
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Confluencia</td>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Puntos</td>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Descripcion</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">HTF Bias claro</td>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">+2</td>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">D1/H4 tiene estructura clara a favor de tu trade</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Premium/Discount correcto</td>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">+2</td>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Comprando en Discount o vendiendo en Premium</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Liquidez tomada</td>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">+2</td>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Se barrio liquidez (equal highs/lows, PDH/PDL, Asia range)</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Order Block valido</td>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">+1</td>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">OB fresco que causo BOS y esta en zona correcta</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Fair Value Gap</td>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">+1</td>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">FVG coincide con zona de entrada (mejor si OB+FVG = Propulsion)</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Killzone activa</td>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">+1</td>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Dentro de London KZ, NY KZ, o London Close KZ</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Dia optimo</td>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">+1</td>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Martes, Miercoles o Jueves (evitar Lunes/Viernes)</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Confirmacion LTF</td>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">+1</td>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">CHoCH, engulfing, o BOS en M1-M5 dentro de tu zona</td>
</tr>
<tr>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">RR minimo 3:1</td>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">+1</td>
<td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">El TP potencial es al menos 3x el SL</td>
</tr>
</table>

<p><strong>Clasificacion del trade:</strong></p>
<ul>
<li><strong>0-4 puntos: NO TRADEAR.</strong> Confluencias insuficientes. Espera.</li>
<li><strong>5-6 puntos: Trade B.</strong> Aceptable con tamano reducido (0.5-1% riesgo).</li>
<li><strong>7-8 puntos: Trade A.</strong> Alta probabilidad. Tamano normal (1-2% riesgo).</li>
<li><strong>9-12 puntos: Trade A+.</strong> La crema de la crema. Maximo 2% riesgo pero con maxima confianza.</li>
</ul>
</div>

<h3>Creando tu Checklist de Entrada</h3>

<div class="highlight-box green">
<h4>Pre-Trade Checklist (Antes de CADA trade)</h4>
<ol>
<li>Que dice el HTF? (D1/H4 estructura y bias) ________________</li>
<li>Estoy comprando en discount o vendiendo en premium? SI / NO</li>
<li>Se ha barrido liquidez obvia? SI / NO (Cual? ________)</li>
<li>Mi zona de entrada tiene OB/FVG/S-D valido? SI / NO</li>
<li>Estoy dentro de una Killzone? SI / NO (Cual? ________)</li>
<li>Es Martes, Miercoles o Jueves? SI / NO</li>
<li>Tengo confirmacion en LTF? SI / NO (Cual? ________)</li>
<li>Mi RR es minimo 3:1? SI / NO (Cuanto? ________)</li>
<li>Mi riesgo es maximo 1-2% del capital? SI / NO</li>
<li>PUNTUACION TOTAL: ______ / 12</li>
<li>DECISION: TRADEAR / NO TRADEAR</li>
</ol>
</div>

<h3>Reglas de Salida</h3>

<div class="grid-cards">
<div class="card">
<h4>Stop Loss: Reglas Irrompibles</h4>
<ul>
<li>Se coloca ANTES de entrar, no despues</li>
<li>Debajo/encima de la zona de entrada + margen para mechas</li>
<li>NUNCA se mueve en contra de la posicion (ampliar SL = suicidio)</li>
<li>SOLO se puede mover a breakeven o a favor</li>
<li>Si se activa, se acepta. Sin rencor, sin venganza</li>
</ul>
</div>
<div class="card">
<h4>Take Profit: Donde Cerrar</h4>
<ul>
<li><strong>TP1:</strong> Primera zona de liquidez/OB contrario (cerrar 50%)</li>
<li><strong>TP2:</strong> Segunda zona de liquidez (cerrar 30%)</li>
<li><strong>TP3:</strong> Liquidez externa mayor (dejar correr 20%)</li>
<li>Mover SL a breakeven cuando TP1 se alcanza</li>
<li>Trail stop detras de cada nuevo swing point a favor</li>
</ul>
</div>
</div>

<h3>Backtesting: Probando tu Sistema</h3>

<div class="strategy-box">
<h4>Protocolo de Backtesting (OBLIGATORIO antes de tradear con dinero real)</h4>
<ol>
<li><strong>Elige UN par:</strong> EUR/USD o GBP/USD. No mas de uno al principio.</li>
<li><strong>Elige UN timeframe de analisis:</strong> H1 o H4.</li>
<li><strong>Elige UNA killzone:</strong> London O New York. No ambas.</li>
<li><strong>Retrocede 3 meses en el grafico.</strong></li>
<li><strong>Avanza vela por vela</strong> buscando setups que cumplan tu checklist.</li>
<li><strong>Documenta CADA trade</strong> en un journal: fecha, par, confluencias, entrada, SL, TP, resultado, captura de pantalla.</li>
<li><strong>Minimo 50 trades de backtest.</strong> Idealmente 100.</li>
<li><strong>Calcula:</strong> Win rate, RR promedio, profit factor, racha maxima de perdidas.</li>
</ol>
<p><strong>Criterios para tradear en real:</strong></p>
<ul>
<li>Win rate superior al 45% con RR promedio 3:1+ = rentable</li>
<li>Win rate superior al 40% con RR promedio 4:1+ = rentable</li>
<li>Profit factor superior a 1.5 (ganancia total / perdida total)</li>
<li>Racha maxima de perdidas manejable con tu gestion de riesgo</li>
</ul>
</div>

<h3>Tu Rutina Diaria de Trading</h3>

<div class="highlight-box blue">
<h4>Rutina Profesional</h4>
<p><strong>Noche anterior (10 min):</strong></p>
<ol>
<li>Analisis HTF: D1 y H4 de tus pares. Marca bias, zonas clave, liquidez pendiente.</li>
<li>Marca el rango asiatico en tu watchlist.</li>
<li>Define tus posibles trades del dia siguiente (zonas de interes).</li>
</ol>
<p><strong>Pre-sesion (5 min):</strong></p>
<ol>
<li>Revisa noticias de alto impacto (Forex Factory).</li>
<li>Actualiza las zonas marcadas la noche anterior si es necesario.</li>
<li>Pon alertas en tus zonas clave.</li>
</ol>
<p><strong>Killzone activa (1-3 horas):</strong></p>
<ol>
<li>Cuando se active tu alerta, baja al LTF (M5/M1).</li>
<li>Aplica tu checklist de confluencias.</li>
<li>Si el puntaje es suficiente, EJECUTA sin dudar.</li>
<li>Gestiona el trade segun tus reglas de salida.</li>
</ol>
<p><strong>Post-sesion (10 min):</strong></p>
<ol>
<li>Registra el trade en tu journal (o registra que no hubo trade y por que).</li>
<li>Captura de pantalla del trade (o del analisis del dia).</li>
<li>Nota: que hiciste bien? Que puedes mejorar?</li>
</ol>
</div>

<div class="example-box">
<h4>Ejemplo de Journal de Trade</h4>
<p><strong>Fecha:</strong> Martes 15 de Abril, 2026 | <strong>Par:</strong> EUR/USD | <strong>Sesion:</strong> London Killzone</p>
<p><strong>Bias HTF:</strong> Alcista (H4 higher highs/lows) (+2)</p>
<p><strong>Premium/Discount:</strong> Discount (precio en zona 0.705 Fib) (+2)</p>
<p><strong>Liquidez:</strong> London barro Asia Low + equal lows en 1.0835 (+2)</p>
<p><strong>OB:</strong> Bullish OB fresco M15 en 1.0830-1.0838 (+1)</p>
<p><strong>FVG:</strong> BISI coincide con OB (Propulsion Block) (+1)</p>
<p><strong>Killzone:</strong> London KZ 08:45 Espana (+1)</p>
<p><strong>Dia:</strong> Martes (+1)</p>
<p><strong>Confirmacion:</strong> CHoCH alcista M1 en 1.0835 (+1)</p>
<p><strong>RR:</strong> 3.5:1 (SL 14 pips, TP 49 pips) (+1)</p>
<p><strong>PUNTUACION: 12/12 = Trade A+</strong></p>
<p><strong>Entrada:</strong> Long 1.0836 | <strong>SL:</strong> 1.0822 | <strong>TP1:</strong> 1.0870 (cerrar 50%) | <strong>TP2:</strong> 1.0885 (cerrar 50% restante)</p>
<p><strong>Resultado:</strong> TP1 alcanzado, SL movido a BE, TP2 alcanzado = +49 pips totales</p>
<p><strong>Nota:</strong> Ejecucion perfecta. La paciencia de esperar todas las confluencias valio la pena.</p>
</div>

<div class="warning-box">
<h4>La Verdad Final sobre los Sistemas de Trading</h4>
<p>El sistema PERFECTO no existe. Perderas trades. Tendras rachas negativas. Lo que separa a los profesionales de los amateurs no es tener un sistema que nunca pierde, sino tener un sistema con VENTAJA ESTADISTICA y la DISCIPLINA para ejecutarlo sin excepcion. Si tu sistema gana el 50% de las veces con un RR promedio de 3:1, despues de 100 trades tendras una ganancia neta de 100R (50 trades x 3R - 50 trades x 1R). <strong>La consistencia mata la genialidad.</strong></p>
</div>`,
          keyPoints: [
            "Un sistema completo tiene 5 pilares: Bias direccional (HTF), Zona de entrada (OB/FVG/SD), Confirmacion (LTF), Gestion del trade (SL/TP/parciales), y Reglas de riesgo (1-2%)",
            "El sistema de puntuacion de confluencias: 0-4 = no tradear, 5-6 = trade B, 7-8 = trade A, 9-12 = trade A+",
            "Backtesting de minimo 50-100 trades es OBLIGATORIO antes de usar dinero real. Win rate >45% con RR 3:1 = rentable",
            "La rutina diaria profesional incluye: analisis nocturno (10 min), pre-sesion (5 min), killzone activa (1-3 horas), y post-sesion journal (10 min)",
            "La consistencia en la ejecucion del sistema es mas importante que la perfeccion del sistema en si"
          ],
          quiz: [
            {
              question: "Segun el sistema de puntuacion de confluencias, que puntaje minimo necesitas para considerar un trade?",
              options: [
                "1-2 puntos, cualquier confluencia es suficiente",
                "5 puntos minimo para un trade B (tamano reducido), 7+ para trade A",
                "12 puntos obligatorios, solo trades perfectos",
                "No importa el puntaje, solo importa la intuicion"
              ],
              correctIndex: 1,
              explanation: "El sistema requiere minimo 5 puntos para un trade B (con tamano reducido). 7-8 puntos es un trade A de alta probabilidad, y 9-12 es un trade A+ excepcional. Con menos de 5 puntos, NO se tradea."
            },
            {
              question: "Cuantos trades de backtest debes completar como MINIMO antes de tradear con dinero real?",
              options: [
                "5-10 trades son suficientes",
                "20 trades",
                "Minimo 50, idealmente 100 trades",
                "No es necesario hacer backtesting"
              ],
              correctIndex: 2,
              explanation: "Un minimo de 50 trades (idealmente 100) es necesario para tener una muestra estadisticamente significativa que te permita evaluar el win rate, RR promedio, profit factor y racha maxima de perdidas de tu sistema."
            },
            {
              question: "Cual es la regla mas importante sobre el Stop Loss?",
              options: [
                "Se puede mover en cualquier direccion segun como vaya el trade",
                "Se coloca despues de entrar al trade",
                "NUNCA se mueve en contra de la posicion, solo a breakeven o a favor",
                "No es necesario usar stop loss si tienes confianza en el trade"
              ],
              correctIndex: 2,
              explanation: "El Stop Loss se coloca ANTES de entrar y NUNCA se mueve en contra de la posicion (ampliar el SL). Solo puede moverse a breakeven (cuando TP1 se alcanza) o a favor para proteger ganancias. Mover el SL en contra es la via rapida a destruir tu cuenta."
            },
            {
              question: "Si tu sistema tiene un win rate del 50% y un RR promedio de 3:1, despues de 100 trades que resultado esperas?",
              options: [
                "Pierdes dinero porque 50% de win rate es malo",
                "Empatas, ni ganas ni pierdes",
                "Ganas una ganancia neta de 100R (50 wins x 3R - 50 losses x 1R)",
                "Imposible calcular sin mas datos"
              ],
              correctIndex: 2,
              explanation: "Con 50% win rate y 3:1 RR: ganas 50 trades x 3R = 150R, y pierdes 50 trades x 1R = 50R. Ganancia neta = 100R. Por eso el ratio riesgo-beneficio es tan importante: puedes ganar dinero incluso perdiendo la mitad de tus trades."
            }
          ],
          practicalExercise: "Crea TU sistema personal ahora mismo. 1) Imprime o copia la checklist de confluencias. 2) Elige tu par principal, timeframe de analisis, y killzone preferida. 3) Haz un backtest de al menos 20 trades (idealmente 50) usando la puntuacion de confluencias. Solo 'entra' en trades con 5+ puntos. 4) Documenta cada trade en un journal con: fecha, par, puntaje, entrada, SL, TP, resultado, captura. 5) Despues de los 20 trades, calcula tu win rate y RR promedio. Este ejercicio es el MAS IMPORTANTE de todo el curso."
        }
      ]
    },
    // ================================================================
    // MODULE 4-4: METODOLOGIAS CLASICAS AVANZADAS
    // ================================================================
    {
      id: "mod-4-4",
      title: "Metodologias Avanzadas",
      description: "Elliott Wave, Order Flow y tecnicas de elite",
      icon: "🔬",
      color: "#EC4899",
      lessons: [
        {
          id: "4-4-1",
          title: "Elliott Wave: Las Ondas del Mercado",
          duration: "35 min",
          content: `
<h2>Teoria de Ondas de Elliott</h2>
<div class="analogy-box"><h3>Las Olas del Mar</h3><p>El mercado se mueve en ondas, como el mar. Hay olas grandes que van hacia la playa (impulso) y olas que retroceden (correccion). Dentro de cada ola grande hay olas mas pequenas. Elliott descubrio que estas olas siguen un patron repetitivo de 5+3.</p></div>
<h3>El Patron Basico: 5-3</h3>
<div class="highlight-box blue"><h4>Fase Impulsiva: 5 Ondas</h4>
<ul>
<li><strong>Onda 1:</strong> El inicio del movimiento. Pocos lo ven. Suele ser debil.</li>
<li><strong>Onda 2:</strong> Retroceso de la onda 1. NUNCA retrocede mas del 100% de la onda 1. Suele retroceder 50-78.6% (Fibonacci!).</li>
<li><strong>Onda 3:</strong> LA MAS FUERTE y larga. Aqui es donde quieres estar. Nunca es la mas corta de las 3 impulsivas.</li>
<li><strong>Onda 4:</strong> Retroceso de la onda 3. Suele ser lateral/complejo. NO debe solapar con la onda 1.</li>
<li><strong>Onda 5:</strong> El empujon final. Suele tener divergencia en RSI (senal de agotamiento).</li>
</ul></div>
<div class="highlight-box red"><h4>Fase Correctiva: 3 Ondas (A-B-C)</h4>
<ul>
<li><strong>Onda A:</strong> Primera caida despues del impulso. Muchos creen que es "solo un retroceso".</li>
<li><strong>Onda B:</strong> Rebote que engana. "Ya va a seguir subiendo"... NO.</li>
<li><strong>Onda C:</strong> La caida fuerte. Suele ser igual de larga que la onda A.</li>
</ul></div>
<h3>Las 3 Reglas INVIOLABLES de Elliott</h3>
<div class="strategy-box"><h4>Si alguna de estas se rompe, tu conteo esta MAL</h4><ol>
<li><strong>Onda 2 NUNCA retrocede mas del 100% de la onda 1</strong></li>
<li><strong>Onda 3 NUNCA es la mas corta</strong> de las ondas 1, 3 y 5</li>
<li><strong>Onda 4 NUNCA entra en territorio de la onda 1</strong> (no se solapan)</li>
</ol></div>
<h3>Elliott + Fibonacci = Combo Perfecto</h3>
<div class="grid-cards">
<div class="card"><h4>Onda 2</h4><p>Suele retroceder 50-78.6% de la onda 1. La zona OTE es ideal para entrar.</p></div>
<div class="card"><h4>Onda 3</h4><p>Suele ser 1.618x o 2.618x la longitud de la onda 1. La mas rentable.</p></div>
<div class="card"><h4>Onda 4</h4><p>Suele retroceder 38.2% de la onda 3.</p></div>
<div class="card"><h4>Onda 5</h4><p>Suele ser igual a la onda 1 o 61.8% de las ondas 1-3.</p></div>
</div>
<div class="warning-box"><h4>Advertencia sobre Elliott Wave</h4><p>Elliott Wave es SUBJETIVO. Dos traders pueden ver conteos diferentes en el mismo grafico. Usalo como CONTEXTO para entender donde estamos en el ciclo, no como senal de entrada directa. Combinalo con SMC/ICT para entradas precisas.</p></div>
<h3>Como Usar Elliott en la Practica</h3>
<div class="strategy-box"><ol>
<li>En D1/H4, intenta identificar si estamos en onda impulsiva (1-5) o correctiva (A-B-C)</li>
<li>Si identificas el final de onda 2 (retroceso 50-78.6%), busca entrada LONG para onda 3</li>
<li>Si identificas onda 5 con divergencia RSI, prepara salida / posible SHORT</li>
<li>SIEMPRE confirma con estructura de mercado (BOS) y niveles SMC (OB, FVG)</li>
</ol></div>`,
          keyPoints: [
            "Elliott: 5 ondas impulsivas + 3 ondas correctivas (A-B-C)",
            "Onda 3 es la mas fuerte y rentable - siempre busca tradearla",
            "3 reglas inviolables: onda 2 < 100% de onda 1, onda 3 no es la mas corta, onda 4 no solapa con onda 1",
            "Fibonacci se alinea con Elliott: onda 2 retrocede 50-78.6%, onda 3 extiende 1.618x",
            "Es subjetivo - usalo como contexto, no como senal directa"
          ],
          quiz: [
            { question: "Cuantas ondas tiene un ciclo completo de Elliott?", options: ["3 ondas", "5 ondas", "8 ondas (5 impulsivas + 3 correctivas)", "10 ondas"], correctIndex: 2, explanation: "Un ciclo completo tiene 5 ondas impulsivas (1-2-3-4-5) y 3 ondas correctivas (A-B-C) = 8 en total." },
            { question: "Cual de las ondas de Elliott es generalmente la mas fuerte y larga?", options: ["Onda 1", "Onda 2", "Onda 3", "Onda 5"], correctIndex: 2, explanation: "La Onda 3 es la mas fuerte y larga del impulso. Es donde la mayoria de traders identifican la tendencia y se suman." },
            { question: "Si la Onda 2 retrocede el 105% de la Onda 1, que significa?", options: ["Es una onda 2 normal", "Tu conteo de ondas esta MAL - onda 2 nunca retrocede mas del 100%", "Es una senal de compra", "Necesitas mas indicadores"], correctIndex: 1, explanation: "Es una regla inviolable: la Onda 2 NUNCA retrocede mas del 100% de la Onda 1. Si lo hace, tu conteo esta equivocado." }
          ]
        },
        {
          id: "4-4-2",
          title: "Order Flow: Lee el Libro de Ordenes",
          duration: "30 min",
          content: `
<h2>Order Flow: El Nivel Mas Profundo del Mercado</h2>
<div class="analogy-box"><h3>El Mercado como una Subasta</h3><p>Imagina una subasta de arte. No ves solo el precio final: ves cuanta gente esta pujando, a que precios, quien se retira, donde se acumula el interes. El Order Flow te da exactamente eso del mercado.</p></div>
<h3>Que es el Order Flow?</h3>
<p>El Order Flow analiza las ordenes REALES que entran al mercado: cuantos contratos se compran y venden, a que precios, y con que agresividad. Es mirar "detras del telon" del precio.</p>
<h3>Conceptos Clave del Order Flow</h3>
<div class="vocab-card"><h4>Bid y Ask (Oferta y Demanda)</h4>
<p><strong>Bid:</strong> El precio mas alto que alguien esta dispuesto a PAGAR (compradores esperando).</p>
<p><strong>Ask:</strong> El precio mas bajo al que alguien esta dispuesto a VENDER (vendedores esperando).</p>
<p>La diferencia entre ambos es el <strong>spread</strong>.</p></div>
<div class="vocab-card"><h4>Libro de Ordenes (Order Book / DOM)</h4>
<p>Muestra todas las ordenes limitadas pendientes en cada nivel de precio. Te dice DONDE hay concentracion de compradores y vendedores.</p>
<ul>
<li>Muchas ordenes de compra en un nivel = posible <strong>soporte</strong></li>
<li>Muchas ordenes de venta en un nivel = posible <strong>resistencia</strong></li>
</ul></div>
<div class="vocab-card"><h4>Agresion (Market Orders vs Limit Orders)</h4>
<p><strong>Market Orders (agresivos):</strong> "Quiero comprar/vender AHORA al precio que sea." Estos mueven el precio.</p>
<p><strong>Limit Orders (pasivos):</strong> "Compro/vendo solo a ESTE precio." Estos crean soporte/resistencia.</p>
<p>Cuando los agresivos superan a los pasivos en un nivel, el precio se mueve.</p></div>
<div class="vocab-card"><h4>Delta</h4>
<p>La diferencia entre ordenes de compra agresivas y venta agresivas en un periodo.</p>
<ul>
<li><strong>Delta positivo:</strong> Mas compras agresivas = presion alcista</li>
<li><strong>Delta negativo:</strong> Mas ventas agresivas = presion bajista</li>
</ul></div>
<div class="vocab-card"><h4>Volume Profile</h4>
<p>Muestra el volumen tradeado en CADA NIVEL DE PRECIO (horizontal), no en el tiempo (vertical).</p>
<ul>
<li><strong>POC (Point of Control):</strong> El precio con MAS volumen. Actua como iman.</li>
<li><strong>Value Area (VA):</strong> Zona donde se tradeo el 70% del volumen. El precio tiende a volver aqui.</li>
<li><strong>High/Low Volume Nodes:</strong> Zonas de mucho/poco volumen. Poco volumen = el precio pasa rapido. Mucho volumen = el precio se queda pegado.</li>
</ul></div>
<h3>Order Flow + SMC = El Combo Definitivo</h3>
<div class="highlight-box green"><h4>Como se Complementan</h4>
<p>SMC te dice DONDE buscar entradas (Order Blocks, FVG, liquidez). Order Flow te confirma si realmente hay compradores/vendedores en esa zona.</p>
<ul>
<li>Ves un Order Block alcista → miras el Order Flow → hay acumulacion de ordenes de compra → CONFIRMA tu analisis</li>
<li>Ves un OB alcista → el Order Flow muestra ventas agresivas → la zona podria fallar</li>
</ul></div>
<div class="warning-box"><h4>Nota sobre Order Flow</h4><p>El Order Flow real requiere acceso a datos de nivel 2 (DOM/tape reading) que generalmente necesitan plataformas de pago como Sierra Chart, Bookmap o ATAS. Para Forex retail, el volumen de tick y Volume Profile de TradingView son buenas aproximaciones. El Order Flow puro es mas util en futuros e indices.</p></div>`,
          keyPoints: [
            "Order Flow = analizar las ordenes reales del mercado (quien compra/vende, cuanto, a que precio)",
            "Market Orders (agresivos) mueven el precio, Limit Orders (pasivos) crean S/R",
            "Delta positivo = mas compras = presion alcista, Delta negativo = presion bajista",
            "Volume Profile: POC es el precio con mas volumen, Value Area es donde se tradeo el 70%",
            "Order Flow confirma o invalida los niveles de SMC (OB, FVG)"
          ],
          quiz: [
            { question: "Que es el POC (Point of Control) en Volume Profile?", options: ["El precio mas alto del dia", "El precio con mayor volumen tradeado", "El precio de cierre", "El spread del broker"], correctIndex: 1, explanation: "El POC es el nivel de precio donde se ha tradeado el mayor volumen. Actua como un iman para el precio." },
            { question: "Si el delta es fuertemente negativo, que indica?", options: ["Muchas compras agresivas", "Muchas ventas agresivas - presion bajista", "El mercado esta cerrado", "Indecision"], correctIndex: 1, explanation: "Delta negativo = mas ordenes de venta agresivas (market sells) que de compra = presion bajista." },
            { question: "Como complementa el Order Flow al SMC?", options: ["Lo reemplaza completamente", "Confirma o invalida las zonas de SMC (OB, FVG) con datos reales de ordenes", "No tienen relacion", "Solo funciona con criptomonedas"], correctIndex: 1, explanation: "SMC identifica DONDE hay zonas de interes. Order Flow confirma si realmente hay participacion institucional en esas zonas." }
          ]
        },
        {
          id: "4-4-3",
          title: "Harmonic Patterns: Patrones Geometricos del Precio",
          duration: "30 min",
          content: `
<h2>Patrones Armonicos: Geometria + Fibonacci</h2>
<div class="analogy-box"><h3>El Precio Forma Figuras Geometricas</h3><p>Los patrones armonicos son figuras geometricas que el precio forma usando proporciones exactas de Fibonacci. Son como huellas digitales del mercado - cuando las ves, sabes con alta probabilidad que va a pasar despues.</p></div>
<h3>Los 4 Patrones Armonicos Principales</h3>
<div class="pattern-card"><h4>1. GARTLEY ("222")</h4>
<p>El patron armonico mas conocido. Forma una estructura XABCD con estas proporciones:</p>
<ul>
<li><strong>AB</strong> = 61.8% de XA</li>
<li><strong>BC</strong> = 38.2% - 88.6% de AB</li>
<li><strong>CD</strong> = 127.2% - 161.8% de BC</li>
<li><strong>D</strong> = 78.6% de XA (punto de entrada)</li>
</ul>
<p><strong>Senal:</strong> En el punto D, busca reversal. Gartley Alcista = compra en D. Gartley Bajista = venta en D.</p></div>
<div class="pattern-card"><h4>2. BUTTERFLY (Mariposa)</h4>
<ul>
<li><strong>AB</strong> = 78.6% de XA</li>
<li><strong>BC</strong> = 38.2% - 88.6% de AB</li>
<li><strong>CD</strong> = 161.8% - 261.8% de BC</li>
<li><strong>D</strong> = 127.2% - 161.8% de XA (extiende mas alla de X)</li>
</ul>
<p><strong>Diferencia con Gartley:</strong> El punto D va MAS ALLA del punto X. Es un patron mas agresivo.</p></div>
<div class="pattern-card"><h4>3. BAT (Murcielago)</h4>
<ul>
<li><strong>AB</strong> = 38.2% - 50% de XA</li>
<li><strong>BC</strong> = 38.2% - 88.6% de AB</li>
<li><strong>CD</strong> = 161.8% - 261.8% de BC</li>
<li><strong>D</strong> = 88.6% de XA</li>
</ul>
<p><strong>Nota:</strong> El nivel 88.6% es el sello del Bat pattern. Retroceso profundo pero valido.</p></div>
<div class="pattern-card"><h4>4. CRAB (Cangrejo)</h4>
<ul>
<li><strong>AB</strong> = 38.2% - 61.8% de XA</li>
<li><strong>BC</strong> = 38.2% - 88.6% de AB</li>
<li><strong>CD</strong> = 224% - 361.8% de BC</li>
<li><strong>D</strong> = 161.8% de XA</li>
</ul>
<p><strong>Nota:</strong> La extension mas extrema. D va 161.8% mas alla de X. Reversiones explosivas.</p></div>
<h3>Como Tradear Patrones Armonicos</h3>
<div class="strategy-box"><h4>Paso a Paso</h4><ol>
<li>Identifica un movimiento XA claro (impulso)</li>
<li>Espera el retroceso AB y mide el porcentaje de Fibonacci</li>
<li>Espera BC y luego CD</li>
<li>Cuando D se complete en la zona de Fibonacci correcta, busca ENTRADA</li>
<li><strong>Stop Loss:</strong> Justo mas alla de D (10-20 pips)</li>
<li><strong>Take Profit 1:</strong> Nivel de A</li>
<li><strong>Take Profit 2:</strong> 61.8% del movimiento CD</li>
</ol></div>
<div class="highlight-box blue"><h4>Herramientas para Harmonic Patterns</h4>
<p>TradingView tiene una herramienta de "XABCD Pattern" en el panel de dibujo. Tambien hay indicadores automaticos como "Harmonic Pattern" que detectan patrones por ti.</p></div>
<div class="warning-box"><h4>Realidad de los Harmonic Patterns</h4>
<p>Son patrones de ALTA precision pero BAJA frecuencia. No aparecen todos los dias. Cuando aparecen con las proporciones correctas, el ratio de exito es alto (65-75%). Pero si fuerzas un patron donde no lo hay, perderas. Paciencia es clave.</p></div>`,
          keyPoints: [
            "4 patrones principales: Gartley, Butterfly, Bat, Crab",
            "Todos usan proporciones exactas de Fibonacci para los puntos XABCD",
            "La entrada siempre es en el punto D con SL justo mas alla",
            "Alta precision (65-75%) pero baja frecuencia - paciencia necesaria",
            "TradingView tiene herramientas integradas para dibujar y detectar Harmonics"
          ],
          quiz: [
            { question: "En que nivel de Fibonacci se completa el punto D de un patron Gartley?", options: ["38.2% de XA", "50% de XA", "78.6% de XA", "161.8% de XA"], correctIndex: 2, explanation: "El Gartley tiene su punto D en el 78.6% de retroceso del movimiento XA. Es su firma." },
            { question: "Cual es la diferencia principal entre Gartley y Butterfly?", options: ["No hay diferencia", "En el Butterfly, el punto D extiende mas alla del punto X", "El Gartley tiene mas puntos", "El Butterfly solo aparece en Forex"], correctIndex: 1, explanation: "En Gartley, D esta dentro del rango XA (78.6%). En Butterfly, D va mas alla de X (127.2-161.8%). El Butterfly es mas agresivo." },
            { question: "Los patrones armonicos son de...", options: ["Alta frecuencia, baja precision", "Alta precision, baja frecuencia", "Baja precision, baja frecuencia", "Alta frecuencia, alta precision"], correctIndex: 1, explanation: "Los Harmonics no aparecen todos los dias (baja frecuencia), pero cuando se forman correctamente tienen alta tasa de exito (65-75%)." }
          ]
        },
        {
          id: "4-4-4",
          title: "Scalping Profesional: Operaciones de Alta Velocidad",
          duration: "30 min",
          content: `
<h2>Scalping: El Arte de los Trades Rapidos</h2>
<div class="analogy-box"><h3>El Francotirador vs la Ametralladora</h3><p>Un scalper NO es alguien que dispara sin parar. Es un francotirador que espera el momento PERFECTO, ejecuta con precision quirurgica, y desaparece. Muchos creen que scalping es "abrir muchos trades rapido". Eso es gambling. El scalping profesional es lo contrario.</p></div>
<h3>Requisitos para Hacer Scalping</h3>
<div class="grid-cards">
<div class="card"><h4>Broker ECN</h4><p>Spread de 0.0-0.5 pips obligatorio. Con spreads altos, el scalping es imposible.</p></div>
<div class="card"><h4>Ejecucion Rapida</h4><p>Latencia < 50ms. Cada milisegundo cuenta cuando tu TP es de 5-15 pips.</p></div>
<div class="card"><h4>Capital Suficiente</h4><p>Minimo 5,000-10,000$ para que los profits tengan sentido despues de comisiones.</p></div>
<div class="card"><h4>Concentracion Total</h4><p>0 distracciones. Ni telefono, ni TV, ni musica. Enfoque absoluto de 1-2 horas.</p></div>
</div>
<h3>Temporalidades para Scalping</h3>
<div class="highlight-box blue"><h4>Multi-TF del Scalper</h4>
<ul>
<li><strong>H1/H4:</strong> Tendencia y niveles clave (sesgo direccional)</li>
<li><strong>M5:</strong> Zona de entrada y estructura local</li>
<li><strong>M1:</strong> Timing de entrada exacto y confirmacion</li>
</ul></div>
<h3>Estrategia de Scalping con SMC</h3>
<div class="strategy-box"><h4>Setup de Scalping Institucional</h4><ol>
<li><strong>H4:</strong> Identifica tendencia y sesgo (LONG o SHORT)</li>
<li><strong>M5:</strong> Espera que el precio llegue a un Order Block o FVG alineado con H4</li>
<li><strong>M1:</strong> Busca CHoCH (cambio de estructura) dentro del OB/FVG</li>
<li><strong>Entrada:</strong> En el FVG del M1 con SL detras del OB</li>
<li><strong>SL:</strong> 5-15 pips (MUY ajustado)</li>
<li><strong>TP:</strong> 10-30 pips (R:R 1:2 o 1:3)</li>
<li><strong>Duracion:</strong> 5-30 minutos por trade</li>
</ol></div>
<h3>Killzones para Scalping</h3>
<div class="grid-cards">
<div class="card green-border"><h4>London Open (08:00-10:00 UTC)</h4><p>Las primeras 2 horas de London son las MEJORES para scalping. Maxima volatilidad, setups claros.</p></div>
<div class="card green-border"><h4>NY Open (13:00-15:00 UTC)</h4><p>Apertura de NY, datos economicos, alta volatilidad. Segundo mejor momento.</p></div>
<div class="card red-border"><h4>EVITAR: Asia, almuerzo europeo</h4><p>Baja volatilidad = spreads mas altos + movimientos erraticos. No scalpes aqui.</p></div>
</div>
<div class="warning-box"><h4>Advertencia Seria sobre Scalping</h4>
<p>El scalping es el estilo MAS DIFICIL de trading. Requiere:</p>
<ul>
<li>Reflejos rapidos y cero duda</li>
<li>Control emocional extremo (decisiones en segundos)</li>
<li>Comisiones bajas (con 2 pips de spread NO es viable)</li>
<li>Minimo 6 meses de practica en demo antes de real</li>
</ul>
<p><strong>Recomendacion:</strong> Empieza con Swing Trading (mas facil). Solo pasa a Scalping cuando domines el analisis y la psicologia.</p></div>`,
          keyPoints: [
            "Scalping profesional = precision quirurgica, NO disparo rapido",
            "Requisitos: broker ECN (spread 0.0-0.5), ejecucion < 50ms, concentracion total",
            "Multi-TF: H4 para sesgo, M5 para zona, M1 para entrada",
            "Mejores horas: London Open (08-10 UTC) y NY Open (13-15 UTC)",
            "Es el estilo MAS DIFICIL - domina Swing Trading primero"
          ],
          quiz: [
            { question: "Cual es el requisito MAS importante del broker para hacer scalping?", options: ["Que tenga app movil", "Spread bajo (0.0-0.5 pips) y ejecucion rapida", "Que ofrezca bonus de bienvenida", "Que permita apalancamiento 1:1000"], correctIndex: 1, explanation: "Con un TP de 5-15 pips, un spread de 2+ pips se come la mitad de tu ganancia. Spreads bajos y ejecucion rapida son obligatorios para scalping." },
            { question: "En scalping con SMC, donde buscas la entrada exacta?", options: ["En H4 directamente", "En M1, buscando CHoCH dentro de un OB/FVG de M5", "En D1", "En cualquier temporalidad"], correctIndex: 1, explanation: "H4 da el sesgo, M5 identifica la zona (OB/FVG), y M1 da el timing exacto buscando un cambio de estructura (CHoCH) dentro de la zona." },
            { question: "Cuando NO deberias hacer scalping?", options: ["London Open", "NY Open", "Sesion asiatica y almuerzo europeo (baja volatilidad)", "Nunca, siempre es buen momento"], correctIndex: 2, explanation: "Asia y el almuerzo europeo tienen baja volatilidad = spreads mas altos + movimientos erraticos sin direccion. No es viable para scalping." }
          ]
        },
        {
          id: "4-4-5",
          title: "Swing Trading: La Estrategia del Trader Inteligente",
          duration: "25 min",
          content: `
<h2>Swing Trading: Menos Estres, Mas Beneficio</h2>
<div class="analogy-box"><h3>El Surfista</h3><p>Un swing trader es como un surfista: no intenta surfear cada ola del mar. Espera pacientemente en el agua hasta que viene una ola GRANDE, la monta, y se baja antes de que se rompa. Unas pocas buenas olas al dia/semana son suficientes.</p></div>
<h3>Por Que Swing Trading es el Mejor Estilo para Empezar</h3>
<div class="grid-cards">
<div class="card green-border"><h4>Menos estres</h4><p>No necesitas estar pegado a la pantalla. Analizas por la manana, pones ordenes, y revisas al final del dia.</p></div>
<div class="card green-border"><h4>Compatible con trabajo</h4><p>Puedes tradear con 1-2 horas al dia. Perfecto si tienes otro empleo.</p></div>
<div class="card green-border"><h4>Mejores ratios R:R</h4><p>Trades de 50-200+ pips permiten ratios de 1:3, 1:5 o incluso 1:10.</p></div>
<div class="card green-border"><h4>Menos comisiones</h4><p>5-10 trades a la semana vs 20-50 del day trader. Pagas mucho menos en spreads.</p></div>
</div>
<h3>Temporalidades del Swing Trader</h3>
<div class="highlight-box blue"><h4>El Framework Multi-TF</h4>
<ul>
<li><strong>Semanal (W1):</strong> Contexto general, tendencia macro, niveles mayores</li>
<li><strong>Diario (D1):</strong> Tendencia principal, soportes/resistencias clave, sesgo de la semana</li>
<li><strong>H4:</strong> Setup de entrada, Order Blocks, FVG, Fibonacci</li>
<li><strong>H1 (opcional):</strong> Refinar la entrada exacta</li>
</ul></div>
<h3>Estrategia de Swing Trading Completa</h3>
<div class="strategy-box"><h4>Workflow del Domingo (20 min)</h4><ol>
<li>Abre los 2-3 pares que operas en D1/W1</li>
<li>Identifica la tendencia de cada uno</li>
<li>Marca los niveles clave de S/R de la semana</li>
<li>Define tu sesgo para la semana: LONG, SHORT, o ESPERAR</li>
<li>Si hay sesgo, marca las zonas donde buscarias entrada (OB, FVG, Fib)</li>
</ol></div>
<div class="strategy-box"><h4>Workflow Diario (15 min, manana y noche)</h4><ol>
<li><strong>Manana:</strong> Revisa si el precio se acerca a tus zonas. Si llega, busca confirmacion en H4/H1.</li>
<li>Pon alertas de precio en TradingView para que te avise cuando llegue.</li>
<li><strong>Si hay setup:</strong> Entra con SL y TP predefinidos. Deja que el trade trabaje.</li>
<li><strong>Noche:</strong> Revisa trades abiertos. Mueve SL a break-even si ya gano 1R.</li>
</ol></div>
<h3>Gestion de Trades Abiertos</h3>
<div class="grid-cards">
<div class="card"><h4>Mover SL a Break-Even</h4><p>Cuando el trade gana 1R (ej: arriesgaste 30 pips y ya gano 30), mueve el SL al punto de entrada. Ya no puedes perder.</p></div>
<div class="card"><h4>Trailing Stop Manual</h4><p>Cada vez que el precio haga un nuevo HH/HL (en LONG), mueve el SL debajo del ultimo HL. Proteges ganancias y dejas correr.</p></div>
<div class="card"><h4>Take Profit Parcial</h4><p>Cierra 50% en TP1 (1:2 R:R), deja el otro 50% correr con trailing stop hacia TP2 (1:4 o mas).</p></div>
</div>
<div class="highlight-box green"><h4>El Secreto del Swing Trading</h4>
<p>Los swing traders ganan dinero por la CALIDAD de sus trades, no por la cantidad. Un trade bien ejecutado de 150 pips con ratio 1:4 equivale a 12 scalps de 12.5 pips. Pero con mucho menos estres, menos comisiones, y menos desgaste emocional.</p></div>
<div class="warning-box"><h4>Gestion del Fin de Semana</h4>
<p>Si tienes trades abiertos el viernes por la noche, ten MUCHO cuidado con los gaps del fin de semana. Opciones:</p>
<ul>
<li>Cerrar todos los trades antes del cierre del viernes</li>
<li>Reducir tamano de posicion a la mitad</li>
<li>Solo mantener si el trade ya tiene SL en profit</li>
</ul></div>`,
          keyPoints: [
            "Swing Trading = menos estres, compatible con trabajo, mejores R:R",
            "Framework: W1 contexto → D1 tendencia → H4 setup → H1 entrada",
            "Workflow: analisis dominical + revision diaria de 15 min",
            "Mover SL a break-even cuando ganes 1R para eliminar riesgo",
            "Take profit parcial: 50% en TP1, 50% con trailing stop",
            "Cuidado con gaps del fin de semana - cerrar o reducir posiciones"
          ],
          quiz: [
            { question: "Por que Swing Trading es el mejor estilo para empezar?", options: ["Porque es mas rapido", "Menos estres, compatible con trabajo, mejores R:R, menos comisiones", "Porque no necesitas analizar", "Porque siempre ganas"], correctIndex: 1, explanation: "Swing trading permite operar con 1-2 horas al dia, tiene menos estres que scalping/day trading, permite ratios R:R de 1:3 o mejores, y paga menos en comisiones." },
            { question: "Cuando deberias mover tu SL a break-even en swing trading?", options: ["Inmediatamente despues de entrar", "Cuando el trade gana 1R (la misma distancia que tu SL)", "Nunca, dejar el SL original", "Solo si pierdes 3 trades seguidos"], correctIndex: 1, explanation: "Cuando el trade ha ganado 1R (ej: arriesgaste 30 pips y ya va +30 pips), mueves el SL al punto de entrada. Ya no puedes perder dinero en ese trade." },
            { question: "Que haces con trades abiertos el viernes por la noche?", options: ["Los dejas sin preocuparte", "Los cierras o reduces posicion por riesgo de gap del fin de semana", "Abres mas posiciones", "Quitas el SL"], correctIndex: 1, explanation: "Los gaps del fin de semana pueden hacer que el precio abra muy lejos de donde cerro, saltandose tu SL. Lo seguro es cerrar o reducir antes del cierre del viernes." }
          ]
        }
      ]
    }
  ]
};
