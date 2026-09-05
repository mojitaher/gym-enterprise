import { useMutation } from "@tanstack/react-query";
import { sendPhoneCodeApi } from "../api/sendPhoneCode";
import { verifyCodeApi } from "../api/verifyCode";
import type { SendPhoneCodeRequest } from "../api/interfaces/sendPhoneCodeRequest";
import type { VerifyCodeRequest } from "../api/interfaces/verifyCodeRequest";
import type { SendPhoneCodeResponse } from "../api/interfaces/sendPhoneCodeResponse";
import type { VerifyCodeResponse } from "../api/interfaces/verifyCodeResponse";
import { handleApiError } from "../handler/handleApiError";

/**
 * Hook for sending phone verification code
 *
 * ارسال کد تایید به شماره تلفن
 */
export const useSendPhoneCode = () => {
  return useMutation<SendPhoneCodeResponse, Error, SendPhoneCodeRequest>({
    mutationFn: sendPhoneCodeApi,
    onError: (error) => {
      console.error("[useSendPhoneCode] Error:", handleApiError(error));
    },
  });
};

/**
 * Hook for verifying phone code
 *
 * تایید کد ارسال شده
 */
export const useVerifyCode = () => {
  return useMutation<VerifyCodeResponse, Error, VerifyCodeRequest>({
    mutationFn: verifyCodeApi,
    onError: (error) => {
      console.error("[useVerifyCode] Error:", handleApiError(error));
    },
  });
};