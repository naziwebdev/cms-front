import AddButton from "../components/AddButton";
import { useState } from "react";
import DetailsModal from "../components/DetailsModal";
import { orderFormTypes } from "../TypescriptTypes/OrderTypes";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import OrderSchema from "../validations/OrderSchema";
import swal from "sweetalert";
import OrderTable from "../components/OrderTable";

export default function Orders() {
  const [toggleAddModal, setToggleAddModal] = useState<boolean>(false);

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

  const formSubmitting = async (data: orderFormTypes, event: any) => {
    event.preventDefault();
    const res = await fetch("http://localhost:4000/v1/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OWVkYjE5YjQxZDE0NmQ3ZWY3N2NkMyIsImlhdCI6MTcxNTk2NjUyNywiZXhwIjoxNzE4NTU4NTI3fQ.oBGAf4B6F8rimiZnEVTkAj-OvWFzYA0jYtkOnIyNgsY`,
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
      }).then((value) => {
        if (value) {
          location.reload();
        }
      });

      setToggleAddModal(false);
    }

    reset1();
  };

  const openModalHandler = () => {
    setToggleAddModal(true);
  };

  const closeModalHandler = () => {
    setToggleAddModal(false);
  };

  return (
    <div className=" xl:h-[calc(100vh-160px)]">
      <AddButton
        openModalHandler={openModalHandler}
        title={"افزودن سفارش جدید"}
      />

      <div
        className="h-[70vh] w-[calc(100vw-90px)] overflow-x-auto
      rounded-xl  bg-white px-2 py-4 shadow-lg shadow-zinc-300  xs:w-[calc(100vw-130px)] xs:p-4 xl:h-[64vh] dark:shadow-lg dark:shadow-zinc-700"
      >
        <h1 className="px-4 pb-4 text-xl">لیست سفارشات</h1>
        <OrderTable />
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
    </div>
  );
}
