import * as Yup from "yup";

const UserSchema = Yup.object().shape({
  avatar: Yup.mixed().required('عکس را وارد کنید'),
  name: Yup.string()
    .required("نام خود را وارد کنید")
    .min(3, " نام حداقل باید ۳ کارکتر باشد")
    .max(30, "نام حداکثر باید ۳۰ کارکتر باشد"),
  username: Yup.string()
    .required("قیمت را وارد کنید")
    .min(3, " نام کاربری حداقل باید ۳ کارکتر باشد")
    .max(30, "نام کاربری حداکثر باید ۳۰ کارکتر باشد"),
  email: Yup.string()
    .required("ایمیل را وارد کنید")
    .matches(/^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/),
  phone: Yup.string()
    .required("شماره تلفن خود را وارد نمایید")
    .matches(/^۰۹[۰-۹]{9}|09[0-9]{9}$/, "شماره تلفن معتبر نیست"),
  password: Yup.string()
    .required("رمز عبور خود را وارد نمایید")
    .min(6, "رمز عبور باید حداقل ۶ کارکتر باشد")
    .max(20, "رمز عبور باید حذاکثر ۲۰ کارکتر باشد")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
      "رمز عبور باید حاوی حروف بزرگ و کوچک و اعداد و علائم باشد",
    ),
    confirmPassword: Yup.string().required('رمز عبور خود را وارد نمایید').min(6, 'رمز عبور حداقل باید ۶ کارکتر باشد').max(20, 'رمز عبور حداثر باید ۲۰ کارکتر باشد').oneOf([Yup.ref('password')], 'با پسورد وارد شده مطابقت ندارد')

});

export default UserSchema;


