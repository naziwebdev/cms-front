import AddButton from "../../components/AddButton";
import FormInput from "../../components/FormInput";
import DetailsModal from "../../components/DetailsModal";
import NoteCard from "../../components/NoteCard";
import { useState } from "react";

export default function Note() {
  const [toggleModal, setToggleModal] = useState<boolean>(false);
  const [toggleEditModal, setToggleEditModal] = useState<boolean>(false);
  const [toggleShowDetail, setToggleShowDetail] = useState<boolean>(false);

  const closeDetailModalHandler = () => {
    setToggleShowDetail(false);
  };

  const toggleDetailModalHandler = () => {
    setToggleShowDetail((prev) => !prev);
  };

  const closeEditModal = () => {
    setToggleEditModal(false);
  };

  const toggleEditModalHandler = () => {
    setToggleEditModal((prev) => !prev);
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
          <NoteCard
            editModal={toggleEditModalHandler}
            detailModal={toggleDetailModalHandler}
          />
          <NoteCard
            editModal={toggleEditModalHandler}
            detailModal={toggleDetailModalHandler}
          />
          <NoteCard
            editModal={toggleEditModalHandler}
            detailModal={toggleDetailModalHandler}
          />
          <NoteCard
            editModal={toggleEditModalHandler}
            detailModal={toggleDetailModalHandler}
          />
          <NoteCard
            editModal={toggleEditModalHandler}
            detailModal={toggleDetailModalHandler}
          />
          <NoteCard
            editModal={toggleEditModalHandler}
            detailModal={toggleDetailModalHandler}
          />
          <NoteCard
            editModal={toggleEditModalHandler}
            detailModal={toggleDetailModalHandler}
          />
          <NoteCard
            editModal={toggleEditModalHandler}
            detailModal={toggleDetailModalHandler}
          />
        </div>

        {/* edit note modal */}
        {toggleEditModal && (
          <DetailsModal onClose={closeEditModal}>
            <h2 className="text-xl font-bold">ویرایش یادداشت</h2>
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
      {/* add new note modal */}
      {toggleModal && (
        <DetailsModal onClose={closeModalHandler}>
          <h2 className="text-xl font-bold">یادداشت جدید</h2>
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

      {/* show detail note modal*/}
      {toggleShowDetail && (
        <DetailsModal onClose={closeDetailModalHandler}>
          <div className="h-[80vh] mt-10 xs:mt-4 overflow-auto text-center rounded-xl border-b-2 border-b-primary-pk bg-lime-200 py-3 px-1 xs:p-3 shadow-xl">
            <div className="flex w-full justify-between">
              <div className="flex flex-col gap-x-3 xs:flex-row xs:items-center">
                <img
                  src="/images/user-04.jpg"
                  alt="avatar"
                  className="h-14 w-14 rounded-full"
                />
                <div className="text-sm">
                  <p className="pb-1 font-semibold">نازنین رستگار</p>
                  <p className="text-zinc-500">1402/11/18</p>
                </div>
              </div>
            </div>
            <div className="w-full">
              <h4 className="font-semobold pt-5 text-lg">عنوان یادداشت</h4>
              <p className="pt-1 text-zinc-500">
                لورم ایپسوم جهت تست متن یادداشت پنل مدیریت فروشگاهی لورم ایپسوم
                جهت تست متن یادداشت پنل مدیریت فروشگاهی
                لورم ایپسوم جهت تست متن یادداشت پنل مدیریت فروشگاهی لورم ایپسوم
                جهت تست متن یادداشت پنل مدیریت فروشگاهی
                لورم ایپسوم جهت تست متن یادداشت پنل مدیریت فروشگاهی لورم ایپسوم
                جهت تست متن یادداشت پنل مدیریت فروشگاهی
                لورم ایپسوم جهت تست متن یادداشت پنل مدیریت فروشگاهی لورم ایپسوم
                جهت تست متن یادداشت پنل مدیریت فروشگاهی
                لورم ایپسوم جهت تست متن یادداشت پنل مدیریت فروشگاهی لورم ایپسوم
                جهت تست متن یادداشت پنل مدیریت فروشگاهی
              </p>
            </div>
          </div>
        </DetailsModal>
      )}
    </div>
  );
}
