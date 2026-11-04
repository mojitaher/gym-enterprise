import { BADGE_ENUMS } from "../enums/badgeEnum";
import Classes from "../style/Badge.module.css";

export const BADGE_STYLE = {
  [BADGE_ENUMS.ACTIVE]: Classes.badgeActive,
  [BADGE_ENUMS.DEACTIVE]: Classes.badge,
} as const;