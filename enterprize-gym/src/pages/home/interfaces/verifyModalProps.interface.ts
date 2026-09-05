/**
 * Verify Modal Props Interface
 */
export interface VerifyModalProps {
  expiresIn: number;
  onBack: () => void;
  onSubmit: (code: string) => void;
  isVerifying: boolean;
}