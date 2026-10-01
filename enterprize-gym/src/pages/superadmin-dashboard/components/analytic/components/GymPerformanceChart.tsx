import Classes from "../style/analytic.module.css";
import { GYM_PERFORMANCE_CHART } from "../constant/gymPerformanceChart";
import type GymPerformanceProps from "../interfaces/gymPerformanceProps";

function GymPerformanceChart({
  data,
}: GymPerformanceProps) {
  const total =
    data.active + data.inactive;

  const activeRatio =
    total > 0
      ? data.active / total
      : 0;

  const activeAngle =
    activeRatio * 360;

  const startAngle = -90;
  const endAngle =
    startAngle + activeAngle;

  const radius =
    GYM_PERFORMANCE_CHART.radius;

  const center =
    GYM_PERFORMANCE_CHART.center;

  const startX =
    center +
    radius *
      Math.cos(
        (startAngle * Math.PI) / 180
      );

  const startY =
    center +
    radius *
      Math.sin(
        (startAngle * Math.PI) / 180
      );

  const endX =
    center +
    radius *
      Math.cos(
        (endAngle * Math.PI) / 180
      );

  const endY =
    center +
    radius *
      Math.sin(
        (endAngle * Math.PI) / 180
      );

  const largeArcFlag =
    activeAngle > 180 ? 1 : 0;

  const activePath =
    activeRatio === 0
      ? ""
      : activeRatio === 1
        ? `M ${center} ${center}
           m -${radius} 0
           a ${radius} ${radius} 0 1 0 ${radius * 2} 0
           a ${radius} ${radius} 0 1 0 -${radius * 2} 0`
        : `
          M ${center} ${center}
          L ${startX} ${startY}
          A ${radius} ${radius}
            0
            ${largeArcFlag}
            1
            ${endX} ${endY}
          Z
        `;

  return (
    <svg
      viewBox="0 0 170 170"
      className={Classes.gymPieChart}
    >
      <circle
        cx={center}
        cy={center}
        r={radius}
        className={Classes.gymPieInactive}
      />

      {activeRatio > 0 && (
        <path
          d={activePath}
          className={Classes.gymPieActive}
        />
      )}
    </svg>
  );
}

export default GymPerformanceChart;