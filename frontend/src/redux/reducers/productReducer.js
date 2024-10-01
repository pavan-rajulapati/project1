const initialState = { product: {}, loading: true, error: null };

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'POST_PRODUCT_SUCCESS':
            return { ...state, product: action.payload, loading: false, error: null };

        case 'POST_PRODUCT_ERROR':
            return { ...state, error: action.payload, loading: false };

        case 'POST_PRODUCT_LOADING':
            return { ...state, loading: true, error: null };

        default:
            return state;
    }
};

export default productReducer;
