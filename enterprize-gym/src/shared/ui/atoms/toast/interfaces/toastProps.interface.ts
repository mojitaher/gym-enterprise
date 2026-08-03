import type { TOAST_MODE } from "../types/toastModeType";
import type { TOAST_MESSAGE_TYPE } from "../types/toastMessageType";

export interface TOAST_PROPS_INTERFACE {
    message: TOAST_MESSAGE_TYPE;
    mode: TOAST_MODE;
    pauseOnHover?: boolean;
    closeOnClick?: boolean;
    onSelfUnmount?: () => void;
}
