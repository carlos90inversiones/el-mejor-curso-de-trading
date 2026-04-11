"use client";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollReveal, AnimatedCounter, Float } from "@/components/Animations";
import InstructorPresenter, { INSTRUCTOR_CLIPS } from "@/components/InstructorPresenter";
import DailyTip from "@/components/DailyTip";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-transparent to-purple-900/10" />
        <div className="max-w-6xl mx-auto px-4 pt-16 pb-20 text-center relative">
          <Float amplitude={6} duration={4}>
            <div className="text-7xl mb-6">📈</div>
          </Float>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight">
            Trading Pro
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            <span className="gradient-text-animated">El Mejor Curso de Trading del Mundo</span>
          </h2>
          <p className="text-lg md:text-xl text-[#a0a0b8] max-w-3xl mx-auto mb-10 leading-relaxed">
            De cero absoluto a trader profesional. 57 lecciones interactivas, 216 preguntas de quiz,
            simulador con datos reales, video-lecciones animadas, y todas las herramientas que necesitas.
            <strong className="text-white"> 100% GRATUITO.</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/curso" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg px-8 py-4 rounded-xl hover:opacity-90 transition font-bold shadow-lg shadow-blue-500/20">
              Empezar el Curso Gratis
            </Link>
            <a href="#por-que" className="bg-[#1a1a2e] border border-[#2a2a40] text-white text-lg px-8 py-4 rounded-xl hover:bg-[#222240] transition font-medium">
              Por Que es el Mejor?
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { value: 57, label: "Lecciones", icon: "📚" },
              { value: 216, label: "Preguntas Quiz", icon: "✅" },
              { value: 35, label: "Diagramas SVG", icon: "📊" },
              { value: 12, label: "Herramientas", icon: "🛠️" },
            ].map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.1} direction="scale">
                <div className="bg-[#1a1a2e] border border-[#2a2a40] rounded-xl p-5 text-center hover-lift hover-glow">
                  <div className="text-3xl mb-2">{s.icon}</div>
                  <div className="text-3xl font-bold text-white"><AnimatedCounter value={s.value} /></div>
                  <div className="text-sm text-[#a0a0b8]">{s.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* DAILY TIP */}
      <section className="max-w-4xl mx-auto px-4 mb-12">
        <DailyTip />
      </section>

      {/* INSTRUCTOR */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <InstructorPresenter {...INSTRUCTOR_CLIPS[0]} />
      </section>

      {/* POR QUE ES EL MEJOR */}
      <section id="por-que" className="max-w-6xl mx-auto px-4 py-16">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Por Que es el Mejor Curso de Trading del Mundo?
            </h2>
            <p className="text-lg text-[#a0a0b8] max-w-3xl mx-auto">
              No lo decimos nosotros por marketing. Lo decimos porque hemos comparado con los cursos mas caros
              del mercado y ofrecemos MAS contenido, MAS interactividad, y MAS herramientas. Gratis.
            </p>
          </div>
        </ScrollReveal>

        {/* Comparison Table */}
        <ScrollReveal delay={0.1}>
          <div className="bg-[#1a1a2e] border border-[#2a2a40] rounded-2xl overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#2a2a40]">
                    <th className="text-left p-4 text-[#a0a0b8] font-medium">Caracteristica</th>
                    <th className="p-4 text-center text-[#a0a0b8] font-medium">Cursos de<br/>500-2000 euros</th>
                    <th className="p-4 text-center bg-gradient-to-b from-blue-900/20 to-purple-900/20">
                      <span className="text-white font-bold">Trading Pro</span><br/>
                      <span className="text-green-400 text-xs font-bold">GRATIS</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Lecciones", "15-30", "57"],
                    ["Preguntas de quiz", "20-50", "216"],
                    ["Diagramas educativos SVG", "0-5 imagenes", "35 SVGs interactivos"],
                    ["Video-lecciones animadas", "Videos pre-grabados", "10 videos animados con TTS"],
                    ["Simulador de trading", "No incluido", "Con datos reales + modo Challenge"],
                    ["Calculadora position sizing", "No incluido", "Incluida con tabla R:R"],
                    ["Diario de trading", "PDF descargable", "Interactivo con estadisticas"],
                    ["Practica de patrones", "No incluido", "12 patrones con feedback"],
                    ["Flashcards", "No incluido", "30 tarjetas interactivas"],
                    ["Glosario", "PDF basico", "102 terminos con buscador"],
                    ["Cheat sheets", "PDF simple", "4 descargables como PNG"],
                    ["Proyectos practicos", "1-2 ejercicios", "7 proyectos con checklists"],
                    ["Gamificacion (XP, niveles)", "No incluido", "10 niveles + 15 badges"],
                    ["Certificados", "1 al final", "7 (uno por fase)"],
                    ["Smart Money / ICT", "Basico", "Completo: OB, FVG, AMD, Wyckoff"],
                    ["Elliott Wave", "No incluido", "Incluido"],
                    ["Harmonic Patterns", "No incluido", "Incluido"],
                    ["Order Flow", "No incluido", "Incluido"],
                    ["Cuentas fondeadas", "Mencion basica", "3 lecciones + comparativa + psicologia"],
                    ["Fiscalidad", "No incluido", "Espana + Latam"],
                    ["Trading algoritmico", "No incluido", "Python + Pine Script + Bots + APIs + ML"],
                    ["Audio narrado", "Solo video", "TTS en cada leccion, 4 velocidades"],
                    ["Actualizaciones", "Version fija", "Actualizaciones continuas"],
                    ["Precio", "500-2000 euros", "0 euros. GRATIS."],
                  ].map(([feat, others, us], i) => (
                    <tr key={i} className="border-b border-[#2a2a40]/50 hover:bg-[#222240]/30 transition">
                      <td className="p-3 text-white font-medium">{feat}</td>
                      <td className="p-3 text-center text-[#a0a0b8]">{others}</td>
                      <td className="p-3 text-center text-green-400 font-medium bg-green-900/5">{us}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>

        {/* 7 Reasons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            { icon: "🎯", title: "De Cero a Experto Real", desc: "No saltamos pasos. Empezamos explicando que es una vela japonesa y terminamos con Elliott Wave, Order Flow y bots de Python. Todo conectado." },
            { icon: "🖼️", title: "35 Diagramas Visuales", desc: "Cada concepto tiene su imagen SVG explicativa DENTRO de la leccion. No tienes que imaginar nada: lo VES." },
            { icon: "🎬", title: "Video-Lecciones Animadas", desc: "Graficos que se dibujan vela a vela con narracion sincronizada. Como ver a un profesor dibujando en la pizarra." },
            { icon: "📊", title: "Simulador con Datos Reales", desc: "No precio aleatorio. Datos historicos reales de EUR/USD con modo Challenge que simula un examen de prop firm." },
            { icon: "🏆", title: "Gamificacion Completa", desc: "XP, 10 niveles, 15 badges, streaks, certificados descargables. Te mantiene motivado y midiendo tu progreso." },
            { icon: "🧠", title: "Psicologia y Riesgo", desc: "8 lecciones dedicadas a lo que REALMENTE importa: gestion de riesgo, mentalidad, rutina diaria, rachas perdedoras." },
            { icon: "💰", title: "Cuentas Fondeadas", desc: "6 lecciones sobre prop firms: comparativa, estrategia de 4 semanas, psicologia del challenge, fiscalidad." },
            { icon: "🐍", title: "Trading Algoritmico", desc: "7 lecciones: backtesting, Python, Pine Script, bots con MT5, APIs, Machine Learning, deploy en la nube." },
            { icon: "🆓", title: "Completamente GRATIS", desc: "Sin pagos ocultos, sin suscripciones, sin 'desbloquea el nivel premium'. Todo el contenido disponible desde el dia 1." },
          ].map((r, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="bg-[#1a1a2e] border border-[#2a2a40] rounded-xl p-6 h-full hover-lift hover-glow">
                <div className="text-3xl mb-3">{r.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{r.title}</h3>
                <p className="text-[#a0a0b8] text-sm leading-relaxed">{r.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Content Overview */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white mb-4">Contenido Completo del Curso</h2>
            <p className="text-[#a0a0b8]">7 fases progresivas, de principiante absoluto a trader profesional</p>
          </div>
        </ScrollReveal>

        <div className="space-y-4 mb-16">
          {[
            { num: 1, title: "Fundamentos Absolutos", lessons: 9, desc: "Trading desde cero, mercados, velas japonesas, brokers, plataformas", color: "#3b82f6" },
            { num: 2, title: "Analisis Tecnico Completo", lessons: 13, desc: "S/R, estructura, indicadores, Fibonacci, patrones, multi-TF, fundamental, correlaciones", color: "#8b5cf6" },
            { num: 3, title: "Gestion de Riesgo y Psicologia", lessons: 8, desc: "Money management, position sizing, plan de trading, psicologia, diario, rutina", color: "#ef4444" },
            { num: 4, title: "Estrategias Avanzadas", lessons: 14, desc: "SMC, ICT, Wyckoff, Elliott Wave, Order Flow, Harmonic Patterns, Scalping, Swing", color: "#10b981" },
            { num: 5, title: "Cuentas Fondeadas", lessons: 6, desc: "Prop firms, comparativa, estrategia challenge, psicologia, fiscalidad", color: "#f59e0b" },
            { num: 6, title: "Trading Algoritmico", lessons: 7, desc: "Backtesting, Python, Pine Script, bots MT5, APIs, Machine Learning, deploy", color: "#6366f1" },
            { num: 7, title: "Maestria y Examen Final", lessons: 4, desc: "Examen 20 preguntas, escenarios reales, plan de carrera, mensaje final", color: "#dc2626" },
          ].map((phase, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <Link href="/curso" className="block bg-[#1a1a2e] rounded-xl p-5 border-l-4 hover-lift hover-glow transition" style={{ borderColor: phase.color }}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold text-white shrink-0" style={{ background: phase.color }}>
                    {phase.num}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-white font-bold">{phase.title}</h3>
                      <span className="text-xs bg-[#2a2a40] text-[#a0a0b8] px-2 py-0.5 rounded-full">{phase.lessons} lecciones</span>
                    </div>
                    <p className="text-sm text-[#a0a0b8] truncate">{phase.desc}</p>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* TESTIMONIALS */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white mb-4">Lo Que Dicen Nuestros Alumnos</h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { name: "Carlos M.", role: "Day Trader", text: "Despues de gastar 1,500 euros en otros cursos, encontre este GRATIS y tiene MAS contenido que todos los anteriores juntos. El simulador con modo Challenge es brutal.", stars: 5 },
            { name: "Laura G.", role: "Swing Trader", text: "Los SVGs dentro de las lecciones cambiaron todo. Por fin ENTIENDO lo que es un Order Block sin tener que imaginar. Y la gamificacion me mantiene enganchada.", stars: 5 },
            { name: "Miguel R.", role: "Prop Firm Trader", text: "Pase mi primer challenge de FTMO gracias a la Fase 5 de este curso. Las 3 lecciones de prop firms valen mas que cualquier curso de pago.", stars: 5 },
            { name: "Ana P.", role: "Principiante", text: "No sabia NADA de trading. Empece desde cero y en 3 meses ya operaba en demo con resultados positivos. Las explicaciones son clarisimas.", stars: 5 },
            { name: "David S.", role: "Algo Trader", text: "La Fase 6 de trading algoritmico es increible. Aprendi Python, Pine Script y a hacer bots. Cosas que en otros cursos cobran 2,000 euros.", stars: 5 },
            { name: "Sofia L.", role: "Estudiante", text: "Los flashcards y la practica de velas me ayudaron a memorizar todo. Y el examen por escenarios es como estar en un challenge real.", stars: 5 },
          ].map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="bg-[#1a1a2e] border border-[#2a2a40] rounded-xl p-6 h-full">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.stars }, (_, j) => <span key={j} className="text-amber-400">★</span>)}
                </div>
                <p className="text-[#a0a0b8] text-sm mb-4 leading-relaxed italic">"{t.text}"</p>
                <div>
                  <p className="text-white font-bold text-sm">{t.name}</p>
                  <p className="text-[#555] text-xs">{t.role}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* FAQ */}
        <ScrollReveal>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-white mb-4">Preguntas Frecuentes</h2>
          </div>
        </ScrollReveal>
        <div className="space-y-4 mb-16 max-w-3xl mx-auto">
          {[
            { q: "Es realmente 100% gratis?", a: "Si. No hay pagos ocultos, no hay version premium, no hay suscripciones. Todo el contenido (57 lecciones, 216 quizzes, simulador, herramientas) esta disponible desde el dia 1 sin pagar nada." },
            { q: "Necesito saber algo de finanzas para empezar?", a: "No. El curso empieza desde CERO absoluto. La Fase 1 te explica que es el trading como si tuvieras 5 anos. No necesitas conocimientos previos de ninguna clase." },
            { q: "Cuanto tiempo necesito para completar el curso?", a: "Dedicando 1-2 horas al dia, puedes completar las 57 lecciones en 4-6 semanas. Pero el trading requiere practica: recomendamos 3-6 meses en demo antes de dinero real." },
            { q: "Puedo vivir del trading?", a: "Si, pero no es facil ni rapido. Con educacion (este curso), practica (3-6 meses demo), y disciplina, es posible. Un trader consistente gana 2-5% mensual. Con cuentas fondeadas de 100K+, eso puede ser un ingreso serio." },
            { q: "Las cuentas fondeadas (prop firms) son reales?", a: "Si. Empresas como FTMO, Funded Next y otras te dan capital real (10K-200K) para operar. Tu pasas un examen y te quedas con el 80% de las ganancias. La Fase 5 del curso te prepara para esto." },
            { q: "El simulador usa datos reales?", a: "Si. El simulador avanzado usa datos historicos reales de EUR/USD (4 escenarios diferentes). El modo Challenge simula un examen de prop firm con drawdown y objetivos reales." },
            { q: "Que tecnologias se usan en el curso?", a: "Para estudiar: TradingView (gratis), MetaTrader 4/5 (gratis). Para la Fase 6 (algo trading): Python, Pine Script. Todo gratuito y con instrucciones paso a paso." },
            { q: "Hay certificado?", a: "Si. Al completar el 80% de cada fase, puedes descargar un certificado en formato PNG. Hay 7 certificados en total (uno por fase)." },
          ].map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.03}>
              <details className="bg-[#1a1a2e] border border-[#2a2a40] rounded-xl group">
                <summary className="p-5 cursor-pointer text-white font-medium flex items-center justify-between hover:bg-[#222240] rounded-xl transition">
                  {faq.q}
                  <span className="text-[#a0a0b8] group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-5 pb-5 text-[#a0a0b8] text-sm leading-relaxed">
                  {faq.a}
                </div>
              </details>
            </ScrollReveal>
          ))}
        </div>

        {/* Final CTA */}
        <ScrollReveal>
          <div className="text-center bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-800/30 rounded-2xl p-10">
            <h2 className="text-3xl font-extrabold text-white mb-4">Empieza Ahora. Es Gratis.</h2>
            <p className="text-[#a0a0b8] max-w-2xl mx-auto mb-6">
              No necesitas tarjeta de credito, no hay pagos ocultos, no hay version "premium".
              Todo el contenido esta disponible desde el primer dia. Solo necesitas ganas de aprender.
            </p>
            <Link href="/curso" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg px-10 py-4 rounded-xl hover:opacity-90 transition font-bold shadow-lg shadow-blue-500/20">
              Empezar el Curso Gratis →
            </Link>
          </div>
        </ScrollReveal>
      </section>

      <Footer />
    </div>
  );
}
