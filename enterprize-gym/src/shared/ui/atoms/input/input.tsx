import clsx from "clsx";
import Classes from "./style/Input.module.css";
import type INPUT_PROPS_INTERFACE from "./interfaces/inputInterface";

/**
 * Input Component
 *
 * A reusable atomic input component used to collect user input.
 *
 * Supports:
 * - mode (success, warn, error)
 * - size (small, medium, large)
 * - disabled state
 * - placeholder
 * - controlled value
 * - change handler
 *
 * Example:
 *
 * <Input
 *   mode="success"
 *   size="medium"
 *   placeholder="Username"
 * />
 */

export const Input = ({
  type,
  mode,
  size,
  value,
  placeholder,
  disabled,
  onChange,
}: INPUT_PROPS_INTERFACE) => {
  return (
    <input
      className={clsx(
        Classes.input,
        Classes[mode],
        Classes[size]
      )}
      type={type}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
    />
  );
};