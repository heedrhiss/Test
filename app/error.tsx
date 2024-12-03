"use client";


type ErrorProp = {
    error: Error;
    reset: () => void;
}

export default function Error({error, reset}: ErrorProp) {
  
    return (
      <main className='flex justify-center items-center flex-col gap-6'>
        <h1 className='text-3xl font-semibold'>Something went wrong!</h1>
        <p className='text-lg'>{error.message}</p>
        <button onClick={()=> location.reload()} className="border border-black rounded-full hover:scale-90 transition-all font-semibold duration-200 p-3">Reload</button>
      </main>
    );
  }
  