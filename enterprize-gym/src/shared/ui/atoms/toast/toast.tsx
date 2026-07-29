import ToastClose from "./components/closeTab";
import ToastProgress from "./components/toastProgress";
import { HandlerCloseToast } from "./handler/closeToast";
import type { TOAST_PROPS_INTERFACE } from "./interfaces/toastProps.interface";
import Classes from "./style/Toast.module.css";




export default function Toast({
    title,
    message,
    mode,
    pauseOnHover ,
    closeOnClick=true ,
    onSelfUnmount,
}: TOAST_PROPS_INTERFACE) {
    console.log(Classes);
    console.log({
    title,
    message,
    mode,
});
    return (
        <div
            className={`
                ${Classes.container}
                ${Classes[`container_${mode}`]}
            `}
            onClick={(event) =>
                HandlerCloseToast(
                    event,
                    closeOnClick,
                    onSelfUnmount
                )
            }
        >
            <div className={Classes.header}>
                <div className={Classes.content}>
                    <h3 className={Classes.title}>{title}</h3>

                    {message && (
                        <p className={Classes.message}>
                            {message}
                        </p>
                    )}
                </div>

                <ToastClose
                    onClick={onSelfUnmount}
                />
            </div>

            <ToastProgress
                mode={mode}
                pauseOnHover={pauseOnHover}
                onAnimationEnd={onSelfUnmount}
            />
        </div>
    );
}