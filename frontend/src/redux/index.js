// reducers/index.js
import { combineReducers } from 'redux';
import productReducer from '../redux/reducers/productReducer';
import userAddressReducer from './reducers/userAddressReducer';
import userDetailsReducer from './reducers/userDetailsReducer'
import AddSellerReducer from './reducers/sellerRegistrationReducer'
import GetProductReducer from './reducers/getProductReducer'
import GetProductByIdReducer from './reducers/getProductByIdReducer';

const rootReducer = combineReducers({
    product: productReducer,
    userAddress : userAddressReducer,
    userDetails : userDetailsReducer,
    addSeller : AddSellerReducer,
    searchProduct : GetProductReducer,
    getProductById : GetProductByIdReducer
});

export default rootReducer;
