import GymMemberList from "./gymListMember";
import MOCK_COACHES from "../mockData/coachData";
import { useGymProfileNavigation } from "../hook/useGymProfileNavigation";


export default function GymCoaches() {
  const navigateToProfile = useGymProfileNavigation("coaches");
  
 
  return (
    <GymMemberList
      placeholder="...جستجوی مربی"
      items={MOCK_COACHES}
      onItemClick={(coach)=>navigateToProfile(coach.id)}
    />
  );
}