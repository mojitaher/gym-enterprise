import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/home";
import AboutPage from "../pages/about/about";
import SignupPage from "../pages/signup/signup";


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
    </Routes>
  );
}