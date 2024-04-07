import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 690,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 3800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 4008,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 8390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function AreachartBox() {
  return (
    <div className="">
         <h2 className="ps-2 pb-4 text-base 2xs:text-lg font-semibold text-stone-700">
        مقایسه  درامد و هزینه ها :
      </h2>
      <ul className="text-xs sm:text-sm flex gap-x-4 2xs:gap-x-8">
        <li className="flex items-center gap-x-2.5 pt-3">
            <span className="w-4 h-4 bg-[#F84AD0]"></span>
            <p className="">هزینه</p>
        </li>
        <li className="flex items-center gap-x-2.5 pt-3">
            <span className="w-4 h-4 bg-[#f5d0fe]"></span>
            <p className="">درامد</p>
        </li>
      </ul>
      <ResponsiveContainer width="107%" height={400}>
        <AreaChart
          data={data}  
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stackId="1"
            stroke="#F84AD0"
            fill="#F84AD0"
          />
          <Area
            type="monotone"
            dataKey="pv"
            stackId="1"
            stroke="#f5d0fe"
            fill="#f5d0fe"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
