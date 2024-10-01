// reducers/index.js
import { combineReducers } from 'redux';
import productReducer from '../redux/reducers/productReducer';
import userDetailsReducer from './reducers/userDetailsReducer';

const rootReducer = combineReducers({
    product: productReducer,
    userDetails : userDetailsReducer
});

export default rootReducer;
