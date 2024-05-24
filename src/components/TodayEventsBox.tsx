import { FaRegCalendar } from "react-icons/fa";
import { EventTypes } from "../TypescriptTypes/EventTypes";
import { useState, useEffect } from "react";


export default function TodayEventsBox() {
  const [todayEvents, setTodayEvents] = useState<EventTypes[]>();

  const now = new Date();
  const nowFa = now.toLocaleDateString("fa-IR", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    calendar: "persian",
  });

  const getTodayEvents = async () => {
    const res = await fetch("http://localhost:4000/v1/events/today", {
      credentials: "include",
    });
    const data = await res.json();
    setTodayEvents(data);
  };

  const converNumToNameMonth = () => {
    return nowFa.split("/")[1] == "۱"
      ? "فروردین"
      : nowFa.split("/")[1] == "۲"
        ? "اردیبهشت"
        : nowFa.split("/")[1] == "۳"
          ? "خرداد"
          : nowFa.split("/")[1] == "۴"
            ? "تیر"
            : nowFa.split("/")[1] == "۵"
              ? "مرداد"
              : nowFa.split("/")[1] == "۶"
                ? "شهریور"
                : nowFa.split("/")[1] == "۷"
                  ? "مهر"
                  : nowFa.split("/")[1] == "۸"
                    ? "آبان"
                    : nowFa.split("/")[1] == "۹"
                      ? "آذر"
                      : nowFa.split("/")[1] == "۱۰"
                        ? "دی"
                        : nowFa.split("/")[1] == "۱۱"
                          ? "بهمن"
                          : nowFa.split("/")[1] == "۱۲"
                            ? "اسفند"
                            : "";
  };

  useEffect(() => {
    getTodayEvents();
  }, []);

 

  return (
    <div className={`flex w-full flex-col overflow-y-auto rounded-3xl rounded-b-none h-[400px] bg-fuchsia-300 p-6 text-white dark:shadow-lg dark:shadow-zinc-700 shadow-xl shadow-zinc-400`}>
      <div className="flex flex-col items-center">
        <h2 className="text-[3.5rem] font-bold">{nowFa.split("/")[2]}</h2>
        <p className="flex items-center gap-x-2 tracking-widest">
          <FaRegCalendar className="" />
          {nowFa.split("/")[0]} {converNumToNameMonth()}
        </p>
      </div>
      <ul className="mt-5 [&>*:not(:last-child)]:border-b-[1px] [&>*:not(:last-child)]:border-dotted [&>*:not(:last-child)]:border-zinc-700 [&>*]:py-2.5">
        {todayEvents?.length !== 0 ? (
          todayEvents?.map((item) => (
            <li key={item._id} className=" flex items-center gap-x-4  ">
              <span className="text-zinc-200">{item.time}</span>
              <p className="">{item.title}</p>
            </li>
          ))
        ) : (
          <>
          <li className=" flex items-center gap-x-4  ">
            <span className="text-zinc-200">00:00</span>
            <p className="">امروز ایونتی وجود ندارد</p>
          </li>
          <li className=" flex items-center gap-x-4  ">
            <span className="text-zinc-200">00:00</span>
            <p className="">امروز ایونتی وجود ندارد</p>
          </li>
          <li className=" flex items-center gap-x-4  ">
            <span className="text-zinc-200">00:00</span>
            <p className="">امروز ایونتی وجود ندارد</p>
          </li>
          </>
        )}
      </ul>
    </div>
  );
}
