import Image from "next/image";
import Link from "next/link";
import { Switch } from "./Switch";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-2 px-4">
     <Link href="/" ><Image src="/assets/icon.png" alt="logo" width={80} height={80} /></Link>
      <div className="flex items-center justify-around gap-4 text-xl md:text-3xl space-x-10">
        <Link href="/" className="hover:text-blue-500">Home</Link>
        <Link href="/tasks"  className="hover:text-blue-500">Tasks</Link>
        <Switch/>
      </div>
    </nav>
  )
}
