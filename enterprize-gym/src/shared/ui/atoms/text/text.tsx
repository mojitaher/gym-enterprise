 /**
  * Text Component
  * 
  * A simple typography component used to display text content
  * consistently across the application.
  * 
  * Props:
  * - text: string content to display
  * - className: optional custom styles override
  * 
  * Behavior:
  * - text is also used as HTML title (native tooltip)
  * 
  * Example:
  * 
  * <Text text="Hello world" />
  * 
  * <Text
  *   text="Hello world"
  *   className="text-2xl text-red-500"
  * />
  */

import clsx from "clsx";
import styles from "./styles/Text.module.css";
import type { TEXT_PROPS_INTERFACE } from "./interfaces/textInterfaces";

export const Text = ({ text, className }: TEXT_PROPS_INTERFACE) => {
  return (
    <p className={clsx(styles.text, className)} title={text}>
      {text}
    </p>
  );
};