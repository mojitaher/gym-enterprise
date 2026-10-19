import { useParams } from "react-router-dom";
import GymMemberProfile from "./gymMemberProfile";
import MOCK_PLANS from "../mockData/planData";

export default function GymPlanDetail() {
  const { planId } = useParams<{ planId: string }>();

  const plan = MOCK_PLANS.find(
    (item) => item.id === planId
  );

  if (!plan) {
    return <p>مربی موردنظر یافت نشد.</p>;
  }

  return (
    <GymMemberProfile
      member={plan}
      title="پروفایل مربی"
    />
  );
}