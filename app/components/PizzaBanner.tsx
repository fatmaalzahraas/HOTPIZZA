'use client';
import Image from "next/image";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
const PizzaBanner = () => {
  return (
    <>
    <section className="bg-hero lg:min-h-[650px]">
      <div className="flex items-center flex-col md:flex-row pt-[150px] md:pt-[90px] lg:pt-[70px]">
        <div className="xl:w-[35%] lg:w-[40%] md:w-[45%] w-[68%] order-2 md:order-1">
        <MouseParallaxContainer globalFactorX={0.3} globalFactorY={0.2} resetOnLeave>
          <MouseParallaxChild factorX={0.1} factorY={0.1} className="relative">
            <div className="lg:ml-[-100px]">
            <Image 
              src='/images/pizza-banner.png'
              alt="pizza-banner"
              width={560}
              height={560}
            />
          </div>
          <MouseParallaxChild factorX={0.3} factorY={0.3} className="absolute lg:top-[40px] xl:top-[60px] lg:right-[30px] xl:right-[25px] 2xl:right-[90px] hidden lg:flex">
            <Image
              src='/images/leaves.png'
              alt="leaves"
              width={80}
              height={70}
             />
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.5} factorY={0.3} className="absolute lg:top-[410px] xl:top-[170px] lg:right-[30px] xl:right-[5px] 2xl:right-[60px] 2xl:top-[190px] hidden lg:flex">
            <Image
              src='/images/garlic-2.png'
              alt="garlic-2"
              width={65}
              height={65}
             />
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.2} factorY={0.3} className="absolute xl:top-[230px] xl:right-[5px] 2xl:top-[250px] 2xl:right-[50px] hidden xl:flex">
            <Image
              src='/images/garlic-1.png'
              alt="garlic-1"
              width={56}
              height={55}
             />
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.2} factorY={0.2} className="absolute xl:bottom-[130px] 2xl:bottom-[140px] 2xl:right-[60px] xl:right-[5px] hidden xl:flex">
            <Image
              src='/images/chilli-1.png'
              alt="chilli-1"
              width={55}
              height={55}
             />
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.3} factorY={0.4} className="absolute lg:bottom-[25px] xl:bottom-[40px] 2xl:bottom-[60px] lg:right-[70px] xl:right-[50px] 2xl:right-[100px] hidden lg:flex">
            <Image
              src='/images/chilli-2.png'
              alt="chilli-2"
              width={56}
              height={55}
             />
          </MouseParallaxChild>
          </MouseParallaxChild>
        </MouseParallaxContainer>
        </div>
        <div className="w-[100%] md:w-[52%] lg:w-[58%] xl:w-[55%] md:mt-[10px] lg:mt-[-50px] xl:mt-[-130px] order-1 md:order-2">
           <div className="flex flex-col items-center justify-start">
            <div className="relative bg-orange opacity-75 w-[230px] xxs:w-[210px] xxs:mb-1">
              <div className="absolute w-0 h-0 border-transparent border-t-orange border-t-[25px] border-l-[8px] border-r-[18px] right-[-13px] top-0"></div>
              <div className="absolute w-0 h-0 border-transparent border-b-orange border-b-[25px] border-l-[8px] border-r-[18px] right-[-13px] bottom-0"></div>
              <h2 className="text-black/80 font-bold md:text-[1.1rem] lg:text-[1.2rem] text-center py-1">AUTHENTIC FLAVOR</h2>
              <div className="absolute w-0 h-0 border-transparent border-t-orange border-t-[25px] border-l-[18px] border-r-[8px] left-[-13px] top-0"></div>
              <div className="absolute w-0 h-0 border-transparent border-b-orange border-b-[25px] border-l-[18px] border-r-[8px] left-[-13px] bottom-0"></div>
            </div>
            <div className="flex flex-col items-center">
            <h1 className="text-white font-bold text-[3.1rem] md:text-[3.2rem] lg:text-[3.3rem] stroke-three">PIZZA</h1>
            <h1 className="text-white font-bold text-[2.4rem] md:text-[2.5rem] lg:text-[2.6rem] stroke-three">DELIVERY</h1>
            </div>
            <p className="text-white text-semibold xxs:w-[90%] xxs:text-center md:text-[1.1rem] lg:text-[1.2rem] mt-2">order pizza and get delivery in fastest time in town</p>
           </div>
        </div>
      </div>
    </section>
        <Image 
              src='/images/leaves.png'
              alt='leaves'
              width={100}
              height={100}
              className="absolute lg:top-[110px] xl:top-[120px] lg:right-[80px] xl:right-[130px] hidden lg:flex rotate-12"
            />
            <Image 
            src='/images/mushrooms.png'
            alt="mushrooms"
            width={90}
            height={90}
            className="absolute lg:bottom-[40px] xl:bottom-[180px] lg:right-[70px] xl:right-[110px] hidden lg:flex"
          />
            <Image
              src='/images/chilli-2.png'
              alt="chilli"
              width={70}
              height={70}
              className="absolute lg:top-[200px] xl:top-[190px] lg:left-[500px] xl:left-[570px] 2xl:left-[680px] hidden lg:flex"
             />
    </>
  )
}

export default PizzaBanner;