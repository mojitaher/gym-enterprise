import { SUPERADMIN_DASHBOARD_COMPONENT_ENUM } from "../enums/SuperadminDashboardComponentEnum";
import Analytic from "../components/analytic/analytic";
import reports from "../components/report/reports";
import Gyms from "../components/Gyms/Gyms";
import Suspend from "../components/suspend/suspend";
import Subscriptions from "../components/Subscriptions/Subscriptions";

export const SUPERADMIN_DASHBOARD_COMPONENTS = {
  [SUPERADMIN_DASHBOARD_COMPONENT_ENUM.ANALYTICS]: Analytic,
  [SUPERADMIN_DASHBOARD_COMPONENT_ENUM.REPORTS]: reports,
  [SUPERADMIN_DASHBOARD_COMPONENT_ENUM.GYM]: Gyms,
  [SUPERADMIN_DASHBOARD_COMPONENT_ENUM.SUBSCRIPTION]: Subscriptions,
  [SUPERADMIN_DASHBOARD_COMPONENT_ENUM.SUSPENDS]: Suspend,
} as const;