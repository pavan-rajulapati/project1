import { createSlice } from '@reduxjs/toolkit';
import { addUserAddress } from '../actions/userAddressAction';

const userAddressSlice = createSlice({
  name: 'userAddress',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addUserAddress.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addUserAddress.fulfilled, (state, action) => {
        console.log('API Response:', action.payload);
        state.items.push(action.payload);
      })      
      .addCase(addUserAddress.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default userAddressSlice.reducer;