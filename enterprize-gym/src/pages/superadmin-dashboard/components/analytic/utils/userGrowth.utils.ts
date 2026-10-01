import {
  USER_GROWTH_CHART,
  USER_GROWTH_SERIES,
} from "../constant/userGrowthChart";

export const getBarHeight = (
  value: number,
) => {
  return (
    (value / 100) *
    USER_GROWTH_CHART.height
  );
};


export const getBarX = (
  groupIndex: number,
  seriesIndex: number,
  dataLength: number,
) => {
  const groupWidth =
    USER_GROWTH_SERIES.length *
      USER_GROWTH_CHART.barWidth +
    (USER_GROWTH_SERIES.length - 1) *
      USER_GROWTH_CHART.barGap;

  const groupCenter =
    (groupIndex + 0.5) *
    (USER_GROWTH_CHART.width / dataLength);

  const groupStart =
    groupCenter -
    groupWidth / 2;

  return (
    groupStart +
    seriesIndex *
      (
        USER_GROWTH_CHART.barWidth +
        USER_GROWTH_CHART.barGap
      )
  );
};