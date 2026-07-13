import type { GROUPDROPDOWN_ITEM_PROPS } from "../interfaces/groupdropdownOptionInterfaces";
import Classes from "../style/groupdropdown.module.css";

export default function GroupDropdownItem({
    item
}: GROUPDROPDOWN_ITEM_PROPS) {

    return (
        <div className={Classes.item}>

            <span>
                {item.label}
                {item.value}
            </span>

        </div>
    );
}