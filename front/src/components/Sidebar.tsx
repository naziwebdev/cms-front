import { Link } from "react-router-dom";
import { ImHome } from "react-icons/im";
import { HiMiniUsers } from "react-icons/hi2";
import { PiBasketFill } from "react-icons/pi";
import { FaApple } from "react-icons/fa";
import { MdLocalOffer } from "react-icons/md";
import { FaCommentDots } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { FaMoneyCheckAlt } from "react-icons/fa";

import { FaTasks } from "react-icons/fa";
import { MdNoteAlt } from "react-icons/md";
// import { IoMdMail } from "react-icons/io";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import { useState } from "react";



export default function Sidebar() {

  const [toggle, setToggle] = useState<boolean>(false)
  const [currentLink, setCurrentLink] = useState<string>('home')

  const extendSidebar = () => {
    setToggle(prev => !prev)
  }




  return (
    <div className={`fixed  inset-y-5 z-40 w-[68px] rounded-full overflow-hidden
     bg-primary-p border-s-[12px] py-5 border-purple-800 shadow-[-15px_15px_25px_rgba(0,0,0,.15)] duration-300 ease-out ${toggle ? 'active' : ''}`}>
      <ul className="w-full">
        <li className={`relative w-full rounded-tr-[30px] rounded-br-[30px] text-white
        hover:text-primary-p hover:bg-secondery shape p-3
        ${currentLink == 'home' && 'bg-secondery activeNav !text-primary-p '}`}
          onClick={() => setCurrentLink('home')}>
          <Link to={'/'} className="relative z-10 flex w-full gap-x-4 justify-start 
        text-2xl">
            <span className=""><ImHome /></span>
            <span className={`${toggle ? 'flex' : 'hidden'} text-lg`}
            >خانه</span>
          </Link>
        </li>
        <li className={`relative w-full rounded-tr-[30px] rounded-br-[30px] text-white
        hover:text-primary-p hover:bg-secondery shape p-3
        ${currentLink == 'product' && 'bg-secondery activeNav !text-primary-p '}`}
          onClick={() => setCurrentLink('product')}>
          <Link to={'/products'} className="relative z-10 flex w-full gap-x-4 justify-start text-2xl">
            <span className=""><FaApple /></span>
            <span className={`${toggle ? 'flex' : 'hidden'} text-lg`}>محصولات</span>
          </Link>
        </li>
        <li className={`relative w-full rounded-tr-[30px] rounded-br-[30px] text-white
        hover:text-primary-p hover:bg-secondery shape p-3
        ${currentLink == 'user' && 'bg-secondery activeNav !text-primary-p '}`}
          onClick={() => setCurrentLink('user')}>
          <Link to={'/users/1'} className="relative z-10 flex w-full gap-x-4  justify-start  text-2xl">
            <span className=""><HiMiniUsers /></span>
            <span className={`${toggle ? 'flex' : 'hidden'} text-lg`}>کاربران</span>
          </Link>
        </li>
        <li className={`relative w-full rounded-tr-[30px] rounded-br-[30px] text-white
        hover:text-primary-p hover:bg-secondery shape p-3
        ${currentLink == 'off' && 'bg-secondery activeNav !text-primary-p '}`}
          onClick={() => setCurrentLink('off')}>
          <Link to={'/offs/1'} className="relative z-10 flex w-full gap-x-4 justify-start  text-2xl">
            <span className=""><MdLocalOffer /></span>
            <span className={`${toggle ? 'flex' : 'hidden'} text-lg`}>تخفیف ها</span>
          </Link>
        </li>
        <li className={`relative w-full rounded-tr-[30px] rounded-br-[30px] text-white
        hover:text-primary-p hover:bg-secondery shape p-3
        ${currentLink == 'order' && 'bg-secondery activeNav !text-primary-p '}`}
          onClick={() => setCurrentLink('order')}>
          <Link to={'/orders'} className="relative z-10 flex w-full gap-x-4 justify-start  text-2xl">
            <span className=""><PiBasketFill /></span>
            <span className={`${toggle ? 'flex' : 'hidden'} text-lg`}>سفارشات</span>
          </Link>
        </li>
        <li className={`relative w-full rounded-tr-[30px] rounded-br-[30px] text-white
        hover:text-primary-p hover:bg-secondery shape p-3
        ${currentLink == 'cm' && 'bg-secondery activeNav !text-primary-p '}`}
          onClick={() => setCurrentLink('cm')}>
          <Link to={'/comments/1'} className="relative z-10 flex w-full gap-x-4  justify-start text-2xl">
            <span className=""><FaCommentDots /></span>
            <span className={`${toggle ? 'flex' : 'hidden'} text-lg`}>کامنت ها</span>
          </Link>
        </li>
        <li className={`relative w-full rounded-tr-[30px] rounded-br-[30px] text-white
        hover:text-primary-p hover:bg-secondery shape p-3
        ${currentLink == 'cost' && 'bg-secondery activeNav !text-primary-p '}`}
          onClick={() => setCurrentLink('cost')}>
          <Link to={'/costs'} className="relative z-10 flex w-full gap-x-4 justify-start text-2xl">
            <span className=""><FaMoneyCheckAlt /></span>
            <span className={`${toggle ? 'flex' : 'hidden'} text-lg`}>هزینه ها</span>
          </Link>
        </li>
        <li className={`relative w-full rounded-tr-[30px] rounded-br-[30px] text-white
        hover:text-primary-p hover:bg-secondery shape p-3
        ${currentLink == 'ticket' && 'bg-secondery activeNav !text-primary-p '}`}
          onClick={() => setCurrentLink('ticket')}>
          <Link to={'/tickets'} className="relative z-10 flex w-full gap-x-4 justify-start text-2xl">
            <span className=""><BiSupport /></span>
            <span className={`${toggle ? 'flex' : 'hidden'} text-lg`}>تیکت ها</span>
          </Link>
        </li>
        <li className={`relative w-full rounded-tr-[30px] rounded-br-[30px] text-white
        hover:text-primary-p hover:bg-secondery shape p-3
        ${currentLink == 'todo' && 'bg-secondery activeNav !text-primary-p '}`}
          onClick={() => setCurrentLink('todo')}>
          <Link to={'/apps/todo'} className="relative z-10 flex w-full gap-x-4 justify-start text-2xl">
            <span className=""><FaTasks /></span>
            <span className={`${toggle ? 'flex' : 'hidden'} text-lg`}>تودولیست</span>
          </Link>
        </li>
        <li className={`relative w-full rounded-tr-[30px] rounded-br-[30px] text-white
        hover:text-primary-p hover:bg-secondery shape p-3
        ${currentLink == 'note' && 'bg-secondery activeNav !text-primary-p '}`}
          onClick={() => setCurrentLink('note')}>
          <Link to={'/apps/note'} className="relative z-10 flex w-full gap-x-4 justify-start text-2xl">
            <span className=""><MdNoteAlt /></span>
            <span className={`${toggle ? 'flex' : 'hidden'} text-lg`}>یادداشت ها</span>
          </Link>
        </li>
        {/* <li className={`relative w-full rounded-tr-[30px] rounded-br-[30px] text-white
        hover:text-primary-p hover:bg-secondery shape p-3
        ${currentLink == 'mail' && 'bg-secondery activeNav !text-primary-p '}`}
          onClick={() => setCurrentLink('mail')}>
          <Link to={'/'} className="relative z-10 flex w-full gap-x-4 justify-start  text-2xl">
            <span className=""><IoMdMail /></span>
            <span className={`${toggle ? 'flex' : 'hidden'} text-lg`}>ایمیل</span>
          </Link>
        </li> */}
        <li className={`relative w-full rounded-tr-[30px] rounded-br-[30px] text-white
        hover:text-primary-p hover:bg-secondery shape p-3
        ${currentLink == 'calender' && 'bg-secondery activeNav !text-primary-p '}`}
          onClick={() => setCurrentLink('calender')}>
          <Link to={'/apps/calender'} className="relative z-10 flex w-full gap-x-4 justify-start text-2xl">
            <span className=""><BsFillCalendar2DateFill /></span>
            <span className={`${toggle ? 'flex' : 'hidden'} text-lg`}>تقویم</span>
          </Link>
        </li>
      </ul>
      <div className={`flex justify-center items-center absolute z-20 bottom-6 left-3.5 w-[35px] h-[35px] rounded-full hover:bg-white
     cursor-pointer hover:transition-all hover:duration-300 hover:ease-in bg-primary-y toggle`} onClick={extendSidebar}></div>
    </div>



  )
}
