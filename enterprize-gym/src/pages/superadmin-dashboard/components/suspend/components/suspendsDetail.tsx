import { useParams } from "react-router-dom";

import { ListItem } from "../../../../../shared/ui/molcoule/listItem/listItem";

import { MOCK_SUSPENDS_DATA } from "../mockData/suspendsData";

import Styles from "../style/suspends.module.css";
import { SUSPENDS_DETAILS_DATA } from "../constants/suspendsDetailConstant";

export default function SuspendsDetail() {
  const { suspendType } = useParams();

  const selectedCategory = SUSPENDS_DETAILS_DATA.find(
    (category) => category.key === suspendType
  );

  const filteredData = MOCK_SUSPENDS_DATA.filter(
    (item) => item.suspendType === suspendType
  );

  return (
    <section className={Styles.suspendsContainer}>
      <div className={Styles.suspendsHeader}>
        <h2 className={Styles.suspendsTitle}>
          {selectedCategory?.title}
        </h2>
      </div>

      <div className={Styles.suspendsListContainer}>
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <ListItem
              key={item.id}
              username={item.username}
              className={Styles.groupItems}
            />
          ))
        ) : (
          <p className={Styles.emptySuspends}>
            No suspended accounts.
          </p>
        )}
      </div>
    </section>
  );
}