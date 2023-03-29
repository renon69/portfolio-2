import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import bg3 from '../images/svg/bg3.svg'

const Contact = () => {
  const[sent, setSent] = useState("send")
  const handleClick = () => setSent('message sent ' )


  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2b8icsa', 'template_yuodxq7', form.current, 'E9oe2NAod0cPLlRIA')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    
    <section className=' h-custom3  relative ' id='contact'>
       <div className=" text-center   mx-28 ">
       
     <div class="grid grid-auto-fit gap-10 flex justify-center  ">
     
        {/* start of grid */}
        <div className='flex justify-center'>
          <img className='absolute ' src={bg3} alt="" />
        </div>
        

        <div className="container bg-gray-300 border border-neutral-900  w-custom h-custom2 rounded-2xl shadow-2xl ">
          <h3>SAY HELLO</h3>
          <div className="  "></div>
          <form className='mx-20' ref={form} onSubmit={sendEmail}  >
          <div className="grid grid-auto-fit gap-4 ">
            <input
             className='bg-white h-10 placeholder-black'
              type="text" 
              placeholder='name'
              pattern = '^[a-zA-Z]{2,}([ ][a-zA-Z]{2,})*$'
              required
              name='user_name'
              />
            <input
             className='bg-white bg-opacity-50 h-10 placeholder-black' 
            type="text"
             placeholder='email'
             name='user_email'
             required
             pattern = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
             />
            <input
             className='bg-white h-10 placeholder-black'              
              type="tel"
              placeholder='telephone'
              required
          
              />
            <textarea 
            className='bg-white bg-opacity-50 placeholder-black' 
             name="message" 
            id="" rows="6" placeholder='message'></textarea>
            <button onClick={handleClick}
             className=' bg-white w-20 flex justify-center opacity-50'>{sent}</button>
             
          </div>
          </form>
        </div>

       
    </div>
       </div>

    </section>


  )
}

export default Contact