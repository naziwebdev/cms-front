import { TiTick } from "react-icons/ti";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { BsChatLeftTextFill } from "react-icons/bs";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { GoXCircleFill } from "react-icons/go";
import { CommentTypes } from "../TypescriptTypes/CommentTpes";
import DetailsModal from "./DetailsModal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ReplyCommentSchema from "../validations/ReplyCommentSchema";
import swal from "sweetalert";
import { useState } from "react";
import { CommentReplyType } from "../TypescriptTypes/CommentTpes";




type CommentPropsTtpes = {
  comment: CommentTypes;
  setAllComments: (value: CommentTypes[]) => void;
};

export default function CommentCard({
  comment,
  setAllComments,
}: CommentPropsTtpes) {
  const [ToggleReplyModal, setToggleReplyModal] = useState<boolean>(false);
  const [commentIDReply,setCommentIDReply] = useState<string>()

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      body: "",
    },
    resolver: yupResolver(ReplyCommentSchema),
  });

  const formSubmitting = async (data: CommentReplyType, event: any) => {
    event.preventDefault();

    const res = await fetch(
      `http://localhost:4000/v1/comments/${commentIDReply}/answer`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDc4NTcyZDdjMjE4YTVkZDY3MTAyYyIsImlhdCI6MTcxMTU2NTE5NSwiZXhwIjoxNzE0MTU3MTk1fQ.20k8OOxivVVwnjcEfdhAd87QbsWF1AA1Kp3M0oA2ak4`,
        },
        body: JSON.stringify({title: data.title, body: data.body }),
      },)

    if (res.status === 201) {
      await res.json();
      swal({
        title: "پاسخ با موفقیت ثبت شد",
        icon: "success",
        buttons: "بستن" as any,
      });
      getComments();
      setToggleReplyModal(false)
    }

    reset();
  };


  const closeModalHandler = () => {
    setToggleReplyModal(false);

  };

  const getComments = async () => {
    const res = await fetch("http://localhost:4000/v1/comments", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDc4NTcyZDdjMjE4YTVkZDY3MTAyYyIsImlhdCI6MTcxMTU2NTE5NSwiZXhwIjoxNzE0MTU3MTk1fQ.20k8OOxivVVwnjcEfdhAd87QbsWF1AA1Kp3M0oA2ak4",
      },
    });
    if (res.status === 200) {
      const data = await res.json();
      setAllComments(data);
    } else {
      console.log(res);
    }
  };

  const accepetCommetHandler = async (commentID: string) => {
    const res = await fetch(
      `http://localhost:4000/v1/comments/${commentID}/accept`,
      {
        method: "PUT",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDc4NTcyZDdjMjE4YTVkZDY3MTAyYyIsImlhdCI6MTcxMTU2NTE5NSwiZXhwIjoxNzE0MTU3MTk1fQ.20k8OOxivVVwnjcEfdhAd87QbsWF1AA1Kp3M0oA2ak4",
        },
      },
    );

    swal({
      title: "از تایید کامنت اطمینان دارید ؟",
      icon: "info",
      buttons: ["خیر", "بله"],
    }).then(async (value) => {
      if (value) {
        if (res.status === 200) {
          await res.json();
          swal({
            title: "کامنت با موفقیت تایید شد",
            icon: "success",
            buttons: "بستن" as any,
          });
          getComments();
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

  const deleteCommentHandler = async (commentID: string) => {
    swal({
      title: "آیا از حذف اطمینان دارید؟",
      icon: "warning",
      buttons: ["خیر", "بله"],
    }).then(async (value) => {
      if (value === true) {
        const res = await fetch(
          `http://localhost:4000/v1/comments/${commentID}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDc4NTcyZDdjMjE4YTVkZDY3MTAyYyIsImlhdCI6MTcxMTU2NTE5NSwiZXhwIjoxNzE0MTU3MTk1fQ.20k8OOxivVVwnjcEfdhAd87QbsWF1AA1Kp3M0oA2ak4`,
            },
          },
        );

        if (res.status === 200) {
          await res.json();
          swal({
            title: "کامنت با موفقیت حذف شد",
            icon: "success",
            buttons: "بستن" as any,
          });
          getComments();
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

  const rejectCommetHandler = async (commentID: string) => {
    const res = await fetch(
      `http://localhost:4000/v1/comments/${commentID}/reject`,
      {
        method: "PUT",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDc4NTcyZDdjMjE4YTVkZDY3MTAyYyIsImlhdCI6MTcxMTU2NTE5NSwiZXhwIjoxNzE0MTU3MTk1fQ.20k8OOxivVVwnjcEfdhAd87QbsWF1AA1Kp3M0oA2ak4",
        },
      },
    );

    swal({
      title: "از رد کردن کامنت اطمینان دارید ؟",
      icon: "info",
      buttons: ["خیر", "بله"],
    }).then(async (value) => {
      if (value) {
        if (res.status === 200) {
          await res.json();
          swal({
            title: "کامنت با موفقیت رد شد",
            icon: "success",
            buttons: "بستن" as any,
          });
          getComments();
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

  const answerCommentHandler = async (commentID: string) => {
    setToggleReplyModal((prev) => !prev);
    setCommentIDReply(commentID)
  };

  return (
    <div
      className={`relative h-auto w-[90%] rounded-3xl border-2 ${comment.isAccept === 1 ? "border-green-400" : "border-fuchsia-500"}  bg-white p-1.5 shadow-lg xs:p-2.5
    md:w-[75%]`}
    >
      <div
        onClick={() => accepetCommetHandler(comment._id)}
        className={`absolute -left-5 top-8 z-10 h-16 w-16 cursor-pointer rounded-full ${comment.isAccept === 1 ? "bg-green-400" : "bg-fuchsia-500"}  text-white sm:-left-12 sm:top-8 sm:h-24 sm:w-24`}
      >
        <TiTick className="absolute left-2 top-1  text-[3rem] text-white sm:text-[5rem]" />
      </div>
      <div className="flex items-center justify-between gap-y-2">
        <div className="flex items-center gap-x-3">
          {comment.user?.avatar ? (
            <img
              src={`http://localhost:4000/users/avatar/${comment.user?.avatar}`}
              alt="avatar"
              className="hidden h-10 w-10 rounded-full object-cover 2xs:flex md:h-14 md:w-14 lg:h-16 lg:w-16"
            />
          ) : (
            <div className="hidden h-10  w-10 rounded-full object-cover 2xs:flex 2xs:items-center 2xs:justify-center 2xs:bg-violet-500 2xs:text-white md:h-14 md:w-14 lg:h-16 lg:w-16">
              {comment.user?.name.slice(0, 2)}
            </div>
          )}
          <div>
            <p className="text-[.7rem] font-semibold text-zinc-800 xs:text-base">
              {comment.user.name}
            </p>
            <p className="pt-1 text-[.7rem] text-sm text-zinc-400 xs:text-base">
              {" "}
              {new Date(comment?.createdAt).toLocaleDateString("fa-IR", {
                year: "numeric",
                month: "numeric",
                day: "numeric",
                calendar: "persian",
              })}
            </p>
          </div>
        </div>
        <h3 className="hidden text-sm font-semibold text-zinc-800 xs:text-lg sm:flex">
          {comment.title}
        </h3>
        <div className="flex self-start text-[.8rem] text-yellow-400 xs:text-xl sm:me-12 sm:self-center pt-1 sm:pt-0">
          {new Array(comment.score).fill(0).map((star) => (
            <FaStar key={crypto.randomUUID()} />
          ))}
          {new Array(5 - comment.score).fill(0).map((star) => (
            <FaRegStar key={crypto.randomUUID()} />
          ))}
        </div>
      </div>
      <h3 className="block font-semibold text-zinc-800 xs:text-lg sm:hidden">
        {comment.title}
      </h3>
      <p className="py-1.5  text-sm text-stone-500 xs:text-base sm:pe-10">
        {comment.body}
      </p>
      <div className="flex  justify-end gap-1.5 xs:gap-2.5 sm:me-10">
        <button
          onClick={() => rejectCommetHandler(comment._id)}
          className="rounded-full py-1.5 text-xl  font-semibold text-primary-pk xs:bg-fuchsia-200 xs:px-2.5 md:px-6"
        >
          <GoXCircleFill />
        </button>
        <button className="rounded-full py-1.5 text-lg font-semibold text-primary-b xs:bg-sky-100 xs:px-2.5 md:px-6">
          <BsChatLeftTextFill
            onClick={() => answerCommentHandler(comment._id)}
          />
        </button>
        <button className="rounded-full py-1.5 text-xl font-semibold text-red-500 xs:bg-red-100 xs:px-2.5 md:px-6">
          <RiDeleteBin5Fill onClick={() => deleteCommentHandler(comment._id)} />
        </button>
      </div>
      {ToggleReplyModal && (
        <DetailsModal onClose={closeModalHandler}>
          <h2 className="text-xl font-bold">پاسخ به کامنت</h2>
          <form
            onSubmit={handleSubmit(formSubmitting)}
            className="mt-10 w-full p-5  "
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="title" className="text-sm font-bold">
                عنوان
              </label>
              <input
                id="title"
                {...register("title")}
                type="text"
                placeholder="title"
                className="rounded-lg border-b-2 border-primary-pk p-1 px-4 outline-none"
              />
              <span className="pt-1.5 text-sm text-red-600">
                {errors.title && errors.title.message}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="body" className="text-sm font-bold">
                متن
              </label>
              <textarea
                id="body"
                {...register("body")}
                placeholder="note ..."
                className="rounded-lg border-b-2 border-primary-pk p-1 px-4 outline-none"
              ></textarea>
              <span className="pt-1.5 text-sm text-red-600">
                {errors.body && errors.body.message}
              </span>
            </div>
            <button
              type="submit"
              className="ms-auto h-12 w-40 rounded-xl bg-primary-y mt-5"
            >
              تایید
            </button>
          </form>
        </DetailsModal>
      )}
    </div>
  );
}
