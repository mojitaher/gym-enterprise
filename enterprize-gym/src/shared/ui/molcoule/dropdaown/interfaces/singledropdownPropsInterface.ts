import type {  SelectItem } from "@smilodon/react";


export interface SINGLEDROPDOWN_SELECT_INTERFACE {
  items?: SelectItem[];
  value?: string | number ;
  placeholder?: string;
  searchable?: boolean;
  multiple?: boolean;
  clearable?: boolean;
  disabled?: boolean;
  onChange?: (value: string | number | Array<string | number>, items: SelectItem[]) => void;
}
