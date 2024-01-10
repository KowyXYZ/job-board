import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../../Firebase/firebase-config'
import Cookies from 'universal-cookie'
const cookies = new Cookies()
function Auth({setIsAuth}) {

    const SignOut = async() => {
        setIsAuth(false)
        await signOut(auth)
        cookies.remove('auth-token')
        window.location.reload()
    }

  return (
    <div className='flex flex-col justify-center items-center py-24'>
        <p>Bookmarked Jobs:</p>
        <button onClick={SignOut}>Log Out</button>
    </div>
  )
}

export default Auth