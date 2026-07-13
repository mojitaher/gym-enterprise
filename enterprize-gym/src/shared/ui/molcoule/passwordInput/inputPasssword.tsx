import { Input } from "../../atoms/input/input";

import Classes from "./styles/InputPassword.module.css";

import {
  INPUT_PASSWORD_VISIBILITY_TOGGLE,
} from "./constant/inputPasswordConstant";

import type INPUT_PASSWORD_PROPS_INTERFACE from "./interfaces/passwordInputinterfaces";

export const InputPassword = ({
  value,
  visible,
  mode,
  size,
  placeholder,
  disabled,
  onChange,
  onVisibilityChange,
}: INPUT_PASSWORD_PROPS_INTERFACE) => {
  const visibilityConfig = INPUT_PASSWORD_VISIBILITY_TOGGLE[visible];

  return (
    <div className={Classes.container}>
      <Input
        value={value}
        type={visibilityConfig.type}
        mode={mode}
        size={size}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
      />

      <button
        type="button"
        className={Classes.button}
        aria-label={visibilityConfig.ariaLabel}
        onClick={() => onVisibilityChange(visibilityConfig.next)}
      >
        <img
          className={Classes.icon}
          src={visibilityConfig.icon}
          alt={visibilityConfig.ariaLabel}
          aria-hidden="true"
        />
      </button>
    </div>
  );
};