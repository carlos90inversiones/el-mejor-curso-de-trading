// ============================================================================
// EL MEJOR CURSO DE TRADING DEL MUNDO - Base de Datos del Curso
// ============================================================================

export interface Quiz {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  content: string;
  keyPoints: string[];
  quiz: Quiz[];
  practicalExercise?: string;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  lessons: Lesson[];
}

export interface Phase {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  gradient: string;
  modules: Module[];
}

import { PHASE_1 } from "./phases/phase1";
import { PHASE_2 } from "./phases/phase2";
import { PHASE_3 } from "./phases/phase3";
import { PHASE_4 } from "./phases/phase4";
import { PHASE_5 } from "./phases/phase5";
import { PHASE_6 } from "./phases/phase6";
import { PHASE_7 } from "./phases/phase7";

export const COURSE_DATA: Phase[] = [
  PHASE_1,
  PHASE_2,
  PHASE_3,
  PHASE_4,
  PHASE_5,
  PHASE_6,
  PHASE_7,
];

export function getTotalLessons(): number {
  return COURSE_DATA.reduce((total, phase) =>
    total + phase.modules.reduce((modTotal, mod) => modTotal + mod.lessons.length, 0), 0
  );
}

export function getTotalQuizzes(): number {
  return COURSE_DATA.reduce((total, phase) =>
    total + phase.modules.reduce((modTotal, mod) =>
      modTotal + mod.lessons.reduce((lessonTotal, lesson) => lessonTotal + lesson.quiz.length, 0), 0
    ), 0
  );
}

export function getAllLessonIds(): string[] {
  const ids: string[] = [];
  COURSE_DATA.forEach(phase => {
    phase.modules.forEach(mod => {
      mod.lessons.forEach(lesson => {
        ids.push(lesson.id);
      });
    });
  });
  return ids;
}
