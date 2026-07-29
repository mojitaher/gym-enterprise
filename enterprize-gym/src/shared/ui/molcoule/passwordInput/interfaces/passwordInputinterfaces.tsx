import type { INPUTـPASSWORD_TYPE_SIZE } from "../types/inputPasswordSize";
import type { INPUTـPASSWORD_TYPE_MODE } from "../types/inputPasswordMode";


export default interface PASSWORD_FIELD_PROPS_INTERFACE {
  mode: INPUTـPASSWORD_TYPE_MODE;

  size: INPUTـPASSWORD_TYPE_SIZE;

  placeholder?: string;

  disabled?: boolean;

  /** Uncontrolled initial value. */
  defaultValue?: string;
}
