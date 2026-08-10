import clsx from "clsx";
import Classes from "./styles/listItem.module.css";
import { Avatar } from "../../atoms/avatar/avatar";
import type LIST_ITEM_PROPS_INTERFACE from "./interfaces/listItemPropsInterface";

/**
 * List Item Component
 *
 * هدر: اواتار کوچک + یوزرنیم (و اطلاعات ثانویه زیر آن) در یک ردیف،
 * و در سمت راست تکست info و آیکن — هر دو از بیرون مقدار می‌گیرند.
 */
export const ListItem = ({
  avatar,
  username,
  secondaryInfo,
  info,
  icon,
  className,
}: LIST_ITEM_PROPS_INTERFACE) => {
  return (
    <div className={clsx(Classes.listItem, className)}>
      <Avatar src={avatar} size="small" />
      <div className={Classes.user}>
        <span className={Classes.username}>{username}</span>
        <span className={Classes.secondaryInfo}>{secondaryInfo}</span>
      </div>
      <div className={Classes.accept}>
        <span className={Classes.info}>{info}</span>
        <img src={icon} alt="status icon" className={Classes.icon} />
      </div>
    </div>
  );
};
