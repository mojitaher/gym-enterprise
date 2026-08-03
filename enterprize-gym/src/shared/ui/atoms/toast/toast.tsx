import { TOAST_MESSAGE_ICON } from "./constants/toastMessageIcon";
import { TOAST_MESSAGE_ENUM } from "./enums/toastMessageEnum";
import { HandlerProgressAnimationEnd } from "./handler/closeToast";
import type { TOAST_PROPS_INTERFACE } from "./interfaces/toastProps.interface";
import Classes from "./style/Toast.module.css";




export default function Toast({
    message,
    mode,
    pauseOnHover=true,
    // closeOnClick = true,
    onSelfUnmount,
}: TOAST_PROPS_INTERFACE) {

    return (
        <div
            className={`
                ${Classes.container}
                ${Classes[`container_${mode}`]}
                ${pauseOnHover && Classes.pauseOnHover}
            `}
            
            onAnimationEnd={(event) =>
                HandlerProgressAnimationEnd(
                    event,
                    onSelfUnmount,
                )
            }
        >
            <div className={Classes.content}>
                <img
    src={TOAST_MESSAGE_ICON[message]}
    alt={message}
    className={Classes.icon}
/>

                <p className={Classes.message}>
                    {message}
                </p>
            </div>
        </div>
    );
}
