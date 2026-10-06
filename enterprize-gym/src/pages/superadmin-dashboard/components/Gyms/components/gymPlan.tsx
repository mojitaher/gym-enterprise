import GymMemberList from "./gymListMember";

const MOCK_TRAINEES = [
  {
    id: "1",
    name: "رضا احمدی",
    avatar:
      "https://api.dicebear.com/7.x/initials/svg?seed=رضا",
    icon: "/icons/active.svg",
  },
  {
    id: "2",
    name: "مهدی محمدی",
    avatar:
      "https://api.dicebear.com/7.x/initials/svg?seed=مهدی",
    icon: "/icons/active.svg",
  },
];

export default function GymPlans() {
  return (
    <GymMemberList
      title="ورزشکاران باشگاه"
      placeholder="...جستجوی ورزشکار"
      items={MOCK_TRAINEES}
    />
  );
}