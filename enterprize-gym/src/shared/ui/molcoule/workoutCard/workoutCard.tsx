import Classes from "./styles/workoutCard.module.css";
import type WORKOUT_CARD_PROPS_INTERFACE from "./interfaces/workoutCardPropsInterface";

/**
 * Workout Card Component
 *
 * عکس در بالا، زیرش اسم ورزش، زیر آن time یا set و بعد توضیحات.
 * در پایین: باتن پرویوس سمت چپ و باتن نکست سمت راست.
 */
export const WorkoutCard = ({
  image,
  title,
  time,
  set,
  description,
  previous,
  next,
}: WORKOUT_CARD_PROPS_INTERFACE) => {
  const meta = time ?? set;

  return (
    <div className={Classes.workoutCard}>
      <img src={image} alt={title} className={Classes.image} />

      <div className={Classes.body}>
        <h3 className={Classes.title}>{title}</h3>
        {meta && <span className={Classes.meta}>{meta}</span>}
        <p className={Classes.description}>{description}</p>
      </div>

      <div className={Classes.actions}>
        <div>{previous}</div>
        <div>{next}</div>
      </div>
    </div>
  );
};
