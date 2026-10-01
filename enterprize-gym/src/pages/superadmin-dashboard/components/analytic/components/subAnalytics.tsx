import Classes from "../style/analytic.module.css";
import SubscriptionPieChart from "./SubscriptionPieChart";
import type SubscriptionProps from "../interfaces/subscriptionProps";

export default function SubAnalytics({
  data,
}: SubscriptionProps) {
  return (
    <section
      className={
        Classes.subAnalytics
      }
    >
      <h2
        className={
          Classes.subAnalyticsTitle
        }
      >
        Sub Analytics
      </h2>

      <div
        className={
          Classes.subAnalyticsContent
        }
      >
        <SubscriptionPieChart
          data={data}
        />

        <div
          className={
            Classes.subAnalyticsInfo
          }
        >
          <span>
            Active subscriptions:{" "}
            {data.active}
          </span>

          <span>
            Inactive subscriptions:{" "}
            {data.inactive}
          </span>
        </div>
      </div>
    </section>
  );
}