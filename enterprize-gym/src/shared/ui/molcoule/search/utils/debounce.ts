let timeoutId: ReturnType<typeof setTimeout> | null = null;

/**
 * یک تابع debounce ساده که درخواست‌ها رو به تعویق می‌ندازه
 *
 * @param callback - تابعی که باید بعد از تاخیر اجرا بشه
 * @param delay - زمان تاخیر به میلی‌ثانیه (پیش‌فرض: 300ms)
 */
export function debounce<T extends (...args: Parameters<T>) => void>(
  callback: T,
  delay: number = 300
): (...args: Parameters<T>) => void {
  return (...args: Parameters<T>) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      callback(...args);
      timeoutId = null;
    }, delay);
  };
}

/**
 * پاک کردن timeout فعال (برای cleanup)
 */
export function clearDebounce() {
  if (timeoutId) {
    clearTimeout(timeoutId);
    timeoutId = null;
  }
}