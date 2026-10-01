import type GrowthPerformanceProps from "../interfaces/growthPerformanceProps";
import LineChart from "./LineChart";
import RevenueChart from "./RevenueChart";
import Classes from "../style/analytic.module.css";

export default function GrowthPerformance({
  data,
}: GrowthPerformanceProps) {
  return (
    <section className={Classes.growthPerformance}>
      <h2 className={Classes.growthPerformanceTitle}>
        Growth Performance
      </h2>

      <div className={Classes.growthSection}>
        <h3>Gym Growth:</h3>

        <LineChart
  data={data.gymGrowth}
  series={[
    {
      key: "gym",
      lineClass: Classes.purpleLine,
      pointClass: Classes.purplePoint,
    },
    {
      key: "trainee",
      lineClass: Classes.greenLine,
      pointClass: Classes.greenPoint,
    },
    {
      key: "coach",
      lineClass: Classes.coralLine,
      pointClass: Classes.coralPoint,
    },
  ]}
/>
      </div>

      <div className={Classes.growthSection}>
        <h3>Subscription Growth:</h3>

        <LineChart
          data={data.subscriptionGrowth}
          series={[
            {
              key: "active",
              lineClass: Classes.purpleLine,
              pointClass: Classes.purplePoint,
            },
            {
              key: "inactive",
              lineClass: Classes.greenLine,
              pointClass: Classes.greenPoint,
            },
          ]}
        />
      </div>

      <div className={Classes.growthSection}>
        <h3>Revenue Growth:</h3>

        <RevenueChart data={data.revenueGrowth} />
      </div>
    </section>
  );
}