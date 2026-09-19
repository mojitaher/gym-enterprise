import { TRAINEE_DASHBOARD_COMPONENT_ENUM } from "../enums/TraineeDashboardComponentEnum";
import Dashboard from "../components/Dashboard/Dashboard";
import WorkoutPlan from "../components/WorkoutPlan/WorkoutPlan";
import Progress from "../components/Progress/Progress";
import Profile from "../components/Profile/Profile";

export const TRAINEE_DASHBOARD_COMPONENTS = {
  [TRAINEE_DASHBOARD_COMPONENT_ENUM.DASHBOARD]: Dashboard,
  [TRAINEE_DASHBOARD_COMPONENT_ENUM.WORKOUT_PLAN]: WorkoutPlan,
  [TRAINEE_DASHBOARD_COMPONENT_ENUM.PROGRESS]: Progress,
  [TRAINEE_DASHBOARD_COMPONENT_ENUM.PROFILE]: Profile,
} as const;