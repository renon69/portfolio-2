import {  Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import js from '../images/png/js.png'
import ai from '../images/png/ai.png'
import chakra from '../images/png/chakra.png'
import figma from '../images/png/figma.png'
import laravel from '../images/png/laravel.png'
import mysql from '../images/png/mysql.png'
import php from '../images/png/php.png'
import react from '../images/png/react.png'
import tailwind from '../images/png/tailwind.png'
import git from '../images/png/git.png'



const Skills = () => {



  return (
    <div className=" container m-auto bg-gray-200 rounded-3xl  ">
      <div className='py-10 mx-auto container'>
      <Heading className='flex justify-center pb-10'>My Skills and Tools</Heading>
       <div className=' grid grid-cols-2  md:mx-32 md:grid-cols-3 xl:grid-cols-5 gap-5 xl:mx-60 px-20'>

        <div className="flex items-center justify-center"><img className='h-12' src={js} alt="" /></div>
        <div  className="flex items-center justify-center"><img className='h-12' src={react} alt="" /></div>
        <div className="flex items-center justify-center"><img className='h-9' src={tailwind} alt="" /></div>
        <div className="flex items-center justify-center"><img className='h-12' src={chakra} alt="" /></div>
        <div className="flex items-center justify-center"><img className='h-12' src={git} alt="" /></div>
        <div className="flex items-center justify-center"><img className='h-12' src={figma} alt="" /></div>
        <div className="flex items-center justify-center"><img className='h-12' src={ai} alt="" /></div>
        <div className="flex items-center justify-center"><img className='h-9' src={php} alt="" /></div>
        <div className="flex items-center justify-center"><img className='h-12' src={laravel} alt="" /></div>
        <div className="flex items-center justify-center"><img className='h-12' src={mysql} alt="" /></div>
       </div>
      </div>
    </div>
  )
}

export default Skills