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
  onClick
}: SUBSCRIPTION_CARD_PROPS_INTERFACE) => {
  return (
    <div className={Classes.subscriptionCard} onClick={onClick}>
      <div className={Classes.header}>
        <img src={awardIcon} alt="award" className={Classes.awardIcon} />
        <span className={Classes.title}>Plan {planNumber}</span>
      </div>

      <h3 className={Classes.planName}>{planName}</h3>

      <p className={Classes.bestFor}>{bestFor}</p>

      <div className={Classes.infoItems}>
        <p className={Classes.infoItem}>{coach}</p>
        <p className={Classes.infoItem}>{trainee}</p>
        <p className={Classes.infoItem}>{duration}</p>
      </div>

      <p className={Classes.price}>{price}</p>
    </div>
  );
};
