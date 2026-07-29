import clsx from "clsx";

import Classes from "../style/Stepper.module.css";

import { STEP_STATUS_STYLE } from "../constant/stepStatusConstant";

import type { STEP_ITEM_PROPS_INTERFACE } from "../interfaces/stepItemPropsInterface";

/**
 * StepItem
 *
 * A single step in the Stepper. The circular indicator is decorative — its look
 * comes entirely from `status` (complete / current / pending) via
 * STEP_STATUS_STYLE:
 *
 * - complete: the glass circle is filled blue.
 * - current: the glass circle holds a small gray dot in its center.
 * - pending: an empty glass circle.
 *
 * Every step is clickable; the parent owns what counts as complete.
 */
export default function StepItem({
  index,
  status,
  completed,
  onSelect,
}: STEP_ITEM_PROPS_INTERFACE) {
  return (
    <li
      className={clsx(
        Classes.item,
        STEP_STATUS_STYLE[status],
        completed && Classes.completed,
      )}
    >
      <button
        type="button"
        className={Classes.control}
        onClick={() => onSelect?.(index)}
      >
        <span className={Classes.indicator} />

      </button>

      <span className={Classes.connector} />
    </li>
  );
}
