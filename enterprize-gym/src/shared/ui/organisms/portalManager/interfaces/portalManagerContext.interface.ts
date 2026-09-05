import type { PORTAL_MANAGER_ITEMS_PROPS_INTERFACE } from "./portalManagerProvider.interface";

export default interface PORTAL_CONTEXT_INTERFACE {
    addPortalComponent: (
        portal: PORTAL_MANAGER_ITEMS_PROPS_INTERFACE
    ) => void;
    removeAllPortals: () => void;
}