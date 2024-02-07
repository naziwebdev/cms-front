import React from "react"

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
                <span className="absolute top-4 right-4 flex justify-center items-center text-xl font-bold
            rounded-lg w-8 h-7 cursor-pointer bg-black text-white"
                    onClick={closeModal}>&#9747;</span>
                <div className="w-full flex flex-col justify-center items-center">
                    {children}
                </div>
            </div>

        </div>
    )
}
