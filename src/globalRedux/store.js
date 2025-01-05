import { configureStore } from '@reduxjs/toolkit';
import msgReducer from './slices/msgSlice'
import conversationReducer from './slices/ConversationsSlice'






export const store = configureStore({
  reducer: {
    msg : msgReducer, 
    conv : conversationReducer
  },
});
