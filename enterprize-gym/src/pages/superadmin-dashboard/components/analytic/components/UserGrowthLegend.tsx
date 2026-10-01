import {
  USER_GROWTH_SERIES,
} from "../constant/userGrowthChart";

import Classes from "../style/analytic.module.css";

function UserGrowthLegend() {
  return (
    <div className={Classes.userGrowthLegend}>
      {USER_GROWTH_SERIES.map(
        (series) => (
          <div
            key={series.key}
            className={
              Classes.userGrowthLegendItem
            }
          >
            <span
              className={
                Classes.legendColor
              }
              style={{
                backgroundColor:
                  series.color,
              }}
            />

            <span>
              {series.label}
            </span>
          </div>
        ),
      )}
    </div>
  );
}

export default UserGrowthLegend;