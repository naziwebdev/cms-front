import * as Yup from "yup";

const TodoSchema = Yup.object().shape({
  title: Yup.string()
    .required("نام محصول را وارد کنید")
    .min(3, " نام محصول حداقل باید ۳ کارکتر باشد")
    .max(30, "نام محصول حداکثر باید ۱۲ کارکتر باشد"),
  date: Yup.string().required("تاریخ را انتخاب کنید"),

});

export default TodoSchema;
