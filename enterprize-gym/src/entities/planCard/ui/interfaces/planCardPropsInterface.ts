import type { ReactNode, MouseEvent } from "react";
import type { ACTIVITY_PERIOD_TYPE } from "../types/activityPeriodType";

export default interface PLAN_CARD_PROPS_INTERFACE {
  title: string;
  coach?: string;
  session?: number;
  present?: number;
  absent?: number;
  month: ACTIVITY_PERIOD_TYPE;
  onDelete?: (event: MouseEvent<HTMLButtonElement>) => void;
  onSubmit?: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  children?: ReactNode;
}
