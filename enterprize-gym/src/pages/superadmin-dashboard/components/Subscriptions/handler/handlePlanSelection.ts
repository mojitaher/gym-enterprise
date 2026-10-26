
import { MOCK_SUBSCRIPTION_DETAILS } from "../mockData/subscriptionDetailMock";

export const handlePlanSelection = (
  subscriptionId: string,
  planNumber: number,
  navigate: (path: string) => void
) => {
  const subscription = MOCK_SUBSCRIPTION_DETAILS.find(
    (item) => item.id === subscriptionId
  );

  if (!subscription) {
    return;
  }

  subscription.planNumber = planNumber;

  navigate(`/dashboard/superadmin/subscriptions/${subscriptionId}`);
};
