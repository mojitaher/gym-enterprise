import type { Ref } from "react";

import type { SEARCH_TYPE_MODE } from "../types/searchMode";
import type { SEARCH_TYPE_SIZE } from "../types/searchSize";

export default interface SEARCH_PROPS_INTERFACE {
  mode: SEARCH_TYPE_MODE;

  size: SEARCH_TYPE_SIZE;

  placeholder?: string;

  disabled?: boolean;

  loading?: boolean;

  /** Uncontrolled initial value. */
  defaultValue?: string;

  /** Ref to the underlying input; read `.value` to get the query. */
  ref?: Ref<HTMLInputElement>;

  onSearch?: () => void;
}
