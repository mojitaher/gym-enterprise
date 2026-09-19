import { SUPERADMIN_DASHBOARD_COMPONENT_ENUM } from "../enums/SuperadminDashboardComponentEnum";
import Dashboard from "../components/Dashboard/Dashboard";
import Users from "../components/Users/Users";
import Gyms from "../components/Gyms/Gyms";
import Settings from "../components/Settings/Settings";

export const SUPERADMIN_DASHBOARD_COMPONENTS = {
  [SUPERADMIN_DASHBOARD_COMPONENT_ENUM.DASHBOARD]: Dashboard,
  [SUPERADMIN_DASHBOARD_COMPONENT_ENUM.USERS]: Users,
  [SUPERADMIN_DASHBOARD_COMPONENT_ENUM.GYMS]: Gyms,
  [SUPERADMIN_DASHBOARD_COMPONENT_ENUM.SETTINGS]: Settings,
} as const;