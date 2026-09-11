/**
 * Send Phone Code Response
 */
export interface SendPhoneCodeResponse {
  success: boolean;
  message?: string;
  data?: {
    // ⛔ کامنت شده: expiresIn غیرفعال شده
    expiresIn: number;
  };
}