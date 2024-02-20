import { useState , useEffect } from 'react';
import { UsersTypes } from '../TypescriptTypes/UserTypes'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

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
    <ul className='flex justify-center gap-x-5'>

        {Array(pageCount).fill(0).map((btn, index) => (

              index + 1 === Number(page) ? (

                <Link key={crypto.randomUUID()} to={`${pathname}/${index + 1}`} className='flex justify-center items-center rounded-full bg-primary-pk hover:bg-black w-10 sm:w-16 py-1 text-white'>{index + 1}</Link>

            ) : (

                <Link key={crypto.randomUUID()} to={`${pathname}/${index + 1}`} className='flex justify-center items-center rounded-full bg-pink-200 hover:bg-black w-10 sm:w-16 py-1 text-white'>{index + 1}</Link>

            )


        ))}
    </ul>
</div>
)
}
