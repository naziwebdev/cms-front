import DetailsModal from "../components/DetailsModal";
import { IoMdAddCircle } from "react-icons/io";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdEditSquare } from "react-icons/md";
import { useState, useEffect } from "react";
import { OffTypes, offFormTypes , allOffFormTypes } from "../TypescriptTypes/OffTypes";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { allOffSchema } from "../validations/OffSchema";
import OffSchema from "../validations/OffSchema";
import Pagination from "../components/Pagination";
import swal from "sweetalert";

export default function Offs() {
  const [toggleAddModal, setToggleAddModal] = useState<boolean>(false);
  const [toggleAllOffModal, setToggleAllOffModal] = useState<boolean>(false);
  const [toggleEditOffModal, setToggleEditOffModal] = useState<boolean>(false);
  const [offsShowPage, setoffsShowPage] = useState<OffTypes[]>([]);
  const [allOffs, setAllOffs] = useState<OffTypes[]>([]);
  const [offEditInfo, setOffEditInfo] = useState<OffTypes>();

  const {
    register: register1,
    reset: reset1,
    handleSubmit: handleSubmit1,
    formState: { errors: errors1 },
  } = useForm({
    defaultValues: {
      code: "",
      percent: 0,
      expireDay: 0,
      maxUsage: 0,
    },
    resolver: yupResolver(OffSchema),
  });

  const {
    register: register2,
    reset: reset2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
  } = useForm({
    defaultValues: {
      code: offEditInfo?.code,
      percent: offEditInfo?.percent,
      expireDay: offEditInfo?.expireDay,
      maxUsage: offEditInfo?.maxUsage,
    }as offFormTypes,
    resolver: yupResolver(OffSchema),
  });

  const {
    register: register3,
    reset: reset3,
    handleSubmit: handleSubmit3,
    formState: { errors: errors3 },
  } = useForm({
    defaultValues: {
      percent:0,
    },
    resolver: yupResolver(allOffSchema),
  });

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

  const closeEditModal = () => {
    setToggleEditOffModal(false);
    window.location.reload();
  };

  const toggleEditModalHandler = () => {
    setToggleEditOffModal((prev) => !prev);
  };
  
  const getOffs = async () => {
    const res = await fetch("http://localhost:4000/v1/offs", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDc4NTcyZDdjMjE4YTVkZDY3MTAyYyIsImlhdCI6MTcxMTU2NTE5NSwiZXhwIjoxNzE0MTU3MTk1fQ.20k8OOxivVVwnjcEfdhAd87QbsWF1AA1Kp3M0oA2ak4",
      },
    });

    const offs = await res.json();

    setAllOffs(offs);
  };

  const calculateExpireDay = (expireDay: number, createdAt: string) => {
    const today = new Date(createdAt);

    const dayExpire = new Date(today);
    dayExpire.setDate(dayExpire.getDate() + expireDay);

    const faExpireDay = dayExpire.toLocaleDateString("fa-IR", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      calendar: "persian",
    });

    return faExpireDay;
  };

  const formSubmitting = async (data: offFormTypes, event: any) => {
    event.preventDefault();
    const res = await fetch("http://localhost:4000/v1/offs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDc4NTcyZDdjMjE4YTVkZDY3MTAyYyIsImlhdCI6MTcxMTU2NTE5NSwiZXhwIjoxNzE0MTU3MTk1fQ.20k8OOxivVVwnjcEfdhAd87QbsWF1AA1Kp3M0oA2ak4`,
      },
      body: JSON.stringify({
        code: data.code,
        percent: data.percent,
        expireDay: data.expireDay,
        maxUsage: data.maxUsage,
      }),
    });

    if (res.status === 201) {
      await res.json();
      swal({
        title: "کد تخفیف با موفقیت اضافه شد",
        icon: "success",
        buttons: "بستن" as any,
      });
      getOffs();
      setToggleAddModal(false);
    }

    reset1();
  };

  const formAllOffSubmitting = async (data:allOffFormTypes, event: any) => {
    event.preventDefault();
    const res = await fetch("http://localhost:4000/v1/offs/all", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDc4NTcyZDdjMjE4YTVkZDY3MTAyYyIsImlhdCI6MTcxMTU2NTE5NSwiZXhwIjoxNzE0MTU3MTk1fQ.20k8OOxivVVwnjcEfdhAd87QbsWF1AA1Kp3M0oA2ak4`,
      },
      body: JSON.stringify({
        percent: data.percent, 
      }),
    });

    if (res.status === 200) {
      await res.json();
      swal({
        title: "کد تخفیف با موفقیت اضافه شد",
        icon: "success",
        buttons: "بستن" as any,
      });
      getOffs();
      setToggleAllOffModal(false);
    }

    reset3();
  };


  const removeOffHandler = (offID: string) => {
    swal({
      title: "آیا از حذف اطمینان دارید؟",
      icon: "warning",
      buttons: ["خیر", "بله"],
    }).then(async (value) => {
      if (value === true) {
        const res = await fetch(`http://localhost:4000/v1/offs/${offID}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDc4NTcyZDdjMjE4YTVkZDY3MTAyYyIsImlhdCI6MTcxMTU2NTE5NSwiZXhwIjoxNzE0MTU3MTk1fQ.20k8OOxivVVwnjcEfdhAd87QbsWF1AA1Kp3M0oA2ak4`,
          },
        });

        if (res.status === 200) {
          await res.json();
          swal({
            title: "کد تخفیف با موفقیت حذف شد",
            icon: "success",
            buttons: "بستن" as any,
          });
          getOffs();
        }
      }
    });
  };

  const editOffHandler = (off: OffTypes) => {
    toggleEditModalHandler()
    setOffEditInfo(off);
    
  };

  const formEditSubmitting = async (data:offFormTypes, event:any) => {
    event.preventDefault();

    const res = await fetch(
      `http://localhost:4000/v1/offs/${offEditInfo?._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDc4NTcyZDdjMjE4YTVkZDY3MTAyYyIsImlhdCI6MTcxMTU2NTE5NSwiZXhwIjoxNzE0MTU3MTk1fQ.20k8OOxivVVwnjcEfdhAd87QbsWF1AA1Kp3M0oA2ak4`,
        },
        body: JSON.stringify({
          code: data.code,
          percent: data.percent,
          expireDay: data.expireDay,
          maxUsage: data.maxUsage,
        }),
      },
    );

    if (res.status === 200) {
      await res.json();
      swal({
        title: "کد تخفیف با موفقیت ویرایش شد",
        icon: "success",
        buttons: "بستن" as any,
      });
      getOffs();
      setToggleEditOffModal(false);
    }

    reset2();
  };

  useEffect(() => {
    getOffs();
  }, []);

  return (
    <div className=" xl:h-[calc(100vh-160px)]">
      <div className="mb-5 flex flex-col items-center gap-4 sm:flex-row">
        <button
          onClick={openAddModalHandler}
          className="flex cursor-pointer  items-center justify-center gap-x-1 rounded-2xl bg-primary-y p-3 text-sm text-white shadow-lg 
    2xs:w-[85%]  sm:w-auto sm:text-base xl:p-3.5"
        >
          افزودن کد تخفیف جدید
          <IoMdAddCircle className="text-xl" />
        </button>
        <button
          onClick={openModalAllOffHandler}
          className="flex cursor-pointer items-center justify-center gap-x-1 rounded-2xl bg-primary-p p-3 text-sm text-white 2xs:w-[85%] sm:w-auto sm:text-base"
        >
          افزودن تخفیف همگانی
          <IoMdAddCircle className="text-xl" />
        </button>
      </div>

      <div
        className=" w-[calc(100vw-90px)] overflow-x-auto
  rounded-xl  bg-white   px-2 py-4 xs:w-[calc(100vw-130px)] xs:p-4 xl:h-[64vh]"
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
            {offsShowPage?.map((off) => (
              <tr key={off._id} className=" py-4">
                <td className="px-8 py-2.5">
                  <p className="py-1.5 font-bold text-zinc-800">{off.code}</p>
                </td>
                <td className="px-8 ">
                  <p className="font-semibold text-green-500">{off.percent}%</p>
                </td>
                <td className="px-8">
                  <p className="">
                    {calculateExpireDay(off.expireDay, off.createdAt)}
                  </p>
                </td>
                <td className="px-8">
                  <p className="">{off.maxUsage}</p>
                </td>
                <td className="px-8">
                  <p className="">{off.countUsaged}</p>
                </td>
                <td className="px-8">
                  <div className="flex gap-x-4">
                    <MdEditSquare
                      onClick={() => editOffHandler(off)}
                      className="cursor-pointer text-2xl text-primary-b"
                    />
                    <RiDeleteBin6Fill
                      onClick={() => removeOffHandler(off._id)}
                      className="cursor-pointer text-2xl text-red-500"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
        items={allOffs}
        itemsCount={5}
        pathname={"/offs"}
        setShowItems={setoffsShowPage}
      />
      </div>
      {toggleAddModal && (
        <DetailsModal onClose={closeAddModalHandler}>
          <h2 className="text-xl font-bold">ایجاد کد تخفیف جدید</h2>
          <form
            onSubmit={handleSubmit1(formSubmitting)}
            className="mt-10 grid w-full grid-cols-1 gap-6 gap-x-24 p-5 xs:grid-cols-2 lg:gap-14 "
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="code" className="text-sm font-bold">
                کد
              </label>
              <input
                id="code"
                {...register1("code")}
                type="text"
                placeholder="code"
                className="rounded-lg border-b-2 border-primary-pk p-1 px-4 outline-none"
              />
              <span className="pt-1.5 text-sm text-red-600">
                {errors1.code && errors1.code.message}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="percent" className="text-sm font-bold">
                درصد تخفیف
              </label>
              <input
                id="percent"
                {...register1("percent")}
                type="number"
                placeholder="percent"
                className="rounded-lg border-b-2 border-primary-pk p-1 px-4 outline-none"
              />
              <span className="pt-1.5 text-sm text-red-600">
                {errors1.percent && errors1.percent.message}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="expireDay" className="text-sm font-bold">
                تاریخ انقضا
              </label>
              <input
                id="expireDay"
                {...register1("expireDay")}
                type="number"
                placeholder="expireDay"
                className="rounded-lg border-b-2 border-primary-pk p-1 px-4 outline-none"
              />
              <span className="pt-1.5 text-sm text-red-600">
                {errors1.expireDay && errors1.expireDay.message}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="maxUsage" className="text-sm font-bold">
                تعداد مجاز استفاده
              </label>
              <input
                id="maxUsage"
                max={100}
                {...register1("maxUsage")}
                type="number"
                placeholder="maxUsage"
                className="rounded-lg border-b-2 border-primary-pk p-1 px-4 outline-none"
              />
              <span className="pt-1.5 text-sm text-red-600">
                {errors1.maxUsage && errors1.maxUsage.message}
              </span>
            </div>
            <button type="submit" className="h-12 w-40 rounded-xl bg-primary-y">
              تایید
            </button>
          </form>
        </DetailsModal>
      )}
      {toggleAllOffModal && (
        <DetailsModal onClose={closeModalAllOffHandler}>
          <h2 className="text-xl font-bold">ایجاد تخفیف همگانی</h2>
          <form onSubmit={handleSubmit3(formAllOffSubmitting)}
          className="mt-10 grid w-full grid-cols-1 gap-6 gap-x-24 p-5 xs:grid-cols-2 lg:gap-14 ">
          <div className="flex flex-col gap-2">
              <label htmlFor="percent" className="text-sm font-bold">
                درصد تخفیف
              </label>
              <input
                id="percent"
                {...register3("percent")}
                type="number"
                placeholder="percent"
                className="rounded-lg border-b-2 border-primary-pk p-1 px-4 outline-none"
              />
              <span className="pt-1.5 text-sm text-red-600">
                {errors3.percent && errors3.percent.message}
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
      {toggleEditOffModal && (
        <DetailsModal onClose={closeEditModal}>
      <h2 className="text-xl font-bold">ویرایش کد تخفیف</h2>
          <form
            onSubmit={handleSubmit2(formEditSubmitting)}
            className="mt-10 grid w-full grid-cols-1 gap-6 gap-x-24 p-5 xs:grid-cols-2 lg:gap-14 "
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="code" className="text-sm font-bold">
                کد
              </label>
              <input
              defaultValue={offEditInfo?.code}
                id="code"
                {...register2("code")}
                type="text"
                placeholder="code"
                className="rounded-lg border-b-2 border-primary-pk p-1 px-4 outline-none"
              />
              <span className="pt-1.5 text-sm text-red-600">
                {errors2.code && errors2.code.message}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="percent" className="text-sm font-bold">
                درصد تخفیف
              </label>
              <input
              defaultValue={offEditInfo?.percent}
                id="percent"
                {...register2("percent")}
                type="number"
                placeholder="percent"
                className="rounded-lg border-b-2 border-primary-pk p-1 px-4 outline-none"
              />
              <span className="pt-1.5 text-sm text-red-600">
                {errors2.percent && errors2.percent.message}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="expireDay" className="text-sm font-bold">
                تاریخ انقضا
              </label>
              <input
              defaultValue={offEditInfo?.expireDay}
                id="expireDay"
                {...register2("expireDay")}
                type="number"
                placeholder="expireDay"
                className="rounded-lg border-b-2 border-primary-pk p-1 px-4 outline-none"
              />
              <span className="pt-1.5 text-sm text-red-600">
                {errors2.expireDay && errors2.expireDay.message}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="maxUsage" className="text-sm font-bold">
                تعداد مجاز استفاده
              </label>
              <input
              defaultValue={offEditInfo?.maxUsage}
                id="maxUsage"
                max={100}
                {...register2("maxUsage")}
                type="number"
                placeholder="maxUsage"
                className="rounded-lg border-b-2 border-primary-pk p-1 px-4 outline-none"
              />
              <span className="pt-1.5 text-sm text-red-600">
                {errors2.maxUsage && errors2.maxUsage.message}
              </span>
            </div>
            <button type="submit" className="h-12 w-40 rounded-xl bg-primary-y">
              تایید
            </button>
          </form>
        </DetailsModal>
      )}
    </div>
  );
}
