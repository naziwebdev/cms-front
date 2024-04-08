

export default function WeatherBox() {
  return (
    <div className="bg-weather h-[400px] rounded-3xl px-3 py-5 xs:p-5 shadow-xl shadow-zinc-400">
        <h2 className="text-zinc-100 text-lg font-semibold">نمای کلی آب و هوا</h2>
        <div className="flex mt-8 gap-x-4 xs:gap-x-8">
            <h1 className="text-white text-[3rem] xs:text-[4rem] pe-2 xs:pe-5 border-e-[1px] border-zinc-300">16</h1>
            <div className="text-zinc-200">
                <p className="text-lg xs:text-xl">تهران</p>
                <p className="text-sm xs:text-base pt-3">20 فروردین 1403</p>
                <p className="pt-3 text-xs text-zinx-300">باد : ۵۰ کیلومتر در ساعت</p>

            </div>
        </div>
    </div>
  )
}
