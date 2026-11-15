import type { Dispatch, SetStateAction } from "react";

import { SIGNUP_STEP_ENUM } from "../enums/signupStep";

import type { SIGNUP_STEP } from "../types/signupStep";
import type { GymInfo } from "../types/gymInfo";
import type { GymBody } from "../api/interfaces/apiInterfaces";

import cityData from "../../../shared/data/cityData.json";

interface Params {
  data: GymInfo;
  registrationId: string | null;

  registerGym: (
    registrationId: string,
    body: GymBody
  ) => Promise<unknown>;

  setGymData: Dispatch<SetStateAction<GymInfo | null>>;
  setCompletedSteps: Dispatch<SetStateAction<Set<SIGNUP_STEP>>>;
  setCurrentStep: Dispatch<SetStateAction<number>>;
}

export async function handleGymInfoSubmit({
  data,
  registrationId,
  registerGym,
  setGymData,
  setCompletedSteps,
  setCurrentStep,
}: Params): Promise<void> {
  if (!registrationId) {
    throw new Error("ابتدا اطلاعات مدیر را ثبت کنید");
  }

  await registerGym(registrationId, {
    name: data.name,
    phone: data.phone,
    address: data.address,
    city:
      cityData.find((city) => city.id === data.city)?.name ??
      String(data.city),
    description: data.description ?? "",
  });

  setGymData(data);

  setCompletedSteps((prev) =>
    new Set(prev).add(SIGNUP_STEP_ENUM.gymInfo)
  );

  setCurrentStep((prev) => prev + 1);
}