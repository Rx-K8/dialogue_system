"use client";

import React from "react";
import { useState } from "react";

import Header from "@/components/chatbot/Header";
import SystemMessage from "@/components/chatbot/SystemMessage";
import UserMessage from "@/components/chatbot/UserMessage";

import { getCurrentTime } from "@/utils/datatime";

export default function Chatbot() {
  const firstSystemMessage: { text: string; role: string; time: string } = {
    text: "はじめまして，私はAilisだよ．",
    role: "system",
    time: getCurrentTime(),
  };
  const [messages, setMessages] = useState([firstSystemMessage]);

  return (
    <>
      <Header />
      <div className="flex flex-col mx-auto max-w-3xl">
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
    </>
  );
}
