import clsx from "clsx";

import Classes from "./styles/Chip.module.css";

import type CHIP_PROPS_INTERFACE from "./interfaces/chipPropsInterface";
import { CHIPS_ICON_CONSTANT } from "./constant/ChipsIconConstant";

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
  iconName,
  className,
  children,
  onClick,
}: CHIP_PROPS_INTERFACE) => {
  return (
    <span
      className={clsx(
        Classes.chip,
        className,
        onClick && Classes.clickable
      )}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <img className={Classes.iconWrapper} src={CHIPS_ICON_CONSTANT[iconName]} alt={iconName} />
      {children}
    </span>
  );
};