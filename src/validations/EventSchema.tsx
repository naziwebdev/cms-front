import * as Yup from "yup";

const EventSchema = Yup.object().shape({
  title: Yup.string()
    .required("عنوان  را وارد کنید")
    .min(3, " عنوان  حداقل باید ۳ کارکتر باشد")
    .max(30, "عنوان  حداکثر باید ۱۲ کارکتر باشد"),
  date: Yup.string().required("تاریخ را انتخاب کنید"),
  time:Yup.string().required("زمان را انتخاب کنید"),
  description:Yup.string(),

});

export default EventSchema;
