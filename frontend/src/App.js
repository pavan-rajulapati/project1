import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';  
import Store from '../src/redux/store';
import Signin from './pages/Signin';
import Homepage from './pages/Homepage';
import Cart from './pages/Cart';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Products from './pages/Products';
import Seller from './pages/Seller';
import Navbar from './components/Navbar';
import SellerEnterPage from './components/SellerEnterPage';
import AddUserDetails from './components/AddUserDetails'
import GetProduct from './components/GetProduct';
import Product from './components/Product';
import Review from './components/Review'
import SubNav from './components/SubNav';
import CategoryPage from './components/CategoryProduct';

const App = () => {
  return (
    <Provider store={Store}> 
		<BrowserRouter>
				<Navbar></Navbar> 
				<SubNav></SubNav>
				<Routes>
					<Route path='/' element={<Homepage />} /> 
					<Route path='/cart' element={<Cart />} />
					<Route path='/signin' element={<Signin />} />
					<Route path='/signup' element={<Signup />} />
					<Route path='/profile' element={<Profile />} />
					<Route path='/products' element={<Products />} />
					<Route path='/seller' element={<Seller />} />
					<Route path='/seller/homepage' element={<SellerEnterPage />} />
					<Route path='/user/details' element={<AddUserDetails />} />
					<Route path="/product/search" element={<GetProduct />} />
					<Route path="/product/:id" element={<Product />} />
					<Route path="/review" element={<Review />} />
					<Route path="/category/:category" element={<CategoryPage />} />
				</Routes>
		</BrowserRouter>
    </Provider>
  );
};

export default App;
