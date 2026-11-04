import type { ReactNode } from "react";
// import type { BADGE_TYPES } from "../types/badgeTypes";

export default interface BADGE_PROPS_INTERFACE {
  children: ReactNode;
  active:boolean;
  className?: string;
  onClick?: () => void;
}