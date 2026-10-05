import { useState } from "react";

import Classes from "../styles/Gyms.module.css";
import type GymMemberListProps from "../interfaces/gymMember.interface";
import { ListItem } from "../../../../../shared/ui/molcoule/listItem/listItem";
import { Search } from "../../../../../shared/ui/molcoule/search/search";
import { removeSpaces } from "../../../../../shared/utils/string.utils";



export default function GymMemberList({
  title,
  placeholder,
  items,
}: GymMemberListProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const normalizedQuery = removeSpaces(
    searchQuery.toLowerCase()
  );

  const filteredItems = items.filter((item) =>
    removeSpaces(
      item.name.toLowerCase()
    ).includes(normalizedQuery)
  );

  return (
    <div className={Classes.container}>
      <h2 className={Classes.title}>
        {title}
      </h2>

      <div
        className={Classes.searchContainer}
        dir="ltr"
      >
        <Search
          placeholder={placeholder}
          value={searchQuery}
          onChange={setSearchQuery}
          onSearch={setSearchQuery}
        />
      </div>

      <div className={Classes.listContainer}>
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <ListItem
              key={item.id}
              avatar={item.avatar}
              username={item.name}
              icon={item.icon}
              className={Classes.listItem}
            />
          ))
        ) : (
          <p className={Classes.emptyMessage}>
            موردی یافت نشد
          </p>
        )}
      </div>
    </div>
  );
}