import { configureStore } from '@reduxjs/toolkit';
import userAddressReducer from './reducers/userAddressReducer';
import productReducer from './reducers/productReducer'
import userDetailsReducer from './reducers/userDetailsReducer'
import AddSellerReducer from './reducers/sellerRegistrationReducer'
import GetProductReducer from './reducers/getProductReducer'

const store = configureStore({
  reducer: {
    userAddress: userAddressReducer,
    product : productReducer,
    userDetails : userDetailsReducer,
    addSeller : AddSellerReducer,
    searchProduct : GetProductReducer,
  },
});

export default store;
