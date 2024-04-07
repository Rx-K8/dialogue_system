"use client";
import React from "react";
import { useForm } from "react-hook-form";

const SendMessage = ({ sendEvent }: { sendEvent: (text: string) => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data: any) => {
    sendEvent(data.inputMessage);
    reset();
  };
  return (
    <form
      className="sticky bottom-0 container mx-auto bg-white max-w-3xl grid grid-cols-6 py-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        className="px-4 col-span-5 border-2 border-gray-400 "
        type="text"
        placeholder="メッセージを入力してください"
        {...register("inputMessage", { required: true })}
      />
      <input
        className="col-span-1 border-2 mx-3 border-gray-400"
        type="submit"
      />
    </form>
  );
};

export default SendMessage;
