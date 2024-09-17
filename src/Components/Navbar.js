import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between p-2'>
        <div className='font-bold text-2xl'>
            Floral Fusion
        </div>
        <div className='flex justify-between'>
            <div className='font-bold m-2 hover:underline'>Home</div>
            <div className='font-bold m-2 hover:underline'>Shops</div>
            <div className='font-bold m-2 hover:underline'>Best Deals</div>
            <div className='font-bold m-2 hover:underline'>Cart</div>
        </div>
        <button className='bg-green-400 p-2'>Sign-In</button>
    </div>
  )
}

export default Navbar