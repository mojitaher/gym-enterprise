interface HandleBackProps {
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

export const handleBack = ({
  currentStep,
  setCurrentStep,
}: HandleBackProps) => {
  if (currentStep > 0) {
    setCurrentStep(currentStep - 1);
  }
};