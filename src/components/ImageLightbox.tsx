"use client";
import { useEffect, useState, useCallback } from "react";

export default function ImageLightbox() {
  const [src, setSrc] = useState<string | null>(null);

  const close = useCallback(() => setSrc(null), []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Match <img> inside lesson content or chart containers
      if (target.tagName === "IMG" && (
        target.closest(".lesson-content") ||
        target.closest("[class*='chart']") ||
        target.closest("[class*='rounded']")
      )) {
        const imgSrc = (target as HTMLImageElement).src;
        if (imgSrc) {
          e.preventDefault();
          setSrc(imgSrc);
        }
      }
      // Also match <svg> inside lesson content (inline diagrams)
      const svg = target.closest("svg");
      if (svg && svg.closest(".lesson-content")) {
        e.preventDefault();
        const serializer = new XMLSerializer();
        const svgStr = serializer.serializeToString(svg);
        const blob = new Blob([svgStr], { type: "image/svg+xml" });
        setSrc(URL.createObjectURL(blob));
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    if (!src) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [src, close]);

  if (!src) return null;

  return (
    <div onClick={close} className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4 cursor-zoom-out animate-fade">
      <button onClick={close} className="absolute top-4 right-4 text-white text-3xl hover:text-[#a0a0b8] transition z-10">
        ✕
      </button>
      <img src={src} alt="Ampliada" className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl" />
    </div>
  );
}
