import {configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';



const persistMiddleware = (store) => (next) => (action) => {
   const allowedPersisted = ['user/setUser','user/getUserAsync/fulfilled','user/addTranslationAsync/fulfilled']
   const result = next(action);
   if(allowedPersisted.includes(action.type) && action.payload.user){
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

