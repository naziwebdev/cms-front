import { useState } from "react";
import { FaSortAmountDownAlt } from "react-icons/fa";
import TicketBox from "../components/TicketBox";
import TicketChatBox from "../components/TicketChatBox";

export default function Tickets() {
  const [btnActive, setBtnActive] = useState<string>("btn1");
  return (
    <div className="mt-2  flex flex-col sm:flex-row gap-y-6 w-[calc(100vw-90px)]  justify-between gap-x-2 xs:w-[calc(100vw-130px)] lg:gap-x-5 ">
      <div className="mb-5 order-1 sm:order-none w-full sm:w-[50%] rounded-xl bg-white shadow-lg lg:w-[68%]">
        <TicketChatBox/>
      </div>
      <div className="w-full sm:w-[50%] lg:w-[32%]">
        <h2 className=" text-xl font-semibold">تیکت ها</h2>
        <p className="flex items-center gap-x-2 pt-3">
          <FaSortAmountDownAlt className="text-primary-pk" />
          فیلتر بر اساس
        </p>
        <div className="text-sm md:text-base mt-2.5 flex items-center justify-center rounded-2xl border-[1px] border-pink-200 bg-white p-3.5  font-semibold text-stone-500 shadow-lg">
          <button
            onClick={() => setBtnActive("btn1")}
            className={`px-4 md:px-8 ${btnActive === "btn1" && "text-primary-pk"}`}
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
        <div className="mt-4 xs:mt-8 flex h-[32vh] sm:h-[50vh] flex-col gap-y-2 overflow-y-auto">
          <TicketBox />
          <TicketBox />
          <TicketBox />
          <TicketBox />
          <TicketBox />
          <TicketBox />
          <TicketBox />
        </div>
      </div>
    </div>
  );
}
