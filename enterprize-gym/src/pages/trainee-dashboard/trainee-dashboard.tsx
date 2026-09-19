import { useState } from "react";
import DashboardLayout from "../../shared/ui/organisms/Dashbord/dashbordLayout";
import { TRAINEE_DASHBOARD_COMPONENT_ENUM } from "./enums/TraineeDashboardComponentEnum";
import { TRAINEE_DASHBOARD_COMPONENTS } from "./constants/TraineeDashboardConstant";
import Classes from "./style/TraineeDashboard.module.css";

export default function TraineeDashboard() {
  const [activeTab, setActiveTab] = useState<TRAINEE_DASHBOARD_COMPONENT_ENUM>(
    TRAINEE_DASHBOARD_COMPONENT_ENUM.DASHBOARD
  );

  const ActiveComponent = TRAINEE_DASHBOARD_COMPONENTS[activeTab];

  return (
    <DashboardLayout
      header={
        <div className={Classes.header}>
          <h1 className={Classes.headerTitle}>پنل تمرین‌کننده</h1>
        </div>
      }
      sidebar={
        <nav className={Classes.sidebar}>
          {Object.keys(TRAINEE_DASHBOARD_COMPONENTS).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key as TRAINEE_DASHBOARD_COMPONENT_ENUM)}
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