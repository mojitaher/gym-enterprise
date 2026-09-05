import type {  MutateOptions } from "@tanstack/react-query";
import type { SendPhoneCodeRequest } from "../api/interfaces/sendPhoneCodeRequest";
import type { SendPhoneCodeResponse } from "../api/interfaces/sendPhoneCodeResponse";

export interface PhoneLoginModalProps {
  onSuccess: (
    phone: string,
    options?: MutateOptions<SendPhoneCodeResponse, Error, SendPhoneCodeRequest>
  ) => void;
}