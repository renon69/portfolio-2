import { Button } from '@chakra-ui/react'
import React from 'react'

import frontend2 from '../images/svg/frontend2.svg'
import backend from '../images/svg/backend.svg'
import ui from '../images/svg/ui.svg'

const Sidebar = () => {
  return (
  

<div class="pt-16 pb-custom bg-white ">  
    <div class="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
        <div class="mx-auto grid gap-6 md:w-3/4  lg:grid-cols-3 -mt-40 pb- ">
            <div class="bg-gray-200 rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8 mt-10  ">
                <div class="mb-12 space-y-4">
                    <h3 class="text-2xl font-semibold text-purple-900">UI Design</h3>
                    <p class="mb-6">I create designs that meet the client's needs, and constantly staying up-to-date with the latest design trends to ensure that my designs are always innovative</p>
                    <Button><a href="#" class="block font-medium text-purple-600">Know more</a></Button>
                </div>
                <img src={ui} class="w-2/3 ml-auto -mb-12" alt="illustration" loading="lazy" width="900" height="600"/>
            </div>
            <div class="bg-gray-200 rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8 mb-10">
                <div class="mb-12 space-y-4">
                    <h3 class="text-2xl font-semibold text-purple-900">Front End</h3>
                    <p class="mb-6">web design and front-end development using HTML, tailwind CSS, JavaScript, and React, for performance optimization to improve page load times and enhance the user experience</p>
                    <a href="#" class="block font-medium text-purple-600">Know more</a>
                </div>
                <img src={frontend2} class="w-3/4 ml-auto" alt="illustration" loading="lazy" width="900" height="600"/>
            </div>
            <div class="bg-gray-200 rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8 mt-10  ">
                <div class="mb-12 space-y-4">
                    <h3 class="text-2xl font-semibold text-purple-900">Back End</h3>
                    <p class="mb-6">I design and develop a server-side logic using PHP with Laravel framework. and also integrate MySQL databases to store and retrieve data</p>
                    <a href="#" class="block font-medium text-purple-600">Know more</a>
                </div>
                <img src={backend} class="w-2/3 ml-auto " alt="illustration" loading="lazy" width="900" height="600"/>
            </div>
        </div>
    </div>
</div>
  )
}

export default Sidebar