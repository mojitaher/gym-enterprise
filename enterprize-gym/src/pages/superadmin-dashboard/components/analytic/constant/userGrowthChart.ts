export const USER_GROWTH_CHART = {
  width: 290,
  height: 133,
  barWidth: 24,
  barGap: 1,
} as const;

export const USER_GROWTH_GRID = [
  0,
  25,
  50,
  75,
  100,
] as const;

export const USER_GROWTH_SERIES = [
  {
    key: "gym",
    label: "Gym",
    color: "#706EE7",
  },
  {
    key: "trainee",
    label: "Trainee",
    color: "#55C4AE",
  },
  {
    key: "coach",
    label: "Coach",
    color: "#FF928A",
  },
] as const;