import SystemMessage from "../SystemMessage/SystemMessage";
import UserMessage from "../UserMessage/UserMessage";

const ChatContent = () => {
  return (
    <div className="">
      <SystemMessage />
      <UserMessage />
    </div>
  );
};

export default ChatContent;
