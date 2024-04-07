"use client";

import React from "react";
import { useState } from "react";

import Header from "@/components/chatbot/Header";
import SystemMessage from "@/components/chatbot/SystemMessage";
import UserMessage from "@/components/chatbot/UserMessage";
import SendMessage from "@/components/chatbot/SendMessage";

import { getCurrentTime } from "@/utils/datatime";
import { getSystemMessage } from "@/utils/messageConnection";

export default function Chatbot() {
  const firstSystemMessage: { text: string; role: string; time: string } = {
    text: "はじめまして，私はAilisだよ．",
    role: "system",
    time: getCurrentTime(),
  };
  const [messages, setMessages] = useState([firstSystemMessage]);

  // ユーザのメッセージ情報
  function getUserMessageInfo(text: string) {
    const userMessage = {
      text: text,
      role: "user",
      time: getCurrentTime(),
    };
    return userMessage;
  }

  // システムのメッセージ情報
  function getSystemMessageInfo(text: string) {
    const userMessage = {
      text: text,
      role: "system",
      time: getCurrentTime(),
    };
    return userMessage;
  }

  function sendEvent(inputMessage: string) {
    const userMessage = getUserMessageInfo(inputMessage);
    const systemMessage = getSystemMessageInfo(getSystemMessage(inputMessage));
    console.log(systemMessage);
    setMessages([...messages, userMessage, systemMessage]);
  }

  return (
    <div className="">
      <Header />
      <div className="flex flex-col flex-grow mx-auto max-w-3xl min-h-screen">
        {messages.map((message, index) => {
          if (message.role === "system") {
            return (
              <SystemMessage
                key={index}
                message={message.text}
                alreadyReadTime={message.time}
              />
            );
          } else {
            return (
              <UserMessage
                key={index}
                message={message.text}
                alreadyReadTime={message.time}
              />
            );
          }
        })}
      </div>
      <SendMessage sendEvent={sendEvent} />
    </div>
  );
}
