// import { Grid, GridItem } from '@chakra-ui/react'
// import React from 'react'
import Hero from './components/Hero'
// import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Sidebar from './components/Sidebar'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import bg2 from '../src/images/svg/bg2.svg'

const App = () => {
  return (
    
    <div>
      <div className='flex justify-center z-0'>
        <img className='absolute ' src={bg2} alt="" />
      </div>
     
     < Hero/>
      <Sidebar/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
     
    </div>

  )
}

export default App