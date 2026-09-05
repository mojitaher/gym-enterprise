import type { InputHTMLAttributes, Ref } from "react";
import type { INPUT_TYPE_SIZE } from "../types/inputSizeType";
import type { INPUT_TYPE_MODE } from "../types/inputModeType";

export default interface INPUT_PROPS_INTERFACE {
  title?:string;
  type: string;

  mode?: INPUT_TYPE_MODE;

  size: INPUT_TYPE_SIZE;

  placeholder?: string;

  disabled?: boolean;

  defaultValue?: string;

  ref?: Ref<HTMLInputElement>;
  className?:string;

  pattern?: string;

  inputMode?: InputHTMLAttributes<HTMLInputElement>["inputMode"];
  required?:boolean;
  errorMsg:string;
}
