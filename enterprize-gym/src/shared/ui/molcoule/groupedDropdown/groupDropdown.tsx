import { Select } from '@smilodon/react';
import type { GROUPDROPDOWN_SELECT_INTERFACE } from "./interfaces/groupdropdownPropsInterface";
import clsx from 'clsx';
import Classes from './style/groupdropdown.module.css'

export default function GroupDropdown({
    groupedItems,
    value,
    placeholder,
    searchable,
    multiple,
    clearable,
    disabled,
    onChange
}: GROUPDROPDOWN_SELECT_INTERFACE) {
    return (
        <Select
        className={clsx(Classes.mySelect)}
        multiSelectDisplay={
            {mode:"horizontal"}
        }
            groupedItems={groupedItems}
            value={value}
            placeholder={placeholder}
            clearable={clearable}
            disabled={disabled}
            searchable={searchable}
            multiple={ multiple }
            onChange={onChange}

            // customRenderer={(item)=>(
            //     <GroupDropdownItem
            //         item={item}
            //     />
            // )}
        />
    );
}