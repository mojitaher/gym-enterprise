import clsx from "clsx";
import Classes from "./style/Textarea.module.css";
import type TEXTAREA_PROPS_INTERFACE from "./interfaces/textareaInterface";
export const Textarea = ({
  title,
  mode,
  size,
  placeholder,
  disabled,
  rows,
  value,
  onChange,
  className,
}: TEXTAREA_PROPS_INTERFACE) => {
  return (
    <div className={clsx(Classes.container)}>
      <p className={Classes.title}>{title}</p>

      <textarea
        className={clsx(
          Classes.textarea,
          mode && Classes[mode],
          Classes[size],
          className
        )}
        rows={rows}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  );
};