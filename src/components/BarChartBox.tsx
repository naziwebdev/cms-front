
import { BarChart, Bar, Cell, XAxis, YAxis,ResponsiveContainer } from "recharts";
import { useState, useEffect } from "react";

const colors = [ "pink",'#581c87','#a3e635', "#0088FE", "#00C49F", "#FF8042", "red"  
,'black','#38bdf8','#d946ef','#d4d4d8'];


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
  const [barchartData, setBarchartData] = useState<barchartData[]>(
    [],
  );

  const getBarchartData = async () => {
    const res = await fetch("http://localhost:4000/v1/orders/report", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDc4NTcyZDdjMjE4YTVkZDY3MTAyYyIsImlhdCI6MTcxMTU2NTE5NSwiZXhwIjoxNzE0MTU3MTk1fQ.20k8OOxivVVwnjcEfdhAd87QbsWF1AA1Kp3M0oA2ak4",
      },
    });

    if (res.status === 200) {
      const data = await res.json();
      setBarchartData(data);
    }
  };


  useEffect(() => {
   getBarchartData()
  },[])



  return (
    <div className="">
      <h2 className="ps-2 pb-4 text-base 2xs:text-lg font-semibold dark:text-zinc-200 text-stone-700">
        فروش ماهانه :
      </h2>
      <ResponsiveContainer width="112%" height={400}>
        <BarChart
          data={barchartData}    
        >
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
