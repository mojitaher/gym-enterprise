import { useGymProfileNavigation } from "../hook/useGymProfileNavigation";
import type { GymMember } from "../interfaces/gymMember.interface";
import GymMemberList from "./gymListMember";

const MOCK_TRAINEES: GymMember[] = [
  {
    id: "1",
    name: "رضا احمدی",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Reza",
    icon: "/icons/active.svg",
    phone: "09120000005",
    description: "عضو باشگاه با برنامه تمرینی فعال",
  },
  {
    id: "2",
    name: "مهدی محمدی",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Mehdi",
    icon: "/icons/active.svg",
    phone: "09120000006",
    description: "عضو باشگاه با برنامه غذایی فعال",
  },
];

export default function GymTrainees() {
  const navigateToProfile = useGymProfileNavigation("trainees");
 
  
  return (
    <GymMemberList
      placeholder="...جستجوی ورزشکار"
      items={MOCK_TRAINEES}
      onItemClick={(trainee)=>navigateToProfile(trainee.id)}
    />
  );
}