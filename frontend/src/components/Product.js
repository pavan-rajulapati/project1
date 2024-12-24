import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetProductAction } from '../redux/actions/getProductAction';
import { useSearchParams } from 'react-router-dom';
import Loader from './Loader';
import {toast, Toaster} from 'react-hot-toast'
import '../styles/getProduct.css'

const Product = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query') || '';
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    const { loading, items, currentPage, totalPages, error } = useSelector((state) => state.searchProduct);

    useEffect(() => {
        try {
            dispatch(GetProductAction({ query, page }));
        } catch (error) {
            toast.error(error || error.message)
        }
    }, [query, page, dispatch]);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setPage(newPage);
        }
    };

    if (loading) {
        return (
            <div>
                <Loader />
            </div>
        );
    }

    return (
        <div>
            {!loading && !error && (
                <div className='Get-Product'>
                    <div className='container'>
                        <div className="items-container">
                            {items.length ? (
                                items.map((item) => (
                                    <div key={item._id} className='item'>
                                        <div className="image-section">
                                            {item.images.map((image, index) => (
                                                <img key={index} src={`${process.env.REACT_APP_BACKEND_URL}/${image}`} alt={`Product ${index + 1}`} />
                                            ))}
                                        </div>
                                        <h3>$ : {item.offerPrice}</h3>
                                        <h4>{item.name}</h4>
                                        <p>{item.description}</p>
                                    </div>
                                ))
                            ) : (
                            <p>No products found</p>
                            )}
                        </div>
                        <div className="pagination">
                            <button
                                onClick={() => handlePageChange(page - 1)}
                                disabled={page === 1}
                            >
                                Previous
                            </button>
                            <span>Page {currentPage} of {totalPages}</span>
                            <button
                                onClick={() => handlePageChange(page + 1)}
                                disabled={page === totalPages}
                            >
                                Next
                            </button>
                        </div>
                        <Toaster></Toaster>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Product;
