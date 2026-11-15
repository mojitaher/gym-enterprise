
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Stepper } from "../../shared/ui/molcoule/stepper/stepper";

import { SIGNUP_STEP_ENUM } from "./enums/signupStep";
import { SIGNUP_STEPS, STEPPER_STEPS } from "./constants/signupSteps";

import type { SIGNUP_STEP } from "./types/signupStep";
import type { GymInfo } from "./types/gymInfo";
import type { ManagerInfo } from "./types/managerInfo";

import type SUBSCRIPTION_CARD_PROPS_INTERFACE from "../../entities/subscriptionCard/ui/interfaces/subscriptionCardPropsInterface";

import GymInfoStep from "./components/signup/GymInfoStep";
import ManagerInfoStep from "./components/signup/ManagerInfoStep";
import SignupSuccessStep from "./components/signup/SignupSuccessStep";
import SubscriptionPlans from "./components/signup/subscriptionPlan";

import { handleGymInfoSubmit } from "./handlers/handleGymInfoSubmit";
import { handleManagerInfoSubmit } from "./handlers/handleManagerInfoSubmit";
import { handleBack } from "./handlers/handleBack";
import { handleBackToLogin } from "./handlers/handleBackToLogin";
import { handleSubscriptionPlanSubmit } from "./handlers/handlePlanInfo";

import { useRegistrationId } from "./hooks/useRegistrationId";
import { useUpdateOwner } from "./hooks/useUpdateOwner";
import { useSubmitPlan } from "./hooks/useSubmitPlan";
import { useGetPlans } from "./hooks/useGetPlans";
import { useRegisterGym } from "./hooks/useRegesterGyms";
import { useRegisterOwner } from "./hooks/useRegesterOwner";

import Classes from "./style/signup.module.css";

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
  city: "",
  description: "",
};

export default function SignupPage() {
  const [currentStep, setCurrentStep] = useState(0);

  const [completedSteps, setCompletedSteps] = useState<Set<SIGNUP_STEP>>(
    new Set()
  );

  const [gymData, setGymData] = useState<GymInfo | null>(null);
  const [managerData, setManagerData] = useState<ManagerInfo | null>(null);

  const [selectedPlan, setSelectedPlan] =
    useState<SUBSCRIPTION_CARD_PROPS_INTERFACE | null>(null);

  const {
    registrationId,
    saveRegistrationId,
    
  } = useRegistrationId();

  const navigate = useNavigate();

  // React Query Hooks

  const registerOwnerMutation = useRegisterOwner();
  const updateOwnerMutation = useUpdateOwner();
  const registerGymMutation = useRegisterGym();
  const submitPlanMutation = useSubmitPlan();

  const plansQuery = useGetPlans();

  // دریافت آرایه پلن‌ها از پاسخ بک‌اند

  const apiPlans = plansQuery.data?.data ?? [];

  // تبدیل پلن‌های بک‌اند به فرمت کارت‌های فرانت‌اند

  const plans: SUBSCRIPTION_CARD_PROPS_INTERFACE[] = apiPlans.map(
    (plan, index) => ({
      planNumber: index + 1,
      planName: plan.name,
      bestFor: plan.description,
      coach: `Up to ${plan.maxCoaches} Coaches`,
      trainee: `Up to ${plan.maxAthletes ?? "Unlimited"} Athletes`,
      duration: `${plan.durationInDays} Days`,
      price: `${Number(plan.priceToman).toLocaleString("fa-IR")} تومان`,
    })
  );

  // ثبت یا ویرایش اطلاعات مدیر

  const handleManagerSubmit = (data: ManagerInfo) =>
  handleManagerInfoSubmit({
    data,
    registrationId,
   isEditing:
  completedSteps.has(SIGNUP_STEP_ENUM.managerInfo) ||
  Boolean(registrationId),
    

    registerOwner: (body) =>
      registerOwnerMutation.mutateAsync(body),

    updateOwner: (id, body) =>
      updateOwnerMutation.mutateAsync({
        registrationId: id,
        body,
      }),

    setRegistrationId: saveRegistrationId,
    setManagerData,
    setCompletedSteps,
    setCurrentStep,
    
  }).catch(console.error);
  // ثبت اطلاعات باشگاه

  const handleGymSubmit = (data: GymInfo) =>
    handleGymInfoSubmit({
      data,
      registrationId,
      registerGym: (id, body) =>
        registerGymMutation.mutateAsync({
          registrationId: id,
          body,
        }),
      setGymData,
      setCompletedSteps,
      setCurrentStep,
    }).catch(console.error);

  // ثبت پلن انتخاب‌شده

  const handlePlanSubmit = (
    plan: SUBSCRIPTION_CARD_PROPS_INTERFACE
  ) => {
    const apiPlan = apiPlans[plan.planNumber - 1];

    if (!apiPlan || !registrationId) return;

    return handleSubscriptionPlanSubmit({
      data: plan,
      planId: apiPlan.id,
      registrationId,
      submitPlan: (id, body) =>
        submitPlanMutation.mutateAsync({
          registrationId: id,
          body,
        }),
      setSelectedPlan,
      setCompletedSteps,
      setCurrentStep,
    }).catch(console.error)
  };

  // نمایش محتوای مراحل ثبت‌نام

  const renderStepContent = () => {
    switch (SIGNUP_STEPS[currentStep]) {
      case SIGNUP_STEP_ENUM.managerInfo:
        return (
          <ManagerInfoStep
            initialValues={managerData ?? EMPTY_MANAGER_INFO}
            onBack={() => handleBackToLogin({ navigate })}
            onSubmit={handleManagerSubmit}
            isSubmitting={
              registerOwnerMutation.isPending ||
              updateOwnerMutation.isPending
            }
            error={
              registerOwnerMutation.error?.message ||
              updateOwnerMutation.error?.message
            }
          />
        );

      case SIGNUP_STEP_ENUM.gymInfo:
        return (
          <GymInfoStep
            initialValues={gymData ?? EMPTY_GYM_INFO}
            onBack={() => handleBack({ currentStep, setCurrentStep })}
            onSubmit={handleGymSubmit}
            isSubmitting={registerGymMutation.isPending}
            error={registerGymMutation.error?.message}
          />
        );

      case SIGNUP_STEP_ENUM.plan:
        return (
          <SubscriptionPlans
            plans={plans}
            onBack={() => handleBack({ currentStep, setCurrentStep })}
            onSubmit={handlePlanSubmit}
            isLoading={plansQuery.isLoading}
            isSubmitting={submitPlanMutation.isPending}
            error={
              plansQuery.error?.message ||
              submitPlanMutation.error?.message
            }
          />
        );

      case SIGNUP_STEP_ENUM.success:
        return (
          <SignupSuccessStep
            gymData={gymData}
            managerData={managerData}
            planData={selectedPlan}
          />
        );

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
