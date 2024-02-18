import SystemMessage from "../SystemMessage/SystemMessage";
import UserMessage from "../UserMessage/UserMessage";

const ChatContent = () => {
  return (
    <div className="flex flex-col flex-grow">
      <SystemMessage />
      <UserMessage />
    </div>
  );
};

export default ChatContent;
