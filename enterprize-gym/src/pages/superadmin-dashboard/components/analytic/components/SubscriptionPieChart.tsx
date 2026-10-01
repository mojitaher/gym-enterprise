import Classes from "../style/analytic.module.css";
import type SubscriptionProps from "../interfaces/subscriptionProps";

function SubscriptionPieChart({
  data,
}: SubscriptionProps) {
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

  const radius = 81;
  const center = 85;

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
      className={
        Classes.subscriptionPieChart
      }
    >
      <circle
        cx={center}
        cy={center}
        r={radius}
        className={
          Classes.subscriptionInactive
        }
      />

      {activeRatio > 0 &&
        activeRatio < 1 && (
          <path
            d={activePath}
            className={
              Classes.subscriptionActive
            }
          />
        )}

      {activeRatio === 1 && (
        <circle
          cx={center}
          cy={center}
          r={radius}
          className={
            Classes.subscriptionActive
          }
        />
      )}
    </svg>
  );
}

export default SubscriptionPieChart;