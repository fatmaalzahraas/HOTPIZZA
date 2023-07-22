'use client';
import { Order } from "@/types/order";
import Link from "next/link";
import { useEffect, useState } from "react";
const UserOrderTab = () => {
    const [order, setOrder] = useState<Order | null>(null)
    useEffect(() => {
        const orderString = localStorage.getItem('order');
        if (orderString  !== null) {
            const orderObj = JSON.parse(orderString)
            setOrder(orderObj)
        } 
    }, [])
  
    console.log(order)
  return (
    <div className="absolute w-[63px] h-[63px] xxs:rounded-full xs:rounded-full bottom-[94px] right-4 sm:w-[110px] sm:h-[60px] sm:rounded-ee-full sm:rounded-es-full bg-white sm:left-[50%] sm:top-0 border-2 sm:border-t-0 border-orange sm:border-t-transparent font-semibold cursor-pointer">
        <Link href={`/orders/${order?._id}`} className="flex flex-col items-center justify-center">
        <span>Your</span>
        <span>Order</span>
        </Link>
    </div>
  )
}

export default UserOrderTab