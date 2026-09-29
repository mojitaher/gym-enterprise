import { Input } from "../../../atoms/input/input";
import type INPUT_PROPS_INTERFACE from "../../../atoms/input/interfaces/inputInterface";

/**
 * Search Input - نسخه ساده شده input برای سرچ
 * سایز از طریق CSS کنترل میشه و پراپ size حذف شده
 */
export const SearchInput = ({
  title,
  type,
  mode,
  placeholder,
  disabled,
  value,
  onChange,
  className,
  pattern,
  inputMode,
  errorMsg,
  required,
}: Omit<INPUT_PROPS_INTERFACE, "size">) => {
  return (
    <Input
      title={title}
      type={type}
      mode={mode}
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      onChange={onChange}
      className={className}
      pattern={pattern}
      inputMode={inputMode}
      errorMsg={errorMsg}
      required={required}
    />
  );
};