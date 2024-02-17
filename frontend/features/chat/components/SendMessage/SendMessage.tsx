"use client";

import React from "react";
import { useForm } from "react-hook-form";

interface MessageForm {
  message: string;
}

const SendMessage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MessageForm>();
  const onSubmit = (data: MessageForm) => console.log(data);
  console.log(errors);

  return (
    <div className="fixed top-11">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          id="message"
          type="text"
          placeholder="話しかける"
          {...register("message", { required: true })}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default SendMessage;
