import type SUBSCRIPTION_CARD_PROPS_INTERFACE from "../../../../../entities/subscriptionCard/ui/interfaces/subscriptionCardPropsInterface";
import type { GymInfo } from "../../../types/gymInfo";
import type { ManagerInfo } from "../../../types/managerInfo";

/**
 * Signup Success Step Props Interface
 */
export interface SignupSuccessStepProps {
  gymData: GymInfo | null;
  managerData: ManagerInfo | null;
  planData:SUBSCRIPTION_CARD_PROPS_INTERFACE|null
}