"use client";
import { useState, useCallback, useRef, useEffect } from "react";
import { getMaleSpanishVoice, fixSpanishForTTS } from "@/lib/voiceUtils";

interface AudioPlayerProps {
  text: string;
  title?: string;
}

export default function AudioPlayer({ text, title }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [supported, setSupported] = useState(true);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) {
      setSupported(false);
    }
    return () => {
      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // Clean HTML tags from text
  const cleanText = useCallback((html: string) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  }, []);

  const play = useCallback(() => {
    if (!window.speechSynthesis) return;

    if (isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
      setIsPlaying(true);
      return;
    }

    window.speechSynthesis.cancel();
    const clean = fixSpanishForTTS(cleanText(text));
    const utterance = new SpeechSynthesisUtterance(clean);

    // Voz masculina en espanol
    const maleVoice = getMaleSpanishVoice();
    if (maleVoice) utterance.voice = maleVoice;
    utterance.lang = "es-ES";
    utterance.rate = speed;
    utterance.pitch = 0.9;

    const totalLength = clean.length;
    let startTime = Date.now();

    utterance.onstart = () => {
      setIsPlaying(true);
      setIsPaused(false);
      startTime = Date.now();
      // Estimate progress based on time and speech rate
      intervalRef.current = setInterval(() => {
        const elapsed = (Date.now() - startTime) / 1000;
        const estimatedDuration = totalLength / (14 * speed); // ~14 chars/second
        const pct = Math.min(100, (elapsed / estimatedDuration) * 100);
        setProgress(pct);
      }, 200);
    };

    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
      setProgress(100);
      if (intervalRef.current) clearInterval(intervalRef.current);
      setTimeout(() => setProgress(0), 1000);
    };

    utterance.onerror = () => {
      setIsPlaying(false);
      setIsPaused(false);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  }, [text, speed, isPaused, cleanText]);

  const pause = useCallback(() => {
    if (window.speechSynthesis) {
      window.speechSynthesis.pause();
      setIsPaused(true);
      setIsPlaying(false);
    }
  }, []);

  const stop = useCallback(() => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      setIsPaused(false);
      setProgress(0);
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
  }, []);

  if (!supported) return null;

  return (
    <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border border-indigo-800/30 rounded-xl p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-lg">🔊</span>
          <div>
            <p className="text-white text-sm font-medium">Audio de la Leccion</p>
            {title && <p className="text-xs text-[#a0a0b8]">{title}</p>}
          </div>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-xs text-[#a0a0b8] mr-1">Velocidad:</span>
          {[0.75, 1, 1.25, 1.5].map(s => (
            <button key={s} onClick={() => setSpeed(s)}
              className={`text-xs px-2 py-1 rounded transition ${speed === s ? "bg-indigo-600 text-white" : "bg-[#1a1a2e] text-[#a0a0b8] hover:text-white"}`}>
              {s}x
            </button>
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 bg-[#0d0d15] rounded-full overflow-hidden mb-3">
        <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-200" style={{ width: `${progress}%` }} />
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-3">
        {!isPlaying && !isPaused && (
          <button onClick={play} className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition flex items-center gap-2 text-sm font-medium">
            <span>&#9654;</span> Reproducir
          </button>
        )}
        {isPlaying && (
          <button onClick={pause} className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg transition flex items-center gap-2 text-sm font-medium">
            <span>&#10074;&#10074;</span> Pausar
          </button>
        )}
        {isPaused && (
          <button onClick={play} className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition flex items-center gap-2 text-sm font-medium">
            <span>&#9654;</span> Continuar
          </button>
        )}
        {(isPlaying || isPaused) && (
          <button onClick={stop} className="bg-[#2a2a40] hover:bg-[#333] text-[#a0a0b8] px-4 py-2 rounded-lg transition text-sm">
            &#9632; Detener
          </button>
        )}
      </div>
    </div>
  );
}
