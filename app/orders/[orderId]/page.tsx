import { getOrder } from "@/sanity/sanity-utilis"
import {FaPizzaSlice} from 'react-icons/fa';
import {MdDeliveryDining, MdPayment} from 'react-icons/md';
import {BsFillBox2Fill} from 'react-icons/bs';
import {ImCheckmark} from 'react-icons/im';
import { Metadata } from "next";
import { notFound } from "next/navigation";
export async function generateMetadata({params: {orderId}} : {params : {orderId: string}}) : Promise<Metadata> {
  const orderData = await getOrder(orderId);
  if (!orderData) {
    return {
      title: 'Order Not Found',
    }
  }
  return {
    title: `HOTPIZZA - Your Order ${orderData._id}`
  }
}
const OrderInfo = async ({params: {orderId}} : {params : { orderId: string}}) => {
  const orderData  = await getOrder(orderId) 
  if (!orderData) {
    notFound();
  }
  const {_id, userInfo, status, total} = orderData;
  return (
    <>
      <div className="bg-hero min-h-screen flex flex-col pt-40 pb-16">
     <div className="flex justify-center">
     <div className="flex flex-col items-center xxs:w-full w-[450px] h-[355px] bg-white px-4 py-6 xxs:rounded-none rounded-2xl">
     <div>
        <h2 className="capitalize text-orange/80 font-bold text-[1.3rem] md:text-[1.6rem]">order in process</h2>
      </div>
      <div className="flex flex-col gap-y-6 mt-10 text-black">
        <div className="flex justify-between xxs:gap-x-4 gap-x-10 font-medium text-[0.95rem]">
          <p className="text-orange">Order ID</p>
          <p className="font-semibold">{_id}</p>
        </div>
        <div className="flex justify-between xxs:gap-x-4 gap-x-10 font-medium text-[0.95rem]">
          <p className="text-orange">Customer Name</p>
          <p className="font-semibold">{userInfo?.firstName} {userInfo?.lastName}</p>
        </div>
        <div className="flex justify-between xxs:gap-x-4 gap-x-10 font-medium text-[0.95rem]">
          <p className="text-orange">Phone</p>
          <p className="font-semibold">{userInfo?.anotherPhone ? userInfo.phone + ' - ' + userInfo.anotherPhone : userInfo.phone}</p>
        </div>
        <div className="flex justify-between xxs:gap-x-4 gap-x-10 font-medium text-[0.95rem]">
          <p className="text-orange">PaymentMethod</p>
          <p className="font-semibold"> Cash On Delivery</p>
        </div>
        <div className="flex justify-between xxs:gap-x-4 gap-x-10 font-medium text-[0.95rem]">
          <p className="text-orange">Total</p>
          <p className="font-semibold">{total} LE</p>
        </div>
      </div>
     </div>
     </div>
      <div className="text-orange flex xxs:flex-col xs:flex-col xxs:gap-y-8 xs:gap-y-8 flex-row mt-16 justify-center gap-x-12 md:gap-x-28 lg:gap-x-48">
        <div className="flex flex-col items-center gap-y-3">
          <div className="">
            <div className="bg-white rounded-full p-5 flex items-center justify-center text-[2.6rem]">
              <MdPayment />
            </div>
          </div>
          <div className="text-white font-semibold">Payment</div>
          <div className="text-secondary font-bold text-[1.1rem]">On Delivery</div>
        </div>
        <div className="flex flex-col items-center gap-y-3">
          <div className="relative">
            {status === 1 && <div className={`border-y-2 border-t-orange border-b-secondary rounded-full animate-[spinner_1s_linear_infinite] absolute w-[100px] h-[100px] top-[-0.6rem] left-[-0.6rem]`}></div>}
            <div className="bg-white rounded-full p-5 flex items-center justify-center text-[2.6rem]">
            <FaPizzaSlice />
            </div>
          </div>
          <div className="text-white font-semibold">Cooking</div>
          {status > 1 && <div className="text-green-600 text-[2rem]"><ImCheckmark /></div>}
        </div>
        <div className="flex flex-col items-center gap-y-3">
          <div className="relative">
            {status === 2 && <div className={`border-y-2 border-t-orange border-b-secondary rounded-full animate-[spinner_1s_linear_infinite] absolute w-[100px] h-[100px] top-[-0.6rem] left-[-0.6rem]`}></div>}
            <div className="bg-white rounded-full p-5 flex items-center justify-center text-[2.6rem]">
              <MdDeliveryDining />
            </div>
          </div>
          <div className="text-white font-semibold">OnWay</div>
          {status > 2 && <div className="text-green-600 text-[2rem]"><ImCheckmark /></div>}
        </div>
        <div className="flex flex-col items-center gap-y-3">
          <div className="relative">
            {status === 3 && <div className={`border-y-2 border-t-orange border-b-secondary rounded-full animate-[spinner_1s_linear_infinite] absolute w-[100px] h-[100px] top-[-0.6rem] left-[-0.6rem]`}></div>}
            <div className="bg-white rounded-full p-5 flex items-center justify-center text-[2.6rem]">
            <BsFillBox2Fill />
            </div>
          </div>
          <div className="text-white font-semibold">Delivered</div>
          {status > 3 && <div className="text-green-600 text-[2rem]"><ImCheckmark /></div>}
        </div>
      </div>
    </div>
    <div className="flex justify-center py-2">
    <p className='text-black font-medium text-[0.92rem]'>Copyright &copy; HOTPIZZA {new Date().getFullYear()}. All rights reserved.</p>
    </div>
    </>
  )
}

export default OrderInfo