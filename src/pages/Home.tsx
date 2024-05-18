import LinechartBox from "../components/LinechartBox";
import BarChartBox from "../components/BarChartBox";
import PiechartBox from "../components/PiechartBox";
import AreachartBox from "../components/AreachartBox";
import CommentScoreBox from "../components/CommentScoreBox";
import OrderTable from "../components/OrderTable";
import TodoListBox from "../components/TodoListBox";
import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/colors/purple.css";
import WeatherBox from "../components/WeatherBox";
import TodayEventsBox from "../components/TodayEventsBox";
import UserTable from "../components/UserTable";
import { VectorMap } from "@south-paw/react-vector-maps";
import iranMap from "../iran.svg.json";
import { useState, useEffect } from "react";

type linechartData = {
  numberofdocuments: number;
  month: string;
};

export default function Home() {
  const [userLinechartData, setUserLinechartData] = useState<linechartData[]>(
    [],
  );
  const [productLinechartData, setProductLinechartData] = useState<linechartData[]>(
    [],
  );
  const [saleLinechartData, setSaleLinechartData] = useState<linechartData[]>(
    [],
  );
  const [costLinechartData, setCostLinechartData] = useState<linechartData[]>(
    [],
  );

  const getLinechartDataUser = async () => {
    const res = await fetch("http://localhost:4000/v1/users/report", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OWVkYjE5YjQxZDE0NmQ3ZWY3N2NkMyIsImlhdCI6MTcxNTk2NjUyNywiZXhwIjoxNzE4NTU4NTI3fQ.oBGAf4B6F8rimiZnEVTkAj-OvWFzYA0jYtkOnIyNgsY",
      },
    });

    if (res.status === 200) {
      const data = await res.json();
      setUserLinechartData(data);
    }
  };

  const getLinechartDataSale = async () => {
    const res = await fetch("http://localhost:4000/v1/orders/report", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OWVkYjE5YjQxZDE0NmQ3ZWY3N2NkMyIsImlhdCI6MTcxNTk2NjUyNywiZXhwIjoxNzE4NTU4NTI3fQ.oBGAf4B6F8rimiZnEVTkAj-OvWFzYA0jYtkOnIyNgsY",
      },
    });

    if (res.status === 200) {
      const data = await res.json();
      setSaleLinechartData(data);
    }
  };

  const getLinechartDataCost = async () => {
    const res = await fetch("http://localhost:4000/v1/costs/report", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OWVkYjE5YjQxZDE0NmQ3ZWY3N2NkMyIsImlhdCI6MTcxNTk2NjUyNywiZXhwIjoxNzE4NTU4NTI3fQ.oBGAf4B6F8rimiZnEVTkAj-OvWFzYA0jYtkOnIyNgsY",
      },
    });

    if (res.status === 200) {
      const data = await res.json();
      setCostLinechartData(data);
    }
  };
  const getLinechartDataProduct = async () => {
    const res = await fetch("http://localhost:4000/v1/products/report", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OWVkYjE5YjQxZDE0NmQ3ZWY3N2NkMyIsImlhdCI6MTcxNTk2NjUyNywiZXhwIjoxNzE4NTU4NTI3fQ.oBGAf4B6F8rimiZnEVTkAj-OvWFzYA0jYtkOnIyNgsY",
      },
    });

    if (res.status === 200) {
      const data = await res.json();
      setProductLinechartData(data);
    }
  };

  useEffect(() => {
    getLinechartDataUser()
    getLinechartDataProduct()
    getLinechartDataSale()
    getLinechartDataCost()
  },[])


  return (
    <div
      className="w-[calc(100vw-90px)] 
     overflow-hidden px-2 pb-10 xs:w-[calc(100vw-130px)]"
    >
      <div className="grid grid-cols-1 items-center justify-center gap-5 md:grid-cols-2 xl:grid-cols-4">
        <LinechartBox
          bgColor="bg-primary-p"
          title="تعداد کاربران"
          data={userLinechartData}
        />
         <LinechartBox
          bgColor="bg-primary-pk"
          title="تعداد محصولات"
          data={productLinechartData}
        /> 
         <LinechartBox bgColor="bg-primary-y" title="فروش کل" data={saleLinechartData} />
        <LinechartBox bgColor="bg-primary-b" title="هزینه کل" data={costLinechartData} />  
      </div>
      <div className="ga-x-12 mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-x-24">
        <BarChartBox />
        <PiechartBox />
      </div>
      <div className=" mt-16 grid grid-cols-1 items-center gap-5 md:grid-cols-2 lg:gap-x-24">
        <AreachartBox />
        <CommentScoreBox />
      </div>
      <div
        className="me-20 mt-16 w-[calc(100vw-90px)]  rounded-3xl bg-white p-4
       shadow-lg shadow-zinc-300 dark:shadow-lg dark:shadow-zinc-700
       xs:w-[calc(100vw-130px)] "
      >
        <h2 className="px-4 pb-4 font-semibold text-stone-700">
          لیست سفارش ها
        </h2>
        <div className="h-[50vh] overflow-auto">
          <OrderTable />
        </div>
      </div>
      <div className="mt-16 grid grid-cols-1 items-center gap-5 md:grid-cols-2 lg:gap-x-5 xl:grid-cols-4">
        <TodoListBox />
        <Calendar
          className="purple w-full  bg-fuchsia-300 dark:shadow-lg dark:shadow-zinc-700 shadow-xl shadow-zinc-400"
          calendar={persian}
          locale={persian_fa}
        />

        <WeatherBox />
        <TodayEventsBox />
      </div>
      <div
        className="me-20 mt-16 w-[calc(100vw-90px)]  rounded-3xl bg-white p-4
       shadow-lg shadow-zinc-300 dark:shadow-lg dark:shadow-zinc-700
       xs:w-[calc(100vw-130px)] "
      >
        <h2 className="px-4 pb-4 font-semibold text-stone-700">لیست کاربران</h2>
        <div className="h-[50vh] overflow-auto">
          <UserTable data={[]} />
        </div>
      </div>
      <div
        className="me-20 mt-16 grid  w-[calc(100vw-90px)]
    
       grid-cols-1 items-center gap-5 p-4 xs:w-[calc(100vw-130px)] lg:grid-cols-2 lg:gap-x-24"
      >
        <div className="">
          <h2 className="px-4 pb-4 font-semibold dark:text-zinc-100 text-stone-700">
            پراکندگی ها :
          </h2>

          <div className="w-full">
            <VectorMap {...iranMap} layerProps={{ fill: "#7e22ce" }} />
          </div>
        </div>
        <div
          className=" rounded-2xl bg-white p-6
       text-center shadow-lg shadow-zinc-300 dark:shadow-lg dark:shadow-zinc-700"
        >
          <div className="flex flex-col justify-around gap-y-4 p-5 text-sm font-semibold text-stone-700 xs:flex-row xs:text-base">
            <div className="flex items-center gap-x-2 ">
              <span className="h-6 w-6  rounded-md bg-primary-y"></span>
              پراکندگی سفارشات
            </div>

            <div className="flex items-center gap-x-2">
              <span className="h-6 w-6  rounded-md bg-primary-pk"></span>
              پراکندگی کاربران
            </div>
          </div>
          <div className="mt-5 flex flex-col items-center justify-around gap-y-4 2xs:flex-row">
            <ul className="list-decimal [&>*]:pt-4 [&>*]:font-semibold [&>*]:text-primary-y">
              <li className="">تهران</li>
              <li className="">تهران</li>
              <li className="">تهران</li>
              <li className="">تهران</li>
            </ul>
            <ul className="list-decimal [&>*]:pt-4 [&>*]:font-semibold [&>*]:text-primary-pk">
              <li className="">تهران</li>
              <li className="">تهران</li>
              <li className="">تهران</li>
              <li className="">تهران</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
