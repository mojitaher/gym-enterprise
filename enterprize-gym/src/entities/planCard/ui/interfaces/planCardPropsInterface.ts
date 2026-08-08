import type { ReactNode, MouseEvent } from "react";

export default interface PLAN_CARD_PROPS_INTERFACE {
  title: string;
  coach?: string;
  session?: number;
  present?: number;
  absent?: number;
  onDelete?: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  children?: ReactNode;
}
