"use client";

import React, { useState } from "react";
import UserMessage from "../UserMessage/UserMessage";
import SystemMessage from "../SystemMessage/SystemMessage";
import { useGetMessage } from "@/hooks/useGetMessage";

const MessageContent = () => {
  const { message, isLoading, isError } = useGetMessage(20);

  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessage] = useState([
    { speaker: "system", utterance: "こんにちは" },
    { speaker: "user", utterance: "はじめまして" },
  ]);

  if (isError) return <div>Load is Failed</div>;
  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      <div>
        {messages.map((message_info) => {
          if (message_info["speaker"] === "user") {
            return <UserMessage message={message_info["utterance"]} />;
          } else {
            return <SystemMessage message={message_info["utterance"]} />;
          }
        })}
      </div>
      <input
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
      />
      <button
        onClick={() => {
          setMessage([
            ...messages,
            { speaker: "user", utterance: inputMessage },
            { speaker: "system", utterance: "システムの発話" },
          ]);
        }}
      >
        入力
      </button>
    </div>
  );
};

export default MessageContent;
