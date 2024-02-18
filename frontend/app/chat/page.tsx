import * as Chat from "@/features/chat/components/index";

const ChatPage = () => {
  return (
    <div className="container mx-auto max-w-3xl flex flex-col min-h-screen flex-grow">
      <Chat.ChatHeader />
      <Chat.ChatContent />
      <Chat.SendUserMessage />
    </div>
  );
};

export default ChatPage;
