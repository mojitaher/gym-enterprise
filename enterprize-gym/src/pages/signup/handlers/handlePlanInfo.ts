import type { Dispatch, SetStateAction } from "react";

import { SIGNUP_STEP_ENUM } from "../enums/signupStep";

import type { SIGNUP_STEP } from "../types/signupStep";
import type { PlanBody } from "../api/interfaces/apiInterfaces";

import type SUBSCRIPTION_CARD_PROPS_INTERFACE from "../../../entities/subscriptionCard/ui/interfaces/subscriptionCardPropsInterface";

interface Params {
  data: SUBSCRIPTION_CARD_PROPS_INTERFACE;
  planId: string;
  registrationId: string | null;

  submitPlan: (
    registrationId: string,
    body: PlanBody
  ) => Promise<unknown>;

  setSelectedPlan: Dispatch<
    SetStateAction<SUBSCRIPTION_CARD_PROPS_INTERFACE | null>
  >;

  setCompletedSteps: Dispatch<SetStateAction<Set<SIGNUP_STEP>>>;
  setCurrentStep: Dispatch<SetStateAction<number>>;
}

export async function handleSubscriptionPlanSubmit({
  data,
  planId,
  registrationId,
  submitPlan,
  setSelectedPlan,
  setCompletedSteps,
  setCurrentStep,
}: Params): Promise<void> {
  if (!registrationId) {
    throw new Error("ابتدا اطلاعات مدیر را ثبت کنید");
  }

  await submitPlan(registrationId, { planId });

  setSelectedPlan(data);

  setCompletedSteps((prev) =>
    new Set(prev).add(SIGNUP_STEP_ENUM.plan)
  );

  setCurrentStep((prev) => prev + 1);
}