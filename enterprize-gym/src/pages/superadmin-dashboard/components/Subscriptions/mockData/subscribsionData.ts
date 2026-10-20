import type SubscriptionData from "../interfaces/subscriptionData.interface";

export const MOCK_SUBSCRIPTIONS: SubscriptionData[] = [
  {
    id: "1",
    buyerName: "علی محمدی",
    avatar: "/images/coach.png",
    daysLeft: 10,
  },
  {
    id: "2",
    buyerName: "محمد کریمی",
    avatar: "/images/coach.png",
    daysLeft: 12,
  },
  {
    id: "3",
    buyerName: "سارا محمدی",
    avatar: "/images/coach.png",
    daysLeft: -2,
  },
  {
    id: "4",
    buyerName: "حمید حسینی",
    avatar: "/images/coach.png",
    daysLeft: 44,
  },
];