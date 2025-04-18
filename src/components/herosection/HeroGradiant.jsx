import React from 'react'

const HeroGradiant = () => {
  return (
    <div>
        <div className="shadow-cyanMediumShadow absolute top-0 right-[400px] -z-10 animate-pulse"></div>
        <div className="shadow-orangeMediumShadow absolute top-0 right-0 -z-10 animate-pulse"></div>
        <div className="shadow-cyanMediumShadow absolute top-[200px] left-0 -z-10 opacity-50"></div>
        <div className="shadow-orangeMediumShadow absolute top-[400px] left-0 -z-10 opacity-50"></div>
    </div>
  )
}

export default HeroGradiant