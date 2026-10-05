import { CHIPS_ENUMS } from "../../../shared/ui/atoms/chips/enums/chipsEnums";
import { TRAINEE_DASHBOARD_COMPONENT_ENUM } from "../enums/TraineeDashboardComponentEnum";

export const TRAINEE_DASHBOARD_SIDEBAR = [
  {
    key: TRAINEE_DASHBOARD_COMPONENT_ENUM.MY_WORKOUT_PLANS,
    label: "my workout plans",
    icon: CHIPS_ENUMS.GYM,
  },
  {
    key: TRAINEE_DASHBOARD_COMPONENT_ENUM.MY_MEAL_PLAN,
    label: "my meal plan",
    icon: CHIPS_ENUMS.GYM,
  },
  {
    key: TRAINEE_DASHBOARD_COMPONENT_ENUM.MY_PROFILE,
    label: "my profile",
    icon: CHIPS_ENUMS.GYM,
  },
] as const;