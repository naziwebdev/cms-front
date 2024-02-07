import { IoMdAddCircle } from "react-icons/io";

interface modalToggle {
  openModalHandler: () => void;
  title: string;
}

export default function AddButton({ openModalHandler, title }: modalToggle) {
  return (
    <div
      className="mb-5 w-full cursor-pointer self-start rounded-2xl bg-primary-y p-3 
    shadow-lg xs:w-1/2 md:w-1/3 lg:w-1/4 xl:p-3.5"
      onClick={openModalHandler}
    >
      <h3 className="flex items-center justify-center gap-x-2.5 text-white">
        <IoMdAddCircle className="text-xl md:text-2xl xl:text-3xl" />
        <p className="text-nowrap text-sm md:text-base xl:text-xl">{title}</p>
      </h3>
    </div>
  );
}
