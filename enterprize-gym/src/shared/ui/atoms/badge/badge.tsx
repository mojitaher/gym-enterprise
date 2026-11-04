import clsx from "clsx";

import Classes from "./style/Badge.module.css";
import type BADGE_PROPS_INTERFACE from "./interfaces/badgePropsInterface";

import { BADGE_ENUMS } from "./enums/badgeEnum";
import { BADGE_STYLE } from "./constant/badgeActivityConstant";

export const Badge = ({
  children,
  active,
  className,
  onClick,
}: BADGE_PROPS_INTERFACE) => {
  return (
    <button
      className={clsx(Classes.badge,
        className,
        BADGE_STYLE[
          active ? BADGE_ENUMS.ACTIVE : BADGE_ENUMS.DEACTIVE
        ],
      )}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};