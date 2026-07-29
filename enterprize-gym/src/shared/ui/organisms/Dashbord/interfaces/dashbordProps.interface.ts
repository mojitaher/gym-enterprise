import type { ReactNode } from "react";

import type { DASHBOARD_ROLE_ENUM } from "../enums/dashbordRoleEnum";

export interface DASHBOARD_PROPS_INTERFACE {
    role: DASHBOARD_ROLE_ENUM;

    children?: ReactNode;
}