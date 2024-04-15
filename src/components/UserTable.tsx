import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdEditSquare } from "react-icons/md";
import { MdAppBlocking } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import { useForm, Controller } from "react-hook-form";
import UserSchema from "../validations/UserSchema";
import { useState, useEffect } from "react";
import DetailsModal from "../components/DetailsModal";
import { UsersTypes } from "../TypescriptTypes/UserTypes";
import { UserFormTypes } from "../TypescriptTypes/UserTypes";
import { yupResolver } from "@hookform/resolvers/yup";
import swal from "sweetalert";

type userProp = {
  data: UsersTypes[];
};

export default function UserTable({ data }: userProp) {
  const [allUser, setAllUser] = useState<UsersTypes[]>([]);
  const [toggleEditModal, setToggleEditModal] = useState<boolean>(false);
  const [userEditValue, setuserEditValue] = useState<UsersTypes>();

  const {
    register: register2,
    reset: reset2,
    control: control2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
  } = useForm({
    defaultValues: {
      avatar: "",
      name: userEditValue?.name,
      username: userEditValue?.username,
      email: userEditValue?.email,
      phone: userEditValue?.phone,
      password: "",
      confirmPassword: "",
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

  const removeUserHandler = async (userID: string) => {
    swal({
      title: "آیا از حذف اطمینان دارید؟",
      icon: "warning",
      buttons: ["خیر", "بله"],
    }).then(async (value) => {
      if (value === true) {
        const res = await fetch(`http://localhost:4000/v1/users/${userID}`, {
          method: "DELETE",
        });

        if (res.status === 200) {
          await res.json();
          swal({
            title: "کاربر با موفقیت حذف شد",
            icon: "success",
            buttons: "بستن" as any,
          }).then((result) => {
            if (result === true) {
              getUsers();
              window.location.reload();
            }
          });
        }
      }
    });
  };

  const editUserHandler = (user: UsersTypes) => {
    setuserEditValue(user);
    setToggleEditModal(true);
  };

  const editFormSubmiting = (data: UserFormTypes, event: any) => {
    event.preventDefault();

    let formData = new FormData();

    formData.append("avatar", data.avatar);
    formData.append("name", data.name);
    formData.append("username", data.username);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("password", data.password);
    formData.append("confirmPassword", data.confirmPassword);

    fetch(`http://localhost:4000/v1/users/${userEditValue?._id}`, {
      method: "PUT",
      body: formData,
    }).then((res) => {
      if (res.status === 200) {
        res.json();
        swal({
          title: "کاربر با موفقیت ویرایش شد",
          icon: "success",
          buttons: "بستن" as any,
        }).then((result) => {
          if (result === true) {
            getUsers();
            setToggleEditModal(false);
            window.location.reload();
            reset2();
          }
        });
      } else {
        swal({
          title: "عملیات با شکست مواجه شد",
          icon: "error",
          buttons: "بستن" as any,
        });
      }
    });
  };

  const changeRoleHandler = async (userID: string) => {
    swal({
      title: "آیا از تغییر نقش اطمینان دارید",
      icon: "warning",
      buttons: ["خیر", "بله"],
    }).then(async (value) => {
      if (value === true) {
        const res = await fetch(`http://localhost:4000/v1/users/role`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ id: userID }),
        });

        if (res.status === 200) {
          await res.json();
          swal({
            title: "نقش کاربر با موفقیت تغییر کرد",
            icon: "success",
            buttons: "بستن" as any,
          }).then((result) => {
            if (result === true) {
              getUsers();
              window.location.reload();
            }
          });
        }
      }
    });
  };

  const banUserHandler = async (userID: string) => {
    swal({
      title: "آیا از بن کردن کاربر اطمینان دارید ؟",
      icon: "warning",
      buttons: ["خیر", "بله"],
    }).then(async (value) => {
      if (value === true) {
        const res = await fetch(
          `http://localhost:4000/v1/users/ban/${userID}`,
          {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
          },
        );

        if (res.status === 201) {
          await res.json();
          swal({
            title: "کاربر با موفقیت بن شد",
            icon: "success",
            buttons: "بستن" as any,
          }).then((result) => {
            if (result === true) {
              getUsers();
              window.location.reload();
            }
          });
        }
      }
    });
  };

  const closeModalHandler2 = () => {
    setToggleEditModal(false);
    window.location.reload();
  };

  return (
    <div className="overflow-auto">
      <table className="w-full text-sm  md:text-base">
        <thead className="bg-stone-200">
          <tr className="border-b-[1.5px] border-zinc-200">
            <th className="max-w-[20px] py-3">#</th>
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
          {data.length !== 0
            ? data.map((user: UsersTypes) => (
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
                        <div className="font-semi-bold flex h-12 w-12 items-center justify-center rounded-full bg-violet-500 text-white">
                          {user?.name.slice(0, 2)}
                        </div>
                      )}
                    </div>
                  </td>
                  <td>
                    <div className=" flex flex-col  gap-y-1.5 text-sm">
                      <p>{user?.name}</p>
                      <p className="text-sm text-zinc-500">{user?.email}</p>
                    </div>
                  </td>
                  <td className="font-semibold text-zinc-700">
                    {user?.username}
                    <span className="font-semibold text-zinc-700">@</span>
                  </td>
                  <td>{user?.phone}</td>
                  <td>
                    <span className="rounded-full bg-pink-100  px-6 py-1 text-sm font-semibold text-primary-pk">
                      {user?.role === "ADMIN" ? "ادمین" : "کاربر"}
                    </span>
                  </td>
                  <td>
                    <button>
                      <MdEditSquare
                        onClick={() => editUserHandler(user)}
                        className="text-xl text-indigo-500"
                      />
                    </button>
                  </td>
                  <td>
                    <button>
                      <RiDeleteBin6Fill
                        onClick={() => removeUserHandler(user._id)}
                        className="text-xl text-red-500"
                      />
                    </button>
                  </td>
                  <td>
                    <button>
                      <GrUserAdmin
                        onClick={() => changeRoleHandler(user._id)}
                        className="text-xl  text-primary-p"
                      />
                    </button>
                  </td>
                  <td>
                    <button>
                      <MdAppBlocking
                        onClick={() => banUserHandler(user._id)}
                        className="text-xl  text-primary-y"
                      />
                    </button>
                  </td>
                </tr>
              ))
            : allUser.map((user) => (
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
                        <div className="font-semi-bold flex h-12 w-12 items-center justify-center rounded-full bg-violet-500 text-white">
                          {user?.name.slice(0, 2)}
                        </div>
                      )}
                    </div>
                  </td>
                  <td>
                    <div className=" flex flex-col  gap-y-1.5 text-sm">
                      <p>{user?.name}</p>
                      <p className="text-sm text-zinc-500">{user?.email}</p>
                    </div>
                  </td>
                  <td className="font-semibold text-zinc-700">
                    {user?.username}
                    <span className="font-semibold text-zinc-700">@</span>
                  </td>
                  <td>{user?.phone}</td>
                  <td>
                    <span className="rounded-full bg-pink-100  px-6 py-1 text-sm font-semibold text-primary-pk">
                      {user?.role === "ADMIN" ? "ادمین" : "کاربر"}
                    </span>
                  </td>
                  <td>
                    <button>
                      <MdEditSquare
                        onClick={() => editUserHandler(user)}
                        className="text-xl text-indigo-500"
                      />
                    </button>
                  </td>
                  <td>
                    <button>
                      <RiDeleteBin6Fill
                        onClick={() => removeUserHandler(user._id)}
                        className="text-xl text-red-500"
                      />
                    </button>
                  </td>
                  <td>
                    <button>
                      <GrUserAdmin
                        onClick={() => changeRoleHandler(user._id)}
                        className="text-xl  text-primary-p"
                      />
                    </button>
                  </td>
                  <td>
                    <button>
                      <MdAppBlocking
                        onClick={() => banUserHandler(user._id)}
                        className="text-xl  text-primary-y"
                      />
                    </button>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>

      {toggleEditModal && (
        <DetailsModal onClose={closeModalHandler2}>
          <h2 className="text-xl font-bold">ویرایش مشخصات کاربر</h2>
          <form
            onSubmit={handleSubmit2(editFormSubmiting)}
            className="mt-10 grid w-full grid-cols-1 gap-6 gap-x-24 p-5 xs:grid-cols-2 lg:gap-14 "
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="avatar" className="text-sm font-bold">
                آواتار
              </label>
              <Controller
                control={control2}
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
                {errors2?.avatar && errors2?.avatar?.message}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-bold">
                نام
              </label>
              <input
                defaultValue={userEditValue?.name}
                id="name"
                {...register2("name")}
                type="text"
                placeholder="name"
                className="rounded-lg border-b-2 border-primary-pk p-1 px-4 outline-none"
              />
              <span className="pt-1.5 text-sm text-red-600">
                {errors2.name && errors2.name.message}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="username" className="text-sm font-bold">
                نام کاربری
              </label>
              <input
                defaultValue={userEditValue?.username}
                id="usename"
                {...register2("username")}
                type="text"
                placeholder="username"
                className="rounded-lg border-b-2 border-primary-pk p-1 px-4 outline-none"
              />
              <span className="pt-1.5 text-sm text-red-600">
                {errors2.username && errors2.username.message}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-bold">
                ایمیل
              </label>
              <input
                defaultValue={userEditValue?.email}
                id="email"
                {...register2("email")}
                type="email"
                placeholder="email"
                className="rounded-lg border-b-2 border-primary-pk p-1 px-4 outline-none"
              />
              <span className="pt-1.5 text-sm text-red-600">
                {errors2.email && errors2.email.message}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-sm font-bold">
                شماره تلفن
              </label>
              <input
                defaultValue={userEditValue?.phone}
                id="phone"
                {...register2("phone")}
                type="text"
                placeholder="phone"
                className="rounded-lg border-b-2 border-primary-pk p-1 px-4 outline-none"
              />
              <span className="pt-1.5 text-sm text-red-600">
                {errors2.phone && errors2.phone.message}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-sm font-bold">
                پسورد جدید
              </label>
              <input
                id="password"
                {...register2("password")}
                type="password"
                placeholder="password"
                className="rounded-lg border-b-2 border-primary-pk p-1 px-4 outline-none"
              />
              <span className="pt-1.5 text-sm text-red-600">
                {errors2.password && errors2.password.message}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="confirmPassword" className="text-sm font-bold">
                تکرار پسورد
              </label>
              <input
                id="confirmPassword"
                {...register2("confirmPassword")}
                type="password"
                placeholder="confirmPassword"
                className="rounded-lg border-b-2 border-primary-pk p-1 px-4 outline-none"
              />
              <span className="pt-1.5 text-sm text-red-600">
                {errors2.confirmPassword && errors2.confirmPassword.message}
              </span>
            </div>

            <button
              type="submit"
              className="ms-auto h-12 w-40 rounded-xl bg-primary-y"
            >
              تایید
            </button>
          </form>
        </DetailsModal>
      )}
    </div>
  );
}
