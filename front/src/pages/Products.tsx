import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdEditSquare } from "react-icons/md";

import AddButton from "../components/AddButton";
import DetailsModal from "../components/DetailsModal";
import FormInput from "../components/FormInput";
import { useState, useEffect } from "react";
import { productsTypes } from "../TypescriptTypes/ProductTypes";

export default function Products() {
  const [toggleModal, setToggleModal] = useState<boolean>(false);
  const [allProduct, setAllProduct] = useState<productsTypes[]>([]);

  const openModalHandler = () => {
    setToggleModal(true);
  };

  const closeModalHandler = () => {
    setToggleModal(false);
  };

  const getData = async () => {
    const res = await fetch("http://localhost:4000/v1/products");
    const data = await res.json();
    setAllProduct(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-col items-center  xl:h-[calc(100vh-160px)]">
      <AddButton
        openModalHandler={openModalHandler}
        title={"افزودن محصول جدید"}
      />
      <div
        className="border-zinc-300/3 h-[70vh]  w-[calc(100vw-90px)] overflow-x-auto rounded-2xl border-2 bg-white shadow-xl xs:w-[calc(100vw-130px)] 
      xl:h-[64vh]"
      >
        <h2 className="p-2 px-4 text-lg ">محصولات</h2>
        <table className="w-full text-sm md:text-base">
          <thead className="bg-zinc-100">
            <tr className="border-b-[1.5px] border-zinc-200 ">
              <th className="min-w-[100px] py-2.5">تصویر</th>
              <th className="min-w-[100px]">محصول</th>
              <th className="min-w-[100px]">مبلغ</th>
              <th className="min-w-[100px]">دسته بندی</th>
              <th className="min-w-[50px]">ویرایش</th>
              <th className="min-w-[50px]">حذف</th>
            </tr>
          </thead>
          <tbody>
            {allProduct?.map((product) => (
              <tr
                key={product.id}
                className="border-b-[1.5px] border-zinc-200 text-center"
              >
                <td>
                  <img
                    src={`http://localhost:4000/products/covers/${product.cover}`}
                    alt="product"
                    className="mx-auto h-24 w-32"
                  />
                </td>
                <td >{product.title}</td>
                <td>{Number(product.price)?.toLocaleString()} تومان </td>
                <td>{product.categoryId.title}</td>
                <td>
                  <button className="">
                    <MdEditSquare className="text-xl text-primary-p" />
                  </button>
                </td>
                <td>
                  <button className="">
                    <RiDeleteBin6Fill className="text-xl text-primary-pk" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {toggleModal && (
        <DetailsModal onClose={closeModalHandler}>
          <h2 className="text-xl font-bold">مشخصات کاربر جدید</h2>
          <form className="mt-10 grid w-full grid-cols-1 gap-6 gap-x-24 p-5 xs:grid-cols-2 lg:gap-14 ">
            <FormInput typeInput="file" titleFa="تصویر" titleEn="img" />
            <FormInput typeInput="text" titleFa="نام محصول" titleEn="product" />
            <FormInput typeInput="text" titleFa="مبلغ" titleEn="price" />
            <FormInput typeInput="text" titleFa="شورت نیم" titleEn="href" />
            <div className="flex flex-col gap-2">
              <label htmlFor="category" className="text-sm font-bold ">
                دسته بندی
              </label>
              <select
                id="category"
                className="rounded-lg border-b-2 border-primary-pk p-1 px-4 outline-none"
              >
                <option value="" className="bg-primary-p text-white">
                  دسته بندی را انتخاب کنید
                </option>
                <option value="" className="bg-primary-p text-white">
                  دیجیتال
                </option>
              </select>
            </div>
          </form>
          <button className="ms-auto h-12 w-40 rounded-xl bg-primary-y">
            تایید
          </button>
        </DetailsModal>
      )}
    </div>
  );
}
