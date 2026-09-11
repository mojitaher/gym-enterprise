import type { GymInfo } from "../../../types/gymInfo";
import type { ManagerInfo } from "../../../types/managerInfo";

/**
 * Signup Success Step Props Interface
 */
export interface SignupSuccessStepProps {
  gymData: GymInfo | null;
  managerData: ManagerInfo | null;
}