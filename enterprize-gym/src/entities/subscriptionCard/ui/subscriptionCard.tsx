import Classes from "./styles/subscriptionCard.module.css";
import awardIcon from "../../../assets/icons/award.svg";
import type SUBSCRIPTION_CARD_PROPS_INTERFACE from "./interfaces/subscriptionCardPropsInterface";

export const SubscriptionCard = ({
  planNumber,
  planName,
  bestFor,
  coach,
  trainee,
  duration,
  price,
}: SUBSCRIPTION_CARD_PROPS_INTERFACE) => {
  return (
    <div className={Classes.subscriptionCard}>
      {/* هدر: آیکن award + شماره پلن */}
      <div className={Classes.header}>
        <img src={awardIcon} alt="award" className={Classes.awardIcon} />
        <span className={Classes.title}>Plan {planNumber}</span>
      </div>

      {/* نام پلن */}
      <h3 className={Classes.planName}>{planName}</h3>

      {/* بهترین برای */}
      <p className={Classes.bestFor}>{bestFor}</p>

      {/* اطلاعات مربی، ورزشکار و مدت */}
      <div className={Classes.infoItems}>
        <p className={Classes.infoItem}>{coach}</p>
        <p className={Classes.infoItem}>{trainee}</p>
        <p className={Classes.infoItem}>{duration}</p>
      </div>

      {/* قیمت */}
      <p className={Classes.price}>{price}</p>
    </div>
  );
};
