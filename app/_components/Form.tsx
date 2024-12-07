import toast from "react-hot-toast";
import Button from "./Button";
import { TaskProp } from "../_types/typeScripts";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = TaskProp

type Props = {
  data?: TaskProp
}

export default function Form({data}:Props) {
 const isEdit = Boolean(data);
console.log(data, isEdit)
    const {register, handleSubmit, formState: { errors }, } = useForm<Inputs>({defaultValues: isEdit ? data : {}})

    const onSubmit: SubmitHandler<Inputs> = (data) => {
      console.log(data)
      toast.success("Form submitted");
  }

  return (
    <div className="flex flex-col items-center justify-center">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center lg:w-96">
            <input type="number" placeholder="Id" className="border-2 border-gray-300 rounded-md p-2 m-2 w-full" {...register("id", { required: "Field is Required" , minLength: {
              value: 2,
              message: "Id must be at least 2 characters long"
            }, maxLength: {
              value: 3,
              message: "Id must be at most 3 characters long"
            }})} />
            {errors.id && <div className="italic text-sm text-red-500">{errors?.id.message}</div>}
            <input type="text" placeholder="Title" className="border-2 border-gray-300 rounded-md p-2 m-2 w-full" {...register("title", { required: "Field is Required" })} />
            {errors.title && <div className="italic text-sm text-red-500">{errors?.title.message}</div>}
            <input type="number" placeholder="User-Id" className="border-2 border-gray-300 rounded-md p-2 m-2 w-full" {...register("userId", { required: "Field is Required" })} />
            {errors.userId && <div className="italic text-sm text-red-500">{errors?.userId.message}</div>}
           <Button type="primary">Submit</Button>
        </form>
      
    </div>
  )
}
