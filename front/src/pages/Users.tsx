import UserTable  from "../components/UserTable";
import { useForm, Controller } from "react-hook-form";
import UserSchema from "../validations/UserSchema";
import AddButton from "../components/AddButton";
import { useState, useEffect } from "react";
import DetailsModal from "../components/DetailsModal";
import { UsersTypes } from "../TypescriptTypes/UserTypes";
import { UserFormTypes } from "../TypescriptTypes/UserTypes";
import { yupResolver } from "@hookform/resolvers/yup";
import swal from "sweetalert";
import Pagination from "../components/Pagination";


export default function Users() {
  const [toggleAddModal, setToggleAddModal] = useState<boolean>(false);
  const [allUser, setAllUser] = useState<UsersTypes[]>([]);
  const [usersShowPage, setUsersShowPage] = useState<UsersTypes[]>([]);


  const {
    register: register1,
    reset: reset1,
    control: control1,
    handleSubmit: handleSubmit1,
    formState: { errors: errors1 },
  } = useForm({
    defaultValues: {
      avatar: "",
      name: "",
      username: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword:""
    },
    resolver: yupResolver(UserSchema),
  });

 

  const getUsers = async () => {
    const res = await fetch("http://localhost:4000/v1/users");
    const data = await res.json();
    setAllUser(data);
  };

  useEffect(() => {
    getUsers();
  }, []);


  const formSubmitting = (data:UserFormTypes,event:any) => {
    event.preventDefault()
    let formData = new FormData();

    formData.append("avatar", data.avatar);
    formData.append("name", data.name);
    formData.append("username", data.username);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("password",data.password)
    formData.append("confirmPassword",data.confirmPassword)

    fetch("http://localhost:4000/v1/auth/register", {
      method: "POST",
      body: formData,
    }).then((res) => {
      if (res.status === 201) {
        res.json();
        swal({
          title: "کاربر با موفقیت افزوده شد",
          icon: "success",
          buttons: "بستن" as any,
        });
        getUsers();
        setToggleAddModal(false);
      }else{
        swal({
          title: "عملیات با شکست مواجه شد",
          icon: "error",
          buttons: "بستن" as any,
        });
      }
    });

    reset1();
  }



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
        className=" mt-10 w-[calc(100vw-90px)] overflow-x-auto
      bg-transparent xs:w-[calc(100vw-130px)] shadow-lg shadow-zinc-200"
      >
          <h2 className="pb-4 text-xl ">لیست کاربران</h2>
        <UserTable data={usersShowPage} />
      </div>
      <Pagination
        items={allUser}
        itemsCount={4}
        pathname={"/users"}
        setShowItems={setUsersShowPage}
      />
      {toggleAddModal && (
        <DetailsModal onClose={closeModalHandler}>
          <h2 className="text-xl font-bold">مشخصات کاربر جدید</h2>
          <form
            onSubmit={handleSubmit1(formSubmitting)}
            className="mt-10 grid w-full grid-cols-1 gap-6 gap-x-24 p-5 xs:grid-cols-2 lg:gap-14 "
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="avatar" className="text-sm font-bold">
                آواتار
              </label>
              <Controller
                control={control1}
                name={"avatar"}
                render={({ field: { value, onChange, ...field } }) => {
                  return (
                    <input
                      {...field}
                      className="rounded-lg border-b-2 border-primary-pk p-1 px-4 outline-none"
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>,
                      ) => {
                        onChange(event.target.files?.[0]);
                      }}
                      type="file"
                      id="avatar"
                    />
                  );
                }}
              />
              <span className="pt-1.5 text-sm text-red-600">
                {errors1.avatar && errors1.avatar.message}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-bold">
                نام
              </label>
              <input
                id="name"
                {...register1("name")}
                type="text"
                placeholder="name"
                className="rounded-lg border-b-2 border-primary-pk p-1 px-4 outline-none"
              />
              <span className="pt-1.5 text-sm text-red-600">
                {errors1.name && errors1.name.message}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="username" className="text-sm font-bold">
                نام کاربری
              </label>
              <input
                id="usename"
                {...register1("username")}
                type="text"
                placeholder="username"
                className="rounded-lg border-b-2 border-primary-pk p-1 px-4 outline-none"
              />
              <span className="pt-1.5 text-sm text-red-600">
                {errors1.username && errors1.username.message}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-bold">
                ایمیل
              </label>
              <input
                id="email"
                {...register1("email")}
                type="email"
                placeholder="email"
                className="rounded-lg border-b-2 border-primary-pk p-1 px-4 outline-none"
              />
              <span className="pt-1.5 text-sm text-red-600">
                {errors1.email && errors1.email.message}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-sm font-bold">
                شماره تلفن
              </label>
              <input
                id="phone"
                {...register1("phone")}
                type="text"
                placeholder="phone"
                className="rounded-lg border-b-2 border-primary-pk p-1 px-4 outline-none"
              />
              <span className="pt-1.5 text-sm text-red-600">
                {errors1.phone && errors1.phone.message}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-sm font-bold">
                پسورد
              </label>
              <input
                id="password"
                {...register1("password")}
                type="password"
                placeholder="password"
                className="rounded-lg border-b-2 border-primary-pk p-1 px-4 outline-none"
              />
              <span className="pt-1.5 text-sm text-red-600">
                {errors1.password && errors1.password.message}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="confirmPassword" className="text-sm font-bold">
                پسورد
              </label>
              <input
                id="confirmPassword"
                {...register1("confirmPassword")}
                type="password"
                placeholder="confirmPassword"
                className="rounded-lg border-b-2 border-primary-pk p-1 px-4 outline-none"
              />
              <span className="pt-1.5 text-sm text-red-600">
                {errors1.confirmPassword && errors1.confirmPassword.message}
              </span>
            </div>
          
          <button  type="submit" className="ms-auto h-12 w-40 rounded-xl bg-primary-y">
            تایید
          </button>
          </form>
        </DetailsModal>
      )}
    
    </div>
  );
}
