
interface inputTitles {
    titleFa:string,
    titleEn:string,
    typeInput:string
}

export default function FormInput({titleFa , titleEn , typeInput}:inputTitles ) {
  return (
    <div className="flex flex-col gap-2">
    <label htmlFor={titleEn} className="text-sm font-bold">{titleFa}</label>
    <input id={titleEn} type={typeInput} placeholder={titleEn}
      className="border-b-2 border-primary-pk p-1 px-4 rounded-lg outline-none" />
  </div>
  )
}
