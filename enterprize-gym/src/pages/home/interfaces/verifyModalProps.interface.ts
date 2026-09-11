/**
 * Verify Modal Props Interface
 */
export interface VerifyModalProps {
  // ⛔ کامنت شده: expiresIn غیرفعال شده
  expiresIn: number;
  onBack: () => void;
  onSubmit: (code: string) => void;
  isVerifying: boolean;
}