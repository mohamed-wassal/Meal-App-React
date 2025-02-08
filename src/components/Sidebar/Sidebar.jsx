import React from 'react'
import styles from './Sidebar.module.css'
import logo from '../../assets/logo.png.png'
import { NavLink } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='bg-[#f9fafb]  lg:w-[20%]  lg:fixed lg:top-0 lg:left-0 lg:bottom-0  '>

     <img src={logo} className='w-full' alt="Logo" />
     <ul className='px-2'>
      <li className='text-center my-4'>
        <NavLink className=" block py-2 px-4 border-[1px] border-gray-300 rounded-2xl font-bold text-xl  bg-orange-primary text-white  " ><i className="fa-solid fa-utensils px-1 me-2"></i>Meals</NavLink>
      </li>
      <li className='text-center my-4'>
        <NavLink className=" block py-2 px-4 border-[1px] border-gray-300 rounded-2xl font-bold text-xl " ><i className="fa-solid fa-utensils px-1 me-2"></i>Ingredients</NavLink>
      </li>
      <li className='text-center my-4'>
        <NavLink className=" block py-2 px-4 border-[1px] border-gray-300 rounded-2xl font-bold text-xl " ><i className="fa-solid fa-utensils px-1 me-2"></i>Area</NavLink>
      </li>
     </ul>
    </div>
  )
}

export default Sidebar
