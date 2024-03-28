import Image from "next/image";

const SystemMessage = ({ message, alreadyReadTime }) => {
  return (
    <div className="flex items-start gap-2.5 ml-3 py-2">
      <Image
        className="rounded-full"
        src="/chat-icon.jpg"
        alt="システムの画像"
        width={50}
        height={50}
      />
      <div className="flex flex-col w-full max-w-[320px]">
        <div className="flex flex-col leading-1.5 p-4 bg-pink-500 rounded-e-3xl rounded-ss-3xl">
          <p className="text-base font-normal text-white break-words">{message}</p>
        </div>
        <p className="text-sm text-gray-600">{alreadyReadTime}</p>
      </div>
    </div>
  );
};

export default SystemMessage;
