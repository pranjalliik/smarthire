import { NextResponse } from "next/server";
import { MsgSent } from "@/data";
import { conversation , user } from "@/utils/modals";

// Create a simple async Next.js API route handler
export async function POST(req) {

    let { userId , msg} = await req.json();

console.log(userId , "userid")
          // Find the conversation by userId
          const conv = await conversation.findOne({ userId  });

          if (!conv) {
            return res.status(500).json({ success: false, message: 'Conversation not found' });
          }
    
          // Create the new message object with an id, text, and time
          const newMessage = {
            id: conv.messages.length, // New id based on the current array length
            text: msg,
            time: new Date().toISOString(), 
            sender : 'admin'
            // Get current time and format to ISO string
          };
    
          // Push the new message to the messages array
          conv.messages.push(newMessage);
    
          // Save the updated conversation
          await conv.save();

          const userdata = await user.findOne({ _id: userId });
      
          if (userdata) {
            userdata.lastMessage = msg;
            userdata.lastMsgTime = new Date().toISOString(); // Save the current time as the last message time
            await userdata.save();
          }
    

  return NextResponse.json({ data : newMessage  });
}
