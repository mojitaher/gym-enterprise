import clsx from "clsx";

import Classes from "./styles/Badge.module.css";
import type BADGE_PROPS_INTERFACE from "./interfaces/badgePropsInterface";

/**
 * Badge Component
 *
 * A reusable atomic component for displaying small status labels.
 *
 * Supports:
 * - mode (success, warn, error, info)
 * - size (small, medium, large)
 * - custom className
 * - children
 *
 * Example:
 *
 * <Badge
 *    mode="success"
 *    size="medium"
 * >
 *    Active
 * </Badge>
 */

export const Badge = ({
  mode,
  size,
  className,
  children,
}: BADGE_PROPS_INTERFACE) => {
  console.log('badge')
  return (
    <span
      className={clsx(
        Classes.badge,
        Classes[mode],
        Classes[size],
        className
      )}
    >
      {children}
    </span>
  );
};