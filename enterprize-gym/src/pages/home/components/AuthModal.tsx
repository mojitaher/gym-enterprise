import { useState } from "react";

import AuthChoiceModal from "./AuthChoiceModal";
import ManagerLoginModal from "./ManagerLoginModal";

import { USER_AUTH_STEP_ENUM } from "../enums/authStep";
import type { USER_AUTH_STEP } from "../types/authStep";

interface AuthModalProps {
  onSignupClick: () => void;
}

export default function AuthModal({ onSignupClick }: AuthModalProps) {
  const [step, setStep] = useState<USER_AUTH_STEP>(
    USER_AUTH_STEP_ENUM.phone
  );

  const handleLoginClick = () => {
    setStep(USER_AUTH_STEP_ENUM.phone_login);
  };

  if (step === USER_AUTH_STEP_ENUM.phone) {
    return (
      <AuthChoiceModal
        onLoginClick={handleLoginClick}
        onSignupClick={onSignupClick}
      />
    );
  }

  return <ManagerLoginModal />;
}