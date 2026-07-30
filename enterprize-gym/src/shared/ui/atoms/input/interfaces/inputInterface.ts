import type { Ref } from "react";
import type { INPUT_TYPE_SIZE } from "../types/inputSizeType";
import type { INPUT_TYPE_MODE } from "../types/inputModeType";

export default interface INPUT_PROPS_INTERFACE {
  title:string;
  type: string;

  mode: INPUT_TYPE_MODE;

  size: INPUT_TYPE_SIZE;

  placeholder?: string;

  disabled?: boolean;

  /** Uncontrolled initial value. The DOM owns the value after mount. */
  defaultValue?: string;

  /** Ref to the underlying input; read `.value` from it to get the input. */
  ref?: Ref<HTMLInputElement>;
}
