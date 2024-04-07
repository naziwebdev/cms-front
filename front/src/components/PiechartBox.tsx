import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group C", value: 100 },
  { name: "Group D", value: 200 },
  { name: "Group C", value: 300 },
];

const COLORS = ["#a78bfa","#d8b4fe","#f0abfc","#c7d2fe","#f9a8d4","#d946ef"];

export default function PiechartBox() {
  return (
    <div className="">
         <h2 className="ps-2 pb-4 text-base 2xs:text-lg font-semibold text-stone-700">
      دسته بندی محصولات :
      </h2>
      <ResponsiveContainer width="102%" height={260}>
        <PieChart
        >
          <Pie
            data={data}
            innerRadius={70}
            outerRadius={110}
            fill="#8884d8"
            paddingAngle={1}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <ul className="text-xs sm:text-sm flex gap-x-4 2xs:gap-x-8">
        <div>
        <li className="flex items-center gap-x-2.5 pt-3">
            <span className="w-4 h-4 bg-[#a78bfa]"></span>
            <p className="">کالای دیجیتال</p>
        </li>
        <li className="flex items-center gap-x-2.5 pt-3">
            <span className="w-4 h-4 bg-[#d8b4fe]"></span>
            <p className="">کالای دیجیتال</p>
        </li>
        <li className="flex items-center gap-x-2.5 pt-3">
            <span className="w-4 h-4 bg-[#f0abfc]"></span>
            <p className="">کالای دیجیتال</p>
        </li>
        </div>
        <div>
        <li className="flex items-center gap-x-2.5 pt-3">
            <span className="w-4 h-4 bg-[#c7d2fe]"></span>
            <p className="">کالای دیجیتال</p>
        </li>
        <li className="flex items-center gap-x-2.5 pt-3">
            <span className="w-4 h-4 bg-[#f9a8d4]"></span>
            <p className="">کالای دیجیتال</p>
        </li>
        <li className="flex items-center gap-x-2.5 pt-3">
            <span className="w-4 h-4 bg-[#d946ef]"></span>
            <p className="">کالای دیجیتال</p>
        </li>
        </div>
      </ul>
    </div>
  );
}
