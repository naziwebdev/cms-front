import * as Yup from 'yup'

const ReplyCommentSchema = Yup.object().shape({
    title: Yup.string().required('عنوان را وارد کنید').min(3, ' عنوان حداقل باید ۳ کارکتر باشد').max(30, 'عنوان حداکثر باید ۱۲ کارکتر باشد'),
    body: Yup.string().required('متن را وارد کنید').min(3,'متن حداقل باید ۳ کارکتر  باشد').max(200,'متن حدکثر میتواند ۲۰۰ کارکتر باشد')

})



export default ReplyCommentSchema