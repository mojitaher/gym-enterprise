import { useState } from "react";

import clsx from "clsx";

import InputClasses from "../../atoms/input/style/Input.module.css";
import { INPUT_MODE_STYLE } from "../../atoms/input/constant/inputModeConstant";

import Classes from "./styles/InputPassword.module.css";

import eye from "../../../../assets/icons/eye.svg";
import eye_off from "../../../../assets/icons/eye_off.svg";

import type INPUT_PASSWORD_PROPS_INTERFACE from "./interfaces/passwordInputinterfaces";


export const InputPassword = ({
  title,
  mode,
  size,
  placeholder,
  disabled,
  value,
  onChange,
  pattern,
  required,
  errorMsg,
  className,
}: INPUT_PASSWORD_PROPS_INTERFACE) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className={clsx(Classes.container, Classes[size])}>
      {title && <p className={Classes.title}>{title}</p>}

      <div className={Classes.inputWrapper}>
        <input
          type={visible ? "text" : "password"}
          inputMode="text"
          pattern={pattern}
          className={clsx(
            InputClasses.input,
            mode && INPUT_MODE_STYLE[mode],
            InputClasses[size],
            className,
          )}
          required={required}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          onInvalid={(event) => {
            event.currentTarget.classList.add(InputClasses.warn);
            event.currentTarget.setCustomValidity(errorMsg ?? "");
          }}
          onInput={(event) => {
            event.currentTarget.classList.remove(InputClasses.warn);
            event.currentTarget.setCustomValidity("");
          }}
        />

        <button
          type="button"
          className={Classes.button}
          aria-label="Toggle password visibility"
          onClick={() => setVisible((prev) => !prev)}
        >
          <img
            className={Classes.iconShow}
            src={eye_off}
            alt="Show password"
            aria-hidden="true"
          />

          <img
            className={Classes.iconHide}
            src={eye}
            alt="Hide password"
            aria-hidden="true"
          />
        </button>
      </div>
    </div>
  );
};
