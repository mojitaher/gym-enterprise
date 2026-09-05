/**
 * Verify Code Response
 */
export interface VerifyCodeResponse {
  success: boolean;
  message?: string;
  data?: {
    // token: string;
    user: {
      id: string;
      phone: string;
      role: "trainee" | "coach" | "manager";
    };
  };
}