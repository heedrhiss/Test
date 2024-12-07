import { IoIosCloseCircleOutline } from "react-icons/io";
import { ModalProps } from "../_types/typeScripts";


export default function Modal({visible, onClose, children}:ModalProps) {
function handleOnClose(e:React.MouseEvent<HTMLDivElement>){
  if(e.currentTarget.id === "container") onClose()
}
if(!visible) return null;
  return  (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm z-20" id="container" onClick={handleOnClose}>
    <div className="flex flex-col">
    <button className="flex place-self-end" onClick={onClose}><IoIosCloseCircleOutline fontSize="2rem" color="white"/></button>
      <div className="bg-white p-3 md:p-5 text-stone-800 dark:bg-slate-600 dark:text-stone-200">
        {children}
      </div>
    </div>
    </div>
  )
}
