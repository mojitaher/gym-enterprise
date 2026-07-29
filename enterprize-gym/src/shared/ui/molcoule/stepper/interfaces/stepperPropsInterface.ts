import type { STEP_INTERFACE } from "./stepInterface";

export interface STEPPER_PROPS_INTERFACE {
  steps: readonly STEP_INTERFACE[];
  currentStep: number;
  /** Parent owns this — add step keys to mark steps complete. */
  completedSteps: Set<string>;
  onStepChange?: (index: number) => void;
}
