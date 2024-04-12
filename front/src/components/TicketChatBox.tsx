import { BsThreeDotsVertical } from "react-icons/bs";
import UserTicketMessage from "../components/UserTicketMessage";
import ReplyTicket from "../components/ReplyTicket";
import { BsFillSendFill } from "react-icons/bs";
import { GrAttachment } from "react-icons/gr";
import TicketContext from "../context/TicketContext";
import { useContext, useState } from "react";
import swal from "sweetalert";

export default function TicketChatBox() {
  let ticketContext = useContext(TicketContext);
  const [ticketAnswerBody, setTicketAnswerBody] = useState<string>();

  const sendAnswerHandler = async () => {
    const res = await fetch("http://localhost:4000/v1/tickets/answer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDc4NTcyZDdjMjE4YTVkZDY3MTAyYyIsImlhdCI6MTcxMTU2NTE5NSwiZXhwIjoxNzE0MTU3MTk1fQ.20k8OOxivVVwnjcEfdhAd87QbsWF1AA1Kp3M0oA2ak4`,
      },
      body: JSON.stringify({
        title: "test",
        body: ticketAnswerBody,
        ticketID: ticketContext.ticketID,
      }),
    });

    if (res.status === 201) {
      await res.json();
      swal({
        title: "پاسخ با موفقیت اضافه شد",
        icon: "success",
        buttons: "بستن" as any,
      });
      setTicketAnswerBody("");
      window.location.reload();
    } else {
      swal({
        title: "عملیات با شکست مواجه شد",
        icon: "error",
        buttons: "بستن" as any,
      });
    }
  };

  return (
    <>
      <div className="flex items-center justify-between p-2 shadow-md shadow-zinc-100">
        <div className="flex gap-x-3">
          {ticketContext.ticket?.ticket.user.avatar ? (
            <img
              src={`http://localhost:4000/users/avatar/${ticketContext.ticket.ticket.user?.avatar}`}
              alt="avatar"
              className="h-10 w-10 rounded-full border-2 border-primary-pk md:h-14 md:w-14"
            />
          ) : (
            <img
              src="/images/3d-minimal-purple-user-profile-avatar-icon-in-circle-white-frame-design-vector.jpg"
              alt="avatar"
              className="h-10 w-10 rounded-full border-4 border-primary-pk md:h-14 md:w-14"
            />
          )}
          <div className="">
            <p className="pb-1 text-sm font-semibold xs:text-base">
              {ticketContext.ticket?.ticket.user.name}
            </p>
            <span className="text-sm  text-stone-500">
              {ticketContext.ticket?.ticket.updatedAt}
            </span>
          </div>
        </div>
        <BsThreeDotsVertical className="cursor-pointer text-2xl" />
      </div>
      <div className="flex h-[45vh] flex-col items-start justify-start gap-y-2 overflow-y-auto p-5 sm:h-[50vh]">
        {ticketContext.ticket?.ticket && <UserTicketMessage />}
        {ticketContext.ticket?.answerTicket &&
          ticketContext.ticket.answerTicket.map((item) => (
            <ReplyTicket key={item._id} {...item}/>
          ))}
        {!ticketContext.ticket?.ticket && (
          <div className="mx-auto pt-40 text-center text-xl font-semibold text-primary-y">
            هنوز روی تیکتی کلیک نکردید
          </div>
        )}
      </div>
      <div
        className="mx-auto mb-3 flex w-[90%] items-center
  justify-between rounded-2xl border-[1px] border-pink-300 bg-zinc-50 px-3 xs:px-5"
      >
        <div className="flex w-full items-center gap-x-4">
          <GrAttachment className="cursor-pointer text-xl font-semibold" />
          <textarea
            value={ticketAnswerBody}
            onChange={(event) => setTicketAnswerBody(event.target.value)}
            className=" w-full resize-none border-none bg-transparent pt-4 text-primary-pk outline-none placeholder:text-xs
            md:placeholder:text-base"
            placeholder="پیام خود را بنویسید ..."
          ></textarea>
        </div>
        <BsFillSendFill
          onClick={sendAnswerHandler}
          className="cursor-pointer text-2xl font-bold text-primary-pk"
        />
      </div>
    </>
  );
}
