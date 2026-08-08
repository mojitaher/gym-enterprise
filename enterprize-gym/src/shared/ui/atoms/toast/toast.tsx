import {  TOAST_MESSAGE_ICON_AND_MODE } from "./constants/toastMessageIcon";
import { HandlerProgressAnimationEnd } from "./handler/closeToast";
import type { TOAST_PROPS_INTERFACE } from "./interfaces/toastProps.interface";
import Classes from "./style/Toast.module.css";




export default function Toast({
    message,
    pauseOnHover=true,
    // closeOnClick = true,
    onSelfUnmount,
}: TOAST_PROPS_INTERFACE) {

    return (
        <div
            className={`
                ${Classes.container}
                ${TOAST_MESSAGE_ICON_AND_MODE[message].className}
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
    src={TOAST_MESSAGE_ICON_AND_MODE[message].icon}
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
