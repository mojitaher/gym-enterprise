
import type {
  GymBody,
  OwnerBody,
  PlanBody,
  PlansResponse,
  RegisterOwnerResponse,
} from "./interfaces/apiInterfaces";

const BASE_URL = "https://stipulate-throttle-zero.ngrok-free.dev";

const headers = {
  "Content-Type": "application/json",
  "ngrok-skip-browser-warning": "true",
};

const credentials: RequestCredentials = "include";

/* ---------- ثبت مدیر ---------- */


export const registerOwner = async (
  body: OwnerBody
): Promise<RegisterOwnerResponse> => {
  const response = await fetch(`${BASE_URL}/gyms/register/owner`, {
    method: "POST",
    headers,
    credentials,
    body: JSON.stringify(body),
  });

  const data = await response.json();

  console.log("Register Owner Status:", response.status);
  console.log("Register Owner Response:", data);

  if (!response.ok) {
    throw new Error(
      data.message || `ثبت مدیر ناموفق بود (${response.status})`
    );
  }

  const registrationId =
    data.registrationId ?? data.data?.registrationId;

  if (!registrationId) {
    throw new Error("شناسه ثبت‌نام در پاسخ بک‌اند وجود ندارد");
  }

  return { registrationId };
};

/* ---------- ویرایش مدیر ---------- */

export const updateOwner = async (
  registrationId: string,
  body: OwnerBody
): Promise<unknown> => {
  const response = await fetch(
    `${BASE_URL}/gyms/register/${registrationId}/owner`,
    {
      method: "PUT",
      headers,
      credentials,
      body: JSON.stringify(body),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "ویرایش اطلاعات مدیر ناموفق بود");
  }

  return data;
};

/* ---------- ثبت باشگاه ---------- */

export const registerGym = async (
  registrationId: string,
  body: GymBody
): Promise<unknown> => {
  const response = await fetch(
    `${BASE_URL}/gyms/register/${registrationId}/gym`,
    {
      method: "POST",
      headers,
      credentials,
      body: JSON.stringify(body),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "ثبت اطلاعات باشگاه ناموفق بود");
  }

  return data;
};

/* ---------- ثبت پلن ---------- */

export const submitPlan = async (
  registrationId: string,
  body: PlanBody
): Promise<unknown> => {
  const response = await fetch(
    `${BASE_URL}/gyms/register/${registrationId}/plan`,
    {
      method: "POST",
      headers,
      credentials,
      body: JSON.stringify(body),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "ثبت پلن ناموفق بود");
  }

  return data;
};

/* ---------- دریافت پلن‌ها ---------- */

export const getPlans = async (): Promise<PlansResponse> => {
  const response = await fetch(`${BASE_URL}/plans`, {
    headers,
    credentials,
  });

  const data: PlansResponse = await response.json();

  if (!response.ok || !data.success) {
    throw new Error("دریافت پلن‌ها ناموفق بود");
  }

  return data;
};
