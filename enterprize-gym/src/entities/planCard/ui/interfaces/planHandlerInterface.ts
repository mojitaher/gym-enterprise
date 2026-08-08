import type { ACTIVITY_PERIOD_TYPE } from "../types/activityPeriodType";

export default interface PLAN_HANDLER_INTERFACE {
  setActivityPeriod: (
    value: ACTIVITY_PERIOD_TYPE | undefined
  ) => void;

  value: ACTIVITY_PERIOD_TYPE;
}