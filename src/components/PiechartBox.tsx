import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { useState, useEffect } from "react";

// const COLORS = [
//   "#a78bfa",
//   "#d8b4fe",
//   "#f0abfc",
//   "#c7d2fe",
//   "#f9a8d4",
//   "#d946ef",
// ];

type PiechartType = {
  _id: string;
  count: number;
  categoryDetails: [
    {
      _id: string;
      title: string;
      href: string;
      createdAt: string;
      updatedAt: string;
      __v: 0;
    },
  ];
};

export default function PiechartBox() {
  const [categoryData, setCategoryData] = useState<PiechartType[]>([]);

  const getCategoryData = async () => {
    const res = await fetch(
      "http://localhost:4000/v1/products/reportCategory",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDc4NTcyZDdjMjE4YTVkZDY3MTAyYyIsImlhdCI6MTcxMTU2NTE5NSwiZXhwIjoxNzE0MTU3MTk1fQ.20k8OOxivVVwnjcEfdhAd87QbsWF1AA1Kp3M0oA2ak4",
        },
      },
    );

    if (res.status === 200) {
      const data = await res.json();
      setCategoryData(data);
    }
  };

  useEffect(() => {
    getCategoryData();
  }, []);

  return (
    <div className="">
      <h2 className="pb-4 ps-2 text-base font-semibold dark:text-zinc-200 text-stone-700 2xs:text-lg">
        دسته بندی محصولات :
      </h2>
      <ResponsiveContainer width="102%" height={260}>
        <PieChart>
          <Pie
            data={categoryData}
            innerRadius={70}
            outerRadius={110}
            fill="#8884d8"
            paddingAngle={1}
            dataKey="count"
          >
            {categoryData.map((entry, index) =>
              entry.categoryDetails[0].title === "وسایل خانه" ? (
                <Cell key={`cell-${index}`} fill="#a78bfa" />
              ) : entry.categoryDetails[0].title === "ورزشی" ? (
                <Cell key={`cell-${index}`} fill="#d8b4fe" />
              ) : entry.categoryDetails[0].title === "آرایشی و بهداشتی" ? (
                <Cell key={`cell-${index}`} fill="#f0abfc" />
              ) : entry.categoryDetails[0].title === "دیجیتال" ? (
                <Cell key={`cell-${index}`} fill="#c7d2fe" />
              ) : entry.categoryDetails[0].title === "پوشاک" ? (
                <Cell key={`cell-${index}`} fill="#f9a8d4" />
              ) : (
                ""
              ),
            )}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <ul className="grid grid-cols-2 gap-x-4 text-xs 2xs:gap-x-8 sm:text-sm">
        {categoryData.map((item) => (
          <li key={item._id} className="flex dark:text-zinc-200 items-center gap-x-2.5 pt-3">
            <span
              className={`h-4 w-4
             ${
               item.categoryDetails[0].title === "وسایل خانه"
                 ? "bg-[#a78bfa]"
                 : item.categoryDetails[0].title === "ورزشی"
                   ? "bg-[#d8b4fe]"
                   : item.categoryDetails[0].title === "آرایشی و بهداشتی"
                     ? "bg-[#f0abfc]"
                     : item.categoryDetails[0].title === "دیجیتال"
                       ? "bg-[#c7d2fe]"
                       : item.categoryDetails[0].title === "پوشاک"
                         ? "bg-[#f9a8d4]"
                         : ""
             }`}
            ></span>
            <p className="">{item.categoryDetails[0]?.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
