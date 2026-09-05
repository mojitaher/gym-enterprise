import type { ReactNode } from "react";

export interface MODAL_PROPS_INTERFACE {
    children: ReactNode;

    /**
     * Requests the modal to close. The Modal doesn't know what renders it
     * (portal, router, parent, ...) — it just asks to be closed. Whoever
     * mounts it wires this to the actual teardown.
     */
    onClose?: () => void;
}
