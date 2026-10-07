import clsx from "clsx";
import Classes from "./style/Textarea.module.css";
import type TEXTAREA_PROPS_INTERFACE from "./interfaces/textareaInterface";

/**
 * Textarea Component
 *
 * A reusable atomic multi-line text field used to collect longer user input.
 *
 * Uncontrolled — the DOM owns the value. Pass `defaultValue` for the initial
 * value and read the current value through `ref` (ref.current.value) when you
 * need it, instead of tracking every keystroke in state.
 *
 * Supports:
 * - mode (success, warn, error)
 * - size (small, medium, large)
 * - disabled state
 * - placeholder
 * - configurable rows
 * - defaultValue (uncontrolled initial value)
 * - ref to the underlying <textarea>
 *
 * Example:
 *
 * const noteRef = useRef<HTMLTextAreaElement>(null);
 *
 * <Textarea
 *   ref={noteRef}
 *   mode="success"
 *   size="medium"
 *   placeholder="Write a note..."
 *   defaultValue=""
 * />
 */

export const Textarea = ({
  title,
  mode,
  size,
  placeholder,
  disabled,
  rows,
  defaultValue,
  ref,
  className
}: TEXTAREA_PROPS_INTERFACE) => {

  return (
    <div className={clsx(Classes.container)}>
    <p className={Classes.title}>{title}</p>
    <textarea
      ref={ref}
      className={clsx(
        Classes.textarea,
        mode && Classes[mode],
        Classes[size],
        className
      )}
      rows={rows}
      placeholder={placeholder}
      disabled={disabled}
      defaultValue={defaultValue}
    />
      </div>
  );
};
