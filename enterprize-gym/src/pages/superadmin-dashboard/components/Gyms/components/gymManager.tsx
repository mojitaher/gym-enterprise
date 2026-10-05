import GymMemberList from "./gymListMember";

const MOCK_MANAGERS = [
  {
    id: "1",
    name: "علی رضایی",
    avatar:
      "https://api.dicebear.com/7.x/initials/svg?seed=علی",
    icon: "/icons/active.svg",
  },
];

export default function GymManagers() {
  return (
    <GymMemberList
      title="مدیران باشگاه"
      placeholder="...جستجوی مدیر"
      items={MOCK_MANAGERS}
    />
  );
}