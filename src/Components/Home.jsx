import React from 'react'
import {BsArrowUpRight} from 'react-icons/bs'
import Wave from '../Ui/Wave'
import About from './About'
import Footer from './Footer'
import Dots from '../Ui/Dots'
import { useNavigate } from 'react-router-dom'
import gift from '../Images/580b585b2edbce24c47b2415.webp'
const Home = () => {
  const navigate=useNavigate();
  function handleClick()
  {
    navigate('/GiftGenerator')
  }
  return (
    <div className='h-screen'>
    <div className='h-full md:mt-36 '>
    <div className='flex w-10/12 mx-auto px-7 max-lg:py-10 '>
      <div className='md:w-[60%] w-full mt-20 '>
        <div className=' lg:text-7xl text-5xl font-thin leading-1 tracking-wide mb-10 relative font-Open-Sans'>The <span >Perfect Gift</span> For <span >Everyone</span> <Dots/> <p className='text-lg mt-3'>Choose the best gift for your loved ones with the help of Airtificial Intelegence</p></div>
        <button className='text-left border-2 rounded-full border-black md:py-2 md:px-10 px-8 py-3 flex items-center gap-x-2 cursor-pointer font-Open-Sans' onClick={handleClick}>Get A Gift <span><BsArrowUpRight/></span></button>
      </div>
      <div className='max-md:hidden'>
      <img src={gift} alt="" className='lg:w-[400px]  w-[300px]' />
      </div>

    </div>
    <Wave/>
    </div>
  
    <About/>
    <Footer/>
    </div>
  )
}

export default Home
