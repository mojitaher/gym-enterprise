import clsx from "clsx";

import Classes from "./styles/Chip.module.css";

import type CHIP_PROPS_INTERFACE from "./interfaces/chipPropsInterface";

/**
 * Navigation Chip Component
 *
 * A reusable atomic component for navigation/filter chips.
 *
 * Supports:
 * - size (small, medium, large)
 * - startIcon (rendered before text with 4px gap)
 * - custom className
 * - children
 *
 * Example:
 *
 * <Chip
 *   size="medium"
 *   startIcon={<Icon />}
 * >
 *   Active
 * </Chip>
 */

export const Chip = ({
  // size,
  icon,
  className,
  children,
}: CHIP_PROPS_INTERFACE) => {
  return (
    <span
      className={clsx(
        Classes.chip,
        // Classes[size],
        className
      )}
    >
      {icon && <span className={Classes.iconWrapper}>{icon}</span>}
      {children}
    </span>
  );
};