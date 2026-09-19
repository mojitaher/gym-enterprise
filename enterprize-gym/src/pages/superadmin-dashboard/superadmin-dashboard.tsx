import { useState } from "react";
import DashboardLayout from "../../shared/ui/organisms/Dashbord/dashbordLayout";
import { SUPERADMIN_DASHBOARD_COMPONENT_ENUM } from "./enums/SuperadminDashboardComponentEnum";
import { SUPERADMIN_DASHBOARD_COMPONENTS } from "./constants/SuperadminDashboardConstant";
import Classes from "./style/SuperadminDashboard.module.css";

export default function SuperadminDashboard() {
  const [activeTab, setActiveTab] = useState<SUPERADMIN_DASHBOARD_COMPONENT_ENUM>(
    SUPERADMIN_DASHBOARD_COMPONENT_ENUM.DASHBOARD
  );

  const ActiveComponent = SUPERADMIN_DASHBOARD_COMPONENTS[activeTab];

  return (
    <DashboardLayout
      header={
        <div className={Classes.header}>
          <h1 className={Classes.headerTitle}>پنل سوپرادمین</h1>
        </div>
      }
      sidebar={
        <nav className={Classes.sidebar}>
          {Object.keys(SUPERADMIN_DASHBOARD_COMPONENTS).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key as SUPERADMIN_DASHBOARD_COMPONENT_ENUM)}
              className={`${Classes.sidebarItem} ${
                activeTab === key ? Classes.sidebarItemActive : ""
              }`}
            >
              {key}
            </button>
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