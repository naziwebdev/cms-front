import InfoContext from "../context/InfoContext";
import { useContext } from "react";

export default function UserTicketMessage() {
  let ticketContext = useContext(InfoContext)
  return (
    <div className="inline-block rounded-xl rounded-br-3xl rounded-tr-none bg-primary-pk p-2.5 text-white shadow-md">
      <p className="text-xs xs:text-sm">{ticketContext.ticket?.ticket.body}</p>
      <span className="text-xs">{ticketContext.ticket?.ticket.updatedAt}</span>
    </div>
  );
}
