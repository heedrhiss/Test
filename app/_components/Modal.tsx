import { IoIosCloseCircleOutline } from "react-icons/io";

interface ModalProps {
  visible: boolean;
  onClose: () => void;
}
export default function Modal({visible, onClose}:ModalProps) {
function handleOnClose(e:any){
  if(e.target.id === "container") onClose()
}
if(!visible) return null;
  return  (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm z-20" id="container" onClick={handleOnClose}>
    <div className="flex flex-col">
    <button className="flex place-self-end" onClick={onClose}><IoIosCloseCircleOutline fontSize="2rem" /></button>
      <div className="bg-white w-96 p-1 text-stone-800 dark:bg-slate-600 dark:text-stone-200">
        Modal
      </div>
    </div>
    </div>
  )
}
