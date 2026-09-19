import type { DASHBOARD_LAYOUT_PROPS_INTERFACE } from "./interfaces/dashbordLayoutProps";
import Classes from "./style/Dashboard.module.css";

export default function DashboardLayout({
  header,
  sidebar,
  widgets,
  children,
}: DASHBOARD_LAYOUT_PROPS_INTERFACE) {
  return (
    <div className={Classes.layout}>
      {sidebar && <aside className={Classes.sidebar}>{sidebar}</aside>}

      <div className={Classes.main}>
        {header && <header className={Classes.header}>{header}</header>}

        <div className={Classes.body}>
          <div className={Classes.content}>{children}</div>

          {widgets && <aside className={Classes.widgets}>{widgets}</aside>}
        </div>
      </div>
    </div>
  );
}
