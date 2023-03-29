import React from "react";
import Typed from "react-typed";
import bg from '../images/svg/bg.svg'


const Hero = () => {
    return (
   
     <div className='bg-gradient-to-tr from-sky-800 via-sky-300 to-sky-400 mx-auto rounded-br-3xl m-auto'>
         <div className="  text-center flex-col h-custom3 md:h-custom2 xl:h-custom 
          justify-center ">
         <p className='text-green-700 font-bold p-2 md:text-4xl text-2xl xl:pt-32 md:pt-20 pt-20 '> Hi, I'am</p>
         <h1 className='md:text-4xl sm:text-6xl text-4xl font-bold md:py-6 xl:text-7xl'>Renon Sugitarios</h1>
         <div className='flex flex-row justify-center'>
          <h2 className='md:text-5xl sm:text-4xl text-xl font-bold pl-2'>Web <Typed 
          className='xl:text-7xl md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 '
          strings={['Developer','Designer']} 
          typeSpeed={120}
           backSpeed={120} 
           loop /></h2>
          
         </div>
         <p className='md:text-2xl text-l font-bold py-4 md:mt-12'>I Turn Ideas into Reality</p>
    
      
    
         </div>
         </div>
      
  
    )
  }

  export default Hero;
  