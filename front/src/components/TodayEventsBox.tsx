import { FaRegCalendar } from "react-icons/fa";

export default function TodayEventsBox() {
  return (
    <div className="flex w-full md:w-1/2 lg:w-1/3 flex-col  rounded-3xl rounded-b-none bg-fuchsia-300 p-6 text-white shadow-xl shadow-zinc-400">
      <div className="flex flex-col items-center">
        <h2 className="text-[3.5rem] font-bold">24</h2>
        <p className="flex items-center gap-x-2 tracking-widest">
          <FaRegCalendar className="" />
          مهر 1404
        </p>
      </div>
      <ul className="mt-5 [&>*:not(:last-child)]:border-b-[1px] [&>*:not(:last-child)]:border-dotted [&>*:not(:last-child)]:border-zinc-700 [&>*]:py-2.5">
        <li className=" flex items-center gap-x-4  ">
          <span className="text-zinc-200">8:00</span>
          <p className="">جلسه کاری</p>
        </li>
        <li className=" flex items-center gap-x-4    ">
          <span className="text-zinc-200">8:00</span>
          <p className="">جلسه کاری</p>
        </li>
        <li className=" flex items-center gap-x-4   ">
          <span className="text-zinc-200">8:00</span>
          <p className="">جلسه کاری</p>
        </li>
        <li className=" flex items-center gap-x-4  ">
          <span className="text-zinc-200">8:00</span>
          <p className="">جلسه کاری</p>
        </li>
      </ul>
    </div>
  );
}
