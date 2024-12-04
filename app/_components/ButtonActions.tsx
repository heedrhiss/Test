"use client"

import toast from "react-hot-toast"
import { deleteTask } from "../_services/api"
import Button from "./Button"
interface ActionProp {
  id: number
}

export default function ButtonActions({id}:ActionProp) {
    function handleDelete(){
        deleteTask(id)
        toast.success(`Task ${id} Deleted Successfully`)
    }
    function handleEdit(){
        alert(id)
    }
  return (
    <div className="flex items-center justify-center space-x-2">
      <Button type="primary" onClick={handleEdit}>Edit</Button>
      <Button type="danger" onClick={handleDelete}>Delete</Button>
      </div>
  )
}
