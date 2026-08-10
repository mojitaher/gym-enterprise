/**
 * پراپ‌های کارت اشتراک (Subscription Card)
 *
 * آیکن award + تایتل شماره پلن، نام پلن، بهترین برای،
 * اطلاعات مربی/ورزشکار/مدت، و قیمت — تماماً سفید روی پسزمینه تیره.
 */
export default interface SUBSCRIPTION_CARD_PROPS_INTERFACE {
  planNumber: number;
  planName: string;
  bestFor: string;
  coach: string;
  trainee: string;
  duration: string;
  price: number;
}
