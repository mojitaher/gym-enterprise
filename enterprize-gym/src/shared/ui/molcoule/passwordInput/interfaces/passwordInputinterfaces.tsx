import type { INPUTـPASSWORD_TYPE_SIZE } from "../types/inputPasswordSize";
import type { INPUTـPASSWORD_TYPE_MODE } from "../types/inputPasswordMode";


export default interface PASSWORD_FIELD_PROPS_INTERFACE {
  title?: string;

  mode: INPUTـPASSWORD_TYPE_MODE;

  size: INPUTـPASSWORD_TYPE_SIZE;

  placeholder?: string;

  disabled?: boolean;

  value?: string;

  onChange?: (value: string) => void;

  pattern?: string;

  required?: boolean;

  errorMsg?: string;

  className?: string;
}