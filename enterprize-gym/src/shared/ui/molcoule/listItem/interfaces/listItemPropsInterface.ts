/**
 * پراپ‌های آیتِم لیست (List Item)
 *
 * یک ردیف: اواتار کوچک در چپ، یوزرنیم و اطلاعات ثانویه زیر آن،
 * و در سمت راست تکست info و آیکن — هر دو از بیرون مقدار می‌گیرند.
 */
export default interface LIST_ITEM_PROPS_INTERFACE {
  avatar: string;
  username: string;
  secondaryInfo: string;
  /** تکست کنار آیکن — از بیرون پاس داده می‌شود */
  info: string;
  /** آدرس svg آیکن — از بیرون پاس داده می‌شود */
  icon: string;
  /** کلاس سفارشی — موقع استفاده مقدار داده می‌شود */
  className?: string;
}
