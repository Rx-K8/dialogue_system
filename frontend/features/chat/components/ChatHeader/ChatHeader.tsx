import CloseIcon from "../Icon/Icon";
import Link from "next/link";

const ChatHeader = () => {
  return (
    <div className="w-full flex content-center justify-center">
      <div className="w-[768px] flex content-center justify-between px-10 py-3 bg-gradient-to-b from-gray-900 to-gray-600">
        <h2 className="text-xl text-white">システム</h2>
        <Link href="/">
          <CloseIcon />
        </Link>
      </div>
    </div>
  );
};

export default ChatHeader;
