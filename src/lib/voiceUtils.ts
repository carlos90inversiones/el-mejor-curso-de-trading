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
 * Configura un SpeechSynthesisUtterance con voz masculina en espanol.
 */
export function createMaleUtterance(text: string, rate: number = 0.95): SpeechSynthesisUtterance {
  const utterance = new SpeechSynthesisUtterance(text);
  const voice = getMaleSpanishVoice();
  if (voice) utterance.voice = voice;
  utterance.lang = "es-ES";
  utterance.rate = rate;
  utterance.pitch = 0.9; // Slightly lower pitch for more masculine sound
  return utterance;
}
