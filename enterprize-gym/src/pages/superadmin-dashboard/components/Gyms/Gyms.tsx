import { useState } from "react";

import { Search } from "../../../../shared/ui/molcoule/search/search";
import { ListItem } from "../../../../shared/ui/molcoule/listItem/listItem";
import { removeSpaces } from "../../../../shared/utils/string.utils";
import type { GymData } from "./interfaces/GymData.interface";

import Classes from "./styles/Gyms.module.css";
import GymDetail from "./components/gymsDetail";

/**
 * داده‌های نمونه باشگاه‌ها برای تست
 */
const MOCK_GYMS: GymData[] = [
  {
    id: "1",
    name: "باشگاه بدنسازی پارس",
    address: "تهران، خیابان ولیعصر",
    managerName: "علی رضایی",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=پارس",
    icon: "/icons/active.svg",
  },
  {
    id: "2",
    name: "باشگاه آرین اسپورت",
    address: "تهران، خیابان انقلاب",
    managerName: "محمد کریمی",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=آرین",
    icon: "/icons/active.svg",
  },
  {
    id: "3",
    name: "باشگاه زرفیم",
    address: "شیراز، میدان نمازی",
    managerName: "سارا محمدی",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=زرفیم",
    icon: "/icons/active.svg",
  },
  {
    id: "4",
    name: "باشگاه المپیک",
    address: "اصفهان، خیابان طالقانی",
    managerName: "حمید حسینی",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=المپیک",
    icon: "/icons/active.svg",
  },
  {
    id: "5",
    name: "باشگاه سورن",
    address: "تبریز، چهارراه آزادی",
    managerName: "رضا تقی‌پور",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=سورن",
    icon: "/icons/active.svg",
  },
  {
    id: "6",
    name: "باشگاه آکادمی فیتنس",
    address: "مشهد، بلوار سجاد",
    managerName: "مهدی جعفری",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=آکادمی",
    icon: "/icons/active.svg",
  },
];

export default function Gyms() {
  const [gyms, setGyms] = useState<GymData[]>(MOCK_GYMS);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGymId, setSelectedGymId] = useState<string | null>(null);

  const normalizedQuery = removeSpaces(searchQuery.toLowerCase());

  const filteredGyms = gyms.filter((gym) =>
    removeSpaces(gym.name.toLowerCase()).includes(normalizedQuery) ||
    removeSpaces(gym.address.toLowerCase()).includes(normalizedQuery) ||
    removeSpaces(gym.managerName.toLowerCase()).includes(normalizedQuery)
  );

  const handleDeleteGym = (id: string) => {
  setGyms((currentGyms) =>
    currentGyms.filter((gym) => gym.id !== id)
  );

  setSelectedGymId(null);
};
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };
  const handleDetail =(id:string)=>{
    setSelectedGymId(id)
  }

 return (
  <>
    {selectedGymId ? (
      <GymDetail
  id={selectedGymId}
  onBack={() => setSelectedGymId(null)}
  onDelete={handleDeleteGym}
/>
    ) : (
      <div className={Classes.container}>
        <h2 className={Classes.title}>مدیریت باشگاه‌ها</h2>

        <div className={Classes.searchContainer} dir="ltr">
          <Search
            placeholder="...جستجوی باشگاه"
            value={searchQuery}
            onChange={handleSearch}
            onSearch={handleSearch}
          />
        </div>

        <div className={Classes.listContainer}>
          {filteredGyms.length > 0 ? (
            filteredGyms.map((gym) => (
              <ListItem
                key={gym.id}
                onClick={()=>handleDetail(gym.id)}
                avatar={gym.avatar}
                username={gym.name}
                secondaryInfo={gym.address}
                info={gym.managerName}
                icon={gym.icon}
                className={Classes.listItem}
              />
            ))
          ) : (
            <p className={Classes.emptyMessage}>
              باشگاهی یافت نشد
            </p>
          )}
        </div>
      </div>
    )}
  </>
)};