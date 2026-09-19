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
// import ProtectedRoute from "../shared/components/ProtectedRoute"

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/aboutus" element={<AboutPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/superadmin-login" element={<SuperadminLoginPage />} />

      {/* داشبوردهای محافظت شده - اگر لاگین نباشه به /superadmin-login میره */}
      <Route
        path="/dashboard/superadmin"
        element={
          // <ProtectedRoute>
            <SuperadminDashboard />
          // {/* </ProtectedRoute> */}
        }
      />
      <Route
        path="/dashboard/manager"
        element={
          // <ProtectedRoute>
            <ManagerDashboard />
          // {/* </ProtectedRoute> */}
        }
      />
      <Route
        path="/dashboard/coach"
        element={
          // <ProtectedRoute>
            <CoachDashboard />
          // {/* </ProtectedRoute> */}
        }
      />
      <Route
        path="/dashboard/trainee"
        element={
          // <ProtectedRoute>
            <TraineeDashboard />
          // {/* </ProtectedRoute> */}
        }
      />

      <Route path="/500" element={<Error500 />} />
      <Route path="/no-internet" element={<NoInternet />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}
