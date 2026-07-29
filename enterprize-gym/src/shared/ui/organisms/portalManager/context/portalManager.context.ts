import { createContext } from "react";

import type PORTAL_CONTEXT_INTERFACE from "../interfaces/portalManagerContext.interface";

const PortalContext = createContext<
    PORTAL_CONTEXT_INTERFACE | undefined
>(
    undefined
);

export default PortalContext;