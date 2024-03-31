import { TicketTypes } from "../TypescriptTypes/TicketTypes";
import InfoContext from "../context/InfoContext";
import { useContext } from "react";

type TicketPropsTypes = {
  data: TicketTypes;
  setTicketID: (value: string) => void;
};

export default function TicketBox({ data, setTicketID }: TicketPropsTypes) {

  let ticketContext = useContext(InfoContext)

  const showTicketHandler = (ticketId:string) => {
    setTicketID(ticketId);
    ticketContext.getOneTicket()
  };

  return (
    <div
      onClick={() => showTicketHandler(data._id)}
      className="flex w-full cursor-pointer gap-x-2 rounded-xl border-2 border-zinc-200 bg-white p-3 shadow-lg hover:bg-pink-100 hover:duration-300 hover:ease-out md:gap-x-4"
    >
      {data.user?.avatar ? (
        <img
          src={`http://localhost:4000/users/avatar/${data.user?.avatar}`}
          alt="avatar"
          className="h-10 w-10 rounded-full border-2 border-primary-pk md:h-14 md:w-14"
        />
      ) : (
        <img
          src="/images/3d-minimal-purple-user-profile-avatar-icon-in-circle-white-frame-design-vector.jpg"
          alt="avatar"
          className="h-10 w-10 rounded-full border-4 border-primary-pk md:h-14 md:w-14"
        />
      )}

      <div className="w-[75%] 2xl:w-[80%]">
        <div className="flex  items-center justify-between pb-1.5">
          <p className="pb-1 text-sm font-semibold md:text-base">
            {data.user.name}
          </p>
          <span className="text-xs text-stone-500  md:text-sm">
            {new Date(data?.updatedAt).toLocaleDateString("fa-IR", {
              year: "numeric",
              month: "numeric",
              day: "numeric",
              calendar: "persian",
            })}
          </span>
        </div>
        <div className=" flex items-center justify-between gap-x-4">
          <p className="truncate   text-[.98rem] text-stone-500">{data.body}</p>
          <p className="rounded-full bg-primary-p px-2 py-0.5 text-xs text-white md:text-[.84rem]">
            2
          </p>
        </div>
      </div>
    </div>
  );
}
