
import type { UserGrowthProps } from "../interfaces/userGrowthProps";
import Classes from "../style/analytic.module.css";



function UserGrowthMonths({
  data,
}: UserGrowthProps) {
  return (
    <div className={Classes.userGrowthMonths}>
      {data.map((item) => (
        <span key={item.month}>
          {item.month}
        </span>
      ))}
    </div>
  );
}

export default UserGrowthMonths;