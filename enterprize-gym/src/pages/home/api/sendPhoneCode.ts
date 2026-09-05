/**
 * Send Phone Code API
 *
 * ارسال کد تایید به شماره تلفن
 */
import type { SendPhoneCodeRequest } from "./interfaces/sendPhoneCodeRequest";
import type { SendPhoneCodeResponse } from "./interfaces/sendPhoneCodeResponse";
import type { ApiErrorResponse } from "./interfaces/apiErrorResponse";

const API_BASE = "/api/auth";

export const sendPhoneCodeApi = async (request: SendPhoneCodeRequest): Promise<SendPhoneCodeResponse> => {
  const response = await fetch(`${API_BASE}/send-code`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    const error: ApiErrorResponse = await response.json();
    throw new Error(error.message || "خطا در ارسال کد");
  }

  return response.json();
};