import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

export default function CommentScoreBox() {
  return (
    <div className="p-4 sm:p-10 h-auto bg-white rounded-3xl shadow-xl shadow-zinc-300">
     <h2 className="text-xl text-zinc-500">نظرات مشتریان</h2>
     <div className="flex flex-wrap justify-between px-3 sm:justify-around items-center text-primary-y bg-yellow-100 w-full h-12 rounded-xl mt-8 text-sm sm:text-base">
        <div className="flex gap-x-1 sm:gap-x-5">
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaRegStar/>
        </div>
        <p className="">۴ از ۵</p>
     </div>
     <p className="text-center pt-3 text-zinc-800 text-sm">مجموع ۴۱۵ بررسی</p>
     <ul className="pt-3 [&>*]:pt-2.5">
        <li className="flex items-center  justify-center gap-x-2 sm:gap-x-4">
            <span className="text-sm">۵ ستاره</span>
            <div className="relative w-[80%] h-6 rounded-xl bg-zinc-100"><div className="absolute bg-indigo-300 w-4/6 h-6 top-0 right-0 z-20 rounded-xl"></div></div>
            <span className="text-sm">350</span>
        </li>
        <li className="flex items-center justify-center gap-x-2 sm:gap-x-4">
            <span className="text-sm">۵ ستاره</span>
            <div className="relative w-[80%] h-6 rounded-xl bg-zinc-100"><div className="absolute bg-indigo-300 w-[40%] h-6 top-0 right-0 z-20 rounded-xl"></div></div>
            <span className="text-sm">350</span>
        </li>
        <li className="flex items-center justify-center gap-x-2 sm:gap-x-4">
            <span className="text-sm">۵ ستاره</span>
            <div className="relative w-[80%] h-6 rounded-xl bg-zinc-100"><div className="absolute bg-indigo-300 w-[50%] h-6 top-0 right-0 z-20 rounded-xl"></div></div>
            <span className="text-sm">350</span>
        </li>
        <li className="flex items-center justify-center gap-x-2 sm:gap-x-4">
            <span className="text-sm">۵ ستاره</span>
            <div className="relative w-[80%] h-6 rounded-xl bg-zinc-100"><div className="absolute bg-indigo-300 w-[20%] h-6 top-0 right-0 z-20 rounded-xl"></div></div>
            <span className="text-sm">350</span>
        </li>
        <li className="flex items-center justify-center gap-x-2 sm:gap-x-4">
            <span className="text-sm">۵ ستاره</span>
            <div className="relative w-[80%] h-6 rounded-xl bg-zinc-100"><div className="absolute bg-indigo-300 w-[10%] h-6 top-0 right-0 z-20 rounded-xl"></div></div>
            <span className="text-sm">350</span>
        </li>
     </ul>
    </div>
  )
}
