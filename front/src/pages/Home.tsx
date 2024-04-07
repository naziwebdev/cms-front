import LinechartBox from "../components/LinechartBox";
import { data1, data2, data3, data4 } from "../LinechartDatas";
import BarChartBox from "../components/BarChartBox";
import PiechartBox from "../components/PiechartBox";
import AreachartBox from "../components/AreachartBox";
import CommentScoreBox from "../components/CommentScoreBox";

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
      <div className="ga-x-12 mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-x-20">
        <BarChartBox />
        <PiechartBox />
      </div>
      <div className="ga-x-12 mt-16 grid grid-cols-1 gap-5 items-center md:grid-cols-2 lg:gap-x-20">
      <AreachartBox/>
      <CommentScoreBox/>
      </div>
    </div>
  );
}
