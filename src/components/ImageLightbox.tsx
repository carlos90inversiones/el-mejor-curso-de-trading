"use client";
import { useEffect, useState, useCallback } from "react";

export default function ImageLightbox() {
  const [content, setContent] = useState<{ type: "img"; src: string } | { type: "svg"; html: string } | null>(null);

  const close = useCallback(() => setContent(null), []);

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
          e.stopPropagation();
          setContent({ type: "img", src: imgSrc });
        }
        return;
      }

      // Match <svg> inside lesson content (inline diagrams)
      const svg = target.closest("svg");
      if (svg && svg.closest(".lesson-content")) {
        e.preventDefault();
        e.stopPropagation();
        // Clone the SVG and remove fixed dimensions so it scales
        const clone = svg.cloneNode(true) as SVGElement;
        clone.removeAttribute("width");
        clone.removeAttribute("height");
        clone.setAttribute("style", "width:100%;height:100%;");
        // Preserve viewBox for proper scaling
        if (!clone.getAttribute("viewBox")) {
          const w = svg.getAttribute("width") || "400";
          const h = svg.getAttribute("height") || "200";
          clone.setAttribute("viewBox", `0 0 ${w} ${h}`);
        }
        const serializer = new XMLSerializer();
        setContent({ type: "svg", html: serializer.serializeToString(clone) });
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    if (!content) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [content, close]);

  if (!content) return null;

  return (
    <div onClick={close} className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-6 cursor-zoom-out animate-fade">
      <button onClick={close} className="absolute top-4 right-4 text-white text-3xl hover:text-[#a0a0b8] transition z-10 bg-black/50 w-10 h-10 rounded-full flex items-center justify-center">
        ✕
      </button>
      {content.type === "img" ? (
        <img src={content.src} alt="Ampliada" className="max-w-[95vw] max-h-[90vh] object-contain rounded-lg shadow-2xl" />
      ) : (
        <div
          className="w-full max-w-[95vw] max-h-[90vh] flex items-center justify-center"
          style={{ background: "#131722", borderRadius: 12, padding: 24 }}
          onClick={e => e.stopPropagation()}
        >
          <div
            dangerouslySetInnerHTML={{ __html: content.html }}
            className="w-full h-full flex items-center justify-center [&>svg]:w-full [&>svg]:h-auto [&>svg]:max-h-[80vh]"
          />
        </div>
      )}
    </div>
  );
}
