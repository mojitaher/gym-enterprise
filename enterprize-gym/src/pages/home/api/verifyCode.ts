/**
 * Verify Code API
 *
 * تایید کد ارسال شده
 */
import type { VerifyCodeRequest } from "./interfaces/verifyCodeRequest";
import type { VerifyCodeResponse } from "./interfaces/verifyCodeResponse";
import type { ApiErrorResponse } from "./interfaces/apiErrorResponse";

const API_BASE = "/api/auth";

export const verifyCodeApi = async (request: VerifyCodeRequest): Promise<VerifyCodeResponse> => {
  const response = await fetch(`${API_BASE}/verify-code`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    const error: ApiErrorResponse = await response.json();
    throw new Error(error.message || "خطا در تایید کد");
  }

  return response.json();
};