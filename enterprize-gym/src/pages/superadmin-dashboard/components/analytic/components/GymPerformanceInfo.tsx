import Classes from "../style/analytic.module.css";
import type GymPerformanceProps from "../interfaces/gymPerformanceProps";



function GymPerformanceInfo({
  data,
}: GymPerformanceProps) {
  return (
    <div className={Classes.gymPerformanceInfo}>
      <span>
        Active Gym: {data.active}
      </span>

      <span>
        Inactive Gyms: {data.inactive}
      </span>
    </div>
  );
}

export default GymPerformanceInfo;