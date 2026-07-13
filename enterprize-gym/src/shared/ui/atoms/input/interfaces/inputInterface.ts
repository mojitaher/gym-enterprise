import type {
  ChangeEvent,
} from "react";
import type { INPUT_TYPE_SIZE } from "../types/inputSizeType";
import type { INPUT_TYPE_MODE } from "../types/inputModeType";

export default interface INPUT_PROPS_INTERFACE {
  type:string

  mode: INPUT_TYPE_MODE;

  size: INPUT_TYPE_SIZE;

  placeholder?: string;

  disabled?: boolean;

  value?: string;


  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}