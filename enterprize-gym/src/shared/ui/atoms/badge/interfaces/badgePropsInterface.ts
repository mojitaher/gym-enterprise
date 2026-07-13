import type { ReactNode } from "react";

import type { BADGE_MODE_TYPE } from "../types/badgemodetype";
import type { BADGE_SIZE_TYPE } from "../types/badgesizetype";
export default interface BADGE_PROPS_INTERFACE {
  mode: BADGE_MODE_TYPE;

  size: BADGE_SIZE_TYPE;

  children: ReactNode;

  className?: string;
}