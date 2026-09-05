/**
 * Signup Success Step Props Interface
 */
export interface SignupSuccessStepProps {
  gymData: {
    name: string;
    phone: string;
    password: string;
  } | null;
  managerData: {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
  } | null;
}