import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdEditSquare } from "react-icons/md";
import { MdAppBlocking } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";

import AddButton from "../components/AddButton";
import { useState } from "react";
import DetailsModal from "../components/DetailsModal";
import FormInput from "../components/FormInput";

export default function Users() {
  const [toggleModal, setToggleModal] = useState<boolean>(false);

  const openModalHandler = () => {
    setToggleModal(true);
  };

  const closeModalHandler = () => {
    setToggleModal(false);
  };

  return (
    <div className=" xl:h-[calc(100vh-160px)]">
      <AddButton
        openModalHandler={openModalHandler}
        title={"افزودن کاربر جدید"}
      />

      <div
        className="] w-[calc(100vw-90px)] overflow-x-auto bg-transparent
      xs:w-[calc(100vw-130px)]"
      >
        <h2 className="pb-4 text-xl ">کاربران</h2>
        <table className="w-full text-sm md:text-base shadow-2xl">
          <thead className="bg-pink-100">
            <tr className="border-b-[1.5px] border-zinc-200">
              <th className="min-w-[240px] py-3">کاربر</th>
              <th className="min-w-[100px]">نام کاربری</th>
              <th className="min-w-[100px]">شماره تماس</th>
              <th className="min-w-[100px]">نقش</th>
              <th className="min-w-[50px]">ویرایش</th>
              <th className="min-w-[50px]">حذف</th>
              <th className="min-w-[50px]">تغییر نقش</th>
              <th className="min-w-[50px]">بن</th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="border-y-[10px] border-neutral-100 bg-white text-center">
              <td className="p-1.5">
                <div className="flex items-center justify-center gap-x-5">
                  <img
                    src="/images/832a460b522c84fa9650c11face5927e.jpg"
                    alt="product"
                    className=" h-12 w-12 rounded-full"
                  />
                  <div className=" flex flex-col gap-y-1.5 text-sm">
                    <p>نازنین رستگار</p>
                    <p className="text-sm text-zinc-500">nazi777@gmail.com</p>
                  </div>
                </div>
              </td>
              <td className="">هندزفری بلوتوثی</td>
              <td>500000 تومان</td>
              <td>
                <span className="rounded-full bg-fuchsia-200  px-6 py-1 text-primary-pk font-semibold text-sm">
                  ادمین
                </span>
              </td>
              <td>
                <button className="">
                  <MdEditSquare className="text-xl text-primary-b" />
                </button>
              </td>
              <td>
                <button className="">
                  <RiDeleteBin6Fill className="text-xl text-primary-pk" />
                </button>
              </td>
              <td>
                <button className="">
                  <GrUserAdmin className="text-xl  text-primary-p" />
                </button>
              </td>
              <td>
                <button className="">
                  <MdAppBlocking className="text-xl  text-primary-y" />
                </button>
              </td>
            </tr>
            <tr className="border-y-[10px] border-neutral-100 bg-white text-center">
              <td className="p-1.5">
                <div className="flex items-center justify-center gap-x-5">
                  <img
                    src="/images/832a460b522c84fa9650c11face5927e.jpg"
                    alt="product"
                    className=" h-12 w-12 rounded-full"
                  />
                  <div className="flex flex-col gap-y-1.5 text-sm">
                    <p>نازنین رستگار</p>
                    <p className="text-sm text-zinc-500">nazi777@gmail.com</p>
                  </div>
                </div>
              </td>
              <td className="">هندزفری بلوتوثی</td>
              <td>500000 تومان</td>
              <td>
                <span className="rounded-full bg-fuchsia-200  px-6 py-1 text-primary-pk font-semibold text-sm">
                  ادمین
                </span>
              </td>
              <td>
                <button className="">
                  <MdEditSquare className="text-xl text-primary-b" />
                </button>
              </td>
              <td>
                <button className="">
                  <RiDeleteBin6Fill className="text-xl text-primary-pk" />
                </button>
              </td>
              <td>
                <button className="">
                  <GrUserAdmin className="text-xl  text-primary-p" />
                </button>
              </td>
              <td>
                <button className="">
                  <MdAppBlocking className="text-xl  text-primary-y" />
                </button>
              </td>
            </tr>
            <tr className="border-y-[10px] border-neutral-100 bg-white text-center">
              <td className="p-1.5">
                <div className="flex items-center justify-center gap-x-5">
                  <img
                    src="/images/832a460b522c84fa9650c11face5927e.jpg"
                    alt="product"
                    className=" h-12 w-12 rounded-full"
                  />
                  <div className="flex flex-col gap-y-1.5 text-sm">
                    <p>نازنین رستگار</p>
                    <p className="text-sm text-zinc-500">nazi777@gmail.com</p>
                  </div>
                </div>
              </td>
              <td className="">هندزفری بلوتوثی</td>
              <td>500000 تومان</td>
              <td>
                <span className="rounded-full bg-fuchsia-200  px-6 py-1 text-primary-pk font-semibold text-sm">
                  ادمین
                </span>
              </td>
              <td>
                <button className="">
                  <MdEditSquare className="text-xl text-primary-b" />
                </button>
              </td>
              <td>
                <button className="">
                  <RiDeleteBin6Fill className="text-xl text-primary-pk" />
                </button>
              </td>
              <td>
                <button className="">
                  <GrUserAdmin className="text-xl  text-primary-p" />
                </button>
              </td>
              <td>
                <button className="">
                  <MdAppBlocking className="text-xl  text-primary-y" />
                </button>
              </td>
            </tr>
            <tr className="border-y-[10px] border-neutral-100 bg-white text-center">
              <td className="p-1.5">
                <div className="flex items-center justify-center gap-x-5">
                  <img
                    src="/images/832a460b522c84fa9650c11face5927e.jpg"
                    alt="product"
                    className=" h-12 w-12 rounded-full"
                  />
                  <div className="flex flex-col gap-y-1.5 text-sm">
                    <p>نازنین رستگار</p>
                    <p className="text-sm text-zinc-500">nazi777@gmail.com</p>
                  </div>
                </div>
              </td>
              <td className="">هندزفری بلوتوثی</td>
              <td>500000 تومان</td>
              <td>
                <span className="rounded-full bg-fuchsia-200  px-6 py-1 text-primary-pk font-semibold text-sm">
                  ادمین
                </span>
              </td>
              <td>
                <button className="">
                  <MdEditSquare className="text-xl text-primary-b" />
                </button>
              </td>
              <td>
                <button className="">
                  <RiDeleteBin6Fill className="text-xl text-primary-pk" />
                </button>
              </td>
              <td>
                <button className="">
                  <GrUserAdmin className="text-xl  text-primary-p" />
                </button>
              </td>
              <td>
                <button className="">
                  <MdAppBlocking className="text-xl  text-primary-y" />
                </button>
              </td>
            </tr>
            <tr className="border-y-[10px] border-neutral-100 bg-white text-center">
              <td className="p-1.5">
                <div className="flex items-center justify-center gap-x-5">
                  <img
                    src="/images/832a460b522c84fa9650c11face5927e.jpg"
                    alt="product"
                    className=" h-12 w-12 rounded-full"
                  />
                  <div className="flex flex-col gap-y-1.5 text-sm">
                    <p>نازنین رستگار</p>
                    <p className="text-sm text-zinc-500">nazi777@gmail.com</p>
                  </div>
                </div>
              </td>
              <td className="">هندزفری بلوتوثی</td>
              <td>500000 تومان</td>
              <td>
                <span className="rounded-full bg-fuchsia-200  px-6 py-1 text-primary-pk font-semibold text-sm">
                  ادمین
                </span>
              </td>
              <td>
                <button className="">
                  <MdEditSquare className="text-xl text-primary-b" />
                </button>
              </td>
              <td>
                <button className="">
                  <RiDeleteBin6Fill className="text-xl text-primary-pk" />
                </button>
              </td>
              <td>
                <button className="">
                  <GrUserAdmin className="text-xl  text-primary-p" />
                </button>
              </td>
              <td>
                <button className="">
                  <MdAppBlocking className="text-xl  text-primary-y" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="fixed bottom-0 left-6 right-[6.8rem] z-10 flex justify-center gap-x-5 rounded-b-xl  p-5">
          <button className="flex w-10 items-center justify-center rounded-full bg-primary-y py-1 text-white hover:bg-black sm:w-16">
            1
          </button>
          <button className="flex w-10 items-center justify-center rounded-full bg-pink-200 py-1 text-white hover:bg-black sm:w-16">
            2
          </button>
          <button className="flex w-10 items-center justify-center rounded-full bg-pink-200 py-1 text-white hover:bg-black sm:w-16">
            3
          </button>
        </div>
      </div>
      {toggleModal && (
        <DetailsModal onClose={closeModalHandler}>
          <h2 className="text-xl font-bold">مشخصات کاربر جدید</h2>
          <form className="mt-10 grid w-full grid-cols-1 gap-6 gap-x-24 p-5 xs:grid-cols-2 lg:gap-14 ">
            <FormInput
              typeInput="text"
              titleFa="نام و نام خانوادگی"
              titleEn="name"
            />
            <FormInput
              typeInput="text"
              titleFa="نام کاربری"
              titleEn="username"
            />
            <FormInput typeInput="email" titleFa="ایمیل" titleEn="email" />
            <FormInput typeInput="text" titleFa="شماره تماس" titleEn="phone" />
            <FormInput
              typeInput="password"
              titleFa="پسورد"
              titleEn="password"
            />
          </form>
          <button className="ms-auto h-12 w-40 rounded-xl bg-primary-y">
            تایید
          </button>
        </DetailsModal>
      )}
    </div>
  );
}
