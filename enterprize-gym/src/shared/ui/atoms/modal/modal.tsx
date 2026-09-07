import Classes from "./style/Modal.module.css";

import { stopModalPropagation } from "./handler/stopModalPropagation";

import type { MODAL_PROPS_INTERFACE } from "./interfaces/modalProps.interface";

/**
 * Modal Component
 *
 * A reusable atomic modal. It does NOT know what renders it (portal, parent,
 * router, ...). It only asks to be closed through `onClose`; whoever mounts it
 * wires that to the real teardown.
 *
 * Sizing follows its content — the container is fit-content and only capped at
 * 95vw / 95vh, so it grows to whatever `children` the parent passes in.
 *
 * Behavior:
 * - Clicking the dark overlay calls onClose.
 * - Clicking inside the container does not (stopModalPropagation).
 * - The close button is always shown; only the title text is conditional.
 *
 * No state hooks are used.
 */

export default function Modal({
    children,
    onClose,
}: MODAL_PROPS_INTERFACE) {
    return (
        <div className={Classes.overlay} onClick={onClose}>
            <div
                className={Classes.container}
                onClick={stopModalPropagation}
            >
                <div className={Classes.body}>{children}</div>
            </div>
        </div>
    );
}
