import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  isLoggedIn: boolean;
  token: string;
  email: string;
}

const initialState: UserState = {
  isLoggedIn: false,
  token: '',
  email: '',
};

const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<{ email: string; token: string }>) => {
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
    },
  },
});

export const { signIn, signOut } = userSlice.actions;
export default userSlice.reducer;