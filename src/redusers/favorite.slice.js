import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    favorite : []
}

const favoriteSlice = createSlice({
    name : 'favorite',
    initialState,
    reducers : {
        setFavoriteItem(state, action) {
            if(state.favorite.find(item => item.id == action.payload.id)) {
                state.favorite = state.favorite.filter(item => item.id !== action.payload.id)
            } else {
                state.favorite = [action.payload, ...state.favorite]
            }
        }
    }
})

export const {setFavoriteItem} = favoriteSlice.actions
export default favoriteSlice.reducer