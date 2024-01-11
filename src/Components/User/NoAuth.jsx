import React, { useState } from 'react'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../../Firebase/firebase-config'
import Cookies from 'universal-cookie'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../../Store/sliceJob'

const cookies = new Cookies()

function NoAuth({setIsAuth}) {

  const dispatch = useDispatch()

  const signInWithGoogle = async () => {
    const res = await signInWithPopup(auth, provider)
    try {
      cookies.set('auth-token', res?.user?.refreshToken)
      setIsAuth(true)
      dispatch(setUser(res?.user?.email))
      window.location.reload()
    } catch (error) {
      console.log(error)
    }

  }

  const [Email, setEmail] = useState('')
  const [pw, setPw] = useState('')

  const {users} = useSelector(state => state.jobs)
  const {currentUser} = useSelector(state => state.jobs)
  const check = async(e) => {
    e.preventDefault()
    if(users.find(user => user.email === Email) || users.find(user => user.pw === pw)) {
      setIsAuth(true)
      cookies.set('auth-token', Email)
      dispatch(setUser(Email))
    }
  }

  return (
    <div className='justify-center items-center flex py-32 flex-col gap-2'>
        <h1 className='text-[24px] font-semibold'>Welcome To Jobify</h1>
        <form className='flex flex-col gap-5  p-2 rounded-xl' onSubmit={(e) => check(e)}>
            <input className='outline-none border-2 rounded-2xl p-2 px-6' type="text" placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)}/>
            <input className='outline-none p-2 border-2 rounded-2xl px-6' type="password" placeholder='Enter Your Password' onChange={(e) => setPw(e.target.value)}/>
            <button className='bg-[#0A65CC] text-[#fff] rounded-2xl p-1'>Submit</button>
        </form>
        <p>If You Don't Have An Account You Can Make One <Link to='/user/register' className='underline'>Here</Link></p>
        <p>or</p>
        <button onClick={() => signInWithGoogle()} className='underline'>Sign In With Google</button>
    </div>
  )
}

export default NoAuth