const initialState = {
    loading : true,
    userAddress : {},
    error : null
}

const userAddressReducer = (state = initialState, action)=>{
    switch (action.type){
        case 'POST_USERADDRESS_SUCCESS':
            return {...state, userAddress : action.payload, loading: false, error : null}
        case 'POST_USERADDRESS_LOADING':
            return {...state, loading : true, error : null}
        case 'POST_USERADDRESS_ERROR':
            return {...state, loading : false, error : action.payload}
        default : 
            return state
    }
}

export default userAddressReducer