import * as Yup from 'yup'

const OrderSchema = Yup.object().shape({
    product:Yup.string().required('ای دی محصول را وارد کنید').matches(/^[0-9a-fA-F]{24}$/),
    price: Yup.number().required('قیمت را وارد کنید'),
    user:Yup.string().required('ای دی کاربر  را وارد کنید').matches(/^[0-9a-fA-F]{24}$/),
    status:Yup.string().optional()
})



export default OrderSchema