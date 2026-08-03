import type { AnimationEvent } from "react";

export function HandlerProgressAnimationEnd(
    event: AnimationEvent<HTMLDivElement>,
    onSelfUnmount?: () => void,
) {
    event.stopPropagation();

    onSelfUnmount?.();
}