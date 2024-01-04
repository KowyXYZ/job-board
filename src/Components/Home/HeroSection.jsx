import React from 'react'

import heroImg from '../../Assets/heroimg.png'


function HeroSection() {

  return (
    <div className='flex justify-between items-center py-12'>
        <div className='flex flex-col gap-4'>
          <p className='text-[48px] font-semibold w-[700px]'>Find a job that suits your interest & skills.</p>
          <p className='text-[18px] w-[500px]'>Aliquam vitae turpis in diam convallis finibus in at risus. Nullam in scelerisque leo, eget sollicitudin velit bestibulum.</p>
          <div className='flex gap-4 border-[1px] p-2 shadow-xl'>
            <input className='w-full' placeholder='Job title, Keyword...' type="text" />
            <input className='w-full' placeholder='Your Location' type="text" />
            <button className='p-2 bg-[#0066FF] w-1/2 text-[#Fff]'>Find Job</button>
          </div>
        </div>
        <div>
          <img className='w-fill ' src={heroImg} alt="" />
        </div>
    </div>
  )
}

export default HeroSection