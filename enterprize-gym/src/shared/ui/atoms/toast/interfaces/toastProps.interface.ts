import type { TOAST_MODE } from "../types/toastModeType";

export interface TOAST_PROPS_INTERFACE {
    title: string;
    message?: string;
    mode: TOAST_MODE;
    pauseOnHover?: boolean;
    closeOnClick?: boolean;
    onSelfUnmount?: () => void;
}
