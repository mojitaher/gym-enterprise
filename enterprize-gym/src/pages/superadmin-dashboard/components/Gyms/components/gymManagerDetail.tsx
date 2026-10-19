import { useParams } from "react-router-dom";
import GymMemberProfile from "./gymMemberProfile";
import MOCK_MANAGERS from "../mockData/managerData";

export default function GymManagerDetail() {
  const { managerId } = useParams<{ managerId: string }>();

  const manager = MOCK_MANAGERS.find(
    (item) => item.id === managerId
  );

  if (!manager) {
    return <p>مربی موردنظر یافت نشد.</p>;
  }

  return (
    <GymMemberProfile
      member={manager}
      title="پروفایل مربی"
    />
  );
}