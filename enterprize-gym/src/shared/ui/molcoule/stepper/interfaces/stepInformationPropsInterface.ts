import type { STEP_STATUS_ENUM } from "../enums/stepStatus";


export interface STEP_INFORMATION_PROPS_INTERFACE {
  status: STEP_STATUS_ENUM;
  /** Whether this step's key is in the parent's completedSteps set. */
  completed: boolean;
}
