import React from 'react'

const Card = () => {
  return (
    <div className='flex justify-center align-middle'>
        <div className='h-72 w-40 border'>
            <img src='/Red Rose.jpg' alt='Red Rose'className='h-40 object-cover'></img>
            <div>Red Rose</div>
            <div>Sharma Stores</div>
            <div>1500</div>
            <div>
                <button className='bg-red-500 p-2 m-1 text-white border'>BUY</button>
                <button className='bg-blue-500 p-2  text-white border'>SUBSCRIBE</button>
            </div>
        </div>
    </div>
  )
}

export default Card