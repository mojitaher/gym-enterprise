import Classes from "../style/Toast.module.css";

import type { TOAST_PROGRESS_PROPS_INTERFACE } from "../interfaces/progressBarToast";
import { HandlerProgressAnimationEnd } from "../handler/startToast";

export default function ToastProgress({
    mode,
    onAnimationEnd,
}: TOAST_PROGRESS_PROPS_INTERFACE) {
    return (
        <div className={Classes.progressContainer}>
            <div
                className={`
                    ${Classes.progress}
                    ${Classes[`progress_${mode}`]}
                `}
                onAnimationEnd={(event) =>
                    HandlerProgressAnimationEnd(
                        event,
                        onAnimationEnd,
                    )
                }
            />
        </div>
    );
}