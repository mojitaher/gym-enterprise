import { useState } from "react";

import { Stepper } from "../../shared/ui/molcoule/stepper/stepper";
import { SIGNUP_STEP_ENUM } from "./enums/signupStep";
import type { SIGNUP_STEP } from "./types/signupStep";

import GymInfoStep from "./components/signup/GymInfoStep";
import ManagerInfoStep from "./components/signup/ManagerInfoStep";
import SignupSuccessStep from "./components/signup/SignupSuccessStep";

import Classes from "./style/signup.module.css";

const SIGNUP_STEPS: SIGNUP_STEP[] = [
  SIGNUP_STEP_ENUM.gymInfo,
  SIGNUP_STEP_ENUM.managerInfo,
  SIGNUP_STEP_ENUM.success,
];

const STEP_CONFIG = {
  [SIGNUP_STEP_ENUM.gymInfo]: { label: "اطلاعات باشگاه", index: 0 },
  [SIGNUP_STEP_ENUM.managerInfo]: { label: "اطلاعات مدیر", index: 1 },
  [SIGNUP_STEP_ENUM.success]: { label: "موفقیت", index: 2 },
} as const;

export default function SignupPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set());
  const [gymData, setGymData] = useState<{
    name: string;
    phone: string;
    password: string;
  } | null>(null);
  const [managerData, setManagerData] = useState<{
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
  } | null>(null);

  const handleGymInfoSubmit = (data: {
    name: string;
    phone: string;
    password: string;
  }) => {
    console.log("Gym info submitted:", data);
    // TODO: Backend needed - API call here
    // await signupGymApi(data);
    setGymData(data);
    setCompletedSteps((prev) => new Set([...prev, SIGNUP_STEP_ENUM.gymInfo]));
    setCurrentStep(1);
  };

  const handleManagerInfoSubmit = (data: {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
  }) => {
    console.log("Manager info submitted:", data);
    // TODO: Backend needed - API call here
    // await signupManagerApi(data);
    setManagerData(data);
    setCompletedSteps((prev) => new Set([...prev, SIGNUP_STEP_ENUM.managerInfo]));
    setCurrentStep(2);
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const steps = SIGNUP_STEPS.map((step) => ({
    key: step,
    label: STEP_CONFIG[step].label,
  }));

  const renderStepContent = () => {
    switch (SIGNUP_STEPS[currentStep]) {
      case SIGNUP_STEP_ENUM.gymInfo:
        return <GymInfoStep onSubmit={handleGymInfoSubmit} />;
      case SIGNUP_STEP_ENUM.managerInfo:
        return <ManagerInfoStep onSubmit={handleManagerInfoSubmit} />;
      case SIGNUP_STEP_ENUM.success:
        return <SignupSuccessStep gymData={gymData} managerData={managerData} />;
      default:
        return null;
    }
  };

  return (
    <div className={Classes.signupPage}>
      <div className={Classes.container}>
        <Stepper
          steps={steps}
          currentStep={currentStep}
          completedSteps={completedSteps}
        />

        <div className={Classes.content}>
          {renderStepContent()}
        </div>

        {currentStep > 0 && currentStep < SIGNUP_STEPS.length - 1 && (
          <button
            type="button"
            className={Classes.backButton}
            onClick={handleBack}
          >
            بازگشت
          </button>
        )}
      </div>
    </div>
  );
}