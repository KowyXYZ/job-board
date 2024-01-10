import React from 'react'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../../Firebase/firebase-config'
import Cookies from 'universal-cookie'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const cookies = new Cookies()

function NoAuth({setIsAuth}) {

  const signInWithGoogle = async () => {
    const res = await signInWithPopup(auth, provider)
    try {
      cookies.set('auth-token', res?.user?.refreshToken)
      setIsAuth(true)
      window.location.reload()
    } catch (error) {
      console.log(error)
    }

  }

  const {users} = useSelector(state => state.jobs)
  
  

  return (
    <div className='justify-center items-center flex py-32 flex-col gap-2'>
        <h1 className='text-[24px] font-semibold'>Welcome To Jobify</h1>
        <form className='flex flex-col gap-5  p-2 rounded-xl'>
            <input className='outline-none border-2 rounded-2xl p-2' type="text" placeholder='Enter Your Email'/>
            <input className='outline-none p-2 border-2 rounded-2xl ' type="password" placeholder='Enter Your Password'/>
            <button className='bg-[#0A65CC] text-[#fff] rounded-2xl p-1'>Submit</button>
        </form>
        <p>If You Don't Have An Account You Can Make One <Link to='/user/register' className='underline'>Here</Link></p>
        <p>or</p>
        <button onClick={() => signInWithGoogle()} className='underline'>Sign In With Google</button>
    </div>
  )
}

export default NoAuth