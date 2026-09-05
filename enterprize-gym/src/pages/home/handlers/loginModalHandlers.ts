import { USER_AUTH_STEP_ENUM } from "../enums/authStep";
import type { USER_AUTH_STEP } from "../types/authStep";

interface LoginModalHandlersDeps {
  setStep: React.Dispatch<React.SetStateAction<USER_AUTH_STEP>>;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  phone: string;
  sendPhoneCode: ReturnType<typeof import("@tanstack/react-query").useMutation<unknown, Error, { phone: string }>>;
  verifyCode: ReturnType<typeof import("@tanstack/react-query").useMutation<unknown, Error, { phone: string; code: string }>>;
}

export const createLoginModalHandlers = ({
  setStep,
  setPhone,
  phone,
  sendPhoneCode,
  verifyCode,
}: LoginModalHandlersDeps) => {
  const handlePhoneSubmit = (submittedPhone: string) => {
    setPhone(submittedPhone);

    sendPhoneCode.mutate({
      phone: submittedPhone,
    });
  };

  const handleVerifySubmit = (code: string) => {
    verifyCode.mutate({
      phone,
      code,
    });
  };

  const handleBack = () => {
    setStep(USER_AUTH_STEP_ENUM.phone_login);
  };

  return {
    handlePhoneSubmit,
    handleVerifySubmit,
    handleBack,
  };
};