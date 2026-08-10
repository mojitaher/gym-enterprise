import Classes from "./styles/profileCard.module.css";
import { Avatar } from "../../../shared/ui/atoms/avatar/avatar";
import { Button } from "../../../shared/ui/atoms/button/button";
import DeleteUser from "../../../assets/icons/deleteUser.svg";
import type PROFILE_CARD_PROPS_INTERFACE from "./interfaces/profileCardPropsInterface";

/**
 * Profile Card Component
 *
 * هدر: اواتار + یوزرنیم (و اطلاعات ثانویه زیر آن) + آیکن حذف در سمت راست.
 * زیر اواتار اطلاعات کاربر و در پایین چهار دکمه.
 */
export const ProfileCard = ({
  avatar,
  username,
  secondaryInfo,
  info,
  buttons,
  onRemove,
}: PROFILE_CARD_PROPS_INTERFACE) => {
  return (
    <div className={Classes.profileCard}>
      <div className={Classes.header}>
        <Avatar src={avatar} size="medium" />
        <div className={Classes.user}>
          <span className={Classes.username}>{username}</span>
          <span className={Classes.secondaryInfo}>{secondaryInfo}</span>
        </div>
        <button
          className={Classes.removeButton}
          onClick={onRemove}
          aria-label="Remove profile"
        >
          <img src={DeleteUser} alt="Delete account" />
        </button>
      </div>

      <div className={Classes.infoList}>
        {info.map((line, index) => (
          <p key={index} className={Classes.infoLine}>
            {line}
          </p>
        ))}
      </div>

      <div className={Classes.buttons}>
        {buttons.map((label, index) => (
          <Button key={index} variant="secondary" size="small">
            {label}
          </Button>
        ))}
      </div>
    </div>
  );
};
