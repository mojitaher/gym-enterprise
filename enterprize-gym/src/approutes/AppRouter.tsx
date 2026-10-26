
import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/home/home";
import AboutPage from "../pages/about/about";
import SignupPage from "../pages/signup/signup";
import SuperadminLoginPage from "../pages/superadmin-login/superadmin-login";

import Error404 from "../pages/404/404";
import Error500 from "../pages/500/500";
import NoInternet from "../pages/no-internet/no-internet";

import SuperadminDashboard from "../pages/superadmin-dashboard/superadmin-dashboard";
import ManagerDashboard from "../pages/manager-dashboard/manager-dashboard";
import CoachDashboard from "../pages/coach-dashboard/coach-dashboard";
import TraineeDashboard from "../pages/trainee-dashboard/trainee-dashboard";

import GymDetail from "../pages/superadmin-dashboard/components/Gyms/components/gymsDetail";
import GymTrainees from "../pages/superadmin-dashboard/components/Gyms/components/gymTraniner";
import GymCoaches from "../pages/superadmin-dashboard/components/Gyms/components/gymCoach";
import GymManagers from "../pages/superadmin-dashboard/components/Gyms/components/gymManager";
import GymPlans from "../pages/superadmin-dashboard/components/Gyms/components/gymPlan";

import GymCoachDetail from "../pages/superadmin-dashboard/components/Gyms/components/gymCoachDetail";
import GymTraineeDetail from "../pages/superadmin-dashboard/components/Gyms/components/gymtraineeDetail";
import GymManagerDetail from "../pages/superadmin-dashboard/components/Gyms/components/gymManagerDetail";
import GymPlanDetail from "../pages/superadmin-dashboard/components/Gyms/components/gymPlanDetail";

import ExpiredSubscriptions from "../pages/superadmin-dashboard/components/Subscriptions/components/subscriptionExpired";
import SubscriptionDetail from "../pages/superadmin-dashboard/components/Subscriptions/components/SubscriptionDetail";

import { SUPERADMIN_DASHBOARD_COMPONENTS } from "../pages/superadmin-dashboard/constants/SuperadminDashboardConstant";
import { SUPERADMIN_DASHBOARD_COMPONENT_ENUM } from "../pages/superadmin-dashboard/enums/SuperadminDashboardComponentEnum";
import ChangeSubscription from "../pages/superadmin-dashboard/components/Subscriptions/components/subscriptionChange";

const AnalyticsPage =
  SUPERADMIN_DASHBOARD_COMPONENTS[
    SUPERADMIN_DASHBOARD_COMPONENT_ENUM.ANALYTICS
  ];

const GymsPage =
  SUPERADMIN_DASHBOARD_COMPONENTS[
    SUPERADMIN_DASHBOARD_COMPONENT_ENUM.GYM
  ];

const SubscriptionsPage =
  SUPERADMIN_DASHBOARD_COMPONENTS[
    SUPERADMIN_DASHBOARD_COMPONENT_ENUM.SUBSCRIPTION
  ];

const ReportsPage =
  SUPERADMIN_DASHBOARD_COMPONENTS[
    SUPERADMIN_DASHBOARD_COMPONENT_ENUM.REPORTS
  ];

const SuspendsPage =
  SUPERADMIN_DASHBOARD_COMPONENTS[
    SUPERADMIN_DASHBOARD_COMPONENT_ENUM.SUSPENDS
  ];

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/aboutus" element={<AboutPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route
        path="/superadmin-login"
        element={<SuperadminLoginPage />}
      />

      <Route
        path="/dashboard/superadmin"
        element={<SuperadminDashboard />}
      >
        <Route index element={<AnalyticsPage />} />
        <Route path="gyms" element={<GymsPage />} />
        <Route
          path="subscriptions"
          element={<SubscriptionsPage />}
        />
        <Route path="reports" element={<ReportsPage />} />
        <Route path="suspends" element={<SuspendsPage />} />

        <Route path="gym/:id" element={<GymDetail />} />

        <Route
          path="gym/:id/trainees"
          element={<GymTrainees />}
        />
        <Route
          path="gym/:id/trainees/:traineeId"
          element={<GymTraineeDetail />}
        />

        <Route
          path="gym/:id/coaches"
          element={<GymCoaches />}
        />
        <Route
          path="gym/:id/coaches/:coachId"
          element={<GymCoachDetail />}
        />

        <Route
          path="gym/:id/plans"
          element={<GymPlans />}
        />
        <Route
          path="gym/:id/plans/:planId"
          element={<GymPlanDetail />}
        />

        <Route
          path="gym/:id/managers"
          element={<GymManagers />}
        />
        <Route
          path="gym/:id/managers/:managerId"
          element={<GymManagerDetail />}
        />

        <Route
          path="subscriptions/expired"
          element={<ExpiredSubscriptions />}
        />
        <Route
          path="subscriptions/:subscriptionId"
          element={<SubscriptionDetail />}
        />
        <Route
  path="subscriptions/:subscriptionId/change"
  element={<ChangeSubscription />}
/>
      </Route>
      <Route
        path="/dashboard/manager"
        element={<ManagerDashboard />}
      />
      <Route
        path="/dashboard/coach"
        element={<CoachDashboard />}
      />
      <Route
        path="/dashboard/trainee"
        element={<TraineeDashboard />}
      />

      {/* صفحات خطا */}
      <Route path="/500" element={<Error500 />} />
      <Route path="/no-internet" element={<NoInternet />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}
