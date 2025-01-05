'use client'
import React from "react";
import { useState  , useEffect} from "react";
import { useParams } from 'next/navigation';
import { useDispatch , useSelector} from "react-redux";
import { getConversationMessages , updateChatMsgs , msgStatusUpdate } from "@/globalRedux/slices/msgSlice";
import { updateOnMsgSend } from "@/globalRedux/slices/ConversationsSlice";
import uniqid from 'uniqid';
import axios from "axios";
import { format, parseISO } from 'date-fns';
import Image from "next/image";
import Loader from "./Loader";
import { Fragment } from "react";
import def from '../../../public/def.png'

const Chat = ({user}) => {
  const [newMsg,setNewMsg] = useState("");
  const dispatch = useDispatch()
const {messages , status} = useSelector((state)=> state.msg)
   console.log(messages)
  const params = useParams()

  const handleChange = (event) => {
    const {value } = event.target;
   setNewMsg(value)
  };
useEffect(() => {
  // Define the async function inside useEffect
  const fetchData = async () => {
    try {
      // Dispatch your action
      dispatch(getConversationMessages({ id: params.id }));

      // Fetch user data
    
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, [params.id, dispatch]);

console.log(user)

async function sendMsg(event){
  if (event.key != 'Enter') return

  if(newMsg === '')return;
  let msgId = uniqid() 
    dispatch(updateChatMsgs({id : msgId, text : newMsg , time :'loading'}))

    let res = await axios.post('/api/sendMsg' , {userId : params.id , msg : newMsg})

    dispatch(msgStatusUpdate({msgId ,  time : res.data.data.time}))
    dispatch(updateOnMsgSend({userId : params.id , newMessage : res.data.data}))
    setNewMsg('')
}




const groupedMessages = messages.reduce((acc, message) => {

  const isValidDate =  message.time && message.time !== "loading" 
  console.log(isValidDate)
  // If valid, format the date; otherwise, use a placeholder grouping key
  const messageDate = isValidDate ? format(parseISO(message.time), 'yyyy-MM-dd') : "pending"; // Placeholder key for messages in "loading" or "failed" state

  // Initialize array for each date
  if (!acc[messageDate]) acc[messageDate] = [];
  acc[messageDate].push(message);
  console.log(acc)
  return acc;
}, {});








  return (
    <div className="col-span-2 	bg-gray-300 h-full relative bg-[url('https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg')] bg-repeat bg-fixed flex flex-col  overflow-y-auto">

    <div className="flex items-center justify-between bg-white p-4 shadow rounded-lg w-full mx-auto">
      {/* User Info */}
      <div className="flex items-center space-x-3">
        {/* Profile Picture */}
      { user.photo &&  <Image 
  src={user.photo}
  width={100}
  height={100}
 className='h-12 w-12 rounded-full'// Set your desired height
  alt="Profile Picture"
/>}
                {/* Name and Email */}
    <div>
          <div className="font-medium text-gray-800">{user.name}</div>
          <div className="text-sm text-gray-500">{user.email}</div>
        </div>  
      </div>

      {/* Messenger Dropdown */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 px-6 py-1 border rounded-md bg-gray-100 hover:bg-gray-200 cursor-pointer">
        
        {
                  user.channel == 'instagram' ?
                <i className="fab fa-instagram text-pink-600 mt"></i>

                :  user.channel == 'messenger' ?
                  <i className="fa-brands fa-facebook-messenger "></i> 
                :  user.channel == 'whatsapp' ?
                <i className="fa-brands fa-whatsapp text-green-600"></i>:
                user.channel == 'email' ? <i className="fa-solid fa-envelope text-blue-300"></i> :<></>

                }

          <span className="text-sm text-gray-800">{user.channel}</span>
    
        </div>

        {/* Action Icons */}
        <div className="flex items-center space-x-4">
         
        </div>
      </div>
    </div>  
  <div className='overflow-y-auto flex-1	mb-16 '>

    { Object.keys(groupedMessages).map((date,idx) => (
      <div key={date}>
      {date !== "pending" && (
        <div className="text-center text-gray-500 my-2">
          {format(parseISO(date), 'MMMM d, yyyy')}
        </div>
      )}

      {groupedMessages[date].map((msg) => (
        <div className='w-full' key={msg.id}>
          { msg.sender == 'admin' ? 
         <div className='flex justify-end pt-4 flex-col items-end '>
       
       <div className='flex gap-x-2'>        
          <div className='bg-[#3d31fe] px-3 py-2  rounded-xl text-white max-w-64'>
               {msg.text}
         </div>
       {user.photo&&  <Image height={30} width={30} src={def} className='rounded-full h-8 w-8 mr-1' alt='profile'></Image>}
         </div>
         <div className='text-xs text-end text-gray-500'>{`${msg.time == 'loading' ? 'loading' : format(parseISO(msg.time), 'h:mm a')}`}</div>
        
         </div> :
           <div className='flex justify-start pt-4 flex-col ' >
       
           <div className='flex gap-x-2 '>     
           {user.photo&&  <Image height={30} width={30} src={user.photo} className='rounded-full h-8 w-8 ml-1' alt='profile'></Image>}
   
              <div className='bg-[#3d31fe] px-3 py-2  rounded-xl text-white max-w-64'>
                   {msg.text}
             </div>
             </div>
             <div className='text-xs text-end text-gray-500'>{`${msg.time == 'loading' ? 'loading' : format(parseISO(msg.time), 'h:mm a')}`}</div>
            
             </div> 
         
         }
         </div>
      ))}
      </div>

     ))}
    
    { status == 'loading' &&
<Loader/>}

 
    
  </div>
     <div className='absolute bottom-0 w-full '>
     <div className="flex items-center border rounded-lg p-2 w-full bg-gray-100  box-border  h-16 ">
      {/* Input field */}
      <input
        type="text"
        placeholder="Message"
        className="flex-grow bg-transparent outline-none text-sm text-gray-700 placeholder-gray-500 px-2"
        value={newMsg} onChange={handleChange}
        onKeyDown={sendMsg}
        alt='profile'
        />
      {/* Icons */}
      <div className="flex items-center space-x-3 text-gray-500">
        {/* Icon 1 */}
        <i className="fas fa-comment-alt cursor-pointer hover:text-gray-700"></i>
        {/* Icon 2 */}
        <i className="fas fa-user cursor-pointer hover:text-gray-700"></i>
        {/* Icon 3 */}
        <i className="fas fa-image cursor-pointer hover:text-gray-700"></i>
      </div>
      {/* Send button */}
      <button className="ml-3 px-2 py-1 rounded-full bg-blue-500 hover:bg-blue-600 text-white" onClick={()=>sendMsg({key : 'Enter'})}>
        <i className="fas fa-paper-plane"></i>
      </button>
    </div>
     </div>
    </div>
  );
};

export default Chat;
