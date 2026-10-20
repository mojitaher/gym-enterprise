
export default interface LIST_ITEM_PROPS_INTERFACE {
  avatar?: string;
  username?: string;
  secondaryInfo?: string;
  info?: string|number;
  icon?: boolean;
  className?: string;
  onClick?: () => void;
}
