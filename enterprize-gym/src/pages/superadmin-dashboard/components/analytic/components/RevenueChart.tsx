import Classes from "../style/analytic.module.css";
import ChartGrid from "./chartGrid";
import {
  CHART_WIDTH,
} from "../constant/growsChartConstant";
import createSmoothPath from "../utils/createSmoothPath";
import type {
  RevenueGrowthData,
} from "../interfaces/growthPerformanceData";

interface RevenueChartProps {
  data: RevenueGrowthData[];
}

export default function RevenueChart({
  data,
}: RevenueChartProps) {
  const values = data.map(
    (item) => item.revenue,
  );

  const path =
    createSmoothPath(values);

  return (
    <div className={Classes.revenueChart}>
      <div className={Classes.revenueYAxis}>
        <span>100</span>
        <span>80</span>
        <span>60</span>
        <span>40</span>
        <span>20</span>
        <span>0</span>
      </div>

      <div
        className={
          Classes.revenueChartArea
        }
      >
        <svg
          viewBox={`0 0 ${CHART_WIDTH} 68`}
          className={
            Classes.revenueSvg
          }
          preserveAspectRatio="none"
        >
          <ChartGrid
            width={CHART_WIDTH}
            height={68}
          />

          <path
            d={path}
            className={Classes.purpleLine}
          />
        </svg>

        <div
          className={
            Classes.growthMonths
          }
        >
          {data.map((item) => (
            <span key={item.month}>
              {item.month}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}