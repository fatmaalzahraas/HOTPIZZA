'use client';
import { CartContext } from '@/context/CartContext'
import Link from 'next/link'
import { useContext } from 'react'
import {FaPhoneVolume, FaShoppingBag} from 'react-icons/fa'
const Nav = () => {
  const {setShowCart, quantity} = useContext(CartContext)
  return (
    <nav className='absolute w-full'>
         <div className="py-6 flex justify-between xxs:flex-col xxs:justify-center items-center">
        <div className="bg-white  text-[2rem] xxs:text-[1.9rem] font-openSans italic font-bold w-[240px] xxs:w-[210px] text-center relative">
            <div className="absolute w-0 h-0 border-transparent border-t-white xxs:border-t-[25px] border-t-[30px] xxs:border-l-[8px] border-l-[10px] xxs:border-r-[18px] border-r-[20px] right-[-15px] top-0"></div>
            <div className="absolute w-0 h-0 border-transparent border-b-white xxs:border-b-[25px] border-b-[30px] xxs:border-l-[8px] border-l-[10px] xxs:border-r-[18px] border-r-[20px] right-[-15px] bottom-0"></div>
           <Link href='/'>
           <span className="stroke-one">HOT</span><span className="stroke-two">PIZZA</span>
           </Link>
        </div>
        <div className="xs:pr-[20px] sm:pr-[30px] md:pr-[45px] lg:pr-[100px]">
          <div className=" flex items-center sm:gap-x-[1.3rem] md:gap-x-[1.5rem]">
            <div className="flex items-center xxs:mt-2">
              <FaPhoneVolume className="text-orange text-[1.4rem]"/>
              <Link href='#'><p className="text-orange text-[1.3rem] font-bold">19025</p></Link>
            </div>
            <div className="cursor-pointer relative flex xs:hidden xxs:hidden" onClick={() => setShowCart(true)}>
              <span className="absolute bg-black rounded-[50%] w-[18px] h-[18px] text-white text-[0.6rem] bottom-[-8px] right-[-7px] flex justify-center items-center">{quantity}</span>
              <FaShoppingBag className="text-white text-[1.57rem]"/> 
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav