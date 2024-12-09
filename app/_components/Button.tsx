"use client"

import { useDarkMode } from "../_hooks/DarkModeContext";
import { ButtonProp } from "../_types/typeScripts";


export default function Button({children, onClick, type, disabled}:ButtonProp) {
  const {openModal} = useDarkMode()
  
    const primary = "bg-blue-500"
    const danger = "bg-red-500"
    if(type === "modal") return (
      <button onClick={openModal} className="border border-black rounded-3xl hover:scale-90 transition-all font-semibold duration-200 px-4 py-3 text-xs md:text-sm bg-blue-500">{children}</button>
    )
  return (
    <button onClick={onClick} disabled={disabled} className={`${type === "primary"? primary : type === "danger" ? danger : ""} border border-black rounded-3xl hover:scale-90 transition-all font-semibold duration-200 px-4 py-3 text-xs md:text-sm`}>
      {children}
    </button>
  )
}
