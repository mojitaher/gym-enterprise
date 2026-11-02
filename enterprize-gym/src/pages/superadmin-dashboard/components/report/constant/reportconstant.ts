import technicalAccountIssuesAvatar from "../../../../../../public/images/Technical & Account Issues.png";
import billingPaymentIssuesAvatar from "../../../../../../public/images/Billing & Payment Issues.png";
import clubServicesFacilitiesIssuesAvatar from "../../../../../../public/images/Club Services & Facilities Issues.png";
import complaintsFeedbackRequestsAvatar from "../../../../../../public/images/Complaints, Feedback & Requests.png";

import { REPORT_ENUM } from "../enums/reportsEnums";

export const REPORTS_DATA = [
  {
    id: REPORT_ENUM.TECHNICAL,
    title: "Technical & Account Issues",
    avatar: technicalAccountIssuesAvatar,
  },
  {
    id: REPORT_ENUM.ACCOUNT,
    title: "Billing & Payment Issues",
    avatar: billingPaymentIssuesAvatar,
  },
  {
    id: REPORT_ENUM.PAYMENT,
    title: "Club Services & Facilities Issues",
    avatar: clubServicesFacilitiesIssuesAvatar,
  },
  {
    id: REPORT_ENUM.OTHER,
    title: "Complaints, Feedback & Requests",
    avatar: complaintsFeedbackRequestsAvatar,
  },
];