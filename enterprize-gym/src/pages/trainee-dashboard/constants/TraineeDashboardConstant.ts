import { TRAINEE_DASHBOARD_COMPONENT_ENUM } from "../enums/TraineeDashboardComponentEnum";
import WorkoutPlan from "../components/WorkoutPlan/WorkoutPlan";
import Profile from "../components/Profile/Profile";

// TODO: کامپوننت MealPlan رو بساز و ایمپورت کن
// import MealPlan from "../components/MealPlan/MealPlan";

export const TRAINEE_DASHBOARD_COMPONENTS = {
  [TRAINEE_DASHBOARD_COMPONENT_ENUM.MY_WORKOUT_PLANS]: WorkoutPlan,
  [TRAINEE_DASHBOARD_COMPONENT_ENUM.MY_MEAL_PLAN]: WorkoutPlan, // TODO: بعداً با MealPlan جایگزین کن
  [TRAINEE_DASHBOARD_COMPONENT_ENUM.MY_PROFILE]: Profile,
} as const;