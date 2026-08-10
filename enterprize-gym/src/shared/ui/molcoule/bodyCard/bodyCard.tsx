import Classes from "./styles/bodyCard.module.css";
import ActivityIcon from "../../../../assets/icons/activity.svg";
import type BODY_CARD_PROPS_INTERFACE from "./interfaces/bodyCardPropsInterface";

/**
 * Body Card Component
 *
 * سمت چپ: کارتی که فقط عکسِ فول داخلش است.
 * سمت راست (بیرون از کارت): تایتل، ساب‌تایتل، دیسکریپشن و باتن‌ها (children).
 */
export const BodyCard = ({
  image,
  title,
  subtitle,
  description,
  children,
}: BODY_CARD_PROPS_INTERFACE) => {
  return (
    <div className={Classes.container}>
      <div className={Classes.imageCard}>
        <img src={image} alt={title} className={Classes.image} />
      </div>

      <div className={Classes.content}>
        <div className={Classes.titleRow}>
          <img src={ActivityIcon} alt="activity" className={Classes.titleIcon} />
          <h3 className={Classes.title}>{title}</h3>
        </div>
        <h4 className={Classes.subtitle}>{subtitle}</h4>
        <p className={Classes.description}>{description}</p>
        <div className={Classes.buttons}>{children}</div>
      </div>
    </div>
  );
};
