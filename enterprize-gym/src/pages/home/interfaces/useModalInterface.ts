import type { ReactNode } from "react";

export interface MODAL_INTERFACES{
    content: ReactNode | ((closeModal: () => void) => ReactNode),
    title: string
}