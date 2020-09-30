import { configureStore } from '@reduxjs/toolkit';
import messagesReducer from '../reducers/messagesReducer';

export default configureStore({
  reducer: {
    messages: messagesReducer,
  },
});