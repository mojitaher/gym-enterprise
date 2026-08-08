import type { TOAST_MESSAGE_TYPE } from "../types/toastMessageType";

export interface TOAST_PROPS_INTERFACE {
    message: TOAST_MESSAGE_TYPE;
    pauseOnHover?: boolean;
    closeOnClick?: boolean;
    onSelfUnmount?: () => void;
}
