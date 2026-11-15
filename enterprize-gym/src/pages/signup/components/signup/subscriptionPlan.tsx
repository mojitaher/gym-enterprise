
import { useState } from "react";

import { SubscriptionCard } from "../../../../entities/subscriptionCard/ui/subscriptionCard";
import { Button } from "../../../../shared/ui/atoms/button/button";

import { BUTTON_VARIANT_ENUM } from "../../../../shared/ui/atoms/button/enum/buttonVarient";
import { BUTTON_ENUMS_SIZE } from "../../../../shared/ui/atoms/button/enum/buttonSize";

import type { SUBSCRIPTION_PLAN_PROPS } from "../interfaces/subScriptionPlanProps";
import type SUBSCRIPTION_CARD_PROPS_INTERFACE from "../../../../entities/subscriptionCard/ui/interfaces/subscriptionCardPropsInterface";

import Classes from "../../style/signup.module.css";

export default function SubscriptionPlans({
  plans,
  onBack,
  onSubmit,
  isSubmitting,
  isLoading,
  error,
}: SUBSCRIPTION_PLAN_PROPS) {
  const [selectedPlan, setSelectedPlan] =
    useState<SUBSCRIPTION_CARD_PROPS_INTERFACE | null>(null);

  const handleSelect = (
    plan: SUBSCRIPTION_CARD_PROPS_INTERFACE
  ): void => {
    if (isSubmitting) return;

    setSelectedPlan(plan);
  };

  const handleSubmit = (): void => {
    if (isSubmitting || isLoading || !selectedPlan) return;

    onSubmit(selectedPlan);
  };

  return (
    <>
      {isLoading ? (
        <p>در حال دریافت پلن‌ها...</p>
      ) : (
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
      )}

      {error && (
        <p className={Classes.errorText}>
          {error}
        </p>
      )}

      <div className={Classes.buttonWrapper}>
        <Button
          type="button"
          variant={BUTTON_VARIANT_ENUM.secondary}
          size={BUTTON_ENUMS_SIZE.large}
          className={Classes.backButton}
          onClick={onBack}
          disabled={isSubmitting}
        >
          بازگشت
        </Button>

        <Button
          type="button"
          variant={BUTTON_VARIANT_ENUM.primary}
          size={BUTTON_ENUMS_SIZE.large}
          className={Classes.submitButton}
          onClick={handleSubmit}
          disabled={
            !selectedPlan ||
            isSubmitting ||
            isLoading
          }
        >
          {isSubmitting ? "در حال ارسال..." : "ادامه"}
        </Button>
      </div>
    </>
  );
}
