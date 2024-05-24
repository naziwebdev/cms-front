import * as Yup from "yup";

const productSchema = Yup.object().shape({
  title: Yup.string()
    .required("نام محصول را وارد کنید")
    .min(3, " نام محصول حداقل باید ۳ کارکتر باشد")
    .max(30, "نام محصول حداکثر باید ۱۲ کارکتر باشد"),
  price: Yup.string().required("قیمت را وارد کنید"),
  href: Yup.string()
    .required("شورت نیم را وارد کنید")
    .min(3, " نام محصول حداقل باید ۳ کارکتر باشد")
    .max(30, "نام محصول حداکثر باید ۱۲ کارکتر باشد"),
  cover: Yup.mixed().required("عکس را اپلود کنید"),
  discount: Yup.number().notRequired().min(0, "قیمت از صفر نمیتواند کمتر باشد"),
  categoryId: Yup.string()
    .required("دسته بندی را وارد کنید")
    .matches(/^[0-9a-fA-F]{24}$/),
});

export default productSchema;


