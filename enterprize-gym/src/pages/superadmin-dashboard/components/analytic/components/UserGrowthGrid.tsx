import {
  USER_GROWTH_CHART,
  USER_GROWTH_GRID,
} from "../constant/userGrowthChart";

import Classes from "../style/analytic.module.css";

function UserGrowthGrid() {
  return (
    <>
      {USER_GROWTH_GRID.map((value) => {
        const y =
          USER_GROWTH_CHART.height -
          (value / 100) *
            USER_GROWTH_CHART.height;

        return (
          <line
            key={`horizontal-${value}`}
            x1="0"
            y1={y}
            x2={USER_GROWTH_CHART.width}
            y2={y}
            className={Classes.chartGridLine}
          />
        );
      })}
    </>
  );
}

export default UserGrowthGrid;