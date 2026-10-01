import type OVERVIEW_PROPS from "../interfaces/overviewProps";
import Classes from "../style/analytic.module.css";

export default function Overview({
  data,
}: OVERVIEW_PROPS) {
  const overview = data[0];

  return (
    <section
      className={Classes.overview}
    >
      <h2
        className={
          Classes.overviewTitle
        }
      >
        Overview
      </h2>

      <div
        className={
          Classes.overviewGrid
        }
      >
        <div
          className={
            Classes.overviewItem
          }
        >
          <span>Total Gym:</span>
          <span>{overview.totalGym}</span>
        </div>

        <div
          className={
            Classes.overviewItem
          }
        >
          <span>Monthly Revenue:</span>
          <span>
            {overview.monthlyRevenue}
          </span>
        </div>

        <div
          className={
            Classes.overviewItem
          }
        >
          <span>Total Coaches:</span>
          <span>
            {overview.totalCoaches}
          </span>
        </div>

        <div
          className={
            Classes.overviewItem
          }
        >
          <span>New Users:</span>
          <span>{overview.newUsers}</span>
        </div>

        <div
          className={
            Classes.overviewItem
          }
        >
          <span>Total Trainees:</span>
          <span>
            {overview.totalTrainees}
          </span>
        </div>
      </div>
    </section>
  );
}