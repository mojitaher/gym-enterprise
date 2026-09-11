import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Stepper } from "../../shared/ui/molcoule/stepper/stepper";
import { SIGNUP_STEP_ENUM } from "./enums/signupStep";
import { SIGNUP_STEPS, STEPPER_STEPS } from "./constants/signupSteps";
import type { SIGNUP_STEP } from "./types/signupStep";
import type { GymInfo } from "./types/gymInfo";
import type { ManagerInfo } from "./types/managerInfo";

import GymInfoStep from "./components/signup/GymInfoStep";
import ManagerInfoStep from "./components/signup/ManagerInfoStep";
import SignupSuccessStep from "./components/signup/SignupSuccessStep";

import Classes from "./style/signup.module.css";

import { handleGymInfoSubmit } from "./handlers/handleGymInfoSubmit";
import { handleManagerInfoSubmit } from "./handlers/handleManagerInfoSubmit";
import { handleBack } from "./handlers/handleBack";
import { handleBackToLogin } from "./handlers/handleBackToLogin";

const EMPTY_MANAGER_INFO: ManagerInfo = {
  fullName: "",
  phone: "",
  pass: "",
  confirmPass: "",
};

const EMPTY_GYM_INFO: GymInfo = {
  name: "",
  phone: "",
  address: "",
  type: "",
};

export default function SignupPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<Set<SIGNUP_STEP>>(
    new Set()
  );
  const [gymData, setGymData] = useState<GymInfo | null>(null);
  const [managerData, setManagerData] = useState<ManagerInfo | null>(null);
  const navigate = useNavigate();

  const renderStepContent = () => {
    switch (SIGNUP_STEPS[currentStep]) {
      case SIGNUP_STEP_ENUM.managerInfo:
        return (
          <ManagerInfoStep
            initialValues={managerData ?? EMPTY_MANAGER_INFO}
            onBack={() => handleBackToLogin({ navigate })}
            onSubmit={(data) =>
              handleManagerInfoSubmit({
                data,
                setManagerData,
                setCompletedSteps,
                setCurrentStep,
              })
            }
          />
        );
      case SIGNUP_STEP_ENUM.gymInfo:
        return (
          <GymInfoStep
            initialValues={gymData ?? EMPTY_GYM_INFO}
            onBack={() => handleBack({ currentStep, setCurrentStep })}
            onSubmit={(data) =>
              handleGymInfoSubmit({
                data,
                setGymData,
                setCompletedSteps,
                setCurrentStep,
              })
            }
          />
        );
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
          steps={STEPPER_STEPS}
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