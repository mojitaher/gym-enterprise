
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import DashboardLayout from "../../shared/ui/organisms/Dashbord/dashbordLayout";
import { Chip } from "../../shared/ui/atoms/chips/chip";

import { SUPERADMIN_DASHBOARD_COMPONENT_ENUM } from "./enums/SuperadminDashboardComponentEnum";
import { SUPERADMIN_DASHBOARD_SIDEBAR } from "./constants/superAdminDashbordButtons";

import Classes from "./style/SuperadminDashboard.module.css";

const SIDEBAR_PATHS = {
  [SUPERADMIN_DASHBOARD_COMPONENT_ENUM.ANALYTICS]:
    "/dashboard/superadmin",
  [SUPERADMIN_DASHBOARD_COMPONENT_ENUM.GYM]:
    "/dashboard/superadmin/gyms",
  [SUPERADMIN_DASHBOARD_COMPONENT_ENUM.SUBSCRIPTION]:
    "/dashboard/superadmin/subscriptions",
  [SUPERADMIN_DASHBOARD_COMPONENT_ENUM.REPORTS]:
    "/dashboard/superadmin/reports",
  [SUPERADMIN_DASHBOARD_COMPONENT_ENUM.SUSPENDS]:
    "/dashboard/superadmin/suspends",
};

export default function SuperadminDashboard() {
  const location = useLocation();
  const navigate = useNavigate();

  const isGymPage =
    location.pathname.startsWith("/dashboard/superadmin/gym/");

  const isExpiredSubscriptions =
    location.pathname ===
    "/dashboard/superadmin/subscriptions/expired";

  const currentTab = isGymPage
    ? SUPERADMIN_DASHBOARD_COMPONENT_ENUM.GYM
    : isExpiredSubscriptions
      ? SUPERADMIN_DASHBOARD_COMPONENT_ENUM.SUBSCRIPTION
      : Object.entries(SIDEBAR_PATHS).find(
          ([, path]) => path === location.pathname
        )?.[0];

  return (
    <DashboardLayout
      header={
        <div className={Classes.header}>
          <h1 className={Classes.headerTitle}>
            پنل سوپرادمین
          </h1>
        </div>
      }
      sidebar={
        <nav className={Classes.chipContainer}>
          {SUPERADMIN_DASHBOARD_SIDEBAR.map((item) => (
            <Chip
              key={item.key}
              iconName={item.icon}
              onClick={() => navigate(SIDEBAR_PATHS[item.key])}
              className={
                currentTab === item.key
                  ? Classes.chipActive
                  : Classes.chipInactive
              }
            >
              {item.label}
            </Chip>
          ))}
        </nav>
      }
    >
      <div className={Classes.componentContainer}>
        <Outlet />
      </div>
    </DashboardLayout>
  );
}
