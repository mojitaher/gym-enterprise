/**
 * Props کارت گفتگو
 *
 * اواتار و یوزرنیم کاربر نمایش داده میشود و زیر آنها تکست کاربر.
 * اگر image فرستاده شده باشد، بهعنوان لینک در گوشه سمت چپ کارت نمایش داده میشود.
 */
export default interface CONVERSATION_CARD_PROPS_INTERFACE {
  avatar: string;
  username: string;
  text: string;
  image?: string;
}
