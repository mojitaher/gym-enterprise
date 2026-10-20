

import GymMemberList from "./gymListMember";
import MOCK_PLANS from "../mockData/planData";
import { useGymProfileNavigation } from "../hook/useGymProfileNavigation";

export default function GymPlans() {
  const navigateToProfile = useGymProfileNavigation("plans");

  return (
    <>
      <GymMemberList
        placeholder="جستجوی پلن..."
        items={MOCK_PLANS}
        onItemClick={(plan)=>navigateToProfile(plan.id)}
      />

     
    </>
  );
}