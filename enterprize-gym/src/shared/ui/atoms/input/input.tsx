import clsx from "clsx";
import Classes from "./style/Input.module.css";
import { INPUT_MODE_STYLE } from "./constant/inputModeConstant";
import type INPUT_PROPS_INTERFACE from "./interfaces/inputInterface";

/**
 * Input Component
 *
 * A reusable atomic input component used to collect user input.
 *
 * Uncontrolled — the DOM owns the value. Pass `defaultValue` for the initial
 * value and read the current value through `ref` (ref.current.value) when you
 * need it, instead of tracking every keystroke in state.
 *
 * Supports:
 * - mode (success, warn, error)
 * - size (small, medium, large)
 * - disabled state
 * - placeholder
 * - defaultValue (uncontrolled initial value)
 * - ref to the underlying <input>
 *
 * Example:
 *
 * const inputRef = useRef<HTMLInputElement>(null);
 *
 * <Input
 *   ref={inputRef}
 *   type="text"
 *   mode="success"
 *   size="medium"
 *   placeholder="Username"
 *   defaultValue=""
 * />
 */

export const Input = ({
  title,
  type,
  mode,
  size,
  placeholder,
  disabled,
  defaultValue,
  ref,
  className,
  pattern,
  inputMode,
  errorMsg,
  required
}: INPUT_PROPS_INTERFACE) => {
  return (
    <div className={Classes.wrapper}>
    <p className={clsx(Classes.title)}>
      {title}
      </p>

    <input
      aria-label={type}
      ref={ref}
   inputMode={inputMode}
      pattern={pattern}
      className={clsx(
        Classes.input,
        mode && INPUT_MODE_STYLE[mode],
        Classes[size],
        className
      )}
      required={required}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      defaultValue={defaultValue}
      onInvalid={(event) => {
  event.currentTarget.classList.add(Classes.warn);
  console.log('warn')

  event.currentTarget.setCustomValidity(errorMsg);
}}
  onInput={(event) => {
  event.currentTarget.classList.remove(Classes.warn);
  event.currentTarget.setCustomValidity("");
}}
    />

    </div>
  );
};
