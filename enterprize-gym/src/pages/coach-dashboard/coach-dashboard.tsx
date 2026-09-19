import { useState } from "react";
import DashboardLayout from "../../shared/ui/organisms/Dashbord/dashbordLayout";
import { COACH_DASHBOARD_COMPONENT_ENUM } from "./enums/CoachDashboardComponentEnum";
import { COACH_DASHBOARD_COMPONENTS } from "./constants/CoachDashboardConstant";
import Classes from "./style/CoachDashboard.module.css";

export default function CoachDashboard() {
  const [activeTab, setActiveTab] = useState<COACH_DASHBOARD_COMPONENT_ENUM>(
    COACH_DASHBOARD_COMPONENT_ENUM.DASHBOARD
  );

  const ActiveComponent = COACH_DASHBOARD_COMPONENTS[activeTab];

  return (
    <DashboardLayout
      header={
        <div className={Classes.header}>
          <h1 className={Classes.headerTitle}>پنل مربی</h1>
        </div>
      }
      sidebar={
        <nav className={Classes.sidebar}>
          {Object.keys(COACH_DASHBOARD_COMPONENTS).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key as COACH_DASHBOARD_COMPONENT_ENUM)}
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