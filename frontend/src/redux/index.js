// reducers/index.js
import { combineReducers } from 'redux';
import productReducer from '../redux/reducers/productReducer';
import userAddressReducer from './reducers/userAddressReducer';
import userDetailsReducer from './reducers/userDetailsReducer'
import AddSellerReducer from './reducers/sellerRegistrationReducer'

const rootReducer = combineReducers({
    product: productReducer,
    userAddress : userAddressReducer,
    userDetails : userDetailsReducer,
    addSeller : AddSellerReducer,
});

export default rootReducer;
