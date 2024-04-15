import { EventTypes } from "../TypescriptTypes/EventTypes";
import { useState, useEffect } from "react";
export default function Timeline() {
  const [weeklyEvents, setWeeklyEvents] = useState<EventTypes[]>();
  //   const [days ,setDays] = useState<string[]>(['شنبه','یکشنبه',
  // 'دوشنبه','سه شنبه' , 'چهارشنبه','پنج شنبه' ,'جمعه'])

  const getWeeklyEvents = async () => {
    const res = await fetch("http://localhost:4000/v1/events/weekly", {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDc4NTcyZDdjMjE4YTVkZDY3MTAyYyIsImlhdCI6MTcxMTU2NTE5NSwiZXhwIjoxNzE0MTU3MTk1fQ.20k8OOxivVVwnjcEfdhAd87QbsWF1AA1Kp3M0oA2ak4`,
      },
    });
    const data = await res.json();
    setWeeklyEvents(data);
  };

  useEffect(() => {
    getWeeklyEvents();
  }, []);

  return (
    <div className="ms-5 flex flex-col items-center justify-around gap-y-10 xs:me-0 md:flex-row">
      <ul className=" flex flex-col gap-y-12 ">
        {weeklyEvents?.length !== 0 ? weeklyEvents?.map((day) => (
          <li
            key={crypto.randomUUID()}
            className="timeline-xs xs:timeline relative gap-x-3 xs:flex xs:gap-x-8 lg:gap-x-16"
          >
            <p className="font-semibold dark:text-zinc-100"> {day?.date}</p>
            <div className="flex gap-x-4 2xs:gap-x-8  ">
              <span className=" font-semibold text-primary-b">
                {day?.title}{" "}
              </span>
              <span className="text-sm text-zinc-400 ">{day?.time}</span>
            </div>
          </li>
        )) : <h1 className="text-primary-pk text-2xl font-semibold">برای این هفته ایونتی وجود ندارد</h1>}
      </ul>
    </div>
  );
}
