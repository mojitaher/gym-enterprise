import { useGymProfileNavigation } from "../hook/useGymProfileNavigation";
import MOCK_MANAGERS from "../mockData/managerData";
import GymMemberList from "./gymListMember";


export default function GymManagers() {
const navigateToProfile = useGymProfileNavigation("managers");

  return (
    <GymMemberList
      title="مدیران باشگاه"
      placeholder="...جستجوی مدیر"
      items={MOCK_MANAGERS}
      onItemClick={(manager)=>navigateToProfile(manager.id)}
    />
  );
}