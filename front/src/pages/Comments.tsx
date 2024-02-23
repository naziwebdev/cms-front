import React from "react";
import CommentCard from "../components/CommentCard";
import AddButton from "../components/AddButton";
import { useState } from "react";

export default function Comments() {
  const [toggleAddModal, setToggleAddModal] = useState<boolean>(false);

  const openModalHandler = () => {
    setToggleAddModal(true);
  };

  const closeModalHandler = () => {
    setToggleAddModal(false);
  };

  return (
    <div className="xl:h-[calc(100vh-160px)]">
      <div
        className="h-[70vh] w-[calc(100vw-90px)] 
    rounded-xl  px-2 xs:w-[calc(100vw-130px)] xs:p-4 xl:h-[64vh]"
      >
        {/* <h1 className="px-4">لیست کامنت ها</h1> */}
        <div className="flex flex-col items-center gap-y-1 md:gap-y-6 2xl:gap-y-2 ">
          <CommentCard />
          <CommentCard />
          <CommentCard />
        </div>
        <div className="flex justify-center pt-2.5 xs:pt-8  2xl:pt-8 ">
          <ul className="flex justify-center gap-x-5 ">
            <button className="flex w-10 items-center justify-center rounded-full bg-zinc-300 py-1 text-white hover:bg-black sm:w-16">
             1
            </button>
            <button className="flex w-10 items-center justify-center rounded-full bg-pink-200 py-1 text-white hover:bg-black sm:w-16">
             2
            </button>
            <button className="flex w-10 items-center justify-center rounded-full bg-pink-200 py-1 text-white hover:bg-black sm:w-16">
             3
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
}
