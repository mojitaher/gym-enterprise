import type { Dispatch, SetStateAction } from "react";
import type { STEP_INTERFACE } from "../interfaces/stepInterface";

export function useStepNavigation(
  currentStep: number,
  setCurrentStep: Dispatch<SetStateAction<number>>,
  setCompletedSteps: Dispatch<SetStateAction<Set<string>>>,
  steps: readonly STEP_INTERFACE[]
) {
  const goToStep = (step: number) => setCurrentStep(step);

  const nextStep = () => {
    if (currentStep >= steps.length - 1) return;
    setCompletedSteps((prev) => new Set(prev).add(steps[currentStep].key));
    setCurrentStep(currentStep + 1);
  };

  const previousStep = () =>
    setCurrentStep((current) => Math.max(0, current - 1));

  return { goToStep, nextStep, previousStep };
}
