import React from 'react'
import HeroSection from '../Components/Home/HeroSection'
import BelowHero from '../Components/Home/BelowHero'
import MostPopular from '../Components/Home/MostPopular'

function Home() {
  return (
    <div className='mx-auto container'>
      <HeroSection/>
      <BelowHero/>
      <MostPopular/>
    </div>
  )
}

export default Home