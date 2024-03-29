import axios from "axios";
import { fetchedErrorProduct, fetchedProduct, fetchingProduct } from "../redusers/product.slice";
import { fetchedCategories, fetchedErrorCategories, fetchingCategories } from "../redusers/category.slice";



export async function getProduct(url, dispatch) {
    dispatch(fetchingProduct())
    await axios.get(url)
    .then(res => {
        dispatch(fetchedProduct(res.data))
    })
    .catch(err => {
        dispatch(fetchedErrorProduct())
    })
}
export async function getCategories(url, dispatch) {
    dispatch(fetchingCategories())
    await axios.get(url)
    .then(res => {
        dispatch(fetchedCategories(res.data))
    })
    .catch(err => {
        dispatch(fetchedErrorCategories())
    })
}

