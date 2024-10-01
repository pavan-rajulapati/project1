const initialState = { userDetails: null, loading: false, error: null };

const userDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER_DETAILS':
            return { ...state, userDetails: action.payload, loading: false, error: null };

        case 'ADD_USER_DETAILS_ERROR':
            return { ...state, error: action.payload, loading: false };

        case 'ADD_USER_DETAILS_LOADING':
            return { ...state, loading: true, error: null };

        default:
            return state;
    }
};

export default userDetailsReducer;
