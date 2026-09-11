import type { ManagerInfo } from "../../../types/managerInfo";

/**
 * Manager Info Step Props Interface
 */
export interface ManagerInfoStepProps {
  onBack: () => void;
  onSubmit: (data: ManagerInfo) => void;
  initialValues: ManagerInfo;
}