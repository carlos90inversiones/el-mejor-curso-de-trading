import type { Phase } from "../courseData";

export const PHASE_5: Phase = {
  id: "fase-5",
  number: 5,
  title: "Cuentas Fondeadas & Prop Firms",
  subtitle: "Pasa el challenge y opera capital de otros",
  description: "Aprende a operar cuentas fondeadas, pasa los challenges de las mejores prop firms del mundo y comienza a operar capital de otros para escalar tus ganancias sin arriesgar tu propio dinero.",
  color: "#F59E0B",
  gradient: "from-amber-500 to-amber-700",
  modules: [
    {
      id: "mod-5-1",
      title: "Dominando las Prop Firms",
      description: "Todo lo que necesitas para pasar challenges y vivir del trading fondeado",
      icon: "💰",
      color: "#F59E0B",
      lessons: [
        {
          id: "5-1-1",
          title: "Que son las Prop Firms y como funcionan",
          duration: "30 min",
          content: `
<h2>El Mundo de las Prop Firms</h2>
<div class="analogy-box">
<h3>La Analogia del Piloto</h3>
<p>Imagina que quieres ser piloto de avion. No necesitas comprar un Boeing 737 — una aerolinea te da el avion, tu demuestras que sabes pilotear, y te pagan por volar. Las <strong>Prop Firms</strong> funcionan igual: te dan el capital, tu demuestras que sabes tradear, y te quedas con un porcentaje de las ganancias.</p>
</div>

<div style="display:flex;justify-content:center;margin:20px 0">
<svg width="460" height="160" viewBox="0 0 460 160" style="background:#131722;border-radius:12px;border:1px solid #2a2a40">
<text x="230" y="18" fill="white" font-size="11" text-anchor="middle" font-weight="bold">REGLAS TIPICAS DE UN CHALLENGE (100K)</text>
<!-- Objetivo -->
<rect x="20" y="35" width="130" height="50" rx="8" fill="#26a69a15" stroke="#26a69a"/>
<text x="85" y="55" fill="#26a69a" font-size="9" text-anchor="middle" font-weight="bold">OBJETIVO</text>
<text x="85" y="72" fill="#26a69a" font-size="14" text-anchor="middle" font-weight="bold">+8%</text>
<text x="85" y="82" fill="#787b86" font-size="7" text-anchor="middle">(8,000$)</text>
<!-- DD Diario -->
<rect x="165" y="35" width="130" height="50" rx="8" fill="#ef535015" stroke="#ef5350"/>
<text x="230" y="55" fill="#ef5350" font-size="9" text-anchor="middle" font-weight="bold">DD DIARIO MAX</text>
<text x="230" y="72" fill="#ef5350" font-size="14" text-anchor="middle" font-weight="bold">-5%</text>
<text x="230" y="82" fill="#787b86" font-size="7" text-anchor="middle">(5,000$/dia)</text>
<!-- DD Total -->
<rect x="310" y="35" width="130" height="50" rx="8" fill="#ff980015" stroke="#ff9800"/>
<text x="375" y="55" fill="#ff9800" font-size="9" text-anchor="middle" font-weight="bold">DD TOTAL MAX</text>
<text x="375" y="72" fill="#ff9800" font-size="14" text-anchor="middle" font-weight="bold">-10%</text>
<text x="375" y="82" fill="#787b86" font-size="7" text-anchor="middle">(10,000$ total)</text>
<!-- Timeline -->
<rect x="20" y="100" width="200" height="35" rx="6" fill="#3b82f612" stroke="#3b82f644"/>
<text x="120" y="115" fill="#3b82f6" font-size="9" text-anchor="middle" font-weight="bold">Fase 1: 30 dias | Fase 2: 60 dias</text>
<text x="120" y="128" fill="#787b86" font-size="7" text-anchor="middle">Min 4-5 dias operados</text>
<!-- Split -->
<rect x="235" y="100" width="205" height="35" rx="6" fill="#8b5cf612" stroke="#8b5cf644"/>
<text x="337" y="115" fill="#8b5cf6" font-size="9" text-anchor="middle" font-weight="bold">Profit Split: 80% para ti</text>
<text x="337" y="128" fill="#787b86" font-size="7" text-anchor="middle">Escalable hasta 90%</text>
<text x="230" y="152" fill="#fbbf24" font-size="9" text-anchor="middle">Riesgo recomendado: 0.5% por trade | R:R mínimo 1:2</text>
</svg>
</div>

<h3>Que es una Proprietary Trading Firm (Prop Firm)?</h3>
<p>Una Prop Firm es una <strong>empresa que proporciona capital a traders</strong> para que operen en los mercados financieros. El trader no arriesga su propio dinero (mas alla de la tarifa del challenge). A cambio, la prop firm se queda con un porcentaje de las ganancias.</p>

<div class="highlight-box green">
<h4>Como Funciona el Modelo</h4>
<ol>
<li><strong>Paso 1:</strong> Pagas una tarifa de evaluación (challenge) — entre 50$ y 1,000$ dependiendo del tamano de cuenta</li>
<li><strong>Paso 2:</strong> Pasas 1 o 2 fases de evaluación demostrando que eres rentable y gestionas bien el riesgo</li>
<li><strong>Paso 3:</strong> Recibes una cuenta fondeada (10K, 25K, 50K, 100K, 200K o mas)</li>
<li><strong>Paso 4:</strong> Operas la cuenta y te quedas con el 70-90% de las ganancias</li>
</ol>
</div>

<h3>Profit Split: Como se Reparten las Ganancias</h3>
<div class="grid-cards">
<div class="card"><h4>Estandar: 80/20</h4><p>Tu te quedas con el 80% de las ganancias. La prop firm se queda con el 20%. Es lo más comun en la industria.</p></div>
<div class="card"><h4>Premium: 90/10</h4><p>Algunas firms ofrecen 90% para el trader despues de cierto volumen o antiguedad. FTMO lo ofrece tras el primer retiro exitoso.</p></div>
<div class="card"><h4>Con Scaling: Hasta 100%</h4><p>Firms como Funded Next ofrecen hasta 90-95% con planes de escalado que aumentan tu capital y tu porcentaje.</p></div>
</div>

<h3>Las Principales Prop Firms del Mercado</h3>
<div class="grid-cards">
<div class="card"><h4>FTMO</h4><p>La más reconocida del mundo. 2 fases de evaluación. Profit split 80-90%. Cuenta desde 10K hasta 200K. Muy estricta pero muy profesional.</p></div>
<div class="card"><h4>Funded Next</h4><p>Crecimiento rápido. Modelo Express (1 fase) o Evaluation (2 fases). Hasta 95% profit split con scaling. Reembolso de tarifa tras primer retiro.</p></div>
<div class="card"><h4>The Funded Trader</h4><p>Multiples tipos de challenge. Royal, Knight, Dragon. Cuentas hasta 400K. Profit split hasta 90%. Buena atencion al cliente.</p></div>
<div class="card"><h4>MyForexFunds / True Forex Funds</h4><p>Opciones más accesibles. Tarifas más bajas. Ideales para empezar con cuentas pequenas y ganar experiencia en el mundo fondeado.</p></div>
</div>

<h3>1 Fase vs 2 Fases: Cual Elegir?</h3>
<div class="comparison-table">
<div class="comparison-col">
<h4>Challenge 1 Fase</h4>
<ul>
<li>Solo una evaluación para pasar</li>
<li>Objetivo de profit más alto (8-10%)</li>
<li>Mas rápido si lo pasas</li>
<li>Mayor presion en una sola fase</li>
<li>Ideal si tienes experiencia y confianza</li>
</ul>
</div>
<div class="comparison-col">
<h4>Challenge 2 Fases</h4>
<ul>
<li>Fase 1: objetivo ~8-10% profit</li>
<li>Fase 2: objetivo ~5% profit</li>
<li>Mas tiempo total pero menos presion por fase</li>
<li>Drawdown más manejable</li>
<li>Ideal para principiantes en prop firms</li>
</ul>
</div>
</div>

<h3>Reglas Tipicas de Evaluacion</h3>
<div class="warning-box">
<h4>Reglas que DEBES Respetar</h4>
<ul>
<li><strong>Drawdown Maximo Diario:</strong> No puedes perder más del 5% de la cuenta en UN DIA</li>
<li><strong>Drawdown Maximo Total:</strong> No puedes perder más del 10% del balance inicial TOTAL</li>
<li><strong>Objetivo de Profit:</strong> Generalmente 8-10% en Fase 1, 5% en Fase 2</li>
<li><strong>Dias Minimos de Trading:</strong> Normalmente 4-5 dias minimos operando</li>
<li><strong>Sin Noticias de Alto Impacto:</strong> Muchas firms prohiben operar 2 min antes/despues de noticias rojas</li>
<li><strong>Sin Trading de Fin de Semana:</strong> No puedes mantener posiciones abiertas el fin de semana (en la mayoria)</li>
</ul>
</div>

<div class="highlight-box blue">
<h4>Consejo Clave</h4>
<p>LEE las reglas de cada prop firm ANTES de empezar. Cada una tiene variaciones. Una violacion de reglas = cuenta eliminada, sin importar cuanto profit tengas. La disciplina con las reglas es TAN IMPORTANTE como la estrategia de trading.</p>
</div>`,
          keyPoints: [
            "Las Prop Firms te dan capital para operar sin arriesgar tu dinero — tu demuestras habilidad y te quedas con 70-90% de ganancias",
            "Principales firms: FTMO, Funded Next, The Funded Trader — cada una con reglas distintas",
            "Challenge 1 fase es más rápido pero con más presion; 2 fases es más gradual y recomendable para empezar",
            "Reglas criticas: drawdown diario 5%, drawdown total 10%, dias minimos de trading",
            "Leer TODAS las reglas antes de empezar es obligatorio — una violacion elimina la cuenta sin importar el profit"
          ],
          quiz: [
            { question: "Que es una Prop Firm?", options: ["Un banco que da prestamos a traders", "Una empresa que proporciona capital a traders para operar a cambio de un porcentaje de ganancias", "Una plataforma de trading automático", "Un fondo de inversion tradicional"], correctIndex: 1, explanation: "Una Prop Firm proporciona capital a traders. El trader demuestra su habilidad en un challenge y luego opera la cuenta fondeada, quedandose con el 70-90% de las ganancias." },
            { question: "Cual es el drawdown máximo diario típico en un challenge?", options: ["2%", "5%", "10%", "15%"], correctIndex: 1, explanation: "La mayoria de prop firms establecen un drawdown máximo diario del 5%. Si pierdes más que eso en un solo dia, fallas el challenge." },
            { question: "Cual es la ventaja principal de un challenge de 2 fases vs 1 fase?", options: ["Es más barato", "Tiene menos presion por fase y drawdown más manejable", "Te dan más capital", "No tiene reglas de drawdown"], correctIndex: 1, explanation: "El challenge de 2 fases divide el objetivo en dos partes, lo que reduce la presion en cada fase individual y hace el drawdown más manejable." },
            { question: "Que profit split es el más comun en la industria?", options: ["50/50", "60/40", "80/20 (80% para el trader)", "100% para el trader"], correctIndex: 2, explanation: "El profit split estandar es 80/20 — el trader se queda con el 80% de las ganancias y la prop firm con el 20%." }
          ],
          practicalExercise: "Visita las páginas web de FTMO (ftmo.com) y Funded Next (fundednext.com). Compara: 1) Tarifas del challenge para una cuenta de 100K. 2) Reglas de drawdown. 3) Profit split. 4) Numero de fases. Crea una tabla comparativa y decide cual seria mejor para ti y por que."
        },
        {
          id: "5-1-2",
          title: "Estrategia para pasar challenges en 4 semanas",
          duration: "40 min",
          content: `
<h2>Plan de 4 Semanas para Pasar un Challenge</h2>
<div class="analogy-box">
<h3>Piensa como un Maratonista</h3>
<p>Un maratonista no sale corriendo al máximo desde el primer metro. Tiene un plan: empezar conservador, mantener el ritmo, y acelerar al final si las piernas responden. Pasar un challenge es un MARATON, no un sprint. Tu objetivo NO es hacerte rico en el challenge — es <strong>demostrar consistencia y gestión de riesgo.</strong></p>
</div>

<h3>La Configuracion Perfecta</h3>
<div class="highlight-box blue">
<h4>Parametros Base (Cuenta de 100K como ejemplo)</h4>
<ul>
<li><strong>Objetivo Fase 1:</strong> 10,000$ (10%)</li>
<li><strong>Drawdown Diario Max:</strong> 5,000$ (5%)</li>
<li><strong>Drawdown Total Max:</strong> 10,000$ (10%)</li>
<li><strong>Riesgo por Trade:</strong> 0.5% - 1% máximo (500$ - 1,000$)</li>
<li><strong>R:R Minimo:</strong> 1:2 (arriesgas 1 para ganar 2)</li>
<li><strong>Operaciones al Dia:</strong> 1-3 máximo</li>
</ul>
</div>

<h3>Plan Semana por Semana</h3>

<div class="highlight-box green">
<h4>SEMANA 1: Modo Ultra-Conservador (Objetivo: 2-3%)</h4>
<ul>
<li><strong>Riesgo por trade:</strong> 0.5% MAXIMO</li>
<li><strong>Objetivo semanal:</strong> 2,000$ - 3,000$ (2-3%)</li>
<li><strong>Pares a operar:</strong> Solo EUR/USD y GBP/USD (los más liquidos, spreads bajos)</li>
<li><strong>Horario:</strong> Solo solapamiento London-NY (13:00-17:00 UTC)</li>
<li><strong>Maximo 2 trades al dia</strong></li>
<li><strong>Mentalidad:</strong> "Estoy conociendo la plataforma y adaptandome"</li>
</ul>
<p>La semana 1 es para adaptarte. No intentes hacer el 10% de una vez. Gana confianza con operaciones pequenas y consistentes.</p>
</div>

<div class="highlight-box green">
<h4>SEMANA 2: Aumentar Ligeramente (Objetivo: 3-4%)</h4>
<ul>
<li><strong>Riesgo por trade:</strong> 0.75% máximo</li>
<li><strong>Objetivo semanal:</strong> 3,000$ - 4,000$ (3-4%)</li>
<li><strong>Anadir pares:</strong> USD/JPY, XAUUSD (oro) si tienes experiencia</li>
<li><strong>Maximo 2-3 trades al dia</strong></li>
<li><strong>Mentalidad:</strong> "Ya conozco el ritmo, aumento ligeramente"</li>
</ul>
<p>Si la semana 1 fue rentable, tienes colchon. Ahora puedes arriesgar un poco más por trade pero siempre con disciplina.</p>
</div>

<div class="highlight-box green">
<h4>SEMANA 3: Consolidar y Evaluar (Objetivo: 2-3%)</h4>
<ul>
<li><strong>Riesgo por trade:</strong> 0.5-0.75%</li>
<li><strong>Objetivo:</strong> Sumar lo que falte para llegar al 8-9% acumulado</li>
<li><strong>Evaluar:</strong> Si ya tienes 6-7%, esta semana es para ir cerrando</li>
<li><strong>Si vas por debajo del 4%:</strong> Puedes subir a 1% de riesgo pero NO MAS</li>
<li><strong>Mentalidad:</strong> "Voy bien, solo necesito mantener la disciplina"</li>
</ul>
</div>

<div class="highlight-box green">
<h4>SEMANA 4: Cierre Estrategico (Objetivo: Completar el 10%)</h4>
<ul>
<li><strong>Si ya tienes 8-9%:</strong> Riesgo 0.5%, solo necesitas 1-2 buenos trades</li>
<li><strong>Si tienes 5-7%:</strong> Riesgo 0.75-1%, busca setups de alta probabilidad</li>
<li><strong>Si tienes menos del 5%:</strong> Evalua si vale la pena continuar o es mejor reiniciar</li>
<li><strong>NUNCA hagas revenge trading la última semana</strong></li>
<li><strong>Mentalidad:</strong> "Paciencia. Un buen trade lo cambia todo"</li>
</ul>
</div>

<h3>Cuando Ser Conservador vs Agresivo</h3>
<div class="comparison-table">
<div class="comparison-col">
<h4>SE CONSERVADOR (0.5%)</h4>
<ul>
<li>Primeros dias del challenge</li>
<li>Despues de 2 perdidas seguidas</li>
<li>Cuando el mercado esta choppy/lateral</li>
<li>Antes de noticias importantes</li>
<li>Cuando ya tienes 8%+ de profit</li>
</ul>
</div>
<div class="comparison-col">
<h4>SE MAS AGRESIVO (0.75-1%)</h4>
<ul>
<li>Cuando tienes un colchon de profit (3%+)</li>
<li>En setups A+ de alta confluencia</li>
<li>Durante el solapamiento London-NY</li>
<li>Cuando la tendencia es clara y fuerte</li>
<li>NUNCA si estas en drawdown cercano al limite</li>
</ul>
</div>
</div>

<h3>Manejo del Drawdown</h3>
<div class="warning-box">
<h4>Protocolo de Drawdown</h4>
<ul>
<li><strong>Drawdown 1-2%:</strong> Normal. Sigue tu plan. No cambies nada.</li>
<li><strong>Drawdown 3%:</strong> Reduce riesgo a 0.5%. Opera solo setups A+.</li>
<li><strong>Drawdown 4%:</strong> PARA de operar por hoy. Maximo 1 trade al dia siguiente con 0.5% de riesgo.</li>
<li><strong>Drawdown 4.5% diario:</strong> NO OPERES MAS HOY. Punto. No hay discusion.</li>
<li><strong>Drawdown total 7%+:</strong> Modo supervivencia. 0.25-0.5% por trade máximo. Solo los mejores setups.</li>
</ul>
</div>

<h3>Pares e Instrumentos Recomendados para Challenges</h3>
<div class="grid-cards">
<div class="card"><h4>TIER 1 - Los Mejores</h4><p><strong>EUR/USD:</strong> Spread bajo, movimiento predecible. <strong>GBP/USD:</strong> Mas volatil pero muy técnico. Ideal para la mayoria de estrategias.</p></div>
<div class="card"><h4>TIER 2 - Buenos</h4><p><strong>USD/JPY:</strong> Buen movimiento en sesion asiatica. <strong>XAUUSD (Oro):</strong> Mucho movimiento, ideal si dominas su comportamiento.</p></div>
<div class="card"><h4>EVITAR en Challenges</h4><p><strong>Pares exoticos:</strong> Spreads altos, movimientos impredecibles. <strong>Cripto:</strong> Volatilidad extrema. <strong>Indices:</strong> Solo si tienes experiencia específica con ellos.</p></div>
</div>

<h3>Horarios Optimos de Trading</h3>
<div class="highlight-box blue">
<h4>Ventana de Oro: 13:00-17:00 UTC</h4>
<p>El solapamiento London-NY es tu mejor amigo. Maximo volumen, mejores movimientos, spreads más bajos. Opera aquí y evita la tentacion de tradear fuera de horario. Menos trades de calidad > muchos trades mediocres.</p>
</div>`,
          keyPoints: [
            "Riesgo 0.5-1% por trade máximo — la consistencia gana challenges, no las operaciones grandes",
            "Plan de 4 semanas: ultra-conservador (S1), aumentar ligeramente (S2), consolidar (S3), cerrar (S4)",
            "Solo opera EUR/USD y GBP/USD durante el solapamiento London-NY para maximizar probabilidades",
            "Protocolo de drawdown estricto: al 3% reduces riesgo, al 4% paras por hoy",
            "Nunca hagas revenge trading — si llegas al 4.5% de drawdown diario, deja de operar",
            "R:R mínimo 1:2 y máximo 1-3 trades al dia"
          ],
          quiz: [
            { question: "Cual deberia ser tu riesgo máximo por trade en la semana 1 de un challenge?", options: ["2%", "1.5%", "0.5%", "3%"], correctIndex: 2, explanation: "En la semana 1 debes ser ultra-conservador con 0.5% de riesgo máximo para adaptarte y ganar confianza sin arriesgar el challenge." },
            { question: "Que debes hacer si llevas un drawdown del 4% en un dia?", options: ["Duplicar el riesgo para recuperar", "Seguir operando con el mismo riesgo", "Dejar de operar por hoy inmediatamente", "Cambiar a otros pares más volatiles"], correctIndex: 2, explanation: "Al alcanzar un 4% de drawdown diario, debes parar de operar inmediatamente. El drawdown máximo diario es 5%, y necesitas proteger ese margen." },
            { question: "Cuales son los mejores pares para un challenge?", options: ["Pares exoticos por su volatilidad", "EUR/USD y GBP/USD por sus spreads bajos y movimiento técnico", "Solo criptomonedas", "Cualquier par es igual de bueno"], correctIndex: 1, explanation: "EUR/USD y GBP/USD son los mejores para challenges por sus spreads bajos, alta liquidez y movimientos tecnicos predecibles." },
            { question: "Si ya tienes un 9% de profit en la semana 3, que debes hacer?", options: ["Ser agresivo para llegar al 15%", "Reducir riesgo a 0.5% y cerrar el último 1% con paciencia", "Dejar de operar y esperar", "Aumentar el tamano de posición al 3%"], correctIndex: 1, explanation: "Con 9% de profit solo necesitas 1% más. Reduce el riesgo al mínimo (0.5%) y busca 1-2 buenos trades para cerrar. No arriesgues lo que ya ganaste." }
          ],
          practicalExercise: "Abre una cuenta demo con las mismas reglas de un challenge (100K de balance, 5% drawdown diario, 10% drawdown total). Opera durante 2 semanas siguiendo el plan de las semanas 1 y 2 al pie de la letra. Lleva un diario de cada trade con: par, riesgo %, R:R, resultado, y como te sentiste. Si no puedes pasar la demo, no pagues un challenge real."
        },
        {
          id: "5-1-3",
          title: "De funded a vivir del trading",
          duration: "35 min",
          content: `
<h2>Has Pasado el Challenge... Y Ahora Que?</h2>
<div class="analogy-box">
<h3>El Challenge es el Examen de Conducir</h3>
<p>Pasar el challenge es como sacar el carnet de conducir. Felicidades, pero ahora empieza lo real: conducir en la calle con trafico real, lluvia y situaciones impredecibles. La cuenta fondeada es donde se demuestra si realmente eres un trader consistente.</p>
</div>

<h3>Gestion de la Cuenta Fondeada a Largo Plazo</h3>
<div class="highlight-box green">
<h4>Los 5 Mandamientos de la Cuenta Fondeada</h4>
<ol>
<li><strong>Protege el drawdown PRIMERO:</strong> Tu prioridad #1 es NO perder la cuenta. El profit viene segundo.</li>
<li><strong>Opera igual que en el challenge:</strong> La misma estrategia, el mismo riesgo, los mismos pares. No cambies nada.</li>
<li><strong>Riesgo máximo 0.5-1% por trade:</strong> Si, incluso con la cuenta fondeada. La consistencia es todo.</li>
<li><strong>Retira ganancias regularmente:</strong> No dejes que el profit se acumule sin retirar. Retira cada 2 semanas o mensualmente.</li>
<li><strong>Ten un plan B:</strong> Siempre ten capital para comprar otro challenge si pierdes la cuenta.</li>
</ol>
</div>

<h3>Estrategia de Scaling: Multiples Cuentas</h3>
<p>Aqui es donde el modelo de prop firms se vuelve realmente poderoso. En vez de operar una sola cuenta de 100K, puedes tener MULTIPLES cuentas:</p>
<div class="grid-cards">
<div class="card"><h4>Nivel 1: Una Cuenta</h4><p>100K fondeada. Ganancia mensual 3-5% = 3,000-5,000$. Tu profit (80%) = 2,400-4,000$/mes.</p></div>
<div class="card"><h4>Nivel 2: Dos Cuentas</h4><p>2 x 100K = 200K total. Mismos trades, doble ganancia. 4,800-8,000$/mes para ti.</p></div>
<div class="card"><h4>Nivel 3: Tres+ Cuentas</h4><p>3 x 100K o 2 x 200K. Ganancia potencial: 7,200-16,000$/mes. Algunos traders tienen 5-10 cuentas.</p></div>
</div>

<div class="warning-box">
<h4>Importante sobre Multiples Cuentas</h4>
<ul>
<li>Cada prop firm tiene limites de cuantas cuentas puedes tener simultaneamente</li>
<li>Puedes diversificar entre DIFERENTES prop firms</li>
<li>Usa un trade copier para ejecutar la misma operación en todas las cuentas simultaneamente</li>
<li>Las reglas pueden variar entre cuentas — ten un checklist para cada una</li>
</ul>
</div>

<h3>Estrategias de Retiro</h3>
<div class="highlight-box blue">
<h4>Plan de Retiro Inteligente</h4>
<ul>
<li><strong>Retira el 60-70% de las ganancias:</strong> Deja un 30-40% como colchon en la cuenta</li>
<li><strong>Frecuencia:</strong> Cada 2 semanas o mensual (segun las reglas de tu firm)</li>
<li><strong>Fondo de emergencia para challenges:</strong> Siempre ten 2-3 tarifas de challenge ahorradas</li>
<li><strong>Metodo de retiro:</strong> La mayoria de firms pagan por transferencia bancaria, crypto (USDT), o Payoneer</li>
</ul>
</div>

<h3>Consideraciones Fiscales</h3>
<div class="highlight-box blue">
<h4>Impuestos del Trading Fondeado</h4>
<ul>
<li><strong>Las ganancias de prop firms son INGRESOS GRAVABLES</strong> en la mayoria de paises</li>
<li><strong>España:</strong> Se declaran como rendimientos de actividades economicas o ganancias patrimoniales. Consulta con un asesor fiscal.</li>
<li><strong>Latinoamerica:</strong> Varia por pais. En muchos, los ingresos del exterior tributan. Investiga tu legislacion local.</li>
<li><strong>Registro de actividad:</strong> Guarda TODOS los registros de retiros, operaciones y pagos. El broker y la prop firm emiten reportes.</li>
<li><strong>Autonomo/freelancer:</strong> En algunos paises conviene darse de alta como autonomo o crear una empresa para optimizar impuestos.</li>
</ul>
</div>

<h3>Construyendo una Carrera en Trading Fondeado</h3>
<div class="grid-cards">
<div class="card"><h4>Mes 1-3: Estabilizar</h4><p>Una cuenta fondeada. Objetivo: ser consistente y hacer 2-3 retiros exitosos. No te emociones.</p></div>
<div class="card"><h4>Mes 3-6: Escalar</h4><p>Anadir segunda cuenta. Implementar trade copier. Objetivo: duplicar ingresos manteniendo la consistencia.</p></div>
<div class="card"><h4>Mes 6-12: Profesionalizar</h4><p>3+ cuentas. Rutina profesional. Track record documentado. Considerar crear contenido o mentoria.</p></div>
<div class="card"><h4>Ano 2+: Diversificar</h4><p>Cuenta propia con capital acumulado. Diversificar fuentes de ingreso. Posible transicion a fondo propio.</p></div>
</div>

<h3>Errores Comunes Despues de Ser Fondeado</h3>
<div class="warning-box">
<h4>Los 7 Errores que Matan Cuentas Fondeadas</h4>
<ol>
<li><strong>Sobreoperar:</strong> "Ya estoy fondeado, puedo tomar más riesgos" — NO. Mismo plan que en el challenge.</li>
<li><strong>Revenge trading:</strong> Perder un dia y querer recuperar inmediatamente. Es la causa #1 de perder cuentas.</li>
<li><strong>Ignorar el drawdown:</strong> Estar al 7-8% de drawdown y seguir operando agresivamente.</li>
<li><strong>Cambiar de estrategia:</strong> "Voy a probar algo nuevo con la cuenta fondeada" — Usa SOLO lo que funciono en el challenge.</li>
<li><strong>No retirar ganancias:</strong> Acumular 15% de profit sin retirar y luego perderlo todo en una mala racha.</li>
<li><strong>Trading emocional post-retiro:</strong> Despues de retirar ganancias, sentir que "necesitas" recuperar lo que retiraste.</li>
<li><strong>No tener backup:</strong> Perder la única cuenta fondeada y no tener dinero para otro challenge.</li>
</ol>
</div>

<div class="highlight-box green">
<h4>La Mentalidad del Trader Fondeado Exitoso</h4>
<p>Trata cada dia como si fuera el primer dia del challenge. La misma disciplina, el mismo riesgo, el mismo plan. Los traders que pierden cuentas fondeadas son los que relajan la disciplina despues de pasar el challenge. Los que las MANTIENEN y ESCALAN son los que operan cada dia como profesionales, sin importar cuantas cuentas tengan.</p>
</div>`,
          keyPoints: [
            "Despues de pasar el challenge, opera EXACTAMENTE igual — misma estrategia, mismo riesgo, misma disciplina",
            "Escala con multiples cuentas: 2-3 cuentas de 100K con trade copier pueden generar 5,000-12,000$/mes",
            "Retira 60-70% de ganancias cada 2 semanas y deja 30-40% como colchon en la cuenta",
            "Las ganancias de prop firms son gravables — consulta un asesor fiscal en tu pais",
            "Error #1: relajar la disciplina despues de ser fondeado — trata cada dia como el primer dia del challenge",
            "Siempre ten reservas para 2-3 challenges por si pierdes una cuenta"
          ],
          quiz: [
            { question: "Cual es la prioridad #1 al operar una cuenta fondeada?", options: ["Maximizar el profit lo más rápido posible", "Proteger el drawdown y no perder la cuenta", "Hacer muchas operaciones al dia", "Probar nuevas estrategias"], correctIndex: 1, explanation: "La prioridad número 1 es proteger el drawdown y no perder la cuenta. El profit es secundario — una cuenta viva genera ganancias mes a mes." },
            { question: "Como funciona el scaling con multiples cuentas?", options: ["Operas estrategias diferentes en cada cuenta", "Usas un trade copier para ejecutar el mismo trade en todas las cuentas simultaneamente", "Solo puedes tener una cuenta a la vez", "Necesitas aprobar un examen especial"], correctIndex: 1, explanation: "Con un trade copier, ejecutas la misma operación en todas tus cuentas simultaneamente. Mismos trades, multiples cuentas = multiples ganancias." },
            { question: "Que porcentaje de ganancias deberias retirar regularmente?", options: ["100% siempre", "60-70%, dejando 30-40% como colchon", "Nunca retirar, dejar todo en la cuenta", "Solo 10%"], correctIndex: 1, explanation: "Retira el 60-70% de tus ganancias y deja un 30-40% como colchon en la cuenta. Esto protege contra drawdowns futuros y asegura que cobras por tu trabajo." },
            { question: "Cual es el error más comun despues de ser fondeado?", options: ["Operar muy poco", "Relajar la disciplina y tomar más riesgos de los necesarios", "Retirar demasiado rápido", "Cambiar de broker"], correctIndex: 1, explanation: "El error más comun es relajar la disciplina: sobreoperar, aumentar el riesgo, o hacer revenge trading. Los traders exitosos operan igual que en el challenge." }
          ],
          practicalExercise: "Crea tu 'Plan de Trader Fondeado' en un documento: 1) Cuantas cuentas quieres tener en 6 meses. 2) Tu riesgo por trade y reglas de drawdown. 3) Plan de retiro (frecuencia, porcentaje). 4) Presupuesto para challenges (cuanto destinas al mes). 5) Que haras si pierdes tu primera cuenta fondeada. 6) Tu horario diario de trading. Este documento sera tu guia cuando estes fondeado."
        }
      ]
    },
    {
      id: "mod-5-2",
      title: "Impuestos y Fiscalidad del Trading",
      description: "Lo que NADIE te enseña pero que NECESITAS saber",
      icon: "📋",
      color: "#EF4444",
      lessons: [
        {
          id: "5-2-1",
          title: "Fiscalidad del Trading: Impuestos que Debes Pagar",
          duration: "25 min",
          content: `
<h2>Impuestos del Trading: La Realidad que Nadie Ensena</h2>
<div class="warning-box"><h4>IMPORTANTE</h4><p>Esto NO es asesoramiento fiscal. Consulta SIEMPRE con un asesor fiscal profesional de tu pais. Las leyes cambian constantemente. Esta lección es informativa para que sepas que temas consultar.</p></div>
<h3>Principio General: Las Ganancias de Trading TRIBUTAN</h3>
<p>En la mayoria de paises, las ganancias del trading se consideran <strong>ganancias de capital</strong> o <strong>rentas del ahorro</strong> y deben declararse y pagar impuestos.</p>
<h3>España: Como se Tributa</h3>
<div class="vocab-card"><h4>Base del Ahorro (IRPF)</h4>
<ul>
<li>Primeros 6,000 euros de ganancia: <strong>19%</strong></li>
<li>De 6,000 a 50,000 euros: <strong>21%</strong></li>
<li>De 50,000 a 200,000 euros: <strong>23%</strong></li>
<li>De 200,000 a 300,000 euros: <strong>27%</strong></li>
<li>Mas de 300,000 euros: <strong>28%</strong></li>
</ul>
<p>Las perdidas se pueden compensar con ganancias del mismo año y los 4 siguientes.</p></div>
<h3>Latinoamerica (Resumen)</h3>
<div class="grid-cards">
<div class="card"><h4>Mexico</h4><p>ISR sobre ganancias financieras. 10% sobre ganancias en bolsa de valores. Trading Forex puede variar.</p></div>
<div class="card"><h4>Colombia</h4><p>Ganancias ocasionales tributan. Renta variable sujeta a impuestos. Consultar con contador.</p></div>
<div class="card"><h4>Argentina</h4><p>Impuesto a las ganancias sobre operaciones financieras. Regulaciones cambiantes por restricciones cambiarias.</p></div>
<div class="card"><h4>Chile</h4><p>Impuesto a la renta sobre ganancias de capital. Tributacion al momento de la venta.</p></div>
</div>
<h3>Cuentas Fondeadas: Caso Especial</h3>
<div class="highlight-box blue"><h4>Ganancias de Prop Firms</h4>
<p>Las ganancias de cuentas fondeadas se consideran generalmente como <strong>ingresos de actividad economica</strong> o <strong>ganancias patrimoniales</strong> dependiendo del pais y la estructura.</p>
<p>Al no ser tu capital, algunos paises los tratan como ingresos por servicios (como un freelancer), no como ganancias de capital.</p>
<p><strong>Consulta con un asesor fiscal especializado en trading.</strong></p></div>
<h3>Consejos Practicos</h3>
<div class="strategy-box"><h4>Lo que Debes Hacer</h4><ol>
<li>Lleva un <strong>registro de TODAS tus operaciones</strong> (el diario de trading sirve)</li>
<li>Guarda los <strong>informes del broker</strong> (statement mensual/anual)</li>
<li>Separa un <strong>25-30% de tus ganancias</strong> para impuestos desde el primer dia</li>
<li>Busca un <strong>asesor fiscal especializado en trading</strong> ANTES de ganar mucho</li>
<li>Considera crear una <strong>empresa/sociedad</strong> si tus ganancias son altas (puede tener ventajas fiscales)</li>
<li>NUNCA intentes evadir impuestos - las consecuencias son peores que pagarlos</li>
</ol></div>`,
          keyPoints: [
            "Las ganancias de trading SIEMPRE deben declararse y tributar",
            "España: 19-28% dependiendo del tramo de ganancias",
            "Cuentas fondeadas pueden tributar diferente (consultar asesor)",
            "Separa 25-30% de tus ganancias para impuestos desde el dia 1",
            "Lleva registro de TODAS las operaciones y guarda statements del broker",
            "Busca asesor fiscal especializado en trading"
          ],
          quiz: [
            { question: "En España, que porcentaje de impuestos pagas sobre los primeros 6,000 euros de ganancias de trading?", options: ["10%", "19%", "25%", "30%"], correctIndex: 1, explanation: "Los primeros 6,000 euros de ganancias de capital en España tributan al 19% en la base del ahorro del IRPF." },
            { question: "Que porcentaje de tus ganancias deberias separar para impuestos?", options: ["5%", "10%", "25-30%", "50%"], correctIndex: 2, explanation: "Separar 25-30% desde el primer dia asegura que tendras cubierta la factura fiscal sin sorpresas." },
            { question: "Que documentos necesitas guardar para la declaracion fiscal?", options: ["Solo el balance final", "Registros de todas las operaciones + statements del broker", "Nada, el broker lo reporta automáticamente", "Solo las operaciones ganadoras"], correctIndex: 1, explanation: "Necesitas registros completos de todas las operaciones (ganadoras y perdedoras) más los informes oficiales del broker." }
          ]
        },
        {
          id: "5-2-2",
          title: "Comparativa de Prop Firms: Cual Elegir",
          duration: "25 min",
          content: `
<h2>Guia Comparativa de las Mejores Prop Firms</h2>
<p>No todas las prop firms son iguales. Cada una tiene reglas, precios y condiciones diferentes. Aqui tienes una comparativa detallada para elegir la mejor para ti.</p>
<h3>Criterios de Evaluacion</h3>
<div class="grid-cards">
<div class="card"><h4>Precio del Challenge</h4><p>Cuanto pagas por intentar la evaluación. Varia de 100 a 1000+ segun el tamano de cuenta.</p></div>
<div class="card"><h4>Reglas de Drawdown</h4><p>Maximo diario (4-5%) y total (8-12%). Algunas usan drawdown estatico, otras trailing.</p></div>
<div class="card"><h4>Profit Target</h4><p>Cuanto necesitas ganar: Fase 1 (8-10%), Fase 2 (5%). Algunas tienen 1 sola fase.</p></div>
<div class="card"><h4>Profit Split</h4><p>Cuanto te quedas: 70-90% segun la firma. Algunas escalan hasta 90% con buen rendimiento.</p></div>
</div>
<h3>Comparativa Detallada</h3>
<div class="comparison-table">
<div class="comparison-col">
<h4>FTMO</h4>
<ul>
<li>Challenge 100K: ~500 euros</li>
<li>2 fases: 10% + 5%</li>
<li>DD Diario: 5% | Total: 10%</li>
<li>Split: 80% (hasta 90%)</li>
<li>Periodo: 30 + 60 dias</li>
<li>Pago: 1-2 dias laborables</li>
<li><strong>Pro:</strong> La más respetada, buena reputacion</li>
<li><strong>Con:</strong> Reglas estrictas, precio medio-alto</li>
</ul></div>
<div class="comparison-col">
<h4>Funded Next</h4>
<ul>
<li>Challenge 100K: ~300-500 euros</li>
<li>1 o 2 fases disponibles</li>
<li>DD Diario: 5% | Total: 10%</li>
<li>Split: 80% (hasta 90%)</li>
<li>Periodo: ilimitado</li>
<li>Pago: 3-5 dias</li>
<li><strong>Pro:</strong> Precio competitivo, sin limite de tiempo</li>
<li><strong>Con:</strong> Menos historia que FTMO</li>
</ul></div>
</div>
<h3>Que Prop Firm Elegir Segun tu Perfil</h3>
<div class="strategy-box"><h4>Recomendaciones</h4>
<ul>
<li><strong>Principiante (primer challenge):</strong> Empieza con cuenta de 10K-25K. Precio bajo, menos presion. Funded Next o similar.</li>
<li><strong>Intermedio (ya pasaste algun challenge):</strong> Sube a 50K-100K. FTMO o The Funded Trader.</li>
<li><strong>Avanzado (quieres escalar):</strong> Multiples cuentas de 100K-200K con trade copier.</li>
</ul></div>
<div class="warning-box"><h4>CUIDADO con Prop Firms Nuevas</h4>
<p>Aparecen nuevas prop firms cada semana. Algunas desaparecen con tu dinero. Antes de pagar:</p>
<ul>
<li>Busca reviews en TrustPilot (mínimo 4 estrellas, 100+ reviews)</li>
<li>Verifica que paguen retiros (busca pruebas de pago en redes)</li>
<li>Revisa cuanto tiempo llevan operando (mínimo 1 año)</li>
<li>Evita las que tienen ofertas "demasiado buenas para ser verdad"</li>
</ul></div>`,
          keyPoints: [
            "FTMO es la más respetada pero no la más barata",
            "Empieza con cuentas pequenas (10K-25K) para tu primer challenge",
            "Verifica reviews en TrustPilot y pruebas de pago antes de comprar",
            "El profit split típico es 80%, algunas escalan hasta 90%",
            "Evita prop firms nuevas sin historial verificable"
          ],
          quiz: [
            { question: "Que tamano de cuenta recomiendas para un primer challenge?", options: ["200K - ir a lo grande", "10K-25K - menos presion, menos riesgo financiero", "500K - maximizar ganancias", "No importa el tamano"], correctIndex: 1, explanation: "Para tu primer challenge, una cuenta de 10K-25K tiene un costo bajo (50-150 euros) y te permite aprender el proceso sin presion financiera excesiva." },
            { question: "Que deberias verificar ANTES de pagar un challenge de una prop firm?", options: ["Solo el precio", "Reviews en TrustPilot, pruebas de pago reales, y cuanto tiempo llevan operando", "Nada, todas son iguales", "Solo si tienen Instagram"], correctIndex: 1, explanation: "Muchas prop firms nuevas desaparecen con tu dinero. Verifica reviews reales, pruebas de pago, y que lleven al menos 1 año operando." }
          ]
        },
        {
          id: "5-2-3",
          title: "Psicologia del Challenge: Como No Autodestruirte",
          duration: "20 min",
          content: `
<h2>La Psicologia del Challenge: Tu Mayor Enemigo Eres Tu</h2>
<div class="analogy-box"><h3>El Examen de Conducir</h3><p>Recuerdas tu examen de conducir? Sabias conducir, pero los nervios te hacian cometer errores que normalmente no cometirias. El challenge de una prop firm es EXACTAMENTE igual. Tu estrategia funciona en demo, pero la presion del challenge te sabotea.</p></div>
<h3>Los 5 Momentos Criticos del Challenge</h3>
<div class="psychology-card fear"><h4>1. El Primer Trade</h4><p>Nervios extremos. Tendencia a no entrar o entrar con tamano muy pequeno por miedo.</p>
<p><strong>Solucion:</strong> Tu primer trade del challenge deberia ser IDENTICO a tus trades de demo. Mismo riesgo (0.5-1%), mismo setup. No es "especial" - es uno más.</p></div>
<div class="psychology-card greed"><h4>2. Llevas +3% Rapido</h4><p>Sensacion de invencibilidad. Tendencia a aumentar riesgo o sobreoperar. "Si sigo así, paso en una semana!"</p>
<p><strong>Solucion:</strong> Mantener EXACTAMENTE el mismo riesgo. Incluso considerar reducir a 0.5%. Las ganancias ya estan ahi, protegelas.</p></div>
<div class="psychology-card revenge"><h4>3. Primera Racha Perdedora (-2%)</h4><p>Panico. "Estoy perdiendo el challenge!" Tendencia a revenge trading o quitar SL.</p>
<p><strong>Solucion:</strong> -2% es NORMAL. Tienes 8% de margen hasta el drawdown total. PARA 1 dia, respira, y vuelve con calma.</p></div>
<div class="psychology-card fomo"><h4>4. Ultimos Dias y Te Falta 2%</h4><p>Desesperacion. Tendencia a aumentar riesgo dramaticamente. "Necesito una operación grande!"</p>
<p><strong>Solucion:</strong> NUNCA aumentes riesgo al final. Es MEJOR no pasar y comprar otro challenge que violar el drawdown. Mantener disciplina.</p></div>
<div class="psychology-card hope"><h4>5. Estas a 0.5% del Objetivo</h4><p>Ansiedad extrema. Cada pip cuenta. Tendencia a cerrar trades ganadores demasiado pronto.</p>
<p><strong>Solucion:</strong> Trata este trade como cualquier otro. Pon TP normal. Si llega, genial. Si no, habra más oportunidades.</p></div>
<h3>El Mantra del Challenge</h3>
<div class="highlight-box green"><h4>Repite esto antes de cada sesion de trading en el challenge:</h4>
<p>"No estoy intentando pasar un challenge. Estoy ejecutando mi plan de trading. El resultado es una consecuencia del proceso. Mi único objetivo es seguir mis reglas, trade por trade."</p></div>
<div class="highlight-box blue"><h4>La Estadistica Clave</h4>
<p>Solo el 10-15% de los traders pasan su primer challenge. PERO, de los que eventualmente pasan, el 80% lo hicieron en su segundo o tercer intento. Fallar el primero es NORMAL y parte del aprendizaje. No te rindas.</p></div>`,
          keyPoints: [
            "La presion del challenge te hace cometer errores que no cometirias en demo",
            "5 momentos criticos: primer trade, racha positiva, racha negativa, ultimos dias, cerca del objetivo",
            "NUNCA aumentes riesgo durante el challenge, especialmente al final",
            "Solo 10-15% pasa el primer challenge - fallar es normal, no te rindas",
            "Enfocate en el PROCESO (seguir tu plan) no en el RESULTADO (pasar el challenge)"
          ],
          quiz: [
            { question: "Llevas +4% en tu challenge y quedan 2 semanas. Que haces?", options: ["Aumentas riesgo para llegar rápido al 8%", "Mantienes o reduces el riesgo para proteger las ganancias", "Dejas de operar y esperas", "Cambias de estrategia"], correctIndex: 1, explanation: "Con +4%, lo inteligente es proteger lo ganado. Mantener 0.5% de riesgo o incluso reducir a 0.25%. Es mejor tardar más que arriesgar las ganancias." },
            { question: "Que porcentaje de traders pasa su PRIMER challenge?", options: ["50%", "30%", "10-15%", "90%"], correctIndex: 2, explanation: "Solo el 10-15% pasa el primer intento. Pero el 80% de los que eventualmente pasan lo logran en el 2do o 3er intento. Fallar es parte del proceso." },
            { question: "Cual deberia ser tu enfoque mental durante un challenge?", options: ["Ganar lo máximo posible lo más rápido posible", "Ejecutar tu plan de trading correctamente, trade por trade", "Intentar estrategias nuevas para encontrar la mejor", "Copiar a otros traders que ya pasaron"], correctIndex: 1, explanation: "Enfocate en el PROCESO: ejecutar tu plan correctamente. El resultado (pasar el challenge) es una consecuencia natural de un buen proceso repetido." }
          ]
        }
      ]
    },
    {
      id: "mod-5-3",
      title: "Trading Profesional con Cuentas Fondeadas",
      description: "Domina las reglas, evita errores fatales, escala tus cuentas y lleva un diario profesional",
      icon: "🏅",
      color: "#10B981",
      lessons: [
        {
          id: "5-3-1",
          title: "Reglas Específicas de Cada Prop Firm",
          duration: "25 min",
          content: `
<h2>Reglas Específicas de Cada Prop Firm: Guía Completa</h2>
<div class="analogy-box">
<h3>La Analogía del Contrato de Alquiler</h3>
<p>Cada prop firm es como un propietario de apartamentos: todos te dan un lugar para vivir (capital para operar), pero cada contrato tiene cláusulas distintas. Si no lees la letra pequeña, puedes perder tu depósito (tu cuenta fondeada) por una regla que ni sabías que existía. <strong>Conocer las reglas NO es opcional — es supervivencia.</strong></p>
</div>

<h3>Comparativa Detallada: Las 4 Grandes</h3>
<div class="comparison-table">
<div class="comparison-col">
<h4>FTMO</h4>
<ul>
<li><strong>Fases:</strong> 2 (Challenge + Verification)</li>
<li><strong>Profit Target:</strong> Fase 1: 10% | Fase 2: 5%</li>
<li><strong>DD Diario:</strong> 5% (balance o equity, el mayor)</li>
<li><strong>DD Total:</strong> 10% (desde balance inicial)</li>
<li><strong>Días mínimos:</strong> 4 días de trading por fase</li>
<li><strong>Tiempo límite:</strong> 30 días (F1) + 60 días (F2)</li>
<li><strong>Split:</strong> 80% → 90% tras primer retiro</li>
<li><strong>Noticias:</strong> Prohibido operar 2 min antes/después de noticias rojas</li>
<li><strong>Fin de semana:</strong> No se pueden mantener posiciones</li>
<li><strong>Scaling:</strong> +25% capital cada 4 meses con 10%+ profit</li>
</ul>
</div>
<div class="comparison-col">
<h4>MyFundedFX</h4>
<ul>
<li><strong>Fases:</strong> 1 o 2 (según plan elegido)</li>
<li><strong>Profit Target:</strong> 1 fase: 10% | 2 fases: 8% + 5%</li>
<li><strong>DD Diario:</strong> 5% (basado en balance)</li>
<li><strong>DD Total:</strong> 8-10% (según plan)</li>
<li><strong>Días mínimos:</strong> 5 días de trading</li>
<li><strong>Tiempo límite:</strong> Ilimitado</li>
<li><strong>Split:</strong> 80% estándar</li>
<li><strong>Noticias:</strong> Permitido operar noticias</li>
<li><strong>Fin de semana:</strong> Se permite mantener posiciones</li>
<li><strong>Scaling:</strong> Disponible tras rendimiento consistente</li>
</ul>
</div>
</div>

<div class="comparison-table">
<div class="comparison-col">
<h4>Funded Next</h4>
<ul>
<li><strong>Fases:</strong> 1 (Express) o 2 (Evaluation)</li>
<li><strong>Profit Target:</strong> Express: 25% | Eval: 10% + 5%</li>
<li><strong>DD Diario:</strong> 5%</li>
<li><strong>DD Total:</strong> 10%</li>
<li><strong>Días mínimos:</strong> 5 días (Evaluation)</li>
<li><strong>Tiempo límite:</strong> Ilimitado</li>
<li><strong>Split:</strong> 80% → hasta 90% con scaling</li>
<li><strong>Noticias:</strong> Permitido con restricciones</li>
<li><strong>Fin de semana:</strong> Depende del plan</li>
<li><strong>Scaling:</strong> Cada 15% profit → +40% capital</li>
</ul>
</div>
<div class="comparison-col">
<h4>The Funded Trader</h4>
<ul>
<li><strong>Fases:</strong> 2 (Standard) o 1 (Rapid)</li>
<li><strong>Profit Target:</strong> Standard: 8% + 5% | Rapid: 8%</li>
<li><strong>DD Diario:</strong> 5%</li>
<li><strong>DD Total:</strong> 10% (trailing en algunos planes)</li>
<li><strong>Días mínimos:</strong> 3-5 días según plan</li>
<li><strong>Tiempo límite:</strong> Ilimitado</li>
<li><strong>Split:</strong> 80% → hasta 90%</li>
<li><strong>Noticias:</strong> Restricciones en algunos planes</li>
<li><strong>Fin de semana:</strong> Varía según plan</li>
<li><strong>Scaling:</strong> Royal Challenge: scaling agresivo</li>
</ul>
</div>
</div>

<h3>Tipos de Drawdown: La Diferencia que Mata Cuentas</h3>
<div class="highlight-box red">
<h4>¡CUIDADO! No Todos los Drawdowns Son Iguales</h4>
<p>Esta es la diferencia más importante y la más ignorada. El tipo de drawdown determina cuánto margen real tienes para operar.</p>
</div>

<div class="grid-cards">
<div class="card">
<h4>Drawdown Estático (Static)</h4>
<p>Se calcula desde el <strong>balance inicial</strong>. Si empiezas con 100K y tienes DD total del 10%, tu cuenta se cierra si el equity baja de 90K. <strong>NO importa cuánto hayas ganado</strong>. Si ganas 5K (105K) y luego bajas a 89K, pierdes la cuenta.</p>
<p><strong>Ventaja:</strong> Sabes exactamente cuál es tu piso. Siempre es 90K.</p>
</div>
<div class="card">
<h4>Drawdown Trailing (Perseguidor)</h4>
<p>Se mueve CON tus ganancias. Si empiezas en 100K y ganas hasta 105K, tu nuevo piso sube a 95K (105K - 10%). <strong>El piso SUBE pero NUNCA baja.</strong></p>
<p><strong>Peligro:</strong> Si ganas mucho rápido, tu piso sube mucho y tienes menos margen para operar. ¡Puedes tener ganancias y aún así perder la cuenta!</p>
</div>
<div class="card">
<h4>Drawdown Balance-Based</h4>
<p>Se calcula al <strong>cierre de cada día</strong> basado en el balance (no equity flotante). Esto significa que las operaciones abiertas no cuentan para el drawdown diario hasta que se cierran.</p>
<p><strong>Ventaja:</strong> Más margen intradía. <strong>Peligro:</strong> Si cierras muchas pérdidas en un día, puedes violar el DD al cierre.</p>
</div>
</div>

<div class="example-box">
<h4>Ejemplo Práctico: Trailing vs Estático</h4>
<p><strong>Cuenta 100K con DD total 10%:</strong></p>
<p><strong>Estático:</strong> Ganas hasta 115K → tu piso sigue en 90K → tienes 25K de margen.</p>
<p><strong>Trailing:</strong> Ganas hasta 115K → tu piso sube a 105K → ¡solo tienes 10K de margen! Si bajas a 104K, pierdes la cuenta a pesar de tener +4K de profit.</p>
<p><strong>Lección:</strong> Con drawdown trailing, retira ganancias frecuentemente y opera con menos riesgo después de rachas ganadoras.</p>
</div>

<h3>Planes de Scaling: Cómo Crecer tu Capital</h3>
<div class="highlight-box green">
<h4>Scaling = Más Capital = Más Ganancias</h4>
<ul>
<li><strong>FTMO:</strong> +25% capital cada 4 meses si tienes +10% profit acumulado con mínimo 2 retiros</li>
<li><strong>Funded Next:</strong> +40% capital por cada 15% de profit. Rápido y agresivo.</li>
<li><strong>The Funded Trader:</strong> Scaling plan varía según tipo de challenge (Royal es el más generoso)</li>
<li><strong>MyFundedFX:</strong> Scaling tras demostrar consistencia durante varios meses</li>
</ul>
<p>El scaling es donde las cuentas fondeadas se vuelven realmente poderosas. Una cuenta de 100K puede convertirse en 400K en 12-18 meses con buen rendimiento.</p>
</div>

<h3>Frecuencia de Pagos y Métodos de Retiro</h3>
<div class="grid-cards">
<div class="card"><h4>FTMO</h4><p>Retiro cada 14 días. Métodos: transferencia bancaria, Skrill, criptomonedas. Procesamiento: 1-2 días hábiles. Primer retiro se puede hacer tras 14 días de cuenta fondeada.</p></div>
<div class="card"><h4>Funded Next</h4><p>Retiro cada 14 días (Express) o 30 días (Evaluation). Métodos: criptomonedas, Rise, transferencia. Procesamiento: 3-7 días hábiles.</p></div>
<div class="card"><h4>The Funded Trader</h4><p>Retiro según plan (14-30 días). Métodos: Rise, criptomonedas. Procesamiento: 3-5 días hábiles.</p></div>
<div class="card"><h4>MyFundedFX</h4><p>Retiro cada 14 días tras primer mes. Métodos: Rise, criptomonedas. Procesamiento: 2-5 días hábiles.</p></div>
</div>

<h3>Restricciones de Noticias y Fin de Semana</h3>
<div class="warning-box">
<h4>Reglas que Causan el 30% de las Eliminaciones</h4>
<ul>
<li><strong>Noticias rojas (NFP, CPI, FOMC, etc.):</strong> FTMO prohíbe abrir/cerrar trades 2 minutos antes y después. Otras firms son más permisivas pero con advertencias.</li>
<li><strong>Fin de semana:</strong> FTMO exige cerrar todas las posiciones antes del cierre del viernes. Funded Next varía según plan. Otras firms generalmente permiten mantener posiciones.</li>
<li><strong>Hedging/Cobertura:</strong> Algunas firms lo permiten, otras no. Verifica antes de usar esta técnica.</li>
<li><strong>EAs y Bots:</strong> La mayoría permite trading automatizado, pero algunas prohíben ciertos tipos de EAs (high-frequency, arbitraje, etc.).</li>
</ul>
</div>

<h3>Reglas de Consistencia</h3>
<div class="highlight-box purple">
<h4>La Regla que Pocos Conocen</h4>
<p>Algunas prop firms tienen una <strong>regla de consistencia</strong>: ningún día de trading puede representar más del 30-40% de tu profit total. Esto impide que pases el challenge con "un solo trade suertudo". Ejemplo: si necesitas 10K de profit, ningún día puede tener más de 3K-4K de ganancia.</p>
<p><strong>Solución:</strong> Opera de manera consistente todos los días. No intentes hacer el objetivo en una sola sesión aunque el mercado lo permita.</p>
</div>

<h3>¿Qué Firma para Qué Perfil de Trader?</h3>
<div class="strategy-box">
<h4>Elige Según tu Estilo</h4>
<ul>
<li><strong>Scalper agresivo:</strong> MyFundedFX o Funded Next (permiten noticias, más flexibles)</li>
<li><strong>Swing trader:</strong> Funded Next o The Funded Trader (sin límite de tiempo, permiten holding nocturno)</li>
<li><strong>Day trader conservador:</strong> FTMO (la más estricta pero más respetada, ideal si ya tienes disciplina)</li>
<li><strong>Principiante absoluto:</strong> Empieza con cuenta de 10K en MyFundedFX o Funded Next. Precio bajo, reglas más permisivas.</li>
<li><strong>Trader que quiere escalar rápido:</strong> Funded Next (scaling agresivo: +40% capital por cada 15% profit)</li>
</ul>
</div>`,
          keyPoints: [
            "Cada prop firm tiene reglas únicas — FTMO es la más estricta, MyFundedFX y Funded Next son más flexibles con noticias y fin de semana",
            "El drawdown trailing es mucho más peligroso que el estático: tu piso sube con las ganancias y reduce tu margen de maniobra",
            "Las restricciones de noticias y fin de semana causan el 30% de las eliminaciones — lee cada regla antes de operar",
            "Los planes de scaling permiten crecer de 100K a 400K en 12-18 meses con rendimiento consistente",
            "Elige la firma según tu estilo: scalpers necesitan flexibilidad, swing traders necesitan sin límite de tiempo, conservadores van a FTMO"
          ],
          quiz: [
            { question: "¿Cuál es la diferencia principal entre drawdown estático y trailing?", options: ["No hay diferencia, son lo mismo", "El estático se calcula desde el balance inicial y nunca cambia; el trailing sube con tus ganancias reduciendo tu margen", "El trailing te da más margen que el estático", "El estático se aplica solo al drawdown diario"], correctIndex: 1, explanation: "El drawdown estático tiene un piso fijo (ej: 90K en cuenta de 100K). El trailing sube con tus ganancias: si llegas a 115K, tu piso sube a 105K, dejándote solo 10K de margen en vez de 25K." },
            { question: "¿Qué prop firm es la más recomendable para un scalper que opera durante noticias?", options: ["FTMO, porque es la más reconocida", "MyFundedFX o Funded Next, porque permiten operar noticias", "Ninguna, los scalpers no deberían usar prop firms", "The Funded Trader exclusivamente"], correctIndex: 1, explanation: "FTMO prohíbe operar 2 minutos antes y después de noticias rojas. MyFundedFX y Funded Next son más flexibles con noticias, lo que las hace ideales para scalpers." },
            { question: "¿Qué es la regla de consistencia que tienen algunas prop firms?", options: ["Que debes operar todos los días sin excepción", "Que ningún día puede representar más del 30-40% de tu profit total", "Que debes usar siempre el mismo tamaño de lote", "Que solo puedes operar un par de divisas"], correctIndex: 1, explanation: "La regla de consistencia impide que pases el challenge con un solo trade suertudo. Ningún día de trading puede representar más del 30-40% del profit total del challenge." }
          ]
        },
        {
          id: "5-3-2",
          title: "Errores que Destruyen Cuentas Fondeadas",
          duration: "20 min",
          content: `
<h2>Los 10 Errores Fatales DESPUÉS de Conseguir una Cuenta Fondeada</h2>
<div class="analogy-box">
<h3>La Analogía del Atleta Profesional</h3>
<p>Muchos atletas firman un gran contrato y empiezan a comer mal, entrenar menos y salir de fiesta. ¿El resultado? Bajo rendimiento y contrato cancelado. Pasar el challenge es "firmar tu contrato" — pero los errores que cometes DESPUÉS determinan si mantienes tu carrera o la destruyes en semanas.</p>
</div>

<div class="warning-box">
<h4>Estadística Alarmante</h4>
<p>El <strong>60-70% de los traders que pasan un challenge pierden su cuenta fondeada en los primeros 3 meses</strong>. No porque no sepan tradear, sino porque cometen errores evitables después de ser fondeados.</p>
</div>

<h3>Error #1: Exceso de Confianza Post-Challenge</h3>
<div class="highlight-box red">
<h4>El Síndrome del "Ya Lo Logré"</h4>
<p>"Pasé el challenge, soy un crack. Ahora puedo arriesgar más." Este pensamiento ha destruido más cuentas fondeadas que cualquier mala estrategia.</p>
<p><strong>Lo que pasa:</strong> Después de la euforia de pasar, aumentas el riesgo de 0.5% a 1.5-2% por trade. Tienes una mala racha de 3 trades y estás en -6% de drawdown. Pánico.</p>
<p><strong>La solución:</strong> Opera la cuenta fondeada con MENOS riesgo que el challenge. Si pasaste con 1%, opera con 0.5-0.75%. El objetivo ahora es longevidad, no velocidad.</p>
</div>

<h3>Error #2: Aumentar el Riesgo por Trade</h3>
<div class="highlight-box red">
<h4>El Error de la Avaricia</h4>
<p>"Con 100K fondeados al 2% por trade puedo ganar 2,000$ por operación." Matemáticamente es correcto. Psicológicamente es un desastre.</p>
<p><strong>Lo que pasa:</strong> Con 2% de riesgo, solo necesitas 5 pérdidas seguidas para violar el drawdown total. Y 5 pérdidas seguidas NO son raras — ocurren regularmente.</p>
<p><strong>La solución:</strong> Máximo 0.5-1% por trade. Con 0.5%, necesitas 20 pérdidas seguidas para violar el DD total. Eso es casi imposible con una estrategia decente.</p>
</div>

<div class="calculation-box">
<h4>Cálculo de Supervivencia</h4>
<p><strong>Cuenta 100K, DD total 10% (10,000$):</strong></p>
<p>Con riesgo del 2%: solo 5 pérdidas seguidas = cuenta muerta</p>
<p>Con riesgo del 1%: necesitas 10 pérdidas seguidas = improbable</p>
<p>Con riesgo del 0.5%: necesitas 20 pérdidas seguidas = casi imposible</p>
<p><strong>¿Cuál prefieres?</strong> Ganar menos por trade pero mantener la cuenta VIVA por años.</p>
</div>

<h3>Error #3: Revenge Trading con Dinero Fondeado</h3>
<div class="highlight-box red">
<h4>El Asesino Silencioso</h4>
<p>Pierdes un trade. Te enojas. Abres otro inmediatamente para "recuperar". Pierdes otra vez. Abres otro con el doble de tamaño. Pierdes. En 2 horas has quemado el 5% de drawdown diario.</p>
<p><strong>Regla de oro:</strong> Después de 2 pérdidas consecutivas en un día, CIERRA la plataforma. No hay excepción. No hay "pero este setup es perfecto". CIERRA y vuelve mañana.</p>
</div>

<h3>Error #4: No Rastrear el Drawdown Diariamente</h3>
<div class="highlight-box red">
<h4>Operar a Ciegas</h4>
<p>Muchos traders no saben exactamente cuál es su drawdown actual. Operan sin verificar cuánto margen les queda. Un día simplemente reciben el correo: "Su cuenta ha sido cerrada por violación de drawdown."</p>
<p><strong>La solución:</strong> Cada mañana antes de operar, anota en tu diario:</p>
<ul>
<li>Balance actual de la cuenta</li>
<li>Drawdown máximo diario restante (cuánto puedes perder HOY)</li>
<li>Drawdown total restante (cuánto puedes perder EN TOTAL)</li>
<li>Si alguno está por debajo del 3%, reduce riesgo o no operes</li>
</ul>
</div>

<h3>Error #5: Operar Noticias sin Verificar las Reglas</h3>
<div class="warning-box">
<h4>"¿Por Qué Perdí Mi Cuenta Si Gané el Trade?"</h4>
<p>Esto pasa más de lo que crees. Un trader abre un trade 1 minuto antes del NFP. Gana 3,000$. Celebra. Al día siguiente: "Cuenta eliminada por violación de regla de noticias." Las ganancias no importan — la violación de reglas es automática.</p>
<p><strong>La solución:</strong> Ten un calendario económico abierto SIEMPRE. Marca las noticias rojas. Verifica las reglas específicas de tu firma. Cuando hay duda, NO operes.</p>
</div>

<h3>Error #6: Mantener Trades el Fin de Semana</h3>
<div class="highlight-box red">
<h4>El Gap del Lunes</h4>
<p>Dejas un trade abierto el viernes. El mercado abre el domingo/lunes con un gap en contra. Tu SL no se ejecuta al precio que tenías (slippage del gap). Violación de drawdown instantánea.</p>
<p><strong>Además:</strong> Muchas prop firms PROHÍBEN mantener posiciones el fin de semana. Incluso si tu firma lo permite, el riesgo de gap es demasiado alto.</p>
<p><strong>La solución:</strong> Cierra TODAS las posiciones antes del cierre del viernes. Sin excepciones.</p>
</div>

<h3>Error #7: No Retirar Ganancias</h3>
<div class="highlight-box red">
<h4>El Error del "Un Poco Más"</h4>
<p>Llevas +8% de profit. Piensas: "Si llego al 12% retiro todo junto." Tienes una mala racha y bajas al +2%. Ahora necesitas recuperar 6% para llegar donde estabas. No retiraste nada.</p>
<p><strong>La solución:</strong> Retira en cuanto sea posible. La mayoría de firms permiten retiro cada 14 días. Retira el 60-70% de las ganancias. El dinero en tu cuenta bancaria es TUYO. El dinero en la cuenta fondeada siempre está en riesgo.</p>
</div>

<h3>Error #8: Cambiar de Estrategia Después de Fondeado</h3>
<div class="highlight-box yellow">
<h4>"Voy a Probar Algo Nuevo"</h4>
<p>Pasaste el challenge con scalping en EUR/USD. Ahora quieres probar swing trading en oro. O trading de noticias. O un robot nuevo.</p>
<p><strong>La regla:</strong> Opera EXACTAMENTE la misma estrategia que te hizo pasar el challenge. Si quieres probar algo nuevo, hazlo en una cuenta demo. NUNCA experimentes con dinero fondeado.</p>
</div>

<h3>Error #9: No Tener un Plan de Contingencia</h3>
<div class="highlight-box yellow">
<h4>¿Qué Pasa Si Pierdes la Cuenta?</h4>
<p>Si tu único plan es "no perder la cuenta", no tienes plan. Perder cuentas fondeadas es NORMAL. Los mejores traders pierden 1-2 cuentas al año.</p>
<p><strong>El plan de contingencia:</strong></p>
<ul>
<li>Siempre ten ahorrado para 2-3 challenges nuevos</li>
<li>Si pierdes una cuenta, tómate 1-2 días de descanso mental</li>
<li>Analiza POR QUÉ perdiste antes de comprar otro challenge</li>
<li>No compres otro challenge inmediatamente por impulso emocional</li>
</ul>
</div>

<h3>Error #10: Trading Emocional Post-Retiro</h3>
<div class="highlight-box red">
<h4>El Ciclo Destructivo</h4>
<p>Retiras 3,000$ de ganancias. Tu balance baja de 108K a 105K. Tu cerebro interpreta esto como "pérdida" aunque acabas de cobrar. Sientes urgencia por "recuperar" ese balance. Aumentas riesgo. Pierdes más. Ciclo destructivo.</p>
<p><strong>La solución:</strong> Después de cada retiro, visualiza tu nuevo balance como tu "nuevo punto de partida". No intentes "recuperar" lo que retiraste. Esas ganancias ya son tuyas. Opera con el balance que tienes, no con el que tenías.</p>
</div>

<div class="strategy-box">
<h4>Checklist Diario del Trader Fondeado</h4>
<ol>
<li>✓ Verificar balance y drawdown restante (diario y total)</li>
<li>✓ Revisar calendario económico — marcar noticias rojas</li>
<li>✓ Confirmar que el riesgo por trade es 0.5-1% máximo</li>
<li>✓ Verificar si hay reglas especiales hoy (fin de semana, festivos)</li>
<li>✓ Revisar las reglas específicas de mi firma</li>
<li>✓ Preparar máximo 2-3 setups para el día</li>
<li>✓ Regla de 2 pérdidas: si pierdo 2 seguidas, cierro por hoy</li>
<li>✓ Anotar todo en el diario de trading</li>
</ol>
</div>`,
          keyPoints: [
            "El 60-70% de los traders pierden su cuenta fondeada en los primeros 3 meses por errores evitables, no por mala estrategia",
            "Exceso de confianza post-challenge es el error #1 — opera con MENOS riesgo que en el challenge, no más",
            "Después de 2 pérdidas consecutivas en un día, cierra la plataforma sin excepciones para evitar revenge trading",
            "Retira ganancias en cuanto sea posible — el dinero en tu banco es tuyo, el dinero en la cuenta fondeada siempre está en riesgo",
            "Usa un checklist diario: verificar drawdown, revisar calendario de noticias, confirmar riesgo y reglas antes de operar"
          ],
          quiz: [
            { question: "¿Qué porcentaje de traders pierden su cuenta fondeada en los primeros 3 meses?", options: ["10-20%", "30-40%", "60-70%", "90%"], correctIndex: 2, explanation: "El 60-70% pierden su cuenta fondeada en los primeros 3 meses. No por falta de habilidad, sino por errores de disciplina como exceso de confianza y revenge trading." },
            { question: "¿Qué debes hacer después de 2 pérdidas consecutivas en un día con cuenta fondeada?", options: ["Aumentar el tamaño para recuperar rápido", "Cambiar de par y seguir operando", "Cerrar la plataforma y volver mañana sin excepciones", "Poner el doble de riesgo en el siguiente trade"], correctIndex: 2, explanation: "La regla de 2 pérdidas es inquebrantable: después de 2 pérdidas seguidas, cierras la plataforma. El revenge trading es la causa #1 de destrucción de cuentas fondeadas." },
            { question: "¿Por qué es peligroso no retirar ganancias regularmente?", options: ["Porque los impuestos son menores si retiras todo junto", "Porque puedes perder todas las ganancias acumuladas en una mala racha y no cobrar nada", "Porque la prop firm te obliga a retirar", "No es peligroso, es mejor acumular"], correctIndex: 1, explanation: "Si acumulas +8% sin retirar y luego tienes una mala racha, puedes perder todo ese profit. El dinero en tu banco es seguro; el dinero en la cuenta fondeada siempre está en riesgo." }
          ]
        },
        {
          id: "5-3-3",
          title: "Escalar de 100K a 400K en Cuentas Fondeadas",
          duration: "25 min",
          content: `
<h2>Escalar de 100K a 400K: La Estrategia Multi-Cuenta</h2>
<div class="analogy-box">
<h3>La Analogía del Franquiciado</h3>
<p>Imagina que abres un restaurante exitoso. ¿Qué haces después? Abres otro. Y otro. Cada restaurante usa la misma receta, el mismo menú, el mismo sistema. Escalar cuentas fondeadas es exactamente igual: una vez que tienes un sistema que funciona, lo <strong>replicas</strong> en múltiples cuentas para multiplicar tus ingresos.</p>
</div>

<div style="display:flex;justify-content:center;margin:20px 0">
<svg width="460" height="160" viewBox="0 0 460 160" style="background:#131722;border-radius:12px;border:1px solid #2a2a40">
<text x="230" y="18" fill="white" font-size="11" text-anchor="middle" font-weight="bold">ESCALADO DE CUENTAS FONDEADAS</text>
<rect x="20" y="35" width="90" height="50" rx="8" fill="#26a69a20" stroke="#26a69a"/><text x="65" y="55" fill="#26a69a" font-size="9" text-anchor="middle" font-weight="bold">100K</text><text x="65" y="72" fill="#787b86" font-size="8" text-anchor="middle">3% = 2,400$</text>
<text x="125" y="65" fill="#555" font-size="14">→</text>
<rect x="140" y="30" width="90" height="55" rx="8" fill="#3b82f620" stroke="#3b82f6"/><text x="185" y="50" fill="#3b82f6" font-size="9" text-anchor="middle" font-weight="bold">2 x 100K</text><text x="185" y="67" fill="#787b86" font-size="8" text-anchor="middle">3% = 4,800$</text>
<text x="245" y="62" fill="#555" font-size="14">→</text>
<rect x="260" y="28" width="90" height="58" rx="8" fill="#8b5cf620" stroke="#8b5cf6"/><text x="305" y="48" fill="#8b5cf6" font-size="9" text-anchor="middle" font-weight="bold">3 x 100K</text><text x="305" y="65" fill="#787b86" font-size="8" text-anchor="middle">3% = 7,200$</text>
<text x="365" y="60" fill="#555" font-size="14">→</text>
<rect x="380" y="25" width="70" height="62" rx="8" fill="#f59e0b20" stroke="#f59e0b"/><text x="415" y="45" fill="#f59e0b" font-size="9" text-anchor="middle" font-weight="bold">400K</text><text x="415" y="62" fill="#f59e0b" font-size="8" text-anchor="middle">3% = 9,600$</text><text x="415" y="78" fill="#f59e0b" font-size="7" text-anchor="middle">/mes</text>
<text x="230" y="115" fill="#787b86" font-size="9" text-anchor="middle">Trade Copier: replica el MISMO trade en todas las cuentas</text>
<text x="230" y="135" fill="#26a69a" font-size="10" text-anchor="middle" font-weight="bold">Mismo esfuerzo, ingresos multiplicados x4</text>
</svg>
</div>

<h3>La Estrategia Multi-Cuenta</h3>
<div class="highlight-box green">
<h4>¿Por Qué Múltiples Cuentas?</h4>
<p>Con una sola cuenta de 100K al 0.5% de riesgo y un retorno mensual del 3-5%, ganas 2,400-4,000$/mes (después del split). Está bien, pero no es transformador. Con 3-4 cuentas ejecutando los <strong>mismos trades simultáneamente</strong>, multiplicas esos ingresos sin trabajo adicional.</p>
</div>

<div class="calculation-box">
<h4>Proyección de Ingresos por Número de Cuentas</h4>
<p><strong>Supuestos:</strong> Retorno mensual 4%, profit split 80%, misma estrategia en todas las cuentas</p>
<p><strong>1 cuenta de 100K:</strong> 4,000$ × 80% = <strong>3,200$/mes</strong></p>
<p><strong>2 cuentas de 100K:</strong> 8,000$ × 80% = <strong>6,400$/mes</strong></p>
<p><strong>3 cuentas de 100K:</strong> 12,000$ × 80% = <strong>9,600$/mes</strong></p>
<p><strong>4 cuentas de 100K:</strong> 16,000$ × 80% = <strong>12,800$/mes</strong></p>
<p><strong>2 cuentas de 200K:</strong> 16,000$ × 80% = <strong>12,800$/mes</strong></p>
<p>Con scaling de las propias firms (ej: FTMO +25% cada 4 meses), estos números crecen aún más con el tiempo.</p>
</div>

<h3>Trade Copiers: Cómo Funcionan</h3>
<div class="highlight-box blue">
<h4>Tu Herramienta de Escalado</h4>
<p>Un <strong>trade copier</strong> es un software que conecta múltiples cuentas de trading. Cuando abres un trade en tu cuenta principal (la "master"), el copier automáticamente abre el mismo trade en todas las cuentas conectadas (las "slave").</p>
</div>

<div class="grid-cards">
<div class="card">
<h4>¿Cómo Funciona?</h4>
<p>1) Instalas el copier en tu VPS (servidor virtual). 2) Conectas tu cuenta master. 3) Conectas las cuentas slave. 4) Configuras el tamaño de lote para cada cuenta. 5) Operas normalmente en la master — las slave copian todo automáticamente.</p>
</div>
<div class="card">
<h4>Copiers Populares</h4>
<p><strong>Duplikium:</strong> Basado en la nube, fácil de configurar, funciona con MT4/MT5. <strong>Social Trader Tools:</strong> Popular en la comunidad de prop trading. <strong>FX Blue:</strong> Gratuito con funciones básicas. <strong>Trade Copier MT4/MT5:</strong> Plugins directos para MetaTrader.</p>
</div>
<div class="card">
<h4>Configuración del Tamaño</h4>
<p>Si tu master es 100K con 0.5% de riesgo (0.5 lotes en EUR/USD), y tu slave también es 100K, el copier replica el mismo tamaño. Si la slave es 50K, configura el multiplicador a 0.5x para mantener el mismo porcentaje de riesgo.</p>
</div>
</div>

<div class="warning-box">
<h4>Precauciones con Trade Copiers</h4>
<ul>
<li><strong>Latencia:</strong> Puede haber 0.5-2 segundos de retraso entre la master y las slave. En scalping ultra-rápido esto puede afectar.</li>
<li><strong>Reglas diferentes:</strong> Si una cuenta es FTMO (sin noticias) y otra es MyFundedFX (con noticias), el copier no distingue. TÚ debes gestionar esto.</li>
<li><strong>VPS obligatorio:</strong> Necesitas un servidor virtual (VPS) que esté encendido 24/5 para que el copier funcione sin interrupciones. Costo: 10-30$/mes.</li>
<li><strong>Verificar reglas:</strong> Algunas firms prohíben trade copiers entre cuentas de la MISMA firma. Verifica antes de configurar.</li>
</ul>
</div>

<h3>Gestionar 2-4 Cuentas Simultáneamente</h3>
<div class="strategy-box">
<h4>El Sistema de Gestión Multi-Cuenta</h4>
<ol>
<li><strong>Diversifica entre firms:</strong> No pongas todas las cuentas en la misma prop firm. Si la firma tiene problemas, no pierdes todo. Ejemplo: 2 en FTMO + 1 en Funded Next + 1 en MyFundedFX.</li>
<li><strong>Un spreadsheet maestro:</strong> Crea una hoja de cálculo con el balance, drawdown, reglas específicas y fecha de retiro de CADA cuenta. Actualiza diariamente.</li>
<li><strong>Horarios de noticias centralizados:</strong> Si una cuenta prohíbe noticias, desconéctala del copier antes de eventos. Marca en tu calendario cuándo desconectar cada cuenta.</li>
<li><strong>Retiros escalonados:</strong> No retires de todas las cuentas el mismo día. Escálalo para tener flujo de caja constante (ej: cuenta A retira semana 1, cuenta B semana 3).</li>
</ol>
</div>

<h3>¿Cuándo Añadir una Nueva Cuenta?</h3>
<div class="highlight-box green">
<h4>El Momento Correcto para Escalar</h4>
<ul>
<li><strong>Requisito 1:</strong> Tu primera cuenta fondeada lleva mínimo 2-3 meses activa con retiros exitosos</li>
<li><strong>Requisito 2:</strong> Tu estrategia es consistentemente rentable (no rachas de suerte)</li>
<li><strong>Requisito 3:</strong> Tienes el capital para el challenge de la nueva cuenta SIN tocar tus ahorros de emergencia</li>
<li><strong>Requisito 4:</strong> Ya probaste el trade copier en demo y funciona correctamente</li>
<li><strong>Requisito 5:</strong> No estás agregando cuentas por avaricia sino por un plan de negocio estructurado</li>
</ul>
<p><strong>Señal de alerta:</strong> Si quieres otra cuenta porque la primera va mal y "necesitas más capital para recuperar", PARA. Eso no es escalar, es multiplicar el problema.</p>
</div>

<h3>Gestión de Riesgo Across Cuentas</h3>
<div class="highlight-box yellow">
<h4>El Riesgo Total Importa</h4>
<p>Con 4 cuentas de 100K y el mismo trade copiado, tu exposición real es de 400K en un solo trade. Si el mercado se mueve violentamente en tu contra, pierdes en TODAS las cuentas simultáneamente.</p>
<ul>
<li><strong>Riesgo por trade:</strong> Mantén 0.5% máximo por cuenta. Con 4 cuentas, tu riesgo total es 2,000$ por trade (0.5% × 4 × 100K). Es mucho pero manejable.</li>
<li><strong>Correlación:</strong> Si tienes un trade en EUR/USD y otro en GBP/USD, estás correlacionado. Un movimiento del dólar te afecta en ambos. Cuidado con la exposición total.</li>
<li><strong>Peor escenario:</strong> Calcula qué pasa si pierdes 3 trades seguidos en todas las cuentas. ¿Sigues dentro de los límites de drawdown de cada una?</li>
</ul>
</div>

<h3>Proyecciones de Ingresos a Diferentes Escalas</h3>
<div class="grid-cards">
<div class="card">
<h4>Nivel Principiante</h4>
<p><strong>1 cuenta de 50K</strong><br>Retorno mensual: 3%<br>Profit: 1,500$<br>Tu parte (80%): <strong>1,200$/mes</strong><br>Inversión: ~250$ (challenge)</p>
</div>
<div class="card">
<h4>Nivel Intermedio</h4>
<p><strong>2 cuentas de 100K</strong><br>Retorno mensual: 4%<br>Profit: 8,000$<br>Tu parte (80%): <strong>6,400$/mes</strong><br>Inversión: ~1,000$ (2 challenges)</p>
</div>
<div class="card">
<h4>Nivel Avanzado</h4>
<p><strong>4 cuentas de 100K</strong><br>Retorno mensual: 4%<br>Profit: 16,000$<br>Tu parte (80%): <strong>12,800$/mes</strong><br>Inversión: ~2,000$ (4 challenges)</p>
</div>
<div class="card">
<h4>Nivel Profesional</h4>
<p><strong>3 cuentas de 200K (con scaling)</strong><br>Retorno mensual: 3-5%<br>Profit: 18,000-30,000$<br>Tu parte (85%): <strong>15,300-25,500$/mes</strong><br>Inversión: tiempo + consistencia</p>
</div>
</div>

<h3>Construyendo un Negocio de Trading</h3>
<div class="strategy-box">
<h4>De Trader a Empresario del Trading</h4>
<ol>
<li><strong>Estructura legal:</strong> Cuando tus ingresos superen los 3,000-5,000$/mes, considera crear una empresa o sociedad para optimizar impuestos</li>
<li><strong>Gastos deducibles:</strong> VPS, plataformas de trading, cursos, herramientas de análisis, computadora — todo puede ser deducible si tienes empresa</li>
<li><strong>Separación de cuentas:</strong> Ten una cuenta bancaria exclusiva para el trading. Ingresos de prop firms van ahí. Págate un "salario" mensual fijo.</li>
<li><strong>Reinversión:</strong> Destina el 20-30% de tus ganancias a nuevos challenges, herramientas y educación continua</li>
<li><strong>Documentación:</strong> Lleva contabilidad profesional de todos los ingresos, gastos y retiros. Tu futuro yo te lo agradecerá.</li>
</ol>
</div>`,
          keyPoints: [
            "La estrategia multi-cuenta permite multiplicar ingresos usando trade copiers que replican el mismo trade en todas las cuentas simultáneamente",
            "Con 4 cuentas de 100K al 4% mensual y 80% split, puedes generar 12,800$/mes sin trabajo adicional respecto a una sola cuenta",
            "Diversifica entre diferentes prop firms para no depender de una sola — si una tiene problemas, las otras siguen generando",
            "No añadas una nueva cuenta hasta tener mínimo 2-3 meses de resultados consistentes y retiros exitosos en la primera",
            "Cuando superes 3,000-5,000$/mes, estructura tu trading como un negocio con empresa, cuenta bancaria separada y contabilidad profesional"
          ],
          quiz: [
            { question: "¿Qué es un trade copier y para qué sirve?", options: ["Un software para copiar trades de otros traders en redes sociales", "Un software que replica automáticamente tus trades de una cuenta master a múltiples cuentas slave", "Una herramienta para hacer backtesting automático", "Un robot de trading que opera solo"], correctIndex: 1, explanation: "Un trade copier conecta una cuenta master con múltiples cuentas slave. Cuando operas en la master, el mismo trade se ejecuta automáticamente en todas las slave, permitiéndote escalar sin trabajo extra." },
            { question: "¿Cuándo es el momento correcto para añadir una segunda cuenta fondeada?", options: ["Inmediatamente después de pasar el primer challenge", "Cuando la primera cuenta lleva 2-3 meses activa con retiros exitosos y resultados consistentes", "Cuando pierdes la primera cuenta y necesitas más capital", "Solo cuando tengas 1 año de experiencia"], correctIndex: 1, explanation: "Necesitas mínimo 2-3 meses de resultados consistentes y retiros exitosos. Escalar antes de tener una base sólida solo multiplica los problemas." },
            { question: "¿Por qué es importante diversificar entre diferentes prop firms?", options: ["Porque cada firma tiene mejores spreads que las otras", "Para obtener descuentos por volumen", "Porque si una firma tiene problemas o cierra, las otras cuentas siguen generando ingresos", "No es importante, mejor tener todas en la misma firma"], correctIndex: 2, explanation: "Si todas tus cuentas están en una sola firma y esa firma tiene problemas (técnicos, financieros, o de regulación), pierdes todo. Diversificar protege tu flujo de ingresos." }
          ]
        },
        {
          id: "5-3-4",
          title: "El Diario de Trading Profesional",
          duration: "20 min",
          content: `
<h2>El Diario de Trading Profesional: Tu Arma Secreta</h2>
<div class="analogy-box">
<h3>La Analogía del Médico</h3>
<p>Un médico no trata a los pacientes de memoria. Lleva un historial clínico detallado: síntomas, diagnóstico, tratamiento, resultado. Si un tratamiento no funciona, revisa el historial y ajusta. Tu diario de trading es tu <strong>historial clínico</strong>: cada trade es un paciente, y sin registro detallado, estás operando a ciegas.</p>
</div>

<h3>Diario Amateur vs Diario Profesional</h3>
<div class="comparison-table">
<div class="comparison-col">
<h4>Diario Amateur</h4>
<ul>
<li>"Compré EUR/USD, gané 50 pips"</li>
<li>Sin capturas de pantalla</li>
<li>Sin análisis de emociones</li>
<li>Sin revisión semanal/mensual</li>
<li>Olvida anotar las pérdidas</li>
<li>No registra el contexto del mercado</li>
<li>Lo llena "cuando tiene tiempo"</li>
</ul>
</div>
<div class="comparison-col">
<h4>Diario Profesional</h4>
<ul>
<li>Registra CADA campo relevante del trade</li>
<li>Capturas antes, durante y después</li>
<li>Análisis emocional honesto</li>
<li>Revisión semanal obligatoria</li>
<li>Registra TODAS las operaciones, ganadoras Y perdedoras</li>
<li>Contexto completo del mercado</li>
<li>Se llena INMEDIATAMENTE después de cada trade</li>
</ul>
</div>
</div>

<h3>Los Campos que DEBE Tener tu Diario</h3>
<div class="highlight-box blue">
<h4>Datos Básicos del Trade</h4>
<ul>
<li><strong>Fecha y hora:</strong> Cuándo abriste y cerraste la operación</li>
<li><strong>Par/Instrumento:</strong> EUR/USD, GBP/USD, XAUUSD, etc.</li>
<li><strong>Sesión:</strong> Asia, Londres, Nueva York, o solapamiento</li>
<li><strong>Dirección:</strong> Compra (long) o Venta (short)</li>
<li><strong>Tipo de setup:</strong> Rotura de estructura, rechazo de zona, continuación de tendencia, etc.</li>
</ul>
</div>

<div class="highlight-box green">
<h4>Análisis del Setup</h4>
<ul>
<li><strong>Confluencia (puntuación 1-5):</strong> ¿Cuántas confirmaciones tenía el trade? Estructura + zona de demanda + FVG + divergencia = 4/5</li>
<li><strong>Timeframe de análisis:</strong> En qué temporalidad identificaste el setup (H4, H1, M15, etc.)</li>
<li><strong>Timeframe de entrada:</strong> En qué temporalidad ejecutaste la entrada (M5, M1, etc.)</li>
<li><strong>Narrativa del mercado:</strong> ¿Cuál era la tendencia general? ¿Qué esperabas que hiciera el precio?</li>
</ul>
</div>

<div class="highlight-box yellow">
<h4>Ejecución y Gestión</h4>
<ul>
<li><strong>Precio de entrada:</strong> Exacto, con pip</li>
<li><strong>Stop Loss:</strong> Nivel y razón (debajo de estructura, debajo de zona, etc.)</li>
<li><strong>Take Profit:</strong> Nivel y razón (siguiente zona, extensión de Fibonacci, etc.)</li>
<li><strong>Risk:Reward (R:R):</strong> Calculado antes de entrar (ej: 1:2.5)</li>
<li><strong>Tamaño de posición:</strong> Lotes y porcentaje de riesgo de la cuenta</li>
<li><strong>¿Moviste el SL?</strong> Si lo moviste a break-even o lo ajustaste, anota cuándo y por qué</li>
</ul>
</div>

<div class="highlight-box purple">
<h4>Resultado y Reflexión</h4>
<ul>
<li><strong>Resultado:</strong> Ganancia o pérdida en $ y en R (ej: +2.3R, -1R)</li>
<li><strong>Capturas de pantalla:</strong> MÍNIMO 2: el setup antes de entrar + el resultado final</li>
<li><strong>Emociones durante el trade:</strong> Confiado, nervioso, ansioso, impaciente, neutral</li>
<li><strong>¿Seguí mi plan?</strong> Sí/No. Si no, ¿por qué no?</li>
<li><strong>Condiciones del mercado:</strong> Tendencia clara, rango, volátil, noticias pendientes</li>
<li><strong>Errores cometidos:</strong> Entré tarde, moví el SL, cerré antes del TP, etc.</li>
<li><strong>Lecciones aprendidas:</strong> ¿Qué haré diferente la próxima vez?</li>
</ul>
</div>

<h3>Plantilla de Revisión Semanal</h3>
<div class="strategy-box">
<h4>Cada Domingo: 30-60 Minutos de Revisión</h4>
<ol>
<li><strong>Estadísticas de la semana:</strong> Total de trades, win rate, R total ganado/perdido, mejor trade, peor trade</li>
<li><strong>¿Seguí mi plan?</strong> Porcentaje de trades donde seguí todas las reglas al pie de la letra</li>
<li><strong>Mejores setups:</strong> ¿Qué tipo de setup funcionó mejor esta semana?</li>
<li><strong>Peores setups:</strong> ¿Qué tipo de setup me hizo perder? ¿Debo eliminarlo de mi arsenal?</li>
<li><strong>Emociones predominantes:</strong> ¿Estuve calmado o ansioso? ¿Hubo revenge trading?</li>
<li><strong>Errores recurrentes:</strong> ¿Repetí algún error de la semana anterior?</li>
<li><strong>Ajustes para la próxima semana:</strong> UN aspecto concreto a mejorar (solo uno, no diez)</li>
<li><strong>Nota general de la semana (1-10):</strong> ¿Qué tan profesional fue mi trading esta semana?</li>
</ol>
</div>

<h3>Plantilla de Revisión Mensual</h3>
<div class="strategy-box">
<h4>Primer Domingo del Mes: Revisión Profunda</h4>
<ol>
<li><strong>Estadísticas del mes:</strong> Win rate, R total, drawdown máximo alcanzado, número de días operados</li>
<li><strong>Evolución vs mes anterior:</strong> ¿Mejoré o empeoré? ¿En qué métricas específicas?</li>
<li><strong>Top 3 mejores trades:</strong> ¿Qué tenían en común? ¿Puedo replicar esos elementos?</li>
<li><strong>Top 3 peores trades:</strong> ¿Qué tenían en común? ¿Cómo evito repetirlos?</li>
<li><strong>Análisis por sesión:</strong> ¿En qué sesión opero mejor? ¿Debería eliminar alguna sesión?</li>
<li><strong>Análisis por par:</strong> ¿En qué par tengo mejor win rate? ¿Debería enfocarme más?</li>
<li><strong>Análisis por tipo de setup:</strong> ¿Qué setups tienen mejor expectativa matemática?</li>
<li><strong>Estado emocional general:</strong> ¿El trading me está afectando negativamente? ¿Necesito un descanso?</li>
<li><strong>Objetivos para el próximo mes:</strong> Máximo 3 objetivos concretos y medibles</li>
</ol>
</div>

<h3>Cómo Identificar Patrones en tu Trading</h3>
<div class="highlight-box green">
<h4>El Poder de los Datos</h4>
<p>Después de 30-50 trades registrados correctamente, tu diario empieza a revelar patrones que no puedes ver en tiempo real:</p>
<ul>
<li><strong>Patrón de horario:</strong> "Mis trades ganadores ocurren entre 14:00-16:00 UTC. Mis perdedores ocurren después de las 18:00." → Solución: no operar después de las 18:00.</li>
<li><strong>Patrón de par:</strong> "Mi win rate en EUR/USD es 65% pero en GBP/JPY es 35%." → Solución: eliminar GBP/JPY de mi lista.</li>
<li><strong>Patrón emocional:</strong> "Cada vez que anoto 'ansioso' pierdo el trade. Cuando anoto 'neutral' gano el 70%." → Solución: si me siento ansioso, no entro al trade.</li>
<li><strong>Patrón de confluencia:</strong> "Trades con confluencia 4-5/5 ganan el 75%. Trades con confluencia 2-3/5 ganan solo el 40%." → Solución: solo tomar trades con confluencia mínima de 4/5.</li>
</ul>
</div>

<div class="example-box">
<h4>Ejemplo Real de Descubrimiento por Diario</h4>
<p>Un trader anotó durante 3 meses que sus trades del lunes tenían un win rate del 30%, mientras que de martes a jueves era del 65%. ¿La razón? Los lunes llegaba ansioso por la apertura semanal y tomaba trades impulsivos. Solución: no operar los lunes. Su rentabilidad mensual subió un 40% con ese solo cambio.</p>
</div>

<div class="grid-cards">
<div class="card">
<h4>Herramientas para el Diario</h4>
<p><strong>Excel/Google Sheets:</strong> Gratis, personalizable, bueno para análisis con fórmulas. <strong>Notion:</strong> Flexible, permite capturas y texto. <strong>TraderSync:</strong> Plataforma profesional con analytics automáticos. <strong>Edgewonk:</strong> El diario más completo para traders serios.</p>
</div>
<div class="card">
<h4>Cuánto Tiempo Dedicar</h4>
<p><strong>Por trade:</strong> 3-5 minutos inmediatamente después de cerrar la operación. <strong>Revisión semanal:</strong> 30-60 minutos cada domingo. <strong>Revisión mensual:</strong> 1-2 horas el primer domingo del mes. <strong>Total:</strong> ~2-3 horas/semana. Es la inversión con mejor retorno que harás como trader.</p>
</div>
</div>

<div class="warning-box">
<h4>Si No Llevas Diario, No Eres un Trader Profesional</h4>
<p>El 95% de los traders que no llevan diario pierden dinero a largo plazo. El 80% de los traders consistentemente rentables llevan un diario detallado. Esto no es coincidencia. El diario es lo que separa a los profesionales de los apostadores. <strong>Sin datos, no puedes mejorar. Sin mejora, no sobrevives.</strong></p>
</div>`,
          keyPoints: [
            "Un diario profesional registra cada campo del trade: fecha, par, sesión, setup, confluencia, entrada/SL/TP, R:R, resultado, capturas, emociones y lecciones",
            "La revisión semanal (30-60 min cada domingo) identifica patrones, errores recurrentes y un aspecto concreto a mejorar cada semana",
            "La revisión mensual analiza estadísticas por sesión, par y tipo de setup para optimizar tu estrategia con datos reales",
            "Después de 30-50 trades registrados, el diario revela patrones invisibles como horarios improductivos, pares poco rentables y disparadores emocionales",
            "El 80% de los traders consistentemente rentables llevan un diario detallado — sin datos no puedes mejorar, sin mejora no sobrevives"
          ],
          quiz: [
            { question: "¿Cuál es la diferencia principal entre un diario amateur y uno profesional?", options: ["El profesional usa software caro y el amateur usa papel", "El profesional registra cada campo relevante incluyendo emociones y capturas, se llena inmediatamente y tiene revisión semanal/mensual", "No hay diferencia real, cualquier anotación sirve", "El profesional solo registra las operaciones ganadoras"], correctIndex: 1, explanation: "El diario profesional es completo (todos los campos), inmediato (se llena justo después del trade), honesto (incluye emociones y errores) y tiene revisiones periódicas obligatorias." },
            { question: "¿Cada cuánto debes hacer una revisión semanal de tu diario de trading?", options: ["Solo cuando pierdes dinero", "Cada domingo, dedicando 30-60 minutos a analizar la semana", "Una vez al mes es suficiente", "Cada día después de operar"], correctIndex: 1, explanation: "La revisión semanal (30-60 minutos cada domingo) te permite identificar patrones, errores recurrentes y definir un aspecto concreto a mejorar para la próxima semana." },
            { question: "¿Cuántos trades necesitas registrar antes de que el diario empiece a revelar patrones útiles?", options: ["5-10 trades", "30-50 trades", "200-300 trades", "No necesitas registrar trades, solo resultados"], correctIndex: 1, explanation: "Después de 30-50 trades registrados correctamente, el diario empieza a revelar patrones de horario, par, emoción y confluencia que no puedes ver en tiempo real." }
          ]
        }
      ]
    }
  ]
};
