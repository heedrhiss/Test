"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import toast from "react-hot-toast"
import { CiEdit } from "react-icons/ci"
import { FaEye } from "react-icons/fa"
import { MdDelete, MdOutlineArrowBack } from "react-icons/md"
import { deleteTask } from "../_services/api"
import Button from "./Button"

interface ActionProp {
  id: number
  openModal: () => void
}

export default function ButtonActions({id, openModal}:ActionProp) {
  
  const router = useRouter()
  const pathname = usePathname()
  const link = `/tasks/${id}`
    function handleDelete(){
        deleteTask(id)
        toast.success(`Task ${id} Deleted Successfully`)
        if(pathname === link){
          router.replace('/tasks')
        }
    }
  
   
  return (
    <>
    <div className="flex items-center justify-center space-x-2">
      <Link href={`${pathname === link ? "/tasks" : link}`}>
      {pathname === link ? 
      <Button><MdOutlineArrowBack fontSize="1.2rem"  /></Button>
      :
      <Button><FaEye fontSize="1.2rem"  /></Button>
      }
      </Link>
      <Button onClick={openModal}><CiEdit fontSize="1.2rem" /></Button>
      <Button type="danger" onClick={handleDelete}><MdDelete fontSize="1.2rem" /></Button>
      </div>
      </>
  )
}
