import { RiDeleteBinLine } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { NoteTypes } from "../TypescriptTypes/NoteTypes";
import { useState } from "react";
import DetailsModal from "./DetailsModal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import NoteSchema from "../validations/NoteSchema";
import { NoteFormType } from "../TypescriptTypes/NoteTypes";
import swal from "sweetalert";

interface ModalType {
  data: NoteTypes;
  setAllNote: (notes: NoteTypes[]) => void;
}

export default function NoteCard({ data, setAllNote }: ModalType) {
  const [toggleEditBtn, setToggleEditBtn] = useState<boolean>(false);
  const [toggleEditModal, setToggleEditModal] = useState<boolean>(false);
  const [toggleShowDetail, setToggleShowDetail] = useState<boolean>(false);
  const [noteDetailInfo, setNoteDetailInfo] = useState<NoteTypes | any>();
  const [noteEditInfo, setNoteEditInfo] = useState<NoteTypes>();

  const detailModalHandler = (data: NoteTypes) => {
    setToggleShowDetail((prev) => !prev);
    setNoteDetailInfo(data);
  };

  const {
    register: register2,
    reset: reset2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
  } = useForm({
    defaultValues: {
      subject: noteEditInfo?.subject,
      body: noteEditInfo?.body,
    } as NoteFormType,
    resolver: yupResolver(NoteSchema),
  });

  const closeEditModal = () => {
    setToggleEditModal(false);
  };

  const toggleEditModalHandler = () => {
    setToggleEditModal((prev) => !prev);
  };

  const getNotes = async () => {
    const res = await fetch("http://localhost:4000/v1/notes", {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OWVkYjE5YjQxZDE0NmQ3ZWY3N2NkMyIsImlhdCI6MTcxNTk2NjUyNywiZXhwIjoxNzE4NTU4NTI3fQ.oBGAf4B6F8rimiZnEVTkAj-OvWFzYA0jYtkOnIyNgsY`,
      },
    });
    const notes = await res.json();
    setAllNote(notes);
  };

  const toggleEditBtnHandler = (data: NoteTypes) => {
    setToggleEditBtn((prev) => !prev);
    setNoteEditInfo(data);
  };

  const formEditSubmitting = async (data: NoteFormType, event: any) => {
    event.preventDefault();

    const res = await fetch(
      `http://localhost:4000/v1/notes/${noteEditInfo?._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OWVkYjE5YjQxZDE0NmQ3ZWY3N2NkMyIsImlhdCI6MTcxNTk2NjUyNywiZXhwIjoxNzE4NTU4NTI3fQ.oBGAf4B6F8rimiZnEVTkAj-OvWFzYA0jYtkOnIyNgsY`,
        },
        body: JSON.stringify({ subject: data.subject, body: data.body }),
      },
    );

    if (res.status === 200) {
      await res.json();
      swal({
        title: "یادداشت با موفقیت ویرایش شد",
        icon: "success",
        buttons: "بستن" as any,
      });
      getNotes();
      setToggleEditModal(false);
      setToggleEditBtn(false);
    }else{
      swal({
        title: "عملیات با شکست مواجه شد",
        icon: "error",
        buttons: "بستن" as any,
      });
    }

    reset2();
  };

  const removeNoteHandler = async (noteID: string) => {
    swal({
      title: "آیا از حذف اطمینان دارید؟",
      icon: "warning",
      buttons: ["خیر", "بله"],
    }).then(async (value) => {
      if (value === true) {
        const res = await fetch(`http://localhost:4000/v1/notes/${noteID}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OWVkYjE5YjQxZDE0NmQ3ZWY3N2NkMyIsImlhdCI6MTcxNTk2NjUyNywiZXhwIjoxNzE4NTU4NTI3fQ.oBGAf4B6F8rimiZnEVTkAj-OvWFzYA0jYtkOnIyNgsY`,
          },
        });

        if (res.status === 200) {
          await res.json();
          swal({
            title: "یادداشت با موفقیت حذف شد",
            icon: "success",
            buttons: "بستن" as any,
          });
          getNotes();
        }
      }
    });
  };

  const toggleStarHadnler = async (noteID: string) => {
    const res = await fetch(`http://localhost:4000/v1/notes/star/${noteID}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OWVkYjE5YjQxZDE0NmQ3ZWY3N2NkMyIsImlhdCI6MTcxNTk2NjUyNywiZXhwIjoxNzE4NTU4NTI3fQ.oBGAf4B6F8rimiZnEVTkAj-OvWFzYA0jYtkOnIyNgsY`,
      },
    });

    if (res.status === 200) {
      await res.json();
      swal({
        title: "عملیات با موفقیت انجام شد",
        icon: "success",
        buttons: "بستن" as any,
      });
      getNotes();
    }
  };

  return (
    <div className="h-auto rounded-xl border-b-2 border-b-primary-pk bg-lime-200 p-3 shadow-xl">
      <div className="flex w-full justify-between">
        <div className="flex flex-col gap-x-3 xs:flex-row xs:items-center">
          <img
            src="/images/user-04.jpg"
            alt="avatar"
            className="h-14 w-14 rounded-full"
          />
          <div className="text-sm">
            <p className="pb-1 font-semibold">{data?.user?.name}</p>
            <p className="text-zinc-500">
              {new Date(data?.createdAt).toLocaleDateString("fa-IR", {
                year: "numeric",
                month: "numeric",
                day: "numeric",
                calendar: "persian",
              })}
            </p>
          </div>
        </div>
        <div className="relative">
          <BsThreeDotsVertical
            className="relative cursor-pointer pt-1.5 text-3xl"
            onClick={() => toggleEditBtnHandler(data)}
          />

          {toggleEditBtn && (
            <div
              className="absolute -right-7 bottom-8 cursor-pointer rounded-md bg-white px-2.5 py-1
            text-sm xs:-bottom-1.5"
              onClick={toggleEditModalHandler}
            >
              ویرایش
            </div>
          )}
        </div>
      </div>
      <div className="w-full">
        <h4 className="font-semobold pt-5 text-lg">{data?.subject}</h4>
        <p className="truncate pt-1 text-zinc-500">{data?.body}</p>
      </div>
      <div className="flex items-center justify-between px-2 pt-10">
        <FaEye
          className="cursor-pointer text-xl text-primary-pk"
          onClick={() => detailModalHandler(data)}
        />
        <div className="flex items-center gap-x-4 text-xl font-bold">
          {data?.haveStar === false ? (
            <FaRegStar
              onClick={() => toggleStarHadnler(data?._id)}
              className="cursor-pointer text-primary-y"
            />
          ) : (
            <FaStar
              onClick={() => toggleStarHadnler(data?._id)}
              className="cursor-pointer text-primary-y"
            />
          )}

          <RiDeleteBinLine
            onClick={() => removeNoteHandler(data?._id)}
            className="cursor-pointer"
          />
        </div>
      </div>
      {toggleShowDetail && (
        <DetailsModal onClose={() => setToggleShowDetail(false)}>
          <div className="mt-10 h-[80vh] w-full overflow-auto rounded-xl border-b-2 border-b-primary-pk bg-lime-200 px-1 py-3 text-start shadow-xl xs:mt-4 xs:p-3">
            <div className="flex w-full justify-between">
              <div className="flex flex-col gap-x-3 xs:flex-row xs:items-center">
                <img
                  src="/images/user-04.jpg"
                  alt="avatar"
                  className="h-14 w-14 rounded-full"
                />
                <div className="text-sm">
                  <p className="pb-1 font-semibold">
                    {noteDetailInfo?.user.name}
                  </p>
                  <p className="text-zinc-500">
                    {new Date(noteDetailInfo?.createdAt).toLocaleDateString(
                      "fa-IR",
                      {
                        year: "numeric",
                        month: "numeric",
                        day: "numeric",
                        calendar: "persian",
                      },
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full">
              <h4 className="font-semobold pt-5 text-lg">
                {noteDetailInfo?.subject}
              </h4>
              <p className="pt-1 text-zinc-500">{noteDetailInfo?.body}</p>
            </div>
          </div>
        </DetailsModal>
      )}
      {/* edit note modal */}
      {toggleEditModal && (
        <DetailsModal onClose={closeEditModal}>
          <h2 className="text-xl font-bold">ویرایش یادداشت</h2>
          <form
            onSubmit={handleSubmit2(formEditSubmitting)}
            className="mt-10 grid w-full grid-cols-1 gap-6 gap-x-24 p-5 xs:grid-cols-2 lg:gap-14 "
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-sm font-bold">
                عنوان یادداشت
              </label>
              <input
                defaultValue={noteEditInfo?.subject}
                id="subject"
                {...register2("subject")}
                type="text"
                placeholder="subject"
                className="rounded-lg border-b-2 border-primary-pk p-1 px-4 outline-none"
              />
              <span className="pt-1.5 text-sm text-red-600">
                {errors2.subject && errors2.subject.message}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="body" className="text-sm font-bold">
                متن یادداشت
              </label>
              <textarea
                defaultValue={noteEditInfo?.body}
                id="body"
                {...register2("body")}
                placeholder="note ..."
                className="rounded-lg border-b-2 border-primary-pk p-1 px-4 outline-none"
              ></textarea>
              <span className="pt-1.5 text-sm text-red-600">
                {errors2.body && errors2.body.message}
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
