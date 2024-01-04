import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Global/Navbar'
import Footer from '../Components/Global/Footer'
function RootLayout() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default RootLayout