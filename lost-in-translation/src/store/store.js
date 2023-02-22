import {configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';



const persistMiddleware = (store) => (next) => (action) => {
   const result = next(action);
   if(action.type === 'user/setUser' && action.payload.user){
      localStorage.setItem("user",JSON.stringify(action.payload.user))
   }
   if(action.type === 'user/getUserAsync/fulfilled' && action.payload.user){
      localStorage.setItem("user",JSON.stringify(action.payload.user))
   }
   if(action.type === 'user/removeUser'){
      localStorage.setItem("user",JSON.stringify({}))
   }
   return result;
}


export default configureStore({
   reducer:{
      user: userSlice,
   },
   
   middleware: getDefaultMiddleware => getDefaultMiddleware().concat([persistMiddleware]),
});

