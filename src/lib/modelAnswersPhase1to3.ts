export const MODEL_ANSWERS_1_TO_3: Record<string, string> = {

  // ─── FASE 1: FUNDAMENTOS (solo conceptos básicos, NO usar RSI, soportes, etc.) ───

  "1-1-1": `<p>Abrí TradingView y busqué BTCUSD en gráfico diario. Vi que el precio subía durante varios días seguidos — ahí habría <strong>comprado (LONG)</strong> porque la tendencia era claramente hacia arriba. Luego vi que el precio empezó a bajar fuerte durante 3 días — ahí habría <strong>vendido (SHORT)</strong> porque el precio iba claramente hacia abajo.</p>
<div style="display:flex;justify-content:center;margin:20px 0"><svg width="100%" viewBox="0 0 500 200" style="background:#131722;border-radius:10px;border:1px solid #2a2a40">
<text x="250" y="20" fill="white" font-size="11" text-anchor="middle" font-weight="bold">MI PRIMER ANÁLISIS: BTCUSD</text>
<line x1="40" y1="170" x2="460" y2="170" stroke="#2a2a40" stroke-width="1"/>
<line x1="40" y1="30" x2="40" y2="170" stroke="#2a2a40" stroke-width="1"/>
<polyline points="60,140 100,130 140,110 180,90 220,70 260,60 300,80 340,100 380,120 420,140" fill="none" stroke="#26a69a" stroke-width="2.5"/>
<circle cx="180" cy="90" r="5" fill="#26a69a"/>
<text x="180" y="80" fill="#26a69a" font-size="9" text-anchor="middle" font-weight="bold">LONG aquí</text>
<text x="180" y="105" fill="#787b86" font-size="7" text-anchor="middle">El precio sube</text>
<circle cx="380" cy="120" r="5" fill="#ef4444"/>
<text x="380" y="110" fill="#ef4444" font-size="9" text-anchor="middle" font-weight="bold">SHORT aquí</text>
<text x="380" y="135" fill="#787b86" font-size="7" text-anchor="middle">El precio baja</text>
<rect x="60" y="55" width="200" height="15" rx="3" fill="#26a69a15" stroke="#26a69a" stroke-dasharray="3"/>
<text x="160" y="65" fill="#26a69a" font-size="7" text-anchor="middle">Tendencia alcista = LONG</text>
<rect x="280" y="75" width="160" height="15" rx="3" fill="#ef444415" stroke="#ef4444" stroke-dasharray="3"/>
<text x="360" y="85" fill="#ef4444" font-size="7" text-anchor="middle">Tendencia bajista = SHORT</text>
</svg></div>
<p><strong>Lo que aprendí:</strong> No necesito indicadores complicados para ver si el precio sube o baja. Si sube = oportunidad de LONG. Si baja = oportunidad de SHORT. Anoté ambos momentos con fecha y precio.</p>`,

  "1-2-1": `<p>Configuré TradingView paso a paso: seleccioné gráfico de <strong>velas japonesas</strong>, añadí la <strong>EMA 21</strong> (azul) y <strong>EMA 50</strong> (naranja) desde Indicadores, y el <strong>RSI 14</strong> en el panel inferior. Guardé el layout como "Mi Setup". Practiqué cambiar entre D1, H4 y H1. Dibujé 2 líneas horizontales en niveles donde el precio había tocado varias veces.</p>
<div style="display:flex;justify-content:center;margin:20px 0"><svg width="100%" viewBox="0 0 500 250" style="background:#131722;border-radius:10px;border:1px solid #2a2a40">
<text x="250" y="20" fill="white" font-size="11" text-anchor="middle" font-weight="bold">MI SETUP EN TRADINGVIEW</text>
<rect x="30" y="35" width="440" height="130" rx="5" fill="#0d0d15" stroke="#2a2a40"/>
<text x="50" y="52" fill="#787b86" font-size="8">EUR/USD - D1 - Velas Japonesas</text>
<rect x="60" y="65" width="8" height="30" fill="#26a69a"/><line x1="64" y1="60" x2="64" y2="100" stroke="#26a69a"/>
<rect x="80" y="70" width="8" height="25" fill="#ef4444"/><line x1="84" y1="62" x2="84" y2="100" stroke="#ef4444"/>
<rect x="100" y="60" width="8" height="35" fill="#26a69a"/><line x1="104" y1="55" x2="104" y2="100" stroke="#26a69a"/>
<rect x="120" y="75" width="8" height="20" fill="#26a69a"/><line x1="124" y1="70" x2="124" y2="100" stroke="#26a69a"/>
<rect x="140" y="65" width="8" height="30" fill="#ef4444"/><line x1="144" y1="58" x2="144" y2="100" stroke="#ef4444"/>
<rect x="160" y="58" width="8" height="37" fill="#26a69a"/><line x1="164" y1="52" x2="164" y2="100" stroke="#26a69a"/>
<polyline points="60,85 80,80 100,75 120,78 140,82 160,72 180,70 200,68 220,72 240,75 260,70" fill="none" stroke="#3b82f6" stroke-width="1.5"/>
<text x="265" y="68" fill="#3b82f6" font-size="7">EMA 21</text>
<polyline points="60,90 80,88 100,85 120,84 140,86 160,82 180,80 200,79 220,80 240,82 260,80" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
<text x="265" y="78" fill="#f59e0b" font-size="7">EMA 50</text>
<line x1="40" y1="60" x2="460" y2="60" stroke="#3b82f680" stroke-width="1" stroke-dasharray="4"/>
<text x="420" y="57" fill="#3b82f6" font-size="7">Línea 1</text>
<line x1="40" y1="95" x2="460" y2="95" stroke="#3b82f680" stroke-width="1" stroke-dasharray="4"/>
<text x="420" y="92" fill="#3b82f6" font-size="7">Línea 2</text>
<rect x="30" y="175" width="440" height="50" rx="5" fill="#0d0d15" stroke="#2a2a40"/>
<text x="50" y="190" fill="#787b86" font-size="8">RSI (14)</text>
<line x1="50" y1="200" x2="450" y2="200" stroke="#2a2a40" stroke-width="0.5"/>
<polyline points="60,210 90,195 120,200 150,190 180,205 210,195 240,188 270,198 300,205 330,195 360,200" fill="none" stroke="#8b5cf6" stroke-width="1.5"/>
<text x="455" y="195" fill="#787b86" font-size="7">70</text>
<text x="455" y="210" fill="#787b86" font-size="7">30</text>
</svg></div>
<p><strong>Resultado:</strong> Ahora tengo un workspace organizado con las herramientas básicas. La EMA 21 y 50 me muestran la dirección general, y el RSI me ayudará a ver si el precio está "estirado" hacia un extremo.</p>`,

  "1-2-2": `<p>Investigué 3 brokers regulados: <strong>IC Markets</strong> (ASIC, spread 0.1 pips, depósito 200$, MT4/MT5/cTrader), <strong>Pepperstone</strong> (FCA+ASIC, spread 0.0 pips + comisión, depósito 200$, MT4/MT5/TradingView) y <strong>XM</strong> (CySEC, spread 0.6 pips, depósito 5$, MT4/MT5). Elegí IC Markets por su regulación sólida y spreads bajos. Abrí cuenta DEMO con 10.000$ virtuales.</p>
<div style="display:flex;justify-content:center;margin:20px 0"><svg width="100%" viewBox="0 0 500 200" style="background:#131722;border-radius:10px;border:1px solid #2a2a40">
<text x="250" y="20" fill="white" font-size="11" text-anchor="middle" font-weight="bold">COMPARACIÓN DE BROKERS</text>
<rect x="30" y="35" width="140" height="150" rx="8" fill="#0d0d15" stroke="#26a69a"/>
<text x="100" y="55" fill="#26a69a" font-size="10" text-anchor="middle" font-weight="bold">IC Markets ✓</text>
<text x="100" y="72" fill="#787b86" font-size="8" text-anchor="middle">ASIC, CySEC</text>
<text x="100" y="87" fill="white" font-size="8" text-anchor="middle">Spread: 0.1 pips</text>
<text x="100" y="102" fill="white" font-size="8" text-anchor="middle">Depósito: 200$</text>
<text x="100" y="117" fill="white" font-size="8" text-anchor="middle">MT4, MT5, cTrader</text>
<text x="100" y="140" fill="#26a69a" font-size="9" text-anchor="middle" font-weight="bold">MI ELECCIÓN</text>
<rect x="180" y="35" width="140" height="150" rx="8" fill="#0d0d15" stroke="#2a2a40"/>
<text x="250" y="55" fill="white" font-size="10" text-anchor="middle" font-weight="bold">Pepperstone</text>
<text x="250" y="72" fill="#787b86" font-size="8" text-anchor="middle">FCA, ASIC</text>
<text x="250" y="87" fill="white" font-size="8" text-anchor="middle">Spread: 0.0 + com.</text>
<text x="250" y="102" fill="white" font-size="8" text-anchor="middle">Depósito: 200$</text>
<text x="250" y="117" fill="white" font-size="8" text-anchor="middle">MT4, MT5, TView</text>
<rect x="330" y="35" width="140" height="150" rx="8" fill="#0d0d15" stroke="#2a2a40"/>
<text x="400" y="55" fill="white" font-size="10" text-anchor="middle" font-weight="bold">XM</text>
<text x="400" y="72" fill="#787b86" font-size="8" text-anchor="middle">CySEC, ASIC</text>
<text x="400" y="87" fill="white" font-size="8" text-anchor="middle">Spread: 0.6 pips</text>
<text x="400" y="102" fill="white" font-size="8" text-anchor="middle">Depósito: 5$</text>
<text x="400" y="117" fill="white" font-size="8" text-anchor="middle">MT4, MT5</text>
</svg></div>`,

  "1-3-1": `<p>En EUR/USD H4 busqué los 4 patrones que aprendí en esta lección. Encontré 3 <strong>Doji</strong> (cuerpo muy pequeño, mechas largas) — en los 3 casos el precio cambió de dirección después. 2 <strong>Martillos</strong> con mecha inferior larga — ambos aparecieron después de caídas y el precio subió después. 2 <strong>Estrellas Fugaz</strong> con mecha superior larga — aparecieron después de subidas y el precio cayó. 1 <strong>Envolvente</strong> donde una vela verde grande cubrió toda la vela roja anterior.</p>
<div style="display:flex;justify-content:center;margin:20px 0"><svg width="100%" viewBox="0 0 500 220" style="background:#131722;border-radius:10px;border:1px solid #2a2a40">
<text x="250" y="18" fill="white" font-size="11" text-anchor="middle" font-weight="bold">PATRONES QUE IDENTIFIQUÉ</text>
<rect x="20" y="30" width="110" height="170" rx="8" fill="#0d0d15" stroke="#2a2a40"/>
<text x="75" y="48" fill="#f59e0b" font-size="9" text-anchor="middle" font-weight="bold">DOJI</text>
<line x1="75" y1="100" x2="75" y2="65" stroke="#f59e0b" stroke-width="1.5"/>
<rect x="70" y="98" width="10" height="3" fill="#f59e0b"/>
<line x1="75" y1="101" x2="75" y2="140" stroke="#f59e0b" stroke-width="1.5"/>
<text x="75" y="160" fill="#787b86" font-size="7" text-anchor="middle">Cuerpo pequeño</text>
<text x="75" y="172" fill="#787b86" font-size="7" text-anchor="middle">Mechas largas</text>
<text x="75" y="190" fill="#f59e0b" font-size="8" text-anchor="middle">= Indecisión</text>
<rect x="140" y="30" width="110" height="170" rx="8" fill="#0d0d15" stroke="#2a2a40"/>
<text x="195" y="48" fill="#26a69a" font-size="9" text-anchor="middle" font-weight="bold">MARTILLO</text>
<line x1="195" y1="75" x2="195" y2="70" stroke="#26a69a" stroke-width="1.5"/>
<rect x="188" y="75" width="14" height="15" fill="#26a69a" rx="1"/>
<line x1="195" y1="90" x2="195" y2="140" stroke="#26a69a" stroke-width="1.5"/>
<text x="195" y="160" fill="#787b86" font-size="7" text-anchor="middle">Mecha inferior larga</text>
<text x="195" y="172" fill="#787b86" font-size="7" text-anchor="middle">Cuerpo arriba</text>
<text x="195" y="190" fill="#26a69a" font-size="8" text-anchor="middle">= Posible subida</text>
<rect x="260" y="30" width="110" height="170" rx="8" fill="#0d0d15" stroke="#2a2a40"/>
<text x="315" y="48" fill="#ef4444" font-size="9" text-anchor="middle" font-weight="bold">ESTRELLA FUGAZ</text>
<line x1="315" y1="65" x2="315" y2="110" stroke="#ef4444" stroke-width="1.5"/>
<rect x="308" y="110" width="14" height="15" fill="#ef4444" rx="1"/>
<line x1="315" y1="125" x2="315" y2="135" stroke="#ef4444" stroke-width="1.5"/>
<text x="315" y="160" fill="#787b86" font-size="7" text-anchor="middle">Mecha superior larga</text>
<text x="315" y="172" fill="#787b86" font-size="7" text-anchor="middle">Cuerpo abajo</text>
<text x="315" y="190" fill="#ef4444" font-size="8" text-anchor="middle">= Posible bajada</text>
<rect x="380" y="30" width="100" height="170" rx="8" fill="#0d0d15" stroke="#2a2a40"/>
<text x="430" y="48" fill="#3b82f6" font-size="9" text-anchor="middle" font-weight="bold">ENVOLVENTE</text>
<rect x="415" y="85" width="10" height="20" fill="#ef4444" rx="1"/>
<rect x="430" y="75" width="14" height="35" fill="#26a69a" rx="1"/>
<text x="430" y="160" fill="#787b86" font-size="7" text-anchor="middle">Vela grande cubre</text>
<text x="430" y="172" fill="#787b86" font-size="7" text-anchor="middle">la anterior</text>
<text x="430" y="190" fill="#3b82f6" font-size="8" text-anchor="middle">= Cambio fuerte</text>
</svg></div>
<p><strong>Observación:</strong> Los patrones funcionaron mejor cuando aparecieron después de movimientos fuertes en una dirección. Los Doji en medio de un movimiento lateral no dieron señal clara.</p>`,

  "1-3-2": `<p>Identifiqué los patrones avanzados en EUR/USD H4: 2 <strong>Morning Star</strong> (vela roja grande → vela pequeña → vela verde grande) — ambos aparecieron al final de bajadas y el precio subió después. 2 <strong>Inside Bar</strong> donde una vela estaba completamente dentro de la anterior — señal de que el mercado se comprimía antes de un movimiento fuerte. 1 <strong>Three White Soldiers</strong>: 3 velas verdes grandes consecutivas que confirmaron fuerza compradora.</p>
<div style="display:flex;justify-content:center;margin:20px 0"><svg width="100%" viewBox="0 0 500 220" style="background:#131722;border-radius:10px;border:1px solid #2a2a40">
<text x="250" y="18" fill="white" font-size="11" text-anchor="middle" font-weight="bold">PATRONES AVANZADOS IDENTIFICADOS</text>
<rect x="20" y="35" width="150" height="165" rx="8" fill="#0d0d15" stroke="#2a2a40"/>
<text x="95" y="53" fill="#26a69a" font-size="9" text-anchor="middle" font-weight="bold">MORNING STAR</text>
<rect x="50" y="70" width="12" height="40" fill="#ef4444" rx="1"/>
<rect x="72" y="100" width="8" height="8" fill="#787b86" rx="1"/>
<rect x="90" y="65" width="12" height="45" fill="#26a69a" rx="1"/>
<text x="75" y="130" fill="#787b86" font-size="7" text-anchor="middle">Roja + Pequeña + Verde</text>
<text x="75" y="145" fill="#26a69a" font-size="8" text-anchor="middle">Giro al alza</text>
<text x="95" y="165" fill="#787b86" font-size="7" text-anchor="middle">Apareció tras caída</text>
<text x="95" y="180" fill="#26a69a" font-size="7" text-anchor="middle">→ Precio subió después</text>
<rect x="180" y="35" width="140" height="165" rx="8" fill="#0d0d15" stroke="#2a2a40"/>
<text x="250" y="53" fill="#f59e0b" font-size="9" text-anchor="middle" font-weight="bold">INSIDE BAR</text>
<rect x="215" y="65" width="14" height="50" fill="#ef4444" rx="1"/>
<line x1="222" y1="60" x2="222" y2="120" stroke="#ef4444" stroke-width="1"/>
<rect x="240" y="78" width="10" height="20" fill="#26a69a" rx="1"/>
<line x1="245" y1="73" x2="245" y2="103" stroke="#26a69a" stroke-width="1"/>
<text x="250" y="135" fill="#787b86" font-size="7" text-anchor="middle">Vela dentro de la anterior</text>
<text x="250" y="150" fill="#f59e0b" font-size="8" text-anchor="middle">Compresión = explosión</text>
<text x="250" y="170" fill="#787b86" font-size="7" text-anchor="middle">Esperar la ruptura</text>
<rect x="330" y="35" width="150" height="165" rx="8" fill="#0d0d15" stroke="#2a2a40"/>
<text x="405" y="53" fill="#26a69a" font-size="9" text-anchor="middle" font-weight="bold">THREE WHITE SOLDIERS</text>
<rect x="360" y="100" width="12" height="25" fill="#26a69a" rx="1"/>
<rect x="380" y="85" width="12" height="30" fill="#26a69a" rx="1"/>
<rect x="400" y="65" width="12" height="35" fill="#26a69a" rx="1"/>
<text x="405" y="145" fill="#787b86" font-size="7" text-anchor="middle">3 verdes consecutivas</text>
<text x="405" y="160" fill="#26a69a" font-size="8" text-anchor="middle">Fuerza compradora</text>
</svg></div>
<p><strong>Clave:</strong> Los patrones de 3 velas (Morning Star, Three White Soldiers) dieron señales más fiables que los de 1 sola vela. La Inside Bar fue útil para anticipar que iba a haber un movimiento grande, aunque no dice la dirección.</p>`,

  // ─── FASE 2: ANÁLISIS TÉCNICO ───

  "2-1-1": `<p>Identifiqué en EUR/USD D1: 3 niveles de <strong>soporte</strong> (precios donde el mercado rebotó hacia arriba al menos 2 veces) y 3 niveles de <strong>resistencia</strong> (precios donde el mercado fue rechazado hacia abajo). Marqué una <strong>tendencia alcista</strong> conectando mínimos crecientes con una línea de tendencia. Observé cómo el precio respeta estos niveles.</p>
<div style="display:flex;justify-content:center;margin:20px 0"><svg width="100%" viewBox="0 0 500 250" style="background:#131722;border-radius:10px;border:1px solid #2a2a40">
<text x="250" y="18" fill="white" font-size="11" text-anchor="middle" font-weight="bold">SOPORTES, RESISTENCIAS Y TENDENCIA</text>
<line x1="40" y1="230" x2="460" y2="230" stroke="#2a2a40" stroke-width="1"/>
<line x1="40" y1="30" x2="40" y2="230" stroke="#2a2a40" stroke-width="1"/>
<line x1="40" y1="60" x2="460" y2="60" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="6"/>
<text x="465" y="63" fill="#ef4444" font-size="8">R3</text>
<line x1="40" y1="100" x2="460" y2="100" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="6"/>
<text x="465" y="103" fill="#ef4444" font-size="8">R2</text>
<line x1="40" y1="140" x2="460" y2="140" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="6"/>
<text x="465" y="143" fill="#ef4444" font-size="8">R1</text>
<line x1="40" y1="160" x2="460" y2="160" stroke="#26a69a" stroke-width="1.5" stroke-dasharray="6"/>
<text x="465" y="163" fill="#26a69a" font-size="8">S1</text>
<line x1="40" y1="190" x2="460" y2="190" stroke="#26a69a" stroke-width="1.5" stroke-dasharray="6"/>
<text x="465" y="193" fill="#26a69a" font-size="8">S2</text>
<line x1="40" y1="215" x2="460" y2="215" stroke="#26a69a" stroke-width="1.5" stroke-dasharray="6"/>
<text x="465" y="218" fill="#26a69a" font-size="8">S3</text>
<polyline points="60,210 100,190 140,160 160,165 200,140 230,145 260,100 290,110 330,60 370,70 410,100 440,90" fill="none" stroke="white" stroke-width="2"/>
<line x1="60" y1="210" x2="330" y2="60" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="4"/>
<text x="200" y="155" fill="#3b82f6" font-size="8" transform="rotate(-30,200,155)">Línea de tendencia alcista</text>
<circle cx="100" cy="190" r="4" fill="#26a69a"/><text x="100" y="182" fill="#26a69a" font-size="7" text-anchor="middle">Rebote</text>
<circle cx="200" cy="140" r="4" fill="#ef4444"/><text x="200" y="132" fill="#ef4444" font-size="7" text-anchor="middle">Rechazo</text>
</svg></div>
<p><strong>Observación:</strong> Los niveles donde el precio rebotó 3+ veces fueron los más fuertes. Los niveles con solo 1 toque fueron menos fiables.</p>`,

  "2-1-2": `<p>Apliqué <strong>Fibonacci</strong> al último impulso alcista del EUR/USD D1 (desde mínimo hasta máximo). El precio retrocedió exactamente hasta el nivel <strong>61.8%</strong> (la zona dorada) y rebotó con fuerza. Observé que el nivel 50% también actuó como zona de reacción menor.</p>
<div style="display:flex;justify-content:center;margin:20px 0"><svg width="100%" viewBox="0 0 500 250" style="background:#131722;border-radius:10px;border:1px solid #2a2a40">
<text x="250" y="18" fill="white" font-size="11" text-anchor="middle" font-weight="bold">RETROCESO DE FIBONACCI APLICADO</text>
<polyline points="60,200 120,180 180,140 220,100 280,60 300,70 340,110 360,130 380,100 420,50" fill="none" stroke="white" stroke-width="2"/>
<line x1="60" y1="200" x2="460" y2="200" stroke="#787b86" stroke-width="0.5" stroke-dasharray="3"/>
<text x="465" y="203" fill="#787b86" font-size="7">0%</text>
<line x1="280" y1="60" x2="460" y2="60" stroke="#787b86" stroke-width="0.5" stroke-dasharray="3"/>
<text x="465" y="63" fill="#787b86" font-size="7">100%</text>
<line x1="60" y1="146" x2="460" y2="146" stroke="#3b82f680" stroke-width="1" stroke-dasharray="4"/>
<text x="465" y="149" fill="#3b82f6" font-size="7">38.2%</text>
<line x1="60" y1="130" x2="460" y2="130" stroke="#f59e0b80" stroke-width="1" stroke-dasharray="4"/>
<text x="465" y="133" fill="#f59e0b" font-size="7">50%</text>
<line x1="60" y1="113" x2="460" y2="113" stroke="#26a69a" stroke-width="1.5" stroke-dasharray="4"/>
<text x="465" y="116" fill="#26a69a" font-size="7">61.8% ★</text>
<rect x="330" y="108" width="40" height="15" rx="3" fill="#26a69a30" stroke="#26a69a"/>
<text x="350" y="118" fill="#26a69a" font-size="7" text-anchor="middle">REBOTE</text>
<circle cx="360" cy="130" r="4" fill="#f59e0b"/>
<text x="375" y="128" fill="#f59e0b" font-size="7">Reacción en 50%</text>
</svg></div>
<p><strong>Clave:</strong> La zona OTE (61.8%-78.6%) es donde las instituciones buscan entradas. Si el precio llega ahí y muestra rechazo con una vela (martillo, envolvente), es una entrada de alta probabilidad.</p>`,

  "2-2-1": `<p>Identifiqué en EUR/USD H4 una <strong>tendencia alcista</strong> clara: máximos más altos (HH) y mínimos más altos (HL). Luego el precio rompió el último mínimo — señal de posible <strong>cambio de tendencia</strong>. Marqué el punto exacto del cambio y cómo la estructura pasó de alcista a bajista.</p>
<div style="display:flex;justify-content:center;margin:20px 0"><svg width="100%" viewBox="0 0 500 220" style="background:#131722;border-radius:10px;border:1px solid #2a2a40">
<text x="250" y="18" fill="white" font-size="11" text-anchor="middle" font-weight="bold">ESTRUCTURA DE MERCADO: CAMBIO DE TENDENCIA</text>
<polyline points="40,180 80,140 120,160 160,100 200,130 240,70 280,110 320,90 360,150 400,130 440,170" fill="none" stroke="white" stroke-width="2"/>
<circle cx="80" cy="140" r="3" fill="#26a69a"/><text x="80" y="133" fill="#26a69a" font-size="7" text-anchor="middle">HL</text>
<circle cx="160" cy="100" r="3" fill="#26a69a"/><text x="160" y="93" fill="#26a69a" font-size="7" text-anchor="middle">HH</text>
<circle cx="120" cy="160" r="3" fill="#26a69a"/><text x="120" y="172" fill="#26a69a" font-size="7" text-anchor="middle">HL</text>
<circle cx="240" cy="70" r="3" fill="#26a69a"/><text x="240" y="63" fill="#26a69a" font-size="7" text-anchor="middle">HH</text>
<circle cx="200" cy="130" r="3" fill="#26a69a"/><text x="200" y="142" fill="#26a69a" font-size="7" text-anchor="middle">HL</text>
<line x1="190" y1="130" x2="370" y2="130" stroke="#ef4444" stroke-width="1" stroke-dasharray="4"/>
<text x="300" y="125" fill="#ef4444" font-size="8">Último HL roto = CAMBIO</text>
<circle cx="360" cy="150" r="5" fill="#ef4444"/><text x="360" y="165" fill="#ef4444" font-size="7" text-anchor="middle">BOS bajista</text>
<rect x="250" y="85" width="100" height="20" rx="4" fill="#ef444420" stroke="#ef4444"/>
<text x="300" y="98" fill="#ef4444" font-size="8" text-anchor="middle">Cambio de tendencia</text>
<rect x="50" y="195" width="150" height="18" rx="4" fill="#26a69a20" stroke="#26a69a"/>
<text x="125" y="207" fill="#26a69a" font-size="8" text-anchor="middle">Alcista: HH + HL</text>
<rect x="300" y="195" width="150" height="18" rx="4" fill="#ef444420" stroke="#ef4444"/>
<text x="375" y="207" fill="#ef4444" font-size="8" text-anchor="middle">Bajista: LH + LL</text>
</svg></div>`,

  "2-2-2": `<p>Apliqué el <strong>RSI de 14 períodos</strong> al EUR/USD H4. Identifiqué 2 momentos de <strong>sobrecompra</strong> (RSI > 70) donde el precio corrigió después, y 1 momento de <strong>sobreventa</strong> (RSI < 30) donde el precio rebotó. También encontré una <strong>divergencia alcista</strong>: el precio hizo mínimos más bajos pero el RSI hizo mínimos más altos.</p>
<div style="display:flex;justify-content:center;margin:20px 0"><svg width="100%" viewBox="0 0 500 250" style="background:#131722;border-radius:10px;border:1px solid #2a2a40">
<text x="250" y="18" fill="white" font-size="11" text-anchor="middle" font-weight="bold">RSI: SOBRECOMPRA, SOBREVENTA Y DIVERGENCIA</text>
<rect x="30" y="30" width="440" height="100" rx="5" fill="#0d0d15" stroke="#2a2a40"/>
<text x="45" y="45" fill="#787b86" font-size="8">Precio EUR/USD H4</text>
<polyline points="50,100 90,80 130,70 170,90 210,85 250,60 290,75 330,95 370,110 410,100 450,85" fill="none" stroke="white" stroke-width="2"/>
<rect x="30" y="145" width="440" height="95" rx="5" fill="#0d0d15" stroke="#2a2a40"/>
<text x="45" y="160" fill="#787b86" font-size="8">RSI (14)</text>
<line x1="40" y1="170" x2="460" y2="170" stroke="#ef444450" stroke-width="1" stroke-dasharray="3"/>
<text x="465" y="173" fill="#ef4444" font-size="7">70</text>
<line x1="40" y1="215" x2="460" y2="215" stroke="#26a69a50" stroke-width="1" stroke-dasharray="3"/>
<text x="465" y="218" fill="#26a69a" font-size="7">30</text>
<polyline points="50,200 90,185 130,165 170,195 210,190 250,160 290,180 330,210 370,220 410,200 450,190" fill="none" stroke="#8b5cf6" stroke-width="2"/>
<circle cx="250" cy="160" r="4" fill="#ef4444"/><text x="250" y="155" fill="#ef4444" font-size="7" text-anchor="middle">Sobrecompra</text>
<circle cx="370" cy="220" r="4" fill="#26a69a"/><text x="370" y="235" fill="#26a69a" font-size="7" text-anchor="middle">Sobreventa</text>
<line x1="330" y1="95" x2="370" y2="110" stroke="#3b82f6" stroke-width="1.5"/>
<line x1="330" y1="210" x2="370" y2="220" stroke="#3b82f6" stroke-width="1.5"/>
<text x="400" y="205" fill="#3b82f6" font-size="7">Precio baja</text>
<text x="400" y="230" fill="#3b82f6" font-size="7">RSI sube = DIVERGENCIA</text>
</svg></div>`,

  // ─── FASE 3: GESTIÓN DE RIESGO ───

  "3-1-1": `<p>Con una cuenta de <strong>10.000$</strong> y riesgo del <strong>1%</strong> por operación, mi riesgo máximo es <strong>100$</strong> por trade. Si mi Stop Loss está a 30 pips, el tamaño de posición correcto es: 100$ / (30 pips × 10$/pip) = <strong>0.33 lotes</strong>. Esto me permite perder 10 trades seguidos y solo perder el 10% de mi cuenta.</p>
<div style="display:flex;justify-content:center;margin:20px 0"><svg width="100%" viewBox="0 0 500 200" style="background:#131722;border-radius:10px;border:1px solid #2a2a40">
<text x="250" y="20" fill="white" font-size="11" text-anchor="middle" font-weight="bold">CÁLCULO DE POSITION SIZING</text>
<rect x="30" y="40" width="200" height="60" rx="8" fill="#0d0d15" stroke="#3b82f6"/>
<text x="130" y="58" fill="#3b82f6" font-size="9" text-anchor="middle" font-weight="bold">DATOS</text>
<text x="130" y="75" fill="white" font-size="8" text-anchor="middle">Capital: 10.000$ | Riesgo: 1%</text>
<text x="130" y="90" fill="white" font-size="8" text-anchor="middle">Stop Loss: 30 pips</text>
<text x="250" y="70" fill="#f59e0b" font-size="14">→</text>
<rect x="270" y="40" width="200" height="60" rx="8" fill="#0d0d15" stroke="#26a69a"/>
<text x="370" y="58" fill="#26a69a" font-size="9" text-anchor="middle" font-weight="bold">RESULTADO</text>
<text x="370" y="75" fill="white" font-size="8" text-anchor="middle">Riesgo: 100$</text>
<text x="370" y="90" fill="#26a69a" font-size="10" text-anchor="middle" font-weight="bold">Tamaño: 0.33 lotes</text>
<rect x="30" y="115" width="440" height="70" rx="8" fill="#0d0d15" stroke="#2a2a40"/>
<text x="250" y="135" fill="white" font-size="9" text-anchor="middle" font-weight="bold">¿Qué pasa si pierdo 10 trades seguidos?</text>
<rect x="50" y="148" width="400" height="12" rx="3" fill="#2a2a40"/>
<rect x="50" y="148" width="360" height="12" rx="3" fill="#26a69a"/>
<text x="50" y="175" fill="#26a69a" font-size="8">90% restante (9.000$)</text>
<rect x="410" y="148" width="40" height="12" rx="3" fill="#ef4444"/>
<text x="430" y="175" fill="#ef4444" font-size="8" text-anchor="middle">10%</text>
</svg></div>`,

  "3-1-2": `<p>Creé mi <strong>plan de trading</strong> escrito con reglas claras: opero solo en London y NY killzones, máximo 2 trades/día, R:R mínimo 1:2, riesgo 1% por trade, y si pierdo 2 seguidas paro por hoy. Definí mis 3 setups favoritos y las condiciones exactas para cada entrada.</p>
<div style="display:flex;justify-content:center;margin:20px 0"><svg width="100%" viewBox="0 0 500 220" style="background:#131722;border-radius:10px;border:1px solid #2a2a40">
<text x="250" y="20" fill="white" font-size="11" text-anchor="middle" font-weight="bold">MI PLAN DE TRADING</text>
<rect x="20" y="35" width="220" height="80" rx="8" fill="#0d0d15" stroke="#3b82f6"/>
<text x="130" y="52" fill="#3b82f6" font-size="9" text-anchor="middle" font-weight="bold">REGLAS DE ENTRADA</text>
<text x="35" y="68" fill="white" font-size="7">• Solo en killzones (London/NY)</text>
<text x="35" y="80" fill="white" font-size="7">• Máximo 2 trades por día</text>
<text x="35" y="92" fill="white" font-size="7">• R:R mínimo 1:2</text>
<text x="35" y="104" fill="white" font-size="7">• Confirmación con patrón de vela</text>
<rect x="260" y="35" width="220" height="80" rx="8" fill="#0d0d15" stroke="#ef4444"/>
<text x="370" y="52" fill="#ef4444" font-size="9" text-anchor="middle" font-weight="bold">REGLAS DE SALIDA</text>
<text x="275" y="68" fill="white" font-size="7">• SL SIEMPRE antes de entrar</text>
<text x="275" y="80" fill="white" font-size="7">• 2 pérdidas seguidas = PARAR</text>
<text x="275" y="92" fill="white" font-size="7">• Riesgo máximo 1% por trade</text>
<text x="275" y="104" fill="white" font-size="7">• No mover el SL nunca</text>
<rect x="20" y="125" width="460" height="80" rx="8" fill="#0d0d15" stroke="#26a69a"/>
<text x="250" y="142" fill="#26a69a" font-size="9" text-anchor="middle" font-weight="bold">MIS 3 SETUPS</text>
<rect x="35" y="152" width="135" height="40" rx="5" fill="#131722" stroke="#2a2a40"/>
<text x="102" y="168" fill="white" font-size="7" text-anchor="middle" font-weight="bold">Setup 1</text>
<text x="102" y="182" fill="#787b86" font-size="6" text-anchor="middle">Envolvente en S/R</text>
<rect x="182" y="152" width="135" height="40" rx="5" fill="#131722" stroke="#2a2a40"/>
<text x="249" y="168" fill="white" font-size="7" text-anchor="middle" font-weight="bold">Setup 2</text>
<text x="249" y="182" fill="#787b86" font-size="6" text-anchor="middle">Martillo en Fibonacci</text>
<rect x="330" y="152" width="135" height="40" rx="5" fill="#131722" stroke="#2a2a40"/>
<text x="397" y="168" fill="white" font-size="7" text-anchor="middle" font-weight="bold">Setup 3</text>
<text x="397" y="182" fill="#787b86" font-size="6" text-anchor="middle">BOS + retest</text>
</svg></div>`,

};
