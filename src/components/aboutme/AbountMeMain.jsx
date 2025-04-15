import React from 'react'
import AboutMeText from './AboutMeText'
import AboutMeImage from './AboutMeImage'

const AbountMeMain = () => {
  return (
    <div id="about" className="flex md:flex-row sm:flex-col">
        <div>
        <AboutMeText/>
        </div>
        <div>
        <AboutMeImage/>
        </div>
    </div>
  )
}

export default AbountMeMain