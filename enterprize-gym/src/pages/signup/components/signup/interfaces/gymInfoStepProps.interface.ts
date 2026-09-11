import type { GymInfo } from "../../../types/gymInfo";

/**
 * Gym Info Step Props Interface
 */
export interface GymInfoStepProps {
  onBack: () => void;
  onSubmit: (data: GymInfo) => void;
  initialValues: GymInfo;
}