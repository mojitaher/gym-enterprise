import { Select } from '@smilodon/react';
import type { SINGLEDROPDOWN_SELECT_INTERFACE } from "./interfaces/singledropdownPropsInterface";
// import DropdownItem from './components/singledropdownItemComponent';
// import SingleDropdownItem from './components/singledropdownItemComponent';

export default function SingleDropdown({
    items,
    value,
    placeholder,
    searchable,
    multiple,
    clearable,
    disabled,
    onChange
}: SINGLEDROPDOWN_SELECT_INTERFACE) {
    
    return (
        <Select
        multiSelectDisplay={
            {mode:"horizontal"}
        }
            items={items}
            value={value}
            placeholder={placeholder}
            clearable={clearable}
            disabled={disabled}
            searchable={searchable}
            multiple={ multiple }
            onChange={onChange}


            // customRenderer={(item)=>(
            //     <SingleDropdownItem
            //         item={item}
            //     />
            // )}
        />
    );
}