import AddButton from "../components/AddButton";
import { useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdEditSquare } from "react-icons/md";
import DetailsModal from "../components/DetailsModal";

export default function Orders() {
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
        title={"افزودن سفارش جدید"}
      />
      <div
        className="] h-[70vh] w-[calc(100vw-90px)] overflow-x-auto
      rounded-xl  bg-white  px-2 py-4 xs:w-[calc(100vw-130px)] xs:p-4 xl:h-[64vh]"
      >
        <h1 className="px-4 pb-4 text-xl">لیست سفارشات</h1>
        <table className="w-full md:text-base border-separate border-spacing-[4px] border border-slate-300">
          <thead className="bg-pink-50">
            <tr>
              <th className="min-w-[100px] py-2.5 border border-slate-300">
                تصویر
              </th>
              <th className="min-w-[100px] border border-slate-300">محصول</th>
              <th className="min-w-[100px] border border-slate-300">مبلغ</th>
              <th className="min-w-[100px] border border-slate-300">کاربر</th>
              <th className="min-w-[100px] border border-slate-300">
                دسته بندی
              </th>
              <th className="min-w-[100px] border border-slate-300">وضعیت</th>
              <th className="min-w-[100px] border border-slate-300">عملیات</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="py-1 border border-slate-300">
                <img
                  src="/images/KuD9g5jQADYFep2b.jpg"
                  alt="product"
                  className="mx-auto h-20 w-24"
                />
              </td>
              <td className="border border-slate-300">ساعت هوشمند</td>
              <td className="border border-slate-300">40000000 تومان</td>
             <td className="border border-slate-300">آرزو فتاح</td>
              <td className="border border-slate-300">کالای دیجیتال</td>
             
              <td className="border border-slate-300">
                <button className="rounded-full bg-lime-200  px-4 py-1.5 text-[.8rem] font-semibold text-green-600">
                  ارسال شده
                </button>
              </td>
              <td className="border border-slate-300">
                <div className="flex justify-center gap-x-4">
                  <MdEditSquare className="cursor-pointer text-2xl text-primary-p" />
                  <RiDeleteBin6Fill className="cursor-pointer text-2xl text-red-500" />
                </div>
              </td>
            </tr>
          
            <tr className="text-center">
              <td className="py-1 border border-slate-300">
                <img
                  src="/images/KuD9g5jQADYFep2b.jpg"
                  alt="product"
                  className="mx-auto h-20 w-24"
                />
              </td>
              <td className="border border-slate-300">ساعت هوشمند</td>
              <td className="border border-slate-300">40000000 تومان</td>
             <td className="border border-slate-300">آرزو فتاح</td>
              <td className="border border-slate-300">کالای دیجیتال</td>
             
              <td className="border border-slate-300">
                <button className="rounded-full bg-lime-200  px-4 py-1.5 text-[.8rem] font-semibold text-green-600">
                  ارسال شده
                </button>
              </td>
              <td className="border border-slate-300">
                <div className="flex justify-center gap-x-4">
                  <MdEditSquare className="cursor-pointer text-2xl text-primary-p" />
                  <RiDeleteBin6Fill className="cursor-pointer text-2xl text-red-500" />
                </div>
              </td>
            </tr>
          
            <tr className="text-center">
              <td className="py-1 border border-slate-300">
                <img
                  src="/images/KuD9g5jQADYFep2b.jpg"
                  alt="product"
                  className="mx-auto h-20 w-24"
                />
              </td>
              <td className="border border-slate-300">ساعت هوشمند</td>
              <td className="border border-slate-300">40000000 تومان</td>
             <td className="border border-slate-300">آرزو فتاح</td>
              <td className="border border-slate-300">کالای دیجیتال</td>
             
              <td className="border border-slate-300">
                <button className="rounded-full bg-lime-200  px-4 py-1.5 text-[.8rem] font-semibold text-green-600">
                  ارسال شده
                </button>
              </td>
              <td className="border border-slate-300">
                <div className="flex justify-center gap-x-4">
                  <MdEditSquare className="cursor-pointer text-2xl text-primary-p" />
                  <RiDeleteBin6Fill className="cursor-pointer text-2xl text-red-500" />
                </div>
              </td>
            </tr>
          
            <tr className="text-center">
              <td className="py-1 border border-slate-300">
                <img
                  src="/images/KuD9g5jQADYFep2b.jpg"
                  alt="product"
                  className="mx-auto h-20 w-24"
                />
              </td>
              <td className="border border-slate-300">ساعت هوشمند</td>
              <td className="border border-slate-300">40000000 تومان</td>
             <td className="border border-slate-300">آرزو فتاح</td>
              <td className="border border-slate-300">کالای دیجیتال</td>
             
              <td className="border border-slate-300">
                <button className="rounded-full bg-lime-200  px-4 py-1.5 text-[.8rem] font-semibold text-green-600">
                  ارسال شده
                </button>
              </td>
              <td className="border border-slate-300">
                <div className="flex justify-center gap-x-4">
                  <MdEditSquare className="cursor-pointer text-2xl text-primary-p" />
                  <RiDeleteBin6Fill className="cursor-pointer text-2xl text-red-500" />
                </div>
              </td>
            </tr>
          
            <tr className="text-center">
              <td className="py-1 border border-slate-300">
                <img
                  src="/images/KuD9g5jQADYFep2b.jpg"
                  alt="product"
                  className="mx-auto h-20 w-24"
                />
              </td>
              <td className="border border-slate-300">ساعت هوشمند</td>
              <td className="border border-slate-300">40000000 تومان</td>
             <td className="border border-slate-300">آرزو فتاح</td>
              <td className="border border-slate-300">کالای دیجیتال</td>
             
              <td className="border border-slate-300">
                <button className="rounded-full bg-lime-200  px-4 py-1.5 text-[.8rem] font-semibold text-green-600">
                  ارسال شده
                </button>
              </td>
              <td className="border border-slate-300">
                <div className="flex justify-center gap-x-4">
                  <MdEditSquare className="cursor-pointer text-xl text-primary-p" />
                  <RiDeleteBin6Fill className="cursor-pointer text-2xl text-red-500" />
                </div>
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
