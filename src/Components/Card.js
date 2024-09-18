import React from 'react'

const Card = (props) => {
  return (
    <div className='flex justify-center align-middle'>
        <div className='h-72 w-40 border'>
            <img src={props.source} alt='Red Rose'className='h-40 object-cover'></img>
            <div className='text-left'>{props.flower}</div>
            <div className='text-left'>{props.store}</div>
            <div className='text-left'>{props.price}</div>
            <div>
                <button className='bg-red-500 p-2 m-1 text-white border hover:bg-red-800'>BUY</button>
                <button className='bg-blue-500 p-2  text-white border hover:bg-blue-800'>SUBSCRIBE</button>
            </div>
        </div>
    </div>
  )
}

export default Card