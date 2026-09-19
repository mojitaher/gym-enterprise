import { COACH_DASHBOARD_COMPONENT_ENUM } from "../enums/CoachDashboardComponentEnum";
import Dashboard from "../components/Dashboard/Dashboard";
import Workouts from "../components/Workouts/Workouts";
import Programs from "../components/Programs/Programs";
import Members from "../components/Members/Members";

export const COACH_DASHBOARD_COMPONENTS = {
  [COACH_DASHBOARD_COMPONENT_ENUM.DASHBOARD]: Dashboard,
  [COACH_DASHBOARD_COMPONENT_ENUM.WORKOUTS]: Workouts,
  [COACH_DASHBOARD_COMPONENT_ENUM.PROGRAMS]: Programs,
  [COACH_DASHBOARD_COMPONENT_ENUM.MEMBERS]: Members,
} as const;