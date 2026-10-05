export default interface GymMemberListProps {
  title: string;
  placeholder: string;
  items: {
    id: string;
    name: string;
    avatar: string;
    icon: string;
  }[];
}