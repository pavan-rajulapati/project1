import axios from 'axios'
import {createAsyncThunk} from '@reduxjs/toolkit'

export const GetProductAction = createAsyncThunk('/get/product',async()=>{
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/`)
})