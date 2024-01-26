import { IoMdNotifications } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
import { MdWbSunny } from "react-icons/md";
import { useState } from "react";


export default function Header() {
  const [toggleSwitch, setToggleSwitch] = useState<boolean>(false)

  const changeSwitch = () => {
    setToggleSwitch(prev => !prev)
  }


  return (
    <div className='flex justify-end sm:justify-between items-center lg:p-2.5 gap-x-4'>
      <h1 className="hidden sm:flex text-base md:text-lg lg:text-xl font-bold text-gray-600">
        به داشبورد خوش آمدید !
      </h1>
      <div className=" flex items-center gap-x-1.5 xs:gap-x-3 md:gap-x-5 lg:gap-x-8">
        <div className="relative bg-primary-p rounded-full w-24 md:w-28 lg:w-36 h-10 md:h-12 border-4 border-primary-p shadow-xl">
          <span className={`absolute left-0 top-0 bottom-0 h-full w-8 xs:w-10 md:w-12 lg:w-[4.6rem] rounded-full bg-primary-pk cursor-pointer ${toggleSwitch && 'right-0'}`}
            onClick={changeSwitch}> </span>
          {toggleSwitch === false ? <FaMoon className="absolute right-2
             text-2xl md:text-3xl top-1 text-primary-y"/>
            : <MdWbSunny className="absolute left-1 md:left-2
             text-3xl md:text-4xl top-0.5 md:top-1 text-primary-y" />
          }
        </div>
        <div className="relative ms-1 flex justify-center items-center rounded-lg cursor-pointer">
          <IoMdNotifications className="text-2xl md:text-[1.7rem] lg:text-3xl text-stone-600" />
          <span className="w-5 h-5 flex justify-center items-center absolute 
          -top-3 md:-top-2.5 -right-2 bg-primary-pk text-white
          rounded-full text-[.65rem] md:text-xs lg:text-sm  ">2</span>
        </div>
        <div className="flex items-center gap-x-1.5 md:gap-x-2.5">
          <div className="hidden sm:block text-end">
            <p className="font-bold text-xs md:text-sm lg:text-base text-stone-800 pb-1.5 lg:pb-2">نازنین رستگار</p>
            <p className="text-zinc-400 text-[.7rem] md:text-xs">برنامه نویس فول استک</p>
          </div>
          <img src="/images/user-04.jpg" alt="avatar"
            className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full border-4 border-primary-pk object-cover" />
        </div>

      </div>

    </div>
  )
}
