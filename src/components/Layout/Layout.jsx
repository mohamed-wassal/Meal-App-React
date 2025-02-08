import React from 'react'
import styles from './Layout.module.css'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
const Layout = () => {
  return (
    <>
  <Sidebar/>
  <div className='lg:ms-[20%] bg-[#F4F2EE]'>
    <div className="container">
    <Outlet/>
    </div>
  </div>
  
  <Footer/>
  </>
  )
}

export default Layout
