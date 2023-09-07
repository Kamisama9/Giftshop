import React from 'react'
import Topwave from '../Ui/Topwave'
const About = () => {
  return (
    <div className=' -z-50 relative pb-40 font-Open-Sans max-md:mt-10' id='about'>
      <div className=' w-6/12 flex mx-auto flex-col'>
      <h1 className='font-bold md:text-5xl text-4xl text-center text-[#1adb80] leading-[1.25rem] tracking-wider mb-8'>About US</h1>
      <p className='text-gray-500 md:text-lg leading-relaxed '>Welcome to Perfect Present, your dedicated companion in the realm of personalized and heartfelt gifts, all powered by cutting-edge artificial intelligence.</p>

      <p className="text-gray-500 md:text-lg leading-relaxed mt-7">Our mission is simple yet impactful: to transform the art of gift-giving into a seamless and deeply meaningful experience. With the assistance of AI, you have the remarkable ability to fashion one-of-a-kind, unforgettable gifts that will etch cherished memories in the hearts of your beloved recipients..</p>
      </div>
      <Topwave/>
    </div>
  )
}

export default About
