import { useParams } from "react-router-dom";
import GymMemberProfile from "./gymMemberProfile";
import MOCK_TRAINEE from "../mockData/traineeData";

export default function GymTraineeDetail() {
  const { traineeId } = useParams<{ traineeId: string }>();

  const trainee = MOCK_TRAINEE.find(
    (item) => item.id === traineeId
  );

  if (!trainee) {
    return <p>مربی موردنظر یافت نشد.</p>;
  }

  return (
    <GymMemberProfile
      member={trainee}
      title="پروفایل مربی"
    />
  );
}