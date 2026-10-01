import Classes from "../style/analytic.module.css";
import GymPerformanceChart from "./GymPerformanceChart";
import GymPerformanceInfo from "./GymPerformanceInfo";
import type GymPerformanceProps from "../interfaces/gymPerformanceProps";



export default function GymPerformance({data}:GymPerformanceProps) {
  return (
    <section className={Classes.gymPerformance}>
      <h2 className={Classes.gymPerformanceTitle}>
        Gym Performance
      </h2>

      <div className={Classes.gymPerformanceContent}>
        <GymPerformanceChart
          data={data}
        />

        <GymPerformanceInfo
          data={data}
        />
      </div>
    </section>
  );
}