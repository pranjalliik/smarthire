'use client'
import React from 'react'
import Header from "../Components/Header";
import Conversations from "../Components/Conversations";
import { useMediaQuery } from 'react-responsive';
import { useRouter } from 'next/navigation';

function layout({children}) {

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 995px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 995px)' });
    const router = useRouter();

  

  return (
    <div className="flex flex-col h-screen">
    <Header/>
      <div className="bg-pink-00 border-2 flex-grow mx-3 mb-2 rounded-lg border border-gray-300  grid grid-cols-4	 overflow-y-hidden">
        <Conversations/>
       {children}
      </div>
      </div>
  )
}

export default layout