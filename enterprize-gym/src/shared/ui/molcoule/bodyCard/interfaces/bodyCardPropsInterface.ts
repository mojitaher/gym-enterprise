import type { ReactNode } from "react";
import type { BODY_CARD_DIR_TYPE } from "../types/bodyCardDirType";

/**
 * پراپ‌های کارت بادی (Body Card)
 *
 * داخل خود کارت فقط عکسِ تمام‌عرض قرار می‌گیرد و بیرون از کارت (سمت راستش)
 * تایتل، ساب‌تایتل، دیسکریپشن و باتن‌ها.
 * باتن‌ها به‌صورت children از پرنت فرستاده می‌شوند — هر تعداد که پرنت بخواهد.
 *
 * `dir` تعیین می‌کند عکس در کدام سمت باشد:
 * - "right" → عکس سمت راست، محتوا سمت چپ
 * - "left"  → عکس سمت چپ، محتوا سمت راست
 */
export default interface BODY_CARD_PROPS_INTERFACE {
  dir: BODY_CARD_DIR_TYPE;
  image: string;
  title: string;
  subtitle?: string;
  description: string;
  children?: ReactNode;

  imageWidth?: string | number;
 
  imageHeight?: string | number;
 
  imageClassName?: string;

  mobileImageClassName?: string;

  mobileImage?: string;

  hideImageOnMobile?: boolean;
}
