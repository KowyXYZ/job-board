import React from 'react'
import HeroSection from '../Components/Home/HeroSection'
import BelowHero from '../Components/Home/BelowHero'
import MostPopular from '../Components/Home/MostPopular'
import JobList from '../Components/Home/JobList'

function Home({isAuth}) {
  return (
    <div className='mx-auto container'>
      <HeroSection/>
      <BelowHero/>
      {/* <MostPopular/> */}
      <JobList isAuth={isAuth}/>
    </div>
  )
}

export default Home