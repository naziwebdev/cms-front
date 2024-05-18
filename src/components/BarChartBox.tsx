import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { useState, useEffect } from "react";

const colors = [
  "pink",
  "#581c87",
  "#a3e635",
  "#0088FE",
  "#00C49F",
  "#FF8042",
  "red",
  "black",
  "#38bdf8",
  "#d946ef",
  "#d4d4d8",
];

type barchartData = {
  numberofdocuments: number;
  month: string;
};

const getPath = (x: number, y: number, width: number, height: number) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
};

const TriangleBar = (props: any) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function BarChartBox() {
  const [barchartData, setBarchartData] = useState<barchartData[]>([]);

  const getBarchartData = async () => {
    const res = await fetch("http://localhost:4000/v1/orders/report", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OWVkYjE5YjQxZDE0NmQ3ZWY3N2NkMyIsImlhdCI6MTcxNTk2NjUyNywiZXhwIjoxNzE4NTU4NTI3fQ.oBGAf4B6F8rimiZnEVTkAj-OvWFzYA0jYtkOnIyNgsY",
      },
    });

    if (res.status === 200) {
      const data = await res.json();
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

      const convertMonth = data.map((item: any) => {
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

      setBarchartData(sortedData);
    }
  };

  useEffect(() => {
    getBarchartData();
  }, []);

  return (
    <div className="">
      <h2 className="pb-4 ps-2 text-base font-semibold text-stone-700 2xs:text-lg dark:text-zinc-200">
        فروش ماهانه :
      </h2>
      <ResponsiveContainer width="112%" height={400}>
        <BarChart data={barchartData}>
          <XAxis dataKey="month" />
          <YAxis />
          <Bar
            dataKey="totalAmount"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {barchartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
