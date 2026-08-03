import {
    useEffect,
    useRef,
} from "react";

import { createRoot } from "react-dom/client";
import { PORTAL_TYPE_ENUM } from "./enums/portalManagerEnum";
import Toast from "../../atoms/toast/toast";
import Modal from "../../atoms/modal/modal";
import type { PORTAL_PROPS_INTERFACE } from "./interfaces/portalManagerProps.interface";
import type { PORTAL_MANAGER_ITEMS_PROPS_INTERFACE } from "./interfaces/portalManagerProvider.interface";
import PortalContext from "./context/portalManager.context";
import Classes from './style/portalStyle.module.css'




export default function PortalProvider({
    children,
}: PORTAL_PROPS_INTERFACE) {
    const containerRef =
        useRef<HTMLDivElement | null>(null);

    useEffect(() => {
    const container = document.createElement("div");

    container.className = "portal-container";
    container.className = Classes.portal_root_container;

    document.body.appendChild(container);

    containerRef.current = container;

    return () => {
        document.body.removeChild(container);
    };
}, []);

    const addPortalComponent = (
        portal: PORTAL_MANAGER_ITEMS_PROPS_INTERFACE
    ) => {
        console.log("Portal Called", portal);

        if (!containerRef.current) {
            return;
        }

        const wrapper =
            document.createElement("div");

        containerRef.current.appendChild(wrapper);

        const root = createRoot(wrapper);

        switch (portal.type) {
            case PORTAL_TYPE_ENUM.TOAST:
                root.render(
                    <div className={Classes.toastContainer}>

                        <Toast
                            {...portal.props}
                            onSelfUnmount={() => {
                                root.unmount();
                                wrapper.remove();
                            }}
                        />
                    </div>
                );

                break;

            case PORTAL_TYPE_ENUM.MODAL:
                root.render(
                    <Modal
                        {...portal.props}
                        onClose={() => {
                            root.unmount();
                            wrapper.remove();
                        }}
                    />
                );

                break;
        }
    };

    return (
        <PortalContext.Provider
            value={{
                addPortalComponent,
            }}
        >
            {children}
        </PortalContext.Provider>
    );
}