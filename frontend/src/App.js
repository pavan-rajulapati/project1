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

const App = () => {
  return (
    <Provider store={Store}> 
      <BrowserRouter>
        <Navbar></Navbar> 
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/products' element={<Products />} />
          <Route path='/seller' element={<Seller />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
