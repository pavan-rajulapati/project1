import axios from 'axios';

export const addProduct = (productData) => async (dispatch) => {
    try {
        dispatch({ type: 'POST_PRODUCT_LOADING' });

        const res = await axios.post(
            `${process.env.REACT_APP_BACKEND_URL}/product-form`,
            productData,
            {
                withCredentials: true, 
            }
        );

        dispatch({
            type: 'POST_PRODUCT_SUCCESS',
            payload: res.data
        });
    } catch (error) {
        if (error.response && error.response.status === 404) {
            dispatch({
                type: 'POST_PRODUCT_ERROR',
                payload: error.response.data.message
            });
        } else {
            dispatch({
                type: 'POST_PRODUCT_ERROR',
                payload: 'An unknown error occurred'
            });
        }
    }
};
