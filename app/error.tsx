"use client";

import Button from "./_components/Button";


type ErrorProp = {
    error: Error;
    reset: () => void;
}

export default function Error({error}: ErrorProp) {
  
    return (
      <main className='flex justify-center items-center flex-col gap-6'>
        <h1 className='text-3xl font-semibold'>Something went wrong!</h1>
        <p className='text-lg'>{error.message}</p>
        <Button onClick={()=> location.reload()}>Reload</Button>
      </main>
    );
}
  