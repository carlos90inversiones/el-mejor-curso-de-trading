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

<h3>Que es una Proprietary Trading Firm (Prop Firm)?</h3>
<p>Una Prop Firm es una <strong>empresa que proporciona capital a traders</strong> para que operen en los mercados financieros. El trader no arriesga su propio dinero (mas alla de la tarifa del challenge). A cambio, la prop firm se queda con un porcentaje de las ganancias.</p>

<div class="highlight-box green">
<h4>Como Funciona el Modelo</h4>
<ol>
<li><strong>Paso 1:</strong> Pagas una tarifa de evaluacion (challenge) — entre 50$ y 1,000$ dependiendo del tamano de cuenta</li>
<li><strong>Paso 2:</strong> Pasas 1 o 2 fases de evaluacion demostrando que eres rentable y gestionas bien el riesgo</li>
<li><strong>Paso 3:</strong> Recibes una cuenta fondeada (10K, 25K, 50K, 100K, 200K o mas)</li>
<li><strong>Paso 4:</strong> Operas la cuenta y te quedas con el 70-90% de las ganancias</li>
</ol>
</div>

<h3>Profit Split: Como se Reparten las Ganancias</h3>
<div class="grid-cards">
<div class="card"><h4>Estandar: 80/20</h4><p>Tu te quedas con el 80% de las ganancias. La prop firm se queda con el 20%. Es lo mas comun en la industria.</p></div>
<div class="card"><h4>Premium: 90/10</h4><p>Algunas firms ofrecen 90% para el trader despues de cierto volumen o antiguedad. FTMO lo ofrece tras el primer retiro exitoso.</p></div>
<div class="card"><h4>Con Scaling: Hasta 100%</h4><p>Firms como Funded Next ofrecen hasta 90-95% con planes de escalado que aumentan tu capital y tu porcentaje.</p></div>
</div>

<h3>Las Principales Prop Firms del Mercado</h3>
<div class="grid-cards">
<div class="card"><h4>FTMO</h4><p>La mas reconocida del mundo. 2 fases de evaluacion. Profit split 80-90%. Cuenta desde 10K hasta 200K. Muy estricta pero muy profesional.</p></div>
<div class="card"><h4>Funded Next</h4><p>Crecimiento rapido. Modelo Express (1 fase) o Evaluation (2 fases). Hasta 95% profit split con scaling. Reembolso de tarifa tras primer retiro.</p></div>
<div class="card"><h4>The Funded Trader</h4><p>Multiples tipos de challenge. Royal, Knight, Dragon. Cuentas hasta 400K. Profit split hasta 90%. Buena atencion al cliente.</p></div>
<div class="card"><h4>MyForexFunds / True Forex Funds</h4><p>Opciones mas accesibles. Tarifas mas bajas. Ideales para empezar con cuentas pequenas y ganar experiencia en el mundo fondeado.</p></div>
</div>

<h3>1 Fase vs 2 Fases: Cual Elegir?</h3>
<div class="comparison-table">
<div class="comparison-col">
<h4>Challenge 1 Fase</h4>
<ul>
<li>Solo una evaluacion para pasar</li>
<li>Objetivo de profit mas alto (8-10%)</li>
<li>Mas rapido si lo pasas</li>
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
<li>Drawdown mas manejable</li>
<li>Ideal para principiantes en prop firms</li>
</ul>
</div>
</div>

<h3>Reglas Tipicas de Evaluacion</h3>
<div class="warning-box">
<h4>Reglas que DEBES Respetar</h4>
<ul>
<li><strong>Drawdown Maximo Diario:</strong> No puedes perder mas del 5% de la cuenta en UN DIA</li>
<li><strong>Drawdown Maximo Total:</strong> No puedes perder mas del 10% del balance inicial TOTAL</li>
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
            "Challenge 1 fase es mas rapido pero con mas presion; 2 fases es mas gradual y recomendable para empezar",
            "Reglas criticas: drawdown diario 5%, drawdown total 10%, dias minimos de trading",
            "Leer TODAS las reglas antes de empezar es obligatorio — una violacion elimina la cuenta sin importar el profit"
          ],
          quiz: [
            { question: "Que es una Prop Firm?", options: ["Un banco que da prestamos a traders", "Una empresa que proporciona capital a traders para operar a cambio de un porcentaje de ganancias", "Una plataforma de trading automatico", "Un fondo de inversion tradicional"], correctIndex: 1, explanation: "Una Prop Firm proporciona capital a traders. El trader demuestra su habilidad en un challenge y luego opera la cuenta fondeada, quedandose con el 70-90% de las ganancias." },
            { question: "Cual es el drawdown maximo diario tipico en un challenge?", options: ["2%", "5%", "10%", "15%"], correctIndex: 1, explanation: "La mayoria de prop firms establecen un drawdown maximo diario del 5%. Si pierdes mas que eso en un solo dia, fallas el challenge." },
            { question: "Cual es la ventaja principal de un challenge de 2 fases vs 1 fase?", options: ["Es mas barato", "Tiene menos presion por fase y drawdown mas manejable", "Te dan mas capital", "No tiene reglas de drawdown"], correctIndex: 1, explanation: "El challenge de 2 fases divide el objetivo en dos partes, lo que reduce la presion en cada fase individual y hace el drawdown mas manejable." },
            { question: "Que profit split es el mas comun en la industria?", options: ["50/50", "60/40", "80/20 (80% para el trader)", "100% para el trader"], correctIndex: 2, explanation: "El profit split estandar es 80/20 — el trader se queda con el 80% de las ganancias y la prop firm con el 20%." }
          ],
          practicalExercise: "Visita las paginas web de FTMO (ftmo.com) y Funded Next (fundednext.com). Compara: 1) Tarifas del challenge para una cuenta de 100K. 2) Reglas de drawdown. 3) Profit split. 4) Numero de fases. Crea una tabla comparativa y decide cual seria mejor para ti y por que."
        },
        {
          id: "5-1-2",
          title: "Estrategia para pasar challenges en 4 semanas",
          duration: "40 min",
          content: `
<h2>Plan de 4 Semanas para Pasar un Challenge</h2>
<div class="analogy-box">
<h3>Piensa como un Maratonista</h3>
<p>Un maratonista no sale corriendo al maximo desde el primer metro. Tiene un plan: empezar conservador, mantener el ritmo, y acelerar al final si las piernas responden. Pasar un challenge es un MARATON, no un sprint. Tu objetivo NO es hacerte rico en el challenge — es <strong>demostrar consistencia y gestion de riesgo.</strong></p>
</div>

<h3>La Configuracion Perfecta</h3>
<div class="highlight-box blue">
<h4>Parametros Base (Cuenta de 100K como ejemplo)</h4>
<ul>
<li><strong>Objetivo Fase 1:</strong> 10,000$ (10%)</li>
<li><strong>Drawdown Diario Max:</strong> 5,000$ (5%)</li>
<li><strong>Drawdown Total Max:</strong> 10,000$ (10%)</li>
<li><strong>Riesgo por Trade:</strong> 0.5% - 1% maximo (500$ - 1,000$)</li>
<li><strong>R:R Minimo:</strong> 1:2 (arriesgas 1 para ganar 2)</li>
<li><strong>Operaciones al Dia:</strong> 1-3 maximo</li>
</ul>
</div>

<h3>Plan Semana por Semana</h3>

<div class="highlight-box green">
<h4>SEMANA 1: Modo Ultra-Conservador (Objetivo: 2-3%)</h4>
<ul>
<li><strong>Riesgo por trade:</strong> 0.5% MAXIMO</li>
<li><strong>Objetivo semanal:</strong> 2,000$ - 3,000$ (2-3%)</li>
<li><strong>Pares a operar:</strong> Solo EUR/USD y GBP/USD (los mas liquidos, spreads bajos)</li>
<li><strong>Horario:</strong> Solo solapamiento London-NY (13:00-17:00 UTC)</li>
<li><strong>Maximo 2 trades al dia</strong></li>
<li><strong>Mentalidad:</strong> "Estoy conociendo la plataforma y adaptandome"</li>
</ul>
<p>La semana 1 es para adaptarte. No intentes hacer el 10% de una vez. Gana confianza con operaciones pequenas y consistentes.</p>
</div>

<div class="highlight-box green">
<h4>SEMANA 2: Aumentar Ligeramente (Objetivo: 3-4%)</h4>
<ul>
<li><strong>Riesgo por trade:</strong> 0.75% maximo</li>
<li><strong>Objetivo semanal:</strong> 3,000$ - 4,000$ (3-4%)</li>
<li><strong>Anadir pares:</strong> USD/JPY, XAUUSD (oro) si tienes experiencia</li>
<li><strong>Maximo 2-3 trades al dia</strong></li>
<li><strong>Mentalidad:</strong> "Ya conozco el ritmo, aumento ligeramente"</li>
</ul>
<p>Si la semana 1 fue rentable, tienes colchon. Ahora puedes arriesgar un poco mas por trade pero siempre con disciplina.</p>
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
<li><strong>NUNCA hagas revenge trading la ultima semana</strong></li>
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
<li><strong>Drawdown total 7%+:</strong> Modo supervivencia. 0.25-0.5% por trade maximo. Solo los mejores setups.</li>
</ul>
</div>

<h3>Pares e Instrumentos Recomendados para Challenges</h3>
<div class="grid-cards">
<div class="card"><h4>TIER 1 - Los Mejores</h4><p><strong>EUR/USD:</strong> Spread bajo, movimiento predecible. <strong>GBP/USD:</strong> Mas volatil pero muy tecnico. Ideal para la mayoria de estrategias.</p></div>
<div class="card"><h4>TIER 2 - Buenos</h4><p><strong>USD/JPY:</strong> Buen movimiento en sesion asiatica. <strong>XAUUSD (Oro):</strong> Mucho movimiento, ideal si dominas su comportamiento.</p></div>
<div class="card"><h4>EVITAR en Challenges</h4><p><strong>Pares exoticos:</strong> Spreads altos, movimientos impredecibles. <strong>Cripto:</strong> Volatilidad extrema. <strong>Indices:</strong> Solo si tienes experiencia especifica con ellos.</p></div>
</div>

<h3>Horarios Optimos de Trading</h3>
<div class="highlight-box blue">
<h4>Ventana de Oro: 13:00-17:00 UTC</h4>
<p>El solapamiento London-NY es tu mejor amigo. Maximo volumen, mejores movimientos, spreads mas bajos. Opera aqui y evita la tentacion de tradear fuera de horario. Menos trades de calidad > muchos trades mediocres.</p>
</div>`,
          keyPoints: [
            "Riesgo 0.5-1% por trade maximo — la consistencia gana challenges, no las operaciones grandes",
            "Plan de 4 semanas: ultra-conservador (S1), aumentar ligeramente (S2), consolidar (S3), cerrar (S4)",
            "Solo opera EUR/USD y GBP/USD durante el solapamiento London-NY para maximizar probabilidades",
            "Protocolo de drawdown estricto: al 3% reduces riesgo, al 4% paras por hoy",
            "Nunca hagas revenge trading — si llegas al 4.5% de drawdown diario, deja de operar",
            "R:R minimo 1:2 y maximo 1-3 trades al dia"
          ],
          quiz: [
            { question: "Cual deberia ser tu riesgo maximo por trade en la semana 1 de un challenge?", options: ["2%", "1.5%", "0.5%", "3%"], correctIndex: 2, explanation: "En la semana 1 debes ser ultra-conservador con 0.5% de riesgo maximo para adaptarte y ganar confianza sin arriesgar el challenge." },
            { question: "Que debes hacer si llevas un drawdown del 4% en un dia?", options: ["Duplicar el riesgo para recuperar", "Seguir operando con el mismo riesgo", "Dejar de operar por hoy inmediatamente", "Cambiar a otros pares mas volatiles"], correctIndex: 2, explanation: "Al alcanzar un 4% de drawdown diario, debes parar de operar inmediatamente. El drawdown maximo diario es 5%, y necesitas proteger ese margen." },
            { question: "Cuales son los mejores pares para un challenge?", options: ["Pares exoticos por su volatilidad", "EUR/USD y GBP/USD por sus spreads bajos y movimiento tecnico", "Solo criptomonedas", "Cualquier par es igual de bueno"], correctIndex: 1, explanation: "EUR/USD y GBP/USD son los mejores para challenges por sus spreads bajos, alta liquidez y movimientos tecnicos predecibles." },
            { question: "Si ya tienes un 9% de profit en la semana 3, que debes hacer?", options: ["Ser agresivo para llegar al 15%", "Reducir riesgo a 0.5% y cerrar el ultimo 1% con paciencia", "Dejar de operar y esperar", "Aumentar el tamano de posicion al 3%"], correctIndex: 1, explanation: "Con 9% de profit solo necesitas 1% mas. Reduce el riesgo al minimo (0.5%) y busca 1-2 buenos trades para cerrar. No arriesgues lo que ya ganaste." }
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
<li><strong>Riesgo maximo 0.5-1% por trade:</strong> Si, incluso con la cuenta fondeada. La consistencia es todo.</li>
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
<li>Usa un trade copier para ejecutar la misma operacion en todas las cuentas simultaneamente</li>
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
<li><strong>Espana:</strong> Se declaran como rendimientos de actividades economicas o ganancias patrimoniales. Consulta con un asesor fiscal.</li>
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
<li><strong>Sobreoperar:</strong> "Ya estoy fondeado, puedo tomar mas riesgos" — NO. Mismo plan que en el challenge.</li>
<li><strong>Revenge trading:</strong> Perder un dia y querer recuperar inmediatamente. Es la causa #1 de perder cuentas.</li>
<li><strong>Ignorar el drawdown:</strong> Estar al 7-8% de drawdown y seguir operando agresivamente.</li>
<li><strong>Cambiar de estrategia:</strong> "Voy a probar algo nuevo con la cuenta fondeada" — Usa SOLO lo que funciono en el challenge.</li>
<li><strong>No retirar ganancias:</strong> Acumular 15% de profit sin retirar y luego perderlo todo en una mala racha.</li>
<li><strong>Trading emocional post-retiro:</strong> Despues de retirar ganancias, sentir que "necesitas" recuperar lo que retiraste.</li>
<li><strong>No tener backup:</strong> Perder la unica cuenta fondeada y no tener dinero para otro challenge.</li>
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
            { question: "Cual es la prioridad #1 al operar una cuenta fondeada?", options: ["Maximizar el profit lo mas rapido posible", "Proteger el drawdown y no perder la cuenta", "Hacer muchas operaciones al dia", "Probar nuevas estrategias"], correctIndex: 1, explanation: "La prioridad numero 1 es proteger el drawdown y no perder la cuenta. El profit es secundario — una cuenta viva genera ganancias mes a mes." },
            { question: "Como funciona el scaling con multiples cuentas?", options: ["Operas estrategias diferentes en cada cuenta", "Usas un trade copier para ejecutar el mismo trade en todas las cuentas simultaneamente", "Solo puedes tener una cuenta a la vez", "Necesitas aprobar un examen especial"], correctIndex: 1, explanation: "Con un trade copier, ejecutas la misma operacion en todas tus cuentas simultaneamente. Mismos trades, multiples cuentas = multiples ganancias." },
            { question: "Que porcentaje de ganancias deberias retirar regularmente?", options: ["100% siempre", "60-70%, dejando 30-40% como colchon", "Nunca retirar, dejar todo en la cuenta", "Solo 10%"], correctIndex: 1, explanation: "Retira el 60-70% de tus ganancias y deja un 30-40% como colchon en la cuenta. Esto protege contra drawdowns futuros y asegura que cobras por tu trabajo." },
            { question: "Cual es el error mas comun despues de ser fondeado?", options: ["Operar muy poco", "Relajar la disciplina y tomar mas riesgos de los necesarios", "Retirar demasiado rapido", "Cambiar de broker"], correctIndex: 1, explanation: "El error mas comun es relajar la disciplina: sobreoperar, aumentar el riesgo, o hacer revenge trading. Los traders exitosos operan igual que en el challenge." }
          ],
          practicalExercise: "Crea tu 'Plan de Trader Fondeado' en un documento: 1) Cuantas cuentas quieres tener en 6 meses. 2) Tu riesgo por trade y reglas de drawdown. 3) Plan de retiro (frecuencia, porcentaje). 4) Presupuesto para challenges (cuanto destinas al mes). 5) Que haras si pierdes tu primera cuenta fondeada. 6) Tu horario diario de trading. Este documento sera tu guia cuando estes fondeado."
        }
      ]
    },
    {
      id: "mod-5-2",
      title: "Impuestos y Fiscalidad del Trading",
      description: "Lo que NADIE te ensena pero que NECESITAS saber",
      icon: "📋",
      color: "#EF4444",
      lessons: [
        {
          id: "5-2-1",
          title: "Fiscalidad del Trading: Impuestos que Debes Pagar",
          duration: "25 min",
          content: `
<h2>Impuestos del Trading: La Realidad que Nadie Ensena</h2>
<div class="warning-box"><h4>IMPORTANTE</h4><p>Esto NO es asesoramiento fiscal. Consulta SIEMPRE con un asesor fiscal profesional de tu pais. Las leyes cambian constantemente. Esta leccion es informativa para que sepas que temas consultar.</p></div>
<h3>Principio General: Las Ganancias de Trading TRIBUTAN</h3>
<p>En la mayoria de paises, las ganancias del trading se consideran <strong>ganancias de capital</strong> o <strong>rentas del ahorro</strong> y deben declararse y pagar impuestos.</p>
<h3>Espana: Como se Tributa</h3>
<div class="vocab-card"><h4>Base del Ahorro (IRPF)</h4>
<ul>
<li>Primeros 6,000 euros de ganancia: <strong>19%</strong></li>
<li>De 6,000 a 50,000 euros: <strong>21%</strong></li>
<li>De 50,000 a 200,000 euros: <strong>23%</strong></li>
<li>De 200,000 a 300,000 euros: <strong>27%</strong></li>
<li>Mas de 300,000 euros: <strong>28%</strong></li>
</ul>
<p>Las perdidas se pueden compensar con ganancias del mismo ano y los 4 siguientes.</p></div>
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
            "Espana: 19-28% dependiendo del tramo de ganancias",
            "Cuentas fondeadas pueden tributar diferente (consultar asesor)",
            "Separa 25-30% de tus ganancias para impuestos desde el dia 1",
            "Lleva registro de TODAS las operaciones y guarda statements del broker",
            "Busca asesor fiscal especializado en trading"
          ],
          quiz: [
            { question: "En Espana, que porcentaje de impuestos pagas sobre los primeros 6,000 euros de ganancias de trading?", options: ["10%", "19%", "25%", "30%"], correctIndex: 1, explanation: "Los primeros 6,000 euros de ganancias de capital en Espana tributan al 19% en la base del ahorro del IRPF." },
            { question: "Que porcentaje de tus ganancias deberias separar para impuestos?", options: ["5%", "10%", "25-30%", "50%"], correctIndex: 2, explanation: "Separar 25-30% desde el primer dia asegura que tendras cubierta la factura fiscal sin sorpresas." },
            { question: "Que documentos necesitas guardar para la declaracion fiscal?", options: ["Solo el balance final", "Registros de todas las operaciones + statements del broker", "Nada, el broker lo reporta automaticamente", "Solo las operaciones ganadoras"], correctIndex: 1, explanation: "Necesitas registros completos de todas las operaciones (ganadoras y perdedoras) mas los informes oficiales del broker." }
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
<div class="card"><h4>Precio del Challenge</h4><p>Cuanto pagas por intentar la evaluacion. Varia de 100 a 1000+ segun el tamano de cuenta.</p></div>
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
<li><strong>Pro:</strong> La mas respetada, buena reputacion</li>
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
<li>Busca reviews en TrustPilot (minimo 4 estrellas, 100+ reviews)</li>
<li>Verifica que paguen retiros (busca pruebas de pago en redes)</li>
<li>Revisa cuanto tiempo llevan operando (minimo 1 ano)</li>
<li>Evita las que tienen ofertas "demasiado buenas para ser verdad"</li>
</ul></div>`,
          keyPoints: [
            "FTMO es la mas respetada pero no la mas barata",
            "Empieza con cuentas pequenas (10K-25K) para tu primer challenge",
            "Verifica reviews en TrustPilot y pruebas de pago antes de comprar",
            "El profit split tipico es 80%, algunas escalan hasta 90%",
            "Evita prop firms nuevas sin historial verificable"
          ],
          quiz: [
            { question: "Que tamano de cuenta recomiendas para un primer challenge?", options: ["200K - ir a lo grande", "10K-25K - menos presion, menos riesgo financiero", "500K - maximizar ganancias", "No importa el tamano"], correctIndex: 1, explanation: "Para tu primer challenge, una cuenta de 10K-25K tiene un costo bajo (50-150 euros) y te permite aprender el proceso sin presion financiera excesiva." },
            { question: "Que deberias verificar ANTES de pagar un challenge de una prop firm?", options: ["Solo el precio", "Reviews en TrustPilot, pruebas de pago reales, y cuanto tiempo llevan operando", "Nada, todas son iguales", "Solo si tienen Instagram"], correctIndex: 1, explanation: "Muchas prop firms nuevas desaparecen con tu dinero. Verifica reviews reales, pruebas de pago, y que lleven al menos 1 ano operando." }
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
<p><strong>Solucion:</strong> Tu primer trade del challenge deberia ser IDENTICO a tus trades de demo. Mismo riesgo (0.5-1%), mismo setup. No es "especial" - es uno mas.</p></div>
<div class="psychology-card greed"><h4>2. Llevas +3% Rapido</h4><p>Sensacion de invencibilidad. Tendencia a aumentar riesgo o sobreoperar. "Si sigo asi, paso en una semana!"</p>
<p><strong>Solucion:</strong> Mantener EXACTAMENTE el mismo riesgo. Incluso considerar reducir a 0.5%. Las ganancias ya estan ahi, protegelas.</p></div>
<div class="psychology-card revenge"><h4>3. Primera Racha Perdedora (-2%)</h4><p>Panico. "Estoy perdiendo el challenge!" Tendencia a revenge trading o quitar SL.</p>
<p><strong>Solucion:</strong> -2% es NORMAL. Tienes 8% de margen hasta el drawdown total. PARA 1 dia, respira, y vuelve con calma.</p></div>
<div class="psychology-card fomo"><h4>4. Ultimos Dias y Te Falta 2%</h4><p>Desesperacion. Tendencia a aumentar riesgo dramaticamente. "Necesito una operacion grande!"</p>
<p><strong>Solucion:</strong> NUNCA aumentes riesgo al final. Es MEJOR no pasar y comprar otro challenge que violar el drawdown. Mantener disciplina.</p></div>
<div class="psychology-card hope"><h4>5. Estas a 0.5% del Objetivo</h4><p>Ansiedad extrema. Cada pip cuenta. Tendencia a cerrar trades ganadores demasiado pronto.</p>
<p><strong>Solucion:</strong> Trata este trade como cualquier otro. Pon TP normal. Si llega, genial. Si no, habra mas oportunidades.</p></div>
<h3>El Mantra del Challenge</h3>
<div class="highlight-box green"><h4>Repite esto antes de cada sesion de trading en el challenge:</h4>
<p>"No estoy intentando pasar un challenge. Estoy ejecutando mi plan de trading. El resultado es una consecuencia del proceso. Mi unico objetivo es seguir mis reglas, trade por trade."</p></div>
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
            { question: "Llevas +4% en tu challenge y quedan 2 semanas. Que haces?", options: ["Aumentas riesgo para llegar rapido al 8%", "Mantienes o reduces el riesgo para proteger las ganancias", "Dejas de operar y esperas", "Cambias de estrategia"], correctIndex: 1, explanation: "Con +4%, lo inteligente es proteger lo ganado. Mantener 0.5% de riesgo o incluso reducir a 0.25%. Es mejor tardar mas que arriesgar las ganancias." },
            { question: "Que porcentaje de traders pasa su PRIMER challenge?", options: ["50%", "30%", "10-15%", "90%"], correctIndex: 2, explanation: "Solo el 10-15% pasa el primer intento. Pero el 80% de los que eventualmente pasan lo logran en el 2do o 3er intento. Fallar es parte del proceso." },
            { question: "Cual deberia ser tu enfoque mental durante un challenge?", options: ["Ganar lo maximo posible lo mas rapido posible", "Ejecutar tu plan de trading correctamente, trade por trade", "Intentar estrategias nuevas para encontrar la mejor", "Copiar a otros traders que ya pasaron"], correctIndex: 1, explanation: "Enfocate en el PROCESO: ejecutar tu plan correctamente. El resultado (pasar el challenge) es una consecuencia natural de un buen proceso repetido." }
          ]
        }
      ]
    }
  ]
};
