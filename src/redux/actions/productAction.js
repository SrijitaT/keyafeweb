import { UPLOAD_IMG, SHOW_SPINNER, TOGGLE_FLAG, ASSIGN_VAL_TO_VAR, GET_ALL_PRODUCTS, ADD_TO_CART, GET_ATTRIBUTES } from "./actionTypes";
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

const getAtrr = (key,value) => ({
    type: GET_ATTRIBUTES,
    payload: { key,value }
});


export const getAllProductDetails = (offset) => dispatch => {
    axios
        .get(serverUrl + `api/products/${offset}`, {
           /* params: {
                category
            }*/
        })
        .then(res => {
            dispatch(getAllProducts(res.data,1))
         })
}

export const getAttrAction = (urlEp,key) => dispatch => {
    axios
        .get(serverUrl + "api/"+urlEp)
        .then(res => {
            dispatch(getAtrr(key,res.data))
         })
}