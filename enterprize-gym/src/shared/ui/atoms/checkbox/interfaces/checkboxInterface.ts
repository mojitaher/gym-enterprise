import type { CHECKBOX_TYPE_SHAPE } from "../types/checkboxShapeType";

export default interface CHECKBOX_PROPS_INTERFACE {
  shape: CHECKBOX_TYPE_SHAPE;

  checked: boolean;

  disabled?: boolean;

  onChange: (checked: boolean) => void;
}
