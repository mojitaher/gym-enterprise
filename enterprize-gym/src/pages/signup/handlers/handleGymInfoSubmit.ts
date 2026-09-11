import { SIGNUP_STEP_ENUM } from "../enums/signupStep";
import type { SIGNUP_STEP } from "../types/signupStep";
import type { GymInfo } from "../types/gymInfo";

interface HandleGymInfoSubmitProps {
  data: GymInfo;
  setGymData: (data: GymInfo) => void;
  setCompletedSteps: React.Dispatch<React.SetStateAction<Set<SIGNUP_STEP>>>;
  setCurrentStep: (step: number) => void;
}

export const handleGymInfoSubmit = ({
  data,
  setGymData,
  setCompletedSteps,
  setCurrentStep,
}: HandleGymInfoSubmitProps) => {
  console.log("Gym info submitted:", data);
  // TODO: Backend needed - API call here
  // await signupGymApi(data);
  setGymData(data);
  setCompletedSteps((prev) => new Set([...prev, SIGNUP_STEP_ENUM.gymInfo]));
  setCurrentStep(2);
};