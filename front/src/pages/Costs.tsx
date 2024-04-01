import AddButton from "../components/AddButton";
import DetailsModal from "../components/DetailsModal";
import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CostSchema from "../validations/CostSchema";
import { CostFormTypes } from "../TypescriptTypes/CostTypes";
import { CostTypes } from "../TypescriptTypes/CostTypes";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/colors/purple.css";
import type { Value } from "react-multi-date-picker";
import swal from "sweetalert";

export default function Costs() {
  const [toggleAddModal, setToggleAddModal] = useState<boolean>(false);
  const [toggleEditModal, setToggleEditModal] = useState<boolean>(false);
  const [allCost, setAllCost] = useState<CostTypes[]>();
  const [dateValue, setDateValue] = useState<Value>(new Date());
  const [costInfoEdit,setCostInfoEdit] = useState<CostTypes>()

  const {
    register: register1,
    reset: reset1,
    control: control1,
    handleSubmit: handleSubmit1,
    formState: { errors: errors1 },
  } = useForm({
    defaultValues: {
      title: "",
      status: "",
      date: dateValue?.toLocaleString("fa-IR") as Value,
      price: "",
    },
    resolver: yupResolver(CostSchema) as any,
  });


  const {
    register: register2,
    reset: reset2,
    control: control2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
  } = useForm({
    defaultValues: {
      title:costInfoEdit?.title,
      status:costInfoEdit?.status,
      date:costInfoEdit?.date ,
      price:costInfoEdit?.price,
    } as CostFormTypes,
    resolver: yupResolver(CostSchema) as any,
  });

  const editHandler = (costInfo:CostTypes) => {

    setCostInfoEdit(costInfo)
    setToggleEditModal(true)
    
  }

  const openModalHandler = () => {
    setToggleAddModal(true);
  };

  const closeModalHandler = () => {
    setToggleAddModal(false);
  };
  const closeModalEditHandler = () => {
    setToggleEditModal(false);
    window.location.reload();
   
  };

  const formSubmitting = async (data: CostFormTypes, event: any) => {
    event.preventDefault();
    setDateValue(data.date);
    const res = await fetch("http://localhost:4000/v1/costs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDc4NTcyZDdjMjE4YTVkZDY3MTAyYyIsImlhdCI6MTcxMTU2NTE5NSwiZXhwIjoxNzE0MTU3MTk1fQ.20k8OOxivVVwnjcEfdhAd87QbsWF1AA1Kp3M0oA2ak4`,
      },
      body: JSON.stringify({
        title: data.title,
        status: data.status,
        date: data.date,
        price: data.price,
      }),
    });

    if (res.status === 201) {
      await res.json();
      swal({
        title: "هزینه با موفقیت اضافه شد",
        icon: "success",
        buttons: "بستن" as any,
      });
      getCosts();
      setToggleAddModal(false);
    } else {
      swal({
        title: "عملیات با شکست مواجه شد",
        icon: "error",
        buttons: "بستن" as any,
      });
    }

    reset1();
  };
  
  const formEditSubmitting = async (data: CostFormTypes, event: any) => {
    event.preventDefault();
    const res = await fetch(`http://localhost:4000/v1/costs/${costInfoEdit?._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDc4NTcyZDdjMjE4YTVkZDY3MTAyYyIsImlhdCI6MTcxMTU2NTE5NSwiZXhwIjoxNzE0MTU3MTk1fQ.20k8OOxivVVwnjcEfdhAd87QbsWF1AA1Kp3M0oA2ak4`,
      },
      body: JSON.stringify({
        title: data.title,
        status: data.status,
        date: data.date,
        price: data.price,
      }),
    });

    if (res.status === 200) {
      await res.json();
      swal({
        title: "هزینه با موفقیت ویرایش شد",
        icon: "success",
        buttons: "بستن" as any,
      });
      getCosts();
      setToggleEditModal(false);
    } else {
      swal({
        title: "عملیات با شکست مواجه شد",
        icon: "error",
        buttons: "بستن" as any,
      });
    }

    reset2();
  };



  const removeCostHandler = async (costID: string) => {
    swal({
      title: "آیا از حذف اطمینان دارید؟",
      icon: "warning",
      buttons: ["خیر", "بله"],
    }).then(async (value) => {
      if (value === true) {
        const res = await fetch(
          `http://localhost:4000/v1/costs/${costID}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDc4NTcyZDdjMjE4YTVkZDY3MTAyYyIsImlhdCI6MTcxMTU2NTE5NSwiZXhwIjoxNzE0MTU3MTk1fQ.20k8OOxivVVwnjcEfdhAd87QbsWF1AA1Kp3M0oA2ak4`,
            },
          },
        );

        if (res.status === 200) {
          await res.json();
          swal({
            title: "هزینه با موفقیت حذف شد",
            icon: "success",
            buttons: "بستن" as any,
          });
          getCosts();
        } else {
          swal({
            title: "عملیات با شکست مواجه شد",
            icon: "error",
            buttons: "بستن" as any,
          });
        }
      }
    });
  };

  const getCosts = async () => {
    const res = await fetch("http://localhost:4000/v1/costs", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDc4NTcyZDdjMjE4YTVkZDY3MTAyYyIsImlhdCI6MTcxMTU2NTE5NSwiZXhwIjoxNzE0MTU3MTk1fQ.20k8OOxivVVwnjcEfdhAd87QbsWF1AA1Kp3M0oA2ak4",
      },
    });
    if (res.status === 200) {
      const data = await res.json();
      setAllCost(data);
    } else {
      console.log(res);
    }
  };

  useEffect(() => {
    getCosts();
    
  }, [closeModalEditHandler]);

  return (
    <div className=" xl:h-[calc(100vh-160px)]">
      <AddButton
        openModalHandler={openModalHandler}
        title={"افزودن هزینه جدید"}
      />
      <div
        className="] h-[70vh] w-[calc(100vw-90px)] overflow-x-auto
    rounded-xl  bg-white  px-2 py-4 xs:w-[calc(100vw-130px)] xs:p-4 xl:h-[64vh]"
      >
        <h1 className="px-4 pb-4 text-xl">لیست هزینه ها</h1>
        <table className="w-full text-sm md:text-base">
          <thead className="bg-zinc-100">
            <tr className="border-b-2 border-zinc-200">
              <th className="min-w-[200px]  px-8 py-2.5 text-start">#</th>
              <th className="min-w-[200px] px-8 text-start">مجموع</th>
              <th className="min-w-[200px] px-8 text-start">عملیات</th>
            </tr>
          </thead>
          <tbody>
            {allCost?.map((cost) => (
              <tr
                key={cost._id}
                className="border-b-2 border-zinc-200 py-4 text-start"
              >
                <td className="px-8 py-2.5">
                  <p className="text-primary-p">{cost._id.slice(0, 7)}</p>
                  <p className="py-1.5 font-semibold text-zinc-700">
                    {cost.title}
                  </p>
                  <p className="text-zinc-600">{cost.date}</p>
                </td>
                <td className="px-8">
                  <p className="text-zinc-700 ">
                    {Number(cost.price).toLocaleString()} تومان
                  </p>
                  <p
                    className={`flex items-center  gap-x-2 pt-1.5 font-semibold 
                  ${cost.status === "پرداخت شده" ? "text-green-400" : cost.status === "در انتظار پرداخت" ? "text-yellow-400" : "text-red-500"}`}
                  >
                    {cost.status}
                    <div className="-order-4 h-2 w-2  rounded-full bg-green-500"></div>
                  </p>
                </td>
                <td className="px-8">
                  <button onClick={() => editHandler(cost)}
                  className="mb-1 me-2 rounded-full bg-sky-100 px-6 py-1.5 text-sm font-semibold text-primary-b md:mb-0">
                    ویرایش
                  </button>
                  <button onClick={() => removeCostHandler(cost._id)}
                  className="ms-2 mt-1 rounded-full bg-fuchsia-200 px-6 py-1.5 text-sm font-semibold text-primary-pk md:mt-0">
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {toggleAddModal && (
        <DetailsModal onClose={closeModalHandler}>
          <h2 className="text-xl font-bold">ایجاد هزینه جدید</h2>
          <form
            onSubmit={handleSubmit1(formSubmitting)}
            className="mt-10 grid w-full grid-cols-1 gap-6 gap-x-24 p-5 xs:grid-cols-2 lg:gap-14 "
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="title" className="text-sm font-bold">
                عنوان هزینه
              </label>
              <input
                id="title"
                {...register1("title")}
                type="text"
                placeholder="title"
                className="rounded-lg border-b-2 border-primary-pk p-1 px-4 outline-none"
              />
              <span className="pt-1.5 text-sm text-red-600">
                {errors1.title && errors1.title.message}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="price" className="text-sm font-bold">
                قیمت
              </label>
              <input
                id="price"
                {...register1("price")}
                type="text"
                placeholder="price"
                className="rounded-lg border-b-2 border-primary-pk p-1 px-4 outline-none"
              />
              <span className="pt-1.5 text-sm text-red-600">
                {errors1.price && errors1.price.message}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="date" className="text-sm font-bold">
                تاریخ
              </label>
              <Controller
                control={control1}
                name="date"
                rules={{ required: true }} //optional
                render={({ field: { onChange, value } }) => (
                  <>
                    <DatePicker
                      inputClass="custom-input"
                      className="purple"
                      value={value || ""}
                      onChange={(date) => {
                        onChange(date);
                      }}
                      locale={persian_fa}
                      calendar={persian}
                    />
                  </>
                )}
              />
              <span className="pt-1.5 text-sm text-red-600">
                {errors1.date && errors1.date.message}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="status" className="text-sm font-bold ">
                وضعیت هزینه
              </label>
              <Controller
                name="status"
                control={control1}
                defaultValue=""
                rules={{ required: true }}
                render={({ field }) => (
                  <select
                    {...field}
                    id="status"
                    className="rounded-lg border-b-2 border-primary-pk p-1 px-4 outline-none"
                  >
                    <option value={"-1"} className="bg-primary-p text-white">
                      وضعیت را انتخاب کنید
                    </option>

                    <option
                      value={"پرداخت شده"}
                      className="bg-primary-p text-white"
                    >
                      پرداخت شده
                    </option>
                    <option
                      value={"در انتظار پرداخت"}
                      className="bg-primary-p text-white"
                    >
                      در انتظار پرداخت
                    </option>
                    <option
                      value={"لغو شده"}
                      className="bg-primary-p text-white"
                    >
                      لغو شده
                    </option>
                  </select>
                )}
              />
              <span className="pt-1.5 text-sm text-red-600">
                {errors1.status && errors1.status.message}
              </span>
            </div>
            <button
              type="submit"
              className="ms-auto mt-20 h-12 w-40 rounded-xl bg-primary-y"
            >
              تایید
            </button>
          </form>
        </DetailsModal>
      )}
      {toggleEditModal && (
        <DetailsModal onClose={closeModalEditHandler}>
          <h2 className="text-xl font-bold">ایجاد هزینه جدید</h2>
          <form
            onSubmit={handleSubmit2(formEditSubmitting)}
            className="mt-10 grid w-full grid-cols-1 gap-6 gap-x-24 p-5 xs:grid-cols-2 lg:gap-14 "
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="title" className="text-sm font-bold">
                عنوان هزینه
              </label>
              <input
              defaultValue={costInfoEdit?.title}
                id="title"
                {...register2("title")}
                type="text"
                placeholder="title"
                className="rounded-lg border-b-2 border-primary-pk p-1 px-4 outline-none"
              />
              <span className="pt-1.5 text-sm text-red-600">
                {errors2.title && errors2.title.message}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="price" className="text-sm font-bold">
                قیمت
              </label>
              <input
              defaultValue={costInfoEdit?.price}
                id="price"
                {...register2("price")}
                type="text"
                placeholder="price"
                className="rounded-lg border-b-2 border-primary-pk p-1 px-4 outline-none"
              />
              <span className="pt-1.5 text-sm text-red-600">
                {errors2.price && errors2.price.message}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="date" className="text-sm font-bold">
                تاریخ
              </label>
              <Controller
              defaultValue={costInfoEdit?.date}
                control={control2}
                name="date"
                rules={{ required: true }} //optional
                render={({ field: { onChange, value } }) => (
                  <>
                    <DatePicker
                      inputClass="custom-input"
                      className="purple"
                      value={value || ""}
                      onChange={(date) => {
                        onChange(date);
                      }}
                      locale={persian_fa}
                      calendar={persian}
                    />
                  </>
                )}
              />
              <span className="pt-1.5 text-sm text-red-600">
                {errors2.date && errors2.date.message}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="status" className="text-sm font-bold ">
                وضعیت هزینه
              </label>
              <Controller
                name="status"
                control={control2}
                defaultValue={costInfoEdit?.status}
                rules={{ required: true }}
                render={({ field }) => (
                  <select
                    {...field}
                    id="status"
                    className="rounded-lg border-b-2 border-primary-pk p-1 px-4 outline-none"
                  >
                    <option value={"-1"} className="bg-primary-p text-white">
                      وضعیت را انتخاب کنید
                    </option>

                    <option
                      value={"پرداخت شده"}
                      className="bg-primary-p text-white"
                    >
                      پرداخت شده
                    </option>
                    <option
                      value={"در انتظار پرداخت"}
                      className="bg-primary-p text-white"
                    >
                      در انتظار پرداخت
                    </option>
                    <option
                      value={"لغو شده"}
                      className="bg-primary-p text-white"
                    >
                      لغو شده
                    </option>
                  </select>
                )}
              />
              <span className="pt-1.5 text-sm text-red-600">
                {errors2.status && errors2.status.message}
              </span>
            </div>
            <button
              type="submit"
              className="ms-auto mt-20 h-12 w-40 rounded-xl bg-primary-y"
            >
              تایید
            </button>
          </form>
        </DetailsModal>
      )}
    </div>
  );
}
