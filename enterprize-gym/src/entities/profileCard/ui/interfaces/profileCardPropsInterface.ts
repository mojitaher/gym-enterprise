import type { MouseEvent } from "react";

/**
 * Props کارت پروفایل
 *
 * اواتار + یوزرنیم و اطلاعات ثانویه زیر یوزرنیم.
 * در راستِ اواتار (سمت راست) آیکن حذف پروفایل است و زیر اواتار اطلاعات کاربر.
 * در پایین کارت هم چهار دکمه.
 */
export default interface PROFILE_CARD_PROPS_INTERFACE {
  avatar: string;
  username: string;
  secondaryInfo: string;
  info: string[];
  buttons: string[];
  onRemove?: (event: MouseEvent<HTMLButtonElement>) => void;
}
