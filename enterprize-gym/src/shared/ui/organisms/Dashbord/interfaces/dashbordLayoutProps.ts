import type { ReactNode } from "react";

export interface DASHBOARD_LAYOUT_PROPS_INTERFACE {
    header?: ReactNode;

    sidebar?: ReactNode;

    widgets?: ReactNode;

    children?: ReactNode;
}