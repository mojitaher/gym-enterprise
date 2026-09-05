import clsx from "clsx";
import Classes from "./styles/bodyCard.module.css";
import ActivityIcon from "../../../../assets/icons/activity.svg";
import type BODY_CARD_PROPS_INTERFACE from "./interfaces/bodyCardPropsInterface";

/**
 * Body Card Component
 *
 * سمت چپ: کارتی که فقط عکسِ فول داخلش است.
 * سمت راست (بیرون از کارت): تایتل، ساب‌تایتل، دیسکریپشن و باتن‌ها (children).
 *
 * `dir` تعیین می‌کند عکس در کدام سمت باشد:
 * - "right" → عکس سمت راست، محتوا سمت چپ
 * - "left"  → عکس سمت چپ، محتوا سمت راست
 */
export const BodyCard = ({
  dir,
  image,
  title,
  subtitle,
  description,
  children,
  imageWidth,
  imageHeight,
  imageClassName,
  mobileImage,
  mobileImageClassName,
  hideImageOnMobile,
}: BODY_CARD_PROPS_INTERFACE) => {
  return (
    <div
      className={clsx(
        Classes.container,
        dir === "right" ? Classes.imageRight : Classes.imageLeft,
        hideImageOnMobile && Classes.hideImageOnMobile
      )}
    >
      <div
        className={Classes.imageCard}
      >
        <img
          src={image}
          alt={title}
          className={clsx(Classes.image, Classes.desktopImage, imageClassName)}
          style={{ width: imageWidth, height: imageHeight }}
        />
        {mobileImage && (
          <img
            src={mobileImage}
            alt={title}
            className={clsx(Classes.image, Classes.mobileImage, mobileImageClassName)}
            style={{ width: imageWidth, height: imageHeight }}
          />
        )}
      </div>

      <div className={Classes.content}>
        <div className={Classes.titleRow}>
          <img src={ActivityIcon} alt="activity" className={Classes.titleIcon} />
          <h3 className={Classes.title}>{title}</h3>
        </div>
        {subtitle && <h4 className={Classes.subtitle}>{subtitle}</h4>}
        <p className={Classes.description}>{description}</p>
        {children && <div className={Classes.buttons}>{children}</div>}
      </div>
    </div>
  );
};
