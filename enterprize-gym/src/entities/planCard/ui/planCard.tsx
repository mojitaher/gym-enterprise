import clsx from "clsx";
import Classes from "./styles/planCard.module.css";
import type PLAN_CARD_PROPS_INTERFACE from "./interfaces/planCardPropsInterface";
import { Button } from "../../../shared/ui/atoms/button/button";
import PlanDelete from '../../../assets/icons/planDelete.svg'
import activityIcon from '../../../assets/icons/activity.svg'

/**
 * Plan Card Component
 *
 * Displays a sport plan with stats, the active month, and delete action.
 *
 * Props:
 *   title   — sport name (required)
 *   coach   — coach name
 *   session — session count
 *   present — present count
 *   absent  — absent count
 *   month   — active month (passed from the parent)
 *   onDelete — delete handler
 *   onSubmit — submit handler
 *   children — custom action icons
 */

export const PlanCard = ({
  title,
  coach,
  session,
  present,
  absent,
  month,
  onDelete,
  onSubmit,
  className,
  children,
}: PLAN_CARD_PROPS_INTERFACE) => {
const svgIcon = (<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.0001 18.3333C14.6025 18.3333 18.3334 14.6023 18.3334 9.99996C18.3334 5.39759 14.6025 1.66663 10.0001 1.66663C5.39771 1.66663 1.66675 5.39759 1.66675 9.99996C1.66675 14.6023 5.39771 18.3333 10.0001 18.3333ZM10.6251 7.49996C10.6251 7.15478 10.3453 6.87496 10.0001 6.87496C9.6549 6.87496 9.37508 7.15478 9.37508 7.49996V9.37496H7.50008C7.1549 9.37496 6.87508 9.65478 6.87508 9.99996C6.87508 10.3451 7.1549 10.625 7.50008 10.625H9.37508V12.5C9.37508 12.8451 9.6549 13.125 10.0001 13.125C10.3453 13.125 10.6251 12.8451 10.6251 12.5V10.625H12.5001C12.8453 10.625 13.1251 10.3451 13.1251 9.99996C13.1251 9.65478 12.8453 9.37496 12.5001 9.37496H10.6251V7.49996Z" fill="#80BDFF"/>
</svg>
)
  return (
    <div className={clsx(Classes.planCard, className)}>
      {/* ============ Top section (header + actions) ============ */}
      <div className={Classes.topSection}>
        {/* Header */}
        <div className={Classes.header}>
          <h3 className={Classes.title}>{title}</h3>
        </div>

        {/* Actions */}
        <div className={Classes.actions}>
          {/* Active month — passed from the parent */}
          <span className={Classes.month}>{month}</span>

          <img
            src={activityIcon}
            alt="Activity"
            aria-hidden="true"
            className={Classes.placeholderIcon}
          />

          <button
            className={Classes.iconButton}
            onClick={onDelete}
            aria-label="Delete"
          >
            <img
              src={PlanDelete}
              alt="Delete"
              aria-hidden="true"
              className={Classes.placeholderIcon}
            />
          </button>

          {children}
        </div>
      </div>

      {/* Horizontal separator */}
      <div className={Classes.separator} />

      {/* ============ Bottom section (below the separator) ============ */}
      <div className={Classes.bottomSection}>
        {/* Stats */}
        <div className={Classes.stats}>
          <div className={Classes.statItem}>
            <span className={Classes.statLabel}>Coach:{coach}</span>
          </div>
          <div className={Classes.statItem}>
            <span className={Classes.statLabel}>Session:{session}</span>
          </div>
          <div className={Classes.statItem}>
            <span className={Classes.statLabel}>Present:{present}</span>
          </div>
          <div className={Classes.statItem}>
            <span className={Classes.statLabel}>Absent:{absent}</span>
          </div>
        </div>

        {/* Submit */}
        <div className={Classes.submitButton}>
          <Button variant="secondary" size="large" startIcon={svgIcon} endIcon={svgIcon} onClick={onSubmit}>text</Button>
        </div>
      </div>
    </div>
  );
};
