import AddButton from "../../components/AddButton";
import { useState, useEffect } from "react";
import TodoCard from "../../components/TodoCard";
import DetailsModal from "../../components/DetailsModal";
import { TodoTypes } from "../../TypescriptTypes/TodoTypes";
import Pagination from "../../components/Pagination";
import TodoSchema from "../../validations/TodoSchema";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/colors/purple.css";
import swal from "sweetalert";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TodoFormTypes } from "../../TypescriptTypes/TodoTypes";

export default function Todo() {
  const [toggleAddModal, setToggleAddModal] = useState<boolean>(false);
  const [allTodo, setAllTodo] = useState<TodoTypes[]>([]);
  const [todoShowPage, setTodoShowPage] = useState<TodoTypes[]>([]);
 

  const {
    register: register1,
    reset: reset1,
    control: control1,
    handleSubmit: handleSubmit1,
    formState: { errors: errors1 },
  } = useForm({
    defaultValues: {
      title: "",
      date:""
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

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className=" xl:h-[calc(100vh-160px)]">
      <AddButton
        openModalHandler={openModalHandler}
        title={"افزودن تودو جدید"}
      />
      <div
        className="h-[70vh] w-[calc(100vw-90px)] 
      rounded-xl  px-2 xs:w-[calc(100vw-130px)] xs:p-4 xl:h-[64vh]"
      >
        <div className="flex flex-col items-center gap-y-3 ">
         {todoShowPage?.map(todo => (
          <TodoCard key={todo._id} todo={todo} setAllTodo={setAllTodo} />
         ))}
        </div>
        <Pagination
          items={allTodo}
          itemsCount={4}
          pathname={"/apps/todo"}
          setShowItems={setTodoShowPage}
        />
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
