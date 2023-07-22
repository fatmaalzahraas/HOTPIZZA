"use client";
import { Order } from "@/types/order";
import { CartItemsType, Topping } from "@/types/pizza";
import React, { createContext, useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

type CartContextType = {
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
  addToCart: (pizzaObj: CartItemsType) => void;
  cartItems: CartItemsType[];
  handleIncrement: (id: number, price: number, size: string, crust: string, toppings: Topping[]) => void;
  handleDecrement: (id: number, price: number, size: string, crust: string, toppings: Topping[]) => void;
  removeFromCart: (
    id: number,
    price: number,
    crust: string,
    size: string
  ) => void;
  quantity: number;
  totalPrice: number;
  setCartItems: React.Dispatch<React.SetStateAction<CartItemsType[]>>,
};
export const CartContext = createContext<CartContextType>(
  {} as CartContextType
);
export const CartContextProvider = ({ children }: Props) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState<CartItemsType[]>([]);
  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const amount = cartItems.reduce((acc,curr) => acc + curr.amount! , 0)
    setQuantity(amount)
  }, [cartItems]);
  useEffect(() => {
    const sum = cartItems.reduce(
      (total, item) => total + Number(item.price) * item.amount!,
      0
    );
    setTotalPrice(sum);
  }, [cartItems]);
  const addToCart = (pizzaObj: CartItemsType) => {
    const { id, image, name, price, size, crust, additionalToppings, amount } =
      pizzaObj;
    const pizzaInfo = {
      id,
      image,
      name,
      price,
      size,
      crust,
      additionalToppings,
      amount: 1,
    };
    additionalToppings?.sort((a, b) => a.name.localeCompare(b.name));
    const existingPizzaIndex = cartItems.findIndex(
      (item) =>
        item.id === pizzaInfo.id &&
        item.price === pizzaInfo.price &&
        item.size === pizzaInfo.size &&
        item.crust === pizzaInfo.crust &&
        JSON.stringify(item.additionalToppings) ===
          JSON.stringify(pizzaInfo.additionalToppings)
    );
    //setQuantity((prev) => prev + 1);
    if (existingPizzaIndex === -1) {
      setCartItems([...cartItems, pizzaInfo]);
    } else {
      const newCartItems = [...cartItems];
      newCartItems[existingPizzaIndex].amount! += 1;
      setCartItems(newCartItems);
    }
  };
  const handleIncrement = (id: number, price: number, size: string, crust: string, toppings: Topping[]) => {
    const existingPizzaIndex = cartItems.findIndex(
      (item) => item.id === id && item.price === price && item.size === size && item.crust === crust && JSON.stringify(item.additionalToppings) === JSON.stringify(toppings)
    );
    if (existingPizzaIndex !== -1) {
      //setQuantity((prev) => prev + 1);
      const newCartItems = [...cartItems];
      newCartItems[existingPizzaIndex].amount! += 1;
      setCartItems(newCartItems);
    }
  };
  const handleDecrement = (id: number, price: number, size: string, crust: string, toppings: Topping[]) => {
    const existingPizzaIndex = cartItems.findIndex(
      (item) => item.id === id && item.price === price && item.size === size && item.crust === crust && JSON.stringify(item.additionalToppings) === JSON.stringify(toppings)
    );
    if (existingPizzaIndex !== -1) {
      const newCartItems = [...cartItems];
      newCartItems[existingPizzaIndex].amount! -= 1;
      setCartItems(newCartItems);
    }
  };
  const removeFromCart = (
    id: number,
    price: number,
    crust: string,
    size: string
  ) => {
    const existingPizzaIndex = cartItems.findIndex(
      (item) =>
        item.id === id &&
        item.price === price &&
        item.crust === crust &&
        item.size === size
    );
    if (existingPizzaIndex !== -1) {
      const newCartItems = [...cartItems];
      newCartItems.splice(existingPizzaIndex, 1);
      setCartItems(newCartItems);
    }
  };
 
  return (
    <CartContext.Provider
      value={{
        showCart,
        setShowCart,
        addToCart,
        cartItems,
        handleIncrement,
        handleDecrement,
        removeFromCart,
        quantity,
        totalPrice,
        setCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
