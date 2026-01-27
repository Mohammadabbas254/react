import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = () => {
  return (
    <div className='h-full overflow-hidden relative w-80 rounded-4xl shrink-0'>
        <img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybHN8ZW58MHx8MHx8fDA%3D" alt="" />
        <RightCardContent />
    </div>
  )
}

export default RightCard