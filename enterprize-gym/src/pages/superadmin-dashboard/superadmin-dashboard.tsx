import { useState } from "react";
import {
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";

import DashboardLayout from "../../shared/ui/organisms/Dashbord/dashbordLayout";
import { Chip } from "../../shared/ui/atoms/chips/chip";

import { SUPERADMIN_DASHBOARD_COMPONENT_ENUM } from "./enums/SuperadminDashboardComponentEnum";
import { SUPERADMIN_DASHBOARD_COMPONENTS } from "./constants/SuperadminDashboardConstant";
import { SUPERADMIN_DASHBOARD_SIDEBAR } from "./constants/superAdminDashbordButtons";

import Classes from "./style/SuperadminDashboard.module.css";

export default function SuperadminDashboard() {
  const [activeTab, setActiveTab] =
    useState<SUPERADMIN_DASHBOARD_COMPONENT_ENUM>(
      SUPERADMIN_DASHBOARD_COMPONENT_ENUM.ANALYTICS
    );

  const location = useLocation();
  const navigate = useNavigate();

  const isGymDetail = location.pathname.startsWith(
    "/dashboard/superadmin/gym/"
  );

  const currentTab = isGymDetail
    ? SUPERADMIN_DASHBOARD_COMPONENT_ENUM.GYM
    : activeTab;

  const ActiveComponent =
    SUPERADMIN_DASHBOARD_COMPONENTS[activeTab];

  const handleTabChange = (
    tab: SUPERADMIN_DASHBOARD_COMPONENT_ENUM
  ) => {
    setActiveTab(tab);

    if (isGymDetail) {
      navigate("/dashboard/superadmin");
    }
  };

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
              onClick={() =>
                handleTabChange(item.key)
              }
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
        {isGymDetail ? (
          <Outlet />
        ) : (
          <ActiveComponent />
        )}
      </div>
    </DashboardLayout>
  );
}