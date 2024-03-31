
type ReplyTicketType ={
  body:string;
  updatedAt:string

}

export default function ReplyTicket({body,updatedAt}:ReplyTicketType) {

  return (
    <div className="self-end inline-block rounded-xl rounded-bl-3xl rounded-tl-none bg-primary-p p-2.5 text-white shadow-md">
      <p className="text-xs xs:text-sm">{body}</p>
      <span className="text-xs">{updatedAt}</span>
    </div>
  );
}