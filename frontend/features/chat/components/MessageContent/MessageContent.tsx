"use client"

import React from "react";
import UserMessage from "../UserMessage/UserMessage";
import SystemMessage from "../SystemMessage/SystemMessage";
import { useGetMessage } from "@/hooks/useGetMessage";

const MessageContent = () => {
  const {message, isLoading, isError} = useGetMessage(20)

  if (isError) return <div>Load is Failed</div>
  if (isLoading) return <div>Loading...</div>
  return (
    <div>
      {message.message}
      <UserMessage />
      <SystemMessage />
    </div>
  );
};

export default MessageContent;
