import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signin from './pages/Signin'
import Homepage from './pages/Homepage'
import Cart from './pages/Cart'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import Products from './pages/Products'
import Seller from './pages/Seller'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage></Homepage>}/>
        <Route path='/cart' element={<Cart></Cart>}/>
        <Route path='/signin' element={<Signin></Signin>}/>
        <Route path='/signup' element={<Signup></Signup>}/>
        <Route path='/profile' element={<Profile></Profile>}/>
        <Route path='/products' element={<Products></Products>}/>
        <Route path='/seller' element={<Seller></Seller>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App