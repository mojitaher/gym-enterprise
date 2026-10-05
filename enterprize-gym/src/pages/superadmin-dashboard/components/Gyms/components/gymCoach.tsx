import GymMemberList from "./gymListMember";

const MOCK_COACHES = [
  {
    id: "1",
    name: "علی رضایی",
    avatar:
      "https://api.dicebear.com/7.x/initials/svg?seed=علی",
    icon: "/icons/active.svg",
  },
  {
    id: "2",
    name: "محمد کریمی",
    avatar:
      "https://api.dicebear.com/7.x/initials/svg?seed=محمد",
    icon: "/icons/active.svg",
  },
];

export default function GymCoaches() {
  return (
    <GymMemberList
      title="مربی‌های باشگاه"
      placeholder="...جستجوی مربی"
      items={MOCK_COACHES}
    />
  );
}