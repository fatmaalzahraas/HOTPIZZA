'use client'
 
import { useEffect } from 'react'
 import {TbReload} from 'react-icons/tb';
export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <div className='bg-hero h-screen flex flex-col items-center justify-center gap-y-8'>
      <h2 className='text-white font-semibold text-[1.4rem]'>Something went wrong!</h2>
      <button
      className='text-black bg-secondary w-[85px] h-[85px] rounded-full font-medium flex flex-col items-center justify-center gap-y-2'
        onClick={
          () => reset()
        }
      >
        <span>Try again</span>
        <span className='text-[1.2rem]'><TbReload /></span>
      </button>
    </div>
  )
}