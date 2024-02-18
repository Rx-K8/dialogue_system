import * as Chat from "@/features/chat/components/index";

const ChatPage = () => {
  return (
    <>
      <Chat.ChatHeader />
      <Chat.ChatContent />
      <div>ユーザの入力</div>
    </>
  );
};

export default ChatPage;
