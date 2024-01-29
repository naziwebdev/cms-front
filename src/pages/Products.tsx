import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdEditSquare } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";


export default function Products() {
  return (
    <div className="flex flex-col items-center  xl:h-[calc(100vh-160px)]">
      <div className="self-start w-full xs:w-1/2 md:w-1/3 lg:w-1/4 p-3 xl:p-3.5 mb-5 bg-primary-y rounded-2xl shadow-lg cursor-pointer">
        <h3 className="flex justify-center items-center gap-x-2.5 text-white">
          <IoMdAddCircle className="text-xl md:text-2xl xl:text-3xl" />
          <p className="text-sm md:text-base xl:text-xl text-nowrap">افزودن محصول جدید</p>
        </h3>
      </div>
      <div className="w-[calc(100vw-90px)] xs:w-[calc(100vw-130px)] h-[70vh] xl:h-[64vh] bg-white shadow-xl rounded-2xl border-2 border-zinc-300/30 
      p-4 overflow-auto">
        <h2 className="pb-4 text-xl ">محصولات</h2>
        <table className="w-full text-sm md:text-base">
          <thead className="bg-zinc-100">
            <tr className="border-b-[1.5px] border-zinc-200 ">
              <th className="py-2.5 min-w-[100px]">تصویر</th>
              <th className="min-w-[100px]">محصول</th>
              <th className="min-w-[100px]">مبلغ</th>
              <th className="min-w-[100px]">دسته بندی</th>
              <th className="min-w-[50px]">ویرایش</th>
              <th className="min-w-[50px]">حذف</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center border-b-[1.5px] border-zinc-200">
              <td className="">
                <img
                  src="/images/3a63f670d204d8bb6e8236344f6650a28a93b24c_1694962603.jpg"
                  alt="product" className="w-32 h-24 mx-auto" />
              </td>
              <td className="">هندزفری بلوتوثی</td>
              <td>500000 تومان</td>
              <td>کالای دیجیتال</td>
              <td>
                <button className="">
                  <MdEditSquare className="text-xl text-primary-p" />
                </button>
              </td>
              <td>
                <button className="">
                  <RiDeleteBin6Fill className="text-xl text-primary-pk" />
                </button>
              </td>
            </tr>
            <tr className="text-center border-b-[1.5px] border-zinc-200">
              <td className="">
                <img
                  src="/images/b7ba87d282e1ed09cedb4a5cc29a9da1e56857ce_1652643050.jpg"
                  alt="product" className="w-32 h-24 mx-auto" />
              </td>
              <td>هندزفری بلوتوثی</td>
              <td>500000 تومان</td>
              <td>کالای دیجیتال</td>
              <td>
                <button className="">
                  <MdEditSquare className="text-xl text-primary-p" />
                </button>
              </td>
              <td>
                <button className="">
                  <RiDeleteBin6Fill className="text-xl text-primary-pk" />
                </button>
              </td>
            </tr>
            <tr className="text-center border-b-[1.5px] border-zinc-200">
              <td className="">
                <img
                  src="/images/Apple-Watch-Series-3-GPS-5-min-500x500.jpg"
                  alt="product" className="w-32 h-24 mx-auto" />
              </td>
              <td>هندزفری بلوتوثی</td>
              <td>500000 تومان</td>
              <td>کالای دیجیتال</td>
              <td>
                <button className="">
                  <MdEditSquare className="text-xl text-primary-p" />
                </button>
              </td>
              <td>
                <button className="">
                  <RiDeleteBin6Fill className="text-xl text-primary-pk" />
                </button>
              </td>
            </tr>
            <tr className="text-center border-b-[1.5px] border-zinc-200">
              <td className="">
                <img
                  src="/images/7-2-600x600.jpg"
                  alt="product" className="w-32 h-24 mx-auto" />
              </td>
              <td>هندزفری بلوتوثی</td>
              <td>500000 تومان</td>
              <td>کالای دیجیتال</td>
              <td>
                <button className="">
                  <MdEditSquare className="text-xl text-primary-p" />
                </button>
              </td>
              <td>
                <button className="">
                  <RiDeleteBin6Fill className="text-xl text-primary-pk" />
                </button>
              </td>
            </tr>
            <tr className="text-center border-b-[1.5px] border-zinc-200">
              <td className="">
                <img
                  src="/images/b7ba87d282e1ed09cedb4a5cc29a9da1e56857ce_1652643050.jpg"
                  alt="product" className="w-32 h-24 mx-auto" />
              </td>
              <td>هندزفری بلوتوثی</td>
              <td>500000 تومان</td>
              <td>کالای دیجیتال</td>
              <td>
                <button className="">
                  <MdEditSquare className="text-xl text-primary-p" />
                </button>
              </td>
              <td>
                <button className="">
                  <RiDeleteBin6Fill className="text-xl text-primary-pk" />
                </button>
              </td>
            </tr>
            <tr className="text-center border-b-[1.5px] border-zinc-300">
              <td className="py-2">
                <img
                  src="/images/Apple-Watch-Series-3-GPS-5-min-500x500.jpg"
                  alt="product" className="w-32 h-24 mx-auto" />
              </td>
              <td>هندزفری بلوتوثی</td>
              <td>500000 تومان</td>
              <td>کالای دیجیتال</td>
              <td>
                <button className="">
                  <MdEditSquare className="text-xl text-primary-p" />
                </button>
              </td>
              <td>
                <button className="">
                  <RiDeleteBin6Fill className="text-xl text-primary-pk" />
                </button>
              </td>
            </tr>
            <tr className="text-center border-b-[1.5px] border-zinc-200">
              <td className="">
                <img
                  src="/images/7-2-600x600.jpg"
                  alt="product" className="w-32 h-24 mx-auto" />
              </td>
              <td>هندزفری بلوتوثی</td>
              <td>500000 تومان</td>
              <td>کالای دیجیتال</td>
              <td>
                <button className="">
                  <MdEditSquare className="text-xl text-primary-p" />
                </button>
              </td>
              <td>
                <button className="">
                  <RiDeleteBin6Fill className="text-xl text-primary-pk" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
