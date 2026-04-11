"use client";
import { useState, useEffect, useCallback } from "react";

export function useProgress() {
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [quizScores, setQuizScores] = useState<Record<string, number>>({});

  useEffect(() => {
    try {
      const saved = localStorage.getItem("trading-course-progress");
      if (saved) {
        const data = JSON.parse(saved);
        setCompleted(new Set(data.completed || []));
        setQuizScores(data.quizScores || {});
      }
    } catch {/* ignore */}
  }, []);

  const save = useCallback((c: Set<string>, q: Record<string, number>) => {
    localStorage.setItem("trading-course-progress", JSON.stringify({
      completed: Array.from(c),
      quizScores: q,
    }));
  }, []);

  const markComplete = useCallback((id: string) => {
    setCompleted(prev => {
      const next = new Set(prev);
      next.add(id);
      save(next, quizScores);
      return next;
    });
  }, [quizScores, save]);

  const saveQuizScore = useCallback((id: string, score: number) => {
    setQuizScores(prev => {
      const next = { ...prev, [id]: Math.max(prev[id] || 0, score) };
      save(completed, next);
      return next;
    });
  }, [completed, save]);

  const resetProgress = useCallback(() => {
    setCompleted(new Set());
    setQuizScores({});
    localStorage.removeItem("trading-course-progress");
  }, []);

  return { completed, quizScores, markComplete, saveQuizScore, resetProgress };
}
