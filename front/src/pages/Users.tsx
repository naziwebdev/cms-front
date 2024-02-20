import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdEditSquare } from "react-icons/md";
import { MdAppBlocking } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";

import AddButton from "../components/AddButton";
import { useState, useEffect } from "react";
import DetailsModal from "../components/DetailsModal";
import { UsersTypes } from "../TypescriptTypes/UserTypes";
import Pagination from "../components/Pagination";

export default function Users() {
  const [toggleAddModal, setToggleAddModal] = useState<boolean>(false);
  const [allUser, setAllUser] = useState<UsersTypes[]>([]);
  const [usersShowPage,setUsersShowPage] = useState<UsersTypes[]>([])

  const getUsers = async () => {
    const res = await fetch("http://localhost:4000/v1/users");
    const data = await res.json();
    setAllUser(data);
  };

  console.log(allUser);

  useEffect(() => {
    getUsers();
  }, []);

  const openModalHandler = () => {
    setToggleAddModal(true);
  };

  const closeModalHandler = () => {
    setToggleAddModal(false);
  };

  return (
    <div className="">
      <AddButton
        openModalHandler={openModalHandler}
        title={"افزودن کاربر جدید"}
      />

      <div
        className="] w-[calc(100vw-90px)] overflow-x-auto bg-transparent
      xs:w-[calc(100vw-130px)] mt-10"
      >
        <h2 className="pb-4 text-xl ">کاربران</h2>
        <table className="w-full text-sm shadow-2xl md:text-base">
          <thead className="bg-pink-100">
            <tr className="border-b-[1.5px] border-zinc-200">
              <th className="min-w-[240px] py-3">کاربر</th>
              <th className="min-w-[100px]">نام کاربری</th>
              <th className="min-w-[100px]">شماره تماس</th>
              <th className="min-w-[100px]">نقش</th>
              <th className="min-w-[50px]">ویرایش</th>
              <th className="min-w-[50px]">حذف</th>
              <th className="min-w-[50px]">تغییر نقش</th>
              <th className="min-w-[50px]">بن</th>
            </tr>
          </thead>
          <tbody className="">
            {usersShowPage?.map((user) => (
              <tr
                key={user?._id}
                className="border-y-[10px] border-neutral-100 bg-white text-center"
              >
                <td className="p-1.5">
                  <div className="flex items-center justify-around ">
                    {user?.avatar ? (
                      <img
                        src={`http://localhost:4000/users/avatar/${user?.avatar}`}
                        alt="avatar"
                        className=" h-12 w-12 rounded-full"
                      />
                    ) : (
                      <div className="flex justify-center items-center h-12 w-12 bg-lime-500 text-white font-semi-bold rounded-full">{user?.name.slice(0,2)}</div>
                    )}

                    <div className=" flex flex-col  gap-y-1.5 text-sm">
                      <p>{user?.name}</p>
                      <p className="text-sm text-zinc-500">{user?.email}</p>
                    </div>
                  </div>
                </td>
                <td>
                  {user?.username}
                  <span className="font-bold text-violet-500">@</span>
                </td>
                <td>{user?.phone}</td>
                <td>
                  <span className="rounded-full bg-fuchsia-200  px-6 py-1 text-sm font-semibold text-primary-pk">
                    {user?.role === "ADMIN" ? "ادمین" : "کاربر"}
                  </span>
                </td>
                <td>
                  <button className="">
                    <MdEditSquare className="text-xl text-primary-b" />
                  </button>
                </td>
                <td>
                  <button className="">
                    <RiDeleteBin6Fill className="text-xl text-primary-pk" />
                  </button>
                </td>
                <td>
                  <button className="">
                    <GrUserAdmin className="text-xl  text-primary-p" />
                  </button>
                </td>
                <td>
                  <button className="">
                    <MdAppBlocking className="text-xl  text-primary-y" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>  
      </div>
      <Pagination items={allUser} itemsCount={4} 
        pathname={'/users'}  setShowItems={setUsersShowPage} />
      {toggleAddModal && (
        <DetailsModal onClose={closeModalHandler}>
          <h2 className="text-xl font-bold">مشخصات کاربر جدید</h2>

          <button className="ms-auto h-12 w-40 rounded-xl bg-primary-y">
            تایید
          </button>
        </DetailsModal>
      )}
    </div>
  );
}
