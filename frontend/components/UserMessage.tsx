const UserMessage = ({message, alreadyReadTime}) => {
  return (
    <div className="flex flex-col w-full max-w-[320px] ml-auto mr-3 py-2">
      <div className="flex flex-col leading-1.5 p-4 bg-blue-600 rounded-s-3xl rounded-se-3xl">
        <p className="text-base font-normal text-white break-words">{message}</p>
      </div>
      <div className="flex justify-end">
        <p className="text-sm text-gray-600 pr-1">{alreadyReadTime}</p>
        <p className="text-sm text-gray-600">既読</p>
      </div>
    </div>
  );
};

export default UserMessage;
