import React from "react"

type Props = {
  isOpen: boolean,
  openModal: () => void,
  closeModal: () => void,
  styles?: string, 
  children: React.ReactNode
}

const Modal = ({isOpen, openModal, closeModal, styles ,children} : Props) => {
  return (
    <>
      {isOpen && <div className="w-screen h-screen bg-blackTransparent fixed top-0 left-0 z-40 flex items-center justify-center" onClick={closeModal}>
          <div className={`bg-white w-full h-screen lg:max-w-[800px] lg:max-h-[550px] lg:rounded-2xl p-5 flex flex-col  items-center lg:items-start relative ${styles}`} onClick={(event) => event.stopPropagation()}>
            {children}
          </div>
        </div>}
    </>
  )
}

export default Modal