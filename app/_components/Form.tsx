import toast from "react-hot-toast";
import Button from "./Button";

export default function Form() {
    function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        toast.success("Form submitted");
    }
  return (
    <div className="flex flex-col items-center justify-center">
        <form className="flex flex-col items-center justify-center lg:w-96">
            <input type="text" placeholder="Id" className="border-2 border-gray-300 rounded-md p-2 m-2 w-full" />
            <input type="text" placeholder="Title" className="border-2 border-gray-300 rounded-md p-2 m-2 w-full" />
            <input type="text" placeholder="User-Id" className="border-2 border-gray-300 rounded-md p-2 m-2 w-full" />
           <Button type="primary" onClick={handleSubmit}>Submit</Button>
        </form>
      
    </div>
  )
}
