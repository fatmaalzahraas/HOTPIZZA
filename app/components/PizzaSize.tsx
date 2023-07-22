import { Pizza } from "@/types/pizza"
import Image from "next/image"
import { Dispatch, SetStateAction } from "react"


type Props = {
 pizza: Pizza,
 size: string,
 setSize: Dispatch<SetStateAction<string>>
}
const PizzaSize = ({pizza, size, setSize}: Props) => {
  
  return (
    <div className="flex items-baseline gap-x-8">
      <label className="flex flex-col items-center text-[0.85rem] gap-y-[0.2rem] cursor-pointer">
        <Image 
        src={pizza.image}
        alt={pizza.name}
        width={60}
        height={60}
        className={size === 'small' ? 'border-2 border-orange p-[2px] rounded-full filter' : 'border-transparent saturate-[0.1]' }
        />
        <input type="radio" className="appearance-none" name="size" value="small" checked={size === 'small'} onChange={(e) => setSize(e.target.value)}/>
        Small
      </label>
      <label className="flex flex-col items-center text-[0.85rem] gap-y-[0.2rem] cursor-pointer">
        <Image
          src={pizza.image}
          alt={pizza.name}
          width={70}
          height={70}
          className={size === 'medium' ? 'border-2 border-orange p-[1px] rounded-full filter' : 'border-transparent saturate-[0.1]'}
        />
        <input type="radio" className="appearance-none" name="size" value="medium" checked={size === 'medium'} onChange={(e) => setSize(e.target.value)}/>
       Medium
      </label>
      <label className="flex flex-col items-center text-[0.85rem] gap-y-[0.2rem] cursor-pointer">
        <Image
          src={pizza.image}
          alt={pizza.name}
          width={80}
          height={80}
          className={size === 'large' ? 'border-2 border-orange p-[1px] rounded-full filter' : 'border-transparent saturate-[0.1]'}
        />
        <input type="radio" className="appearance-none" name="size" value="large" checked={size === 'large'} onChange={(e) => setSize(e.target.value)}/>
        Large
      </label>
    </div>
  )
}

export default PizzaSize