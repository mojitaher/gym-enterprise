import { useState } from "react";
import { data, useNavigate } from "react-router-dom";

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
import SubscriptionPlans from "./components/signup/subscriptionPlan";
import { handleSubscriptionPlanSubmit } from "./handlers/handlePlanInfo";
import type SUBSCRIPTION_CARD_PROPS_INTERFACE from "../../entities/subscriptionCard/ui/interfaces/subscriptionCardPropsInterface";

const EMPTY_MANAGER_INFO: ManagerInfo = {
  firstName: "",
  lastName: "",
  username: "",
  phone: "",
  pass: "",
  confirmPass: "",
};

const EMPTY_GYM_INFO: GymInfo = {
  name: "",
  phone: "",
  address: "",
  city:'',
  description:''
};
const plans = [
  {
    planNumber: 1,
    planName: "Unlimited",
    bestFor: "Best for Multi-Branch Gyms",
    coach: "Unlimited Coaches",
    trainee: "Unlimited Trainees",
    duration: "1-Year Subscription",
    price: "$2,999",
  },
  {
    planNumber: 2,
    planName: "Starter",
    bestFor: "Best for Small Gym",
    coach: "Up to 5 Coaches",
    trainee: "Up to 100 Trainees",
    duration: "1-Year Subscription",
    price: "$499",
  },
  {
    planNumber: 3,
    planName: "Professional",
    bestFor: "Best for Medium Gym",
    coach: "Up to 15 Coaches",
    trainee: "Up to 400 Trainees",
    duration: "1-Year Subscription",
    price: "$999",
  },
  {
    planNumber: 4,
    planName: "Enterprise",
    bestFor: "Best for Large Gym",
    coach: "Up to 30 Coaches",
    trainee: "Up to 1,000 Trainees",
    duration: "1-Year Subscription",
    price: "$1,700",
  },
];


export default function SignupPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<Set<SIGNUP_STEP>>(
    new Set()
  );
  const [gymData, setGymData] = useState<GymInfo | null>(null);
  const [managerData, setManagerData] = useState<ManagerInfo | null>(null);
  const [selectedPlan, setSelectedPlan] =
  useState<SUBSCRIPTION_CARD_PROPS_INTERFACE | null>(null);
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
        case SIGNUP_STEP_ENUM.plan:
        return (
    <SubscriptionPlans
      plans={plans}
      onBack={() => handleBack({ currentStep, setCurrentStep })}
      onSubmit={(plan) =>
        handleSubscriptionPlanSubmit({
          data: plan,
          setSelectedPlan,
          setCompletedSteps,
          setCurrentStep,
        })
      }
    />
        );
      case SIGNUP_STEP_ENUM.success:
        return <SignupSuccessStep gymData={gymData} managerData={managerData} planData={selectedPlan}/>;
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