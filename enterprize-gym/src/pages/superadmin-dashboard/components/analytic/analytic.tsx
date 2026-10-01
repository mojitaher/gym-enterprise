
import GrowthPerformance from "./components/growthPerformance";
import GymPerformance from "./components/gymPerformance";
import Overview from "./components/overview";
// import GrowthPerformance from "./components/growthPerformance";
import SubAnalytics from "./components/subAnalytics";
import UserGrowth from "./components/UserGrowth";
import Classes from "./style/analytic.module.css"
const growthPerformanceData = {
 gymGrowth: [
    { month: "Jan", gym: 70, trainee: 55, coach: 25 },
    { month: "Feb", gym: 85, trainee: 65, coach: 85 },
    { month: "Mar", gym: 55, trainee: 45, coach: 45 },
    { month: "Apr", gym: 75, trainee: 62, coach: 60 },
    { month: "May", gym: 78, trainee: 35, coach: 35 },
    { month: "Jun", gym: 30, trainee: 65, coach: 20 },
  ],

  subscriptionGrowth: [
    {
      month: "Jan",
      active: 20,
      inactive: 75,
    },
    {
      month: "Feb",
      active: 100,
      inactive: 50,
    },
    {
      month: "Mar",
      active: 60,
      inactive: 25,
    },
    {
      month: "Apr",
      active: 75,
      inactive: 35,
    },
    {
      month: "May",
      active: 85,
      inactive: 20,
    },
    {
      month: "Jun",
      active: 95,
      inactive: 65,
    },
  ],

  revenueGrowth: [
    {
      month: "Jan",
      revenue: 70,
    },
    {
      month: "Feb",
      revenue: 40,
    },
    {
      month: "Mar",
      revenue: 65,
    },
    {
      month: "Apr",
      revenue: 85,
    },
    {
      month: "May",
      revenue: 88,
    },
    {
      month: "Jun",
      revenue: 28,
    },
  ],
};
const OVERVIEW_ITEMS = [
  {totalGym: 100,
  monthlyRevenue: 50,
  totalCoaches: 10,
  newUsers: 30,
  totalTrainees: 1000,}
];
const subscribeMockData={
  active: 30,
  inactive: 70
}
const GymPerformanceMockData={
  active: 90,
  inactive: 1
}

  const userGrowthData= [
    {
      "month": "Jan",
      "gym": 25,
      "trainee": 100,
      "coach": 50
    },
    {
      "month": "Feb",
      "gym": 65,
      "trainee": 65,
      "coach": 86
    },
    {
      "month": "Mar",
      "gym": 10,
      "trainee": 62,
      "coach": 45
    }
  
  ]
export default function AnalyticComponent() {
  return (
    <main
      className={
        Classes.adminDashboard
      }
    >
      <div
        className={
          Classes.dashboardLeft
        }
      >
        <UserGrowth data={userGrowthData}/>

        <GrowthPerformance data={growthPerformanceData}/>
      </div>

      <div
        className={
          Classes.dashboardRight
        }
      >
        <Overview data={OVERVIEW_ITEMS}/>

        <GymPerformance data={GymPerformanceMockData}/>

        <SubAnalytics data={subscribeMockData}/>
      </div>
    </main>
  );
}