import LinechartBox from "../components/LinechartBox";
import { data1, data2, data3, data4 } from "../LinechartDatas";
import BarChartBox from "../components/BarChartBox";
import PiechartBox from "../components/PiechartBox";
import AreachartBox from "../components/AreachartBox";
import CommentScoreBox from "../components/CommentScoreBox";
import OrderTable from "../components/OrderTable";
import TodoListBox from "../components/TodoListBox";
import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/colors/purple.css";
import WeatherBox from "../components/WeatherBox";
import TodayEventsBox from "../components/TodayEventsBox";
import UserTable from "../components/UserTable";
import { VectorMap } from "@south-paw/react-vector-maps";
import iranMap from "../iran.svg.json";

export default function Home() {
  return (
    <div
      className="w-[calc(100vw-90px)] 
     overflow-hidden px-2 pb-10 xs:w-[calc(100vw-130px)]"
    >
      <div className="grid grid-cols-1 items-center justify-center gap-5 md:grid-cols-2 xl:grid-cols-4">
        <LinechartBox
          bgColor="bg-primary-p"
          title="تعداد کاربران"
          data={data1}
        />
        <LinechartBox
          bgColor="bg-primary-pk"
          title="تعداد محصولات"
          data={data2}
        />
        <LinechartBox bgColor="bg-primary-y" title="فروش کل" data={data3} />
        <LinechartBox bgColor="bg-primary-b" title="هزینه کل" data={data4} />
      </div>
      <div className="ga-x-12 mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-x-24">
        <BarChartBox />
        <PiechartBox />
      </div>
      <div className=" mt-16 grid grid-cols-1 items-center gap-5 md:grid-cols-2 lg:gap-x-24">
        <AreachartBox />
        <CommentScoreBox />
      </div>
      <div
        className="me-20 mt-16 w-[calc(100vw-90px)]  rounded-3xl bg-white p-4
       shadow-lg shadow-zinc-300
       xs:w-[calc(100vw-130px)] "
      >
        <h2 className="px-4 pb-4 font-semibold text-stone-700">
          لیست سفارش ها
        </h2>
        <div className="h-[50vh] overflow-auto">
          <OrderTable />
        </div>
      </div>
      <div className="mt-16 grid grid-cols-1 items-center gap-5 md:grid-cols-2 lg:gap-x-5 xl:grid-cols-4">
        <TodoListBox />
        <Calendar
          className="purple w-full  bg-fuchsia-300  shadow-xl shadow-zinc-400"
          calendar={persian}
          locale={persian_fa}
        />

        <WeatherBox />
        <TodayEventsBox />
      </div>
      <div
        className="me-20 mt-16 w-[calc(100vw-90px)]  rounded-3xl bg-white p-4
       shadow-lg shadow-zinc-300
       xs:w-[calc(100vw-130px)] "
      >
        <h2 className="px-4 pb-4 font-semibold text-stone-700">لیست کاربران</h2>
        <div className="h-[50vh] overflow-auto">
          <UserTable data={[]} />
        </div>
      </div>
      <div
        className="me-20 mt-16 grid  w-[calc(100vw-90px)]
    
       grid-cols-1 items-center gap-5 p-4 xs:w-[calc(100vw-130px)] lg:grid-cols-2 lg:gap-x-24"
      >
        <div className="">
          <h2 className="px-4 pb-4 font-semibold text-stone-700">
            پراکندگی ها :
          </h2>

          <div className="w-full">
            <VectorMap {...iranMap} layerProps={{ fill: "#7e22ce" }} />
          </div>
        </div>
        <div
          className=" rounded-2xl bg-white p-6
       text-center shadow-lg shadow-zinc-300"
        >
          <div className="flex flex-col justify-around gap-y-4 p-5 text-sm font-semibold text-stone-700 xs:flex-row xs:text-base">
            <div className="flex items-center gap-x-2 ">
              <span className="h-6 w-6  rounded-md bg-primary-y"></span>
              پراکندگی سفارشات
            </div>

            <div className="flex items-center gap-x-2">
              <span className="h-6 w-6  rounded-md bg-primary-pk"></span>
              پراکندگی خریداران
            </div>
          </div>
          <div className="mt-5 flex flex-col items-center justify-around gap-y-4 2xs:flex-row">
            <ul className="list-decimal [&>*]:pt-4 [&>*]:font-semibold [&>*]:text-primary-y">
              <li className="">تهران</li>
              <li className="">تهران</li>
              <li className="">تهران</li>
              <li className="">تهران</li>
            </ul>
            <ul className="list-decimal [&>*]:pt-4 [&>*]:font-semibold [&>*]:text-primary-pk">
              <li className="">تهران</li>
              <li className="">تهران</li>
              <li className="">تهران</li>
              <li className="">تهران</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
