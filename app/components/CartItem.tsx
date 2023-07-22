'use client';
import { CartItemsType } from "@/types/pizza"
import Image from "next/image"
import {VscClose} from 'react-icons/vsc';
import {CgMathPlus, CgMathMinus} from 'react-icons/cg';
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
type Props = {
    pizza: CartItemsType
}
const CartItem = ({pizza} : Props) => {
    const {handleIncrement, handleDecrement, removeFromCart} = useContext(CartContext)
  return (
    <div className="border-b border-gray-200 mb-3 py-4">
        <div className="flex justify-between">
            <div className="flex gap-x-3 items-center">
                <div>
                    <Image
                        src={pizza.image}
                        alt={pizza.name}
                        width={80}
                        height={80}
                    />
                </div>
                <div className="flex flex-col">
                    <h4 className="font-semibold capitalize text-[0.95rem] mb-1">{pizza.name}</h4>
                    <p className="text-[0.9rem] capitalize mb-1">{pizza.crust} Crust</p>
                    <p className="text-[0.9rem] capitalize mb-1">{pizza.size} Size</p>
                    <div className="flex items-center gap-x-4">
                        <span className="bg-orange text-[1rem] rounded-full cursor-pointer opacity-80" onClick={() => handleDecrement(pizza.id, pizza.price, pizza.size, pizza.crust, pizza.additionalToppings)}><CgMathMinus className="text-white"/></span>
                        <span className="text-black text-[0.95rem] font-medium">{pizza.amount}</span>
                        <span className="bg-orange text-[1rem] rounded-full cursor-pointer opacity-80" onClick={() => handleIncrement(pizza.id, pizza.price, pizza.size, pizza.crust, pizza.additionalToppings)}><CgMathPlus className="text-white"/></span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-y-14 items-center">
               <div className="cursor-pointer text-orange" onClick={() => removeFromCart(pizza.id, pizza.price, pizza.crust, pizza.size)}>
                    <VscClose />
               </div>
               <div className="text-[0.95rem] font-medium">
                    <span>{pizza.amount ? (pizza.price * pizza.amount) : pizza.price}</span>
               </div>
            </div>
        </div>
        <div className="mt-3">
            {
                    pizza.additionalToppings?.length === 0 ? null : <div className="flex gap-x-3 flex-wrap items-center">
                        <p className="text-[0.9rem] font-semibold">Toppings:</p>
                        {
                            pizza.additionalToppings?.map((el,i) => (<div key={i} className="cursor-default"><span  className="text-[0.8rem] bg-orange opacity-70 text-white rounded-2xl px-2 font-medium capitalize">{el.name}</span></div>))
                        }
                    </div>
            }
        </div>
    </div>
  )
}

export default CartItem