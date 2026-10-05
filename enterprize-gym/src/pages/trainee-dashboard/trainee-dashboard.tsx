import { useState } from "react";
import DashboardLayout from "../../shared/ui/organisms/Dashbord/dashbordLayout";
import { Chip } from "../../shared/ui/atoms/chips/chip";
import { TRAINEE_DASHBOARD_COMPONENT_ENUM } from "./enums/TraineeDashboardComponentEnum";
import { TRAINEE_DASHBOARD_COMPONENTS } from "./constants/TraineeDashboardConstant";
import { TRAINEE_DASHBOARD_SIDEBAR } from "./constants/traineeDashboardButtons";
import Classes from "./style/TraineeDashboard.module.css";

export default function TraineeDashboard() {
  const [activeTab, setActiveTab] = useState<TRAINEE_DASHBOARD_COMPONENT_ENUM>(
    TRAINEE_DASHBOARD_COMPONENT_ENUM.MY_WORKOUT_PLANS
  );

  const ActiveComponent = TRAINEE_DASHBOARD_COMPONENTS[activeTab];

  return (
    <DashboardLayout
      header={
        <div className={Classes.header}>
          <h1 className={Classes.headerTitle}>پنل ترینر</h1>
        </div>
      }
      sidebar={
        <nav className={Classes.chipContainer}>
          {TRAINEE_DASHBOARD_SIDEBAR.map((item) => (
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