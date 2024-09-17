import React from 'react'

const Card = () => {
  return (
    <div className='flex justify-center align-middle'>
        <div className='h-60 w-40 border'>
            <img src='/Red Rose.jpg' alt='Red Rose'className='h-40 object-cover'></img>
            <div>Red Rose</div>
            <div>Sharma Stores</div>
            <div>1500</div>
        </div>
    </div>
  )
}

export default Card