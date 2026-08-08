/**
 * Button Component
 * 
 * A reusable atomic UI component used for user interactions such as:
 * submitting forms, triggering actions, or navigation.
 * 
 * Supports:
 * - variant (style type like primary, secondary)
 * - size (small, medium, large)
 * - startIcon / endIcon (rendered before / after the text)
 * - disabled state
 * - click handler
 * - children content
 * 
 * Example Usage:
 * 
 * <Button
 *   variant="primary"
 *   size="medium"
 *   startIcon={<Icon />}
 *   endIcon={<Icon />}
 *   onClick={() => console.log("clicked")}
 * >
 *   Submit
 * </Button>
 * 
 */




import Classes from "./style/Button.module.css";
import clsx from "clsx";
import type BUTTON_PROPS_INTERFACE from "./interface/buttoninterface";


export const Button = ({
  variant,
  size,
  startIcon,
  endIcon,
  disabled,
  onClick,
  children
}: BUTTON_PROPS_INTERFACE) => {
  return (
    <button
      className={clsx(
        Classes.button,
        Classes[variant],
        Classes[size]
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {startIcon && <span className={Classes.firstIcon}>{startIcon}</span>}
      {children}
      {endIcon && <span className={Classes.lastIcon}>{endIcon}</span>}
    </button>
  );
};