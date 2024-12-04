import { ButtonProp } from "../_types/typeScripts";


export default function Button({children, onClick, type}:ButtonProp) {
    const primary = "bg-gray-300"
    const danger = "bg-red-400"
  return (
    <button onClick={onClick} className={`${type === "primary"? primary : type === "danger" ? danger : ""} border border-black rounded-3xl hover:scale-90 transition-all font-semibold duration-200 px-3 py-2 w-20 text-xs md:text-sm`}>
      {children}
    </button>
  )
}
