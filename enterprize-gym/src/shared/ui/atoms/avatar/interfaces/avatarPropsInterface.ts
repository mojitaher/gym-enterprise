import type { AVATAR_TYPE_SIZE } from "../types/avatarSizeType";

export default  interface AVATAR_PROPS_INTERFACE {
    src?: string;
    alt?: string;
    size: AVATAR_TYPE_SIZE;
    className?: string;
}