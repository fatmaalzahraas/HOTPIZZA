'use client';
import { CartContext } from '@/context/CartContext'
import { useContext } from 'react'
import {FaShoppingBag} from 'react-icons/fa'
const CartBagIcon = () => {
  const {setShowCart, quantity} = useContext(CartContext)
  const handleClick = () => {
    setShowCart(true)
  }
  return (
    <div className='fixed sm:hidden cursor-pointer bottom-6 right-6 w-[45px] h-[45px] rounded-full bg-orange opacity-80 z-20 flex justify-center items-center' onClick={handleClick}>
        <div className='relativ'>
            <span className='absolute bg-tertiary rounded-full text-white w-4 h-4 bottom-1 right-2 flex justify-center items-center text-[0.6rem]'>{quantity}</span>
            <FaShoppingBag className='text-white text-[1.5rem]'/>
        </div>
    </div>
  )
}

export default CartBagIcon