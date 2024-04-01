import AddButton from "../../components/AddButton";
import { useState } from "react";
import DetailsModal from "../../components/DetailsModal";
import TodayEventsBox from "../../components/TodayEventsBox";
import Timeline from "../../components/Timeline";
import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/colors/purple.css";

export default function Calender() {
  const [toggleAddModal, setToggleAddModal] = useState<boolean>(false);

  const openModalHandler = () => {
    setToggleAddModal(true);
  };

  const closeModalHandler = () => {
    setToggleAddModal(false);
  };
  return (
    <div className="">
      <AddButton
        openModalHandler={openModalHandler}
        title={"افزودن رویداد جدید"}
      />
      <div
        className=" w-[calc(100vw-90px)] 
  rounded-xl  px-2 xs:w-[calc(100vw-130px)] xs:p-4"
      >
        <div className="flex flex-col md:flex-row gap-y-8 gap-x-5 lg:gap-x-14">
          <TodayEventsBox />
          <div className="flex-1">
            <Calendar
              className="purple w-full bg-fuchsia-300  shadow-xl shadow-zinc-400"
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
            // onSubmit={handleSubmit1(formSubmitting)}
            className="mt-10 grid w-full grid-cols-1 gap-6 gap-x-24 p-5 xs:grid-cols-2 lg:gap-14 "
          >
            {/* <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-sm font-bold">
                عنوان یادداشت
              </label>
              <input
                id="subject"
                {...register1("subject")}
                type="text"
                placeholder="subject"
                className="rounded-lg border-b-2 border-primary-pk p-1 px-4 outline-none"
              />
              <span className="pt-1.5 text-sm text-red-600">
                {errors1.subject && errors1.subject.message}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="body" className="text-sm font-bold">
                متن یادداشت
              </label>
              <textarea
                id="body"
                {...register1("body")}
                placeholder="note ..."
                className="rounded-lg border-b-2 border-primary-pk p-1 px-4 outline-none"
              ></textarea>
              <span className="pt-1.5 text-sm text-red-600">
                {errors1.body && errors1.body.message}
              </span>
            </div> */}
            <button
              type="submit"
              className="ms-auto h-12 w-40 rounded-xl bg-primary-y"
            >
              تایید
            </button>
          </form>
        </DetailsModal>
      )}
    </div>
  );
}
