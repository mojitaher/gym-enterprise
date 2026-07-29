import clsx from "clsx";

import Classes from "./style/Checkbox.module.css";

import { CHECKBOX_SHAPE_STYLE } from "./constant/checkboxShapeConstant";

import type CHECKBOX_PROPS_INTERFACE from "./interfaces/checkboxInterface";

/**
 * Checkbox Component
 *
 * A reusable atomic checkbox rendered as a single button (no native input).
 *
 * Fully controlled — the checked state lives outside the component.
 * No state hooks are used (no useState / useEffect / useMemo / useCallback).
 *
 * The shape (square / circle) is resolved from CHECKBOX_SHAPE_STYLE, so the
 * component body carries no shape branching.
 *
 * Behavior:
 * - Clicking toggles: onChange is called with the next checked value.
 * - The checked state is exposed to CSS via the `data-checked` attribute.
 *
 * Example:
 *
 * <Checkbox
 *   shape="square"
 *   checked={agreed}
 *   onChange={(next) => setAgreed(next)}
 * />
 */

export const Checkbox = ({
  shape,
  checked,
  disabled,
  onChange,
}: CHECKBOX_PROPS_INTERFACE) => {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      className={clsx(Classes.checkbox, CHECKBOX_SHAPE_STYLE[shape])}
      data-checked={checked}
      disabled={disabled}
      onClick={() => onChange(!checked)}
    >
      <svg
        className={Classes.icon}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </button>
  );
};
