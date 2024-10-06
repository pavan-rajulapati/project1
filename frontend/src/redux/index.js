// reducers/index.js
import { combineReducers } from 'redux';
import productReducer from '../redux/reducers/productReducer';
import userDetailsReducer from './reducers/userDetailsReducer';
import userAddressReducer from './reducers/userAddressReducer';

const rootReducer = combineReducers({
    product: productReducer,
    userDetails : userDetailsReducer,
    userAddress : userAddressReducer
});

export default rootReducer;
