import { TiTick } from "react-icons/ti";
import { MdDateRange } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdEditSquare } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";
import { TodoTypes } from "../TypescriptTypes/TodoTypes";
import swal from "sweetalert";
import DetailsModal from "./DetailsModal";
import { TodoFormTypes } from "../TypescriptTypes/TodoTypes";
import TodoSchema from "../validations/TodoSchema";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/colors/purple.css";

type TodoPropsTypes = {
  todo: TodoTypes;
  setAllTodo: (value: TodoTypes[]) => void;
};

export default function TodoCard({ todo, setAllTodo }: TodoPropsTypes) {
  const [toggleActions, setToggleActions] = useState<boolean>(false);
  const [todoInfoEdit, setTodoInfoEdit] = useState<TodoTypes>();
  const [toggleEditModal, setToggleEditModal] = useState<boolean>(false);

  const {
    register: register2,
    reset: reset2,
    control: control2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
  } = useForm({
    defaultValues: {
      title: todoInfoEdit?.title,
      date: todoInfoEdit?.date,
    } as TodoFormTypes,
    resolver: yupResolver(TodoSchema) as any,
  });

  const formEditSubmitting = async (data: TodoFormTypes, event: any) => {
    event.preventDefault();
    const res = await fetch(
      `http://localhost:4000/v1/todos/${todoInfoEdit?._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDc4NTcyZDdjMjE4YTVkZDY3MTAyYyIsImlhdCI6MTcxMTU2NTE5NSwiZXhwIjoxNzE0MTU3MTk1fQ.20k8OOxivVVwnjcEfdhAd87QbsWF1AA1Kp3M0oA2ak4`,
        },
        body: JSON.stringify({
          title: data.title,
          date: data.date,
        }),
      },
    );

    if (res.status === 200) {
      await res.json();
      swal({
        title: "تودو با موفقیت ویرایش شد",
        icon: "success",
        buttons: "بستن" as any,
      });
      getTodos();
      setToggleEditModal(false);
    } else {
      swal({
        title: "عملیات با شکست مواجه شد",
        icon: "error",
        buttons: "بستن" as any,
      });
    }

    reset2();
  };

  const editTodoHandler = (todoInfo: TodoTypes) => {
    setTodoInfoEdit(todoInfo);
    setToggleEditModal(true);
  };

  const removeTodoHandler = async (todoID: string) => {
    swal({
      title: "آیا از حذف اطمینان دارید؟",
      icon: "warning",
      buttons: ["خیر", "بله"],
    }).then(async (value) => {
      if (value === true) {
        const res = await fetch(`http://localhost:4000/v1/todos/${todoID}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDc4NTcyZDdjMjE4YTVkZDY3MTAyYyIsImlhdCI6MTcxMTU2NTE5NSwiZXhwIjoxNzE0MTU3MTk1fQ.20k8OOxivVVwnjcEfdhAd87QbsWF1AA1Kp3M0oA2ak4`,
          },
        });

        if (res.status === 200) {
          await res.json();
          swal({
            title: "تودو با موفقیت حذف شد",
            icon: "success",
            buttons: "بستن" as any,
          });
          getTodos();
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

  const closeModalEditHandler = () => {
    setToggleEditModal(false);
    window.location.reload();
  };

  const getTodos = async () => {
    const res = await fetch("http://localhost:4000/v1/todos", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDc4NTcyZDdjMjE4YTVkZDY3MTAyYyIsImlhdCI6MTcxMTU2NTE5NSwiZXhwIjoxNzE0MTU3MTk1fQ.20k8OOxivVVwnjcEfdhAd87QbsWF1AA1Kp3M0oA2ak4",
      },
    });
    if (res.status === 200) {
      const data = await res.json();
      setAllTodo(data);
    } else {
      console.log(res);
    }
  };

  const tickTodoHandler = async (todoID: string) => {
    const res = await fetch(`http://localhost:4000/v1/todos/${todoID}/do`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDc4NTcyZDdjMjE4YTVkZDY3MTAyYyIsImlhdCI6MTcxMTU2NTE5NSwiZXhwIjoxNzE0MTU3MTk1fQ.20k8OOxivVVwnjcEfdhAd87QbsWF1AA1Kp3M0oA2ak4`,
      },
    });

    if (res.status === 200) {
      getTodos();
    }
  };

  const toggleStarHadnler = async (todoID: string) => {
    const res = await fetch(`http://localhost:4000/v1/todos/star/${todoID}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDc4NTcyZDdjMjE4YTVkZDY3MTAyYyIsImlhdCI6MTcxMTU2NTE5NSwiZXhwIjoxNzE0MTU3MTk1fQ.20k8OOxivVVwnjcEfdhAd87QbsWF1AA1Kp3M0oA2ak4`,
      },
    });

    if (res.status === 200) {
      await res.json();
      swal({
        title: "عملیات با موفقیت انجام شد",
        icon: "success",
        buttons: "بستن" as any,
      });
      getTodos();
    }
  };

  return (
    <div
      className={`${todo.isComplete === true ? "bg-indigo-200 line-through" : "bg-white"} rounded-3x
       relative flex h-auto w-full flex-col justify-between
        p-4 shadow-xl xs:w-[90%] xs:flex-row xs:items-center xs:px-6 
    md:w-[75%]`}
    >
      <div className="absolute right-0 top-0 h-full w-2 rounded-br-3xl rounded-tr-3xl bg-pink-600"></div>
      <div className="flex items-center">
        <button
          className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border-2 
      border-pink-500 bg-white sm:h-8 sm:w-8"
          onClick={() => tickTodoHandler(todo._id)}
        >
          {todo.isComplete === true && (
            <TiTick className="text-7xl text-primary-p" />
          )}
        </button>
        <div className="ps-2 xs:ps-5">
          <p
            className={`${todo.isComplete === true && "text-zinc-600"} pb-2 text-sm font-bold xs:pb-4 sm:text-base`}
          >
            {todo.title}
          </p>
          <p className="flex gap-x-1.5 text-[.8rem] text-zinc-600 sm:text-[.95rem]">
            {todo.date}{" "}
            <MdDateRange className="-order-1 text-base xs:text-xl" />
          </p>
        </div>
      </div>
      <div className="flex items-center  gap-0.5 self-end text-base xs:gap-x-2 xs:self-center xs:text-2xl">
        {todo?.haveStar === false ? (
          <FaRegStar
            onClick={() => toggleStarHadnler(todo?._id)}
            className="cursor-pointer text-primary-y"
          />
        ) : (
          <FaStar
            onClick={() => toggleStarHadnler(todo?._id)}
            className="cursor-pointer text-primary-y"
          />
        )}
        <BsThreeDotsVertical
          className="cursor-pointer"
          onClick={() => setToggleActions((prev) => !prev)}
        />
        {toggleActions && (
          <div className="flex items-center gap-0.5 rounded-lg bg-white p-1 text-base xs:gap-2 xs:p-1.5 xs:text-2xl">
            <MdEditSquare
              onClick={() => editTodoHandler(todo)}
              className="cursor-pointer  text-primary-p"
            />
            <RiDeleteBin6Fill
              onClick={() => removeTodoHandler(todo._id)}
              className="cursor-pointer  text-red-500"
            />
          </div>
        )}
      </div>
      {toggleEditModal && (
        <DetailsModal onClose={closeModalEditHandler}>
          <h2 className="text-xl font-bold">ایجاد هزینه جدید</h2>
          <form
            onSubmit={handleSubmit2(formEditSubmitting)}
            className="mt-10 grid w-full grid-cols-1 gap-6 gap-x-24 p-5 xs:grid-cols-2 lg:gap-14 "
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="title" className="text-sm font-bold">
                عنوان هزینه
              </label>
              <input
                defaultValue={todoInfoEdit?.title}
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
                defaultValue={todoInfoEdit?.date}
                control={control2}
                name="date"
                rules={{ required: true }} //optional
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
