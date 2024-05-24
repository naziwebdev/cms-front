import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import LoginSchema from "../validations/LoginSchema";
import { useNavigate } from "react-router-dom";
import { convertToLatinNumber } from "../utils/convertorNum";

type FormValues = {
  username: string;
  password: string;
};

export default function Login() {
  const navigation = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: yupResolver(LoginSchema),
  });

  const loginHandle = async (data: FormValues, event: any) => {
    event.preventDefault();
    // const enIdentifier = convertToLatinNumber(data.username)
    const res = await fetch("http://localhost:4000/v1/auth/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        identifier:data.username,
        password: data.password,
      }),
    });

    if (res.status === 200) {

      await res.json();
    
      swal({
        title: "با موفقیت لاگین شد",
        icon: "success",
        buttons: "بستن" as any,
      }).then((value) => {
        if (value) {
          navigation("/");
          location.reload()
          reset()
        }
      });
    } else {
      swal({
        title: "   لاگین با شکست روبرو شد",
        icon: "error",
        buttons: "بستن" as any,
      });
      console.log(await res);
    }
  };

  return (
    <div className="relative flex h-[100dvh] w-full items-center justify-center overflow-hidden sm:mt-[.83rem] sm:h-[86.4vh] md:justify-between lg:h-[90dvh]">
      <img
        src="/images/login.png"
        className="invisible absolute right-0 -z-20  h-[80vh] w-full px-10 md:visible md:w-1/2 lg:w-[44%]"
      />

      <div className="absolute -right-12  top-0 -z-10 h-[70%] w-[20%] rounded-full bg-sky-100 opacity-70 blur-3xl"></div>
      <div className="absolute right-1/2 top-0  -z-10 h-[90%] w-[18%] rounded-full bg-orange-200 opacity-60 blur-3xl md:right-1/3 md:h-[55%]"></div>
      <div className="absolute -left-12  bottom-[20%] -z-10 h-[90%] w-[30%] rounded-full bg-lime-200 opacity-70 blur-3xl"></div>

      <form
        onSubmit={handleSubmit(loginHandle)}
        className="2xsm:w-[90%] xsm:w-[80%] xsm:px-10 font-Dinar absolute flex flex-col items-center rounded-xl bg-fuchsia-50/90 px-5 py-14 shadow-xl shadow-black/20 sm:w-[55%]  md:left-10 md:w-[44%] lg:left-32 lg:w-1/3"
      >
        <h2 className="pb-8 text-4xl font-semibold text-pink-600">ورود</h2>
        <p className="">
          حساب کاربری ندارید ؟{" "}
          <Link to={"/register"}>
            <span className="cursor-pointer text-pink-600 underline">
              ثبت نام
            </span>
          </Link>
        </p>
        <input
          {...register("username")}
          type="text"
          className="mt-10 w-full border-b-2 border-zinc-600 bg-transparent py-3 text-center text-xl text-pink-600 outline-none placeholder:text-lg placeholder:text-zinc-700"
          placeholder="نام کاربری"
        />
        <span className="pt-1.5 text-sm text-red-600">
          {errors.username && errors.username.message}
        </span>
        <input
          {...register("password")}
          type="password"
          className="mt-10 w-full border-b-2 border-zinc-600 bg-transparent py-3 text-center text-xl text-pink-600 outline-none placeholder:text-lg placeholder:text-zinc-700"
          placeholder="رمز عبور"
        />
        <span className="pt-1.5 text-sm text-red-600">
          {errors.password && errors.password.message}
        </span>
        <span className="mb-2 mt-12 cursor-pointer text-pink-600">
          رمز عبور را فراموش کرده اید ؟
        </span>
        <button className="absolute -bottom-5 flex items-start justify-center rounded-lg bg-black px-10 py-2.5 text-xl text-white">
          ورود
        </button>
      </form>
    </div>
  );
}
