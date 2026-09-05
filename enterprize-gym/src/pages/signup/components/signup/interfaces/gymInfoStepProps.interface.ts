/**
 * Gym Info Step Props Interface
 */
export interface GymInfoStepProps {
  onSubmit: (data: GymInfoFormData) => void;
}

export interface GymInfoFormData {
  name: string;
  phone: string;
  password: string;
}