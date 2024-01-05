import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='flex justify-around items-center py-4 bg-[#F1F2F4]'>
        <div className='gap-4 flex'>
            <Link className='border-b-2 border-transparent hover:border-[#0A65CC]'>Home</Link>
            <Link className='border-b-2 border-transparent hover:border-[#0A65CC]'>Find Job</Link>
            <Link className='border-b-2 border-transparent hover:border-[#0A65CC]'>Customer Support</Link>
            <Link className='border-b-2 border-transparent hover:border-[#0A65CC]'>About Us</Link>
        </div>

        <div className='flex gap-4'>
            <p>+381 66 252 771</p>
            <div>
                <Link to='/user'>Sign In</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar