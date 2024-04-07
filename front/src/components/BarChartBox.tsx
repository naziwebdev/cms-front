
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid,ResponsiveContainer } from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink" , 
'#a3e635','black','#38bdf8','#d946ef','#581c87','#d4d4d8'];

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
    uv: 2390,
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
    name: "Page H",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page I",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page J",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page K",
    uv: 500,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page L",
    uv: 3590,
    pv: 4320,
    amt: 2100,
  },
];

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
  return (
    <div className="">
      <h2 className="ps-2 pb-4 text-base 2xs:text-lg font-semibold text-stone-700">
        فروش ماهانه :
      </h2>
      <ResponsiveContainer width="107%" height={400}>
        <BarChart
          data={data}    
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Bar
            dataKey="uv"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
