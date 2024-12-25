import React, { useEffect, useState } from 'react';
import '../styles/subProduct.css';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { GetProductByIdAction } from '../redux/actions/getProductByIdActionr';
import Loader from './Loader';
import { toast, Toaster } from 'react-hot-toast';

const Product = () => {
    const { loading, items } = useSelector((state) => state.getProductById);
    const { id } = useParams();
    const dispatch = useDispatch();
    const [mainImage, setMainImage] = useState('');

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
                                                src={`${process.env.REACT_APP_BACKEND_URL}/${image}`} // Replace backslashes with forward slashes
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
                                        src={mainImage ? `${process.env.REACT_APP_BACKEND_URL}/${mainImage}` : `${process.env.REACT_APP_BACKEND_URL}/${items.images[0]}`} // Replace backslashes with forward slashes
                                        alt="main-image"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="information">
                            <h1>{items.name}</h1>
                            <p>{items.description}</p>
                            <p>Category: {items.category}</p>
                            <p>Stock: {items.stock}</p>
                            <p>Price: ₹{items.offerPrice} <del>₹{items.actualPrice}</del></p>
                            <p>Colors: {items.colors}</p>
                            <p>Sizes: {items.sizes}</p>
                            <p>Warranty: {items.warranty} months</p>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default Product;
