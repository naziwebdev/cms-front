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
  



  const data = [
    {
      name: "فروردین",
      sale: 4000,
      cost: 2400,
      amt: 2400,
    },
    {
      name: "اردیبهشت",
      sale: 3000,
      cost: 1398,
      amt: 2210,
    },
    {
      name: "خرداد",
      sale: 2000,
      cost: 9800,
      amt: 2290,
    },
    {
      name: "تیر",
      sale: 2780,
      cost: 3908,
      amt: 2000,
    },
    {
      name: "مرداد",
      sale: 1890,
      cost: 4800,
      amt: 2181,
    },
    {
      name: "شهریور",
      sale: 690,
      cost: 3800,
      amt: 2500,
    },
    {
      name: "مهر",
      sale: 3490,
      cost: 4300,
      amt: 2100,
    },
    {
      name: "آبان",
      sale: 2000,
      cost: 3800,
      amt: 2290,
    },
    {
      name: "ّآذر",
      sale: 2780,
      cost: 4008,
      amt: 2000,
    },
    {
      name: "دی",
      sale: 1890,
      cost: 4800,
      amt: 2181,
    },
    {
      name: "بهمن",
      sale: 8390,
      cost: 3800,
      amt: 2500,
    },
    {
      name: "اسفند",
      sale: 3490,
      cost: 4300,
      amt: 2100,
    },
  ];
  const getSaletData = async () => {
    const res1 = await fetch("http://localhost:4000/v1/orders/report", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDc4NTcyZDdjMjE4YTVkZDY3MTAyYyIsImlhdCI6MTcxMTU2NTE5NSwiZXhwIjoxNzE0MTU3MTk1fQ.20k8OOxivVVwnjcEfdhAd87QbsWF1AA1Kp3M0oA2ak4",
      },
    });

    const res2 = await fetch("http://localhost:4000/v1/costs/report", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDc4NTcyZDdjMjE4YTVkZDY3MTAyYyIsImlhdCI6MTcxMTU2NTE5NSwiZXhwIjoxNzE0MTU3MTk1fQ.20k8OOxivVVwnjcEfdhAd87QbsWF1AA1Kp3M0oA2ak4",
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
      <h2 className="pb-4 ps-2 text-base font-semibold text-stone-700 2xs:text-lg">
        مقایسه درامد و هزینه ها :
      </h2>
      <ul className="flex gap-x-4 text-xs 2xs:gap-x-8 sm:text-sm">
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
