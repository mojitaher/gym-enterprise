import type { Dispatch, SetStateAction } from "react";
import type { PLAN_INTERFACE } from "../interfaces/planInterface";

export function usePlanDelete(
  setPlans: Dispatch<SetStateAction<PLAN_INTERFACE[]>>
) {
  const onDelete = (id: number) => {
    setPlans((prev) => prev.filter((plan) => plan.id !== id));
  };
  return { onDelete };
}
