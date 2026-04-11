"use client";
import { useEffect } from "react";

/**
 * Preloads speech synthesis voices so they're ready when needed.
 * Browsers often need a small delay before voices are available.
 */
export default function VoicePreloader() {
  useEffect(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;

    // Force load voices
    const loadVoices = () => {
      window.speechSynthesis.getVoices();
    };

    loadVoices();
    window.speechSynthesis.addEventListener("voiceschanged", loadVoices);

    return () => {
      window.speechSynthesis.removeEventListener("voiceschanged", loadVoices);
    };
  }, []);

  return null;
}
