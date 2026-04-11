/**
 * Selecciona una voz masculina en espanol para TTS.
 * Prioriza voces que contengan "male", "hombre", "Jorge", "Pablo", "Andres", "Diego"
 * o que NO contengan "female", "mujer", "woman".
 * Fallback: cualquier voz en espanol.
 */
export function getMaleSpanishVoice(): SpeechSynthesisVoice | null {
  if (typeof window === "undefined" || !window.speechSynthesis) return null;

  const voices = window.speechSynthesis.getVoices();
  const spanishVoices = voices.filter(v => v.lang.startsWith("es"));

  if (spanishVoices.length === 0) return voices[0] || null;

  // Male name patterns common in TTS engines
  const maleNames = ["jorge", "pablo", "andres", "diego", "carlos", "enrique", "miguel", "pedro", "raul", "sergio", "male", "hombre", "masculine"];
  const femaleNames = ["female", "mujer", "woman", "lucia", "elena", "maria", "carmen", "paulina", "monica", "conchita", "penelope"];

  // Priority 1: Explicitly male voice
  const explicitMale = spanishVoices.find(v => {
    const name = v.name.toLowerCase();
    return maleNames.some(m => name.includes(m));
  });
  if (explicitMale) return explicitMale;

  // Priority 2: Voice that is NOT explicitly female
  const notFemale = spanishVoices.find(v => {
    const name = v.name.toLowerCase();
    return !femaleNames.some(f => name.includes(f));
  });
  if (notFemale) return notFemale;

  // Priority 3: Any Spanish voice (better than nothing)
  return spanishVoices[0];
}

/**
 * Corrige texto sin acentos/ñ para que el TTS lo pronuncie correctamente.
 * Reemplaza palabras comunes que suenan mal sin acentos.
 */
export function fixSpanishForTTS(text: string): string {
  // Remove HTML tags first
  let clean = text.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

  // Fix common words missing accents/ñ for TTS pronunciation
  const replacements: [RegExp, string][] = [
    [/\bano\b/gi, "año"],
    [/\banos\b/gi, "años"],
    [/\bmanana\b/gi, "mañana"],
    [/\bsenal\b/gi, "señal"],
    [/\bsenales\b/gi, "señales"],
    [/\bespana\b/gi, "España"],
    [/\btambien\b/gi, "también"],
    [/\bmas\b/gi, "más"],
    [/\bestara\b/gi, "estará"],
    [/\besta\b/g, "está"],
    [/\basi\b/gi, "así"],
    [/\bque\b/g, "qué"],
    [/\bcomo\b/g, "cómo"],
    [/\bpor que\b/gi, "por qué"],
    [/\banalisis\b/gi, "análisis"],
    [/\btecnico\b/gi, "técnico"],
    [/\btecnica\b/gi, "técnica"],
    [/\bgestion\b/gi, "gestión"],
    [/\bposicion\b/gi, "posición"],
    [/\boperacion\b/gi, "operación"],
    [/\boperaciones\b/gi, "operaciones"],
    [/\bevaluacion\b/gi, "evaluación"],
    [/\binformacion\b/gi, "información"],
    [/\bconfirmacion\b/gi, "confirmación"],
    [/\bcontinuacion\b/gi, "continuación"],
    [/\bdireccion\b/gi, "dirección"],
    [/\brelacion\b/gi, "relación"],
    [/\baccion\b/gi, "acción"],
    [/\bcorreccion\b/gi, "corrección"],
    [/\bruptura\b/gi, "ruptura"],
    [/\balgoritmico\b/gi, "algorítmico"],
    [/\beconomico\b/gi, "económico"],
    [/\beconomia\b/gi, "economía"],
    [/\bultimo\b/gi, "último"],
    [/\bultima\b/gi, "última"],
    [/\bminimo\b/gi, "mínimo"],
    [/\bmaximo\b/gi, "máximo"],
    [/\bfacil\b/gi, "fácil"],
    [/\bdificil\b/gi, "difícil"],
    [/\brapido\b/gi, "rápido"],
    [/\bbasico\b/gi, "básico"],
    [/\bclasico\b/gi, "clásico"],
    [/\bhistorico\b/gi, "histórico"],
    [/\bpsicologia\b/gi, "psicología"],
    [/\bestrategia\b/gi, "estrategia"],
    [/\bfinancieros\b/gi, "financieros"],
    [/\bexplicacion\b/gi, "explicación"],
    [/\bpractico\b/gi, "práctico"],
    [/\bpractica\b/gi, "práctica"],
    [/\bnumero\b/gi, "número"],
    [/\bnumeros\b/gi, "números"],
    [/\bperiodo\b/gi, "período"],
    [/\bdeberia\b/gi, "debería"],
    [/\bhabria\b/gi, "habría"],
    [/\bpodria\b/gi, "podría"],
    [/\btendria\b/gi, "tendría"],
    [/\bnecesitaras\b/gi, "necesitarás"],
    [/\bestaras\b/gi, "estarás"],
    [/\btendras\b/gi, "tendrás"],
    [/\bpodras\b/gi, "podrás"],
    [/\bsabras\b/gi, "sabrás"],
    [/\bveras\b/gi, "verás"],
    [/\baqui\b/gi, "aquí"],
    [/\bahi\b/gi, "ahí"],
    [/\bdonde\b/gi, "dónde"],
    [/\bcuando\b/gi, "cuándo"],
    [/\bcuantos\b/gi, "cuántos"],
    [/\bcuanto\b/gi, "cuánto"],
    [/\bexito\b/gi, "éxito"],
    [/\binstitucional\b/gi, "institucional"],
  ];

  for (const [pattern, replacement] of replacements) {
    clean = clean.replace(pattern, replacement);
  }

  return clean;
}

/**
 * Configura un SpeechSynthesisUtterance con voz masculina en espanol.
 */
export function createMaleUtterance(text: string, rate: number = 0.95): SpeechSynthesisUtterance {
  const fixed = fixSpanishForTTS(text);
  const utterance = new SpeechSynthesisUtterance(fixed);
  const voice = getMaleSpanishVoice();
  if (voice) utterance.voice = voice;
  utterance.lang = "es-ES";
  utterance.rate = rate;
  utterance.pitch = 0.9;
  return utterance;
}
