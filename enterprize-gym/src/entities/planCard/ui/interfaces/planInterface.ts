import type { ACTIVITY_PERIOD_TYPE } from "../types/activityPeriodType";

export interface PLAN_INTERFACE {
  id: number;
  title: string;
  coach?: string;
  session?: number;
  present?: number;
  absent?: number;
  month:ACTIVITY_PERIOD_TYPE;
}
