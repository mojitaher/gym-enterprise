import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

import ManagerLoginForm from "./ManagerLoginForm";

import { managerLoginApi } from "../api/managerLoginApi";

interface ManagerLoginModalProps {
  onSignupClick: () => void;
}

export default function ManagerLoginModal({ onSignupClick }: ManagerLoginModalProps) {
  const [error, setError] = useState<string | null>(null);

  const loginMutation = useMutation({
    mutationFn: ({ username, password }: { username: string; password: string }) =>
      managerLoginApi(username, password),

    onSuccess: (data) => {
      console.log("Manager login successful:", data);
      // TODO: redirect to manager dashboard
    },

    onError: (error) => {
      console.error("[ManagerLoginModal] Login failed:", error.message);
      setError(error.message);
    },
  });

  const handleSubmit = (username: string, password: string) => {
    setError(null);
    loginMutation.mutate({ username, password });
  };

  return (
    <ManagerLoginForm
      onSubmit={handleSubmit}
      onSignupClick={onSignupClick}
      isLoading={loginMutation.isPending}
      error={error}
    />
  );
}