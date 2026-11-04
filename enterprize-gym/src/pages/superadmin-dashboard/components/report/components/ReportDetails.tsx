
import {  useState } from "react";
import { useParams } from "react-router-dom";

import { Badge } from "../../../../../shared/ui/atoms/badge/badge";
import { ListItem } from "../../../../../shared/ui/molcoule/listItem/listItem";

import { REPORT_DETAIL_ENUMS } from "../enums/reportDetailEnums";
import { REPORT_DETAIL_TABS } from "../constant/reportDetailsTabs";

import Styles from "../styles/reports.module.css";
import { MOCK_REPORT_DETAILS_DATA } from "../mockData/reportDetailsMockData";


export default function ReportDetails() {
  const { reportType } = useParams();

  const [selectedRole, setSelectedRole] = useState<REPORT_DETAIL_ENUMS>(
    REPORT_DETAIL_ENUMS.ALL
  );

 
  const filteredDetails = MOCK_REPORT_DETAILS_DATA.filter(
    (report) =>
      report.reportType === reportType &&
      (
        selectedRole === REPORT_DETAIL_ENUMS.ALL ||
        report.role === selectedRole
      )
  );

  return (
    <section className={Styles.reportDetailsContainer}>
      <div className={Styles.reportDetailsHeader}>
        <h2 className={Styles.reportDetailsTitle}>
          {reportType}
        </h2>
      </div>

     
<nav className={Styles.reportRolesContainer}>
  {REPORT_DETAIL_TABS.map((tab) => (
    <Badge
      key={tab.key}
      onClick={() => setSelectedRole(tab.key)}
      active={selectedRole === tab.key}
    >
      {tab.label}
    </Badge>
  ))}
</nav>


<div className={Styles.reportsListContainer}>
  {filteredDetails.length > 0 ? (
    filteredDetails.map((report) => (
      <ListItem
        key={report.id}
        avatar={report.avatar}
        username={report.username}
        className={Styles.groupItems}
      />
    ))
  ) : (
    <p className={Styles.emptyReports}>
      گزارشی برای نمایش وجود ندارد.
    </p>
  )}
</div>

    </section>
  );
}
