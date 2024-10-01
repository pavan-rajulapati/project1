import React from 'react'
import { MdOutlineLogin } from "react-icons/md";  
import { FaCartArrowDown, FaUser, FaHome, FaSearch } from "react-icons/fa";
import '../styles/navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className="navBar">
          <div className="container">
            <nav>
              <div className='logo'>
                <Link to={'/'}><img src="photos\logo.jpeg" alt="" /></Link>
              </div>
              <div className='search'>
                <form>
                  <span><FaSearch /></span>
                  <input type="text" />
                  <button type='submit'>Search</button>
                </form>
              </div>
              <div className='links'>
                <ul>
                  <Link to={'/signin'}>
                    <li>
                      <span><MdOutlineLogin /></span>
                      <p>Login</p>
                    </li>
                  </Link>
                  <Link to={'/'}>
                    <li >
                      <span><FaHome /></span>
                      <p>Home</p>
                    </li>
                  </Link>
                  <Link to={'/cart'}>
                    <li className='cart'>
                      <span className='cart-count'>90</span>
                      <span><FaCartArrowDown /></span>
                      <p>Cart</p>
                    </li>
                  </Link>
                  <Link to={'/profile'}>
                    <li>
                      <span><FaUser /></span>
                      <p>Profile</p>
                    </li>
                  </Link>
                </ul>
              </div>
            </nav>
          </div>
        </div>
    </div>
  )
}

export default Navbar