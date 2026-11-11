import { useNavigate } from "react-router-dom";
import clsx from "clsx";

import { ListItem } from "../../../../shared/ui/molcoule/listItem/listItem";

import Styles from "./style/suspends.module.css";
import { MOCK_SUSPENDS_COUNTS } from "./mockData/mockData";
import { SUSPENDS_CATEGORIES } from "./constants/suspendsConstant";

export default function Suspends() {
  const navigate = useNavigate();

  return (
    <section className={Styles.suspendsContainer}>
      <div className={Styles.suspendsHeader}>
        <h2 className={Styles.suspendsTitle}>Suspends</h2>
      </div>

      <div className={Styles.suspendsListContainer}>
        {SUSPENDS_CATEGORIES.map((suspend) => (
          <div key={suspend.id} className="gap-5">
            <ListItem
              username={suspend.title}
              info={MOCK_SUSPENDS_COUNTS[suspend.id]}
              className={clsx(Styles.groupItems)}
              onClick={() =>
                navigate(`/dashboard/superadmin/suspends/${suspend.id}`)
              }
            />
          </div>
        ))}
      </div>
    </section>
  );
}