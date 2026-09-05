import usePortal from "../../../shared/ui/organisms/portalManager/hooks/usePortal";
import { PORTAL_TYPE_ENUM } from "../../../shared/ui/organisms/portalManager/enums/portalManagerEnum";
import type { MODAL_INTERFACES } from "../interfaces/useModalInterface";
import type { ReactNode } from "react";

export function useModal({ content }: MODAL_INTERFACES) {
  const { addPortalComponent, removeAllPortals } = usePortal();

  const closeModal = () => {
    removeAllPortals();
  };

  const openModal = () => {
    const modalContent: ReactNode =
      typeof content === "function" ? content(closeModal) : content;

    addPortalComponent({
      type: PORTAL_TYPE_ENUM.MODAL,
      props: {
        children: modalContent,
      },
    });
  };

  return { openModal, closeModal };
}
