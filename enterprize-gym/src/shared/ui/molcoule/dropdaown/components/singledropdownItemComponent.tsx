

import type { SINGLEDROPDOWN_ITEM_PROPS } from "../interfaces/singledropdownOptionInterfaces";
import Classes from "../style/singledropdown.module.css";




export default function SingleDropdownItem({
    item
}: SINGLEDROPDOWN_ITEM_PROPS) {

    return (
        <div className={Classes.item}>

            <span>
                {item.label}
                {item.value}
            </span>

        </div>
    );
}