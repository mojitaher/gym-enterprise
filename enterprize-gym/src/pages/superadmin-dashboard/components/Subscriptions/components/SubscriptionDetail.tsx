import { useNavigate, useParams } from "react-router-dom";

import { MOCK_SUBSCRIPTION_DETAILS } from "../mockData/subscriptionDetailMock";

import Classes from "../style/subscription.module.css";

import phoneIcon from "../../../../../assets/icons/phone.svg";
import subscriptionIcon from "../../../../../assets/icons/subscription.svg";
import trophyIcon from "../../../../../assets/icons/trophy.svg";
import { Avatar } from "../../../../../shared/ui/atoms/avatar/avatar";
import { Button } from "../../../../../shared/ui/atoms/button/button";
import backIcon from '../../../../../assets/icons/backSquare.svg';
import bagIcon from '../../../../../assets/icons/bagIcon.svg'

export default function SubscriptionDetail() {
  const { subscriptionId } = useParams<{
    subscriptionId: string;
  }>();

  const subscription = MOCK_SUBSCRIPTION_DETAILS.find(
    (sub) => sub.id === subscriptionId
  );
  const navigate=useNavigate()

  if (!subscription) {
    return (
      <div className={Classes.detailEmptyMessage}>
        <p>آیتم یافت نشد</p>
      </div>
    );
  }

  return (
    <>
    <section className={Classes.detailCard}>
      <header className={Classes.detailHeader}>
        <div className={Classes.detailIdentity}>
          <Avatar
            size="small"
            src={subscription.avatar}
            alt={subscription.buyerName}
          />

          <div className={Classes.detailHeading}>
            <h2 className={Classes.detailName}>
              {subscription.buyerName}
            </h2>

            <span
              className={`${Classes.detailDaysLeft} ${
                subscription.daysLeft >= 0
                  ? Classes.textGreen
                  : Classes.textRed
              }`}
            >
              <p className="inline-block">{subscription.subscriptionType} plan</p>
              /
              {subscription.daysLeft >= 0
                ? `${subscription.daysLeft} روز باقی‌مانده`
                : `${Math.abs(subscription.daysLeft)} روز از انقضا گذشته`}
            </span>
          </div>
        </div>
      </header>

      <div className={Classes.detailInfoList}>
        <div className={Classes.detailInfo}>
          <img src={phoneIcon} alt="" />
          <span>{subscription.phoneNumber}</span>
        </div>

        

        <div className={Classes.detailInfo}>
          <img src={subscriptionIcon} alt="" />
          <span>شماره پلن: {subscription.planNumber}</span>
        </div>

        <div className={Classes.detailInfo}>
          <img src={trophyIcon} alt="" />
          <span>تاریخ عضویت: {subscription.joinDate}</span>
        </div>
      </div>
    </section>
    <div className={Classes.buttoncontainer}>
      <Button variant="primary" size="large" startIcon={<img src={backIcon} alt="back" />}>
        Renew Subscription
      </Button>
      <Button variant="secondary" size="large" startIcon={<img src={bagIcon} alt="back" />} onClick={() =>
    navigate(`/dashboard/superadmin/subscriptions/${subscriptionId}/change`)}>
        Change Subscription
      </Button>
    </div>
    </>
  );
}
