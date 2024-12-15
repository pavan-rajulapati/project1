import { configureStore } from '@reduxjs/toolkit';
import userAddressReducer from './reducers/userAddressReducer';
import productReducer from './reducers/productReducer'

const store = configureStore({
  reducer: {
    userAddress: userAddressReducer,
    product : productReducer,
  },
});

export default store;
