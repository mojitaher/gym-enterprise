import clsx from "clsx";
import Classes from "./styles/listItem.module.css";
import { Avatar } from "../../atoms/avatar/avatar";
import type LIST_ITEM_PROPS_INTERFACE from "./interfaces/listItemPropsInterface";
import Profile from '../../../../assets/icons/profile2.svg'


export const ListItem = ({
  avatar,
  username,
  secondaryInfo,
  info,
  onClick,
  className,
}: LIST_ITEM_PROPS_INTERFACE) => {
  return (
    <div className={clsx(Classes.listItem, className)} onClick={onClick}>
      <Avatar src={avatar} size="small" />
      <div className={Classes.user}>
        <span className={Classes.username}>{username}</span>
        <span className={Classes.secondaryInfo}>{secondaryInfo}</span>
      </div>
      <div className={Classes.accept}>
        <span className={Classes.info}>{info}</span>
        <img src={Profile} alt="status icon" className={Classes.icon} />
      </div>
    </div>
  );
};
