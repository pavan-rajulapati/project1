import React, { useEffect, useState } from 'react';
import { MdOutlineLogin, MdAdminPanelSettings } from "react-icons/md";  
import { FaCartArrowDown, FaUser, FaHome, FaSearch } from "react-icons/fa";
import '../styles/navbar.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GetCartItemAction } from '../redux/actions/getCartItem.action';

const Navbar = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem('authToken');
    const dispatch = useDispatch();
    const { items } = useSelector((state) => state.getCartItem);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim() !== " ") {
            navigate(`/product/search?query=${query.trim()}`);
        }
    };

    useEffect(() => {
        dispatch(GetCartItemAction());
    }, [dispatch]);

    const cartItemCount = items?.[0]?.products?.length || 0;

    return (
        <div>
            <div className="navBar">
                <div className="container">
                    <nav>
                        <div className='logo'>
                            <Link to={'/'}><img src="photos\logo.jpeg" alt="" /></Link>
                        </div>
                        <div className='search'>
                            <form onSubmit={handleSubmit}>
                                <span><FaSearch /></span>
                                <input type="text" onChange={(e) => setQuery(e.target.value)} />
                                {query.trim() === "" ? (
                                    <button type='submit' disabled>Search</button>
                                ) : (
                                    <button type='submit'>Search</button>
                                )}
                            </form>
                        </div>
                        <div className='links'>
                            <ul>
                                {isLoggedIn ? (
                                    <Link to={'/seller/homepage'}>
                                        <li>
                                            <span><MdAdminPanelSettings /></span>
                                            <p>Become a seller</p>
                                        </li>
                                    </Link>
                                ) : (
                                    <Link to={'/signin'}>
                                        <li>
                                            <span><MdOutlineLogin /></span>
                                            <p>Login</p>
                                        </li>
                                    </Link>
                                )}
                                <Link to={'/'}>
                                    <li >
                                        <span><FaHome /></span>
                                        <p>Home</p>
                                    </li>
                                </Link>
                                <Link to={'/cart'}>
                                    <li className='cart'>
                                        <span className='cart-count'>{cartItemCount}</span>
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

export default Navbar;
