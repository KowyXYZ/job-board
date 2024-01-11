import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../../Firebase/firebase-config'
import Cookies from 'universal-cookie'
import { useDispatch, useSelector } from 'react-redux'

import pin from '../../Assets/MapPin.png'
import mark from '../../Assets/bookmark.png'
import { RemoveUser, removeJob } from '../../Store/sliceJob'
import { Link } from 'react-router-dom'

const cookies = new Cookies()
function Auth({setIsAuth}) {

    const SignOut = async() => {
        setIsAuth(false)
        dispatch(RemoveUser())
        await signOut(auth)
        cookies.remove('auth-token')
        window.location.reload()
    }

    const {favJobs} = useSelector(state => state.jobs)

    const dispatch = useDispatch()

  return (
    <div className='flex flex-col justify-center items-center py-24 gap-8'>
          <h1 className='text-[24px] font-semibold'>Bookmarked Jobs:</h1>
        <div className='flex gap-5'>
         {favJobs.length === 0 ? <p>No Jobs Bookmarked</p> : favJobs.map((job, index) => {
              return(
                <div key={index} className='border-2 p-4 px-12 rounded-2xl shadow-xl gap-3 flex flex-col w-[400px]'>
                  <p className='text-[14px] text-[gray]'>Lasts Until: {job.LastsUntil}</p>
                  <p className='font-semibold text-[24px]'>{job.name}</p>

                  <div className='flex gap-2  justify-start items-center'>
                    <p className='text-[#134613] text-[14px] rounded-xl bg-[#0BA02C] p-1 px-3'>{job.Type}</p>
                    <p className='text-[gray] text-[14px]'>Salary: {job.Salary}$</p>
                  </div>


                  <div>
                    <p>{job.CompanyName}</p>
                    <p className='flex gap-2 items-center'><img className='w-4 h-4 object-contain' src={pin} alt="pin" />{job.LocationState}, {job.LocationPlace}</p>
                  </div>


                  <div className='flex items-center justify-between'>
                    <Link to={`/jobs/${job.name}`} className='underline text-[#0A65CC]'>View More</Link>
                    <div >
                      <p onClick={() => dispatch(removeJob(job))} className='text-[red]'>REMOVE</p>
                    </div>
                  
                  </div>
              
                
                </div>
              )
            })}
        </div>
        <button className='underline' onClick={SignOut}>Log Out</button>
    </div>
  )
}

export default Auth