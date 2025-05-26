import {createSlice} from '@reduxjs/toolkit';

import {RootState} from './StoreIndex';

// Define a type for the slice state
interface Auth {
  isAuthToken: boolean;
}

// Define the initial state using that type
const initialState: Auth = {
  isAuthToken: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthToken: (state, action) => {
      state.isAuthToken = action.payload;
    },
  },
});

export const {setAuthToken} = authSlice.actions;
export default authSlice.reducer;

//SELECTOR

export const selectIsAuthToken = (state: RootState) => state.auth.isAuthToken;
