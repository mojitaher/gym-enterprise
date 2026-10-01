import Classes from "../style/analytic.module.css";
import type { LineChartProps } from "../interfaces/lineChartProps";
import ChartGrid from "./chartGrid";
import {
  CHART_HEIGHT,
  CHART_WIDTH,
} from "../constant/growsChartConstant";
import createSmoothPath from "../utils/createSmoothPath";

export default function LineChart<TData extends object>({
  data,
  series,
}: LineChartProps<TData>) {
  return (
    <div className={Classes.growthLineChart}>
      <div className={Classes.growthYAxis}>
        <span>100</span>
        <span>80</span>
        <span>60</span>
        <span>40</span>
        <span>20</span>
        <span>0</span>
      </div>

      <div className={Classes.growthChartArea}>
        <svg
          viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`}
          className={Classes.growthSvg}
          preserveAspectRatio="none"
        >
          <ChartGrid
            width={CHART_WIDTH}
            height={CHART_HEIGHT}
          />

          {series.map((item) => {
            const values = data.map(
              (entry) => Number(entry[item.key])
            );

            const path = createSmoothPath(values);

            return (
              <g key={String(item.key)}>
                <path
                  d={path}
                  className={item.lineClass}
                />

                {values.map((value, pointIndex) => {
                  const x =
                    values.length === 1
                      ? CHART_WIDTH / 2
                      : 4 +
                        (pointIndex /
                          (values.length - 1)) *
                          (CHART_WIDTH - 8);

                  const y =
                    CHART_HEIGHT -
                    4 -
                    (value / 100) *
                      (CHART_HEIGHT - 8);

                  return (
                    <circle
                      key={`${String(item.key)}-${pointIndex}`}
                      cx={x}
                      cy={y}
                      r="2.4"
                      className={item.pointClass}
                    />
                  );
                })}
              </g>
            );
          })}
        </svg>

        <div className={Classes.growthMonths}>
          {data.map((item, index) => (
            <span key={index}>
              {String(item["month" as keyof TData])}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}