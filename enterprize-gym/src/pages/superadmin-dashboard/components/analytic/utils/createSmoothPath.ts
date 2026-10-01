import {
  CHART_HEIGHT,
  CHART_WIDTH,
} from "../constant/growsChartConstant";

export default function createSmoothPath(
  values: number[],
) {
  const left = 4;
  const right = CHART_WIDTH - 4;
  const top = 4;
  const bottom = CHART_HEIGHT - 4;

  const step =
    (right - left) /
    (values.length - 1);

  const points = values.map(
    (value, index) => ({
      x: left + index * step,
      y:
        bottom -
        (value / 100) *
          (bottom - top),
    }),
  );

  let path =
    `M ${points[0].x} ${points[0].y}`;

  for (
    let index = 0;
    index < points.length - 1;
    index += 1
  ) {
    const current = points[index];
    const next = points[index + 1];

    const controlX =
      (current.x + next.x) / 2;

    path += `
      C
      ${controlX} ${current.y},
      ${controlX} ${next.y},
      ${next.x} ${next.y}
    `;
  }

  return path;
}