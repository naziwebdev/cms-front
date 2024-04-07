import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type ChartData = {
  name: string,
  uv: number,
  pv:number,
  amt:number,
}

type ChartBoxProp = {
  bgColor: string;
  title:string;
  data:ChartData[]
};

export default function ChartBox({ bgColor , title , data}: ChartBoxProp) {
  return (
    <div className={`${bgColor} w-full rounded-[4rem] p-5 shadow-xl shadow-zinc-400`}>
      <h2 className="ps-6 pt-0 2xs:pt-2 text-base 2xs:text-lg font-semibold text-white">
        {title}
      </h2>
      <ResponsiveContainer width="95%"    height={90}>
        <LineChart data={data}>
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#fff"
            strokeWidth={7}
            dot={false}
          />
          {/* <XAxis
                dataKey={"name"}
                axisLine={false}
                tickLine={false}
                // stroke="transparent"
                strokeOpacity={0}
               
              /> */}
          <Tooltip
            itemStyle={{
              color: "#fff",
            }}
            wrapperStyle={{
              width: "70px",
              height: "5px",
              fontSize: ".8rem",
              color: "#fff",
            }}
            contentStyle={{
              backgroundColor: bgColor,
              border: "1px solid #fff",
              borderRadius: "5px",
              padding: "0 8px 0 0",
            }}
            cursor={false}
            offset={20}
            labelStyle={{ display: "none" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
