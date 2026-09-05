import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

import PhoneLoginModal from "./phoneloginmodal";
import VerifyModal from "./verifyModal";

import { sendPhoneCodeApi } from "../api/sendPhoneCode";
import { verifyCodeApi } from "../api/verifyCode";

import { USER_AUTH_STEP_ENUM } from "../enums/authStep";
import type { USER_AUTH_STEP } from "../types/authStep";

import { createLoginModalHandlers } from "../handlers/loginModalHandlers";

export default function ManagerLoginModal() {
  const [step, setStep] = useState<USER_AUTH_STEP>(
    USER_AUTH_STEP_ENUM.phone_login
  );

  const [phone, setPhone] = useState("");
  const [expiresIn, setExpiresIn] = useState(120);

  const sendPhoneCode = useMutation({
    mutationFn: sendPhoneCodeApi,

    onSuccess: (data) => {
      setExpiresIn(data.data?.expiresIn ?? 120);
      setStep(USER_AUTH_STEP_ENUM.verify);
    },

    onError: (error) => {
      console.error(
        "[ManagerLoginModal] Send phone code failed:",
        error.message
      );
    },
  });

  const verifyCode = useMutation({
    mutationFn: verifyCodeApi,

    onSuccess: (data) => {
      console.log("Manager phone verified successfully:", data);
      // TODO: redirect to manager dashboard
    },

    onError: (error) => {
      console.error(
        "[ManagerLoginModal] Verify code failed:",
        error.message
      );
    },
  });

  const {
    handlePhoneSubmit,
    handleVerifySubmit,
    handleBack,
  } = createLoginModalHandlers({
    setStep,
    setPhone,
    phone,
    sendPhoneCode,
    verifyCode,
  });

  // Login flow - phone input
  if (step === USER_AUTH_STEP_ENUM.phone_login) {
    return (
      <PhoneLoginModal
        onSubmit={handlePhoneSubmit}
      />
    );
  }

  // Verify code flow
  return (
    <VerifyModal
      expiresIn={expiresIn}
      onBack={handleBack}
      isVerifying={verifyCode.isPending}
      onSubmit={handleVerifySubmit}
    />
  );
}