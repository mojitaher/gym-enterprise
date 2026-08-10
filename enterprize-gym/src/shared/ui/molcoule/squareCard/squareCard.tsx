import Classes from "./styles/squareCard.module.css";
import type SQUARE_CARD_PROPS_INTERFACE from "./interfaces/squareCardPropsInterface";

/**
 * Square Card Component
 *
 * یک مربع 175×175 که فقط یک تکست (20px / وزن 600) در وسطش دارد.
 */
export const SquareCard = ({ text }: SQUARE_CARD_PROPS_INTERFACE) => {
  return (
    <div className={Classes.squareCard}>
      <span className={Classes.text}>{text}</span>
    </div>
  );
};
