 'use client'
 import React from 'react'
 import Header from '../Components/Header'
 import Conversations from '../Components/Conversations'
 import { useMediaQuery } from 'react-responsive';
 import { useRouter } from 'next/navigation';
 

 function page() {


    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 995px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 995px)' });
    const router = useRouter();
    if(isDesktopOrLaptop){
        router.push(`/chat`)
    }
   return (
    <div className="flex flex-col h-screen">
    <Header/>
      <div className="bg-pink-00 border-2 flex-grow mx-3 mb-2 rounded-lg border border-gray-300  grid grid-cols-1	overflow-y-hidden">
        <Conversations/>
      </div>
      </div>
   )
 }
 
 export default page