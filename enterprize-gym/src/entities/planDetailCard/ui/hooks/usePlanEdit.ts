import type { Dispatch, SetStateAction } from "react";
import type { PLAN_INTERFACE } from "../../../planCard/ui/interfaces/planInterface";

export function usePlanEdit(
  setPlans: Dispatch<SetStateAction<PLAN_INTERFACE[]>>
) {
  const onEdit = (updated: PLAN_INTERFACE) => {
    setPlans((prev) =>
      prev.map((plan) => (plan.id === updated.id ? updated : plan))
    );
  };
  return { onEdit };
}
