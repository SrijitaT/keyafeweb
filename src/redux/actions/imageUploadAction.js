import { UPLOAD_IMG, SHOW_SPINNER, TOGGLE_FLAG, ASSIGN_VAL_TO_VAR, GET_ALL_PRODUCTS } from "./actionTypes";
import axios from "axios";

const uploadSuccess = data => ({
    type: UPLOAD_IMG,
    payload: { data }
});
const toggleFlag = (var_name) => ({
    type: TOGGLE_FLAG,
    payload: { var_name }
})
const assignValToVar = (var_name, value) => ({
    type: ASSIGN_VAL_TO_VAR,
    payload: { var_name, value }
})
const getAllProducts = (products) => ({
    type: GET_ALL_PRODUCTS,
    payload: { products }
})

export const uploadImage = (file) => dispatch => {
    const data = new FormData()
    data.append('file', file);
    dispatch(toggleFlag("showSpinner"));
    axios
        .post("http://localhost:5000/api/upload-product-pic", data)
        .then(res => {
            dispatch(toggleFlag("showSpinner"));
            dispatch(uploadSuccess(res.data));
            setTimeout(() => dispatch(toggleFlag("uploadStatus")), 5000)
        });
};

export const getAllProductDetails = () => dispatch => {
    axios
        .get("http://localhost:5000/api/products")
        .then(res => dispatch(getAllProducts(res.data)))
}