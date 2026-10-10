import { Select } from '@smilodon/react';
import type { SINGLEDROPDOWN_SELECT_INTERFACE } from "./interfaces/singledropdownPropsInterface";
import clsx from 'clsx';
// import DropdownItem from './components/singledropdownItemComponent';
// import SingleDropdownItem from './components/singledropdownItemComponent';
import Classes from './style/singledropdown.module.css'
export default function SingleDropdown({
    dir,
    items,
    value,
    placeholder,
    searchable,
    multiple,
    disabled,
    required,
    onChange,
    className
}: SINGLEDROPDOWN_SELECT_INTERFACE) {
    
    return (
        <Select 
        direction={dir}
        className={clsx(Classes.mySelect,'h-9',className)}
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
            required={required}

           
        />
    );
}