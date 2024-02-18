import CloseIcon from "../Icon/Icon";
import Link from "next/link";

const ChatHeader = () => {
  return (
    <div className="sticky top-0 container mx-auto max-w-3xl bg-gray-900 flex justify-between py-3">
        <h2 className="ml-5 text-xl text-white">システム</h2>
        <Link href="/" className="mr-5 ">
          <CloseIcon />
        </Link>
    </div>
  );
};

export default ChatHeader;
