import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUserAsync = createAsyncThunk(
  "user/getUserAsync",
  async (payload) => {
    const response = await fetch(
      process.env.REACT_APP_API_URL + "/translations?username=" + payload
    );
    if (response.status === 200 || response.status === 201) {
      const user = await response.json();
      if(user[0] && user[0] !== "undefined") return { user:user[0] };
    }
    
      const createResponse = await fetch(process.env.REACT_APP_API_URL + "/translations", {
         method: "post",
         mode:"cors",
         headers: {
           "X-API-Key": process.env.REACT_APP_API_KEY,
           "Content-Type": "application/json",
         },
         body: JSON.stringify({
           username: payload,
           translations: [],
         }),
       });
       if (createResponse.status === 200 || createResponse.status === 201) {
         const user = await createResponse.json();
         return { user };
       }

    
    
  }
);

export const setTranslationAsync = createAsyncThunk(
   "user/addTranslationAsync",
   async (payload) => {
      console.log()
      const response = await fetch(process.env.REACT_APP_API_URL+"/translations/"+payload.id,{
         method: "PATCH",
         mode:"cors",
         headers: {
           "X-API-Key": process.env.REACT_APP_API_KEY,
           "Content-Type": "application/json",
         },
         body: JSON.stringify({translations: payload.translations})
      });
      if (response.status === 200 || response.status === 201 || response.status === 204) {
         const user = await response.json();
         return { user: user };
       }
   }
)

export const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    setUser: (state, action) => {
      return action.payload;
    },
    removeUser: (state, action) => {
      return {};
    },
  },
  extraReducers: {
    [getUserAsync.fulfilled]: (state, action) => {
      return action.payload.user;
    },
    [setTranslationAsync.fulfilled]: (state,action) => {
      return action.payload.user;
    }
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
