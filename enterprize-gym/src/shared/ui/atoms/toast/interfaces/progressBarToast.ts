import type { TOAST_MODE } from "../types/toastModeType";

export interface TOAST_PROGRESS_PROPS_INTERFACE {
    mode: TOAST_MODE;
    pauseOnHover?: boolean;
    onAnimationEnd?: () => void;
}