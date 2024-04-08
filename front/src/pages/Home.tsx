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
        className="me-20 mt-16 w-[calc(100vw-90px)] overflow-x-auto rounded-3xl bg-white p-4
       shadow-lg shadow-zinc-300
       xs:w-[calc(100vw-130px)] "
      >
        <h2 className="px-4 pb-4 font-semibold text-stone-700">
          لیست سفارش ها
        </h2>
        <OrderTable />
      </div>
      <div className="mt-16 grid grid-cols-1 items-center gap-5 md:grid-cols-2 lg:gap-x-5 xl:grid-cols-4">
        <Calendar
        className="purple w-full  bg-fuchsia-300  shadow-xl shadow-zinc-400"
        calendar={persian}
        locale={persian_fa}
      />  
      <TodoListBox />
     
      <WeatherBox/>
      <TodayEventsBox />
     
    </div>
    </div>
  );
}
