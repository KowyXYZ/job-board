import React from 'react'
import suticase from '../../Assets/suitcase.png'
import building from '../../Assets/building.png'
import people from '../../Assets/people.png'

function BelowHero() {
  return (
    <div className='flex justify-around items-cente gap-12  py-12'>
        <div className='flex border-2 rounded-2xl w-full gap-4 p-2 shadow-xl'>
            <div className='flex justify-center items-center '>
             <img src={suticase} alt="suticase" />   
            </div>
            
            <div>
                <p className='font-semibold'>1,75,324</p>
                <p className='text-[gray]'>Live Job</p>
            </div>
        </div>

        <div className='flex border-2 rounded-2xl w-full gap-4 p-2 shadow-xl'>
            <div className='flex justify-center items-center'>
             <img src={building} alt="building" />   
            </div>
            
            <div>
                <p className='font-semibold'>97,354</p>
                <p className='text-[gray]'>Companies</p>
            </div>
        </div>

        <div className='flex border-2 rounded-2xl w-full gap-4 p-2 shadow-xl'>
            <div className='flex justify-center items-center'>
             <img src={people} alt="people" />   
            </div>
            
            <div>
                <p className='font-semibold'>38,47,154</p>
                <p className='text-[gray]'>Candidates</p>
            </div>
        </div>

        <div className='flex border-2 rounded-2xl w-full gap-4 p-2 shadow-xl'>
            <div className='flex justify-center items-center'>
             <img src={suticase} alt="suticase" />   
            </div>
            
            <div>
                <p className='font-semibold'>7,532</p>
                <p className='text-[gray]'>New Jobs</p>
            </div>
        </div>



      
    </div>
  )
}

export default BelowHero