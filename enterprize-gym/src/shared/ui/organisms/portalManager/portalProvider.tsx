import {
    useEffect,
    useRef,
} from "react";

import { createRoot } from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from '../../../../lib/queryClient'
import { PORTAL_TYPE_ENUM } from "./enums/portalManagerEnum";
import Toast from "../../atoms/toast/toast";
import Modal from "../../atoms/modal/modal";
import type { PORTAL_PROPS_INTERFACE } from "./interfaces/portalManagerProps.interface";
import type { PORTAL_MANAGER_ITEMS_PROPS_INTERFACE } from "./interfaces/portalManagerProvider.interface";
import PortalContext from "./context/portalManager.context";
import Classes from './style/portalStyle.module.css'

interface PortalInstance {
  wrapper: HTMLDivElement;
  root: ReturnType<typeof createRoot>;
}

export default function PortalProvider({
    children,
}: PORTAL_PROPS_INTERFACE) {
    const containerRef =
        useRef<HTMLDivElement | null>(null);
    const portalsRef = useRef<PortalInstance[]>([]);

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

        portalsRef.current.push({ wrapper, root });

        const renderWithProvider = (content: React.ReactNode) => (
            <QueryClientProvider client={queryClient}>
                {content}
            </QueryClientProvider>
        );

        const cleanup = (wrapperToRemove: HTMLDivElement, rootToUnmount: ReturnType<typeof createRoot>) => {
            rootToUnmount.unmount();
            wrapperToRemove.remove();
            portalsRef.current = portalsRef.current.filter(
                (portal) => portal.wrapper !== wrapperToRemove
            );
        };

        switch (portal.type) {
            case PORTAL_TYPE_ENUM.TOAST:
                root.render(
                    renderWithProvider(
                        <div className={Classes.toastContainer}>

                            <Toast
                                {...portal.props}
                                onSelfUnmount={() => {
                                    cleanup(wrapper, root);
                                }}
                            />
                        </div>
                    )
                );

                break;

            case PORTAL_TYPE_ENUM.MODAL:
                root.render(
                    renderWithProvider(
                        <Modal
                            {...portal.props}
                            onClose={() => {
                                cleanup(wrapper, root);
                            }}
                        />
                    )
                );

                break;
        }
    };

    const removeAllPortals = () => {
        portalsRef.current.forEach(({ root, wrapper }) => {
            root.unmount();
            wrapper.remove();
        });
        portalsRef.current = [];
    };

    return (
        <PortalContext.Provider
            value={{
                addPortalComponent,
                removeAllPortals,
            }}
        >
            {children}
        </PortalContext.Provider>
    );
}