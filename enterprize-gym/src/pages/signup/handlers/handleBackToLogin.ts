import type { NavigateFunction } from "react-router-dom";

interface HandleBackToLoginProps {
  navigate: NavigateFunction;
}

export const handleBackToLogin = ({
  navigate,
}: HandleBackToLoginProps) => {
  navigate("/");
};