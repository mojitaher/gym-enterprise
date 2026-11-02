

import { ListItem } from "../../../../shared/ui/molcoule/listItem/listItem";


import Styles from "./styles/reports.module.css";
import { REPORTS_DATA } from "./constant/reportconstant";
import { MOCK_REPORT_COUNTS } from "./mockData";
import clsx from "clsx";



export default function Report() {
  return (
    <section className={Styles.reportsContainer}>
      <div className={Styles.reportsHeader}>
        <h2 className={Styles.reportsTitle}>Reports</h2>
      </div>

      <div className={Styles.reportsListContainer}>
        {REPORTS_DATA.map((report) => {

          return (
            <div
              key={report.id}
              className="gap-5"
            >
              <ListItem
              
                avatar={report.avatar}
                username={report.title}
                info={MOCK_REPORT_COUNTS[report.id]}
                className={clsx(Styles.groupItems)}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
