import type { TOAST_CLOSE_PROPS_INTERFACE } from "../interfaces/closetagInterface";
import Classes from "../style/Toast.module.css";



export default function ToastClose({
    onClick,
}: TOAST_CLOSE_PROPS_INTERFACE) {
    return (
        <button
            type="button"
            className={Classes.closeButton}
            onClick={onClick}
        >
            ×
        </button>
    );
}