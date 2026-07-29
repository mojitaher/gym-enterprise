import type { RefObject } from "react";

export const handleToggleVisibility = (
  ref: RefObject<HTMLInputElement | null>
) => {
  if (!ref.current) {
    return;
  }

  ref.current.type =
    ref.current.type === "password" ? "text" : "password";
};