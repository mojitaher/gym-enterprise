import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/home";
import AboutPage from "../pages/about/about";
import SignupPage from "../pages/signup/signup";
import SuperadminLoginPage from "../pages/superadmin-login/superadmin-login";
import Error404 from "../pages/404/404";
import Error500 from "../pages/500/500";
import NoInternet from "../pages/no-internet/no-internet";


export function AppRouter() {
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      />
      <Route
        path="/aboutus"
        element={<AboutPage />}
      />
      <Route
        path="/signup"
        element={<SignupPage />}
      />
      <Route
        path="/superadmin-login"
        element={<SuperadminLoginPage />}
      />
      <Route
        path="/500"
        element={<Error500 />}
      />
      <Route
        path="/no-internet"
        element={<NoInternet />}
      />
      <Route
        path="*"
        element={<Error404 />}
      />
    </Routes>
  );
}