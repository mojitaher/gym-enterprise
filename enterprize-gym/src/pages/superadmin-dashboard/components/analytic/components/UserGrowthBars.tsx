import type { UserGrowthItem } from "../interfaces/userGrowsItem";
import {
  USER_GROWTH_CHART,
  USER_GROWTH_SERIES,
} from "../constant/userGrowthChart";

import {
  getBarHeight,
  getBarX,
} from "../utils/userGrowth.utils";

interface UserGrowthBarsProps {
  data: UserGrowthItem[];
}

function UserGrowthBars({
  data,
}: UserGrowthBarsProps) {
  return (
    <>
      {data.map((item, groupIndex) => (
        <g key={item.month}>
          {USER_GROWTH_SERIES.map(
            (series, seriesIndex) => {
              const height = getBarHeight(
                item[series.key],
              );

              const x = getBarX(
                groupIndex,
                seriesIndex,
                data.length,
              );

              const y =
                USER_GROWTH_CHART.height -
                height;

              return (
                <rect
                  key={`${item.month}-${series.key}`}
                  x={x}
                  y={y}
                  width={
                    USER_GROWTH_CHART.barWidth
                  }
                  height={height}
                  fill={series.color}
                />
              );
            },
          )}
        </g>
      ))}
    </>
  );
}

export default UserGrowthBars;