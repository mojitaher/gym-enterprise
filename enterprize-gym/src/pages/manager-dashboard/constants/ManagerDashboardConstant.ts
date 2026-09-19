import { MANAGER_DASHBOARD_COMPONENT_ENUM } from "../enums/ManagerDashboardComponentEnum";
import Analytics from "../components/Analytics";
import Gyms from "../components/Gyms";
import Subscriptions from "../components/Subscriptions";
import Reports from "../components/Reports";
import Suspends from "../components/Suspends";

/**
 * Manager Dashboard Components
 *
 * اتصال enum‌ها به کامپوننت‌های مربوطه
 */
export const MANAGER_DASHBOARD_COMPONENTS = {
  [MANAGER_DASHBOARD_COMPONENT_ENUM.ANALYTICS]: Analytics,
  [MANAGER_DASHBOARD_COMPONENT_ENUM.GYMS]: Gyms,
  [MANAGER_DASHBOARD_COMPONENT_ENUM.SUBSCRIPTIONS]: Subscriptions,
  [MANAGER_DASHBOARD_COMPONENT_ENUM.REPORTS]: Reports,
  [MANAGER_DASHBOARD_COMPONENT_ENUM.SUSPENDS]: Suspends,
} as const;