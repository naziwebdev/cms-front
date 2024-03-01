import { TiTick } from "react-icons/ti";
import { MdDateRange } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdEditSquare } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";

export default function TodoCard() {
  const [doTask, setDoTask] = useState<boolean>(false);
  const [toggleActions, setToggleActions] = useState<boolean>(false);

  return (
    <div
      className={`${doTask && "bg-indigo-300 line-through"} relative
       flex flex-col xs:flex-row h-auto w-full xs:w-[90%]
        xs:items-center justify-between rounded-3xl bg-white p-4 xs:px-6 shadow-xl 
    md:w-[75%]`}
    >
      <div className="absolute top-0 right-0 h-full w-2 rounded-br-3xl rounded-tr-3xl bg-pink-600"></div>
      <div className="flex items-center">
        <div
          className="flex h-6 w-6 sm:h-8 sm:w-8 cursor-pointer items-center justify-center 
      rounded-full border-2 border-pink-500 bg-white"
          onClick={() => setDoTask((prev) => !prev)}
        >
          {doTask && <TiTick className="text-7xl text-primary-p" />}
        </div>
        <div className="ps-2 xs:ps-5">
          <p className={`${doTask && "text-zinc-600"} pb-2 xs:pb-4 font-bold text-sm sm:text-base`}>
            خواندن ری اکت
          </p>
          <p className="flex gap-x-1.5 text-[.8rem] sm:text-[.95rem] text-zinc-600">
            1401/12/24 <MdDateRange className="-order-1 text-base xs:text-xl" />
          </p>
        </div>
      </div>
      <div className="flex self-end  xs:self-center items-center gap-0.5 xs:gap-x-2 text-base xs:text-2xl">
        <FaRegStar className="cursor-pointer text-yellow-300" />
        <BsThreeDotsVertical
          className="cursor-pointer"
          onClick={() => setToggleActions((prev) => !prev)}
        />
        {toggleActions && (
          <div className="flex items-center gap-0.5 xs:gap-2 text-base xs:text-2xl bg-white p-1 xs:p-1.5 rounded-lg">
            <MdEditSquare className="cursor-pointer  text-primary-p" />
            <RiDeleteBin6Fill className="cursor-pointer  text-red-500" />
          </div>
        )}
      </div>
    </div>
  );
}
