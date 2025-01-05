import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    status: "",
    error: "",
    messages: [],
    notifications: [],
    conversation : '', 
  };


  


  export const getConversationMessages = createAsyncThunk(
    "message/get",
    async (values) => {
      let {id} = values
        try {
          const response = await axios.get(`/api/getMsg/${id}`, 
            {
              withCredentials: true // Correct setting for axios
            }
        );
      return response.data;
    } catch (error) {
 

   
      throw new Error(error.message);
    }
      
    }
  );

 







  export const msgSlice = createSlice({
    name: "msg",
    initialState,
    reducers: {
      setMsg: (state, action) => {
       
    },   
    updateChatMsgs :(state,action)=>{
      state.messages = [...state.messages,action.payload]
    } ,
    updateConversation :(state,action)=>{
      state.conversation = action.payload;
    },
    msgStatusUpdate : (state,action)=>{

        let msg = action.payload
        for(let i=state.messages.length-1 ; i>=0; i--){
             if(state.messages[i].id == msg.msgId){
                 state.messages[i].time = msg.time
             }
        }
        console.log(state.messages)   
    }
    },
   extraReducers(builder) {
      builder
        .addCase(getConversationMessages.pending, (state, action) => {
          state.messages = []
          state.error = ''
          state.conversation = ''       
         state.status = "loading";
        })
        .addCase(getConversationMessages.fulfilled, (state, action) => {
          state.status = "succeeded";
          state.messages = action.payload.data.messages;
          console.log(action.payload)
        //  state.conversation = action.payload.data.id
        })
  

    }
  })

  export const {setMsg,updateChatMsgs,updateConversation,msgStatusUpdate} = msgSlice.actions

export default msgSlice.reducer;
