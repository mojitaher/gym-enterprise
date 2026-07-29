import { STEP_STATUS_ENUM } from "../enums/stepStatus";

import Classes from "../style/Stepper.module.css";

/**
 * STEP_STATUS_STYLE
 *
 * Maps each step status to its corresponding style class, so the
 * component body carries no status branching. Mirrors the
 * INPUT_PASSWORD_VISIBILITY_TOGGLE / CHECKBOX_SHAPE_STYLE pattern.
 */
export const STEP_STATUS_STYLE = {
  [STEP_STATUS_ENUM.complete]: Classes.complete,
  [STEP_STATUS_ENUM.current]: Classes.current,
  [STEP_STATUS_ENUM.pending]: Classes.pending,
} as const;
