import {configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import thunkMiddleware from 'redux-thunk';



const persistMiddleware = (store) => (next) => (action) => {
   const result = next(action);

   console.log(result);
   if(action.type === 'user/setUser'){
      localStorage.setItem("user",JSON.stringify(action.payload))
   }
   return result;
}


export default configureStore({
   reducer:{
      user: userSlice,
   },
   
   middleware: getDefaultMiddleware => getDefaultMiddleware().concat([persistMiddleware]),
});

