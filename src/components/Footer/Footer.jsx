import React from 'react'
import styles from './Footer.module.css'
import logo from '../../assets/logo.png.png'
const Footer = () => {
  return (
    <div className=''>
    <div className='flex justify-between lg:ms-[20%] py-10 px-7'>
      <div className="flex w-[5%] ">
      <img src={logo} alt="logo" className=''/>
      <h3 className='italic text-2xl font-bold'> Recipe</h3>
      </div>
      <h3 className='italic text-2xl font-bold text-blue-800'> Route</h3>
    </div>
    <div className="flex justify-center py-10">
<p className='font-bold text-gray-500'>© 2025 Nagy Osama™. All Rights Reserved.</p>
    </div>
    </div>
   
  )
}

export default Footer
