import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useState, useEffect } from "react";


type barchartData = {
  totalAmount: number;
  month: string;
};

export default function AreachartBox() {
  const [mainData, setMainData] = useState<barchartData[]>([]);
 
  const getSaletData = async () => {
    const res1 = await fetch("http://localhost:4000/v1/orders/report", {
      credentials: "include",
    });

    const res2 = await fetch("http://localhost:4000/v1/costs/report", {
        credentials: "include",
    });

    const data1 = await res1.json()
    const data2 = await res2.json()


    
    const result = data1.map((item1:barchartData) => {
      const item2 = data2.find((item:barchartData) => item.month === item1.month);
      return {
        month: item1.month,
        totalSale: item1.totalAmount,
        totalCost: item2 ? item2.totalAmount : 0,
      };
    });
 
    const monthMapping: any = {
      January: "دی",
      February: "بهمن",
      March: "اسفند",
      April: "فروردین",
      May: "اردیبهشت",
      June: "خرداد",
      July: "تیر",
      August: "مرداد",
      September: "شهریور",
      October: "مهر",
      November: "آبان",
      December: "آذر",
    };

    const convertMonth = result.map((item: any) => {
      const persianMonth = monthMapping[item.month];
      return { ...item, month: persianMonth };
    });

    const monthOrder: any = {
      فروردین: 1,
      اردیبهشت: 2,
      خرداد: 3,
      تیر: 4,
      مرداد: 5,
      شهریور: 6,
      مهر: 7,
      آبان: 8,
      آذر: 9,
      دی: 10,
      بهمن: 11,
      اسفند: 12,
    };

    const sortedData = convertMonth.sort((a: any, b: any) => {
      return monthOrder[a.month] - monthOrder[b.month];
    });
    
    setMainData(sortedData)

  };




  useEffect(() => {
    getSaletData();
    
   
  }, []);

  return (
    <div className="">
      <h2 className="pb-4 ps-2 text-base font-semibold dark:text-zinc-200 text-stone-700 2xs:text-lg">
        مقایسه درامد و هزینه ها :
      </h2>
      <ul className="flex gap-x-4 text-xs 2xs:gap-x-8 sm:text-sm dark:text-zinc-200">
        <li className="flex items-center gap-x-2.5 pt-3">
          <span className="h-4 w-4 bg-[#F84AD0]"></span>
          <p className="">درآمد</p>
        </li>
        <li className="flex items-center gap-x-2.5 pt-3">
          <span className="h-4 w-4 bg-[#f5d0fe]"></span>
          <p className="">هزینه</p>
        </li>
      </ul>
      <ResponsiveContainer width="112%" height={400}>
        <AreaChart data={mainData}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="totalSale"
            stackId="1"
            stroke="#F84AD0"
            fill="#F84AD0"
          />
          <Area
            type="monotone"
            dataKey="totalCost"
            stackId="1"
            stroke="#f5d0fe"
            fill="#f5d0fe"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
