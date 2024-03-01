import { configureStore } from '@reduxjs/toolkit'
import productSlice from '../redusers/product.slice'
import categorySlice from '../redusers/category.slice'
import favoriteSlice from '../redusers/favorite.slice'
import basketSlice from '../redusers/basket.slice'

export const store = configureStore({
  reducer: {
    product : productSlice,
    category : categorySlice,
    favorite : favoriteSlice,
    basket : basketSlice
  },
})