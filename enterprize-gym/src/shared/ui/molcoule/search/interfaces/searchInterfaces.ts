import type { SEARCH_TYPE_MODE } from "../types/searchMode";
import type { SEARCH_TYPE_SIZE } from "../types/searchSize";

export default interface SEARCH_PROPS_INTERFACE {
  mode: SEARCH_TYPE_MODE;

  size: SEARCH_TYPE_SIZE;

  placeholder?: string;

  disabled?: boolean;

  loading?: boolean;

  /** مقدار فعلی input (کنترل‌شده). */
  value?: string;

  /** هنگام تغییر متن توسط کاربر صدا زده می‌شود. */
  onChange?: (value: string) => void;

  /** هنگام Enter یا کلیک روی دکمه، مقدار فعلی query ارسال می‌شود. */
  onSearch?: (query: string) => void;
}