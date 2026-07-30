import type { Ref } from "react";
import type { TEXTAREA_TYPE_SIZE } from "../types/textareaSizeType";
import type { TEXTAREA_TYPE_MODE } from "../types/textareaModeType";

export default interface TEXTAREA_PROPS_INTERFACE {
  title:string;
  mode: TEXTAREA_TYPE_MODE;

  size: TEXTAREA_TYPE_SIZE;

  placeholder?: string;

  disabled?: boolean;

  rows?: number;

  /** Uncontrolled initial value. The DOM owns the value after mount. */
  defaultValue?: string;

  /** Ref to the underlying textarea; read `.value` from it to get the text. */
  ref?: Ref<HTMLTextAreaElement>;
}
