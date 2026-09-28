import { useState } from "react";

import DashboardLayout from "../../shared/ui/organisms/Dashbord/dashbordLayout";
import { Chip } from "../../shared/ui/atoms/chips/chip";

import { SUPERADMIN_DASHBOARD_COMPONENT_ENUM } from "./enums/SuperadminDashboardComponentEnum";
import { SUPERADMIN_DASHBOARD_COMPONENTS } from "./constants/SuperadminDashboardConstant";

import Classes from "./style/SuperadminDashboard.module.css";
import { SUPERADMIN_DASHBOARD_SIDEBAR } from "./constants/superAdminDashbordButtons";

export default function SuperadminDashboard() {
  const [activeTab, setActiveTab] =
    useState<SUPERADMIN_DASHBOARD_COMPONENT_ENUM>(
      SUPERADMIN_DASHBOARD_COMPONENT_ENUM.ANALYTICS
    );

  const ActiveComponent = SUPERADMIN_DASHBOARD_COMPONENTS[activeTab];

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
              onClick={() => setActiveTab(item.key)}
              className={
                activeTab === item.key
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
        <ActiveComponent />
      </div>
    </DashboardLayout>
  );
}