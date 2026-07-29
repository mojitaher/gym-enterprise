import type { TOAST_PROPS_INTERFACE } from "../../../atoms/toast/interfaces/toastProps.interface";
import type { MODAL_PROPS_INTERFACE } from "../../../atoms/modal/interfaces/modalProps.interface";
import type { PORTAL_TYPE_ENUM } from "../enums/portalManagerEnum";


export type PORTAL_MANAGER_ITEMS_PROPS_INTERFACE =
    | {
          type: PORTAL_TYPE_ENUM.TOAST;
          props: TOAST_PROPS_INTERFACE;
      }
    | {
          type: PORTAL_TYPE_ENUM.MODAL;
          props: Omit<MODAL_PROPS_INTERFACE, "onClose">;
      };