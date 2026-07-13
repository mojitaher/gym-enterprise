import type { BUTTON_TYPE_MODE } from "../types/buttonModeType";
import type { BUTTON_TYPE_SIZE } from "../types/buttonSizeTypes";
import type { BUTTON_TYPE_VARIANTS } from "../types/buttonVarient";
import type { MouseEvent, ReactNode } from "react";

export default interface BUTTON_PROPS_INTERFACE{
    mode:BUTTON_TYPE_MODE,
    variant:BUTTON_TYPE_VARIANTS,
    size:BUTTON_TYPE_SIZE
    disabled?: boolean;
  onClick?: (event:MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;

}