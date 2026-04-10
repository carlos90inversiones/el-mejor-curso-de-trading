"use client";
import { useState, useEffect } from "react";

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<Set<string>>(new Set());

  useEffect(() => {
    try {
      const saved = localStorage.getItem("trading-bookmarks");
      if (saved) setBookmarks(new Set(JSON.parse(saved)));
    } catch {/* */}
  }, []);

  const toggle = (id: string) => {
    setBookmarks(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      localStorage.setItem("trading-bookmarks", JSON.stringify(Array.from(next)));
      return next;
    });
  };

  return { bookmarks, toggle };
}

export default function BookmarkButton({ lessonId, bookmarks, toggle }: {
  lessonId: string;
  bookmarks: Set<string>;
  toggle: (id: string) => void;
}) {
  const isBookmarked = bookmarks.has(lessonId);

  return (
    <span
      role="button"
      onClick={(e) => { e.stopPropagation(); e.preventDefault(); toggle(lessonId); }}
      className={`p-1.5 rounded-lg transition cursor-pointer ${isBookmarked ? "text-amber-400 bg-amber-900/20" : "text-[#555] hover:text-amber-400"}`}
      title={isBookmarked ? "Quitar de favoritos" : "Agregar a favoritos"}
    >
      {isBookmarked ? "★" : "☆"}
    </span>
  );
}
