import type SubscriptionDetail from "../interfaces/subscriptionDetail.interface";

export const MOCK_SUBSCRIPTION_DETAILS: SubscriptionDetail[] = [
  {
    id: "1",
    buyerName: "علی محمدی",
    avatar: "/images/coach.png",
    daysLeft: 10,
    subscriptionType: "Starter",
    planNumber: 1,
    phoneNumber: "09123456789",
    joinDate: "2026-01-15",
  },
  {
    id: "2",
    buyerName: "محمد کریمی",
    avatar: "/images/coach.png",
    daysLeft: 12,
    subscriptionType: "Pro",
    planNumber: 2,
    phoneNumber: "09129876543",
    joinDate: "2026-02-10",
  },
  {
    id: "3",
    buyerName: "سارا محمدی",
    avatar: "/images/coach.png",
    daysLeft: -2,
    subscriptionType: "Business",
    planNumber: 3,
    phoneNumber: "09135556666",
    joinDate: "2026-01-20",
  },
  {
    id: "4",
    buyerName: "حمید حسینی",
    avatar: "/images/coach.png",
    daysLeft: 44,
    subscriptionType: "Starter",
    planNumber: 4,
    phoneNumber: "09148879900",
    joinDate: "2026-03-05",
  },
];