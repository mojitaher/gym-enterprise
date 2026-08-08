import { Select } from '@smilodon/react';
import type { SINGLEDROPDOWN_SELECT_INTERFACE } from "./interfaces/singledropdownPropsInterface";
import clsx from 'clsx';
// import DropdownItem from './components/singledropdownItemComponent';
// import SingleDropdownItem from './components/singledropdownItemComponent';
import Classes from './style/singledropdown.module.css'
export default function SingleDropdown({
    items,
    value,
    placeholder,
    searchable,
    multiple,
    disabled,
    onChange
}: SINGLEDROPDOWN_SELECT_INTERFACE) {
    
    return (
        <Select 
        className={clsx(Classes.mySelect,'h-9')}
        multiSelectDisplay={
            {mode:"horizontal"}
        }
        showSelectedIndicator={true}
            items={items}
            value={value}
            placeholder={placeholder}
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