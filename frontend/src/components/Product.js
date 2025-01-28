import React, { useEffect, useState } from 'react';
import '../styles/subProduct.css';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { GetProductByIdAction } from '../redux/actions/getProductById.action';
import Loader from './Loader';
import { toast, Toaster } from 'react-hot-toast';
import { MdFavoriteBorder } from "react-icons/md";
import { FaMinus, FaPlus } from "react-icons/fa";
import ProductAbout from './ProductAbout';

const Product = () => {
    const [mainImage, setMainImage] = useState('');
    const { loading, items } = useSelector((state) => state.getProductById);
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        try {
            dispatch(GetProductByIdAction(id));
        } catch (error) {
            toast.error(error || error.message);
        } 
    }, [dispatch, id]);

    if (loading) {
        return <div>
            <Loader />
        </div>;
    }

    if (!items) {
        return <div>No product found</div>;
    }

    return (
        <div className="Product-container">
            <div className="container">
                <div className="products">
                    <div className="product">
                        <div className="image-section">
                            <div className="image-preview">
                                {items.images && items.images.length > 0 ? (
                                    items.images.map((image, index) => (
                                        <div className="image-preview-item" key={index}>
                                            <img
                                                key={index}
                                                src={`${process.env.REACT_APP_BACKEND_URL}/${image}`} 
                                                alt={`Preview ${index + 1}`}
                                                className="preview-image"
                                                onClick={() => setMainImage(image)}
                                            />
                                        </div>
                                    ))
                                ) : (
                                    <p>No images available</p>
                                )}
                            </div>
                            <div className="main-image">
                                <div className="main-image-item">
                                    <img
                                        src={mainImage 
                                            ? `${process.env.REACT_APP_BACKEND_URL}/${mainImage}` 
                                            : items.images && items.images[0] && `${process.env.REACT_APP_BACKEND_URL}/${items.images[0]}` 
                                        }
                                        alt="main-image"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="information">
                            <div className='top-section'>
                                <h1>{items.name}</h1>
                                <span><MdFavoriteBorder /></span>
                            </div>
                            <div className='brand'>
                                <p>{items.brand}</p>
                            </div>
                            <div className='description'>
                                <p>{items.description}</p>
                            </div>
                            <div className='price'>
                                <p>₹{items.offerPrice} <del>₹{items.actualPrice}</del></p>
                            </div>
                            <form>
                                <div className="color-size">
                                    {items.colors?.length > 0 && (
                                        <div className="colors">
                                        <span>Available Colors</span>
                                        <div className="color-items-container">
                                            {items.colors?.length > 0 && items.colors.map((color, index) => (
                                                <div key={index} className="color-item">
                                                    <div className="color" style={{ backgroundColor: color }}></div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    )}
                                    {items.sizes?.length > 0 && (
                                        <div className="sizes">
                                            <span>Available Sizes</span>
                                            <div className="size-items-container">
                                                {items.sizes?.length > 0 && items.sizes.map((size, index) => (
                                                    <div key={index} className="size-item">
                                                        <div className="size">
                                                            {size}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div>
                                    {items.warranty > 0 && (
                                        <div className='warranty'>
                                            <p>Warranty: <span>{items.warranty} Years</span></p>
                                        </div>
                                    )}  
                                </div>
                                <div className='add-to-cart'>
                                    <div className='cart-section'>
                                        <div className='inc-dec'>
                                            <span><FaMinus /></span>
                                            <p>8</p>
                                            <span><FaPlus /></span>
                                        </div>
                                        <div className='add-to-cart-button'>
                                            <button type='submit'>Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* <ProductAbout /> */}
            </div>
            <Toaster />
        </div>
    );
};

export default Product;
