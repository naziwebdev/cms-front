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
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OWVkYjE5YjQxZDE0NmQ3ZWY3N2NkMyIsImlhdCI6MTcxNTk2NjUyNywiZXhwIjoxNzE4NTU4NTI3fQ.oBGAf4B6F8rimiZnEVTkAj-OvWFzYA0jYtkOnIyNgsY",
      },
    });

    const res2 = await fetch("http://localhost:4000/v1/costs/report", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OWVkYjE5YjQxZDE0NmQ3ZWY3N2NkMyIsImlhdCI6MTcxNTk2NjUyNywiZXhwIjoxNzE4NTU4NTI3fQ.oBGAf4B6F8rimiZnEVTkAj-OvWFzYA0jYtkOnIyNgsY",
      },
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
    
    setMainData(result)
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
          <p className="">هزینه</p>
        </li>
        <li className="flex items-center gap-x-2.5 pt-3">
          <span className="h-4 w-4 bg-[#f5d0fe]"></span>
          <p className="">درامد</p>
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
