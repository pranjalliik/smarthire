'use client'
import React from 'react'

function Header() {
  return (
    <div className='flex justify-between mx-4 my-2'>
    <div className='flex ml-2'>
    <div className='flex gap-x-2'>
      <span className='rounded-full p-[7px] h-[7px] mt-2 bg-gray-200'></span>
      <span className='rounded-full p-[7px] h-[7px] mt-2 bg-gray-200'></span>
      <span className='rounded-full p-[7px] h-[7px] mt-2 bg-gray-200'></span>
      </div>
      <div className='ml-4 flex gap-x-3 mt-2'>
      <i className="fa-solid fa-arrow-left text-gray-600"></i>
      <i className="fa-solid fa-arrow-right text-gray-200"></i>
      <i className="fa-solid fa-rotate-right  text-gray-600"></i>
      </div>
    </div>

<div className='flex justify-between bg-gray-200 w-56 rounded-lg  text-gray-400 px-2'>
<i className="fa-solid fa-lock  mt-2"></i>
<div className='font-semibold pb-1'>bluereceipt.com</div>
<i className="fa-solid fa-link  mt-2"></i>
</div>

    <div className='flex mt-2 text-gray-300 gap-x-3'>
    <i className="fa-solid fa-download  "></i>
    <i className="fa-solid fa-plus  "></i>
    </div>
    
  </div>
  )
}

export default Header