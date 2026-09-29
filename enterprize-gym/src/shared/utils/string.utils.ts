/**
 * حذف تمام فاصله‌های بین حروف
 * مثال: "باشگاه بدنسازی" → "باشگاهبدنسازی"
 */
export const removeSpaces = (text: string): string => text.replace(/\s+/g, "");