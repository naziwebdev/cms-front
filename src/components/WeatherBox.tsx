import { useState,useEffect } from "react"

export default function WeatherBox() {

  const [weather,setWeather] = useState<any>()

useEffect(() => {

  fetch(`https://api.open-meteo.com/v1/forecast?latitude=35.6944&longitude=51.4215&current=wind_speed_10m&hourly=&daily=temperature_2m_max,wind_speed_10m_max&forecast_days=1`)
  .then(res => res.json())
  .then(data => setWeather(data.daily))

},[])

console.log(weather)

const now = new Date();
const nowFa = now.toLocaleDateString("fa-IR", {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  calendar: "persian",
});

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


  return (
    <div className="bg-weather h-[400px] rounded-3xl px-3 py-5 xs:p-5 dark:shadow-lg dark:shadow-zinc-700 shadow-xl shadow-zinc-400">
        <h2 className="text-zinc-100 text-lg font-semibold">نمای کلی آب و هوا</h2>
        <div className="flex mt-8 gap-x-4 xs:gap-x-8">
            <h1 className="text-white text-[3rem] xs:text-[4rem] pe-2 xs:pe-5 border-e-[1px] border-zinc-300">{Math.round(weather?.temperature_2m_max[0])}</h1>
            <div className="text-zinc-200">
                <p className="text-lg xs:text-xl">تهران</p>
                <p className="text-sm xs:text-base pt-3"> {nowFa.split("/")[0]} {converNumToNameMonth()}{nowFa.split("/")[2] }</p>
                <p className="pt-3 text-xs text-zinx-300">باد : {Math.round(weather?.wind_speed_10m_max[0])} کیلومتر در ساعت</p>

            </div>
        </div>
    </div>
  )
}
