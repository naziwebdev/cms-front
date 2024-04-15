import {
  LineChart,
  Line,
  Tooltip,
  ResponsiveContainer,
  // XAxis
} from "recharts";

type linechartData = {
  numberofdocuments: number;
  month: string;
};


type ChartBoxProp = {
  bgColor: string;
  title:string;
  data:linechartData[]
};

export default function ChartBox({ bgColor , title , data}: ChartBoxProp) {

 
  return (
    <div className={`${bgColor} w-full rounded-[3rem] p-5 shadow-xl dark:shadow-lg dark:shadow-zinc-700 shadow-zinc-400`}>
      <h2 className="ps-6 pt-0 2xs:pt-2 text-base 2xs:text-lg font-semibold text-white">
        {title}
      </h2>
      <ResponsiveContainer width="100%"    height={90}>

        <LineChart data={data}>
          <Line
            type="monotone"
            dataKey="numberofdocuments"
            name="month-user"
            stroke="#fff"
            strokeWidth={7}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="totalAmount"
            name="month-user"
            stroke="#fff"
            strokeWidth={7}
            dot={false}
          />
          {/* <XAxis
                dataKey={"month"}
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
              width: "auto",
              height: "5px",
              fontSize: ".8rem",
              color: "#fff",
            }}
            contentStyle={{
              backgroundColor: bgColor,
              border: "1px solid #fff",
              borderRadius: "5px",
              padding: "0 8px 0 8px",
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
