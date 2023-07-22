'use client';

import { CartContext } from "@/context/CartContext";
import { createOrder } from "@/sanity/sanity-utilis";
import { Order, OrderUserInfo } from "@/types/order";
import Image from "next/image";
import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type CheckoutProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
}
const Checkout = ({setIsOpen} : CheckoutProps) => {
  const {cartItems, totalPrice, setCartItems} = useContext(CartContext);
  const [successMessg , setSuccessMessg] = useState(false)
  const [formData, setFormData] = useState<OrderUserInfo>({} as OrderUserInfo)
  const [count, setCount] = useState(5);
  const [notOk, setNotOk] = useState(false);
  const router = useRouter();
  const handleChange = async (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({...formData, [e.target.name] : e.target.value})
  }
  const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
   e.preventDefault();
   const form = e.target as HTMLSelectElement;
   const isValid = form.checkValidity()
   if (isValid) {
    setNotOk(false);
    setSuccessMessg(true);
    createOrder(formData, totalPrice).then((response) => {
     /*if (typeof window !== 'undefined') {
       localStorage.setItem('order', JSON.stringify(response))
     }*/
     router.push(`/orders/${response?._id}`)
    })
   } else {
    setNotOk(true)
    alert("Please Enter Your Info Correct")
   }
   
   }
   useEffect(() => {
    if (successMessg) {
      const timer = setTimeout(() => {
        if (count > 1) {
          setCount(prev => prev - 1);
        }
      }, 1000)
    return () => {
      clearTimeout(timer)
    }
  }
   } )
   useEffect(() => {
     if (successMessg) {
        const timer = setTimeout(() => {
          setSuccessMessg(false);
          setCartItems([]);
          setIsOpen(false)
        }, 5000)
        return () => {
          clearTimeout(timer)
        }
     }
   }, [successMessg, setCartItems, setIsOpen])
  return (
    <>
      {successMessg ? <div className="flex flex-col items-center w-full justify-center h-full">
        <h2 className="text-[1.3rem] font-semibold text-black mb-4">Thank you! Your order has been placed</h2>
        <Image
          src='/images/success.gif'
          alt="success"
          width={110}
          height={110}
        />
        <div className="mt-5 text-[0.97rem] text-gray-600">This window will close in <span className="text-orange">{count}</span> seconds</div>
      </div> : <div className="w-full flex flex-col px-4 py-7">
      <h3 className="uppercase font-bold text-center lg:text-left text-[1.1rem] mb-2 lg:mb-5">shipping & checkout</h3>
      <form className="w-full flex flex-col" onSubmit={handleSubmit}>
      <div className="flex lg:flex-row flex-col lg:gap-x-4 h-[86vh] lg:h-[53vh]">
        <div className="h-full flex-1 overflow-y-auto lg:overflow-y-visible py-3 px-8 lg:px-0 lg:py-0">
          <div className="h-full flex flex-col gap-3">
            <div className="flex flex-col lg:flex-row justify-between gap-3 lg:gap-0 lg:gap-x-3">
              <input type="text" name="firstName" className={`${notOk ? 'border-orange': 'border-gray-200'} input`} placeholder="First Name" required onChange={handleChange} pattern="[A-Za-z]{2,30}"/>
              <input type="text" name="lastName" className={`${notOk ? 'border-orange': 'border-gray-200'} input`} placeholder="Last Name" required onChange={handleChange} pattern="[A-Za-z]{2,30}"/>
            </div>
            <div className="flex flex-col lg:flex-row justify-between gap-y-4 lg:gap-0 lg:gap-x-3">
              <input type="text" name="phone" className={`${notOk ? 'border-orange': 'border-gray-200'} input`} placeholder="Phone" required onChange={handleChange} pattern="^(00201|\+201|01)[0-2,5]{1}[0-9]{8}$"/>
              <input type="text" name="anotherPhone" className={`${notOk ? 'border-orange': 'border-gray-200'} input`} placeholder="Another-Phone" onChange={handleChange} pattern="^(00201|\+201|01)[0-2,5]{1}[0-9]{8}$"/>
            </div>
            <div className="flex flex-col lg:flex-row justify-between gap-3 lg:gap-0 lg:gap-x-3">
              <input type="text" name="streetName" className="input" placeholder="Street Name" required onChange={handleChange}/>
              <input type="number" name="streetNo" className="lg:max-w-[30%] input" placeholder="Street No." onChange={handleChange}/>
            </div>
            <div className="flex flex-row justify-between gap-3 lg:gap-0 lg:gap-x-3 xxs:flex-col">
              <input type="text" name="block" className="input" placeholder="Block" onChange={handleChange}/>
              <input type="text" name="floor" className="input" placeholder="Floor" onChange={handleChange}/>
              <input type="number" name="apartment" className="input" placeholder="Apt. No." onChange={handleChange}/>
            </div>
            <div className="flex-1">
              <textarea className="resize-none h-full input" name="mentions" placeholder="Mentions (optional)" onChange={handleChange}></textarea>
            </div>
          </div>
        </div>
        <div className="h-full flex-1 lg:max-w-[40%] flex flex-col pt-2 px-8 lg:pt-0 lg:px-4">
          <div className="border rounded-md mb-4 p-4">
          <h4 className="uppercase font-semibold text-black mb-2 border-b border-gray-200 pb-2 text-[0.97rem]">Your Order</h4>
          <div className="h-[230px] py-2 flex flex-col gap-y-4 overflow-y-scroll overflow-hidden scrollbar-thin scrollbar-thumb-gray-100 scrollbar-track-white pr-1">
            {
              cartItems?.map((item, i) => (<div key={i} className="flex justify-between">
                <div className="flex gap-x-2 text-[0.89rem]">
                  <div className="capitalize">{item.name}</div>
                  <div>{item.amount! > 1 && `x ${item.amount}`}</div>
                </div>
                <div className="text-[0.89rem]">{item.price * item.amount!} LE</div>
              </div>))
            }
          </div>
          <div className="flex justify-between">
            <span className="uppercase font-semibold text-[0.9rem]">total</span>
            <span className="font-semibold text-[0.9rem]">{totalPrice} LE</span>
          </div>
          </div>
          <button className="bg-orange opacity-80 text-white font-semibold py-2 px-5 text-[0.98rem] rounded-lg" type="submit">Place Order</button>
        </div>
      </div>
      </form>
    </div>}
    </>
  )
}

export default Checkout