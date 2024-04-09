import { TiTick } from "react-icons/ti";
import { useState, useEffect } from "react";
import { TodoTypes } from "../TypescriptTypes/TodoTypes";
import swal from "sweetalert";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TodoFormTypes } from "../TypescriptTypes/TodoTypes";
import TodoSchema from "../validations/TodoSchema";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/colors/purple.css";
import DetailsModal from "./DetailsModal";
import { FaPlus } from "react-icons/fa";

export default function TodoListBox() {
  const [allTodo, setAllTodo] = useState<TodoTypes[]>([]);
  const [toggleAddModal, setToggleAddModal] = useState<boolean>(false);

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
    },
    resolver: yupResolver(TodoSchema) as any,
  });

  const formSubmitting = async (data: TodoFormTypes, event: any) => {
    event.preventDefault();
    const res = await fetch("http://localhost:4000/v1/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDc4NTcyZDdjMjE4YTVkZDY3MTAyYyIsImlhdCI6MTcxMTU2NTE5NSwiZXhwIjoxNzE0MTU3MTk1fQ.20k8OOxivVVwnjcEfdhAd87QbsWF1AA1Kp3M0oA2ak4`,
      },
      body: JSON.stringify({
        title: data.title,
        date: data.date,
      }),
    });

    if (res.status === 201) {
      await res.json();
      swal({
        title: "تودو با موفقیت اضافه شد",
        icon: "success",
        buttons: "بستن" as any,
      });
      getTodos();
      setToggleAddModal(false);
    } else {
      swal({
        title: "عملیات با شکست مواجه شد",
        icon: "error",
        buttons: "بستن" as any,
      });
    }

    reset1();
  };

  const openModalHandler = () => {
    setToggleAddModal(true);
  };

  const closeModalHandler = () => {
    setToggleAddModal(false);
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

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className=" shadow-xl shadow-zinc-300">
      <div className="rounded-t-lg bg-fuchsia-300 p-3 text-center text-xl font-semibold text-white">
        تودو لیست
      </div>
      <div className="flex bg-todo h-[350px] flex-col items-center overflow-y-auto bg-white  p-3 xs:p-5">
        <div className="w-full flex">
          <input
            type="text"
            placeholder="اضافه کردن تودو ..."
            className="mb-8 w-2/3 xs:flex-1 rounded-s-lg
         bg-zinc-200 p-2 xs:px-4 outline-none placeholder:text-xs xs:placeholder:text-base
          placeholder:text-white"
          />
          <button
            onClick={openModalHandler}
            className="flex h-10 w-1/3 xs:w-14 items-center justify-center rounded-e-lg bg-primary-p"
          >
            <FaPlus className="text-white" />
          </button>
        </div>
        <ul className="self-start [&>*]:pt-2">
          {allTodo.map((todo) => (
            <li
              key={todo._id}
              className={`${todo.isComplete === true && "line-through decoration-primary-b"} flex items-center gap-x-3`}
            >
              <span onClick={() => tickTodoHandler(todo._id)}
              className="relative h-5 w-5 cursor-pointer bg-fuchsia-200">
              {todo.isComplete === true && (
            <TiTick className="absolute top-0 left-0 text-2xl text-primary-b" />
          )}
              </span>
              <p className="text-white">{todo.title}</p>
            </li>
          ))}
        </ul>
      </div>
      {toggleAddModal && (
        <DetailsModal onClose={closeModalHandler}>
          <h2 className="text-xl font-bold">ایجاد تودو جدید</h2>
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
