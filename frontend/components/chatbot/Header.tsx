import React from "react";
import Link from "next/link";
import CloseIcon from "@/components/chatbot/CloseIcon";

export default function Header() {
  return (
    <div className="w-full flex content-center justify-center">
      <div className="w-[768px] flex content-center justify-between px-10 py-2 bg-black">
        <h2 className="text-2xl text-gray-300">Ailis</h2>
        <Link href="/">
          <CloseIcon />
        </Link>
      </div>
    </div>
  );
}
