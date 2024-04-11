import { IoMdNotifications } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
import { MdWbSunny } from "react-icons/md";
import { useState, useEffect } from "react";
import { NotifTypes } from "../TypescriptTypes/NotifTypes";
import { TiTick } from "react-icons/ti";
import { AdminDataTypes } from "../TypescriptTypes/AdminDataTypes";

export default function Header() {
  const [toggleSwitch, setToggleSwitch] = useState<boolean>(false);
  const [toggleNotifs, setToggleNotifs] = useState<boolean>(false);
  const [notifs, setNotifs] = useState<NotifTypes[]>([]);
  const [userData,setUserData] = useState<AdminDataTypes>()

  const changeSwitch = () => {
    setToggleSwitch((prev) => !prev);
  };
  const toggleNotifsHandler = () => {
    setToggleNotifs((prev) => !prev);
  };

  const getNotifsData = async () => {
    const res = await fetch("http://localhost:4000/v1/notifs/user", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDc4NTcyZDdjMjE4YTVkZDY3MTAyYyIsImlhdCI6MTcxMTU2NTE5NSwiZXhwIjoxNzE0MTU3MTk1fQ.20k8OOxivVVwnjcEfdhAd87QbsWF1AA1Kp3M0oA2ak4",
      },
    });

    if (res.status === 200) {
      const data = await res.json();
      setNotifs(data);
    }
  };

  const getAdminData = async () => {
    const res = await fetch("http://localhost:4000/v1/auth/me", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDc4NTcyZDdjMjE4YTVkZDY3MTAyYyIsImlhdCI6MTcxMTU2NTE5NSwiZXhwIjoxNzE0MTU3MTk1fQ.20k8OOxivVVwnjcEfdhAd87QbsWF1AA1Kp3M0oA2ak4",
      },
    });

    if (res.status === 200) {
      const data = await res.json();
      setUserData(data);
    }
  };

  const tickNotifHandler = async (NotifID: string) => {
    const res = await fetch(`http://localhost:4000/v1/notifs/${NotifID}/seen`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDc4NTcyZDdjMjE4YTVkZDY3MTAyYyIsImlhdCI6MTcxMTU2NTE5NSwiZXhwIjoxNzE0MTU3MTk1fQ.20k8OOxivVVwnjcEfdhAd87QbsWF1AA1Kp3M0oA2ak4`,
      },
    });

    if (res.status === 200) {
      getNotifsData();
    }
  };


  useEffect(() => {
    getNotifsData();
    getAdminData()
  }, []);

  return (
    <div className="mb-8 flex items-center justify-end  gap-x-4 sm:justify-between lg:p-2.5 xl:mb-5">
      <h1 className="hidden text-base font-bold text-gray-600 sm:flex md:text-lg lg:text-xl">
        به داشبورد خوش آمدید !
      </h1>
      <div className=" flex items-center gap-x-1.5 xs:gap-x-3 md:gap-x-5 lg:gap-x-8">
        <div className="relative h-10 w-24 rounded-full border-4 border-primary-p bg-primary-p shadow-xl md:h-12 md:w-28 lg:w-36">
          <span
            className={`absolute bottom-0 left-0 top-0 h-full w-8 cursor-pointer rounded-full bg-primary-pk xs:w-10 md:w-12 lg:w-[4.6rem] ${toggleSwitch && "right-0"}`}
            onClick={changeSwitch}
          >
            {" "}
          </span>
          {toggleSwitch === false ? (
            <FaMoon
              className="absolute right-2
             top-1 text-2xl text-primary-y md:text-3xl"
            />
          ) : (
            <MdWbSunny
              className="absolute left-1 top-0.5
             text-3xl text-primary-y md:left-2 md:top-1 md:text-4xl"
            />
          )}
        </div>
        <div className="relative ms-1 flex cursor-pointer items-center justify-center rounded-lg">
          <IoMdNotifications
            className="text-2xl text-stone-600 md:text-[1.7rem]
           lg:text-3xl"
            onClick={toggleNotifsHandler}
          />
          <span
            className="absolute -right-2 -top-3 flex h-5 w-5 
          items-center justify-center rounded-full bg-primary-pk text-[.65rem]
          text-white md:-top-2.5 md:text-xs lg:text-sm  "
          >
            {notifs.length}
          </span>
          {toggleNotifs && (
            <div
              className="absolute -bottom-28 -right-28 z-10 h-24 w-44 overflow-auto rounded-xl bg-white p-3 shadow-xl 
            duration-700 ease-in md:-bottom-32 md:h-28 md:w-64"
            >
              <ul
                className="flex list-inside list-disc flex-col gap-y-1 text-xs 
              marker:text-xl marker:text-primary-y md:gap-y-2 md:text-sm [&>*:nth-child(even)]:text-primary-pk
              [&>*:nth-child(odd)]:text-primary-p"
              >
                   {notifs.map((notif) => (
            <li
              key={notif._id}
              className={`${notif.seen === 1 && "line-through decoration-primary-pk"} flex items-center gap-x-3`}
            >
              <span onClick={() => tickNotifHandler(notif._id)}
              className="relative h-5 w-5 cursor-pointer bg-primary-p">
              {notif.seen === 1 && (
            <TiTick className="absolute top-0 left-0 text-2xl text-primary-pk" />
          )}
              </span>
              <p className="text-primary-y">{notif.message}</p>
            </li>
          ))}
              </ul>
            </div>
          )}
        </div>

        <div className="flex items-center gap-x-1.5 md:gap-x-2.5">
          <div className="hidden text-end sm:block">
            <p className="pb-1.5 text-xs font-bold text-stone-800 md:text-sm lg:pb-2 lg:text-base">
             {userData?.name}
            </p>
            <p className="text-[.7rem] text-zinc-400 md:text-xs">
             {userData?.email}
            </p>
          </div>
          {/* <img
            src="/images/user-04.jpg"
            alt="avatar"
            className="h-12 w-12 rounded-full border-4 border-primary-pk object-cover md:h-16 md:w-16 lg:h-20 lg:w-20"
          /> */}
              {userData?.avatar? (
        <img
          src={`http://localhost:4000/users/avatar/${userData?.avatar}`}
          alt="avatar"
          className="h-12 w-12 rounded-full border-4 border-primary-pk object-cover md:h-16 md:w-16 lg:h-20 lg:w-20"
        />
      ) : (
        <img
          src="/images/3d-minimal-purple-user-profile-avatar-icon-in-circle-white-frame-design-vector.jpg"
          alt="avatar"
          className="h-12 w-12 rounded-full border-4 border-primary-pk object-cover md:h-16 md:w-16 lg:h-20 lg:w-20"
        />
      )}
        </div>
      </div>
    </div>
  );
}
