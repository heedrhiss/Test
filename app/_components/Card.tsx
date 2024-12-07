import Image from "next/image"
import { CardProp } from "../_types/typeScripts"

export default function Card({data}:CardProp) {
  return (
    <div className="flex flex-col items-start justify-center hover:scale-105 transition-all duration-300 mx-3">
        {/* Display for desktop, tablet and mobile */}
        <Image src={data.image.desktop} alt={data.name} width={300} height={350} className="rounded-xl hidden lg:block" />
        <Image src={data.image.tablet} alt={data.name} width={250} height={350} className="rounded-xl hidden sm:block lg:hidden" />
        <Image src={data.image.mobile} alt={data.name} width={250} height={300} className="rounded-xl sm:hidden" />

      <div className="flex items-center justify-center px-7 py-3 bg-white dark:bg-slate-400 rounded-full font-bold mx-auto hover:cursor-pointer hover:bg-black hover:text-white hover:scale-95 transition-all duration-300 space-x-3 border border-gray-500 -mt-8 mb-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="20"
        fill="none"
        viewBox="0 0 21 20"
      >
        <g fill="#C73B0F" clipPath="url(#a)">
          <path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z" />
          <path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z" />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M.333 0h20v20h-20z" />
          </clipPath>
        </defs>
      </svg>
      <p>Add To Cart</p>
    </div>
      <div className="flex flex-col items-start justify-center">
        <p className="text-gray-500 text-lg dark:font-bold">{data.category}</p>
        <h2 className="text-xl lg:text-2xl font-bold">{data.name}</h2>
        <p className="text-[#C73B0F] text-lg mb-9">${data.price}</p>
      </div>
    </div>
  )
}
