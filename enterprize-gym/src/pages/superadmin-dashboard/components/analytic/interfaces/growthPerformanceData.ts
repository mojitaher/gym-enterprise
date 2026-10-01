export interface GymGrowthData {
  month: string;
  gym: number;
  trainee: number;
  coach: number;
}

export interface SubscriptionGrowthData {
  month: string;
  active: number;
  inactive: number;
}

export interface RevenueGrowthData {
  month: string;
  revenue: number;
}
export interface GrowthPerformanceData {
  gymGrowth: GymGrowthData[];
  subscriptionGrowth: SubscriptionGrowthData[];
  revenueGrowth: RevenueGrowthData[];
}