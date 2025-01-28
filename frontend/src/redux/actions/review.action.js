import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

export const ReviewAction = createAsyncThunk('/get/review', async (productId, { rejectWithValue }) => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_URL}/review`,
            { params: { productId },
            withCredentials : true
        }
        );
        console.log('this is data',response.data)
        return response.data;
    } catch (error) {
        return rejectWithValue(
            error.response?.data.message || 'Failed to fetch Review'
        );
    }
});
