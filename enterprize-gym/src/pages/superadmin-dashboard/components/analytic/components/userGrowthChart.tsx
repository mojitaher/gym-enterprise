import type { UserGrowthItem } from "../interfaces/userGrowsItem";
import { USER_GROWTH_CHART } from "../constant/userGrowthChart";
import UserGrowthGrid from "./UserGrowthGrid";
import UserGrowthBars from "./UserGrowthBars";
import UserGrowthMonths from "./UserGrowthMonths";

import Classes from "../style/analytic.module.css";

interface UserGrowthChartProps {
  data: UserGrowthItem[];
}

function UserGrowthChart({
  data,
}: UserGrowthChartProps) {
  return (
    <div className={Classes.userGrowthChart}>
      <div className={Classes.userGrowthYAxis}>
        <span>100</span>
        <span>75</span>
        <span>50</span>
        <span>25</span>
        <span>0</span>
      </div>

      <div className={Classes.userGrowthChartArea}>
        <svg
          viewBox={`0 0 ${USER_GROWTH_CHART.width} ${USER_GROWTH_CHART.height}`}
          className={Classes.userGrowthSvg}
        >
          <UserGrowthGrid />

          <UserGrowthBars data={data} />
        </svg>

        <UserGrowthMonths data={data} />
      </div>
    </div>
  );
}

export default UserGrowthChart;