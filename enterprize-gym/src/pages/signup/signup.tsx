import { useState } from "react";

import { Stepper } from "../../shared/ui/molcoule/stepper/stepper";
import { SIGNUP_STEP_ENUM } from "./enums/signupStep";
import type { SIGNUP_STEP } from "./types/signupStep";

import GymInfoStep from "./components/signup/GymInfoStep";
import ManagerInfoStep from "./components/signup/ManagerInfoStep";
import SignupSuccessStep from "./components/signup/SignupSuccessStep";

import Classes from "./style/signup.module.css";

const SIGNUP_STEPS: SIGNUP_STEP[] = [
  SIGNUP_STEP_ENUM.managerInfo,
  SIGNUP_STEP_ENUM.gymInfo,
  SIGNUP_STEP_ENUM.success,
];

const STEP_CONFIG = {
  [SIGNUP_STEP_ENUM.managerInfo]: { label: "اطلاعات مدیر", index: 0},
  [SIGNUP_STEP_ENUM.gymInfo]: { label: "اطلاعات باشگاه", index: 1 },
  [SIGNUP_STEP_ENUM.success]: { label: "موفقیت", index: 2 },
};

export default function SignupPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set());
  const [gymData, setGymData] = useState<{
    name: string;
    phone: string;
    address: string;
    type: string;
  } | null>(null);
  const [managerData, setManagerData] = useState<{
     fullName: string;
  phone: string;
  pass: string;
  confirmPass:string
  } | null>(null);

  const handleGymInfoSubmit = (data: {
    name: string;
    phone: string;
    address: string;
    type: string;
  }) => {
    console.log("Gym info submitted:", data);
    // TODO: Backend needed - API call here
    // await signupGymApi(data);
    setGymData(data);
    setCompletedSteps((prev) => new Set([...prev, SIGNUP_STEP_ENUM.gymInfo]));
    setCurrentStep(2);
  };

  const handleManagerInfoSubmit = (data: {
     fullName: string;
  phone: string;
  pass: string;
  confirmPass:string
  }) => {
    console.log("Manager info submitted:", data);
    // TODO: Backend needed - API call here
    // await signupManagerApi(data);
    setManagerData(data);
    setCompletedSteps((prev) => new Set([...prev, SIGNUP_STEP_ENUM.managerInfo]));
    setCurrentStep(1);
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
      case SIGNUP_STEP_ENUM.managerInfo:
        return <ManagerInfoStep onSubmit={handleManagerInfoSubmit} />;
        case SIGNUP_STEP_ENUM.gymInfo:
        return <GymInfoStep onBack={handleBack} onSubmit={handleGymInfoSubmit} />;
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

       
          
      </div>
    </div>
  );
}