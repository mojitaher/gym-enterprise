import type { ReactNode, MouseEvent } from "react";

// import type { CHIP_SIZE_TYPE } from "../types/chipSizeType";

export default interface CHIP_PROPS_INTERFACE {
  // size: CHIP_SIZE_TYPE;

  children: ReactNode;

  icon?: ReactNode;

  onClick?: (event: MouseEvent<HTMLSpanElement>) => void;

  className?: string;
}