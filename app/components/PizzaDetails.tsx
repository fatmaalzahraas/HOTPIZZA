"use client";
import { Pizza, Topping } from "@/types/pizza";
import Image from "next/image";
import PizzaSize from "./PizzaSize";
import React, { useState, useEffect, Suspense } from "react";
import PizzaCrust from "./PizzaCrust";
import PizzaToppings from "./PizzaToppings";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import LoadingSkeleton from "./LoadingSkeleton";

type Props = {
  pizza: Pizza;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
};
const PizzaDetails = ({ pizza, isOpen, setIsOpen }: Props) => {
  const { setShowCart, addToCart } = useContext(CartContext)
  const [size, setSize] = useState("small");
  const [crust, setCrust] = useState("traditional");
  const [addToppings, setAddToppings] = useState<Topping[]>([]);
  const [addToppingsPrice, setAddToppingsPrice] = useState(0);
  const [pizzaPrice, setPizzaPrice] = useState(0);
  useEffect(() => {
    size === "small"
      ? setPizzaPrice(pizza.smallPrice + addToppingsPrice)
      : size === "medium"
        ? setPizzaPrice(pizza.mediumPrice + addToppingsPrice)
        : size === "large"
          ? setPizzaPrice(pizza.largePrice + addToppingsPrice)
          : null;
  }, [
    size,
    addToppingsPrice,
    pizza.smallPrice,
    pizza.mediumPrice,
    pizza.largePrice,
  ]);
  useEffect(() => {
    if (addToppings.length > 0) {
      const toppingsPrice = addToppings.reduce((acc, cur) => {
        return acc + cur.price;
      }, 0);
      setAddToppingsPrice(toppingsPrice);
    } else {
      setAddToppingsPrice(0);
    }
  }, [addToppings]);
  const handleClick = (id: number, image: string, name: string, crustType: string, sizeType: string, toppings: Topping[], price: number) => {
    setIsOpen(false)
    setShowCart(true);
    const pizzaData = {
      id,
      image,
      name,
      crust: crustType,
      size: sizeType,
      additionalToppings: toppings,
      price
    }
    addToCart(pizzaData)
  }
  return (
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-[55%] w-[75%] xxs:w-[55%]">
          <Image src={pizza.image} alt={pizza.name} width={320} height={320} />
        </div>
        <div className="lg:w-[45%] py-2">
          <div className="flex flex-col items-center lg:items-start h-[45vh] md:h-[35vh] lg:h-[50vh] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-white pr-8">
            <div>
              <h2 className="text-black font-semibold text-[1.3rem] sm:text-[1.5rem] capitalize">
                {pizza.name}
              </h2>
            </div>
            <div className="mt-1 lg:mb-7 mb-4">
              <span className="text-[0.87rem] font-medium">
                {size === "small"
                  ? "22"
                  : size === "medium"
                    ? "27"
                    : size === "large"
                      ? "33"
                      : null}{" "}
                cm, {crust} crust
              </span>
            </div>
            <PizzaSize pizza={pizza} size={size} setSize={setSize} />
            <PizzaCrust crust={crust} setCrust={setCrust} />
            <div className="mt-5 mb-3">
              <h3 className="text-[1rem] font-semibold">Choose Topping</h3>
            </div>
            <div className="flex flex-wrap gap-2 lg:justify-start justify-center">
              {pizza.toppings.map((topping, index) => (
                <PizzaToppings key={index} topping={topping} setAddToppings={setAddToppings} addToppings={addToppings} />
              ))}
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-center mt-7 lg:mt-5">
            <button className="flex items-center justify-center py-2 lg:px-5 px-7 bg-orange opacity-80 text-white text-[0.87rem] font-semibold rounded-lg hover:scale-105 hover:transition-all hover:duration-200 lg:order-1 order-2" onClick={() => handleClick(pizza._id, pizza.image, pizza.name, crust, size, addToppings, pizzaPrice)}>Add To Cart</button>
            <span className="font-bold text-[1rem] lg:text-[0.95rem] lg:order-2 order-1 lg:mb-0 mb-3">(Price) {pizzaPrice} LE</span>
          </div>
        </div>
      </div>
  );
};

export default PizzaDetails;
