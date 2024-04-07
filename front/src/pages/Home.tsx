import LinechartBox from "../components/LinechartBox"
import { data1,data2,data3,data4 } from "../LinechartDatas";
import BarChartBox from "../components/BarChartBox";
import PiechartBox from "../components/PiechartBox";

export default function Home() {
  return (
    <div className="w-[calc(100vw-90px)] 
     px-2 xs:w-[calc(100vw-130px)] overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center justify-center gap-5">
        <LinechartBox bgColor='bg-primary-p' title='تعداد کاربران' data={data1}/>      
        <LinechartBox bgColor='bg-primary-pk' title='تعداد محصولات' data={data2}/>      
        <LinechartBox bgColor='bg-primary-y' title='فروش کل' data={data3}/>      
        <LinechartBox bgColor='bg-primary-b' title='هزینه کل' data={data4}/>      
      </div>
      <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 ga-x-12 lg:gap-x-20" >
        <BarChartBox/>
        <PiechartBox/>
      </div>
    </div>
  );
}
