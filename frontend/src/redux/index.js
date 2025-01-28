// reducers/index.js
import { combineReducers } from 'redux';
import productReducer from '../redux/reducers/product.reducer';
import userAddressReducer from './reducers/userAddress.reducer';
import userDetailsReducer from './reducers/userDetails.reducer'
import AddSellerReducer from './reducers/sellerRegistration.reducer'
import GetProductReducer from './reducers/getProduct.reducer'
import GetProductByIdReducer from './reducers/getProductById.reducer';
import UserDataReducer from './reducers/userData.reducer'
import ReviewReducer from './reducers/review.reducer'
import GetProductByCategoryReducer from './reducers/getProductByCategory.reducer';

const rootReducer = combineReducers({
    product: productReducer,
    userAddress : userAddressReducer,
    userDetails : userDetailsReducer,
    addSeller : AddSellerReducer,
    searchProduct : GetProductReducer,
    getProductById : GetProductByIdReducer,
    userData : UserDataReducer,
    review : ReviewReducer,
    category : GetProductByCategoryReducer,
});

export default rootReducer;
