
import type { Dispatch, SetStateAction } from "react";

import { SIGNUP_STEP_ENUM } from "../enums/signupStep";

import type { SIGNUP_STEP } from "../types/signupStep";
import type { ManagerInfo } from "../types/managerInfo";
import type {
  OwnerBody,
  RegisterOwnerResponse,
} from "../api/interfaces/apiInterfaces";

interface Params {
  data: ManagerInfo;
  registrationId: string | null;
  isEditing: boolean;

  registerOwner: (body: OwnerBody) => Promise<RegisterOwnerResponse>;

  updateOwner: (
    registrationId: string,
    body: OwnerBody
  ) => Promise<unknown>;

  setRegistrationId: (id: string) => void;
  setManagerData: Dispatch<SetStateAction<ManagerInfo | null>>;
  setCompletedSteps: Dispatch<SetStateAction<Set<SIGNUP_STEP>>>;
  setCurrentStep: Dispatch<SetStateAction<number>>;
}

export async function handleManagerInfoSubmit({
  data,
  registrationId,
  isEditing,
  registerOwner,
  updateOwner,
  setRegistrationId,
  setManagerData,
  setCompletedSteps,
  setCurrentStep,
}: Params): Promise<void> {
  const body: OwnerBody = {
    firstName: data.firstName,
    lastName: data.lastName,
    username: data.username,
    phone: data.phone,
    password: data.pass,
    confirmPassword: data.confirmPass,
  };

  if (isEditing) {
    if (!registrationId) {
      throw new Error("شناسه ثبت‌نام در دسترس نیست");
    }
    console.log(registrationId)
    await updateOwner(registrationId, body);
  } else {
    const response = await registerOwner(body);

    if (!response.registrationId) {
      throw new Error("شناسه ثبت‌نام از بک‌اند دریافت نشد");
    }

    setRegistrationId(response.registrationId);
  }

  setManagerData(data);

  setCompletedSteps((prev) =>
    new Set(prev).add(SIGNUP_STEP_ENUM.managerInfo)
  );

  setCurrentStep((prev) => prev + 1);
}
