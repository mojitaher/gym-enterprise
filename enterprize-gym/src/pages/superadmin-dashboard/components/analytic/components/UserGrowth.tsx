import type { UserGrowthProps } from "../interfaces/userGrowthProps";

import UserGrowthChart from "./userGrowthChart";
import UserGrowthLegend from "./UserGrowthLegend";

import Classes from "../style/analytic.module.css";

function UserGrowth({
  data,
}: UserGrowthProps) {
  return (
    <section className={Classes.userGrowth}>
      <h2 className={Classes.userGrowthTitle}>
        User Growth
      </h2>

      <UserGrowthChart data={data} />

      <UserGrowthLegend />
    </section>
  );
}

export default UserGrowth;