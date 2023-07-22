'use client'
import { Pizza } from "@/types/pizza"
import Image from "next/image";
import UseModal from "./UseModal";
import Modal from "./Modal";
import {FaRegWindowClose} from 'react-icons/fa'
import PizzaDetails from "./PizzaDetails";

type Props = {
  pizza: Pizza
}

const SinglePizza = ({pizza} : Props) => {
  const {openModal, closeModal, isOpen, setIsOpen} = UseModal();
  return (
    <section className="group p-2 flex flex-col items-center">
        <Image
            src={pizza.image}
            alt={pizza.name}
            width={160}
            height={160}
            onClick={openModal}
            className="cursor-pointer md:group-hover:translate-y-2 transition-all duration-[0.2s]"
          />
        <h3 className="text-black font-semibold text-[1.1rem] mt-3 capitalize" onClick={openModal}>{pizza.name}</h3>
        <p className="text-[1rem] text-tertiary mt-2">{pizza.description}</p>
        <div className="mt-5 flex w-full justify-between items-center">
          <p className="font-semibold text-black">{pizza.smallPrice}LE <span className="font-normal">(sm)</span></p>
          <button className="text-[0.9rem] text-white font-medium bg-orange opacity-80 px-4 py-2 rounded-md" onClick={openModal}>View Details</button>
        </div>
        <Modal isOpen={isOpen} closeModal={closeModal} openModal={openModal} styles='justify-center'>
          <div className="w-full flex justify-end">
            <FaRegWindowClose className="text-orange text-[1.5rem] cursor-pointer hover:scale-105 duration-75 absolute top-6 right-5" onClick={closeModal}/>
          </div>
          <PizzaDetails pizza={pizza} isOpen={isOpen} setIsOpen={setIsOpen}/>
        </Modal>
    </section>
  )
}

export default SinglePizza