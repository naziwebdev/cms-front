import * as Yup from 'yup'

const OffSchema = Yup.object().shape({
    code: Yup.string().required('کد را وارد کنید').min(2, ' کد حداقل باید ۲ کارکتر باشد').max(20, 'کد حداکثر باید ۲۰ کارکتر باشد'),
    percent:Yup.number().required('درصد را وارد کنید').min(0,'درصد حداقل باید صفر باشد').max(100,'درصد حداکثر باید صد باشد'),
    expireDay:Yup.number().required('انقضا را وارد کنید'),
    maxUsage:Yup.number().required('تعداد مجاز استفاده را وارد کنید').min(1,'تعداد مجاز استفاده حداقل باید 1 باشد'),
})



export default OffSchema



export const allOffSchema = Yup.object().shape({
    percent:Yup.number().required('درصد را وارد کنید').min(0,'درصد حداقل باید صفر باشد').max(100,'درصد حداکثر باید صد باشد'),

})



