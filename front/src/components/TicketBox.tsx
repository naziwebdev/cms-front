

export default function TicketBox() {
 
  return (
    <div className="hover:bg-pink-100 hover:duration-300 hover:ease-out cursor-pointer w-full flex gap-x-2 md:gap-x-4 rounded-xl bg-white p-3 shadow-lg border-2 border-zinc-200">
        <img
          src="/images/user-04.jpg"
          alt="avatar"
          className="h-10 w-10 md:h-14 md:w-14 rounded-full border-2 border-primary-pk"
        />
        <div className="w-[75%] 2xl:w-[80%]">
          <div className="flex  items-center justify-between pb-1.5">
            <p className="pb-1 font-semibold text-sm md:text-base">nazanin rastegar</p>
            <span className="text-xs md:text-sm  text-stone-500">1403/3/1</span>
          </div>
          <div className=" flex gap-x-4 items-center justify-between">
               <p className="truncate   text-stone-500 text-[.98rem]">textt for testtext for textt for testtext for textt for testtext for textt for testtext for textt for testtext for  body that is just for test</p>
               <p className="rounded-full bg-primary-p text-white py-0.5 px-2 text-xs md:text-[.84rem]">2</p>
          </div> 
        </div>
      </div>

  );
}
