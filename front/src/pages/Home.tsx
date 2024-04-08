import LinechartBox from "../components/LinechartBox";
import { data1, data2, data3, data4 } from "../LinechartDatas";
import BarChartBox from "../components/BarChartBox";
import PiechartBox from "../components/PiechartBox";
import AreachartBox from "../components/AreachartBox";
import CommentScoreBox from "../components/CommentScoreBox";
import OrderTable from "../components/OrderTable";
import TodoListBox from "../components/TodoListBox";


export default function Home() {
  return (
    <div
      className="w-[calc(100vw-90px)] 
     overflow-hidden px-2 xs:w-[calc(100vw-130px)] pb-10"
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
      <div className=" mt-16 grid grid-cols-1 gap-5 items-center md:grid-cols-2 lg:gap-x-24">
      <AreachartBox/>
      <CommentScoreBox/>
      </div>
      <div className="me-20 mt-16 bg-white p-4 rounded-3xl shadow-lg shadow-zinc-300
       w-[calc(100vw-90px)] overflow-x-auto
       xs:w-[calc(100vw-130px)] ">
        <h2 className="pb-4 px-4 font-semibold text-stone-700">لیست سفارش ها</h2>
        <OrderTable />
      </div>
      <div className="mt-16 grid grid-cols-1 gap-5 items-center md:grid-cols-2 xl:grid-cols-4 lg:gap-x-5">
       <TodoListBox/>
      </div>
    </div>
  );
}
