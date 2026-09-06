/**
 * Gym Info Step Props Interface
 */
export interface GymInfoStepProps {
  onBack:()=>void;
  onSubmit: (data: GymInfoFormData) => void;
}

export interface GymInfoFormData {
  name: string;
  phone: string;
  address:string;
  type: string;
}