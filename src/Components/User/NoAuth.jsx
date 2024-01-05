import React from 'react'

function NoAuth() {
  return (
    <div className='justify-center items-center flex py-32 flex-col gap-2'>
        <h1 className='text-[24px] font-semibold'>Welcome To Jobify</h1>
        <form className='flex flex-col gap-5  p-2 rounded-xl'>
            <input className='outline-none border-2 rounded-2xl p-2' type="text" placeholder='Enter Your Email'/>
            <input className='outline-none p-2 border-2 rounded-2xl ' type="password" placeholder='Enter Your Password'/>
            <button className='bg-[#0A65CC] text-[#fff] rounded-2xl p-1'>Submit</button>
        </form>
        <p>If You Don't Have An Account You Can Make One <span className='underline'>Here</span></p>
        <p>or</p>
        <button className='underline'>Sign In With Google</button>
    </div>
  )
}

export default NoAuth