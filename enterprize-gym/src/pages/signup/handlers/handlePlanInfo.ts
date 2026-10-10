
import { SIGNUP_STEP_ENUM } from "../enums/signupStep";
import type { SIGNUP_STEP } from "../types/signupStep";
import type SUBSCRIPTION_CARD_PROPS_INTERFACE from "../../../entities/subscriptionCard/ui/interfaces/subscriptionCardPropsInterface";

interface HandleSubscriptionPlanSubmitProps {
  data: SUBSCRIPTION_CARD_PROPS_INTERFACE;
  setSelectedPlan: (
    data: SUBSCRIPTION_CARD_PROPS_INTERFACE
  ) => void;
  setCompletedSteps: React.Dispatch<
    React.SetStateAction<Set<SIGNUP_STEP>>
  >;
  setCurrentStep: (step: number) => void;
}

export const handleSubscriptionPlanSubmit = ({
  data,
  setSelectedPlan,
  setCompletedSteps,
  setCurrentStep,
}: HandleSubscriptionPlanSubmitProps): void => {
  console.log("Subscription plan selected:", data);

  // TODO: Backend needed - API call here
  // await signupSubscriptionPlanApi(data);

  setSelectedPlan(data);

  setCompletedSteps((prev) =>
    new Set([...prev, SIGNUP_STEP_ENUM.plan])
  );

  setCurrentStep(3);
};
