import Classes from "./styles/squareCard.module.css";
import type SQUARE_CARD_PROPS_INTERFACE from "./interfaces/squareCardPropsInterface";


export const SquareCard = ({ text }: SQUARE_CARD_PROPS_INTERFACE) => {
  return (
    <div className={Classes.squareCard}>
      <span className={Classes.text}>{text}</span>
    </div>
  );
};
