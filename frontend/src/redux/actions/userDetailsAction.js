import axios  from "axios";

export const userDetailsAction = (userDetails) => async(dispatch)=>{
    try {
        dispatch({type : 'ADD_USER_DETAILS_LOADING'})

        const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user-details`,
            userDetails,{
                withCredentials: true,
            }
        );

        console.log(res.data)

        dispatch({type : 'ADD_USER_DETAILS', payload : res.data})


    } catch (error) {
        if(error.response){
            dispatch({type : 'ADD_USER_DETAILS_ERROR',
                payload : error.response.data.message
            })
        }else{
            dispatch({type : 'ADD_USER_DETAILS_ERROR',
                payload : 'An unknown error occured'
            })
        }
    }
}
