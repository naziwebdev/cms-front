import AddButton from "../../components/AddButton";
import FormInput from "../../components/FormInput";
import DetailsModal from "../../components/DetailsModal";
import NoteCard from "../../components/NoteCard";
import { useState } from "react";

export default function Note() {
  const [toggleModal, setToggleModal] = useState<boolean>(false);

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
        className="] h-[70vh] w-[calc(100vw-90px)] rounded-xl
    bg-white  xs:w-[calc(100vw-130px)]  xl:h-[64vh] px-2 py-4 xs:p-4 overflow-x-auto"
      >
        <h2 className=" text-xl ">یادداشت ها</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-4">
          <NoteCard />
          <NoteCard/>
          <NoteCard />
          <NoteCard/>
          <NoteCard />
          <NoteCard/>
          <NoteCard />
          <NoteCard/>
        </div>
      </div>
      {toggleModal && (
        <DetailsModal onClose={closeModalHandler}>
          <h2 className="text-xl font-bold">مشخصات کاربر جدید</h2>
          <form className="mt-10 grid w-full grid-cols-1 gap-6 gap-x-24 p-5 xs:grid-cols-2 lg:gap-14 ">
            <FormInput typeInput="text" titleFa="عنوان" titleEn="subject" />
            <FormInput typeInput="text" titleFa="متن" titleEn="text" />
            <div className="flex flex-col gap-2">
              <label htmlFor={"color"} className="text-sm font-bold">
                رنگ
              </label>
              <input
                id={"color"}
                type="color"
                placeholder="color"
                className="h-12 w-full bg-transparent  outline-none"
              />
            </div>
          </form>
          <button className="ms-auto h-12 w-40 rounded-xl bg-primary-y">
            تایید
          </button>
        </DetailsModal>
      )}
    </div>
  );
}
