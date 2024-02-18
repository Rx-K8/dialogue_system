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
    <div className="w-full fixed bottom-0">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          id="message"
          type="text"
          placeholder="話しかける"
          {...register("message", { required: true })}
          className="w-2/3"
        />
        <input type="submit"  className=""/>
      </form>
    </div>
  );
};

export default SendMessage;
