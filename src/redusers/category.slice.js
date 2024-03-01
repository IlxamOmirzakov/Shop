import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading : true,
    categories : []
}

const CategorySlice = createSlice ({
    name : 'category',
    initialState,
    reducers : {
        fetchingCategories(state) {
            state.isLoading = true
        },
        fetchedCategories(state, action) {
            state.isLoading = false,
            state.categories = action.payload
        },
        fetchedErrorCategories(state, action) {
            state.isLoading = false
        }
    }
})

export const { fetchedCategories, fetchingCategories, fetchedErrorCategories} = CategorySlice.actions
export default CategorySlice.reducer