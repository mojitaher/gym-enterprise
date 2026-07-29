import { useContext } from "react";

import PortalContext from "../context/portalManager.context";

export default function usePortal() {
    const context = useContext(
        PortalContext
    );

    if (!context) {
        throw new Error(
            "usePortal must be used inside PortalProvider."
        );
    }

    return context;
}