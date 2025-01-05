import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    status: "",
    error: "",
    conversations: [],
  };




export const getConversations = createAsyncThunk(
    "conversations/get",
    async () => {
      console.log('no')

        try {
          console.log('no')
      const response =  await axios.get(`/api/users` )
      console.log(response)
      return response.data;
    } catch (error) {
  
     
        throw new Error(error.message);
    }
      
    }
  );



  export const conversationSlice = createSlice({
    name: "conv",
    initialState,
    reducers:{
        updateOnMsgSend: (state, action) => {
            const { userId, newMessage } = action.payload;
            const index = state.conversations.findIndex(convo => convo._id == userId);
            if (index !== -1) {
              // Update the lastMsg for the conversation
              state.conversations[index].lastMessage = newMessage.text;
              state.conversations[index].lastMsgTime = newMessage.time
              // Move the updated conversation to the top of the list
              const [updatedConversation] = state.conversations.splice(index, 1);
              state.conversations.unshift(updatedConversation);

            }
          }, 
           addConversation: (state, action) => {
            const newConversation = action.payload;
      
            // Insert new conversation at the beginning of the list
            state.conversations.unshift(newConversation);
    },
      sort :(state ,action)=>{

        let {order } = action.payload 

        if(order == 'oldest'){
          const arr = state.conversations.sort((a, b) => new Date(a.lastMsgTime) - new Date(b.lastMsgTime));
          state.conversations  = arr
        }else{
          let arr = state.conversations.sort((a, b) => new Date(b.lastMsgTime) - new Date(a.lastMsgTime));
          state.conversations  = arr
        }
      }

    },
   extraReducers(builder) {
      builder
      .addCase(getConversations.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getConversations.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log(action.payload)
      state.conversations = action.payload.data
    })
      .addCase(getConversations.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message
      })

   }
} )

export const { addConversation,updateOnMsgSend , sort } = conversationSlice.actions;
export default conversationSlice.reducer;