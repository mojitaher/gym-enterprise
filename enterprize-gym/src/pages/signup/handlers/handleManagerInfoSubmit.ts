import { SIGNUP_STEP_ENUM } from "../enums/signupStep";
import type { SIGNUP_STEP } from "../types/signupStep";
import type { ManagerInfo } from "../types/managerInfo";

interface HandleManagerInfoSubmitProps {
  data: ManagerInfo;
  setManagerData: (data: ManagerInfo) => void;
  setCompletedSteps: React.Dispatch<React.SetStateAction<Set<SIGNUP_STEP>>>;
  setCurrentStep: (step: number) => void;
}

export const handleManagerInfoSubmit = ({
  data,
  setManagerData,
  setCompletedSteps,
  setCurrentStep,
}: HandleManagerInfoSubmitProps) => {
  console.log("Manager info submitted:", data);
  // TODO: Backend needed - API call here
  // await signupManagerApi(data);
  setManagerData(data);
  setCompletedSteps((prev) => new Set([...prev, SIGNUP_STEP_ENUM.managerInfo]));
  setCurrentStep(1);
};