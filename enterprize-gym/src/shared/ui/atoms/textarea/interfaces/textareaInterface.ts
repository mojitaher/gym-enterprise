import type { TEXTAREA_TYPE_SIZE } from "../types/textareaSizeType";
import type { TEXTAREA_TYPE_MODE } from "../types/textareaModeType";

export default interface TEXTAREA_PROPS_INTERFACE {
  title:string;
  mode?: TEXTAREA_TYPE_MODE;

  size: TEXTAREA_TYPE_SIZE;

  placeholder?: string;

  disabled?: boolean;

  rows?: number;

value?: string;
  onChange?:(value: string) => void;
className?:string;
}
