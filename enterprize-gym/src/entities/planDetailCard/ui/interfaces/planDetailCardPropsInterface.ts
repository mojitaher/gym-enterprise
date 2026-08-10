import type { MouseEvent } from "react";
import type PLAN_DETAIL_DATA_INTERFACE from "./planDetailDataInterface";

/**
 * Props کارت جزئیات پلن
 *
 * title و data هر دو از سمت بکاند میآیند و onEdit برای ویرایش است.
 */
export default interface PLAN_DETAIL_CARD_PROPS_INTERFACE {
  id:number;
  title: string;
  data: PLAN_DETAIL_DATA_INTERFACE[];
  onEdit?: (event: MouseEvent<HTMLButtonElement>) => void;
}
