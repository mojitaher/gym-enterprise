import { useRef } from "react";

import { Input } from "../../atoms/input/input";

import Classes from "./styles/InputPassword.module.css";

import eye from "../../../../assets/icons/eye.svg";
import eye_off from "../../../../assets/icons/eye_off.svg";

import type INPUT_PASSWORD_PROPS_INTERFACE from "./interfaces/passwordInputinterfaces";
import { handleToggleVisibility } from "./hooks/handlevisibility";


export const InputPassword = ({
  mode,
  size,
  placeholder,
  disabled,
  defaultValue,
}: INPUT_PASSWORD_PROPS_INTERFACE) => {
  const inputRef = useRef<HTMLInputElement>(null);

  

  return (
    <div className={Classes.container}>
      <Input
        ref={inputRef}
        type="password"
        mode={mode}
        size={size}
        placeholder={placeholder}
        disabled={disabled}
        defaultValue={defaultValue}
      />

      <button
        type="button"
        className={Classes.button}
        aria-label="Toggle password visibility"
        onClick={()=>handleToggleVisibility(inputRef)}
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
  );
};
