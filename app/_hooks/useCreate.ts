import { useMutation } from "@tanstack/react-query"
import { addTask } from "../_services/api"
import toast from "react-hot-toast"

function useCreate() {
   const {mutate: addtask, isPending:isCreating} = useMutation({
    mutationFn: addTask,
    onSuccess: ()=> toast.success("Task created successfully"),
    onError: (err) => toast.error(err.message)
   })
 return {addtask, isCreating}
}

export default useCreate
