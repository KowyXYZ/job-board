import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import pin from '../../Assets/MapPin.png'
import mark from '../../Assets/bookmark.png'
import { addJob } from '../../Store/sliceJob'
import { Link } from 'react-router-dom'

function JobList({isAuth}) {

  const {totalJobs} = useSelector(state => state.jobs)

  const dispatch = useDispatch()

  const checkerStatus = async (job) => {
    if(isAuth) {
      dispatch(addJob(job))

    } else {
      console.log('No acc ')
    }
  }

  return (
    <div className='py-12'>
          <p className='text-[32px] font-semibold'>Featured Job</p>
          <div className='flex gap-24 mt-14 flex-wrap '>
            {totalJobs.map((job, index) => {
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
                      <img onClick={() => checkerStatus(job)} className='hover:invert transition-all ease-in-out active:w-3' src={mark} alt="mark" />
                    </div>
                  
                  </div>
              
                  
                </div>
              )
            })}
          </div>
    </div>
  )
}

export default JobList