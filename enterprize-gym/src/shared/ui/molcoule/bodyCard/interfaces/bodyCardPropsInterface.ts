import type { ReactNode } from "react";

/**
 * پراپ‌های کارت بادی (Body Card)
 *
 * داخل خود کارت فقط عکسِ تمام‌عرض قرار می‌گیرد و بیرون از کارت (سمت راستش)
 * تایتل، ساب‌تایتل، دیسکریپشن و باتن‌ها.
 * باتن‌ها به‌صورت children از پرنت فرستاده می‌شوند — هر تعداد که پرنت بخواهد.
 */
export default interface BODY_CARD_PROPS_INTERFACE {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  children: ReactNode;
}
