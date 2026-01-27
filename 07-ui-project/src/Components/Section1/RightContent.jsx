import React from 'react'
import RightCard from './RightCard'

const RightContent = () => {
  return (
    <div className='h-full p-6 w-2/3 flex flex-nowrap gap-10 shrink-0 overflow-x-auto rounded-4xl'>
        <RightCard />
        <RightCard />
        <RightCard />

    </div>
  )
}

export default RightContent