
import { useState } from "react";

import { SubscriptionCard } from "../../../../entities/subscriptionCard/ui/subscriptionCard";
import { Button } from "../../../../shared/ui/atoms/button/button";

import { BUTTON_VARIANT_ENUM } from "../../../../shared/ui/atoms/button/enum/buttonVarient";
import { BUTTON_ENUMS_SIZE } from "../../../../shared/ui/atoms/button/enum/buttonSize";

import type { SUBSCRIPTION_PLAN_PROPS } from "./interfaces/subScriptionPlanProps";
import type SUBSCRIPTION_CARD_PROPS_INTERFACE from "../../../../entities/subscriptionCard/ui/interfaces/subscriptionCardPropsInterface";

import Classes from "../../style/signup.module.css";

export default function SubscriptionPlans({
  plans,
  onBack,
  onSubmit,
}: SUBSCRIPTION_PLAN_PROPS) {
  const [selectedPlan, setSelectedPlan] =
    useState<SUBSCRIPTION_CARD_PROPS_INTERFACE | null>(null);

  const handleSelect = (
    plan: SUBSCRIPTION_CARD_PROPS_INTERFACE
  ): void => {
    setSelectedPlan(plan);
  };

  const handleSubmit = (): void => {
    if (!selectedPlan) return;

    onSubmit(selectedPlan);
  };

  return (
    <>
      <div className={Classes.planGrid}>
        {plans.map((plan) => (
          <div
            key={plan.planNumber}
            className={
              selectedPlan?.planNumber === plan.planNumber
                ? Classes.selected
                : Classes.planWrapper
            }
            onClick={() => handleSelect(plan)}
          >
            <SubscriptionCard
              planNumber={plan.planNumber}
              planName={plan.planName}
              bestFor={plan.bestFor}
              coach={plan.coach}
              trainee={plan.trainee}
              duration={plan.duration}
              price={plan.price}
            />
          </div>
        ))}
      </div>

      <div className={Classes.buttonWrapper}>
        <Button
          type="button"
          variant={BUTTON_VARIANT_ENUM.secondary}
          size={BUTTON_ENUMS_SIZE.large}
          className={Classes.backButton}
          onClick={onBack}
        >
          بازگشت
        </Button>

        <Button
          type="button"
          variant={BUTTON_VARIANT_ENUM.primary}
          size={BUTTON_ENUMS_SIZE.large}
          className={Classes.submitButton}
          onClick={handleSubmit}
          disabled={!selectedPlan}
        >
          ادامه
        </Button>
      </div>
    </>
  );
}
