import React from 'react'
import renon from '../images/png/renon.png'
import bg3 from '../images/svg/bg3.svg'

const About = () => {
  return (
    <div class='flex items-center justify-center pb-custom '>
        <div className='flex justify-center absolute '>
            <img className='' src={bg3} alt="" />
        </div>
    <div class='w-full max-w-lg pt-7 flex flex-row items-center justify-center mx-auto bg-gray-200 rounded-2xl shadow-xl  '>
        <div class="flex flex-col md:flex-row w-3/4 md:w-5/6 space-x-0 md:space-x-8">
            <div class="w-full md:w-2/5 flex flex-col items-center justify-center">
                <img className='rounded-full bg-white' src={renon} alt="" />
            </div>
            <div class="w-full md:w-3/5 space-y-4 flex flex-col justify-center items-center pb-10">
                <div class="flex flex-col justify-center">
                    <h1 class="text-center md:text-left text-2xl font-bold text-gray-900">About Me</h1>
                    <p class="inline text-gray-700 font-normal leading-6 w-full text-base">I’ am a fresh graduate with skills in UI design, front-end development, and back-end development. I am passionate about creating visually appealing and user-friendly interfaces that provide an excellent user experience. I prioritize writing clean, maintainable, and efficient code that delivers high-performance results. I am constantly seeking to learn and grow my skills to stay up-to-date with the latest technologies and industry trends.</p>
                </div>
                <ul class="space-y-4  md:space-y-0 space-x-0 md:space-x-4 flex flex-col md:flex-row text-left justify-center">
                    <li class="text-sm"><i class="iconoir-pin-alt mr-2"></i></li>
                    <li class="text-sm"><i class="iconoir-calendar mr-2"></i>2023 Graduate</li>
                </ul>

                <ul class="space-x-4 flex flex-row justify-center w-full mb-4">
                    <li class="text-sm text-gray-800"><strong class="text-gray-900"></strong>BSIT</li>
                    <li class="text-sm text-gray-800"><strong class="text-gray-900">Holy Name University</strong> </li>
                </ul>
                <button class="transition-colors bg-purple-700 hover:bg-purple-800 p-2 rounded-sm w-full text-white text-hover shadow-md shadow-purple-900 ">
                    Let's Talk
                </button>
            </div>
        </div>
    </div>
</div>
  )
}

export default About