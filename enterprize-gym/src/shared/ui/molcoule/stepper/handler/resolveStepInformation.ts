import { STEP_STATUS_ENUM } from "../enums/stepStatus";
import type { STEP_INFORMATION_PROPS_INTERFACE } from "../interfaces/stepInformationPropsInterface";

export const resolveStepInformation = (
  index: number,
  key: string,
  currentStep: number,
  completedSteps: ReadonlySet<string>,
): STEP_INFORMATION_PROPS_INTERFACE => {
  const completed = completedSteps.has(key);

  return {
    status:
      index === currentStep
        ? STEP_STATUS_ENUM.current
        : completed
        ? STEP_STATUS_ENUM.complete
        : STEP_STATUS_ENUM.pending,

    completed,
  };
};