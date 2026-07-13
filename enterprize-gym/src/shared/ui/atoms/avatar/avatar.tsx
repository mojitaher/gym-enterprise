import clsx from "clsx";
import Classes from "./styles/Avatar.module.css";

import defaultAvatar from "./assets/image/default-avatar.png";

import type AVATAR_PROPS_INTERFACE from "./interfaces/avatarPropsInterface";

/**
 * Avatar Component
 *
 * A reusable atomic component for displaying user profile images.
 *
 * Features:
 * - Supports three sizes.
 * - Displays a default avatar when no image is provided.
 * - Falls back to the default avatar if the image fails to load.
 *
 * Example:
 *
 * <Avatar
 *    src={user.image}
 *    alt={user.name}
 *    size="medium"
 * />
 */

export const Avatar = ({
  src=defaultAvatar,
  alt="avatar",
  size,
  className,
}: AVATAR_PROPS_INTERFACE) => {
  return (
    <img
      src={src}
      alt={alt}
      className={clsx(
        Classes.avatar,
        Classes[size],
        className
      )}
      onError={(event) => {
        event.currentTarget.src = defaultAvatar;
      }}
    />
  );
};