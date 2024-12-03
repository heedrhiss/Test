import Link from "next/link";

function NotFound() {
  return (
    <main className='text-center space-y-6 mt-4'>
      <h1 className='text-3xl font-semibold'>
        This page could not be found 😥
      </h1>
      <Link
        href='/'
        className='inline-block border border-black bg-slate-500 px-6 py-3 text-lg rounded-full hover:scale-90 transition-all duration-200 capitalize'
      >
        Go back home
      </Link>
    </main>
  );
}

export default NotFound;
