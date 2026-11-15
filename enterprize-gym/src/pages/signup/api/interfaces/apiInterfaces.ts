
export interface OwnerBody {
  firstName: string;
  lastName: string;
  username: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

export interface GymBody {
  name: string;
  phone: string;
  address: string;
  city: string;
  description: string;
}

export interface PlanBody {
  planId: string;
}


export interface RegisterOwnerResponse {
  registrationId?: string;
  success?: boolean;
  data?: {
    registrationId?: string;
  };
}


export interface Plan {
  id: string;
  name: string;
  description: string;
  priceToman: string;
  durationInDays: number;
  maxCoaches: number;
  maxAthletes: number | null;
}

export interface PlansResponse {
  success: boolean;
  data: Plan[];
}
