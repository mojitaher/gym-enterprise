
import { useNavigate, useParams } from "react-router-dom";
import { SubscriptionCard } from "../../../../../entities/subscriptionCard/ui/subscriptionCard";
import { handlePlanSelection } from "../handler/handlePlanSelection";
import Classes from "../style/subscription.module.css";

const MOCK_SUBSCRIPTION_PLANS = [
  {
    planNumber: 1,
    planName: "Basic Plan",
    bestFor: "Best for beginners",
    coach: "Coach: 1 coach",
    trainee: "Trainees: Up to 10",
    duration: "Duration: 1 month",
    price: "500,000 تومان",
  },
  {
    planNumber: 2,
    planName: "Standard Plan",
    bestFor: "Best for regular training",
    coach: "Coach: 3 coaches",
    trainee: "Trainees: Up to 30",
    duration: "Duration: 3 months",
    price: "1,200,000 تومان",
  },
  {
    planNumber: 3,
    planName: "Professional Plan",
    bestFor: "Best for serious athletes",
    coach: "Coach: 5 coaches",
    trainee: "Trainees: Up to 60",
    duration: "Duration: 6 months",
    price: "2,500,000 تومان",
  },
  {
    planNumber: 4,
    planName: "Premium Plan",
    bestFor: "Best for large gyms",
    coach: "Coach: Unlimited",
    trainee: "Trainees: Unlimited",
    duration: "Duration: 12 months",
    price: "4,500,000 تومان",
  },
];

export default function ChangeSubscription() {
    const navigate=useNavigate();
    const { subscriptionId } = useParams<{
    subscriptionId: string;
  }>();
  return (
    <section className={Classes.container}>
      <header className={Classes.header}>
        <h1 className={Classes.title}>Change Subscription</h1>
        <p className={Classes.description}>
          Choose the subscription plan that best fits your needs.
        </p>
      </header>

      <div className={Classes.subscriptionGrid}>
        {MOCK_SUBSCRIPTION_PLANS.map((plan) => (
          <SubscriptionCard key={plan.planNumber} {...plan} onClick={() => {
              if (!subscriptionId) {
                return;
              }

              handlePlanSelection(
                subscriptionId,
                plan.planNumber,
                navigate
              );
            }}
          />
        ))}
      </div>
    </section>
  );
}
