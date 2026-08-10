import type { ReactNode } from "react";

/**
 * پراپ‌های کارت ورک‌اوت (Workout Card)
 *
 * یک عکس در بالا، زیرش اسم ورزش (تایتل)، زیر آن time یا set و بعد توضیحات.
 * در پایین کارت هم دو باتن نکست و پرویوس — سمت راست و چپ.
 */
export default interface WORKOUT_CARD_PROPS_INTERFACE {
  image: string;
  title: string;
  /** زمان تمرین مثل "20 min" — یا */
  time?: string;
  /** ست تمرین مثل "3 × 12" */
  set?: string;
  description: string;
  /** باتن پرویوس — سمت چپ پایین کارت */
  previous: ReactNode;
  /** باتن نکست — سمت راست پایین کارت */
  next: ReactNode;
}
