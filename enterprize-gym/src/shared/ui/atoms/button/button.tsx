/**
 * Button Component
 * 
 * A reusable atomic UI component used for user interactions such as:
 * submitting forms, triggering actions, or navigation.
 * 
 * Supports:
 * - mode (visual state like success, error, warn)
 * - variant (style type like primary, secondary)
 * - size (small, medium, large)
 * - disabled state
 * - click handler
 * - children content
 * 
 * Example Usage:
 * 
 * <Button
 *   variant="primary"
 *   size="medium"
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
        {children}
    </button>
  );
};