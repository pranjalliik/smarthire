'use client'
import React from 'react'
import { format, parseISO } from 'date-fns';
import Image from 'next/image';
function Profile({user}) {
  return (
    <div className='w-full'>
          <div className="max-w-sm mx-auto p-6 bg-white shadow rounded-lg text-center">
      {/* Profile Image */}
      <div className="relative w-20 h-20 mx-auto mb-1">
      { user.photo &&  
      <Image 
  src={user.photo}
  width={100}
  height={100}
 className='w-20 h-20 rounded-full bg-gray-300'// Set your desired height
  alt="Profile Picture"
/>}
        <div className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-blue-600 border-2 border-white"></div>
      </div>

      {/* User Name */}
      <div className="text-lg font-semibold text-gray-800">{user.name}</div>

      {/* Location and Time */}
      <div className="text-sm text-gray-500">{user.location}</div>

      {/* Action Buttons */}
      <div className="flex justify-around items-center mt-4">
        {/* Call Button */}
        <div className="flex flex-col items-center space-y-1 cursor-pointer">
          <i className="fas fa-phone-alt text-gray-600 text-lg"></i>
          <span className="text-sm text-gray-600">Call</span>
        </div>

        {/* Video Button */}
        <div className="flex flex-col items-center space-y-1 cursor-pointer">
          <i className="fas fa-video text-gray-600 text-lg"></i>
          <span className="text-sm text-gray-600">Video</span>
        </div>

        {/* More Options */}
        <div className="flex flex-col items-center space-y-1 cursor-pointer">
          <i className="fas fa-ellipsis-h text-gray-600 text-lg"></i>
          <span className="text-sm text-gray-600">More</span>
        </div>
      </div>
    </div>
    <div className="max-w-lg mx-auto px-6 bg-white  rounded-lg ">
      {/* Stats Section */}
      <div className="grid grid-cols-2 gap-4 ">
        {/* Revenue Card */}
        <div className="px-4 py-2 border rounded-lg text-center">
          <div className="flex items-center justify-center space-x-2 text-gray-600 mb-2">
            <i className="fas fa-dollar-sign"></i>
            <span className="font-medium">Revenue</span>
          </div>
          <div className="text-2xl font-bold text-gray-800">${user.revenue}</div>
        </div>

        {/* Web Visits Card */}
        <div className="px-4 py-2 border rounded-lg text-center">
          <div className="flex items-center justify-center space-x-2 text-gray-600 mb-2">
            <i className="fas fa-eye"></i>
            <span className="font-medium">Web Visits</span>
          </div>
          <div className="text-2xl font-bold text-gray-800">{user.webVisits}</div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="flex items-center justify-around py-2 bg-gray-200 rounded-md mt-8">
        <div className="flex flex-col items-center text-gray-600 cursor-pointer">
          <i className="fas fa-user text-lg"></i>
        </div>
        <div className="flex flex-col items-center text-gray-600 cursor-pointer">
          <i className="fas fa-credit-card text-lg"></i>
        </div>
        <div className="flex flex-col items-center text-gray-600 cursor-pointer">
          <i className="fas fa-clock text-lg"></i>
        </div>
      </div>
    </div>

    <div className=" bg-white shadow-lg rounded-lg p-4">
      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search in general..."
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      {/* Information Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-semibold text-gray-800">Information</span>
        <button className="text-blue-500 text-xs font-medium hover:underline">
          + Add
        </button>
      </div>

      {/* Details Section */}
      <div className="space-y-2">
        {/* Segment */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <i className="fas fa-shopping-cart text-gray-500"></i>
            <span className="text-gray-800 text-sm">Segment</span>
          </div>
          <span className="text-gray-500 text-sm">🛒 Abandoned Cart</span>
        </div>

        {/* Email */}
        <div className="flex justify-between">
        <div className="flex items-center space-x-2">
          <i className="fas fa-envelope text-gray-500"></i>
          <span className="text-gray-800 text-sm">Email</span>
          </div>
          <div className="text-gray-600 text-sm ">{user.email}</div>
       

        </div>
       
        {/* Phone */}
        <div className="flex justify-between">
        <div className="flex items-center space-x-2">
          <i className="fas fa-phone text-gray-500"></i>
          <span className="text-gray-800 text-sm">Phone</span>
        </div>
        <div className="pl-6 text-gray-600 text-sm">{user.phone}</div>
      </div>


        {/* Last Visited */}
        <div className="flex justify-between">
        <div className="flex items-center space-x-2">
          <i className="fas fa-clock text-gray-500"></i>
          <span className="text-gray-800 text-sm">Last Visited</span>
        </div>
     { user.lastMsgTime&&   <div className="pl-6 text-gray-600 text-sm">{format(parseISO(user.lastMsgTime), 'MMMM d, yyyy')}</div>}
      </div>
      </div>
    </div>


      <div className=" bg-white shadow-lg rounded-lg p-4">
      {/* Dropdown */}
      <div className="mb-4">
        <select
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring focus:ring-blue-300"
        >
          <option>Show more</option>
        </select>
      </div>

      {/* Tags Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-semibold text-gray-800">Tags</span>
        <button className="text-blue-500 text-xs font-medium hover:underline">
          + Add
        </button>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {/* Tag Example */}
        <div className="flex items-center bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full border border-gray-300">
          Abandoned Cart User
          <button className="ml-2 text-gray-500 hover:text-gray-700">
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="flex items-center bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full border border-gray-300">
          Popup
          <button className="ml-2 text-gray-500 hover:text-gray-700">
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="flex items-center bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full border border-gray-300">
          Shop Error
          <button className="ml-2 text-gray-500 hover:text-gray-700">
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="flex items-center bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full border border-gray-300">
          Successful
          <button className="ml-2 text-gray-500 hover:text-gray-700">
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Profile