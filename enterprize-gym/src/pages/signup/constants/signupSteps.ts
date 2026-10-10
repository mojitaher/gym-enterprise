import { SIGNUP_STEP_ENUM } from "../enums/signupStep";
import type { SIGNUP_STEP } from "../types/signupStep";

export const SIGNUP_STEPS: SIGNUP_STEP[] = [
  SIGNUP_STEP_ENUM.managerInfo,
  SIGNUP_STEP_ENUM.gymInfo,
  SIGNUP_STEP_ENUM.plan,
  SIGNUP_STEP_ENUM.success,
];

export const STEP_CONFIG = {
  [SIGNUP_STEP_ENUM.managerInfo]: { label: "اطلاعات مدیر", index: 0 },
  [SIGNUP_STEP_ENUM.gymInfo]: { label: "اطلاعات باشگاه", index: 1 },
  [SIGNUP_STEP_ENUM.plan]: { label: "پلن های باشگاه", index: 2 },
  [SIGNUP_STEP_ENUM.success]: { label: "موفقیت", index: 3 },
};


export const STEPPER_STEPS = SIGNUP_STEPS.map((step) => ({
  key: step,
  label: STEP_CONFIG[step].label,
}));