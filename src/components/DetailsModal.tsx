import React from "react"
import { GoXCircleFill } from "react-icons/go";

interface modalItems {

    children: React.ReactNode,
    onClose: () => void
}


export default function DetailsModal({ children, onClose }: modalItems) {

    const closeModal = () => {
        onClose()
    }

    return (
        <div className="modal active-modal">
            <div className="relative w-11/12 md:w-3/4 lg:w-3/5 bg-white rounded-2xl p-2 xs:p-10">
                <span className="absolute top-4 right-4"
                    onClick={closeModal}><GoXCircleFill className="cursor-pointer text-black text-3xl"/></span>
                <div className="w-full flex flex-col justify-center items-center">
                    {children}
                </div>
            </div>

        </div>
    )
}
