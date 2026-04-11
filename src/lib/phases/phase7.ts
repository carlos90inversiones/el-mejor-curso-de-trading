import type { Phase } from "../courseData";

export const PHASE_7: Phase = {
  id: "fase-7",
  number: 7,
  title: "Maestria y Examen Final",
  subtitle: "Demuestra que eres un trader experto",
  description: "Has llegado al final del curso. Es hora de demostrar todo lo que has aprendido con un examen de certificacion de nivel experto y trazar tu plan de carrera como trader profesional.",
  color: "#DC2626",
  gradient: "from-red-600 to-red-900",
  modules: [
    {
      id: "mod-7-1",
      title: "Examen Final",
      description: "Demuestra tu dominio del trading con el examen de certificacion y tu plan de carrera",
      icon: "🏆",
      color: "#DC2626",
      lessons: [
        {
          id: "7-1-1",
          title: "Examen de Certificacion - 20 Preguntas Nivel Experto",
          duration: "45 min",
          content: `
<h2>Examen Final de Certificacion</h2>
<div class="highlight-box red">
<h4>Instrucciones del Examen</h4>
<p>Este es el examen final del curso. Contiene <strong>20 preguntas de nivel experto</strong> que cubren TODAS las fases del curso: fundamentos, velas japonesas, estructura de mercado, soportes/resistencias, indicadores tecnicos, Fibonacci, gestión de riesgo, psicología del trading, Smart Money Concepts, ICT, prop firms y backtesting.</p>
<ul>
<li>Las preguntas son basadas en escenarios reales</li>
<li>Requieren combinar conocimientos de multiples fases</li>
<li>No hay trampa — pero necesitas pensar como un trader profesional</li>
<li>Aprobado: 70% o mas (14/20 correctas)</li>
<li>Excelente: 85% o mas (17/20 correctas)</li>
<li>Maestria: 95% o mas (19/20 correctas)</li>
</ul>
</div>

<h3>Preparacion Mental</h3>
<div class="analogy-box">
<h3>Piensa como un Trader, No como un Estudiante</h3>
<p>Este examen no es para memorizar definiciones. Es para evaluar si puedes <strong>tomar decisiones de trading en tiempo real</strong>. Cada pregunta simula un escenario donde necesitas aplicar multiples conceptos a la vez — exactamente como en el mercado real. Lee cada escenario cuidadosamente y piensa: "si esto fuera mi cuenta fondeada, que haria?"</p>
</div>

<h3>Estructura del Examen</h3>
<div class="grid-cards">
<div class="card"><h4>Preguntas 1-4</h4><p>Fundamentos, velas japonesas y estructura de mercado</p></div>
<div class="card"><h4>Preguntas 5-8</h4><p>Soportes/resistencias, indicadores y Fibonacci</p></div>
<div class="card"><h4>Preguntas 9-12</h4><p>Gestion de riesgo y psicología del trading</p></div>
<div class="card"><h4>Preguntas 13-16</h4><p>Smart Money Concepts e ICT</p></div>
<div class="card"><h4>Preguntas 17-20</h4><p>Prop firms, backtesting y plan de trading</p></div>
</div>

<div class="highlight-box blue">
<h4>Consejo Final</h4>
<p>Si no pasas el examen a la primera, no te frustres. Revisa las explicaciones de cada respuesta, vuelve a estudiar las fases donde fallaste, y vuelve a intentarlo. Los mejores traders son los que nunca dejan de aprender.</p>
</div>`,
          keyPoints: [
            "El examen cubre las 7 fases del curso con 20 preguntas de nivel experto",
            "Las preguntas son basadas en escenarios reales que requieren combinar multiples conceptos",
            "Aprobado con 70%+ (14/20), Excelente con 85%+ (17/20), Maestria con 95%+ (19/20)",
            "Piensa como trader profesional, no como estudiante memorizando definiciones"
          ],
          quiz: [
            {
              question: "Escenario: Estas viendo EUR/USD en grafico de 1H. El precio acaba de hacer un BOS (Break of Structure) alcista, retrocede al nivel 0.618 de Fibonacci, y forma un martillo (hammer) en un order block alcista. RSI esta en 38. Que haces?",
              options: [
                "Vender porque el RSI esta bajo",
                "Comprar: BOS alcista + retroceso al 0.618 + martillo en OB + RSI en zona de recuperacion = confluencia de alta probabilidad",
                "Esperar a que el RSI llegue a 70 para vender",
                "No operar porque hay demasiadas señales"
              ],
              correctIndex: 1,
              explanation: "Tienes confluencia maxima: BOS alcista (tendencia), retroceso al golden pocket de Fibonacci (nivel), martillo en order block (confirmación de entrada), y RSI saliendo de sobreventa (momentum). Es un setup A+ de alta probabilidad para compra."
            },
            {
              question: "En tu cuenta fondeada de 100K llevas un drawdown diario de 4.2%. Ves un setup que consideras 'perfecto' con R:R 1:3. Tu riesgo seria 0.8% de la cuenta. Que decision tomas?",
              options: [
                "Entrar al trade porque el setup es perfecto y el R:R es muy bueno",
                "No operar hoy — estas a 0.8% del limite de drawdown diario (5%) y una perdida te eliminaria del challenge",
                "Entrar con la mitad del riesgo (0.4%)",
                "Cerrar la plataforma y volver mañana"
              ],
              correctIndex: 1,
              explanation: "Con 4.2% de drawdown diario, estas a solo 0.8% del limite de 5%. Si tomas el trade con 0.8% de riesgo y pierdes, llegas al 5% exacto y pierdes la cuenta. Ningun setup justifica arriesgar tu cuenta fondeada. La respuesta correcta es NO OPERAR MAS HOY."
            },
            {
              question: "Que patron de velas japonesas de 3 velas indica un giro alcista fuerte cuando aparece en un soporte?",
              options: [
                "Three Black Crows",
                "Evening Star",
                "Morning Star",
                "Doji simple"
              ],
              correctIndex: 2,
              explanation: "Morning Star es un patron de 3 velas de giro alcista: vela bajista grande, vela de indecision pequena, y vela alcista grande. En un soporte es una señal de compra fuerte. Evening Star y Three Black Crows son bajistas."
            },
            {
              question: "Identificas una zona de demanda (order block) en H4. El precio se acerca a la zona. Que confluencias adicionales buscarias ANTES de entrar en largo?",
              options: [
                "Solo el order block es suficiente para entrar",
                "Fibonacci 0.618-0.786, patron de velas de rechazo, volumen creciente, y que la estructura general sea alcista",
                "Que el RSI este exactamente en 50",
                "Que haya una noticia economica positiva ese dia"
              ],
              correctIndex: 1,
              explanation: "Un trade de alta probabilidad combina multiples confluencias: order block (zona), Fibonacci (nivel matematico), patron de velas (confirmación), volumen (validacion), y estructura alcista (dirección). Cuantas mas confluencias, mayor probabilidad."
            },
            {
              question: "Estas backtesting una estrategia. Despues de 200 trades tienes: Win Rate 42%, Profit Factor 1.8, Max Drawdown 12%, R:R promedio 1:2.5. Es una estrategia viable para un challenge de prop firm?",
              options: [
                "No, porque el win rate es menor al 50%",
                "No, porque el max drawdown es 12% y el limite del challenge es 10%",
                "Si, el profit factor de 1.8 y R:R 1:2.5 compensan el win rate, PERO necesitas reducir el riesgo por trade para que el max drawdown quede por debajo del 10%",
                "Si, todos los números son perfectos"
              ],
              correctIndex: 2,
              explanation: "La estrategia es rentable (PF 1.8 es bueno, R:R 1:2.5 compensa el 42% win rate). PERO el max drawdown de 12% excede el limite del 10% en challenges. Solucion: reducir el riesgo por trade para comprimir el drawdown por debajo del 10%."
            },
            {
              question: "Que es un Fair Value Gap (FVG) en el contexto de Smart Money Concepts?",
              options: [
                "Un indicador técnico que mide la volatilidad",
                "Un gap entre la mecha de la vela 1 y la mecha de la vela 3 donde el precio se movio tan rápido que dejo un desequilibrio que el mercado tiende a rellenar",
                "La diferencia entre el precio de compra y venta",
                "Un tipo de orden pendiente"
              ],
              correctIndex: 1,
              explanation: "Un FVG es un desequilibrio de precio donde la vela 2 se mueve tan agresivamente que deja un gap entre las mechas de las velas 1 y 3. El mercado institucional tiende a volver a estas zonas para 'rellenar' el desequilibrio."
            },
            {
              question: "Llevas 5 trades perdedores seguidos. Tu estrategia tiene un win rate del 55% en backtest de 300 trades. Que debes hacer?",
              options: [
                "Cambiar de estrategia inmediatamente",
                "Duplicar el tamano de posición para recuperar rápido",
                "Seguir tu plan — una racha de 5 perdidas es estadisticamente normal con 55% de win rate. Revisa si seguiste las reglas y, si lo hiciste, continua con disciplina",
                "Dejar de operar permanentemente"
              ],
              correctIndex: 2,
              explanation: "Con un 55% de win rate, rachas de 5-7 perdidas consecutivas son estadisticamente normales y esperables. Si seguiste las reglas de tu plan, continua. El backtest de 300 trades ya demostro que la estrategia es rentable a largo plazo."
            },
            {
              question: "Que nivel de Fibonacci es conocido como el 'golden pocket' y es uno de los retrocesos mas fiables?",
              options: [
                "0.236",
                "0.382",
                "0.618",
                "1.0"
              ],
              correctIndex: 2,
              explanation: "El nivel 0.618 (y la zona 0.618-0.786 llamada 'golden pocket') es el retroceso de Fibonacci mas respetado por el mercado. Es donde la mayoria de retrocesos saludables terminan antes de continuar la tendencia."
            },
            {
              question: "El precio de GBP/USD rompe un soporte importante con una vela de cuerpo grande y alto volumen. Luego retrocede al soporte roto (ahora resistencia) y forma una estrella fugaz. Tu análisis es:",
              options: [
                "Comprar porque el precio esta subiendo",
                "El soporte roto ahora actua como resistencia (polaridad). La estrella fugaz confirma rechazo. Es una entrada en corto (venta) de alta probabilidad",
                "No hacer nada porque hay mucha volatilidad",
                "Esperar a que el RSI llegue a 80"
              ],
              correctIndex: 1,
              explanation: "Este es un ejemplo clasico de 'polaridad' (soporte roto se convierte en resistencia). El retroceso al nivel con rechazo (estrella fugaz) es un setup de venta con alta confluencia: estructura bajista + nivel clave + confirmación de vela."
            },
            {
              question: "Que es un 'liquidity sweep' en la teoria ICT?",
              options: [
                "Cuando el precio sube muy rápido",
                "Cuando el mercado barre los stop losses acumulados detras de un nivel obvio (highs/lows) para luego revertir en la dirección opuesta",
                "Una estrategia de scalping",
                "Un tipo de indicador de volumen"
              ],
              correctIndex: 1,
              explanation: "Un liquidity sweep ocurre cuando las instituciones empujan el precio mas alla de un nivel obvio donde se acumulan stop losses del retail, activan esas ordenes (capturan liquidez), y luego mueven el precio en la dirección opuesta."
            },
            {
              question: "En una cuenta fondeada con profit split 80/20, si generas 8,000$ de ganancia en un mes, cuanto recibes tu y cuanto la prop firm?",
              options: [
                "Tu: 4,000$, Firm: 4,000$",
                "Tu: 6,400$, Firm: 1,600$",
                "Tu: 8,000$, Firm: 0$",
                "Tu: 2,000$, Firm: 6,000$"
              ],
              correctIndex: 1,
              explanation: "Con profit split 80/20: Tu parte = 8,000$ x 80% = 6,400$. La prop firm se queda con 8,000$ x 20% = 1,600$."
            },
            {
              question: "Que condicion DEBE cumplirse para que un patron de velas como un martillo sea una señal fiable de compra?",
              options: [
                "Que aparezca en cualquier lugar del grafico",
                "Que el volumen sea bajo",
                "Que aparezca en un nivel importante (soporte, order block, Fibonacci) con la estructura general a favor",
                "Que sea la primera vela del dia"
              ],
              correctIndex: 2,
              explanation: "Un patron de velas SOLO es fiable cuando aparece en un nivel importante (soporte, resistencia, order block, Fibonacci) y la estructura general del mercado apoya la dirección. Un martillo aislado sin contexto no tiene valor."
            },
            {
              question: "Que significa un profit factor de 2.5 en un backtest?",
              options: [
                "Que ganaste 2.5 veces mas trades de los que perdiste",
                "Que por cada dolar perdido, ganaste 2.50 dolares en total",
                "Que tu win rate es 25%",
                "Que tu drawdown máximo es 2.5%"
              ],
              correctIndex: 1,
              explanation: "Profit Factor = Ganancias Totales / Perdidas Totales. Un PF de 2.5 significa que por cada dolar que perdiste, ganaste 2.50$. Es un resultado excelente que indica una estrategia muy rentable."
            },
            {
              question: "Estas en una tendencia alcista en H4. El precio hace un Higher High, luego retrocede. Donde buscarias la entrada optima para un long segun SMC?",
              options: [
                "En el punto mas alto (Higher High)",
                "En cualquier punto aleatorio del retroceso",
                "En el order block que genero el último impulso alcista, idealmente en la zona del 0.618-0.786 de Fibonacci del movimiento",
                "Despues de que el precio ya haya subido de nuevo"
              ],
              correctIndex: 2,
              explanation: "Segun SMC, la entrada optima es en el order block (última vela bajista antes del impulso) que coincide con la zona del golden pocket de Fibonacci (0.618-0.786). Esta es la zona donde las instituciones recargan posiciones."
            },
            {
              question: "Un trader tiene una estrategia con win rate del 60% y R:R de 1:1.5. Cual es su esperanza matematica por trade (en unidades de riesgo)?",
              options: [
                "0.50R — rentable",
                "0.90R — rentable",
                "0.50R: (0.60 x 1.5) - (0.40 x 1) = 0.90 - 0.40 = 0.50R — rentable",
                "-0.10R — no rentable"
              ],
              correctIndex: 2,
              explanation: "Esperanza = (Win% x Avg Win) - (Loss% x Avg Loss) = (0.60 x 1.5R) - (0.40 x 1R) = 0.90R - 0.40R = 0.50R. Por cada trade, en promedio ganas 0.50 unidades de riesgo. Es una estrategia rentable."
            },
            {
              question: "Que es el 'overfitting' en backtesting y por que es peligroso?",
              options: [
                "Cuando usas muy pocos datos",
                "Cuando optimizas tanto los parametros de tu estrategia que funciona perfecto en datos historicos pero falla en datos nuevos — porque ajustaste la estrategia al ruido del pasado, no a patrones reales",
                "Cuando usas demasiados indicadores en el grafico",
                "Cuando haces backtesting manual en vez de automatizado"
              ],
              correctIndex: 1,
              explanation: "El overfitting es el mayor peligro del backtesting. Ocurre cuando ajustas excesivamente los parametros para que funcionen en datos historicos especificos. La estrategia parece perfecta en el backtest pero fracasa en el mercado real porque no captura patrones verdaderos sino ruido aleatorio."
            },
            {
              question: "El concepto de 'displacement' en ICT se refiere a:",
              options: [
                "Cuando el trader cambia de broker",
                "Un movimiento agresivo y rápido del precio causado por instituciones que muestra interes direccional fuerte, dejando FVGs y rompiendo estructura",
                "El spread del broker",
                "La distancia entre el stop loss y el take profit"
              ],
              correctIndex: 1,
              explanation: "Displacement es un movimiento de precio agresivo y rápido causado por la actividad institucional. Se caracteriza por velas de cuerpo grande, deja Fair Value Gaps, y rompe estructura de mercado. Indica la dirección real del interes institucional."
            },
            {
              question: "Para un challenge de prop firm con objetivo de 10% y drawdown máximo de 10%, cual es la MEJOR estrategia de riesgo?",
              options: [
                "Arriesgar 5% por trade para llegar rápido al objetivo",
                "Arriesgar 2-3% por trade — riesgo moderado para avanzar rápido",
                "Arriesgar 0.5-1% por trade con R:R mínimo 1:2, avanzando de forma consistente y protegiendo el drawdown",
                "No usar stop loss para evitar que te saquen del trade"
              ],
              correctIndex: 2,
              explanation: "Con 0.5-1% de riesgo por trade, necesitas muchas perdidas consecutivas para llegar al limite de drawdown. Con R:R 1:2 y un win rate decente, alcanzas el 10% de forma gradual y segura. Riesgos mayores pueden eliminar tu cuenta en pocos trades."
            },
            {
              question: "Ves una divergencia bajista en el RSI (precio hace higher high, RSI hace lower high) justo en una zona de oferta (supply zone) de H4. La estructura en M15 acaba de hacer un Change of Character (CHoCH) bajista. Tu plan es:",
              options: [
                "Comprar porque el precio esta en maximos",
                "Vender: divergencia bajista + supply zone + CHoCH bajista en timeframe menor = triple confluencia para short con entrada en el último order block bajista de M15",
                "Esperar sin hacer nada",
                "Comprar en la supply zone esperando un breakout"
              ],
              correctIndex: 1,
              explanation: "Tienes triple confluencia bajista: 1) Divergencia RSI indica debilidad del impulso alcista. 2) Supply zone en H4 es resistencia institucional. 3) CHoCH bajista en M15 confirma que los compradores perdieron el control. La entrada optima es en el order block que genero el CHoCH."
            },
            {
              question: "Un trader consistente que ya paso un challenge de FTMO con una cuenta de 100K quiere escalar sus ingresos. Cual es la mejor estrategia a seguir?",
              options: [
                "Aumentar el riesgo por trade al 5% para ganar mas rápido",
                "Mantener la misma estrategia y riesgo, y abrir cuentas adicionales en la misma u otras prop firms usando un trade copier para multiplicar ganancias",
                "Cambiar a una estrategia mas agresiva",
                "Invertir todas las ganancias en criptomonedas"
              ],
              correctIndex: 1,
              explanation: "La mejor forma de escalar es mantener exactamente la misma estrategia y riesgo que funciono, y multiplicar cuentas fondeadas. Un trade copier replica la misma operación en todas las cuentas. Mismos trades, multiples cuentas = ingresos multiplicados sin aumentar el riesgo."
            }
          ],
          practicalExercise: "Realiza el examen completo sin mirar las respuestas. Anota tus respuestas en un papel. Luego revisa cada una y calcula tu porcentaje. Para cada respuesta incorrecta, vuelve a la fase correspondiente del curso y estudia el tema. Repite el examen en una semana hasta alcanzar al menos 85%."
        },
        {
          id: "7-1-2",
          title: "Tu Plan de Carrera como Trader",
          duration: "30 min",
          content: `
<h2>Tu Hoja de Ruta: De Estudiante a Trader Profesional</h2>
<div class="analogy-box">
<h3>Has Completado el Entrenamiento</h3>
<p>Felicidades — has terminado uno de los cursos de trading mas completos que existen. Pero terminar el curso es como graduarte de la universidad: el titulo es importante, pero tu carrera EMPIEZA ahora. Lo que hagas en los proximos 6-12 meses determinara si te conviertes en un trader consistente o en una estadistica mas.</p>
</div>

<h3>Tu Roadmap: Los Proximos 12 Meses</h3>

<div class="highlight-box green">
<h4>FASE 1: Meses 1-2 — Demo y Backtesting</h4>
<ul>
<li><strong>Objetivo:</strong> Encontrar y validar TU estrategia</li>
<li>Backtestea al menos 200 trades con tu estrategia elegida</li>
<li>Opera en demo como si fuera dinero real (mismo riesgo, mismas reglas)</li>
<li>Lleva un diario de trading DETALLADO (cada trade con screenshot, emociones, análisis)</li>
<li>Enfocate en UNA estrategia, UN timeframe, y 2-3 pares máximo</li>
<li><strong>No pases a la siguiente fase hasta ser rentable 2 meses consecutivos en demo</strong></li>
</ul>
</div>

<div class="highlight-box green">
<h4>FASE 2: Meses 3-4 — Cuenta Pequena Real</h4>
<ul>
<li><strong>Objetivo:</strong> Experimentar el trading con dinero real</li>
<li>Abre una cuenta con 200-500$ máximo (lo que puedas PERDER sin afectar tu vida)</li>
<li>Mismo plan que en demo — no cambies NADA</li>
<li>Las emociones seran DIFERENTES con dinero real. Eso es normal.</li>
<li>Riesgo máximo 1% por trade (2-5$ por trade)</li>
<li><strong>Objetivo: NO perder la cuenta, no hacerte rico</strong></li>
</ul>
</div>

<div class="highlight-box green">
<h4>FASE 3: Meses 4-6 — Primer Challenge de Prop Firm</h4>
<ul>
<li><strong>Objetivo:</strong> Pasar tu primer challenge</li>
<li>Empieza con una cuenta pequena (10K-25K) para reducir la presion</li>
<li>Sigue el plan de 4 semanas que aprendiste en la Fase 5 del curso</li>
<li>Si no pasas el primero, analiza por que, ajusta, y vuelve a intentar</li>
<li>La mayoria de traders necesitan 2-3 intentos antes de pasar su primer challenge</li>
<li><strong>Presupuesto: ten dinero para al menos 3 challenges</strong></li>
</ul>
</div>

<div class="highlight-box green">
<h4>FASE 4: Meses 6-9 — Trader Fondeado</h4>
<ul>
<li><strong>Objetivo:</strong> Ser consistente en tu cuenta fondeada</li>
<li>Primer mes fondeado: ultra conservador (0.5% riesgo)</li>
<li>Hacer tu primer retiro exitoso</li>
<li>Empezar a considerar un segundo challenge para escalar</li>
<li><strong>Objetivo: 3 retiros consecutivos exitosos</strong></li>
</ul>
</div>

<div class="highlight-box green">
<h4>FASE 5: Meses 9-12 — Escalar y Profesionalizar</h4>
<ul>
<li><strong>Objetivo:</strong> Multiples cuentas fondeadas</li>
<li>2-3 cuentas activas con trade copier</li>
<li>Ingresos mensuales consistentes</li>
<li>Rutina profesional establecida</li>
<li>Considerar si quieres hacer del trading tu actividad principal</li>
</ul>
</div>

<h3>Expectativas Realistas de Tiempo</h3>
<div class="warning-box">
<h4>La Verdad que Nadie te Dice</h4>
<ul>
<li><strong>6-12 meses</strong> es el tiempo REALISTA para ser consistentemente rentable con dedicacion seria</li>
<li><strong>No es un esquema de dinero rápido.</strong> Los traders exitosos pasaron meses o años aprendiendo.</li>
<li><strong>80% del éxito</strong> es psicología y gestión de riesgo, no la estrategia</li>
<li><strong>Vas a tener meses malos</strong> incluso siendo rentable a largo plazo. Es parte del proceso.</li>
<li><strong>El objetivo inicial</strong> no es vivir del trading — es ser consistente. El dinero viene como consecuencia.</li>
</ul>
</div>

<h3>Educacion Continua</h3>
<div class="grid-cards">
<div class="card"><h4>YouTube</h4><p>ICT (Inner Circle Trader) — Canal original de Michael J. Huddleston. Contenido gratuito y avanzado sobre Smart Money y conceptos institucionales.</p></div>
<div class="card"><h4>TradingView</h4><p>Seccion de Ideas y Scripts. Aprende de traders reales que publican sus análisis y codigo. Sigue a traders con buen track record.</p></div>
<div class="card"><h4>Libros Esenciales</h4><p>"Trading in the Zone" (Mark Douglas), "The Art and Science of Technical Analysis" (Adam Grimes), "Market Wizards" (Jack Schwager).</p></div>
<div class="card"><h4>Practica Constante</h4><p>El mercado cambia. Nunca dejes de practicar, backtestear, y adaptarte. Los mejores traders del mundo siguen aprendiendo cada dia.</p></div>
</div>

<h3>Como Construir tu Track Record</h3>
<div class="highlight-box blue">
<h4>Documentacion Profesional</h4>
<ul>
<li><strong>Diario de Trading:</strong> Cada trade documentado con entrada, salida, R:R, screenshot del grafico, y notas sobre tu estado emocional</li>
<li><strong>Metricas Mensuales:</strong> Win rate, profit factor, max drawdown, retorno mensual. Lleva una hoja de calculo actualizada.</li>
<li><strong>Certificados de Prop Firms:</strong> Guarda los certificados de challenges pasados y reportes de retiro</li>
<li><strong>Myfxbook o FXBlue:</strong> Conecta tu cuenta para tener estadisticas verificadas publicamente</li>
<li><strong>Un track record de 6-12 meses</strong> te abre puertas: mas prop firms, posibles inversores, o trabajo en fondos.</li>
</ul>
</div>

<h3>Comunidad y Mentoria</h3>
<div class="highlight-box green">
<h4>No Operes Solo</h4>
<ul>
<li><strong>Unete a comunidades:</strong> Discord y Telegram de trading (busca las que tienen traders verificados, no las que venden señales)</li>
<li><strong>Encuentra un mentor:</strong> Alguien que ya este donde tu quieres llegar. No tiene que ser caro — muchos traders exitosos comparten gratis.</li>
<li><strong>Accountability partner:</strong> Encuentra otro trader con quien revisar trades semanalmente. La responsabilidad mutua acelera el progreso.</li>
<li><strong>Comparte tu progreso:</strong> Publica tus análisis en TradingView o redes sociales. Ensenar te obliga a entender mejor.</li>
</ul>
</div>

<h3>El Mensaje Final</h3>
<div class="highlight-box green">
<h4>De Nosotros para Ti</h4>
<p>Has invertido horas de estudio en este curso. Eso ya te pone por delante del 90% de las personas que dicen querer ser traders pero nunca estudian en serio. Ahora viene la parte mas importante: la EJECUCION.</p>
<p>No necesitas ser perfecto. No necesitas ganar todos los trades. No necesitas hacerte rico en 3 meses. Solo necesitas ser <strong>consistente, disciplinado, y nunca dejar de aprender.</strong></p>
<p>El mercado va a estar ahi mañana, el mes que viene, y dentro de 10 años. No hay prisa. Tu unica competencia eres tu mismo de ayer. Se mejor que ayer, y el éxito es inevitable.</p>
<p><strong>Bienvenido al mundo del trading profesional. Ahora sal ahi y demuestra de que estas hecho.</strong></p>
</div>`,
          keyPoints: [
            "Roadmap realista: demo (2 meses) → cuenta pequena (2 meses) → prop firm (2 meses) → escalar (3-6 meses)",
            "6-12 meses es el tiempo realista para ser consistentemente rentable con dedicacion seria",
            "El 80% del éxito es psicología y gestión de riesgo, no la estrategia",
            "Construye tu track record con diario de trading, metricas mensuales y herramientas como Myfxbook",
            "Nunca dejes de aprender: libros, YouTube (ICT), comunidades de traders verificados",
            "Encuentra un accountability partner y un mentor para acelerar tu progreso"
          ],
          quiz: [
            { question: "Cual es el tiempo realista para convertirse en un trader consistentemente rentable?", options: ["1 semana si estudias mucho", "1 mes con la estrategia correcta", "6-12 meses con dedicacion seria, estudio y práctica constante", "5 años mínimo"], correctIndex: 2, explanation: "6 a 12 meses es el rango realista para la mayoria de traders que estudian en serio, practican diariamente, y siguen un plan estructurado. No hay atajos, pero con dedicacion es alcanzable." },
            { question: "Cual deberia ser tu PRIMER paso despues de completar este curso?", options: ["Abrir una cuenta con 10,000$ y empezar a operar", "Pagar un challenge de prop firm inmediatamente", "Backtestear tu estrategia con al menos 200 trades y operar en demo hasta ser rentable 2 meses consecutivos", "Comprar un bot de trading automatico"], correctIndex: 2, explanation: "El primer paso es validar tu estrategia con backtesting extenso y luego demostrar consistencia en demo. Nunca pongas dinero real hasta que tu estrategia este probada." },
            { question: "Que porcentaje del éxito en trading corresponde a psicología y gestión de riesgo?", options: ["20%", "50%", "80%", "10%"], correctIndex: 2, explanation: "Aproximadamente el 80% del éxito en trading depende de la psicología (disciplina, control emocional) y la gestión de riesgo. La estrategia importa, pero sin la mentalidad correcta, ninguna estrategia funciona." },
            { question: "Por que es importante tener un accountability partner o mentor?", options: ["Para que te diga que trades tomar", "La responsabilidad mutua acelera el progreso y ayuda a mantener la disciplina", "Para copiar sus trades exactos", "No es importante, es mejor operar completamente solo"], correctIndex: 1, explanation: "Un accountability partner te ayuda a mantener la disciplina, revisar errores, y mantener la motivacion. La responsabilidad mutua acelera significativamente el proceso de aprendizaje." }
          ],
          practicalExercise: "Crea tu Plan de Carrera completo en un documento: 1) Tu estrategia elegida. 2) Pares y timeframe. 3) Riesgo por trade. 4) Horario. 5) Timeline 12 meses. 6) Presupuesto. 7) Como documentar progreso. 8) Compromiso firmado."
        },
        {
          id: "7-1-3",
          title: "Examen Avanzado: Escenarios de Trading Real",
          duration: "30 min",
          content: `
<h2>Examen de Escenarios: Piensa como un Profesional</h2>
<div class="highlight-box gold"><h4>Instrucciones</h4><p>Este examen presenta 10 escenarios REALES de trading. No hay respuestas "correctas" universales - hay respuestas que demuestran pensamiento profesional. Necesitas 80%+ para pasar.</p></div>
<div class="warning-box"><p>Estas preguntas son mas dificiles que el examen anterior. Requieren COMBINAR conocimientos de multiples fases y tomar decisiones bajo presion simulada.</p></div>`,
          keyPoints: [
            "Escenarios basados en situaciones reales de trading",
            "Requiere combinar multiples conceptos a la vez",
            "Piensa como profesional: proceso > resultado",
            "80% para pasar"
          ],
          quiz: [
            { question: "Escenario: Es lunes 8:30 UTC. EUR/USD rangeaba en Asia entre 1.0820-1.0850. London acaba de abrir y el precio rompio por debajo a 1.0810 con una vela roja grande. Ves muchos SL activandose. Que haces?", options: ["Vendo inmediatamente porque la tendencia es bajista", "ESPERO - esto parece un liquidity sweep del rango asiatico. Busco confirmación de giro alcista (BOS en M5/M15) para ir LONG", "Compro inmediatamente porque bajo mucho", "Cierro todo y no opero hoy"], correctIndex: 1, explanation: "Clasico AMD: Asia rangeaba, London rompe abajo para cazar liquidez. Esperar confirmación de giro (BOS) y buscar LONG en el OB/FVG es la respuesta profesional." },
            { question: "Escenario: Tienes un LONG abierto en GBP/USD con +80 pips. Tu TP original era 100 pips. El RSI muestra divergencia bajista en H1 y el precio esta en una resistencia de D1. Que haces?", options: ["Esperar a que llegue al TP de 100 pips", "Cerrar 50-70% de la posición ahora y mover SL a profit para el resto", "Mover el TP a 200 pips porque 'va bien'", "Cerrar todo inmediatamente y abrir SHORT"], correctIndex: 1, explanation: "Con divergencia bajista + resistencia D1, hay riesgo de giro. Lo profesional es asegurar parte de la ganancia (cerrar parcial) y proteger el resto con trailing stop." },
            { question: "Escenario: Llevas +6.5% en un challenge de FTMO (objetivo 8%). Quedan 5 dias. Tu riesgo normal es 1% por trade. Que ajustas?", options: ["Aumento a 2% para terminar rápido", "Reduzco a 0.25-0.5% para proteger ganancias. Solo necesito 1.5% mas en 5 dias = 0.3%/dia", "Mantengo 1% como siempre", "Dejo de operar y espero"], correctIndex: 1, explanation: "Cerca del objetivo, la prioridad es PROTEGER lo ganado. 0.25-0.5% de riesgo sigue siendo viable para alcanzar el 1.5% restante sin arriesgar las ganancias acumuladas." },
            { question: "Escenario: NFP (Non-Farm Payrolls) sale en 30 minutos. Tienes un trade abierto con +25 pips y tu TP esta a +60 pips. Que haces?", options: ["Dejo el trade abierto, mi análisis técnico dice que llegara al TP", "Cierro el trade o muevo SL a profit ANTES de la noticia. El NFP puede mover 100+ pips en segundos", "Abro otro trade en la misma dirección para maximizar", "Quito el SL para dar mas espacio"], correctIndex: 1, explanation: "El NFP es el dato mas volatil del mes. Puede invalidar todo tu análisis en segundos. Lo profesional es proteger las ganancias antes de la noticia." },
            { question: "Escenario: Tu backtest muestra 55% win rate y 1:2 R:R en 200 trades. Pero en las ultimas 3 semanas en real llevas 35% win rate. Que concluyes?", options: ["Mi estrategia no funciona, la abandono", "3 semanas es muestra demasiado pequena. Reviso ejecucion (estoy siguiendo mi plan?) pero NO cambio la estrategia basado en 15-20 trades", "Necesito anadir mas indicadores", "El mercado cambio para siempre y nunca volvera a funcionar"], correctIndex: 1, explanation: "200 trades de backtest vs 15-20 trades en real: la muestra real es demasiado pequena. Revisa si estas siguiendo tu plan correctamente. No cambies una estrategia probada por una racha corta." },
            { question: "Escenario: Ves un setup A+ en EUR/USD: OB + FVG + Fibonacci 61.8% + Killzone NY + BOS alcista en M15. PERO el DXY (Indice Dolar) esta en soporte fuerte y parece rebotar al alza. Que haces?", options: ["Entro LONG en EUR/USD porque tengo 5 confluencias", "NO entro. DXY rebotando al alza = USD se fortalece = EUR/USD deberia BAJAR. Las confluencias tecnicas contradicen el contexto macro", "Entro con doble de riesgo porque tengo muchas confluencias", "Ignoro el DXY, solo miro el grafico de EUR/USD"], correctIndex: 1, explanation: "DXY es la brujula del Forex. Si el DXY rebota al alza (USD fuerte), ir LONG en EUR/USD contradice el contexto macro. Las confluencias tecnicas son importantes pero el contexto fundamental puede invalidarlas." },
            { question: "Escenario: Acabas de perder tu primera cuenta fondeada de 100K despues de 2 meses de operar. Te sientes devastado. Cual es la acción CORRECTA?", options: ["Compro otro challenge inmediatamente para 'recuperar'", "Pausa de 1-2 semanas. Analizo QUE salio mal (diario de trading). Vuelvo a demo 2-4 semanas. Solo entonces compro nuevo challenge.", "Abandono el trading para siempre", "Cambio completamente de estrategia y compro un bot"], correctIndex: 1, explanation: "Perder la primera cuenta es NORMAL. Lo profesional: pausa para procesar emocionalmente, análisis detallado de errores, práctica en demo, y volver mejor preparado." },
            { question: "Escenario: Un 'guru' de Instagram dice que EUR/USD va a subir a 1.1500 esta semana. Tu análisis dice lo contrario: tendencia bajista, resistencia fuerte en 1.0900. Que haces?", options: ["Sigo al guru, debe saber mas que yo", "SIEMPRE sigo mi propio análisis. Ningun guru conoce mi plan, mi riesgo, ni mis reglas. Mi análisis es mi responsabilidad.", "Hago mitad y mitad", "Espero a ver quien tiene razon"], correctIndex: 1, explanation: "Tu análisis es TU responsabilidad. Ningun guru en Instagram conoce tu contexto, plan de riesgo, ni responde por tus perdidas. La autonomia en tus decisiones es fundamental." },
            { question: "Escenario: Tu diario de trading muestra que pierdes consistentemente los martes por la tarde y cuando operas USD/JPY. Que haces?", options: ["Ignoro los datos, probablemente es coincidencia", "Dejo de operar martes por la tarde y elimino USD/JPY de mis pares durante 1 mes. Luego reevaluo con datos", "Opero MAS los martes para 'arreglar' la estadistica", "Cambio completamente de estrategia"], correctIndex: 1, explanation: "El diario revelo un patron. Lo profesional: eliminar martes tarde y USD/JPY temporalmente, recopilar datos 1 mes, y decidir con evidencia. Los datos no mienten." },
            { question: "Escenario: Un amigo te pide que le enseñes a hacer 'dinero fácil' con trading en 1 semana. Que le dices?", options: ["Le enseno un par de trucos rapidos", "Le explico que trading NO es dinero fácil: requiere mínimo 6-12 meses de estudio y práctica, le recomiendo este curso, y le advierto que el 70-90% pierde dinero", "Le paso señales de un grupo de Telegram", "Le digo que invierta en mi cuenta"], correctIndex: 1, explanation: "La honestidad es fundamental. Trading requiere educacion seria, práctica y disciplina. Venderle la idea de 'dinero fácil' seria irresponsable y le costaria dinero." }
          ]
        },
        {
          id: "7-1-4",
          title: "El Trading como Estilo de Vida: Vision a Largo Plazo",
          duration: "15 min",
          content: `
<h2>Mas Alla del Trading: Construyendo un Futuro</h2>
<div class="highlight-box purple"><h4>Has Llegado al Final del Curso</h4><p>Si has completado las 7 fases, los quizzes, los proyectos, y el examen... tienes mas conocimiento que el 95% de los traders del mundo. Pero el conocimiento sin acción no vale nada. Aqui va tu última lección.</p></div>
<h3>El Trading NO es el Fin, es el Medio</h3>
<div class="analogy-box"><p>El trading es una HERRAMIENTA para conseguir lo que realmente quieres: libertad financiera, tiempo, independencia. No te enamores del trading en si. Enamorate de la vida que te permite construir.</p></div>
<h3>Los 5 Pilares del Trader Exitoso a Largo Plazo</h3>
<div class="grid-cards">
<div class="card"><h4>1. Salud Fisica</h4><p>Ejercicio, sueno, alimentacion. Un cuerpo sano toma mejores decisiones. Muchos traders de elite hacen ejercicio ANTES de operar.</p></div>
<div class="card"><h4>2. Salud Mental</h4><p>Meditacion, desconexion, hobbies. El trading puede ser estresante. Necesitas valvulas de escape.</p></div>
<div class="card"><h4>3. Relaciones</h4><p>No te aisles. Familia, amigos, comunidad de traders. El trading solitario lleva al burnout.</p></div>
<div class="card"><h4>4. Diversificacion</h4><p>No pongas todos los huevos en una canasta. Trading + inversiones pasivas + inmobiliario + negocio. Multiples fuentes de ingreso.</p></div>
<div class="card"><h4>5. Educacion Continua</h4><p>El mercado evoluciona. Lo que funciona hoy puede no funcionar en 5 años. Nunca dejes de aprender.</p></div>
</div>
<h3>Tu Compromiso Final</h3>
<div class="strategy-box"><h4>Firma este Contrato Contigo Mismo</h4>
<p>Yo me comprometo a:</p>
<ul>
<li>Seguir mi plan de trading con disciplina de hierro</li>
<li>Proteger mi capital por encima de todo</li>
<li>Nunca dejar que las emociones controlen mis decisiones</li>
<li>Registrar CADA trade en mi diario</li>
<li>Revisar y mejorar mi proceso constantemente</li>
<li>Ser honesto conmigo mismo sobre mis resultados</li>
<li>Nunca arriesgar dinero que no puedo permitirme perder</li>
<li>Tratar el trading como un negocio, no como un juego</li>
</ul></div>
<div class="highlight-box green"><h4>El Ultimo Secreto</h4>
<p>Despues de estudiar miles de traders exitosos, hay UN factor que los separa del resto: <strong>NO SE RINDIERON</strong>. Pasaron por rachas perdedoras, challenges fallidos, momentos de duda. Pero siguieron adelante, ajustaron, aprendieron, y eventualmente llegaron. Tu también puedes. Ahora ve y hazlo.</p></div>`,
          keyPoints: [
            "El trading es un MEDIO para conseguir libertad, no un fin en si mismo",
            "5 pilares: salud fisica, salud mental, relaciones, diversificacion, educacion continua",
            "Nunca arriesgues dinero que no puedes perder",
            "El factor #1 de los traders exitosos: NO SE RINDIERON",
            "Trata el trading como un negocio, no como un juego"
          ],
          quiz: [
            { question: "Cual es el factor #1 que separa a los traders exitosos del resto?", options: ["Tienen la mejor estrategia", "Tienen mas dinero", "No se rindieron - persistieron a pesar de las dificultades", "Tienen mejor software"], correctIndex: 2, explanation: "La persistencia es el factor clave. Todos los traders exitosos pasaron por momentos dificiles. La diferencia es que NO se rindieron." },
            { question: "Porque es importante diversificar mas alla del trading?", options: ["No es importante", "Porque poner todo tu dinero y esperanza en una sola fuente de ingreso es un riesgo enorme", "Porque el trading no funciona", "Porque es la ley"], correctIndex: 1, explanation: "Diversificar ingresos (trading + inversiones + negocio) reduce el riesgo total y la presion sobre tu trading. Si dependes 100% del trading, la presion nubla las decisiones." },
            { question: "Que deberia hacer un trader para su salud mental?", options: ["Operar 12 horas al dia", "Tener hobbies, hacer ejercicio, meditar, desconectar del mercado regularmente", "Solo pensar en trading", "Ignorar el estres"], correctIndex: 1, explanation: "El trading puede ser muy estresante. Ejercicio, hobbies, meditacion y desconexion son esenciales para mantener la claridad mental y tomar buenas decisiones." }
          ]
        }
      ]
    }
  ]
};
