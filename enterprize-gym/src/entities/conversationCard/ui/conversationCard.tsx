import Classes from "./styles/conversationCard.module.css";
import { Avatar } from "../../../shared/ui/atoms/avatar/avatar";
import type CONVERSATION_CARD_PROPS_INTERFACE from "./interfaces/conversationCardPropsInterface";

/**
 * Conversation Card Component
 *
 * اواتار + یوزرنیم کاربر در بالا و تکست کاربر در زیر آنها.
 * اگر image فرستاده شود، بهعنوان لینک در گوشه سمت چپ نمایش داده میشود و با کلیک باز میشود.
 */
export const ConversationCard = ({
  avatar,
  username,
  text,
  image,
}: CONVERSATION_CARD_PROPS_INTERFACE) => {
  return (
    <div className={Classes.conversationCard}>
      
      <div className={Classes.header}>
        <Avatar src={avatar} size="small" />
        <span className={Classes.username}>{username}</span>
      </div>
      <p className={Classes.text}>{text}</p>
      {image && (
        <a
          className={Classes.image}
          href={image}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open image"
        >
          <p>image</p>        </a>
      )}
    </div>
  );
};
