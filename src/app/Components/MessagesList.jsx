'use client'
import React from 'react'
import { useState } from 'react'
import { formatDistanceToNow } from "date-fns";
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import { Fragment } from 'react';
import CustomDropdown from './CustomDropdown';
import { sort } from '@/globalRedux/slices/ConversationsSlice';
import { useDispatch } from 'react-redux';
import Loader from './Loader';
function MessagesList({conversations , status}) {

 // const [users, setUsers]  = useState('')
 const router = useRouter();
 const [sortSelectedValue, sortSetSelectedValue] = useState('newest');
const dispatch = useDispatch()


const lastmsg =(time)=>{

  const result = formatDistanceToNow(new Date(time), { addSuffix: false });

   if(result == 'less than a minute')return 'just now'
return result.replace(/\babout\b|\bago\b/g, '').trim();

}

let openchat = (id)=>{
  router.push(`/chat/${id}`)
}

const [selectedValue, setSelectedValue] = useState('All');


function handleSortChange(event) {
  const query = event.target.value; // Get the current input value
  sortSetSelectedValue(query); // Update the state
   dispatch(sort({order : query})); // Dispatch the action using the updated value
}

function handleFilterChange(event) {
  const query = event.target.value; // Get the current input value
  filterSetSelectedValue(query); // Update the state
//   dispatch(searchUsers(query)); // Dispatch the action using the updated value
}
  return (
    <>
    <div className='flex justify-between	pt-3 pb-3 mx-4'>
    <div className='mt-1' >
    <CustomDropdown selectedValue={selectedValue}
                  setSelectedValue={setSelectedValue}
  />
    </div>
    
    <div>
    <i className="fa-solid fa-filter"></i>
      <select onChange={handleSortChange} value={sortSelectedValue} className='outline-none border rounded-md  py-1'>
        <option value='newest'>Newest</option>
        <option value='oldest'>Oldest</option>

      </select>
   </div>
    
    </div>
  
   <div className="max-w-md mx-auto p-4 pb-0 bg-white shadow rounded-lg">
      {/* Message 1 */}

      {status == 'loading' &&  <Loader/>}

      { conversations.map((conv)=>(
        <Fragment key={conv._id}>
          {
           ( selectedValue == 'All' || conv.channel == selectedValue )&& (
            <div className="flex items-start space-x-3 mb-4 border-b-2 pb-3 "  onClick={()=>openchat(conv._id)} >
            {/* Profile Image */}
            <Image 
  src={conv.photo}
  width={100}
  height={100}
 className='h-12 w-12 rounded-full'// Set your desired height
  alt="Profile Picture"
/>
            {/* Message Content */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <div className="font-medium text-gray-800 w-24  cursor-default">{conv.name}</div>
                {
                  conv.channel == 'instagram' ?
                <i className="fab fa-instagram text-pink-600 "></i>

                :  conv.channel == 'messenger' ?
                  <i className="fa-brands fa-facebook-messenger "></i> 
                :  conv.channel == 'whatsapp' ?
                <i className="fa-brands fa-whatsapp text-green-600"></i>:
                <i className="fa-solid fa-envelope text-blue-300"></i>

                }
                <div className="text-sm text-gray-500  ">{lastmsg(conv.lastMsgTime)}</div>
              </div>
              <p className="text-gray-700 text-sm line-clamp-1	">
                {conv.lastMessage}
              </p>
            </div>
            
          </div> )
          }
          </Fragment>
      ))
  
      }

    </div>
   </>
  )
}

export default MessagesList