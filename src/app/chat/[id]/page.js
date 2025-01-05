'use client'
import React, { Fragment } from 'react';
import Chat from '../../Components/Chat';
import Profile from '../../Components/Profile';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import { useMediaQuery } from 'react-responsive';
import { useRouter } from 'next/navigation';


function page() {

    const params = useParams()
    const [user, setUser] = useState({})
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 995px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 995px)' });
    const router = useRouter();



useEffect(()=>{

    const fetchData = async () => {
        const response = await axios.get(`/api/getuser/${params.id}`);
        setUser(response.data.data);  // Assuming setUser is defined elsewhere
    }
        fetchData()
}
,[params.id])


  return (
    <Fragment>
    <Chat user={user}/>
     
    <div className='overflow-y-auto '>
     <Profile user={user}/>
    </div>
    </Fragment>
  )
}

export default page