import clsx from "clsx";
import Classes from "./styles/planCard.module.css";
import SingleDropdown from "../../../shared/ui/molcoule/dropdaown/singleDropdown";
import { planHandler } from "./hooks/planHandler";
import type PLAN_CARD_PROPS_INTERFACE from "./interfaces/planCardPropsInterface";
import { useState } from "react";
import { ACTIVITY_PERIOD_ENUM } from "./enums/activityPeriodEnum";
import type { ACTIVITY_PERIOD_TYPE } from "./types/activityPeriodType";

/**
 * Plan Card Component
 *
 * Displays a sport plan with stats, activity period dropdown, and delete action.
 *
 * Props:
 *   title   — sport name (required)
 *   coach   — coach name
 *   session — session count
 *   present — present count
 *   absent  — absent count
 *   onDelete — delete handler
 *   children — custom action icons
 */

export const PlanCard = ({
  title,
  coach,
  session,
  present,
  absent,
  onDelete,
  className,
  children,
}: PLAN_CARD_PROPS_INTERFACE) => {
  // const { activityPeriod, handlePeriodChange, dropdownItems } = usePlanCard();
  const [activityPeriod,setActivityPeriod]=useState<ACTIVITY_PERIOD_TYPE | undefined>(undefined);
  console.log(activityPeriod)
  const dropdownItems = Object.values(ACTIVITY_PERIOD_ENUM).map((value) => ({
  value,
  label: value,
}));
  return (
    <div className={clsx(Classes.planCard, className)}>
      {/* Header */}
      <div className={Classes.header}>
        <h3 className={Classes.title}>{title}</h3>
      </div>

      {/* Stats */}
      <div className={Classes.stats}>
        <div className={Classes.statItem}>
          <span className={Classes.statLabel}>Coach</span>
          <span className={Classes.statValue}>{coach}</span>
        </div>
        <div className={Classes.statItem}>
          <span className={Classes.statLabel}>Session</span>
          <span className={Classes.statValue}>{session}</span>
        </div>
        <div className={Classes.statItem}>
          <span className={Classes.statLabel}>Present</span>
          <span className={Classes.statValue}>{present}</span>
        </div>
        <div className={Classes.statItem}>
          <span className={Classes.statLabel}>Absent</span>
          <span className={Classes.statValue}>{absent}</span>
        </div>
      </div>

      {/* Actions */}
      <div className={Classes.actions}>
        <SingleDropdown
          items={dropdownItems}
          value={activityPeriod}
          placeholder="Period"
          searchable={false}
          onChange={(value) => planHandler({setActivityPeriod,value:value as ACTIVITY_PERIOD_TYPE})}

        />

        <button
          className={Classes.iconButton}
          onClick={onDelete}
          aria-label="Delete"
        >
          {/* Place your delete icon here */}
          <span className={Classes.placeholderIcon}>🗑️</span>
        </button>

        {children}
      </div>
    </div>
  );
};
