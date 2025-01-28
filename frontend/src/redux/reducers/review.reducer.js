import { createSlice } from "@reduxjs/toolkit";
import { ReviewAction } from "../actions/review.action";

const ReviewReducer = createSlice({
    name : 'review',
    initialState : {
        loading : false,
        data : [],
        error : null
    },
    reducers : {},
    extraReducers : (builder) => {
        builder
        .addCase(ReviewAction.pending, (state) => {
            state.loading = true
        })
        .addCase(ReviewAction.fulfilled, (state, action) => {
            state.data.push(action.payload)
            console.log('Review Data', action.payload.data)
            state.loading = false
        })
        .addCase(ReviewAction.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload.message
        })
    }
})

export default ReviewReducer.reducer