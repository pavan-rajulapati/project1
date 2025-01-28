import { configureStore } from '@reduxjs/toolkit';
import userAddressReducer from './reducers/userAddress.reducer';
import productReducer from './reducers/product.reducer'
import userDetailsReducer from './reducers/userDetails.reducer'
import AddSellerReducer from './reducers/sellerRegistration.reducer'
import GetProductReducer from './reducers/getProduct.reducer'
import GetProductByIdReducer from './reducers/getProductById.reducer';
import UserDataReducer from './reducers/userData.reducer';
import ReviewReducer from './reducers/review.reducer';
import GetProductByCategoryReducer from './reducers/getProductByCategory.reducer';



const store = configureStore({
	reducer: {
		userAddress: userAddressReducer,
		product : productReducer,
		userDetails : userDetailsReducer,
		addSeller : AddSellerReducer,
		searchProduct : GetProductReducer,
		getProductById : GetProductByIdReducer,
		userData : UserDataReducer,
		review : ReviewReducer,
		category : GetProductByCategoryReducer,
	},
});

export default store;
