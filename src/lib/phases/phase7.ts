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
<p>Este es el examen final del curso. Contiene <strong>20 preguntas de nivel experto</strong> que cubren TODAS las fases del curso: fundamentos, velas japonesas, estructura de mercado, soportes/resistencias, indicadores tecnicos, Fibonacci, gestion de riesgo, psicologia del trading, Smart Money Concepts, ICT, prop firms y backtesting.</p>
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
<div class="card"><h4>Preguntas 9-12</h4><p>Gestion de riesgo y psicologia del trading</p></div>
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
                "No operar porque hay demasiadas senales"
              ],
              correctIndex: 1,
              explanation: "Tienes confluencia maxima: BOS alcista (tendencia), retroceso al golden pocket de Fibonacci (nivel), martillo en order block (confirmacion de entrada), y RSI saliendo de sobreventa (momentum). Es un setup A+ de alta probabilidad para compra."
            },
            {
              question: "En tu cuenta fondeada de 100K llevas un drawdown diario de 4.2%. Ves un setup que consideras 'perfecto' con R:R 1:3. Tu riesgo seria 0.8% de la cuenta. Que decision tomas?",
              options: [
                "Entrar al trade porque el setup es perfecto y el R:R es muy bueno",
                "No operar hoy — estas a 0.8% del limite de drawdown diario (5%) y una perdida te eliminaria del challenge",
                "Entrar con la mitad del riesgo (0.4%)",
                "Cerrar la plataforma y volver manana"
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
              explanation: "Morning Star es un patron de 3 velas de giro alcista: vela bajista grande, vela de indecision pequena, y vela alcista grande. En un soporte es una senal de compra fuerte. Evening Star y Three Black Crows son bajistas."
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
              explanation: "Un trade de alta probabilidad combina multiples confluencias: order block (zona), Fibonacci (nivel matematico), patron de velas (confirmacion), volumen (validacion), y estructura alcista (direccion). Cuantas mas confluencias, mayor probabilidad."
            },
            {
              question: "Estas backtesting una estrategia. Despues de 200 trades tienes: Win Rate 42%, Profit Factor 1.8, Max Drawdown 12%, R:R promedio 1:2.5. Es una estrategia viable para un challenge de prop firm?",
              options: [
                "No, porque el win rate es menor al 50%",
                "No, porque el max drawdown es 12% y el limite del challenge es 10%",
                "Si, el profit factor de 1.8 y R:R 1:2.5 compensan el win rate, PERO necesitas reducir el riesgo por trade para que el max drawdown quede por debajo del 10%",
                "Si, todos los numeros son perfectos"
              ],
              correctIndex: 2,
              explanation: "La estrategia es rentable (PF 1.8 es bueno, R:R 1:2.5 compensa el 42% win rate). PERO el max drawdown de 12% excede el limite del 10% en challenges. Solucion: reducir el riesgo por trade para comprimir el drawdown por debajo del 10%."
            },
            {
              question: "Que es un Fair Value Gap (FVG) en el contexto de Smart Money Concepts?",
              options: [
                "Un indicador tecnico que mide la volatilidad",
                "Un gap entre la mecha de la vela 1 y la mecha de la vela 3 donde el precio se movio tan rapido que dejo un desequilibrio que el mercado tiende a rellenar",
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
                "Duplicar el tamano de posicion para recuperar rapido",
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
              question: "El precio de GBP/USD rompe un soporte importante con una vela de cuerpo grande y alto volumen. Luego retrocede al soporte roto (ahora resistencia) y forma una estrella fugaz. Tu analisis es:",
              options: [
                "Comprar porque el precio esta subiendo",
                "El soporte roto ahora actua como resistencia (polaridad). La estrella fugaz confirma rechazo. Es una entrada en corto (venta) de alta probabilidad",
                "No hacer nada porque hay mucha volatilidad",
                "Esperar a que el RSI llegue a 80"
              ],
              correctIndex: 1,
              explanation: "Este es un ejemplo clasico de 'polaridad' (soporte roto se convierte en resistencia). El retroceso al nivel con rechazo (estrella fugaz) es un setup de venta con alta confluencia: estructura bajista + nivel clave + confirmacion de vela."
            },
            {
              question: "Que es un 'liquidity sweep' en la teoria ICT?",
              options: [
                "Cuando el precio sube muy rapido",
                "Cuando el mercado barre los stop losses acumulados detras de un nivel obvio (highs/lows) para luego revertir en la direccion opuesta",
                "Una estrategia de scalping",
                "Un tipo de indicador de volumen"
              ],
              correctIndex: 1,
              explanation: "Un liquidity sweep ocurre cuando las instituciones empujan el precio mas alla de un nivel obvio donde se acumulan stop losses del retail, activan esas ordenes (capturan liquidez), y luego mueven el precio en la direccion opuesta."
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
              question: "Que condicion DEBE cumplirse para que un patron de velas como un martillo sea una senal fiable de compra?",
              options: [
                "Que aparezca en cualquier lugar del grafico",
                "Que el volumen sea bajo",
                "Que aparezca en un nivel importante (soporte, order block, Fibonacci) con la estructura general a favor",
                "Que sea la primera vela del dia"
              ],
              correctIndex: 2,
              explanation: "Un patron de velas SOLO es fiable cuando aparece en un nivel importante (soporte, resistencia, order block, Fibonacci) y la estructura general del mercado apoya la direccion. Un martillo aislado sin contexto no tiene valor."
            },
            {
              question: "Que significa un profit factor de 2.5 en un backtest?",
              options: [
                "Que ganaste 2.5 veces mas trades de los que perdiste",
                "Que por cada dolar perdido, ganaste 2.50 dolares en total",
                "Que tu win rate es 25%",
                "Que tu drawdown maximo es 2.5%"
              ],
              correctIndex: 1,
              explanation: "Profit Factor = Ganancias Totales / Perdidas Totales. Un PF de 2.5 significa que por cada dolar que perdiste, ganaste 2.50$. Es un resultado excelente que indica una estrategia muy rentable."
            },
            {
              question: "Estas en una tendencia alcista en H4. El precio hace un Higher High, luego retrocede. Donde buscarias la entrada optima para un long segun SMC?",
              options: [
                "En el punto mas alto (Higher High)",
                "En cualquier punto aleatorio del retroceso",
                "En el order block que genero el ultimo impulso alcista, idealmente en la zona del 0.618-0.786 de Fibonacci del movimiento",
                "Despues de que el precio ya haya subido de nuevo"
              ],
              correctIndex: 2,
              explanation: "Segun SMC, la entrada optima es en el order block (ultima vela bajista antes del impulso) que coincide con la zona del golden pocket de Fibonacci (0.618-0.786). Esta es la zona donde las instituciones recargan posiciones."
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
                "Un movimiento agresivo y rapido del precio causado por instituciones que muestra interes direccional fuerte, dejando FVGs y rompiendo estructura",
                "El spread del broker",
                "La distancia entre el stop loss y el take profit"
              ],
              correctIndex: 1,
              explanation: "Displacement es un movimiento de precio agresivo y rapido causado por la actividad institucional. Se caracteriza por velas de cuerpo grande, deja Fair Value Gaps, y rompe estructura de mercado. Indica la direccion real del interes institucional."
            },
            {
              question: "Para un challenge de prop firm con objetivo de 10% y drawdown maximo de 10%, cual es la MEJOR estrategia de riesgo?",
              options: [
                "Arriesgar 5% por trade para llegar rapido al objetivo",
                "Arriesgar 2-3% por trade — riesgo moderado para avanzar rapido",
                "Arriesgar 0.5-1% por trade con R:R minimo 1:2, avanzando de forma consistente y protegiendo el drawdown",
                "No usar stop loss para evitar que te saquen del trade"
              ],
              correctIndex: 2,
              explanation: "Con 0.5-1% de riesgo por trade, necesitas muchas perdidas consecutivas para llegar al limite de drawdown. Con R:R 1:2 y un win rate decente, alcanzas el 10% de forma gradual y segura. Riesgos mayores pueden eliminar tu cuenta en pocos trades."
            },
            {
              question: "Ves una divergencia bajista en el RSI (precio hace higher high, RSI hace lower high) justo en una zona de oferta (supply zone) de H4. La estructura en M15 acaba de hacer un Change of Character (CHoCH) bajista. Tu plan es:",
              options: [
                "Comprar porque el precio esta en maximos",
                "Vender: divergencia bajista + supply zone + CHoCH bajista en timeframe menor = triple confluencia para short con entrada en el ultimo order block bajista de M15",
                "Esperar sin hacer nada",
                "Comprar en la supply zone esperando un breakout"
              ],
              correctIndex: 1,
              explanation: "Tienes triple confluencia bajista: 1) Divergencia RSI indica debilidad del impulso alcista. 2) Supply zone en H4 es resistencia institucional. 3) CHoCH bajista en M15 confirma que los compradores perdieron el control. La entrada optima es en el order block que genero el CHoCH."
            },
            {
              question: "Un trader consistente que ya paso un challenge de FTMO con una cuenta de 100K quiere escalar sus ingresos. Cual es la mejor estrategia a seguir?",
              options: [
                "Aumentar el riesgo por trade al 5% para ganar mas rapido",
                "Mantener la misma estrategia y riesgo, y abrir cuentas adicionales en la misma u otras prop firms usando un trade copier para multiplicar ganancias",
                "Cambiar a una estrategia mas agresiva",
                "Invertir todas las ganancias en criptomonedas"
              ],
              correctIndex: 1,
              explanation: "La mejor forma de escalar es mantener exactamente la misma estrategia y riesgo que funciono, y multiplicar cuentas fondeadas. Un trade copier replica la misma operacion en todas las cuentas. Mismos trades, multiples cuentas = ingresos multiplicados sin aumentar el riesgo."
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
<li>Lleva un diario de trading DETALLADO (cada trade con screenshot, emociones, analisis)</li>
<li>Enfocate en UNA estrategia, UN timeframe, y 2-3 pares maximo</li>
<li><strong>No pases a la siguiente fase hasta ser rentable 2 meses consecutivos en demo</strong></li>
</ul>
</div>

<div class="highlight-box green">
<h4>FASE 2: Meses 3-4 — Cuenta Pequena Real</h4>
<ul>
<li><strong>Objetivo:</strong> Experimentar el trading con dinero real</li>
<li>Abre una cuenta con 200-500$ maximo (lo que puedas PERDER sin afectar tu vida)</li>
<li>Mismo plan que en demo — no cambies NADA</li>
<li>Las emociones seran DIFERENTES con dinero real. Eso es normal.</li>
<li>Riesgo maximo 1% por trade (2-5$ por trade)</li>
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
<li><strong>No es un esquema de dinero rapido.</strong> Los traders exitosos pasaron meses o anos aprendiendo.</li>
<li><strong>80% del exito</strong> es psicologia y gestion de riesgo, no la estrategia</li>
<li><strong>Vas a tener meses malos</strong> incluso siendo rentable a largo plazo. Es parte del proceso.</li>
<li><strong>El objetivo inicial</strong> no es vivir del trading — es ser consistente. El dinero viene como consecuencia.</li>
</ul>
</div>

<h3>Educacion Continua</h3>
<div class="grid-cards">
<div class="card"><h4>YouTube</h4><p>ICT (Inner Circle Trader) — Canal original de Michael J. Huddleston. Contenido gratuito y avanzado sobre Smart Money y conceptos institucionales.</p></div>
<div class="card"><h4>TradingView</h4><p>Seccion de Ideas y Scripts. Aprende de traders reales que publican sus analisis y codigo. Sigue a traders con buen track record.</p></div>
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
<li><strong>Unete a comunidades:</strong> Discord y Telegram de trading (busca las que tienen traders verificados, no las que venden senales)</li>
<li><strong>Encuentra un mentor:</strong> Alguien que ya este donde tu quieres llegar. No tiene que ser caro — muchos traders exitosos comparten gratis.</li>
<li><strong>Accountability partner:</strong> Encuentra otro trader con quien revisar trades semanalmente. La responsabilidad mutua acelera el progreso.</li>
<li><strong>Comparte tu progreso:</strong> Publica tus analisis en TradingView o redes sociales. Ensenar te obliga a entender mejor.</li>
</ul>
</div>

<h3>El Mensaje Final</h3>
<div class="highlight-box green">
<h4>De Nosotros para Ti</h4>
<p>Has invertido horas de estudio en este curso. Eso ya te pone por delante del 90% de las personas que dicen querer ser traders pero nunca estudian en serio. Ahora viene la parte mas importante: la EJECUCION.</p>
<p>No necesitas ser perfecto. No necesitas ganar todos los trades. No necesitas hacerte rico en 3 meses. Solo necesitas ser <strong>consistente, disciplinado, y nunca dejar de aprender.</strong></p>
<p>El mercado va a estar ahi manana, el mes que viene, y dentro de 10 anos. No hay prisa. Tu unica competencia eres tu mismo de ayer. Se mejor que ayer, y el exito es inevitable.</p>
<p><strong>Bienvenido al mundo del trading profesional. Ahora sal ahi y demuestra de que estas hecho.</strong></p>
</div>`,
          keyPoints: [
            "Roadmap realista: demo (2 meses) → cuenta pequena (2 meses) → prop firm (2 meses) → escalar (3-6 meses)",
            "6-12 meses es el tiempo realista para ser consistentemente rentable con dedicacion seria",
            "El 80% del exito es psicologia y gestion de riesgo, no la estrategia",
            "Construye tu track record con diario de trading, metricas mensuales y herramientas como Myfxbook",
            "Nunca dejes de aprender: libros, YouTube (ICT), comunidades de traders verificados",
            "Encuentra un accountability partner y un mentor para acelerar tu progreso"
          ],
          quiz: [
            { question: "Cual es el tiempo realista para convertirse en un trader consistentemente rentable?", options: ["1 semana si estudias mucho", "1 mes con la estrategia correcta", "6-12 meses con dedicacion seria, estudio y practica constante", "5 anos minimo"], correctIndex: 2, explanation: "6 a 12 meses es el rango realista para la mayoria de traders que estudian en serio, practican diariamente, y siguen un plan estructurado. No hay atajos, pero con dedicacion es alcanzable." },
            { question: "Cual deberia ser tu PRIMER paso despues de completar este curso?", options: ["Abrir una cuenta con 10,000$ y empezar a operar", "Pagar un challenge de prop firm inmediatamente", "Backtestear tu estrategia con al menos 200 trades y operar en demo hasta ser rentable 2 meses consecutivos", "Comprar un bot de trading automatico"], correctIndex: 2, explanation: "El primer paso es validar tu estrategia con backtesting extenso y luego demostrar consistencia en demo. Nunca pongas dinero real hasta que tu estrategia este probada." },
            { question: "Que porcentaje del exito en trading corresponde a psicologia y gestion de riesgo?", options: ["20%", "50%", "80%", "10%"], correctIndex: 2, explanation: "Aproximadamente el 80% del exito en trading depende de la psicologia (disciplina, control emocional) y la gestion de riesgo. La estrategia importa, pero sin la mentalidad correcta, ninguna estrategia funciona." },
            { question: "Por que es importante tener un accountability partner o mentor?", options: ["Para que te diga que trades tomar", "La responsabilidad mutua acelera el progreso y ayuda a mantener la disciplina", "Para copiar sus trades exactos", "No es importante, es mejor operar completamente solo"], correctIndex: 1, explanation: "Un accountability partner te ayuda a mantener la disciplina, revisar errores, y mantener la motivacion. La responsabilidad mutua acelera significativamente el proceso de aprendizaje." }
          ],
          practicalExercise: "Crea tu Plan de Carrera completo en un documento: 1) Tu estrategia elegida (descrita en detalle). 2) Los pares que operaras y el timeframe. 3) Tu regla de riesgo por trade. 4) Tu horario de trading (dias y horas). 5) Tu timeline de los proximos 12 meses con objetivos especificos para cada fase. 6) Tu presupuesto (cuanto destinas a challenges, formacion, herramientas). 7) Como vas a documentar tu progreso (diario, metricas). 8) Tu compromiso firmado contigo mismo. Imprime este plan y ponlo donde lo veas cada dia."
        }
      ]
    }
  ]
};
