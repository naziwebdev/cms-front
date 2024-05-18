import { useState, useEffect } from "react";
import DetailsModal from "../../components/DetailsModal";
import TodayEventsBox from "../../components/TodayEventsBox";
import Timeline from "../../components/Timeline";
import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/colors/purple.css";
import { IoMdAddCircle } from "react-icons/io";
import DatePicker from "react-multi-date-picker";
import swal from "sweetalert";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import EventSchema from "../../validations/EventSchema";
import { EventFormTypes } from "../../TypescriptTypes/EventTypes";
import { EventTypes } from "../../TypescriptTypes/EventTypes";
import { MdEditCalendar } from "react-icons/md";
import { RiDeleteBinFill } from "react-icons/ri";

export default function Calender() {
  const [toggleAddModal, setToggleAddModal] = useState<boolean>(false);
  const [toggleEditModal, setToggleEditModal] = useState<boolean>(false);
  const [toggleActionModal, setToggleActionModal] = useState<boolean>(false);
  const [allDate, setAllDate] = useState<number[]>();
  const [events, setEvents] = useState<EventTypes[]>([]);
  const [eventInfoEdit, setEventInfoEdit] = useState<EventTypes>();

  const getEvents = async () => {
    const res = await fetch("http://localhost:4000/v1/events", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OWVkYjE5YjQxZDE0NmQ3ZWY3N2NkMyIsImlhdCI6MTcxNTk2NjUyNywiZXhwIjoxNzE4NTU4NTI3fQ.oBGAf4B6F8rimiZnEVTkAj-OvWFzYA0jYtkOnIyNgsY",
      },
    });
    if (res.status === 200) {
      const data = await res.json();
      setEvents(data);
      let dates: string[] = [];
      data.map((item: EventTypes) => dates.push(item.date.split("/")[2]));
      const enDates = dates.map((day) => convertPersianToDecimal(day));
      const regexPattern = /^-?\d+(\.\d+)?$/;

      const numberArray = enDates
        .filter((str) => regexPattern.test(str))
        .map(Number);
      setAllDate(numberArray);
    } else {
      console.log(res);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  function convertPersianToDecimal(persianNum: string) {
    const persianToDecimalMap: any = {
      "۰": "0",
      "۱": "1",
      "۲": "2",
      "۳": "3",
      "۴": "4",
      "۵": "5",
      "۶": "6",
      "۷": "7",
      "۸": "8",
      "۹": "9",
    };

    // Remove non-numeric characters
    const cleanedNum = persianNum.replace(/[^۰-۹]/g, "");

    // Convert each digit
    const decimalNum = cleanedNum
      .split("")
      .map((persianDigit) => persianToDecimalMap[persianDigit])
      .join("");

    return decimalNum;
  }

  const {
    register: register1,
    reset: reset1,
    control: control1,
    handleSubmit: handleSubmit1,
    formState: { errors: errors1 },
  } = useForm({
    defaultValues: {
      title: "",
      date: "",
      time: "",
      description: "",
    },
    resolver: yupResolver(EventSchema) as any,
  });

  const {
    register: register2,
    reset: reset2,
    control: control2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
  } = useForm({
    defaultValues: {
      title: eventInfoEdit?.title,
      date: eventInfoEdit?.date,
      time: eventInfoEdit?.time,
      description: eventInfoEdit?.description,
    } as EventFormTypes,
    resolver: yupResolver(EventSchema) as any,
  });

  const openAddModalHandler = () => {
    setToggleAddModal(true);
  };
  const closeModalHandler = () => {
    setToggleAddModal(false);
  };

  const closeEditModalHandler = () => {
    setToggleEditModal(false);
    window.location.reload();
  };

  const openActionModalHandler = () => {
    setToggleActionModal(true);
  };

  const closeActionModalHandler = () => {
    setToggleActionModal(false);
  };

  const formSubmitting = async (data: EventFormTypes, event: any) => {
    event.preventDefault();

    const res = await fetch("http://localhost:4000/v1/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OWVkYjE5YjQxZDE0NmQ3ZWY3N2NkMyIsImlhdCI6MTcxNTk2NjUyNywiZXhwIjoxNzE4NTU4NTI3fQ.oBGAf4B6F8rimiZnEVTkAj-OvWFzYA0jYtkOnIyNgsY`,
      },
      body: JSON.stringify({
        title: data.title,
        date: data.date,
        time: data.time,
        description: data.description,
      }),
    });

    if (res.status === 201) {
      await res.json();
      swal({
        title: "ایونت با موفقیت اضافه شد",
        icon: "success",
        buttons: "بستن" as any,
      }).then((value) => {
        if (value) {
          window.location.reload();
          setToggleAddModal(false);
        }
      });
    } else {
      swal({
        title: "عملیات با شکست مواجه شد",
        icon: "error",
        buttons: "بستن" as any,
      });
    }

    reset1();
  };

  const editHandler = (editInfo: EventTypes) => {
    setEventInfoEdit(editInfo);
    setToggleActionModal(false);
    setToggleEditModal(true);
  };

  const formEditSubmitting = async (data: EventFormTypes, event: any) => {
    event.preventDefault();
    const res = await fetch(
      `http://localhost:4000/v1/events/${eventInfoEdit?._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OWVkYjE5YjQxZDE0NmQ3ZWY3N2NkMyIsImlhdCI6MTcxNTk2NjUyNywiZXhwIjoxNzE4NTU4NTI3fQ.oBGAf4B6F8rimiZnEVTkAj-OvWFzYA0jYtkOnIyNgsY`,
        },
        body: JSON.stringify({
          title: data.title,
          date: data.date,
          time: data.time,
          description: data.description,
        }),
      },
    );

    if (res.status === 200) {
      await res.json();
      swal({
        title: "ایونت با موفقیت ویرایش شد",
        icon: "success",
        buttons: "بستن" as any,
      }).then((value) => {
        if (value) {
          getEvents();
          setToggleEditModal(false);
          setToggleActionModal(false);
          window.location.reload();
        }
      });
    } else {
      swal({
        title: "عملیات با شکست مواجه شد",
        icon: "error",
        buttons: "بستن" as any,
      });
    }

    reset2();
  };

  const removeEventHandler = async (eventID: string) => {
    swal({
      title: "آیا از حذف اطمینان دارید؟",
      icon: "warning",
      buttons: ["خیر", "بله"],
    }).then(async (value) => {
      if (value === true) {
        const res = await fetch(`http://localhost:4000/v1/events/${eventID}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OWVkYjE5YjQxZDE0NmQ3ZWY3N2NkMyIsImlhdCI6MTcxNTk2NjUyNywiZXhwIjoxNzE4NTU4NTI3fQ.oBGAf4B6F8rimiZnEVTkAj-OvWFzYA0jYtkOnIyNgsY`,
          },
        });

        if (res.status === 200) {
          await res.json();
          swal({
            title: "رویداد با موفقیت حذف شد",
            icon: "success",
            buttons: "بستن" as any,
          }).then((value) => {
            if (value) {
              getEvents();
              setToggleActionModal(false);
              window.location.reload();
            }
          });
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

  return (
    <div className="">
      <div className="mb-5 flex flex-col items-center gap-4 sm:flex-row">
        <button
          onClick={openAddModalHandler}
          className="flex cursor-pointer  items-center justify-center gap-x-1 rounded-2xl bg-primary-y p-3 text-sm text-white shadow-lg 
    2xs:w-[85%]  sm:w-auto sm:text-base xl:p-3.5"
        >
          افزودن رویداد جدید
          <IoMdAddCircle className="text-xl" />
        </button>
        <button
          onClick={openActionModalHandler}
          className="flex cursor-pointer items-center justify-center gap-x-1 rounded-2xl bg-primary-p p-3 text-sm text-white 2xs:w-[85%] sm:w-auto sm:text-base"
        >
          ویرایش یا حذف رویداد
          <MdEditCalendar className="text-xl" />
        </button>
      </div>
      <div
        className=" w-[calc(100vw-90px)] 
  rounded-xl  px-2 xs:w-[calc(100vw-130px)] xs:p-4"
      >
        <div className="flex flex-col gap-x-5 gap-y-8 md:flex-row lg:gap-x-14">
          <div className="w-full md:w-1/2 lg:w-1/3">
            <TodayEventsBox />
          </div>
          
          <div className="flex-1">
            <Calendar
              mapDays={({ date }) => {
                let color;

                if (allDate?.includes(date.day)) color = "green";

                if (color) return { className: "highlight highlight-" + color };
              }}
              className="purple w-full  bg-fuchsia-300 dark:shadow-lg dark:shadow-zinc-700 shadow-xl shadow-zinc-400"
              calendar={persian}
              locale={persian_fa}
            />
          </div>
        </div>
        <div className="mb-20 mt-20">
          <h3 className="pb-6 text-lg text-primary-y">رویداد های این هفته :</h3>
          <Timeline />
        </div>
      </div>
      {toggleAddModal && (
        <DetailsModal onClose={closeModalHandler}>
          <h2 className="text-xl font-bold">رویداد جدید</h2>
          <form
            onSubmit={handleSubmit1(formSubmitting)}
            className="mt-10 grid w-full grid-cols-1 gap-6 gap-x-24 p-5 xs:grid-cols-2 lg:gap-14 "
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="title" className="text-sm font-bold">
                عنوان
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
              <label htmlFor="date" className="text-sm font-bold">
                تاریخ
              </label>
              <Controller
                control={control1}
                name="date"
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <>
                    <DatePicker
                      inputClass="custom-input"
                      className="purple"
                      placeholder="برای انتخاب تاریخ ضربه بزنید"
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
              <label htmlFor="time" className="text-sm font-bold">
                زمان
              </label>
              <input
                id="time"
                {...register1("time")}
                type="time"
                placeholder="12:00"
                className="rounded-lg border-b-2 border-primary-pk p-1 px-4 outline-none"
              />
              <span className="pt-1.5 text-sm text-red-600">
                {errors1.time && errors1.time.message}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="description" className="text-sm font-bold">
                متن
              </label>
              <textarea
                id="description"
                {...register1("description")}
                placeholder="note ..."
                className="rounded-lg border-b-2 border-primary-pk p-1 px-4 outline-none"
              ></textarea>
              <span className="pt-1.5 text-sm text-red-600">
                {errors1.description && errors1.description.message}
              </span>
            </div>
            <button
              type="submit"
              className="ms-auto h-12 w-40 rounded-xl bg-primary-y"
            >
              تایید
            </button>
          </form>
        </DetailsModal>
      )}
      {toggleEditModal && (
        <DetailsModal onClose={closeEditModalHandler}>
          <h2 className="text-xl font-bold">ویرایش رویداد</h2>
          <form
            onSubmit={handleSubmit2(formEditSubmitting)}
            className="mt-10 grid w-full grid-cols-1 gap-6 gap-x-24 p-5 xs:grid-cols-2 lg:gap-14 "
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="title" className="text-sm font-bold">
                عنوان
              </label>
              <input
                defaultValue={eventInfoEdit?.title}
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
              <label htmlFor="date" className="text-sm font-bold">
                تاریخ
              </label>
              <Controller
                defaultValue={eventInfoEdit?.date}
                control={control2}
                name="date"
                rules={{ required: true }}
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
              <label htmlFor="time" className="text-sm font-bold">
                زمان
              </label>
              <input
                defaultValue={eventInfoEdit?.time}
                id="time"
                {...register2("time")}
                type="time"
                placeholder="12:00"
                className="rounded-lg border-b-2 border-primary-pk p-1 px-4 outline-none"
              />
              <span className="pt-1.5 text-sm text-red-600">
                {errors2.time && errors2.time.message}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="description" className="text-sm font-bold">
                متن
              </label>
              <textarea
                defaultValue={eventInfoEdit?.description}
                id="description"
                {...register2("description")}
                placeholder="note ..."
                className="rounded-lg border-b-2 border-primary-pk p-1 px-4 outline-none"
              ></textarea>
              <span className="pt-1.5 text-sm text-red-600">
                {errors2.description && errors2.description.message}
              </span>
            </div>
            <button
              type="submit"
              className="ms-auto h-12 w-40 rounded-xl bg-primary-y"
            >
              تایید
            </button>
          </form>
        </DetailsModal>
      )}
      {toggleActionModal && (
        <DetailsModal onClose={closeActionModalHandler}>
          {events?.map((item) => (
            <div
              key={item._id}
              className="flex w-full items-center justify-between overflow-auto border-b-2 border-dotted border-b-primary-pk p-5"
            >
              <p className="font-semibold text-violet-800">{item.title}</p>
              <p className="text-sm text-zinc-400">
                {item.date}
                {item.time}
              </p>
              <div className="flex gap-x-2 text-lg">
                <MdEditCalendar
                  onClick={() => editHandler(item)}
                  className="cursor-pointer"
                />
                <RiDeleteBinFill
                  onClick={() => removeEventHandler(item._id)}
                  className="cursor-pointer text-red-500"
                />
              </div>
            </div>
          ))}
        </DetailsModal>
      )}
    </div>
  );
}
