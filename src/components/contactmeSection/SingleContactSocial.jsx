import React from 'react'

const SingleContactSocial = ({Icon,link}) => {
  return (
    <div className="text-2xl h-12 w-12 border border-orange text-orange hover:text-cyan hover:border-cyan rounderd-full justify-center p-3 flex items-center">
        <a href={link} className="cursor-pointer">
            <Icon/>
        </a>
    </div>
  )
}

export default SingleContactSocial