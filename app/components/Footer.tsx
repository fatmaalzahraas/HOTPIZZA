import Link from 'next/link';
import {FaFacebook, FaFacebookMessenger} from 'react-icons/fa';
const Footer = () => {
    const fullYear = new Date().getFullYear();
  return (
    <footer className='bg-hero py-11'>
        <div className='container mx-auto px-4 md:px-7'>
        <div className='flex flex-col items-center'>
        <div className='text-[2rem] xxs:text-[1.8rem] font-openSans italic font-bold relative bg-white w-[230px] xxs:w-[200px] text-center'>
            <div className="absolute w-0 h-0 border-transparent border-t-white xxs:border-t-[25px] border-t-[30px] xxs:border-l-[8px] border-l-[10px] xxs:border-r-[18px] border-r-[20px] right-[-15px] top-0"></div>
            <div className="absolute w-0 h-0 border-transparent border-b-white xxs:border-b-[25px] border-b-[30px] xxs:border-l-[8px] border-l-[10px] xxs:border-r-[18px] border-r-[20px] right-[-15px] bottom-0"></div>
            <Link href='/'>
                <span className="stroke-one">HOT</span><span className="stroke-two">PIZZA</span>
            </Link>
        </div>
        <div className='flex items-center justify-center gap-x-4 mt-5'>
            <Link href='#'>
                <FaFacebook className='text-white text-[1.2rem]'/>
            </Link>
            <Link href='#'>
                <FaFacebookMessenger className='text-white text-[1.2rem]'/>
            </Link>
        </div>
        <p className='text-white mt-3 font-normal xxs:text-[0.9rem]'>Copyright &copy; HOTPIZZA {fullYear}. All rights reserved.</p>
        </div>
        </div>
        
    </footer>
  )
}

export default Footer