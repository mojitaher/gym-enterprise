import { useNavigate } from "react-router-dom";

import type { DASHBOARD_LAYOUT_PROPS_INTERFACE } from "./interfaces/dashbordLayoutProps";
import Classes from "./style/Dashboard.module.css";

import BackIcon from "../../../../assets/icons/backIcon.svg";

export default function DashboardLayout({
  header,
  sidebar,
  widgets,
  children,
}: DASHBOARD_LAYOUT_PROPS_INTERFACE) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className={Classes.layout}>
      <div className={Classes.main}>
        <div className={Classes.headerRow}>
          <button
            type="button"
            onClick={handleBack}
            className={Classes.backButton}
          >
            <img
              src={BackIcon}
              alt="بازگشت"
            />
          </button>

          {header && (
            <header className={Classes.header}>
              {header}
            </header>
          )}
        </div>

        {sidebar && (
          <nav className={Classes.sidebar}>
            {sidebar}
          </nav>
        )}

        <div className={Classes.body}>
          <div className={Classes.content}>
            {children}
          </div>

          {widgets && (
            <aside className={Classes.widgets}>
              {widgets}
            </aside>
          )}
        </div>
      </div>
    </div>
  );
}