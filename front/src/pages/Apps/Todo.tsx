import AddButton from "../../components/AddButton";
import { useState } from "react";
import TodoCard from "../../components/TodoCard";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";

export default function Todo() {
  const [toggleAddModal, setToggleAddModal] = useState<boolean>(false);

  const openModalHandler = () => {
    setToggleAddModal(true);
  };

  const closeModalHandler = () => {
    setToggleAddModal(false);
  };

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
        {/* <h2 className=" text-xl ">یادداشت ها</h2> */}
        <div className="flex flex-col items-center gap-y-3 ">
          <TodoCard />
          <TodoCard/>
          <TodoCard/>
          <TodoCard/>
        </div>
        <div className="flex justify-center pt-8 ">
          <ul className="flex justify-center gap-x-1">
            <button className="flex w-10 items-center justify-center rounded-xl bg-zinc-800 py-1 text-white sm:w-14">
              <MdNavigateNext className="text-2xl" />
            </button>
            <button className="flex w-10 items-center justify-center rounded-xl bg-zinc-300 py-1 text-white hover:bg-black sm:w-14">
              1
            </button>
            <button className="flex w-10 items-center justify-center rounded-xl bg-pink-200 py-1 text-white hover:bg-black sm:w-14">
              2
            </button>
            <button className="flex w-10 items-center justify-center rounded-xl bg-zinc-800 py-1 text-white sm:w-14">
              <MdNavigateBefore className="text-2xl" />
            </button>
          </ul>
        </div>
      </div>
      </div>
  );
}
