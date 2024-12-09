"use client"

import Button from "./Button";
import { TaskProp } from "../_types/typeScripts";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import useCreate from "../_hooks/useCreate";

type Inputs = TaskProp

type Props = {
  data?: TaskProp
}

export default function Form({data}:Props) {
 const [completed, setCompleted] = useState(false);
 const {addtask, isCreating} = useCreate()
 const isEdit = Boolean(data);

 const {register, handleSubmit, formState: { errors }, } = useForm<Inputs>({defaultValues: isEdit ? data : {}})

    const onSubmit: SubmitHandler<Inputs> = (data) => {
      addtask()
      console.log(data)
  }

  return (
    <div className="flex flex-col items-center justify-center">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center lg:w-96">
            {/* <input type="number" placeholder="Id" className="border-2 border-gray-300 rounded-md p-2 m-2 w-full" {...register("id", { required: "Field is Required" , minLength: {
              value: 2,
              message: "Id must be at least 2 characters long"
            }, maxLength: {
              value: 3,
              message: "Id must be at most 3 characters long"
            }})} />
            {errors.id && <div className="italic text-sm text-red-500">{errors?.id.message}</div>} */}
            <input type="text" placeholder="Title" className="border-2 border-gray-300 rounded-md p-2 m-2 w-full" {...register("title", { required: "Field is Required" })} />
            {errors.title && <div className="italic text-sm text-red-500">{errors?.title.message}</div>}
            <input type="number" placeholder="User-Id" className="border-2 border-gray-300 rounded-md p-2 m-2 w-full" {...register("userId", { required: "Field is Required" })} />
            {errors.userId && <div className="italic text-sm text-red-500">{errors?.userId.message}</div>}
        
           <div className="flex items-center justify-center space-x-2 m-1">
           <input
            type="checkbox"
            name="completed"
            id="completed"
            value={completed}
            onChange={e=> setCompleted(e.target.checked)}
            className="h-6 w-6 accent-blue-500 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-blue-500"
            {...register("completed")}
            
          />
          <label htmlFor="completed">is status completed?</label>
          </div>
           <Button type="primary" disabled={isCreating}>Submit</Button>
        </form>
      
    </div>
  )
}
