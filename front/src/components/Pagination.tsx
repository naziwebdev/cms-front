import { useState , useEffect } from 'react';
import { UsersTypes } from '../TypescriptTypes/UserTypes'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";

type paginatinPropsTtpes = {

    items: UsersTypes[];
    itemsCount: number;
    pathname: string;
    setShowItems: (value: UsersTypes[]) => void
}

export default function Pagination({ items, itemsCount, pathname, setShowItems }: paginatinPropsTtpes){

   const [pageCount,setPageCount] = useState<number | null>(null)
   const { page }: any = useParams()


   useEffect(() => {
    let endIndex = itemsCount * page
    let startIndex = endIndex - itemsCount
    let paginatedItems = items.slice(startIndex,endIndex)
    setShowItems(paginatedItems)
   

    let pageNumbers = Math.ceil(items.length / itemsCount)
    setPageCount(pageNumbers)

}, [items, page])


return (
    <div className='flex justify-center pt-8'>
    <ul className='flex justify-center gap-x-1'>
    <button className="flex w-10 items-center justify-center rounded-xl bg-black py-1 text-white sm:w-14">
           <MdNavigateNext className="text-2xl"/>
            </button>
        {Array(pageCount).fill(0).map((btn, index) => (

              index + 1 === Number(page) ? (

                <Link key={crypto.randomUUID()} to={`${pathname}/${index + 1}`} className='flex w-10 items-center justify-center rounded-xl bg-zinc-300 py-1 text-white hover:bg-black sm:w-14'>{index + 1}</Link>

            ) : (

                <Link key={crypto.randomUUID()} to={`${pathname}/${index + 1}`} className='flex w-10 items-center justify-center rounded-xl bg-pink-200 py-1 text-white hover:bg-black sm:w-14'>{index + 1}</Link>

            )


        ))}
         <button className="flex w-10 items-center justify-center rounded-xl bg-black py-1 text-white sm:w-14">
            <MdNavigateBefore className="text-2xl"/>
            </button>
    </ul>
</div>
)
}
