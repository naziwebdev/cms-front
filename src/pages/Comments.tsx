import CommentCard from "../components/CommentCard";
import { useState, useEffect } from "react";
import { CommentTypes } from "../TypescriptTypes/CommentTpes";
import Pagination from "../components/Pagination";

export default function Comments() {
  const [allComments, setAllComments] = useState<CommentTypes[]>([]);
  const [commentsShowPage, setCommentsShowPage] = useState<CommentTypes[]>([]);



  const getComments = async () => {
    const res = await fetch("http://localhost:4000/v1/comments", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OWVkYjE5YjQxZDE0NmQ3ZWY3N2NkMyIsImlhdCI6MTcxNTk2NjUyNywiZXhwIjoxNzE4NTU4NTI3fQ.oBGAf4B6F8rimiZnEVTkAj-OvWFzYA0jYtkOnIyNgsY",
      },
    });
    if (res.status === 200) {
      const data = await res.json();
      setAllComments(data);
    } else {
      console.log(res);
    }
  };


  useEffect(() => {
    getComments()
  },[])


  return (
    <div className="xl:h-[calc(100vh-160px)]">
      <div
        className="h-[70vh] w-[calc(100vw-90px)] 
    rounded-xl  px-2 xs:w-[calc(100vw-130px)] xs:p-4 xl:h-[64vh]"
      >
        <div className="flex flex-col items-center gap-y-1 md:gap-y-6 2xl:gap-y-2 ">
         {commentsShowPage?.map(comment => (
          <CommentCard key={comment._id} comment={comment} setAllComments={setAllComments}/>
         ))}
        </div>
        <Pagination
        items={allComments}
        itemsCount={3}
        pathname={"/comments"}
        setShowItems={setCommentsShowPage}
      />
      </div>
    </div>
  );
}
