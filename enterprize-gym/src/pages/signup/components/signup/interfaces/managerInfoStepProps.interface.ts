/**
 * Manager Info Step Props Interface
 */
export interface ManagerInfoStepProps {
  onBack:()=>void;
  onSubmit: (data: ManagerInfoFormData) => void;
}

export interface ManagerInfoFormData {
  fullName: string;
  phone: string;
  pass: string;
  confirmPass:string
}