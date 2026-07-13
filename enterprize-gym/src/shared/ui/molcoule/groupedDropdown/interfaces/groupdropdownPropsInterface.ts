import type { SelectItem  } from "@smilodon/react";
import type { GroupedItem  } from "@smilodon/core";

export interface GROUPDROPDOWN_SELECT_INTERFACE {
  groupedItems?:GroupedItem[] ;
  value?: string | number ;
  placeholder?: string;
  searchable?: boolean;
  multiple?: boolean;
  clearable?: boolean;
  disabled?: boolean;
  onChange?: (value: string | number | Array<string | number>, items: SelectItem[]) => void;
}
