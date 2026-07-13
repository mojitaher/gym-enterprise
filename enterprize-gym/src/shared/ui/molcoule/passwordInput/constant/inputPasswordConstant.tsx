import { INPUT_PASSWORD_VISIBILITY_ENUM } from "../enums/inputPasswordVisable";

import eye from "../../../../../assets/icons/eye.svg";
import eye_off from "../../../../../assets/icons/eye_off.svg";

export const INPUT_PASSWORD_VISIBILITY_TOGGLE = {
  [INPUT_PASSWORD_VISIBILITY_ENUM.visible]: {
    type: "text",
    ariaLabel: "Hide password",
    icon: eye,
    next: INPUT_PASSWORD_VISIBILITY_ENUM.hidden,
  },

  [INPUT_PASSWORD_VISIBILITY_ENUM.hidden]: {
    type: "password",
    ariaLabel: "Show password",
    icon: eye_off,
    next: INPUT_PASSWORD_VISIBILITY_ENUM.visible,
  },
} as const;