import clsx from "clsx";
import Classes from "./style/Input.module.css";
import { INPUT_MODE_STYLE } from "./constant/inputModeConstant";
import type INPUT_PROPS_INTERFACE from "./interfaces/inputInterface";

/**
 * Input Component - Controlled
 *
 * value و onChange از بیرون کنترل میشه.
 * اگر state داخل والد باشه، ریرندر فقط همون کامپوننت رو تحت تاثیر قرار میده.
 */

export const Input = ({
  title,
  type,
  mode,
  size,
  placeholder,
  disabled,
  value,
  onChange,
  className,
  pattern,
  inputMode,
  errorMsg,
  required,
}: INPUT_PROPS_INTERFACE) => {
  return (
    <div className={Classes.wrapper}>
      <p className={clsx(Classes.title)}>{title}</p>

      <input
        aria-label={type}
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
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        onInvalid={(event) => {
          event.currentTarget.classList.add(Classes.warn);
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
