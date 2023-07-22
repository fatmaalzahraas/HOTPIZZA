'use client';
import { useState } from "react"

const UseModal = () => {
    const [isOpen, setIsOpen] = useState(false)
    const openModal = () =>  setIsOpen(true);
  
    const closeModal = () => setIsOpen(false);
  return {
    openModal,
    closeModal,
    isOpen,
    setIsOpen,
  }
}

export default UseModal