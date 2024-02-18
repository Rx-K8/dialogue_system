import { Button } from "@/components/ui/button";

const SendUserMessage = () => {
  return (
      <div className="sticky bottom-0 flex px-3 items-center justify-between bg-white">
        <div className="w-full border border-black rounded-lg p-2.5 bg-yellow-50 mr-5">
          <span>話しかける</span>
        </div>
        <Button size={"lg"}>送信</Button>
      </div>
  );
};

export default SendUserMessage;
