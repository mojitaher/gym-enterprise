import Classes from "./style/Stepper.module.css";
import StepItem from "./components/stepItem";
import { resolveStepInformation } from "./handler/resolveStepInformation";
import type { STEPPER_PROPS_INTERFACE } from "./interfaces/stepperPropsInterface";

export const Stepper = ({
  steps,
  currentStep,
  completedSteps,
  onStepChange,
}: STEPPER_PROPS_INTERFACE) => {
  return (
    <ol className={Classes.stepper}>
      {steps.map((step, index) => (
        <StepItem
          key={step.key}
          index={index}
          onSelect={onStepChange}
          {...resolveStepInformation(index, step.key, currentStep, completedSteps)}
        />
      ))}
    </ol>
  );
};
