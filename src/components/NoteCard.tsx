import { RiDeleteBinLine } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

export default function NoteCard() {
  return (
    <div className="h-auto rounded-xl border-b-2 border-b-primary-pk bg-lime-200 p-3 shadow-xl">
      <div className="flex w-full justify-between">
        <div className="flex flex-col xs:flex-row xs:items-center gap-x-3">
          <img
            src="/images/user-04.jpg"
            alt="avatar"
            className="h-14 w-14 rounded-full"
          />
          <div className="text-sm">
            <p className="pb-1 font-semibold">نازنین رستگار</p>
            <p className="text-zinc-500">1402/11/18</p>
          </div>
        </div>
        <BsThreeDotsVertical className="cursor-pointer pt-1.5 text-3xl" />
      </div>
      <div className="w-full">
        <h4 className="font-semobold pt-5 text-lg">عنوان یادداشت</h4>
        <p className="truncate pt-1 text-zinc-500">
          لورم ایپسوم جهت تست متن یادداشت پنل مدیریت فروشگاهی لورم ایپسوم جهت
          تست متن یادداشت پنل مدیریت فروشگاهی
        </p>
      </div>
      <div className="flex items-center justify-between px-2 pt-10">
        <FaEye className="cursor-pointer text-xl text-primary-pk" />
        <div className="flex items-center gap-x-4 text-xl font-bold">
          <FaRegStar className="cursor-pointer text-primary-y" />
          <RiDeleteBinLine className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
