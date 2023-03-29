import React from 'react'
import bg2 from '../images/svg/bg2.svg'

const Projects = () => {
  return (
    <div className="pt-custom pb-custom">
      <div className='flex justify-center '>
        <img className='absolute z-10' src={bg2} alt="" />
      </div>
      <div className="z-0 grid xl:grid-cols-2 grid-cols-1 container mx-auto xl:gap-10 gap-4 xl:px-64 px-10">
        <div className="h-60 border border-stone-900 rounded-2xl shadow-xl"></div>
        <div className="h-60 border border-stone-900 rounded-2xl shadow-xl"></div>
        <div className="h-60 border border-stone-900 rounded-2xl shadow-xl"></div>
        <div className="h-60 border border-stone-900 rounded-2xl shadow-xl"></div>
      </div>
    </div>
  )
}

export default Projects