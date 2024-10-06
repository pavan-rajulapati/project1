import axios from "axios";

export const userAddressAction = (userAddress) => async (dispatch) => {
  try {
    dispatch({ type: "POST_USERADDRESS_LOADING" });

    const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user-address`, userAddress, {
      withCredentials: true,
    });

    dispatch({
      type: "POST_USERADDRESS_SUCCESS",
      payload: res.data, 
    });
  } catch (error) {
    if (error.response) {
      dispatch({
        type: "POST_USERADDRESS_ERROR",
        payload: error.response.data.message, 
      });
    } else {
      dispatch({
        type: "POST_USERADDRESS_ERROR",
        payload: "An unknown error occurred", 
      });
    }
  }
};
