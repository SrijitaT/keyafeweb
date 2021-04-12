import { UPLOAD_IMG, SHOW_SPINNER, TOGGLE_FLAG, ASSIGN_VAL_TO_VAR, GET_ALL_PRODUCTS, ADD_TO_CART } from "./actionTypes";
import axios from "axios";

const serverUrl = "http://localhost:5000/";
export const addToCart = (cartItem) => ({
    type: ADD_TO_CART,
    payload: { cartItem }
})
const getAllProducts = (products, category) => ({
    type: GET_ALL_PRODUCTS,
    payload: { products, category }
});
export const getAllProductDetails = (category) => dispatch => {
    axios
        .get(serverUrl + "api/products", {
            params: {
                category
            }
        })
        .then(res => {
            console.log("res.data----------------",res.data);
            dispatch(getAllProducts(res.data, parseInt(category)))
         })
}

export const getCategories = () => dispatch => {
    axios
        .get(serverUrl + "api/categories")
        .then(res => {
            console.log("res.data----------------",res.data);
            //dispatch(getAllProducts(res.data, parseInt(category)))
         })
}