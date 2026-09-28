import { CHIPS_ENUMS } from "../../../shared/ui/atoms/chips/enums/chipsEnums";
import { SUPERADMIN_DASHBOARD_COMPONENT_ENUM } from "../enums/SuperadminDashboardComponentEnum";

export const SUPERADMIN_DASHBOARD_SIDEBAR  = [
  {
    key: SUPERADMIN_DASHBOARD_COMPONENT_ENUM.ANALYTICS,
    label: "analytics",
    icon: CHIPS_ENUMS.ANALYTICS,
  },
  {
    key: SUPERADMIN_DASHBOARD_COMPONENT_ENUM.REPORTS,
    label: "reports",
    icon: CHIPS_ENUMS.REPORTS,
  },
  {
    key: SUPERADMIN_DASHBOARD_COMPONENT_ENUM.GYM,
    label: "gyms",
    icon: CHIPS_ENUMS.GYM,
  },
  {
    key: SUPERADMIN_DASHBOARD_COMPONENT_ENUM.SUBSCRIPTION,
    label: "subscription",
    icon: CHIPS_ENUMS.SUBSCRIPTION,
  },
  {
    key: SUPERADMIN_DASHBOARD_COMPONENT_ENUM.SUSPENDS,
    label: "suspend",
    icon: CHIPS_ENUMS.SUSPENDS,
  },
] as const;