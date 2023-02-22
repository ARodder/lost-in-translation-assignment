import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUserAsync = createAsyncThunk(
  "user/getUserAsync",
  async (payload) => {
    const response = await fetch(
      process.env.REACT_APP_API_URL + "/translations?username=" + payload
    );
    if (response.status === 200 || response.status === 201) {
      const user = await response.json()[0];
      console.log(user);
      if(user) return user;
    }
    
      const createResponse = await fetch(process.env.REACT_APP_API_URL + "/translations", {
         method: "post",
         headers: {
           "X-API-Key": process.env.REACT_APP_API_KEY,
           "Content-Type": "application/json",
         },
         body: JSON.stringify({
           username: payload,
           translation: [],
         }),
       });
       if (createResponse.status === 200 || createResponse.status === 201) {
         const user = await createResponse.json();
         return { user };
       }

    
    
  }
);

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
      console.log(action.payload.user);
      return action.payload.user;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
