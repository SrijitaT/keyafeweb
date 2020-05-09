import { UPLOAD_IMG, SHOW_SPINNER, TOGGLE_FLAG, ASSIGN_VAL_TO_VAR, GET_ALL_PRODUCTS } from "./actionTypes";
import axios from "axios";
const getAllProducts = (products, category) => ({
    type: GET_ALL_PRODUCTS,
    payload: { products, category }
});
export const getAllProductDetails = (category) => dispatch => {
    axios
        .get("http://localhost:5000/api/products", {
            params: {
                category
            }
        })
        .then(res => dispatch(getAllProducts(res.data, parseInt(category))))
}