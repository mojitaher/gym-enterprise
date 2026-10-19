import { useParams } from "react-router-dom";
import GymMemberProfile from "./gymMemberProfile";
import MOCK_COACHES from "../mockData/coachData";

export default function GymCoachDetail() {
  const { coachId } = useParams<{ coachId: string }>();

  const coach = MOCK_COACHES.find(
    (item) => item.id === coachId
  );

  if (!coach) {
    return <p>مربی موردنظر یافت نشد.</p>;
  }

  return (
    <GymMemberProfile
      member={coach}
      title="پروفایل مربی"
    />
  );
}