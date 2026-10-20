export interface GymMember {
  id: string;
  name: string;
  avatar: string;
  icon?: string;
  phone?: string;
  description?: string;
  age?: number;
  fitnessLevel?: string;
  membershipDate?: string;
  workingHours?: string;
}

export default interface GymMemberListProps {
  placeholder: string;
  items: GymMember[];
  onItemClick?: (item: GymMember) => void;
}

export interface GymMemberProfileProps {
  member: GymMember;
}

