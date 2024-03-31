import { BsThreeDotsVertical } from "react-icons/bs";
import UserTicketMessage from "../components/UserTicketMessage";
import ReplyTicket from "../components/ReplyTicket";
import { BsEmojiSmile } from "react-icons/bs";
import { GrAttachment } from "react-icons/gr";

export default function TicketChatBox() {
  return (
    <>
      <div className="flex items-center justify-between p-3 shadow-md shadow-zinc-100">
        <div className="flex gap-x-3">
          <img
            src="/images/user-04.jpg"
            alt="avatar"
            className="h-12 w-12 xs:h-14 xs:w-14 rounded-full border-2 border-primary-pk"
          />
          <div className="">
            <p className="pb-1 font-semibold text-sm xs:text-base">nazanin rastegar</p>
            <span className="text-sm  text-stone-500">1403/3/1</span>
          </div>
        </div>
        <BsThreeDotsVertical className="cursor-pointer text-2xl" />
      </div>
      <div className="flex h-[45vh] sm:h-[50vh] flex-col items-start justify-start gap-y-2 overflow-y-auto p-5">
        <UserTicketMessage />
        <UserTicketMessage />
        <ReplyTicket />
        <ReplyTicket />
      </div>
      <div
        className="mx-auto flex w-[90%] items-center mb-3
  justify-between rounded-2xl border-[1px] border-pink-300 bg-zinc-50 px-3 xs:px-5"
      >
        <div className="flex w-full items-center gap-x-4">
          <GrAttachment className="cursor-pointer text-xl font-semibold" />
          <textarea
            className=" w-full placeholder:text-xs resize-none border-none bg-transparent pt-4 text-primary-pk outline-none"
            placeholder="پیام خود را بنویسید ..."
          ></textarea>
        </div>
        <BsEmojiSmile className="cursor-pointer text-2xl font-bold text-primary-pk" />
      </div>
    </>
  );
}
