import clsx from "clsx";
import Classes from "./styles/bodyCard.module.css";
import { BODY_CARD_DIR_ENUM } from "./enums/bodyCardDirEnum";
import type BODY_CARD_PROPS_INTERFACE from "./interfaces/bodyCardPropsInterface";

/**
 * Body Card Component
 *
 * A card with an image on one side and text content on the other.
 * The `dir` prop decides which side the image sits on:
 *   - "right" → image on the right, content on the left
 *   - "left"  → image on the left, content on the right
 *
 * `children` renders after title/description (e.g. a button).
 */

export const BodyCard = ({
  dir,
  image,
  imageAlt,
  title,
  description,
  children,
}: BODY_CARD_PROPS_INTERFACE) => {
  return (
    <div
      className={clsx(
        Classes.bodyCard,
        dir === BODY_CARD_DIR_ENUM.right ? Classes.imageRight : Classes.imageLeft
      )}
    >
      <img
        src={image}
        alt={imageAlt ?? title ?? "card image"}
        className={Classes.image}
      />

      <div className={Classes.content}>
        {title && <h3 className={Classes.title}>{title}</h3>}
        {description && <p className={Classes.description}>{description}</p>}
        {children}
      </div>
    </div>
  );
};
