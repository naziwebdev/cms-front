import { useState, useEffect } from "react";
import { FaSortAmountDownAlt } from "react-icons/fa";
import TicketBox from "../components/TicketBox";
import TicketChatBox from "../components/TicketChatBox";
import { TicketTypes } from "../TypescriptTypes/TicketTypes";
import { oneTicketTypes } from "../TypescriptTypes/TicketTypes";
import TicketContext from "../context/TicketContext";

export default function Tickets() {
  const [btnActive, setBtnActive] = useState<string>("all");
  const [allTicket, setAllTicket] = useState<TicketTypes[]>();
  const [ticketID, setTicketID] = useState<string>("");
  const [ticket, setTicket] = useState<oneTicketTypes>();

  const getTickets = async () => {
    const res = await fetch("http://localhost:4000/v1/tickets", {
      credentials: "include",
    });
    const tickets = await res.json();

    setAllTicket(tickets);
  };

  useEffect(() => {
    getTickets();
  }, []);

  const getOneTicket = async () => {
    const res = await fetch(
      `http://localhost:4000/v1/tickets/${ticketID}/answer`,
      {
        credentials: "include",
      },
    );
    const oneTicket = await res.json();
    setTicket(oneTicket);
  };


  return (
    <TicketContext.Provider value={{ ticketID, getOneTicket , ticket}}>
      <div className="mt-2  flex w-[calc(100vw-90px)] flex-col justify-between gap-x-2  gap-y-6 xs:w-[calc(100vw-130px)] sm:flex-row lg:gap-x-5 ">
        <div className="order-1 mb-5 w-full rounded-xl bg-white shadow-lg sm:order-none sm:w-[50%] lg:w-[68%]">
          <TicketChatBox />
        </div>
        <div className="w-full sm:w-[50%] lg:w-[32%]">
          <h2 className=" text-xl font-semibold dark:text-zinc-100">تیکت ها</h2>
          <p className="flex items-center gap-x-2 pt-3 dark:text-zinc-100">
            <FaSortAmountDownAlt className="text-primary-pk " />
            فیلتر بر اساس
          </p>
          <div className="mt-2.5 flex items-center justify-center rounded-2xl border-[1px] border-pink-200 bg-white p-3.5 text-xs font-semibold  text-stone-500 shadow-lg xs:text-sm">
            <button
              onClick={() => setBtnActive("all")}
              className={`px-4 md:px-8 ${btnActive === "all" && "text-primary-pk"}`}
            >
              همه
            </button>
            <button
              onClick={() => setBtnActive("btn1")}
              className={`border-s-2 border-primary-pk px-4 md:px-8 ${btnActive === "btn1" && "text-primary-pk"}`}
            >
              پاسخ داده شده
            </button>
            <button
              onClick={() => setBtnActive("btn2")}
              className={`border-s-2 border-primary-pk px-4 md:px-8 ${btnActive === "btn2" && "text-primary-pk"}`}
            >
              پاسخ داده نشده
            </button>
          </div>
          <div className="mt-4 flex h-[32vh] flex-col gap-y-2 overflow-y-auto xs:mt-8 sm:h-[50vh]">
            {btnActive === "all" &&
              allTicket?.map((ticket) => (
                <TicketBox
                  key={ticket._id}
                  data={ticket}
                  setTicketID={setTicketID}
                />
              ))}
            {btnActive === "btn1" &&
              allTicket
                ?.filter((ticket) => ticket.answer === 1)
                .map((item) => (
                  <TicketBox
                    key={item._id}
                    data={item}
                    setTicketID={setTicketID}
                  />
                ))}
            {btnActive === "btn2" &&
              allTicket
                ?.filter((ticket) => ticket.answer === 0)
                .map((item) => (
                  <TicketBox
                    key={item._id}
                    data={item}
                    setTicketID={setTicketID}
                  />
                ))}
          </div>
        </div>
      </div>
    </TicketContext.Provider>
  );
}
