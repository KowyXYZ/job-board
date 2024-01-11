import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AddAccount } from '../../Store/sliceJob'
import { useDispatch } from 'react-redux'

function Register() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [pw, setPw] = useState('')
    const [RePw, setRePw] = useState('')

    const dispatch = useDispatch()

    const submitForm = (e) => {
        e.preventDefault()
        if(!email || !pw || !RePw) {
            alert('Make Sure To Fill All Input Fields')
        }
        if(username || email || RePw === pw) {
            dispatch(AddAccount({username, email, pw}))
        }
       
    }

  return (
    <div className='flex flex-col justify-center items-center py-24 gap-4'>
        <h1 className='text-[24px] font-semibold'>Register</h1>
         <form className='flex flex-col gap-5  p-2 rounded-xl' onSubmit={submitForm}>
         <input className='outline-none border-2 rounded-2xl p-2' type="text" placeholder='Enter Your Username' onChange={(e) => setUsername(e.target.value)}/>
            <input className='outline-none border-2 rounded-2xl p-2' type="email" placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)}/>
            <input className='outline-none p-2 border-2 rounded-2xl ' type="password" placeholder='Enter Your Password' onChange={(e) => setPw(e.target.value)}/>
            <input className='outline-none p-2 border-2 rounded-2xl ' type="password" placeholder='Re-Enter Your Password' onChange={(e) => setRePw(e.target.value)}/>
            <button className='bg-[#0A65CC] text-[#fff] rounded-2xl p-1'>Register</button>
        </form>
        <p>If You Already Have An Account Click <Link to='/user' className='underline'>Here</Link></p>
       
    </div>
  )
}

export default Register