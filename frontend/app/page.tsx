"use client";

import React, { useEffect, useState } from "react";
import SystemMessage from "@/components/SystemMessage";
import UserMessage from "@/components/UserMessage";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Home() {
  const [messages, setMessages] = useState([]);

  // システムの発話から始める
  useEffect(() => {
    let d = new Date();
    let nowTime = d.getHours().toString() + ":" + d.getMinutes().toString();
    setMessages([
      { text: "じろじろ見てんじゃねーぞ", sender: "system", time: nowTime },
    ]);
  }, []);

  // ユーザの入力
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    getMessage(data["inputMessage"]);
    reset();
  };
  console.log(errors);

  const url = "http://127.0.0.1:8000/message/";

  function getMessage(userMessage) {
    axios
      .post(url, {
        text: userMessage,
      })
      .then(function (response) {
        let systemMessage = response.data.text;
        let d = new Date();
        let nowTime = d.getHours().toString() + ":" + d.getMinutes().toString();
        setMessages([
          ...messages,
          { text: userMessage, sender: "user", time: nowTime },
          { text: systemMessage, sender: "system", time: nowTime },
        ]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      <div className="sticky top-0 container mx-auto max-w-3xl bg-gray-900 flex justify-between py-3">
        <h2 className="ml-5 text-xl text-white">システムとの会話</h2>
      </div>
      <div className="min-h-screen container mx-auto max-w-3xl flex flex-col">
        {messages.map((message, index) => {
          if (message["sender"] === "system") {
            return (
              <SystemMessage
                key={index}
                message={message["text"]}
                alreadyReadTime={message["time"]}
              />
            );
          } else {
            return (
              <UserMessage
                key={index}
                message={message["text"]}
                alreadyReadTime={message["time"]}
              />
            );
          }
        })}
      </div>
      <form
        className="sticky bottom-0 container mx-auto max-w-3xl grid grid-cols-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="px-4 col-span-5"
          type="text"
          placeholder="メッセージを入力してください"
          {...register("inputMessage", { required: true })}
        />
        <input className="col-span-1" type="submit" />
      </form>
    </div>
  );
}
