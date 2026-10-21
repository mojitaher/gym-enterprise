
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Search } from "../../../../shared/ui/molcoule/search/search";
import { removeSpaces } from "../../../../shared/utils/string.utils";
import { ListItem } from "../../../../shared/ui/molcoule/listItem/listItem";
import { Button } from "../../../../shared/ui/atoms/button/button";

import type SubscriptionData from "./interfaces/subscriptionData.interface";
import { MOCK_SUBSCRIPTIONS } from "./mockData/subscribsionData";

import Classes from "./style/subscription.module.css";

interface SubscriptionsProps {
  showExpiredOnly?: boolean;
}

export default function Subscriptions({
  showExpiredOnly = false,
}: SubscriptionsProps) {
  const [subscriptions] = useState<SubscriptionData[]>(
    MOCK_SUBSCRIPTIONS
  );
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const normalizedQuery = removeSpaces(
    searchQuery.toLowerCase()
  );

  const filteredSubscriptions = subscriptions.filter(
    (subscription) => {
      const matchesSearch = removeSpaces(
        subscription.buyerName.toLowerCase()
      ).includes(normalizedQuery);

      const isExpired = subscription.daysLeft <= 0;

      const matchesStatus = showExpiredOnly
        ? isExpired
        : !isExpired;

      return matchesSearch && matchesStatus;
    }
  );

  return (
    <section className={Classes.subscriptionContainer}>
      {!showExpiredOnly && (
        <div className={Classes.subscriptionToolbar}>
          <div
            className={Classes.subscriptionSearchContainer}
            dir="ltr"
          >
            <Search
              placeholder="Search"
              value={searchQuery}
              onChange={setSearchQuery}
              onSearch={setSearchQuery}
            />
          </div>

          <Button
            variant="primary"
            size="small"
            onClick={() =>
              navigate("/dashboard/superadmin/subscriptions/expired")
            }
          >
            Expireds
          </Button>
        </div>
      )}

      <div className={Classes.subscriptionListContainer}>
        {filteredSubscriptions.length > 0 ? (
          filteredSubscriptions.map((subscription) => (
            <ListItem
              key={subscription.id}
              className={Classes.listItems}
              avatar={subscription.avatar}
              username={subscription.buyerName}
              info={`${subscription.daysLeft} روز مونده`}
            />
          ))
        ) : (
          <p className={Classes.subscriptionEmptyMessage}>
            No subscriptions found
          </p>
        )}
      </div>
    </section>
  );
}
