import React from 'react'
import PropCta from './PropCta'
import PropHero from './PropHero'
import PropPillerPoint from './PropPillerPoint'
import PropWorkingModel from './PropWorkingModel'
import PropTheMathSection from './PropTheMath'
import PropRoadmapSection from './PropRaodmap'
import PropHeader from './PropHeader'
import PropAdvantage from './PropAdvantage'

const PropPage = () => {
  return (
    <div className='bg-[#070604]'>
      
      <PropHero/>
      <PropPillerPoint/>
      <PropWorkingModel/>
      <PropTheMathSection/>
      <PropAdvantage/>
      <PropRoadmapSection/>
      <PropCta/>
    </div>
  )
}

export default PropPage
