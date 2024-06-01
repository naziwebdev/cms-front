import * as Yup from "yup";

const CostSchema = Yup.object().shape({
  title: Yup.string()
    .required("نام محصول را وارد کنید")
    .min(3, " نام محصول حداقل باید ۳ کارکتر باشد")
    .max(30, "نام محصول حداکثر باید ۱۲ کارکتر باشد"),
  status: Yup.string().required("وضعیت هزینه را وارد کنید"),
  date: Yup.string().required("تاریخ را انتخاب کنید"),
  price: Yup.string().required("قیمت را وارد کنید"),
});

export default CostSchema;
