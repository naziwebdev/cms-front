import AddButton from "../components/AddButton";
import DetailsModal from "../components/DetailsModal";
import { useState } from "react";

export default function Costs() {
  const [toggleAddModal, setToggleAddModal] = useState<boolean>(false);

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
            <tr className="border-b-2 border-zinc-200 py-4 text-start">
              <td className="px-8 py-2.5">
                <p className="text-zinc-600">65467</p>
                <p className="py-1.5 font-semibold text-zinc-700">
                  پرداخت تعمیر کولر
                </p>
                <p className="text-zinc-600">1402/12/4</p>
              </td>
              <td className="px-8">
                <p className="text-zinc-700 ">5870000 تومان</p>
                <p className="flex gap-x-2  items-center pt-1.5 font-semibold text-green-400">
                  پرداخت شده  <div className="-order-4 w-2 h-2  rounded-full bg-green-500"></div>
                </p>
              </td>
              <td className="px-8">
                <button className="rounded-full bg-sky-100 me-2 mb-1 md:mb-0 px-6 py-1.5 text-sm font-semibold text-primary-b">
                  ویرایش
                </button>
                <button className="rounded-full bg-fuchsia-200 ms-2 mt-1 md:mt-0 px-6 py-1.5 text-sm font-semibold text-primary-pk">
                  حذف
                </button>
              </td>
            </tr>
            <tr className="border-b-2 border-zinc-200 py-4 text-start">
              <td className="px-8 py-2.5">
                <p className="text-zinc-600">65467</p>
                <p className="py-1.5 font-semibold text-zinc-700">
                  پرداخت تعمیر کولر
                </p>
                <p className="text-zinc-600">1402/12/4</p>
              </td>
              <td className="px-8">
                <p className="text-zinc-700 ">5870000 تومان</p>
                <p className="flex gap-x-2  items-center pt-1.5 font-semibold text-red-400">
                  لغو شده <div className="-order-4 w-2 h-2  rounded-full bg-red-500"></div>
                </p>
              </td>
              <td className="px-8">
                <button className="rounded-full bg-sky-100 me-2 mb-1 md:mb-0 px-6 py-1.5 text-sm font-semibold text-primary-b">
                  ویرایش
                </button>
                <button className="rounded-full bg-fuchsia-200 ms-2 mt-1 md:mt-0 px-6 py-1.5 text-sm font-semibold text-primary-pk">
                  حذف
                </button>
              </td>
            </tr>
            <tr className="border-b-2 border-zinc-200 py-4 text-start">
              <td className="px-8 py-2.5">
                <p className="text-zinc-600">65467</p>
                <p className="py-1.5 font-semibold text-zinc-700">
                  پرداخت تعمیر کولر
                </p>
                <p className="text-zinc-600">1402/12/4</p>
              </td>
              <td className="px-8">
                <p className="text-zinc-700 ">5870000 تومان</p>
                <p className="flex gap-x-2  items-center pt-1.5 font-semibold text-yellow-400">
                   موعد پرداخت<div className="-order-4 w-2 h-2  rounded-full bg-yellow-500"></div>
                </p>
              </td>
              <td className="px-8">
                <button className="rounded-full bg-sky-100 me-2 mb-1 md:mb-0 px-6 py-1.5 text-sm font-semibold text-primary-b">
                  ویرایش
                </button>
                <button className="rounded-full bg-fuchsia-200 ms-2 mt-1 md:mt-0 px-6 py-1.5 text-sm font-semibold text-primary-pk">
                  حذف
                </button>
              </td>
            </tr>
            <tr className="border-b-2 border-zinc-200 py-4 text-start">
              <td className="px-8 py-2.5">
                <p className="text-zinc-600">65467</p>
                <p className="py-1.5 font-semibold text-zinc-700">
                  پرداخت تعمیر کولر
                </p>
                <p className="text-zinc-600">1402/12/4</p>
              </td>
              <td className="px-8">
                <p className="text-zinc-700 ">5870000 تومان</p>
                <p className="flex gap-x-2  items-center pt-1.5 font-semibold text-yellow-400">
                   موعد پرداخت<div className="-order-4 w-2 h-2  rounded-full bg-yellow-500"></div>
                </p>
              </td>
              <td className="px-8">
                <button className="rounded-full bg-sky-100 me-2 mb-1 md:mb-0 px-6 py-1.5 text-sm font-semibold text-primary-b">
                  ویرایش
                </button>
                <button className="rounded-full bg-fuchsia-200 ms-2 mt-1 md:mt-0 px-6 py-1.5 text-sm font-semibold text-primary-pk">
                  حذف
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {toggleAddModal && (
        <DetailsModal onClose={closeModalHandler}>
          <h2 className="text-xl font-bold">ایجاد هزینه جدید</h2>
          <form
            className="mt-10 grid w-full grid-cols-1 gap-6 gap-x-24 p-5 xs:grid-cols-2 lg:gap-14 "
          >
      
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
