import type { ReactNode } from "react";
import type { BODY_CARD_DIR_TYPE } from "../types/bodyCardDirType";

export default interface BODY_CARD_PROPS_INTERFACE {
  /**
   * کدام طرف عکس قرار بگیرد:
   * - "right" → عکس سمت راست، محتوا سمت چپ
   * - "left"  → عکس سمت چپ، محتوا سمت راست
   */
  dir: BODY_CARD_DIR_TYPE;

  /** منبع تصویر */
  image: string;
  imageAlt?: string;

  title?: string;
  description?: string;
  children?: ReactNode;
}
