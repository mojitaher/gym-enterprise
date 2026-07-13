import type { ChangeEvent } from "react";
import type { INPUTـPASSWORD_TYPE_SIZE } from "../types/inputPasswordSize";
import type { INPUTـPASSWORD_TYPE_MODE } from "../types/inputPasswordMode";
import { INPUT_PASSWORD_VISIBILITY_ENUM } from "../enums/inputPasswordVisable";


export default interface PASSWORD_FIELD_PROPS_INTERFACE {
  value: string;

  visible: INPUT_PASSWORD_VISIBILITY_ENUM;

  mode: INPUTـPASSWORD_TYPE_MODE;

  size: INPUTـPASSWORD_TYPE_SIZE;

  placeholder?: string;

  disabled?: boolean;

  onChange: (event: ChangeEvent<HTMLInputElement>) => void;

  onVisibilityChange: (visible: INPUT_PASSWORD_VISIBILITY_ENUM) => void;
}