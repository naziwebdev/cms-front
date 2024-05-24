import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdEditSquare } from "react-icons/md";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import swal from "sweetalert";
import AddButton from "../components/AddButton";
import DetailsModal from "../components/DetailsModal";
import { useState, useEffect } from "react";
import { productsTypes } from "../TypescriptTypes/ProductTypes";
import { productsFormTypes } from "../TypescriptTypes/ProductTypes";
import { categoryIdType } from "../TypescriptTypes/ProductTypes";
import productSchema from "../validations/productSchema";

export default function Products() {
  const [toggleAddModal, setToggleAddModal] = useState<boolean>(false);
  const [allProduct, setAllProduct] = useState<productsTypes[]>([]);
  const [categories, setCategories] = useState<categoryIdType[]>([]);
  const [toggleEditModal, setToggleEditModal] = useState<boolean>(false);
  const [productEditValue, setProductEditValue] = useState<productsTypes>();

  const {
    register: register1,
    reset: reset1,
    control: control1,
    handleSubmit: handleSubmit1,
    formState: { errors: errors1 },
  } = useForm({
    defaultValues: {
      cover: "",
      title: "",
      price: "",
      href: "",
      categoryId: "",
    },
    resolver: yupResolver(productSchema),
  });

  console.log(productEditValue);

  const {
    register: register2,
    reset: reset2,
    control: control2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
  } = useForm({
    defaultValues: {
      cover: productEditValue?.cover,
      title: productEditValue?.title,
      price: productEditValue?.price,
      href: productEditValue?.href,
      categoryId: productEditValue?.categoryId?._id,
    },
    resolver: yupResolver(productSchema),
  });

  const formSubmitting = (data: productsFormTypes, event: any) => {
    event.preventDefault();

    let formData = new FormData();
    const enPrice = data.price.replace(/[۰۱۲۳۴۵۶۷۸۹]/g, function (d: any): any {
      return d.charCodeAt(0) - 1776;
    });

    formData.append("cover", data.cover);
    formData.append("title", data.title);
    formData.append("price", enPrice);
    formData.append("href", data.href);
    formData.append("categoryId", data.categoryId);

    fetch("http://localhost:4000/v1/products", {
      method: "POST",
      body: formData,
    }).then((res) => {
      if (res.status === 201) {
        res.json();
        swal({
          title: "محصول با موفقیت افزوده شد",
          icon: "success",
          buttons: "بستن" as any,
        });
        getProducts();
        setToggleAddModal(false);
      }
    });

    reset1();
  };

  const removeProductHandler = async (productID: string) => {
    swal({
      title: "آیا از حذف اطمینان دارید؟",
      icon: "warning",
      buttons: ["خیر", "بله"],
    }).then(async (value) => {
      if (value === true) {
        const res = await fetch(
          `http://localhost:4000/v1/products/${productID}`,
          {
            method: "DELETE",
          },
        );

        if (res.status === 200) {
          await res.json();
          swal({
            title: "محصول با موفقیت حذف شد",
            icon: "success",
            buttons: "بستن" as any,
          });
          getProducts();
        }
      }
    });
  };

  const editProductHandler = (product: productsTypes) => {
    setProductEditValue(product);
    setToggleEditModal(true);
  };

  const editFormSubmiting = (data: productsFormTypes, event: any) => {
    event.preventDefault();

    let formData = new FormData();
    const enPrice = data?.price.replace(
      /[۰۱۲۳۴۵۶۷۸۹]/g,
      function (d: any): any {
        return d.charCodeAt(0) - 1776;
      },
    );

    formData.append("cover", data?.cover);
    formData.append("title", data?.title);
    formData.append("price", enPrice);
    formData.append("href", data?.href);
    formData.append("categoryId", data?.categoryId);

    fetch(`http://localhost:4000/v1/products/${productEditValue?._id}`, {
      method: "PUT",
      body: formData,
    }).then(async (res) => {
      if (res.status === 200) {
        res.json();
        swal({
          title: "محصول با موفقیت ویرایش شد",
          icon: "success",
          buttons: "بستن" as any,
        });
        getProducts();
        setToggleEditModal(false);
      } else {
        swal({
          title: "عملیات با شکست مواجه شد",
          icon: "error",
          buttons: "بستن" as any,
        });
        console.log(await res);
      }
    });

    reset2();
  };

  const openModalHandler = () => {
    setToggleAddModal(true);
  };

  const closeModalHandler = () => {
    setToggleAddModal(false);
  };

  const closeModalHandler2 = () => {
    setToggleEditModal(false);
    window.location.reload();
  };

  const getProducts = async () => {
    const res = await fetch("http://localhost:4000/v1/products");
    const data = await res.json();
    setAllProduct(data);
  };

  const getCategory = async () => {
    const res = await fetch("http://localhost:4000/v1/category");
    const data = await res.json();
    setCategories(data);
  };

  useEffect(() => {
    getProducts();
    getCategory();
  }, []);

  return (
    <div className="flex flex-col items-center  xl:h-[calc(100vh-160px)]">
      <AddButton
        openModalHandler={openModalHandler}
        title={"افزودن محصول جدید"}
      />
      <div
        className="border-zinc-300/3 h-[70vh]  w-[calc(100vw-90px)] overflow-x-auto rounded-2xl border-2 bg-white shadow-lg shadow-zinc-300 xs:w-[calc(100vw-130px)] xl:h-[64vh] dark:shadow-lg 
      dark:shadow-zinc-700"
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
                key={product._id}
                className="border-b-[1.5px] border-zinc-200 text-center"
              >
                <td className="py-1">
                  <img
                    src={`http://localhost:4000/products/covers/${product.cover}`}
                    alt="product"
                    className="mx-auto h-20 w-28 "
                  />
                </td>
                <td>{product.title}</td>
                <td>{Number(product.price)?.toLocaleString("fa-IR")} تومان </td>
                <td>{product.categoryId.title}</td>
                <td>
                  <button onClick={() => editProductHandler(product)}>
                    <MdEditSquare className="text-xl text-indigo-400" />
                  </button>
                </td>
                <td>
                  <button onClick={() => removeProductHandler(product._id)}>
                    <RiDeleteBin6Fill className="text-xl text-pink-500" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {toggleAddModal && (
        <DetailsModal onClose={closeModalHandler}>
          <h2 className="text-xl font-bold">مشخصات محصول جدید</h2>
          <form
            onSubmit={handleSubmit1(formSubmitting)}
            className="mt-10 grid w-full grid-cols-1 gap-6 gap-x-24 p-5 xs:grid-cols-2 lg:gap-14 "
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="cover" className="text-sm font-bold">
                عکس
              </label>
              <Controller
                control={control1}
                name={"cover"}
                render={({ field: { value, onChange, ...field } }) => {
                  return (
                    <input
                      {...field}
                      className="rounded-lg border-b-2 border-primary-pk p-1 px-4 outline-none"
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>,
                      ) => {
                        onChange(event.target.files?.[0]);
                      }}
                      type="file"
                      id="cover"
                    />
                  );
                }}
              />
              <span className="pt-1.5 text-sm text-red-600">
                {errors1.cover && errors1.cover.message}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="title" className="text-sm font-bold">
                عنوان محصول
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
              <label htmlFor="href" className="text-sm font-bold">
                شورت نیم
              </label>
              <input
                id="href"
                {...register1("href")}
                type="text"
                placeholder="shortName"
                className="rounded-lg border-b-2 border-primary-pk p-1 px-4 outline-none"
              />
              <span className="pt-1.5 text-sm text-red-600">
                {errors1.href && errors1.href.message}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="category" className="text-sm font-bold ">
                دسته بندی
              </label>
              <Controller
                name="categoryId"
                control={control1}
                rules={{ required: true }}
                render={({ field }) => (
                  <select
                    {...field}
                    id="category"
                    className="rounded-lg border-b-2 border-primary-pk p-1 px-4 outline-none"
                  >
                    <option value={"-1"} className="bg-primary-p text-white">
                      دسته بندی را انتخاب کنید
                    </option>
                    {categories.map((category) => (
                      <>
                        <option
                          key={category._id}
                          value={category._id}
                          className="bg-primary-p text-white"
                        >
                          {category.title}
                        </option>
                      </>
                    ))}
                  </select>
                )}
              />
              <span className="pt-1.5 text-sm text-red-600">
                {errors1.categoryId && errors1.categoryId.message}
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
        <DetailsModal onClose={closeModalHandler2}>
          <h2 className="text-xl font-bold">ویرایش محصول</h2>
          <form
            onSubmit={handleSubmit2(editFormSubmiting)}
            className="mt-10 grid w-full grid-cols-1 gap-6 gap-x-24 p-5 xs:grid-cols-2 lg:gap-14 "
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="cover" className="text-sm font-bold">
                عکس
              </label>
              <Controller
                control={control2}
                name={"cover"}
                render={({ field: { value, onChange, ...field } }) => {
                  return (
                    <input
                      {...field}
                      className="rounded-lg border-b-2 border-primary-pk p-1 px-4 outline-none"
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>,
                      ) => {
                        onChange(event.target.files?.[0]);
                      }}
                      type="file"
                      id="cover"
                    />
                  );
                }}
              />
              <span className="pt-1.5 text-sm text-red-600">
                {errors2.cover && errors2.cover.message}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="title" className="text-sm font-bold">
                عنوان محصول
              </label>
              <input
                id="title"
                defaultValue={productEditValue?.title}
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
                defaultValue={productEditValue?.price}
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
              <label htmlFor="href" className="text-sm font-bold">
                شورت نیم
              </label>
              <input
                defaultValue={productEditValue?.href}
                id="href"
                {...register2("href")}
                type="text"
                placeholder="shortName"
                className="rounded-lg border-b-2 border-primary-pk p-1 px-4 outline-none"
              />
              <span className="pt-1.5 text-sm text-red-600">
                {errors2.href && errors2.href.message}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="category" className="text-sm font-bold ">
                دسته بندی
              </label>
              <Controller
                name="categoryId"
                defaultValue={productEditValue?.categoryId._id}
                control={control2}
                rules={{ required: true }}
                render={({ field }) => (
                  <select
                    {...field}
                    id="category"
                    defaultValue={productEditValue?.categoryId._id}
                    className="rounded-lg border-b-2 border-primary-pk p-1 px-4 outline-none"
                  >
                    <option selected className="bg-primary-p text-white">
                      {productEditValue?.categoryId.title}
                    </option>
                    {categories.map((category) => (
                      <>
                        console.log(category.id)
                        <option
                          key={category._id}
                          value={category._id}
                          className="bg-primary-p text-white"
                        >
                          {category.title}
                        </option>
                      </>
                    ))}
                  </select>
                )}
              />
              <span className="pt-1.5 text-sm text-red-600">
                {errors2.categoryId && errors2.categoryId.message}
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
