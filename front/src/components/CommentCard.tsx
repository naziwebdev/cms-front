import { TiTick } from "react-icons/ti";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { BsChatLeftTextFill } from "react-icons/bs";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { GoXCircleFill } from "react-icons/go";


export default function CommentCard() {
  return (
    <div
      className="relative h-auto w-[90%] md:w-[75%] rounded-3xl border-2 border-fuchsia-500 bg-white p-1.5 xs:p-2.5
    shadow-lg"
    >
      <div className="absolute -left-5 top-8 sm:-left-12 sm:top-8 z-10 h-16 w-16 sm:h-24 sm:w-24 cursor-pointer rounded-full bg-fuchsia-300 text-white">
        <TiTick className="absolute left-2 top-1  text-[3rem] sm:text-[5rem] text-white" />
      </div>
      <div className="flex items-center justify-between gap-y-2">
        <div className="flex items-center gap-x-3">
          <img
            src="/images/user-04.jpg"
            alt="avatar"
            className="hidden 2xs:flex h-10 w-10 rounded-full object-cover md:h-14 md:w-14 lg:h-16 lg:w-16"
          />
          <div>
            <p className="font-semibold text-zinc-800 text-[.7rem] xs:text-base">نازنین رستگار</p>
            <p className="pt-1 text-sm text-zinc-400 text-[.7rem] xs:text-base">1402/12/4</p>
          </div>
        </div>
        <h3 className="text-sm xs:text-lg font-semibold text-zinc-800 hidden sm:flex">خوب بود</h3>
        <div className="self-start sm:self-center sm:me-12 flex text-[.8rem] xs:text-xl text-yellow-400">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStar />
        </div>
      </div>
      <h3 className="xs:text-lg font-semibold text-zinc-800 block sm:hidden">خوب بود</h3>
      <p className="py-1.5  sm:pe-10 text-stone-500 text-sm xs:text-base">
        خوبه ولی کمی دیر به دستم رسید و کمی هم زدگی داشت ولی دیگه مرجوع نکردم
      </p>
      <div className="flex  justify-end gap-1.5 xs:gap-2.5 sm:me-10">
        <button className="rounded-full xs:bg-fuchsia-200 xs:px-2.5  md:px-6 py-1.5 text-xl font-semibold text-primary-pk">
          <GoXCircleFill />
        </button>
        <button className="rounded-full xs:bg-sky-100 xs:px-2.5 md:px-6 py-1.5 text-lg font-semibold text-primary-b">
         <BsChatLeftTextFill/>
        </button>
        <button className="rounded-full xs:bg-red-100 xs:px-2.5 md:px-6 py-1.5 text-xl font-semibold text-red-500">
          <RiDeleteBin5Fill/>
        </button>
      </div>
    </div>
  );
}
