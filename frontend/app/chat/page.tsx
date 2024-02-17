import React from "react";
import * as Chat from "@/features/chat/components/index";

const ChatPage = () => {
  return (
    <div className="relative">
      <Chat.MessageContent />
      <Chat.SendMessage />
    </div>
  );
};

export default ChatPage;
