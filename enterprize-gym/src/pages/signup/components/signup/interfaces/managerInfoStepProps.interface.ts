/**
 * Manager Info Step Props Interface
 */
export interface ManagerInfoStepProps {
  onSubmit: (data: ManagerInfoFormData) => void;
}

export interface ManagerInfoFormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}