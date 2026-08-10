import Classes from "./styles/planDetailCard.module.css";
import type PLAN_DETAIL_CARD_PROPS_INTERFACE from "./interfaces/planDetailCardPropsInterface";

/**
 * Plan Detail Card Component
 *
 * داده‌های کارت (title و data) از سمت بکاند می‌آیند.
 *   title — عنوان کارت
 *   data  — لیست تمرین‌ها؛ هر تمرین یک اسم دارد و یا { set, rep } یا time
 *   onEdit — هندلر ویرایش
 */
export const PlanDetailCard = ({
  title,
  data,
  // onEdit,
}: PLAN_DETAIL_CARD_PROPS_INTERFACE) => {
  return (
    <div className={Classes.planDetailCard}>
      <div className={Classes.header}>
        <h3 className={Classes.title}>{title}</h3>
        {/* {onEdit && (
          <button
            className={Classes.editButton}
            onClick={onEdit}
            aria-label="Edit"
          >
            Edit
          </button>
        )} */}
      </div>

      <div className={Classes.dataList}>
        {data.map((item, index) => {
          const value =
            item.set !== undefined && item.rep !== undefined
              ? `${item.set} × ${item.rep}`
              : item.time !== undefined
                ? `${item.time} min`
                : "—";

          return (
            <div key={index} className={Classes.dataItem}>
              <span className={Classes.exerciseName}>{item.exersize}</span>
              <span className={Classes.exerciseDash}>-</span>
              <span className={Classes.exerciseValue}>{value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
