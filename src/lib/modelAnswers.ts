import { MODEL_ANSWERS_1_TO_3 } from "./modelAnswersPhase1to3";
import { MODEL_ANSWERS_4_TO_6 } from "./modelAnswersPhase4to6";
import { MODEL_ANSWERS_7_TO_9 } from "./modelAnswersPhase7to9";

export const MODEL_ANSWERS: Record<string, string> = {
  ...MODEL_ANSWERS_1_TO_3,
  ...MODEL_ANSWERS_4_TO_6,
  ...MODEL_ANSWERS_7_TO_9,
};
