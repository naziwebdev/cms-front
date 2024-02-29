import DetailsModal from "../components/DetailsModal";
import { IoMdAddCircle } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdEditSquare } from "react-icons/md";
import { useState } from "react";

export default function Offs() {
  const [toggleAddModal, setToggleAddModal] = useState<boolean>(false);
  const [toggleAllOffModal, setToggleAllOffModal] = useState<boolean>(false);


  const openAddModalHandler = () => {
    setToggleAddModal(true);
  };

  const closeAddModalHandler = () => {
    setToggleAddModal(false);
  };
  const openModalAllOffHandler = () => {
    setToggleAllOffModal(true);
  };

  const closeModalAllOffHandler = () => {
    setToggleAllOffModal(false);
  };

  return (
    <div className=" xl:h-[calc(100vh-160px)]">
      <div className="mb-5 flex flex-col sm:flex-row items-center gap-4">
        <button
          onClick={openAddModalHandler}
          className="2xs:w-[85%] sm:w-auto  flex cursor-pointer items-center justify-center gap-x-1 rounded-2xl bg-primary-y p-3 text-white 
    shadow-lg  xl:p-3.5 text-sm sm:text-base"
        >
          افزودن کد تخفیف جدید
          <IoMdAddCircle className="text-xl" />
        </button>
        <button
          onClick={openModalAllOffHandler}
          className="2xs:w-[85%] sm:w-auto flex cursor-pointer items-center justify-center gap-x-1 rounded-2xl bg-primary-p p-3 text-white text-sm sm:text-base"
        >
          افزودن تخفیف همگانی
          <IoMdAddCircle className="text-xl" />
        </button>
      </div>

      <div
        className=" w-[calc(100vw-90px)] overflow-x-auto
  rounded-xl  bg-white  px-2 py-4 xs:w-[calc(100vw-130px)] xs:p-4 xl:h-[64vh]"
      >
        <h1 className="px-4 pb-4 text-xl">لیست تخفیف ها</h1>
        <table className="w-full text-sm md:text-base">
          <thead className="">
            <tr className="border-b-2 border-zinc-600">
              <th className="min-w-[100px]  px-8 py-2.5 text-start">کد کوپن</th>
              <th className="min-w-[100px] px-8 text-start">درصد تخفیف</th>
              <th className="min-w-[100px] px-8 text-start">انقضای کد</th>
              <th className="min-w-[100px] px-8 text-start">
                تعداد مجاز استفاده
              </th>
              <th className="min-w-[100px] px-8 text-start">
                تعداد استفاده شده
              </th>
              <th className="min-w-[100px] px-8 text-start">عملیات</th>
            </tr>
          </thead>
          <tbody className="[&>*:nth-child(odd)]:bg-stone-100">
            <tr className=" py-4">
              <td className="px-8 py-2.5">
                <p className="py-1.5 font-bold text-zinc-800">EPO786NMC</p>
              </td>
              <td className="px-8 ">
                <p className="font-semibold text-green-500">60%</p>
              </td>
              <td className="px-8">
                <p className="">1402/12/16</p>
              </td>
              <td className="px-8">
                <p className="">2</p>
              </td>
              <td className="px-8">
                <p className="">1</p>
              </td>
              <td className="px-8">
                <div className="flex gap-x-4">
                <MdEditSquare className="text-2xl text-primary-b cursor-pointer" />
                <RiDeleteBin6Fill className="text-2xl text-red-500 cursor-pointer" />
                </div>
              </td>
            </tr>
            <tr className=" py-4">
              <td className="px-8 py-2.5">
                <p className="py-1.5 font-bold text-zinc-800">EPO786NMC</p>
              </td>
              <td className="px-8 ">
                <p className="font-semibold text-green-500">60%</p>
              </td>
              <td className="px-8">
                <p className="">1402/12/16</p>
              </td>
              <td className="px-8">
                <p className="">2</p>
              </td>
              <td className="px-8">
                <p className="">1</p>
              </td>
              <td className="px-8">
                <div className="flex gap-x-4">
                <MdEditSquare className="text-2xl text-primary-b cursor-pointer" />
                <RiDeleteBin6Fill className="text-2xl text-red-500 cursor-pointer" />
                </div>
              </td>
            </tr>
            <tr className=" py-4">
              <td className="px-8 py-2.5">
                <p className="py-1.5 font-bold text-zinc-800">EPO786NMC</p>
              </td>
              <td className="px-8 ">
                <p className="font-semibold text-green-500">60%</p>
              </td>
              <td className="px-8">
                <p className="">1402/12/16</p>
              </td>
              <td className="px-8">
                <p className="">2</p>
              </td>
              <td className="px-8">
                <p className="">1</p>
              </td>
              <td className="px-8">
                <div className="flex gap-x-4">
                <MdEditSquare className="text-2xl text-primary-b cursor-pointer" />
                <RiDeleteBin6Fill className="text-2xl text-red-500 cursor-pointer" />
                </div>
              </td>
            </tr>
            <tr className=" py-4">
              <td className="px-8 py-2.5">
                <p className="py-1.5 font-bold text-zinc-800">EPO786NMC</p>
              </td>
              <td className="px-8 ">
                <p className="font-semibold text-green-500">60%</p>
              </td>
              <td className="px-8">
                <p className="">1402/12/16</p>
              </td>
              <td className="px-8">
                <p className="">2</p>
              </td>
              <td className="px-8">
                <p className="">1</p>
              </td>
              <td className="px-8">
                <div className="flex gap-x-4">
                <MdEditSquare className="text-2xl text-primary-b cursor-pointer" />
                <RiDeleteBin6Fill className="text-2xl text-red-500 cursor-pointer" />
                </div>
              </td>
            </tr>
            <tr className=" py-4">
              <td className="px-8 py-2.5">
                <p className="py-1.5 font-bold text-zinc-800">EPO786NMC</p>
              </td>
              <td className="px-8 ">
                <p className="font-semibold text-green-500">60%</p>
              </td>
              <td className="px-8">
                <p className="">1402/12/16</p>
              </td>
              <td className="px-8">
                <p className="">2</p>
              </td>
              <td className="px-8">
                <p className="">1</p>
              </td>
              <td className="px-8">
                <div className="flex gap-x-4">
                <MdEditSquare className="text-2xl text-primary-b cursor-pointer" />
                <RiDeleteBin6Fill className="text-2xl text-red-500 cursor-pointer" />
                </div>
              </td>
            </tr>
           
          </tbody>
        </table>
        <div className="flex justify-center pt-8 ">
          <ul className="flex justify-center gap-x-1">
            <button className="flex w-10 items-center justify-center rounded-xl bg-black py-1 text-white sm:w-14">
              <MdNavigateNext className="text-2xl" />
            </button>
            <button className="flex w-10 items-center justify-center rounded-xl bg-zinc-300 py-1 text-white hover:bg-black sm:w-14">
              1
            </button>
            <button className="flex w-10 items-center justify-center rounded-xl bg-pink-200 py-1 text-white hover:bg-black sm:w-14">
              2
            </button>
            <button className="flex w-10 items-center justify-center rounded-xl bg-black py-1 text-white sm:w-14">
              <MdNavigateBefore className="text-2xl" />
            </button>
          </ul>
        </div>
      </div>
      {toggleAddModal && (
        <DetailsModal onClose={closeAddModalHandler}>
          <h2 className="text-xl font-bold">ایجاد هزینه جدید</h2>
          <form className="mt-10 grid w-full grid-cols-1 gap-6 gap-x-24 p-5 xs:grid-cols-2 lg:gap-14 ">
            <button
              type="submit"
              className="ms-auto mt-20 h-12 w-40 rounded-xl bg-primary-y"
            >
              تایید
            </button>
          </form>
        </DetailsModal>
      )}
      {toggleAllOffModal && (
        <DetailsModal onClose={closeModalAllOffHandler}>
          <h2 className="text-xl font-bold">ایجاد هزینه جدید</h2>
          <form className="mt-10 grid w-full grid-cols-1 gap-6 gap-x-24 p-5 xs:grid-cols-2 lg:gap-14 ">
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
