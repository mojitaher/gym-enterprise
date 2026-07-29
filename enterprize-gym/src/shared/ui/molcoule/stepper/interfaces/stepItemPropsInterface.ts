
import type { STEP_STATUS_ENUM } from "../enums/stepStatus";

/**
 * Props for a single rendered step item.
 */
export interface STEP_ITEM_PROPS_INTERFACE {
  index: number;


  status: STEP_STATUS_ENUM;

  /** Whether this step is complete — drives the current step's fill color. */
  completed: boolean;

  onSelect?: (index: number) => void;
}
