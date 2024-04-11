import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  token: '',
  email: '',
};

const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    signIn: (state, action) => {
      console.log('singIn reducer');
      state.isLoggedIn = true;
      state.email = action.payload.email;
      state.token = action.payload.token;
      localStorage.setItem('us', action.payload.token);
    },
    signOut: (state) => {
      console.log('signout event');
      
      localStorage.removeItem('us');
      state.isLoggedIn = false;
      state.email = '';
      state.email = '';
    }
  },
});

console.log(userSlice);

export const { signIn, signOut } = userSlice.actions;
export default userSlice.reducer;