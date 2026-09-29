import type { SEARCH_TYPE_MODE } from "../types/searchMode";
// import type { SEARCH_TYPE_SIZE } from "../types/searchSize";

export default interface SEARCH_PROPS_INTERFACE {
  mode?: SEARCH_TYPE_MODE;

  placeholder?: string;

  disabled?: boolean;

  loading?: boolean;

  value?: string;

  onChange?: (value: string) => void;

  onSearch?: (query: string) => void;
}