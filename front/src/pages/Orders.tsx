import AddButton from "../components/AddButton";
import { useState, useEffect } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdEditSquare } from "react-icons/md";
import DetailsModal from "../components/DetailsModal";
import { OrderTypes, orderFormTypes } from "../TypescriptTypes/OrderTypes";
import { useForm ,Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import OrderSchema from "../validations/OrderSchema";

import swal from "sweetalert";



export default function Orders() {
  const [toggleAddModal, setToggleAddModal] = useState<boolean>(false);
  const [allOrders, setAllOrders] = useState<OrderTypes[]>([]);
  const [toggleEditModal, setToggleEditModal] = useState<boolean>(false);
  const [orderEditInfo, setOrderEditInfo] = useState<OrderTypes>();
  const [statusArray,setStatusArray] = useState <string[]>([
    'processing','posted','cancel','returned'
  ])

  const {
    register: register1,
    reset: reset1,
    handleSubmit: handleSubmit1,
    formState: { errors: errors1 },
  } = useForm({
    defaultValues: {
      product: "",
      price: 0,
      user: "",
    },
    resolver: yupResolver(OrderSchema),
  });

  const {
    register: register2,
    reset: reset2,
    control:control2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
  } = useForm({
    defaultValues: {
      product: orderEditInfo?.product._id,
      price: orderEditInfo?.price,
      user: orderEditInfo?.user._id,
      status:orderEditInfo?.status
    } as orderFormTypes,
    resolver: yupResolver(OrderSchema),
  });

  const openModalHandler = () => {
    setToggleAddModal(true);
  };

  const closeModalHandler = () => {
    setToggleAddModal(false);
  };

  const closeEditModal = () => {
    setToggleEditModal(false);
  };

  const toggleEditModalHandler = () => {
    setToggleEditModal((prev) => !prev);
  };

  const getOrders = async () => {
    const res = await fetch("http://localhost:4000/v1/orders", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDc4NTcyZDdjMjE4YTVkZDY3MTAyYyIsImlhdCI6MTcxMTU2NTE5NSwiZXhwIjoxNzE0MTU3MTk1fQ.20k8OOxivVVwnjcEfdhAd87QbsWF1AA1Kp3M0oA2ak4",
      },
    });

    const data = await res.json();

    setAllOrders(data);
  };

  const formSubmitting = async (data: orderFormTypes, event: any) => {
    event.preventDefault();
    const res = await fetch("http://localhost:4000/v1/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDc4NTcyZDdjMjE4YTVkZDY3MTAyYyIsImlhdCI6MTcxMTU2NTE5NSwiZXhwIjoxNzE0MTU3MTk1fQ.20k8OOxivVVwnjcEfdhAd87QbsWF1AA1Kp3M0oA2ak4`,
      },
      body: JSON.stringify({
        product: data.product,
        price: data.price,
        user: data.user,
      }),
    });

    if (res.status === 201) {
      await res.json();
      swal({
        title: "سفارش  با موفقیت اضافه شد",
        icon: "success",
        buttons: "بستن" as any,
      });
      getOrders();
      setToggleAddModal(false);
    }

    reset1();
  };

  const removeOrderHandler = (orderID: string) => {
    swal({
      title: "آیا از حذف اطمینان دارید؟",
      icon: "warning",
      buttons: ["خیر", "بله"],
    }).then(async (value) => {
      if (value === true) {
        const res = await fetch(`http://localhost:4000/v1/orders/${orderID}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDc4NTcyZDdjMjE4YTVkZDY3MTAyYyIsImlhdCI6MTcxMTU2NTE5NSwiZXhwIjoxNzE0MTU3MTk1fQ.20k8OOxivVVwnjcEfdhAd87QbsWF1AA1Kp3M0oA2ak4`,
          },
        });

        if (res.status === 200) {
          await res.json();
          swal({
            title: "سفارش  با موفقیت حذف شد",
            icon: "success",
            buttons: "بستن" as any,
          });
          getOrders();
        }
      }
    });
  };

  const editOrderHandler = (order: OrderTypes) => {
    toggleEditModalHandler()
    setOrderEditInfo(order);
    
  };

  const formEditSubmitting = async (data:orderFormTypes, event:any) => {
    event.preventDefault();

    if(data.status === 'در حال پردازش'){
      swal({
        title:'وضعیت سفارش را مشخص کنید',
        icon:'error',
        buttons:'بستن' as any
      })
    }else{

    const res = await fetch(
      `http://localhost:4000/v1/orders/${orderEditInfo?._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDc4NTcyZDdjMjE4YTVkZDY3MTAyYyIsImlhdCI6MTcxMTU2NTE5NSwiZXhwIjoxNzE0MTU3MTk1fQ.20k8OOxivVVwnjcEfdhAd87QbsWF1AA1Kp3M0oA2ak4`,
        },
        body: JSON.stringify({
          product:data?.product,
          price: data?.price,
          user: data?.user,
          status:data?.status
        }),
      },
    );

    if (res.status === 200) {
      await res.json();
      swal({
        title: "سفارش  با موفقیت ویرایش شد",
        icon: "success",
        buttons: "بستن" as any,
      });
      getOrders();
      setToggleEditModal(false);
    }

    reset2();
  }
  };


  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div className=" xl:h-[calc(100vh-160px)]">
      <AddButton
        openModalHandler={openModalHandler}
        title={"افزودن سفارش جدید"}
      />
      <div
        className="] h-[70vh] w-[calc(100vw-90px)] overflow-x-auto
      rounded-xl  bg-white  px-2 py-4 xs:w-[calc(100vw-130px)] xs:p-4 xl:h-[64vh]"
      >
        <h1 className="px-4 pb-4 text-xl">لیست سفارشات</h1>
        <table className="w-full border-separate border-spacing-[4px] border border-slate-300 md:text-base">
          <thead className="bg-pink-50">
            <tr>
              <th className="min-w-[100px] border border-slate-300 py-2.5">
                تصویر
              </th>
              <th className="min-w-[100px] border border-slate-300">محصول</th>
              <th className="min-w-[100px] border border-slate-300">مبلغ</th>
              <th className="min-w-[100px] border border-slate-300">کاربر</th>
              <th className="min-w-[100px] border border-slate-300">
                تاریخ ثبت سفارش
              </th>
              <th className="min-w-[100px] border border-slate-300">وضعیت</th>
              <th className="min-w-[100px] border border-slate-300">عملیات</th>
            </tr>
          </thead>
          <tbody>
            {allOrders?.map((order) => (
              <tr key={order._id} className="text-center">
                <td className="border border-slate-300 py-1">
                  <img
                    src={`http://localhost:4000/products/covers/${order.product.cover}`}
                    alt="product"
                    className="mx-auto h-20 w-24"
                  />
                </td>
                <td className="border border-slate-300">
                  {order.product.title}
                </td>
                <td className="border border-slate-300">
                  {order.price.toLocaleString()} تومان{" "}
                </td>
                <td className="border border-slate-300">{order.user.name}</td>
                <td className="border border-slate-300">
                  {new Date(order.createdAt).toLocaleDateString("fa-IR", {
                    year: "numeric",
                    month: "numeric",
                    day: "numeric",
                    calendar: "persian",
                  })}
                </td>
                <td className="border border-slate-300">
                  <button
                    className={`${order.status === "processing" && "bg-lime-200 text-green-600"} 
                    ${order.status === "posted" && "bg-indigo-100 text-indigo-700"}
                    ${order.status === "cancel" && "bg-red-100 text-red-500"}
                    ${order.status === "returned" && "bg-yellow-100 text-orange-500"}
                    rounded-full  px-4 py-1.5 text-[.8rem] font-semibold`}
                  >
                    {order.status === "processing"
                      ? "درحال پردازش"
                      : order.status === "posted"
                        ? "در حال ارسال"
                        : order.status === "cancel"
                          ? "کنسل شده"
                          : order.status === "returned"
                            ? "مرجوع شده"
                            : "نامشخص"}
                  </button>
                </td>
                <td className="border border-slate-300">
                  <div className="flex justify-center gap-x-4">
                    <MdEditSquare 
                    onClick={() => editOrderHandler(order)}
                    className="cursor-pointer text-2xl text-primary-p" />
                    <RiDeleteBin6Fill 
                      onClick={() => removeOrderHandler(order._id)}
                      className="cursor-pointer text-2xl text-red-500"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {toggleAddModal && (
        <DetailsModal onClose={closeModalHandler}>
          <h2 className="text-xl font-bold">ایجاد سفارش جدید</h2>
          <form
            onSubmit={handleSubmit1(formSubmitting)}
            className="mt-10 grid w-full grid-cols-1 gap-6 gap-x-24 p-5 xs:grid-cols-2 lg:gap-14 "
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="product" className="text-sm font-bold">
                id محصول
              </label>
              <input
                id="product"
                {...register1("product")}
                type="text"
                placeholder="productID"
                className="rounded-lg border-b-2 border-primary-pk p-1 px-4 outline-none"
              />
              <span className="pt-1.5 text-sm text-red-600">
                {errors1.product && errors1.product.message}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="price" className="text-sm font-bold">
                مبلغ
              </label>
              <input
                id="price"
                {...register1("price")}
                type="number"
                placeholder="price"
                className="rounded-lg border-b-2 border-primary-pk p-1 px-4 outline-none"
              />
              <span className="pt-1.5 text-sm text-red-600">
                {errors1.price && errors1.price.message}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="user" className="text-sm font-bold">
                id کاربر
              </label>
              <input
                id="user"
                {...register1("user")}
                type="text"
                placeholder="userID"
                className="rounded-lg border-b-2 border-primary-pk p-1 px-4 outline-none"
              />
              <span className="pt-1.5 text-sm text-red-600">
                {errors1.user && errors1.user.message}
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
        <DetailsModal onClose={closeEditModal}>
          <h2 className="text-xl font-bold">ایجاد سفارش جدید</h2>
          <form
            onSubmit={handleSubmit2(formEditSubmitting)}
            className="mt-10 grid w-full grid-cols-1 gap-6 gap-x-24 p-5 xs:grid-cols-2 lg:gap-14 "
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="product" className="text-sm font-bold">
                id محصول
              </label>
              <input
                id="product"
                defaultValue={orderEditInfo?.product._id}
                {...register2("product")}
                type="text"
                placeholder="productID"
                className="rounded-lg border-b-2 border-primary-pk p-1 px-4 outline-none"
              />
              <span className="pt-1.5 text-sm text-red-600">
                {errors2.product && errors2.product.message}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="price" className="text-sm font-bold">
                مبلغ
              </label>
              <input
                id="price"
                defaultValue={orderEditInfo?.price}
                {...register2("price")}
                type="number"
                placeholder="price"
                className="rounded-lg border-b-2 border-primary-pk p-1 px-4 outline-none"
              />
              <span className="pt-1.5 text-sm text-red-600">
                {errors2.price && errors2.price.message}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="user" className="text-sm font-bold">
                id کاربر
              </label>
              <input
                  defaultValue={orderEditInfo?.user._id}
                id="user"
                {...register2("user")}
                type="text"
                placeholder="userID"
                className="rounded-lg border-b-2 border-primary-pk p-1 px-4 outline-none"
              />
              <span className="pt-1.5 text-sm text-red-600">
                {errors2.user && errors2.user.message}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="status" className="text-sm font-bold ">
                وضعیت سفارش
              </label>
              <Controller
                name="status"
                control={control2}
                defaultValue="در حال پردازش"
                rules={{ required: true }}
                render={({ field }) => (
                  <select
                    {...field}
                    id="status"
                    className="rounded-lg border-b-2 border-primary-pk p-1 px-4 outline-none"
                  >
                    <option value={"-1"} className="bg-primary-p text-white">
                      وضعیت سفارش را انتخاب کنید
                    </option>
                    {statusArray.map((status) => (
                      <>
                        console.log(category.id)
                        <option
                          key={crypto.randomUUID()}
                          value={status}
                          className="bg-primary-p text-white"
                        >
                          {status}
                        </option>
                      </>
                    ))}
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
