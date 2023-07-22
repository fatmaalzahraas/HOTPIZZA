import Image from "next/image"
const PizzaLoading = () => {
    return (
        <div className="h-screen bg-white relative z-30 flex items-center justify-center">
           <div className="relative w-[200px] h-[200px] rounded-full">
           <div className="absolute -rotate-[45deg] top-[6%] left-[50%] translate-x-[-50%]">
             <Image
                src={'/images/loader3.png'}
                alt="preloader"
                width={65}
                height={65}
                
             />
           </div>
           <div className="absolute top-[22%] left-[55%] rotate-[28deg] animate-[slice2_0.8s_ease-in-out_infinite_alternate] opacity-0">
             <Image
                src={'/images/loader3.png'}
                alt="preloader"
                width={65}
                height={65}
                
             />
           </div>
           <div className="absolute top-[47%] left-[48%] rotate-[96deg] animate-[slice3_0.8s_ease-in-out_infinite_alternate] opacity-0">
             <Image
                src={'/images/loader3.png'}
                alt="preloader"
                width={65}
                height={65}
                
             />
           </div>
           
           <div className="absolute top-[48%] left-[20%] rotate-[170deg] animate-[slice4_0.8s_ease-in-out_infinite_alternate] opacity-0" >
             <Image
                src={'/images/loader3.png'}
                alt="preloader"
                width={65}
                height={65}
                
             />
           </div>
           <div className="absolute top-[21%] left-[12%] -rotate-[116deg] animate-[slice5_0.8s_ease-in-out_infinite_alternate] opacity-0">
             <Image
                src={'/images/loader3.png'}
                alt="preloader"
                width={65}
                height={65}
                
             />
           </div>
           </div>
        </div>
    )
}

export default PizzaLoading;