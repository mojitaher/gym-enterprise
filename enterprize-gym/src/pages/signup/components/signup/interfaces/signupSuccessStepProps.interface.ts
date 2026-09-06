/**
 * Signup Success Step Props Interface
 */
export interface SignupSuccessStepProps {
  gymData: {
    name: string;
    phone: string;
    address: string;
    type: string;
  } | null;
  managerData: {
    fullName: string;
    phone: string;
    pass: string;
    confirmPass: string;
  } | null;
}