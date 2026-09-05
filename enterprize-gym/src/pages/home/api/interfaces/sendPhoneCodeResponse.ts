/**
 * Send Phone Code Response
 */
export interface SendPhoneCodeResponse {
  success: boolean;
  message?: string;
  data?: {
    expiresIn: number;
  };
}