import type { ReactNode, MouseEvent } from "react";
import type { CHIPS_ENUMS } from "../enums/chipsEnums";

// import type { CHIP_SIZE_TYPE } from "../types/chipSizeType";

export default interface CHIP_PROPS_INTERFACE {

  children: ReactNode;

  iconName: CHIPS_ENUMS;

  onClick?: (event: MouseEvent<HTMLSpanElement>) => void;

  className?: string;
}