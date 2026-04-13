import { MODEL_ANSWERS_1_TO_3 } from "./modelAnswersPhase1to3";
import { MODEL_ANSWERS_7_TO_9 } from "./modelAnswersPhase7to9";

// Combine all model answers
export const MODEL_ANSWERS: Record<string, string> = {
  ...MODEL_ANSWERS_1_TO_3,
  ...MODEL_ANSWERS_7_TO_9,
};
