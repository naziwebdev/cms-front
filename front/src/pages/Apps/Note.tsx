import AddButton from "../../components/AddButton";
import DetailsModal from "../../components/DetailsModal";
import NoteCard from "../../components/NoteCard";
import { useState, useEffect } from "react";
import { NoteTypes } from "../../TypescriptTypes/NoteTypes";
import { NoteFormType } from "../../TypescriptTypes/NoteTypes";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import NoteSchema from "../../validations/NoteSchema";
import swal from "sweetalert";

export default function Note() {
  const [toggleModal, setToggleModal] = useState<boolean>(false);

 
  const [allNote, setAllNote] = useState<NoteTypes[]>([]);

  const {
    register: register1,
    reset: reset1,
    handleSubmit: handleSubmit1,
    formState: { errors: errors1 },
  } = useForm({
    defaultValues: {
      subject: "",
      body: "",
    },
    resolver: yupResolver(NoteSchema),
  });



  const getNotes = async () => {
    const res = await fetch("http://localhost:4000/v1/notes", {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDc4NTcyZDdjMjE4YTVkZDY3MTAyYyIsImlhdCI6MTcxMTU2NTE5NSwiZXhwIjoxNzE0MTU3MTk1fQ.20k8OOxivVVwnjcEfdhAd87QbsWF1AA1Kp3M0oA2ak4`,
      },
    });
    const data = await res.json();
    setAllNote(data);
  };

  useEffect(() => {
    getNotes();
  }, []);

  const formSubmitting = async (data: NoteFormType, event: any) => {
    event.preventDefault();

    const res = await fetch("http://localhost:4000/v1/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDc4NTcyZDdjMjE4YTVkZDY3MTAyYyIsImlhdCI6MTcwODYyMzIxOSwiZXhwIjoxNzExMjE1MjE5fQ.b32-Qd9FPnAZ6je0qlZ61EJPeBqHf3BmYMXtNaTWhlQ`,
      },
      body: JSON.stringify({ subject: data.subject, body: data.body }),
    });

    if (res.status === 201) {
      await res.json();
      swal({
        title: "یااداشت با موفقیت اضافه شد",
        icon: "success",
        buttons: "بستن" as any,
      });
      getNotes();
      setToggleModal(false);
    }

    reset1();
  };



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
        title={"افزودن یادداشت جدید"}
      />
      <div
        className="] h-[70vh] w-[calc(100vw-90px)] overflow-x-auto
    rounded-xl  bg-white  px-2 py-4 xs:w-[calc(100vw-130px)] xs:p-4 xl:h-[64vh]"
      >
        <h2 className=" text-xl ">یادداشت ها</h2>
        <div className="grid grid-cols-1 gap-5 pt-4 md:grid-cols-2 lg:grid-cols-3">
          {allNote?.map((note) => (
            <NoteCard
              key={note._id}
              data={note}
              setAllNote={setAllNote}
            />
          ))}
        </div>
      </div>
      {/* add new note modal */}
      {toggleModal && (
        <DetailsModal onClose={closeModalHandler}>
          <h2 className="text-xl font-bold">یادداشت جدید</h2>
          <form
            onSubmit={handleSubmit1(formSubmitting)}
            className="mt-10 grid w-full grid-cols-1 gap-6 gap-x-24 p-5 xs:grid-cols-2 lg:gap-14 "
          >
            <div className="flex flex-col gap-2">
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
    </div>
  );
}
