import type { MouseEvent } from "react";

export function HandlerCloseToast(

    event: MouseEvent,

    closeOnClick: boolean,

    onSelfUnmount?: () => void,

) {

    event.stopPropagation();

    if (!closeOnClick) {

        return;

    }

    onSelfUnmount?.();

}