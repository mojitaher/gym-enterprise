import type { ReportGroup } from "../interfaces/reportInterfaces";

export const MOCK_REPORTS: ReportGroup[] = [
  {
    id: "technical",
    title: "Technical & Account Issues",
    count: 4,
    items: [
      {
        id: 1,
        username: "Ali Mohammadi",
        info: 2,
        onClick: () => console.log("Clicked: Technical - Ali Mohammadi"),
      },
      {
        id: 2,
        username: "Sara Rezaei",
        info: 1,
        icon: true,
        onClick: () => console.log("Clicked: Technical - Sara Rezaei"),
      },
    ],
  },
  {
    id: "billing",
    title: "Billing & Payment Issues",
    count: 3,
    items: [
      {
        id: 3,
        username: "Hassan Karimi",
        info: 2,
        secondaryInfo: "Premium",
        onClick: () => console.log("Clicked: Billing - Hassan Karimi"),
      },
      {
        id: 4,
        username: "Fatemeh Hosseini",
        info: 1,
        onClick: () => console.log("Clicked: Billing - Fatemeh Hosseini"),
      },
    ],
  },
  {
    id: "club-services",
    title: "Club Services & Facilities Issues",
    count: 5,
    items: [
      {
        id: 5,
        username: "Reza Naderi",
        info: 3,
        icon: true,
        onClick: () => console.log("Clicked: Club Services - Reza Naderi"),
      },
      {
        id: 6,
        username: "Zahra Esfahani",
        info: 2,
        secondaryInfo: "Advanced User",
        onClick: () => console.log("Clicked: Club Services - Zahra Esfahani"),
      },
    ],
  },
  {
    id: "complaints",
    title: "Complaints, Feedback & Requests",
    count: 6,
    items: [
      {
        id: 7,
        username: "Amirhossein Bagheri",
        info: 4,
        icon: true,
        secondaryInfo: "New Member",
        onClick: () => console.log("Clicked: Complaints - Amirhossein Bagheri"),
      },
      {
        id: 8,
        username: "Parvin Asghari",
        info: 2,
        onClick: () => console.log("Clicked: Complaints - Parvin Asghari"),
      },
    ],
  },
];