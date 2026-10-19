export interface GymMember {
  id: string;
  name: string;
  avatar: string;
  icon?: string;
  phone?: string;
  description?: string;
  fitnessLevel?: string;
  membershipDate?: string;
  workingHours?: string;
}

export default interface GymMemberListProps {
  title: string;
  placeholder: string;
  items: GymMember[];
  onItemClick?: (item: GymMember) => void;
}