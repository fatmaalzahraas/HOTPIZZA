'use client';
import { CartContext } from "@/context/CartContext"
import { useContext, useState } from "react"
import { FaRegWindowClose } from "react-icons/fa";
import CartItem from "./CartItem";
import UseModal from "./UseModal";
import Modal from "./Modal";
import Checkout from "./Checkout";

const CartList = () => {
  const { showCart, setShowCart, cartItems, quantity, totalPrice} = useContext(CartContext);
  const {setIsOpen, isOpen, closeModal, openModal} = UseModal();
  //const [paymentMethod, setPaymentMethod] = useState<number>(null!)
  const handleClose = () => {
    setShowCart(false)
  }
  const handleCheckout = () => {
    setShowCart(false);
    setIsOpen(true);
    //setPaymentMethod(0)
  }
  return (
    <>
      <div className={`${showCart ? 'bottom-0 left-0 sm:top-0' : '-bottom-full sm:top-0 sm:-left-full'} fixed z-30 bg-white h-full w-full sm:w-[400px] transition-all duration-500`}>
        <div className="flex justify-between items-center border-b border-gray-200 py-5 px-6">
          <h3 className="text-black text-[0.95rem]">Cart Bag({quantity})</h3>
          <FaRegWindowClose className="text-orange text-[1.4rem] cursor-pointer" onClick={handleClose} />
        </div>
        {
          cartItems.length === 0 ? <div className="flex items-center h-[570px] justify-center text-black text-[0.95rem]">Your cart is empty</div> : (<>
            <div className="xxs:py-1 py-4 pr-3">
              <div className={`h-[65vh] overflow-y-scroll scrollbar-thin scrollbar-thumb-orange/80 px-8 ${cartItems.length >= 3 ? 'scrollbar-track-gray-200' : 'scrollbar-track-transparent'}`}>
                {
                  cartItems?.map((pizza, i) => {
                    return <CartItem key={i} pizza={pizza} />
                  })
                }
              </div>
            </div>
            <div className="px-8 py-2 xxs:mt-4 mt-5">
              <div className="flex items-center justify-between font-semibold text-[1rem] ">
                <span className="">Total Price: </span>
                <span>{totalPrice}LE</span>
              </div>
              <button className="mt-3 bg-orange text-white w-full py-2 rounded-md opacity-80" onClick={handleCheckout}>Checkout</button>

            </div>
          </>)
        }
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} openModal={openModal}>
          <div className="w-full flex justify-end">
            <FaRegWindowClose className="text-orange text-[1.5rem] cursor-pointer hover:scale-105 duration-75 absolute top-6 right-5" onClick={closeModal}/>
          </div>
          <Checkout setIsOpen={setIsOpen}/>
      </Modal>
    </>
  )
}

export default CartList