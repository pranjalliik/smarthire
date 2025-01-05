'use client'
import React from 'react'
import MessagesList from './MessagesList'
import Image from "next/image";
import logo from '../../../public/logo.png'
import { useSelector , useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getConversations } from '@/globalRedux/slices/ConversationsSlice';

function Conversations() {
    const dispatch = useDispatch()

    const { conversations, status , error}   = useSelector((state)=> state.conv)
console.log(conversations , ' ' , status)

useEffect(()=>{
    console.log('fghjk')
    dispatch(getConversations())
},[])

  return (
    <div className='overflow-y-auto md:h-full h-[400px]'>
       <div className='mx-1 pt-6 shadow-md'>
         <div className='flex justify-between mx-4 pb-8'>
        <div className='flex gap-x-4'>
        <i className="fa-solid fa-arrow-left text-gray-600 mt-3"></i>
        <div className='flex gap-x-2'>
        <Image src={logo} alt='logo' className='h-10  w-10'></Image>   
        <div >
         <div className='font-semibold'>BlueChat</div>
         <div className='text-sm text-gray-400'>Inbox</div> </div>        
        </div>
        </div>

        <div className='text-gray-600 '>
        <i className="fas fa-search mr-4"></i>
        <i className="fa-solid fa-plus border rounded-lg p-2"></i>
        </div>
        </div>
        <div className='flex text-center mx-6 bg-gray-200 rounded-lg p-1'>
           <div className='w-1/2 bg-white rounded-lg py-1 cursor-default'>Messages</div>
           <div className='w-1/2 py-1 shadow-lg cursor-default'>Segments</div>
        </div>
        { conversations&&
       <MessagesList conversations={conversations} status={status}/>
        }
       </div>

    </div>
  )
}

export default Conversations