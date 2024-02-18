import React from "react";
import * as Chat from "@/features/chat/components/index";

const ChatPage = () => {
  return (
    <div className="w-2/3 flex justify-center">
      <Chat.MessageContent />
      {/* <Chat.SendMessage /> */}
    </div>
  );
};

export default ChatPage;
