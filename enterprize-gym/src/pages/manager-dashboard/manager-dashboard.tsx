import { useState } from "react";
import DashboardLayout from "../../shared/ui/organisms/Dashbord/dashbordLayout";
import { Chip } from "../../shared/ui/atoms/chips/chip";
import { MANAGER_DASHBOARD_COMPONENT_ENUM } from "./enums/ManagerDashboardComponentEnum";
import { MANAGER_DASHBOARD_COMPONENTS } from "./constants/ManagerDashboardConstant";
import Classes from "./style/ManagerDashboard.module.css";

export default function ManagerDashboard() {
  const [activeTab, setActiveTab] = useState<MANAGER_DASHBOARD_COMPONENT_ENUM>(
    MANAGER_DASHBOARD_COMPONENT_ENUM.ANALYTICS
  );

  const ActiveComponent = MANAGER_DASHBOARD_COMPONENTS[activeTab];

  return (
    <DashboardLayout
      header={
        <div className={Classes.header}>
          <h1 className={Classes.headerTitle}>پنل منیجر</h1>
        </div>
      }
      sidebar={
        <nav className={Classes.chipContainer}>
          {Object.keys(MANAGER_DASHBOARD_COMPONENTS).map((key) => (
            <Chip
              key={key}
              onClick={() => setActiveTab(key as MANAGER_DASHBOARD_COMPONENT_ENUM)}
              className={activeTab === key ? Classes.chipActive : Classes.chipInactive}
            >
              {String(key)}
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
