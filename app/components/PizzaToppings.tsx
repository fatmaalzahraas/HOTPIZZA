'use client';
import { Topping } from "@/types/pizza";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import {BsCheck2} from 'react-icons/bs';
type Props = {
    topping: Topping,
    setAddToppings: Dispatch<SetStateAction<Topping[]>>,
    addToppings: Topping[]
}
const PizzaToppings = ({topping, setAddToppings, addToppings} : Props) => {
  const {image, name, price} = topping;
  const [isChecked, setIsChecked] = useState(false);
  const handleTopping = () => {
    if (isChecked) {
      const newTopping = new Set([...addToppings, {...topping}])
      setAddToppings(Array.from(newTopping))
    } else {
      setAddToppings(addToppings.filter(topp => topp.name !== topping.name))
    }
  }
 useEffect(() => {
    handleTopping()
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [isChecked])
  return (
    <div className="w-[70px] h-[100px] relative">
      {
        isChecked && <div className="absolute right-1 top-1">
        <BsCheck2 className="text-orange text-[0.8rem]"/>
      </div>
      }
     <div className={isChecked ? 'border-orange border-[1px] rounded-lg w-full h-full' : 'border-gray-200 w-full h-full border-[1px] rounded-lg'}>
     <label className="flex flex-col gap-y-1 items-center text-center text-[0.7rem] font-medium capitalize w-full h-full py-2 px-3 cursor-pointer">
      <input type="checkbox" name={name} className="appearance-none" onChange={(e) => setIsChecked(e.target.checked)}/>
        <Image
          src={image}
          alt={name}
          width={40}
          height={40}
        />
        {name}
      </label>
     </div>
       
    </div>
  )
}

export default PizzaToppings